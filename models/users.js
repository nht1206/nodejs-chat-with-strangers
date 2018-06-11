//models/users.js
const mongoose = require('mongoose')
const dbConfig = require('../config/database')
const Schema = mongoose.Schema

//connect to db server
mongoose.connect(dbConfig.getUrl())
//initialize schema for db

const usersSchema = new Schema({
    userID: { type : String, max: 25},
    strangersID: { type : String, max: 25},
    online: false,
    gender: { type : String, max: 7},  
})


/*
usersSchema.methods.getStrangersID = async function() {
    return this.strangersID
}*/
/*usersSchema.methods.setStrangers = async function(strangersID) {
    this.strangersID = strangersID
}*/
usersSchema.methods.offline = async function() {
    this.strangersID = ''
    this.online = false
}
const users = mongoose.model('Users', usersSchema)
module.exports = users



