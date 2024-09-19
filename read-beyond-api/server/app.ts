import express from "express";
const app = express()
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import cors from 'cors'
import providerRouter from "./route/providerRoute";
import userRouter from "../server/route/userRoute"
import { handleError } from "./middleware/handleError";

// Middleware to parse JSON bodies
app.use(cors({
    origin:"http://localhost:3000"
}))
dotenv.config();

app.use(express.json());
app.use(cookieParser())
app.use("/api/v1/user",userRouter)
app.use("/api/v1/provider",providerRouter)
// app.use(handleError)



//helo
export default app;


