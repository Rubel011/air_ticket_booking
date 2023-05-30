const express=require("express");
const { FlightModel } = require("../models/flightModel");
const flightRouter=express.Router();

flightRouter.get("/",async(req,res)=>{
    try {
        let data=await FlightModel.find();
        res.status(200).json({success:"get all flights",flights:data})
        
    } catch (error) {
        res.status(400).json({err:error.message})
        
    }
})
flightRouter.get("/:id",async(req,res)=>{
    try {
        let id=req.params.id
        let data=await FlightModel.find({_id:id});
        res.status(200).json({success:"single flight get route",flight:data})
        
    } catch (error) {
        res.status(400).json({err:error.message})
        
    }
})


flightRouter.post("/",async(req,res)=>{
    try {
        let flight=new FlightModel(req.body)
        await flight.save();
        res.status(201).json({success:"new flight add successful"})
    } catch (error) {
        res.status(400).json({err:error.message})
        
    }
})

flightRouter.patch("/:id",async(req,res)=>{
    try {
        let id=req.params.id
        let data=await FlightModel.findByIdAndUpdate({_id:id},req.body);
        res.status(204).json({success:"flight update successful"})
        
    } catch (error) {
        res.status(400).json({err:error.message})
        
    }
})
flightRouter.delete("/:id",async(req,res)=>{
    try {
        let id=req.params.id
        let data=await FlightModel.findByIdAndDelete({_id:id});
        res.status(202).json({success:"flight delete successful",data})
        
    } catch (error) {
        res.status(400).json({err:error.message})
        
    }
})

module.exports={flightRouter}