const mongoose = require('mongoose')
const { MONGO_URL } = require('../utils/constant')

mongoose.connection.once('open',() => {
    console.log(`Connected to mongo..`)
})

mongoose.connection.on('error',() => {
    console.log(`Error during connecting to mongo`)
})

async function connectMongo(){
    await mongoose.connect(MONGO_URL)
}

module.exports = connectMongo