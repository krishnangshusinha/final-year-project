const adminModel = require("../models/adminModel");
const installModel = require("../models/electricity/installModel");
const repairModel = require("../models/electricity/repairModel");
const uniqueIDModel = require("../models/uniqueID");
const winstallModel = require("../models/water/installModel");
const wrepairModel = require("../models/water/repairModel");
const rinstallModel = require("../models/road/installModel");
const rrepairModel = require("../models/road/repairModel");
const dinstallModel = require("../models/drainage/installModel");
const drepairModel = require("../models/drainage/repairModel");
const ginstallModel = require("../models/garbage/installModel");
const grepairModel = require("../models/garbage/repairModel");

// For logging in Admin
const adminLogin = async(req,res) => {
    try{
        const {username , password, department} = req.body;

        // validating the entry
        if( !username || !password || !department ){
            return res.status(404).send({
                success:false,
                message:"Invalid Username or Password or Deparement not Selected"
            })
        }
        
        const check = await adminModel.findOne({username , password, department});
        if( !check ){
            return res.status(404).send({
                success:false,
                message:"Invalid combination of Username & Password",
            })
        }


        res.status(200).send({
            success: true,
            message:"Admin Login Successfull",
            username,
            department,
        });

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error in Admin Login",
            error,
        })
    }
}

// For getting all Complaints
const getAllComplaints = async(req,res) => {
    try {
        const {admin} = req.params;
        
        let model1;
        let model2;

        if( admin === "electric"){
            model1 = "installModel";
            model2 = "repairModel";
        }
        else if( admin === "water"){
            model1 = "winstallModel";
            model2 = "wrepairModel";
        }
        else if( admin === "road"){
            model1 = "rinstallModel";
            model2 = "rrepairModel";
        }
        else if( admin === "garbage"){
            model1 = "ginstallModel";
            model2 = "grepairModel";
        }
        else if( admin === "drainage"){
            model1 = "dinstallModel";
            model2 = "drepairModel";
        }

        const complaints = await uniqueIDModel.find({
            $or: [
                { local_model: model1 },
                { local_model: model2 },
            ]
        }).sort({createdAt: -1});

        res.status(200).send({
            success:true,
            countTotal: complaints.length,
            message: "All complaints displayed",
            complaints,
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error in Fetching all Complaints",
            error,
        })   
    }
}

