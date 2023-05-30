const express = require("express");
const { UserModel } = require("../models/userModel");
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")
const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
    let data = await UserModel.find();
    res.send({ data })
})

userRouter.post("/register", async (req, res) => {
    try {
        let { name, password, email } = req.body;
        let user = await UserModel.find({ email });
        if (user.length>0) return res.status(400).json({ err: "user has been registered already" })

        bcrypt.hash(password, 8, async (err, hash) => {
            // Store hash in your password DB.
            if (err) return res.status(401).json({ err })

            let data = new UserModel({ name, email, password: hash })
            await data.save();
            res.status(201).json({ "message": "User registered successfully", user:data })
        });

    } catch (error) {
        res.status(400).json({ err: error.message })

    }
})


userRouter.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await UserModel.find({ email });
        // console.log(password);
        if (user.length==0) return res.status(400).json({ err: "register yourself first before login" })
        bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
               let token= jwt.sign({
                    userId: user._id
                }, process.env.accessKey, { expiresIn: '1d' });
                res.status(201).json({ "message": "Login successful",token })
            } else {
                return res.status(402).json({ error: "wrong credentiatl", err })
            }

        });


    } catch (error) {
        res.status(400).json({ err: error.message })

    }
})

module.exports = { userRouter }