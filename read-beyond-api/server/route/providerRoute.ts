import express from "express"
import { registerProvider } from "../controller/provider"
import uploader from "../utils/multer"
const providerRouter = express.Router()

providerRouter.post("/provider-register",uploader.single("image"), registerProvider)

export default providerRouter