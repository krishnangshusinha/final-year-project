const mongoose = require("mongoose");

const techniciansSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    
    complaints:Array,

},{timestamps:true});       

const techniciansModel = mongoose.model("technician" , techniciansSchema);

module.exports = techniciansModel;