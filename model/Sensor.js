const mongoose = require("mongoose");

const SensorsSchema = new mongoose.Schema({
    water_level: {
        type: Number,
        required: true,
    },
    moisture_level: {
        type: Number,
        required: true,
    },
    rain_level: {
        type: Number,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },

});
module.exports = mongoose.model("Sensor", SensorsSchema);

