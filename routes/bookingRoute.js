const express=require("express")
const { BookingModel } = require("../models/bookingModel")

const bookingRouter=express.Router()

bookingRouter.get("/dashboard",async(req,res)=>{
    try {
        let data=await BookingModel.find();
        res.status(200).json({data})
        
    } catch (error) {
        res.status(400).json({err:error.message})
        
    }
})

bookingRouter.post("/booking",async(req,res)=>{
    try {
        let {user,flight}=req.body
        let data=new BookingModel({user,flight})
         await data.save()
         res.status(201).json({"message": "Booking created successfully",flight:data});

    } catch (error) {
        res.status(400).json({err:error.message})
        
    }
})
module.exports={bookingRouter}