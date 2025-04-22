const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    cid:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required: true,
    },
    feedback:{
        type:String,
        required:true,
    }

});       

const feedbackModel = mongoose.model("feedback" , feedbackSchema);

module.exports = feedbackModel;