require('dotenv').config();

// Model Location
const { bookingModel } = require("../models/bookingModel");


const dashboardController = async (req,res) => {
    try {
        const data = await bookingModel.find();
        res.status(200).send({
            "Data" : data
        })
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


const bookingController = async (req, res) => {
    const {userId , flightId} = req.body;
    try {
        const data = new bookingModel({user: userId , flight : flightId});
        await data.save();

        res.status(201).send({
            "Message": "Booked Successfully",
            "Data": data
        })
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


module.exports = { dashboardController , bookingController };