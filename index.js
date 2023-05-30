const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

// Models File location
const { dbConnection } = require('./config/db');
const { userModel } = require('./models/userModel');
const { bookingModel } = require('./models/bookingModel');
const { flightModel } = require('./models/flightModel');


// Routes File location
const { userRouter } = require('./routes/userRoute');
const { flightRouter } = require('./routes/flightRoute');
const { bookingRouter } = require('./routes/bookingRoute');


// Middlewares File location
const { authentication } = require('./middlewares/authenticationMiddleware');


// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());


// Default end points
app.get('/', (req,res)=>{
    res.send(`<h1 style="text-align:center;color:blue;">Welcome in Air Ticket Booking Backend</h1>`);
})

app.use("/api" , userRouter);
app.use(authentication);
app.use("/api" , flightRouter);
app.use("/api" , bookingRouter);



app.listen(process.env.PORT , async () => {
    try {
        await dbConnection;
        console.log('Connected to database');
        console.log(`Server is running on port: ${process.env.PORT}`);
    } catch (error) {
        console.log(error.message);
    }
})