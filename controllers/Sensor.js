
const Sensor = require("../model/Sensor")
const getSensors = (req, res) => {
    Sensor.find().then((data) =>
        res.json(data));

};
const addSensorval = (req, res) => {

    const sensor = new Sensor({
        water_level: req.body.water_level,
        moisture_level: req.body.moisture_level,
        rain_level: req.body.rain_level,
    });
    sensor.save().then(() =>
        res.status(200).json({
            success: true,
            data: sensor
        })
    ).then((err) => console.log());

};
const deleteSense = (req, res) => {

}

module.exports = {
    getSensors,
    addSensorval
};