// get the single complaint
const getComplaint = async ( req, res) => {
    try {
        const {unique} = req.params;
        const complaint = await uniqueIDModel.findById(unique);  
        const type = complaint?.local_model;

        if( complaint?.local_model === "installModel" ){
            const element = await installModel.findOne({uniqueID : unique});
            
            const description = element?.description;
            const area = element?.area;
            const pincode = element?.pincode;
            const district = element?.district;
            const time = element?.updatedAt;

            const type = "Electricity Install Request"
            res.status(200).send({
                success:true,
                message: "All complaints displayed",
                element,
                type,
                area,
                pincode,
                district,
                description,
                time,
            })
        }
        else if (complaint?.local_model === "repairModel"){
            const element = await repairModel.findOne({uniqueID : unique});

            const description = element?.description;
            const area = element?.area;
            const pincode = element?.pincode;
            const district = element?.district;
            const time = element?.updatedAt;

            const type = "Electricity Repair Request"
            res.status(200).send({
                success:true,
                message: "All complaints displayed",
                element,
                type,
                area,
                pincode,
                district,
                description,
                time,
            })
        }
        else if( complaint?.local_model === "winstallModel" ){
            const element = await winstallModel.findOne({uniqueID : unique});
            
            const description = element?.description;
            const area = element?.area;
            const pincode = element?.pincode;
            const district = element?.district;
            const time = element?.updatedAt;

            const type = "Water Install Request"
            res.status(200).send({
                success:true,
                message: "All complaints displayed",
                element,
                type,
                area,
                pincode,
                district,
                description,
                time,
            })
        }
        else if (complaint?.local_model === "wrepairModel"){
            const element = await wrepairModel.findOne({uniqueID : unique});

            const description = element?.description;
            const area = element?.area;
            const pincode = element?.pincode;
            const district = element?.district;
            const time = element?.updatedAt;

            const type = "Water Repair Request"
            res.status(200).send({
                success:true,
                message: "All complaints displayed",
                element,
                type,
                area,
                pincode,
                district,
                description,
                time,
            })
        }
        else if( complaint?.local_model === "rinstallModel" ){
            const element = await rinstallModel.findOne({uniqueID : unique});
            
            const description = element?.description;
            const area = element?.area;
            const pincode = element?.pincode;
            const district = element?.district;
            const time = element?.updatedAt;

            const type = "Road Install Request"
            res.status(200).send({
                success:true,
                message: "All complaints displayed",
                element,
                type,
                area,
                pincode,
                district,
                description,
                time,
            })
        }
        else if (complaint?.local_model === "rrepairModel"){
            const element = await rrepairModel.findOne({uniqueID : unique});

            const description = element?.description;
            const area = element?.area;
            const pincode = element?.pincode;
            const district = element?.district;
            const time = element?.updatedAt;

            const type = "Road Repair Request"
            res.status(200).send({
                success:true,
                message: "All complaints displayed",
                element,
                type,
                area,
                pincode,
                district,
                description,
                time,
            })
        }
        else if( complaint?.local_model === "dinstallModel" ){
            const element = await dinstallModel.findOne({uniqueID : unique});
            
            const description = element?.description;
            const area = element?.area;
            const pincode = element?.pincode;
            const district = element?.district;
            const time = element?.updatedAt;

            const type = "Drainage Install Request"
            res.status(200).send({
                success:true,
                message: "All complaints displayed",
                element,
                type,
                area,
                pincode,
                district,
                description,
                time,
            })
        }
        else if (complaint?.local_model === "drepairModel"){
            const element = await drepairModel.findOne({uniqueID : unique});

            const description = element?.description;
            const area = element?.area;
            const pincode = element?.pincode;
            const district = element?.district;
            const time = element?.updatedAt;

            const type = "Drainage Repair Request"
            res.status(200).send({
                success:true,
                message: "All complaints displayed",
                element,
                type,
                area,
                pincode,
                district,
                description,
                time,
            })
        }
        else if( complaint?.local_model === "ginstallModel" ){
            const element = await ginstallModel.findOne({uniqueID : unique});
            
            const description = element?.description;
            const area = element?.area;
            const pincode = element?.pincode;
            const district = element?.district;
            const time = element?.updatedAt;

            const type = "Garbage Install Request"
            res.status(200).send({
                success:true,
                message: "All complaints displayed",
                element,
                type,
                area,
                pincode,
                district,
                description,
                time,
            })
        }
        else if (complaint?.local_model === "grepairModel"){
            const element = await grepairModel.findOne({uniqueID : unique});

            const description = element?.description;
            const area = element?.area;
            const pincode = element?.pincode;
            const district = element?.district;
            const time = element?.updatedAt;

            const type = "Garbage Repair Request"
            res.status(200).send({
                success:true,
                message: "All complaints displayed",
                element,
                type,
                area,
                pincode,
                district,
                description,
                time,
            })
        }
        
    } 
    catch (error) {
        res.status(500).send({
            success:false,
            message: "Error in getting technician",
            error,
        })
    }
}

// for getting all electricity Installation requests
const getElectricityInstalls = async(req, res) => {
    try {
        
        const complaints = await installModel.find({}).sort({createdAt: -1});
        
        const local_model = "installModel";
        const ids = await uniqueIDModel.find({local_model})

        res.status(200).send({
            success:true,
            countTotal: complaints.length,
            message: "Electricity Install requests displayed",
            complaints,
            ids
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error in Fetching Electricity Install requests",
            error,
        })   
    }
}

// for getting all electricity Repair requests
const getElectricityRepairs = async(req, res) => {
    try {
        
        const complaints = await repairModel.find({}).sort({createdAt: -1});

        res.status(200).send({
            success:true,
            countTotal: complaints.length,
            message: "Electricity Repair requests displayed",
            complaints,
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error in Fetching Electricity Repair requests",
            error,
        })   
    }
}

