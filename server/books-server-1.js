// This is our Server for the Train Reservation System
// We need express, body-parser, cors module 
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3000 // our server will be listening in on port 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

// When our server receives a get request, let us send a hello world message
app.get('/', (req, res) => {
    res.send('Hello World! Welcome')
})

// Display some informational message while our server is listening on port 3000
app.listen(apiPort, () => console.log(`Book Collection System Server running on port ${apiPort}`))