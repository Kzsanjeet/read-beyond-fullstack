import { Request, Response } from "express";
import prisma from "../../../utils/prisma";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // console.log(req.body)
    // console.log(email)
    // console.log(password)

    // Debugging to check if email and password are coming through correctly
    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "Email and password are required" });
    }

    // Find the user by email
    const user = await prisma.superuser.findUnique({
      where: { email },
    });

    // Check if user exists
    if (!user) {
      return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "Invalid email" });
    }

    // Validate password
    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "Invalid password" });
    }

    // Generate refresh token
    const refreshToken = jwt.sign(
      { id: user.id },
      process.env.REFRESH_SECRET_KEY_ADMIN as string,
      { expiresIn: "1h" }
    );

    // Set the refresh token in cookies
    const oneDayInMillis = 24 * 60 * 60 * 1000;
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: oneDayInMillis,
    });

    return res
      .status(StatusCodes.OK)
      .json({ success: true, message: "Login successful", refreshToken });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: error});
  }
};

export default loginAdmin;
