import { asyncHandler } from "../utiles/ayncHandler.js";


const registerUser=asyncHandler(async(req,res)=>{
      res.status(200).json({
        message:"Bawa G Chass A Gi"
    })
})

const errorChaker=asyncHandler(async(req,res)=>{
  res.status(200).json({
    message:"Find the Error"
  })
})

export {registerUser,errorChaker}