const mongoose = require('mongoose')
const schema = require('../models/student')

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/attendance').then(()=>{
    console.log("Database connected!")
})

const studentCollection = new mongoose.model("studentCol",schema);

module.exports = studentCollection;