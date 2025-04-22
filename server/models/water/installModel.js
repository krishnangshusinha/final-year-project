const mongoose = require("mongoose");

const installSchema = new mongoose.Schema({
    uniqueID:{
        type:String,
    },
    user_id:{
        type:Number,
        required:true,
    },
    image:{
        data:Buffer,
        contentType: String,
    },
    description:{
        type:String,
    },
    name:{
        type:String,
    },
    mobileNumber:{
        type:Number,
        required:true,
    },
    area:{
        type:String,
        required:true,
    },
    pincode:{
        type:Number,
        required:true,
    },
    district:{
        type:String,
        required:true,
    },
    status:{
        type: String,
        default: "Pending",
        enum: ["Pending", "Under Review", "Initiated", "In Progress", "On Hold", "Cancelled", "Resolved"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    

},{timestamps:true});       

const installModel = mongoose.model("waterInstalls" , installSchema);

module.exports = installModel;