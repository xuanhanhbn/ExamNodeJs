const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minLength:6,
        maxLength:255
    },
    email:{
        type:String,
        required: true,
        unique: true,
        minLength:6,
        maxLength:255
    },
    password:{
        type:String,
        required: true,
        minLength:6,
        maxLength:255
    },
    avatar: String,
    permissions: Array
});
module.exports = mongoose.model("User",userSchema);