// for deleting an invalid Install complaint
const deleteElectricInstallComplaint = async (req, res) => {

    try{
        const {id} = req.params;

        await installModel.findByIdAndDelete(id);
        
        const local_model = "installModel";
        const complaint = await uniqueIDModel.findOne({local_id: id , local_model});
        
        const newID = complaint._id;
        await uniqueIDModel.findByIdAndDelete(newID); 

        res.status(200).send({
            success:true,
            message: "Electricity Install Complaint deleted",
        })

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in deleting Electricity Install Complaints",
        })
    }

}

// for updating the status of an install request of electricity
const electricityInstallStatus = async (req, res) => {
    try {
        const {id , status} = req.params;
        
        const complaint = await installModel.findByIdAndUpdate(id, {status: status}, {new:true})
        
        res.status(200).send({
            success: true,
            message: "Status successfully updated",
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in updating status"
        })
    }
}

// updating status for common complaints 
const updateStatus = async ( req, res ) => {
    try {
        const {id , model} = req.params;
        let status = "Resolved";

        let complaint;
        
        if( model === "installModel"){
            complaint = await installModel.findOneAndUpdate({uniqueID: id}, {status: status}, {new:true})
        }
        else if( model === "repairModel"){
            complaint = await repairModel.findOneAndUpdate({uniqueID: id}, {status: status}, {new:true})
        }
        else if( model === "winstallModel"){
            complaint = await winstallModel.findOneAndUpdate({uniqueID: id}, {status: status}, {new:true})
        }
        else if( model === "wrepairModel"){
            complaint = await wrepairModel.findOneAndUpdate({uniqueID: id}, {status: status}, {new:true})
        }
        else if( model === "rinstallModel"){
            complaint = await rinstallModel.findOneAndUpdate({uniqueID: id}, {status: status}, {new:true})
        }
        else if( model === "rrepairModel"){
            complaint = await rrepairModel.findOneAndUpdate({uniqueID: id}, {status: status}, {new:true})
        }
        else if( model === "ginstallModel"){
            complaint = await ginstallModel.findOneAndUpdate({uniqueID: id}, {status: status}, {new:true})
        }
        else if( model === "grepairModel"){
            complaint = await grepairModel.findOneAndUpdate({uniqueID: id}, {status: status}, {new:true})
        }
        else if( model === "dinstallModel"){
            complaint = await dinstallModel.findOneAndUpdate({uniqueID: id}, {status: status}, {new:true})
        }
        else if( model === "drepairModel"){
            complaint = await drepairModel.findOneAndUpdate({uniqueID: id}, {status: status}, {new:true})
        }


        res.status(200).send({
            success: true,
            message: "Status successfully updated",
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in updating status"
        })
    }
}

// for deleting an invalid Repair complaint
const deleteElectricRepairComplaint = async (req, res) => {

    try{
        const {id} = req.params;

        await repairModel.findByIdAndDelete(id);

        const local_model = "repairModel";
        const complaint = await uniqueIDModel.findOne({local_id: id , local_model});

        const newID = complaint._id;
        await uniqueIDModel.findByIdAndDelete(newID); 

        res.status(200).send({
            success:true,
            message: "Electricity Repair Complaint deleted",
        })

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in deleting Electricity Repair Complaints",
        })
    }

}

// for updating the status of an repair request of electricity
const electricityRepairStatus = async (req, res) => {
    try {
        const {id , status} = req.params;
        
        const complaint = await repairModel.findByIdAndUpdate(id, {status: status}, {new:true})
        
        res.status(200).send({
            success: true,
            message: "Status successfully updated",
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in updating status"
        })
    }
}

//---------------------------------------------------------------------------------------
//WATER

