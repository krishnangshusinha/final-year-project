const mongoose = require("mongoose");

const uniqueIDSchema = new mongoose.Schema({

    local_id:{
        type:String,
        required:true,
    },
    local_model:{
        type:String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

},{timestamps:true});       

const uniqueIDModel = mongoose.model("uniqueID" , uniqueIDSchema);

module.exports = uniqueIDModel;