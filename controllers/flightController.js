require('dotenv').config();

// Model Location
const { flightModel } = require("../models/flightModel");

const allFlightController = async (req,res) => {
    try {
        
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


const singleFlightController = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


const addFlightController = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


const updateFlightController = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


const updateOrAddFlightController = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


const deleteFlightController = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


module.exports = { 
                        allFlightController,
                        singleFlightController,
                        addFlightController,
                        updateFlightController,
                        updateOrAddFlightController,
                        deleteFlightController 
                 };

// | METHOD | ENDPOINT | DESCRIPTION | STATUS CODE |
//  | 200 |
//  | 201 |
//  | 204 |
//  | 202 |
