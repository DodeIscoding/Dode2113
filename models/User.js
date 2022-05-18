const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {String
    },
    email:  {
    type: String,
    trim: true,
    unique:1
    
    },
    password:{
        type:String,
        minlength: 5
    },
    lastname:{
        type:String,
        minlength: 50 
    },
    role:{
        type:Number,
        default:0
    },
    Image: String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }
})
const User = mongoose.model("User",userSchema)
module.exports = { User }
    