import dotenv from "dotenv"
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"
import connectDB from "./db/connectedDB.js";

dotenv.config({path:'./env'})
connectDB()

/*
import express from "express"
const app=express()
(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       application.on("error",(error)=>{
        console.log("ERROR:",error);
        throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log(`Server Executed`);
       })
    } catch (error) {
        console.log("ERROR !!");
        throw error
    }
})()*/