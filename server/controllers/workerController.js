const techniciansModel = require("../models/technician");

// logging in the technician
const workersLogin = async (req, res) => {
    try{
        const { password, phone} = req.body;

        // validating the entry
        if(  !password || !phone ){
            return res.status(404).send({
                success:false,
                message:"Invalid Phone number or Password not Selected"
            })
        }
        
        const check = await techniciansModel.findOne({phone , password});
        if( !check ){
            return res.status(404).send({
                success:false,
                message:"Invalid combination of Username & Password",
            })
        }

        const username = check?.username;
        const complaints = check?.complaints;

        res.status(200).send({
            success: true,
            message:"Technician Login Successfull",
            username,
            phone,
            complaints,
            check,
        });

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error in Technician Login",
            error,
        })
    }
}

// assigning a complaint to an technician
const assignWorker = async (req, res) => {
    try {
        const {phone , unique} = req.params;

        const ele = await techniciansModel.findOne({phone : phone});
        const id = ele._id;

        let a = [...ele.complaints];

        // if the project is already assigned then dont do anything, but if not already present then add it
        if( a.includes(unique) ){
            res.status(200).send({
                success: true,
                message:"Assigned project",
                element,
            });
        }
        else{
            a.push(unique);

            const element = await techniciansModel.findByIdAndUpdate(id ,   { complaints : a } );

            res.status(200).send({
                success: true,
                message:"Assigned project",
                element,
            });
        }

    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error in Assigning",
            error,
        })
    }
}

// get information of a technician
const infoTechnician = async (req, res) => {
    try {
        const {phone} = req.params;

        const element = await techniciansModel.findOne({phone: phone});
        const complaints = element?.complaints;

        res.status(200).send({
            success: true,
            message:"Obtained Information of Technician",
            complaints,
        });

    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error in Obtaining information",
            error,
        })
    }
}

module.exports = {
    workersLogin,
    assignWorker,
    infoTechnician,
}