// for getting water install request
const getWaterInstalls = async(req, res) => {
    try {
        
        const complaints = await winstallModel.find({}).sort({createdAt: -1});
        
        const local_model = "winstallModel";
        const ids = await uniqueIDModel.find({local_model})

        res.status(200).send({
            success:true,
            countTotal: complaints.length,
            message: "Water Install requests displayed",
            complaints,
            ids
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error in Fetching Water Install requests",
            error,
        })   
    }
}

// for getting water repair request
const getWaterRepairs = async(req, res) => {
    try {
        
        const complaints = await wrepairModel.find({}).sort({createdAt: -1});
        
        const local_model = "wrepairModel";
        const ids = await uniqueIDModel.find({local_model})

        res.status(200).send({
            success:true,
            countTotal: complaints.length,
            message: "Water Repair requests displayed",
            complaints,
            ids
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error in Fetching Water Repair requests",
            error,
        })   
    }
}

// for updating the status of an install request of water
const waterInstallStatus = async (req, res) => {
    try {
        const {id , status} = req.params;
        
        const complaint = await winstallModel.findByIdAndUpdate(id, {status: status}, {new:true})
        
        res.status(200).send({
            success: true,
            message: "Status successfully updated",
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in updating status"
        })
    }
}

// for updating the status of an repair request of water
const waterRepairStatus = async (req, res) => {
    try {
        const {id , status} = req.params;
        
        const complaint = await wrepairModel.findByIdAndUpdate(id, {status: status}, {new:true})
        
        res.status(200).send({
            success: true,
            message: "Status successfully updated",
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in updating status"
        })
    }
}

// for deleting an invalid Install complaint
const deleteWaterInstallComplaint = async (req, res) => {

    try{
        const {id} = req.params;

        await winstallModel.findByIdAndDelete(id);
        
        const local_model = "winstallModel";
        const complaint = await uniqueIDModel.findOne({local_id: id , local_model});
        
        const newID = complaint._id;
        await uniqueIDModel.findByIdAndDelete(newID); 

        res.status(200).send({
            success:true,
            message: "Water Install Complaint deleted",
        })

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in deleting Water Install Complaints",
        })
    }

}

// for deleting an invalid Repair complaint
const deleteWaterRepairComplaint = async (req, res) => {

    try{
        const {id} = req.params;

        await wrepairModel.findByIdAndDelete(id);
        
        const local_model = "wrepairModel";
        const complaint = await uniqueIDModel.findOne({local_id: id , local_model});
        
        const newID = complaint._id;
        await uniqueIDModel.findByIdAndDelete(newID); 

        res.status(200).send({
            success:true,
            message: "Water repair Complaint deleted",
        })

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in deleting Water repair Complaints",
        })
    }

}


//---------------------------------------------------------------------------------------
// ROAD

// for getting road install request
const getRoadInstalls = async(req, res) => {
    try {
        
        const complaints = await rinstallModel.find({}).sort({createdAt: -1});
        
        const local_model = "rinstallModel";
        const ids = await uniqueIDModel.find({local_model})

        res.status(200).send({
            success:true,
            countTotal: complaints.length,
            message: "Road Install requests displayed",
            complaints,
            ids
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error in Fetching Road Install requests",
            error,
        })   
    }
}

// for getting road repair request
const getRoadRepairs = async(req, res) => {
    try {
        
        const complaints = await rrepairModel.find({}).sort({createdAt: -1});
        
        const local_model = "rrepairModel";
        const ids = await uniqueIDModel.find({local_model})

        res.status(200).send({
            success:true,
            countTotal: complaints.length,
            message: "Road Repair requests displayed",
            complaints,
            ids
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error in Fetching Road Repair requests",
            error,
        })   
    }
}

// for deleting an invalid Install complaint
const deleteRoadInstallComplaint = async (req, res) => {

    try{
        const {id} = req.params;

        await rinstallModel.findByIdAndDelete(id);
        
        const local_model = "rinstallModel";
        const complaint = await uniqueIDModel.findOne({local_id: id , local_model});
        
        const newID = complaint._id;
        await uniqueIDModel.findByIdAndDelete(newID); 

        res.status(200).send({
            success:true,
            message: "Road Install Complaint deleted",
        })

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in deleting Road Install Complaints",
        })
    }

}

