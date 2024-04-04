const http = require('http')
const app = require('./app')
const server = http.createServer(app)
const connectMongo = require('./services/mongo')
const PORT = 3000

async function connectDB(){
    await connectMongo()
}

connectDB()

server.listen(PORT,() => {
    console.log(`server running on ${PORT}`)
})