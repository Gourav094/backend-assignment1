require('dotenv').config()

const WEATHER_API_KEY = process.env.WEATHER_API_KEY

const MONGO_URL = process.env.MONGO_URL

module.exports = {
    WEATHER_API_KEY,
    MONGO_URL
}