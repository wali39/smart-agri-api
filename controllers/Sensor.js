
const Sensor = require("../model/Sensor")
const getSensors = (req, res) => {
    Sensor.find().then((data) =>
        res.json(data));

};
const addSensorval = (req, res) => {

    const sensor = new Sensor({
        title: req.body.title,
        value: req.body.value,
    });
    sensor.save().then(() =>
        res.send(200)
    ).then((err) =>
        console.log(err));

};

module.exports = {
    getSensors,
    addSensorval
};