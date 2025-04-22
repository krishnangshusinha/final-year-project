const feedbackModel = require("../models/feedbackModel");

// creating a new feedback
const submitFeedback = async ( req, res) => {
    try{

        const {name , cid , type , feedback} = req.body;
        
        const feed = await feedbackModel({name , cid,type,feedback}).save();
        
        res.status(201).send({
            success:true,
            message:"New Feedback created",
            feed,
        })

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message: "Error creating feedback",
        })
    }
}

// getting feedbacks Complaint type-wise
const getFeedback = async (req, res) => {
    try {
        const {department} = req.params;
        
        const element = await feedbackModel.find({type: department});

        res.status(200).send({
            success:true,
            message: "Got Feedbacks",
            element,
        })
    } 
    catch (error) {
        res.status(500).send({
            success: false,
            message:"Error in Fetching feedbacks",
            error,
        })
    }
}

module.exports = {
    submitFeedback,
    getFeedback,
}