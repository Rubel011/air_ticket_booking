const express=require("express");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const cors=require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/userRoute");
const { flightRouter } = require("./routes/flightRoute");
const { bookingRouter } = require("./routes/bookingRoute");
const app=express();
require("dotenv").config()

app.use(cors())
app.use(express.json());

app.get("/",async(req,res)=>{
    try {
        res.status(200).json({success:"home page is working properly"})
        
    } catch (error) {
        res.status(400).json({err:error.message})
        
    }
})


app.use("/api",userRouter)
app.use("/api",bookingRouter)
app.use("/api/flights",flightRouter)
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log({success:`Server is running at port ${process.env.port}`});
        
    } catch (error) {
        console.log({err:error.message});
        
    }
})
