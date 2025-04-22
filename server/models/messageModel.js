const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({

    message:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    from:{
        type:String,
        required:true,
    },
    markasread: {
        type:Number,
        required: true,
    },
    department:{
        type:String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});       

const messageModel = mongoose.model("message" , messageSchema);

module.exports = messageModel;