// for deleting an invalid Repair complaint
const deleteRoadRepairComplaint = async (req, res) => {

    try{
        const {id} = req.params;

        await rrepairModel.findByIdAndDelete(id);
        
        const local_model = "rrepairModel";
        const complaint = await uniqueIDModel.findOne({local_id: id , local_model});
        
        const newID = complaint._id;
        await uniqueIDModel.findByIdAndDelete(newID); 

        res.status(200).send({
            success:true,
            message: "Road repair Complaint deleted",
        })

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in deleting Road repair Complaints",
        })
    }

}

// for updating the status of an install request of road
const roadInstallStatus = async (req, res) => {
    try {
        const {id , status} = req.params;
        
        const complaint = await rinstallModel.findByIdAndUpdate(id, {status: status}, {new:true})
        
        res.status(200).send({
            success: true,
            message: "Status successfully updated",
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in updating status"
        })
    }
}

// for updating the status of an repair request of road
const roadRepairStatus = async (req, res) => {
    try {
        const {id , status} = req.params;
        
        const complaint = await rrepairModel.findByIdAndUpdate(id, {status: status}, {new:true})
        
        res.status(200).send({
            success: true,
            message: "Status successfully updated",
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in updating status"
        })
    }
}




//---------------------------------------------------------------------------------------
// DRAINAGE

// for getting road install request
const getDrainageInstalls = async(req, res) => {
    try {
        
        const complaints = await dinstallModel.find({}).sort({createdAt: -1});
        
        const local_model = "dinstallModel";
        const ids = await uniqueIDModel.find({local_model})

        res.status(200).send({
            success:true,
            countTotal: complaints.length,
            message: "Drain Install requests displayed",
            complaints,
            ids
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error in Fetching Drain Install requests",
            error,
        })   
    }
}

// for getting road repair request
const getDrainageRepairs = async(req, res) => {
    try {
        
        const complaints = await drepairModel.find({}).sort({createdAt: -1});
        
        const local_model = "drepairModel";
        const ids = await uniqueIDModel.find({local_model})

        res.status(200).send({
            success:true,
            countTotal: complaints.length,
            message: "Drain Repair requests displayed",
            complaints,
            ids
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error in Fetching Drain Repair requests",
            error,
        })   
    }
}

// for deleting an invalid Install complaint
const deleteDrainageInstallComplaint = async (req, res) => {

    try{
        const {id} = req.params;

        await dinstallModel.findByIdAndDelete(id);
        
        const local_model = "dinstallModel";
        const complaint = await uniqueIDModel.findOne({local_id: id , local_model});
        
        const newID = complaint._id;
        await uniqueIDModel.findByIdAndDelete(newID); 

        res.status(200).send({
            success:true,
            message: "Drain Install Complaint deleted",
        })

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in deleting Drain Install Complaints",
        })
    }

}

// for deleting an invalid Repair complaint
const deleteDrainageRepairComplaint = async (req, res) => {

    try{
        const {id} = req.params;

        await drepairModel.findByIdAndDelete(id);
        
        const local_model = "drepairModel";
        const complaint = await uniqueIDModel.findOne({local_id: id , local_model});
        
        const newID = complaint._id;
        await uniqueIDModel.findByIdAndDelete(newID); 

        res.status(200).send({
            success:true,
            message: "Drain repair Complaint deleted",
        })

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in deleting Drain repair Complaints",
        })
    }

}

// for updating the status of an install request of drainage
const drainageInstallStatus = async (req, res) => {
    try {
        const {id , status} = req.params;
        
        const complaint = await dinstallModel.findByIdAndUpdate(id, {status: status}, {new:true})
        
        res.status(200).send({
            success: true,
            message: "Status successfully updated",
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in updating status"
        })
    }
}

// for updating the status of an repair request of drainage
const drainageRepairStatus = async (req, res) => {
    try {
        const {id , status} = req.params;
        
        const complaint = await drepairModel.findByIdAndUpdate(id, {status: status}, {new:true})
        
        res.status(200).send({
            success: true,
            message: "Status successfully updated",
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in updating status"
        })
    }
}


