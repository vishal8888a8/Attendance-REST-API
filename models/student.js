const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    second_name:{
        type:String,
        required:false
    },
    roll:{
        type:Number,
        required:true,
        unique:true
    },
    checkin:{
        type:String,
        required:true,
        validate(value){
            if ( value.indexOf(':') == -1 )
                throw new Error("Format incorrect for checkin time")
        }
    },
    checkout:{
        type:String,
        required:false,
        default:"NA"
    },
})

module.exports = schema;