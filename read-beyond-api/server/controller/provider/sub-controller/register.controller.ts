import prisma from "../../../utils/prisma";
import { Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import { Multer } from "multer";

interface MulterRequest extends Request {
    files: Express.Multer.File[];
}

const registerProvider = async (req: Request & MulterRequest, res: Response) => {
    try {
        const { name, email, contact, address, providerType } = req.body;
        const documentImages = req.files; // Files uploaded via Multer

        if (!name || !email || !contact || !address || !providerType || !documentImages || documentImages.length === 0) {
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "Please fill all the fields and upload a document image." });
        }

        // If you're expecting one file, you can extract the first one
        const documentImage = documentImages[0];
        const documentImagePath = documentImage.path; // Assuming multer saves the path

        const provider = await prisma.provider.create({
            data: {
                name: name,
                email: email,
                contact: contact,
                address: address,
                providerType: providerType,
                documentImage: documentImagePath, // Store the path of the uploaded image
            }
        });

        if (!provider) {
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "Failed to create provider" });
        }

        return res.status(StatusCodes.OK).json({ success: true, message: "Provider created successfully", provider });

    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: "Internal Server Error" });
    }
};

export default registerProvider;
