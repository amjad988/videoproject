import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async()=>{
    try {
       const connectionINS= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST: ${connectionINS.connection.host}`);
    } catch (error) {
        console.log("Mongo Connection Error",error);
        process.exit(1)
    }
}
export default connectDB