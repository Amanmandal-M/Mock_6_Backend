const express = require('express');
const cors = require('cors');
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
require('dotenv').config();

const app = express();

// Models File location
const { dbConnection } = require('./config/db');


// Routes File location
const { userRouter } = require('./routes/userRoute');
const { flightRouter } = require('./routes/flightRoute');
const { bookingRouter } = require('./routes/bookingRoute');


// Middlewares File location
const { authentication } = require('./middlewares/authenticationMiddleware');


// Middlewares
app.use(cors());
app.use(express.json());


// --------------->>>>>>>> Swagger <<<<<<<<-------------------
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Air Ticket Booking Backend System",
			version: "1.0.0",
			description: "This is Air Ticket Booking System where user can register with their credentials and login with their credentials and after authentication user can view the flights and book flights , edit the booked flights , and delete the booking.",
		},
		servers: [
			{
				url: "https://air-ticket-booking-vn6t.onrender.com/api",
			},
		],
	},
	apis: ["./swaggerDocs/*.js"],
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));


// Default end points
app.get('/', (req,res)=>{
    res.send(`<h1 style="text-align:center;color:blue;">Welcome in Air Ticket Booking Backend</h1>`);
})

app.use("/api" , userRouter);
app.use(authentication);
app.use("/api" , flightRouter);
app.use("/api" , bookingRouter);


// Server Listening Here
app.listen(process.env.PORT , async () => {
    try {
        await dbConnection;
        console.log('Connected to database');
        console.log(`Server is running on port: ${process.env.PORT}`);
    } catch (error) {
        console.log(error.message);
    }
})