import dotenv from "dotenv"
import express from "express"
const app=express()
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"
import connectDB from "./db/connectedDB.js";

dotenv.config({path:'./env'})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`Server Listening At ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("DB connection Failed:" ,err);
})















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