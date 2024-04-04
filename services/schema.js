const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
    pincode:{
        type: Number,
        required:true,
        unique:true
    },
    weatherInfo:{
        type:JSON,
        required:true
    }
})

const WeatherData = mongoose.model('WeatherData', weatherSchema);

module.exports = WeatherData;