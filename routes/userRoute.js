const express = require('express');

const userRouter = express.Router();

// Controller Location
const { registerController , loginController } = require('../controllers/userController');



//  This endpoint should allow users to register.
userRouter.post("/register" , registerController);

// This endpoint should allow users to login.
userRouter.post("/login" , loginController);


module.exports = { userRouter };