//---------------------------------------------------------------------------------------
// GARBAGE

// for getting garbage install request
const getGarbageInstalls = async(req, res) => {
    try {
        
        const complaints = await ginstallModel.find({}).sort({createdAt: -1});
        
        const local_model = "ginstallModel";
        const ids = await uniqueIDModel.find({local_model})

        res.status(200).send({
            success:true,
            countTotal: complaints.length,
            message: "Garbage Install requests displayed",
            complaints,
            ids
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error in Fetching Garbage Install requests",
            error,
        })   
    }
}

// for getting road repair request
const getGarbageRepairs = async(req, res) => {
    try {
        
        const complaints = await grepairModel.find({}).sort({createdAt: -1});
        
        const local_model = "grepairModel";
        const ids = await uniqueIDModel.find({local_model})

        res.status(200).send({
            success:true,
            countTotal: complaints.length,
            message: "Garbage Repair requests displayed",
            complaints,
            ids
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error in Fetching Garbage Repair requests",
            error,
        })   
    }
}

// for deleting an invalid Install complaint
const deleteGarbageInstallComplaint = async (req, res) => {

    try{
        const {id} = req.params;

        await ginstallModel.findByIdAndDelete(id);
        
        const local_model = "ginstallModel";
        const complaint = await uniqueIDModel.findOne({local_id: id , local_model});
        
        const newID = complaint._id;
        await uniqueIDModel.findByIdAndDelete(newID); 

        res.status(200).send({
            success:true,
            message: "Garbage Install Complaint deleted",
        })

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in deleting Garbage Install Complaints",
        })
    }

}

// for deleting an invalid Repair complaint
const deleteGarbageRepairComplaint = async (req, res) => {

    try{
        const {id} = req.params;

        await grepairModel.findByIdAndDelete(id);
        
        const local_model = "grepairModel";
        const complaint = await uniqueIDModel.findOne({local_id: id , local_model});
        
        const newID = complaint._id;
        await uniqueIDModel.findByIdAndDelete(newID); 

        res.status(200).send({
            success:true,
            message: "Garbage repair Complaint deleted",
        })

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in deleting Garbage repair Complaints",
        })
    }

}

// for updating the status of an install request of garbage
const garbageInstallStatus = async (req, res) => {
    try {
        const {id , status} = req.params;
        
        const complaint = await ginstallModel.findByIdAndUpdate(id, {status: status}, {new:true})
        
        res.status(200).send({
            success: true,
            message: "Status successfully updated",
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in updating status"
        })
    }
}

// for updating the status of an repair request of road
const garbageRepairStatus = async (req, res) => {
    try {
        const {id , status} = req.params;
        
        const complaint = await grepairModel.findByIdAndUpdate(id, {status: status}, {new:true})
        
        res.status(200).send({
            success: true,
            message: "Status successfully updated",
        })
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in updating status"
        })
    }
}


module.exports = {
    adminLogin,
    getAllComplaints,
    getElectricityInstalls,
    getElectricityRepairs,
    deleteElectricInstallComplaint,
    electricityInstallStatus,
    deleteElectricRepairComplaint,
    electricityRepairStatus,
    getComplaint,
    updateStatus,
    getWaterInstalls,
    getWaterRepairs,
    waterInstallStatus,
    waterRepairStatus,
    deleteWaterInstallComplaint,
    deleteWaterRepairComplaint,
    getRoadInstalls,
    getRoadRepairs,
    getDrainageInstalls,
    getDrainageRepairs,
    getGarbageInstalls,
    getGarbageRepairs,
    deleteRoadInstallComplaint,
    deleteRoadRepairComplaint,
    deleteDrainageInstallComplaint,
    deleteDrainageRepairComplaint,
    deleteGarbageInstallComplaint,
    deleteGarbageRepairComplaint,
    roadInstallStatus,
    roadRepairStatus,
    drainageInstallStatus,
    drainageRepairStatus,
    garbageInstallStatus,
    garbageRepairStatus
}