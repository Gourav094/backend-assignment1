const express = require('express')
const { getWeather } = require('./api.controller')

const apiRouter = express.Router()

apiRouter.get('/:pincode',getWeather)

module.exports = {
    apiRouter,
}