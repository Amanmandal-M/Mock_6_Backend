require('dotenv').config();

// Model Location
const { flightModel } = require("../models/flightModel");

const allFlightController = async (req,res) => {
    try {
       const data = await flightModel.find();
       res.status(200).send({
        "flights":data
       }) 
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


const singleFlightController = async (req, res) => {
    const Id = req.params.id;
    try {
        const data = await flightModel.findOne({"_id":Id});
        res.status(200).json(data);
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


const addFlightController = async (req, res) => {
    const {airline,
        flightNo,
        departure,
        arrival,
        departureTime,
        arrivalTime,
        seats,
        price} = req.body

    try {
        const data = new flightModel({airline,
            flightNo,
            departure,
            arrival,
            departureTime: new Date(),
            arrivalTime: new Date(),
            seats,
            price
        });
        await data.save();

        res.status(201).send({
            "Message":"Flight Added Successfully",
            "Data":data
        })
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


const updateFlightController = async (req, res) => {
    const ID = req.params.id;
    const payload = req.body;
    try {

        const isPresent = await flightModel.findOne({_id:ID})

        if(!isPresent) return res.status(404).send({
            "Error": "Flights not found"
        })

        const data = await flightModel.findByIdAndUpdate({_id:ID},payload);

        res.status(204).send({
            "Message": "Flights saved successfully",
            "data":data
        });

    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


const updateOrAddFlightController = async (req, res) => {
    const ID = req.params.id;
    const payload = req.body;
    try {

        const isPresent = await flightModel.findOne({_id:ID})

        if(!isPresent) {
            const addData = new flightModel(payload);
            await addData.save();

            return res.status(204).send({
                "Message": "Flights Updated successfully",
                "data":data
            });
        }

        const data = await flightModel.findByIdAndUpdate({_id:ID},payload);

        res.status(204).send({
            "Message": "Flights Updated successfully",
            "data":data
        });

    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


const deleteFlightController = async (req, res) => {
    const ID = req.params.id;
    try {

        const isPresent = await flightModel.findOne({_id:ID})

        if(!isPresent) return res.status(404).send({
            "Error": "Flights not found"
        })

        const data = await flightModel.findByIdAndDelete({_id:ID});

        res.status(202).send({
            "Message": "Flight Deleted successfully"
        });

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
