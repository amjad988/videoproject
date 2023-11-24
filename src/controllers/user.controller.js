import { asyncHandler } from "../utiles/ayncHandler.js";
import {ApiError} from "../utiles/ApiError.js"
import { User } from "../models/user.model.js";
import {uploaudOnCloudinary} from "../utiles/cloudnary.js"
import { ApiResponse } from "../utiles/ApiRes.js";
const registerUser=asyncHandler(async(req,res)=>{
     const {fullname,email,username,password}=req.body 
     console.log("email:",email);

     if([fullname,email,username,password].some((field)=>field?.trim()===""))
      {
        throw new ApiError(400,"All fields are required")
      }

      const existedUser= User.findOne(
        {
          $or:[{ username },{ email }]
        }
      )
      if(existedUser)
      {
        throw new ApiError(409,"User with email or Username alredy existed")
      }

     const avatarLocalPath= req.files?.avatar[0]?.path;
     const coverImageLocalPath= req.files?.coverImage[0]?.path
    
     if(!avatarLocalPath)
     {
      throw new ApiError(400,"Avatar file is required")
     }

    const avatar= await uploaudOnCloudinary(avatarLocalPath)
    const coverImage=await uploaudOnCloudinary(coverImageLocalPath)
    
    if(!avatar)
    {
      throw new ApiError(400,"Avatar file Required")
    }
  
    const user=await User.create(
      {
        fullname,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
      }
    )

    const createdUser=await User.findById(user._id)
    .select("-password -refreshToken")

    if(!createdUser)
    {
      throw new ApiError(500,"Something went wrong while Register a user")
    }

    return res.status(201).json(
      new ApiResponse(200,createdUser,"User Register Succeed")
    )
    
  })
    
    
    
    


const errorChaker=asyncHandler(async(req,res)=>{
  res.status(200).json({
    message:"Find the Error"
  })
})

export {registerUser,errorChaker}