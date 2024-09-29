import { Request, Response, NextFunction } from "express";
import prisma from "../../../utils/prisma";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
// import { uploadFile } from "../../../utils/cloudinary"; // Uncomment if using file upload
// import multer from "multer"; // Uncomment if using multer for file upload

const registerAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) { // Fixed: should check for password
      return res.status(StatusCodes.BAD_REQUEST).json({ message: "Please fill all the fields" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    
    // If you are uploading a file, handle it here
    // const documentFile = req.file; 
    // const uploadDocs = await uploadFile(documentFile.path, "provider");

    // if (!uploadDocs) {
    //   return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: "Failed to upload document" });
    // }

    // Create the provider
    const admin = await prisma.superuser.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    if (!admin) {
      return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "Failed to register admin" });
    }

    res.status(StatusCodes.OK).json({ success: true, message: "Registered successfully", admin });
  } catch (error: any) {
    // Pass the error to the next middleware (if you want to handle it globally)
    next(error); // Optionally, use next to pass the error to the global error handler
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
  }
};

export default registerAdmin;
