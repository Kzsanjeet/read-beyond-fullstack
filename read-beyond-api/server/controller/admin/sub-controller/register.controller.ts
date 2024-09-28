import { Request, Response, NextFunction } from "express";
import prisma from "../../../utils/prisma";
import { StatusCodes } from "http-status-codes";
import { uploadFile } from "../../../utils/cloudinary";
import multer from "multer"

interface MulterRequest extends Request {
  file?: Express.Multer.File; // 'file' for a single file upload
}

const registerProvider = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { providerType } = req.body;

    if (providerType === "Person") {
      await registerPersonProvider(req, res, next); // Call the function
    } else {
      await registerInstitutionProvider(req, res, next); // Call the function
    }
  } catch (error: any) {
    console.log(error);
    res
      .status(StatusCodes.BAD_GATEWAY)
      .json({ success: false, error: error.message, message: "Milena" });
  }
};

const registerPersonProvider = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, address, contact , providerType } = req.body;
    const documentFile = req.file; // Ensure the file is captured properly

    if (!name || !email || !address || !contact || !documentFile) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Please fill all the fields" });
    }

    const uploadDocs = await uploadFile(documentFile.path, "provider");

    if (!uploadDocs) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Failed to upload document" });
    }

    // Create the provider
    const provider = await prisma.provider.create({
      data: {
        name,
        email,
        address,
        contact,
        providerType,
        documentImage: uploadDocs.secure_url,
        documentImagId: uploadDocs.public_id,
      },
    });

    if (!provider) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ success: false, message: "Failed to register provider" });
    }

    res
      .status(StatusCodes.OK)
      .json({ success: true, message: "Register Request Sent successfully", provider });
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: error.message });
  }
};

const registerInstitutionProvider = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, address, contact, providerType } = req.body;
    const documentFile = req.file; // Ensure the file is captured properly

    if (!name || !email || !address || !documentFile) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ success: false, message: "All fields are required" });
    }

    const uploadDocs = await uploadFile(documentFile.path, "provider");

    if (!uploadDocs) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Failed to upload document" });
    }

    // Create the provider
    const provider = await prisma.provider.create({
      data: {
        name,
        email,
        contact,
        address,
        providerType,
        documentImage: uploadDocs.secure_url,
        documentImagId: uploadDocs.public_id,
      },
    });

    if (!provider) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ success: false, message: "Failed to register provider" });
    }

    res
      .status(StatusCodes.OK)
      .json({ success: true, message: "Register Request Sent successfully", provider });
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: error.message });
  }
};

export default registerProvider;
