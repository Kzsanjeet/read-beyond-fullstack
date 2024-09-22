import { StatusCodes } from "http-status-codes";
import prisma from "../../../utils/prisma";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendOtpEmail, generateOtp } from "../../../utils/genrateOtp";

const loginProvider = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ success: false, message: "Please fill all the required fields" });
    }

    const logProvider = await prisma.provider.findUnique({
      where: {
        email: email,
      },
    });

    if (!logProvider) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ success: false, message: "Email not found" });
    }

    const isValidPassword = await bcrypt.compare(password, logProvider.password);
    if (!isValidPassword) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ success: false, message: "Invalid password" });
    }

    // If 2FA is disabled, proceed with generating tokens
    if (logProvider.twoFAEnabled === false) {
      const refreshToken = jwt.sign(
        { id: logProvider.id },
        process.env.REFRESH_SECRETKEY_PROVIDER as string
      );
      const accessToken = jwt.sign(
        { id: logProvider.id },
        process.env.ACCESS_SECRETKEY_PROVIDER as string
      );

      if (accessToken && refreshToken) {
        const oneHourInMillis = 60 * 60 * 1000;
        const oneDayInMillis = 24 * 60 * 60 * 1000;

        res.cookie("accessToken", accessToken, {
          httpOnly: true,
          secure: true,
          maxAge: oneHourInMillis,
        });
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: true,
          maxAge: oneDayInMillis,
        });

        return res
          .status(200)
          .json({ success: true, message: "Login successful", accessToken, refreshToken });
      }
    } else {
      // If 2FA is enabled, send OTP
      const otp = generateOtp(6);
      const token = jwt.sign(
        { email: email },
        process.env.TWOFA_PASSWORD_SECRET as string,
        { expiresIn: "10m" }
      );
      sendOtpEmail(logProvider.email, otp);

      // Save OTP and timestamp to provider
      await prisma.provider.update({
        where: { id: logProvider.id },
        data: { otp: otp, createdAt: new Date() },
      });

      return res.status(200).json({
        success: true,
        message: "OTP sent to your email and token generated",
        token,
        twoFAEnabled: logProvider.twoFAEnabled,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error logging in user:", error.message, error.stack);
    } else {
      console.error("Unknown error:", error);
    }
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Validate 2FA token and OTP
const validateToken = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const { otp } = req.body;

    if (!token || !otp) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ success: false, message: "Invalid request" });
    }

    const decoded = jwt.verify(token, process.env.TWOFA_PASSWORD_SECRET as string);
    const { email } = decoded as { email: string };

    const checkUser = await prisma.provider.findUnique({
      where: { email },
    });

    if (!checkUser) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ success: false, message: "User not found" });
    }

    // Check if OTP matches
    if (checkUser.otp !== otp) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ success: false, message: "Invalid OTP" });
    }

    // Login successful after 2FA validation
    return res
      .status(StatusCodes.OK)
      .json({ success: true, message: "2FA completed. Logging in.", user: checkUser });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error validating token:", error.message, error.stack);
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Invalid or expired token",
      });
    } else {
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
};

export { loginProvider, validateToken };
