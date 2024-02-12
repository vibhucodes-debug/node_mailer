
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
        firstname:{
            type:String,
            trim:true,
            required:true
        },
        lastname:{
            type:String,
            trim:true,
            required:false
        },
        email:{
            type:String,
            trim:true,
            reqruied:true,
            unique:true
        },
        password:{
            type:String,
            reqruied:true
        },
        isVerified:{
            type:Boolean,
            default:false
        }
},{timestamps:true})

module.exports = mongoose.model("Users",UserSchema)

