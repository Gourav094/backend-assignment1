const axios = require("axios")
const weatherData = require('../schema')
const { WEATHER_API_KEY } = require("../constant")
const { getLocationInfo, getWeatherInfo } = require("../models/api.model")


async function getWeather(req,res) {
    const pincode = req.params.pincode

    const storedPincode = await weatherData.findOne({pincode})

    if (storedPincode) {
        console.log('Weather data found in database');
        return res.status(200).json({
            data: storedPincode.weatherInfo
        });
    }

    const locationInfo = await getLocationInfo(pincode)
    const weather = await getWeatherInfo(locationInfo)

    if(!weather){
        return res.status(400).json({
            error:"There occur some errors on fetching data"
        })
    }

    await weatherData.create({
        pincode:pincode,
        weatherInfo:weather
    })
    
    res.status(200).json({
        data:weather
    })
}

module.exports = {
    getWeather
}