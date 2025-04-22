const installModel = require("../models/drainage/installModel");
const repairModel = require("../models/drainage/repairModel");
const uniqueIDModel = require("../models/uniqueID");

// creating an drainage install complaint
const createInstallRequest = async (req,res) => {
    try{

        const {user_id , description , name , mobileNumber, area, pincode, district} = req.body;
        
        const complaint = await installModel({user_id,description,name, mobileNumber,area,pincode,district}).save();
        
        const local_model = "dinstallModel";
        const local_id = complaint._id;

        const unique = await uniqueIDModel({local_id, local_model}).save();
        const uid = unique._id;

        await installModel.findByIdAndUpdate(local_id , {uniqueID: uid})

        res.status(201).send({
            success:true,
            message:"New Install complaint created",
            complaint,
            unique,
        })

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message: "Error create Electricity Install Request",
        })
    }
}

// creating an drainage repair complaint
const createRepairRequest = async (req,res) => {
    try{

        const {user_id , description , name , mobileNumber, area, pincode, district} = req.body;
        
        const complaint = await repairModel({user_id,description,name, mobileNumber,area,pincode,district}).save();
        
        const local_model = "drepairModel";
        const local_id = complaint._id;

        const unique = await uniqueIDModel({local_id, local_model}).save();
        const uid = unique._id;

        await repairModel.findByIdAndUpdate(local_id , {uniqueID: uid})

        res.status(201).send({
            success:true,
            message:"New Repair complaint created",
            complaint,
            unique,
        })

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message: "Error create Electricity Install Request",
        })
    }
}



module.exports = {
    createInstallRequest,
    createRepairRequest,
}