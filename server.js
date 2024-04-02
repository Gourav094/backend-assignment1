const express = require('express')
const { apiRouter } = require('./routes/api.router')
const connectMongo = require('./mongo')
const { MONGO_URL } = require('./constant')
const app = express()

const PORT = 3000

connectMongo(MONGO_URL)

app.use(apiRouter)

app.listen(PORT,() => {
    console.log(`Server running on http://localhost:${PORT}`)  
})