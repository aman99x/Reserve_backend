const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const tripsSchema = new mongoose.Schema({
    source: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    departureTime:
    {
        type: String,
        required: true
    },
    arrivalTime:
    {
        type: String,
        required: true
    },
    buses:
        [{
            type: ObjectId,
            ref: "BusDetails"
        }],
});
module.exports = mongoose.model('TripsRoute', tripsSchema);