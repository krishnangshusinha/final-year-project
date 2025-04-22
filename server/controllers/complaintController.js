const installModel = require("../models/electricity/installModel");
const repairModel = require("../models/electricity/repairModel");
const uniqueIDModel = require("../models/uniqueID");
const winstallModel = require("../models/water/installModel");
const wrepairModel = require("../models/water/repairModel");

// tracking a complaint
const trackComplaint = async (req, res) => {

    try{

        const complaintID = req.params.id;
        const unqiue = await uniqueIDModel.findById(complaintID)

        
        if( unqiue?.local_model === "installModel" ){
            const id = unqiue.local_id;
            const complaint = await installModel.findById(id);
            const category = "installModel";

            res.status(201).send({
                success:true,
                message:"Complaint Tracking install successfull",
                unqiue,
                complaint,
                category,
            })

        }
        else if( unqiue?.local_model === "repairModel" ){
            const id = unqiue.local_id;
            const complaint = await repairModel.findById(id);
            const category = "repairModel";
            
            res.status(201).send({
                success:true,
                message:"Complaint Tracking repair successfull",
                unqiue,
                complaint,
                category,
            })
        }
        else if( unqiue?.local_model === "winstallModel" ){
            const id = unqiue.local_id;
            const complaint = await winstallModel.findById(id);
            const category = "winstallModel";

            res.status(201).send({
                success:true,
                message:"Complaint Tracking install successfull",
                unqiue,
                complaint,
                category,
            })

        }
        else if( unqiue?.local_model === "wrepairModel" ){
            const id = unqiue.local_id;
            const complaint = await wrepairModel.findById(id);
            const category = "wrepairModel";
            
            res.status(201).send({
                success:true,
                message:"Complaint Tracking repair successfull",
                unqiue,
                complaint,
                category,
            })
        }

 
    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message: "Error in Tracking Complaint",
        })
    }

}

module.exports = {
    trackComplaint,
}