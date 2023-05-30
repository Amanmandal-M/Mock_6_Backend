const express = require('express');

// Controllers Location
const { 
        allFlightController,
        singleFlightController,
        addFlightController,
        updateFlightController,
        updateOrAddFlightController,
        deleteFlightController 
    } = require('../controllers/flightController');

const flightRouter = express.Router();

// This endpoint should return a list of all available flights.
flightRouter.get("/flights",allFlightController);

// This endpoint should return the details of a specific flight identified by its ID.
flightRouter.get("/flights/:id",singleFlightController);

// This endpoint should allow users to add new flights to the system.
flightRouter.post("/flights",addFlightController);

// This endpoint should allow users to update the details of a specific flight identified by its ID.
flightRouter.patch("/flights/:id",updateFlightController);

// This endpoint should allow users to update the details of a specific flight identified by its ID and if doesn't exist so it creates new for one.
flightRouter.put("/flights/:id",updateOrAddFlightController);

// This endpoint should allow users to delete a specific flight identified by its ID.
flightRouter.delete("/flights/:id",deleteFlightController);


module.exports = { flightRouter };