//app.js
const express = require('express')
const cookie = require('cookie-parser')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
let port = process.env.PORT || 3000

app.use('/assets', express.static(__dirname + '/api/public'))
app.use(morgan('dev'))
app.use(cookie())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

require('./api/chatWithStrangers')(app)

app.listen(port, () => {
    console.log('Server listening on port: ', port)
})
