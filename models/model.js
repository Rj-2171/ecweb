const mongoose = require("mongoose");



var regSchema = new mongoose.Schema({ 
    name:String,
    age:Number,
    email:String,
    dob:Number,
    phone:Number,
    password:String,
    confirmpassword:String,
    isUser:{
        type:Boolean,
        default:false
    },     
});



module.exports=mongoose.model("Users",regSchema);