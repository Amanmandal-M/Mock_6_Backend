require('dotenv').config();

// Model Location
const { bookingModel } = require("../models/bookingModel");


const dashboardController = async (req,res) => {
    try {
        
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


const bookingController = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(404).send({
            "Error": error.message
        })
        console.log(error.message)
    }
}


module.exports = { dashboardController , bookingController }

// | METHOD | ENDPOINT | DESCRIPTION | STATUS CODE |

// | POST | /api/booking |  | 201 |
// | GET | /api/dashboard |  | 200 |