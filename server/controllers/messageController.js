const messageModel = require("../models/messageModel");

// creating a new message
const createMessage = async (req, res) => {
    try {
        const {msg , to, from, markasread, dept} = req.body;
        
        const message = msg;
        const department = dept;

        const element = await messageModel({message , to, from, markasread , department}).save();

        res.status(201).send({
            success:true,
            message:"New Message created",
            element,
            
        })

    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message: "Error creating message",
        })
    }
}

// get all notification of an admin
const getMessages = async ( req, res) => {
    try {
        const {admin} = req.params;
        
        const element = await messageModel.find({to: admin , markasread: 0});

        res.status(200).send({
            success:true,
            message: "Got Notifications",
            element,
        })
    } 
    catch (error) {
        res.status(500).send({
            success: false,
            message:"Error in Fetching notifications",
            error,
        })
    }
}

// marking a msg as read
const markasread = async (req, res) => {
    try {
        const {id} = req.params;
        
        const element = await messageModel.findByIdAndUpdate(id, {markasread: 1}, {new:true});

        res.status(200).send({
            success:true,
            message: "Marked as read",
            element,
        })
    } 
    catch (error) {
        res.status(500).send({
            success: false,
            message:"Failed to mark as read",
            error,
        })
    }
}

module.exports = {
    createMessage,
    getMessages,
    markasread,
}