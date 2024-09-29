import express from "express"
import loginAdmin from "../controller/admin/sub-controller/login.controller"
import registerAdmin from "../controller/admin/sub-controller/register.controller"
const adminRouter = express.Router()

adminRouter.route("/login").post(loginAdmin)
adminRouter.route("/register").post(registerAdmin)

export{adminRouter}