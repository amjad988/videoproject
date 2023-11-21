import { Router } from "express";
import { registerUser,errorChaker } from "../controllers/user.controller.js";
const router=Router()

router.route("/error").get(errorChaker)
router.route("/register").post(registerUser)

export default router