import {v2 as cloudinary} from 'cloudinary';
import fs from "fs" 

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key:process.env.CLOUDINARY_API_KEY , 
  api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploaudOnCloudinary=async (localFilePath)=>
{
    try {
        if(!localFilePath) return null
        //uploadFile
       const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been uploaded
        //console.log("File Uploaded Succeed",response.url);
       fs.unlinkSync(localFilePath)
        return response

    } catch (error) {
        fs.unlinkSync(localFilePath)//remove the file 
    }
}

export {uploaudOnCloudinary}