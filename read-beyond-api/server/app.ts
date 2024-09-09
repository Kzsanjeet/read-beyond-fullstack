import express from "express";
const app = express()
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import cors from 'cors'

import userRouter from "../server/route/userRoute"

// Middleware to parse JSON bodies
app.use(cors({
    origin:"http://localhost:3000"
}))
dotenv.config();
app.use(express.json());
app.use(cookieParser())
app.use("/api/v1/user",userRouter)




export default app;


