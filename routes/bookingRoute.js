const express = require('express');
const bookingRouter = express.Router();

// Controller Location
const { dashboardController , bookingController } = require('../controllers/bookingController');


// This endpoint should allow the user to book flights.
bookingRouter.get("/dashboard" , dashboardController);

// This point should list all the bookings so far with the user and flight details.
bookingRouter.post("/booking" , bookingController);


module.exports = { bookingRouter };

