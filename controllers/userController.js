const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Model Location
const { userModel } = require("../models/userModel");


const registerController = async (req,res) => {
    const { name,email,password } = req.body;
    try {
        
        const isPresent = await userModel.find({email: email});

        if(isPresent.length>0) return res.status(201).json("User already exists")

        bcrypt.hash(password, 5 , async (err,hash)=>{
            if(err) return res.status(404).json("contact to administrator");
            else{
                const data = new userModel ({
                    name,
                    email,
                    password:hash
                });
                await data.save();

                return res.status(201).send({
                    "user":data,
                    "success":true,
                    "message":"User registered successfully"
                });
            };
        });
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const isPresent = await userModel.findOne({email: email});
        if(!isPresent) return res.status(401).json("User not found");

        const hashedPassword = isPresent?.password;

        bcrypt.compare(password, hashedPassword,(err,result)=>{
            if(!result) return res.status(404).json("login failed");
            else{
                const Normal_Token = jwt.sign({"masai":"masai"}, process.env.NORMAL_KEY,{expiresIn:"7d"});

                res.status(201).send({
                    "Message":"Login successful",
                    "Token": Normal_Token
                })
            }
        })

        
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


module.exports = { registerController , loginController };