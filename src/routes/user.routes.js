import { Router } from "express";
import { registerUser,errorChaker } from "../controllers/user.controller.js";
const router=Router()
import {upload} from "../middlewares/multer.middleware.js"


router.route("/error").get(errorChaker)
router.route("/register").post(
    upload.fields(
        [
            {
                name:"avatar",
                maxCount:1
            },
            {
                name:"coverImage",
                maxCount:1
            }
        ]
    ),
    registerUser)

export default router