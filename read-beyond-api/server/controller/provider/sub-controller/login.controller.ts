import { StatusCodes } from "http-status-codes";
import prisma from "../../../utils/prisma";
import { Request,Response } from "express";
import { provider } from "@prisma/client";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendOtpEmail,generateOtp} from "../../../utils/genrateOtp";

const loginProvider = async(req:Request,res:Response) =>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(StatusCodes.BAD_REQUEST).json({success:false , message:"Please fill all the required field"})
        }

        const logProvider = await prisma.provider.findUnique({
            where:{
                email:email
                },
        })
        if(!logProvider){
            return res.status(StatusCodes.NOT_FOUND).json({success:false , message:"Email not found"})
        }
        const isValidPassword = await bcrypt.compare(password,logProvider.password);
        if(!isValidPassword){
            return res.status(StatusCodes.UNAUTHORIZED).json({success:false , message:"Invalid password"})
        }
        if(logProvider.twoFAEnabled){
            const refreshToken = jwt.sign({id: logProvider.id}, process.env.REFRESH_SECRETKEY_PROVIDER as string)    
            const accessToken = jwt.sign({id: logProvider.id}, process.env.ACCESS_SECRETKEY_PROVIDER as string)

            if (accessToken && refreshToken) {
                const oneHourInMillis = 60 * 60 * 1000;
                const oneDayInMillis = 24 * 60 * 60 * 1000;
        
                res.cookie("accessToken", accessToken, { httpOnly: true, secure: true, maxAge: oneHourInMillis });
                res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true, maxAge: oneDayInMillis });
        
                return res.status(200).json({ success: true, message: "Login successful", accessToken, refreshToken });
            }

        }else{
            const otp = generateOtp(6)
            const token = jwt.sign({email:email},process.env.TWOFA_PASSWORD_SECRET as string, {expiresIn:"10m"});
            sendOtpEmail(logProvider.email,otp)
             // Save OTP and timestamp to user (or to a separate table for OTPs)
            await prisma.user.update({
                where: { id: logProvider.id },
                data: { otp:otp, otpTimestamp: new Date() },
            });
            
            const is2FAEnable = logProvider.twoFAEnabled
            // console.log(otp)
            return res.status(200).json({ success: true, message: "OTP sent to your email and token also generated", token, is2FAEnable });

            }
            
        } catch (error) {
        if (error instanceof Error) {
            console.error("Error logging in user:", error.message, error.stack);
          } else {
            console.error("Unknown error:", error);
          }
          return res.status(500).json({ success: false, message: "Internal server error" });
        }
    }