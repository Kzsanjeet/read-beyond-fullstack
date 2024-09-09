import express from "express";
const userRouter = express.Router()

import {createUser, getSpecificData, getUser, loginUser, requestToChangePassword, resetPassword, validateTokenForTwoFA} from "../controller/userController"


userRouter.route("/register").post(createUser)
userRouter.route("/get-user").get(getUser)
userRouter.route("/get-specific").get(getSpecificData)
// for login in user
userRouter.route("/login").post(loginUser)
userRouter.route("/resetPassword").post(resetPassword)
userRouter.route("/request-to-change-password").post(requestToChangePassword)
userRouter.route("/validateToken-for-twofa").post(validateTokenForTwoFA)


export default userRouter;
