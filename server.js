const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }))
MongoClient.connect('mongodb-connection-string', (err, client) => {
    
})

app.listen(3000, (req, res) => {
    console.log('listening on 3000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // sendFile serves the client the file in the parameter
    // _dirname is the current directory
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})