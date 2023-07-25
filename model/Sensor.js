const mongoose = require("mongoose");

const SensorsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});
module.exports = mongoose.model("Sensor", SensorsSchema);

