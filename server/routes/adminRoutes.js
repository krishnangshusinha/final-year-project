const express = require("express");
const { adminLogin, getAllComplaints, getElectricityInstalls, getElectricityRepairs, deleteElectricInstallComplaint, electricityInstallStatus, deleteElectricRepairComplaint, electricityRepairStatus, getComplaint, updateStatus, getWaterInstalls, getWaterRepairs, waterInstallStatus, waterRepairStatus, deleteWaterInstallComplaint, deleteWaterRepairComplaint, getRoadInstalls, getRoadRepairs, getDrainageInstalls, getDrainageRepairs, getGarbageInstalls, getGarbageRepairs, deleteRoadInstallComplaint, deleteRoadRepairComplaint, deleteDrainageInstallComplaint, deleteDrainageRepairComplaint, deleteGarbageInstallComplaint, deleteGarbageRepairComplaint, roadInstallStatus, roadRepairStatus, drainageInstallStatus, drainageRepairStatus, garbageInstallStatus, garbageRepairStatus } = require("../controllers/adminController");
const router = express.Router();

// routes

// creating new record for new installation complaint
router.post("/", adminLogin);


// For Electricity Department

// getting all  complaints
router.get("/all/:admin", getAllComplaints);
// getting a single complaint
router.get("/:unique", getComplaint);

// getting electricity install and repair complaints
router.get("/electricity/installs", getElectricityInstalls);
router.get("/electricity/repairs", getElectricityRepairs);
router.delete("/delete/electricity/installs/:id" , deleteElectricInstallComplaint);
router.delete("/delete/electricity/repairs/:id" , deleteElectricRepairComplaint);
router.put("/electricity/install/:id/:status" , electricityInstallStatus);
router.put("/electricity/repair/:id/:status", electricityRepairStatus);


router.put("/:model/:id" , updateStatus);


// For Water Department
router.get("/water/installs", getWaterInstalls);
router.get("/water/repairs", getWaterRepairs);
router.put("/water/install/:id/:status" , waterInstallStatus);
router.put("/water/repair/:id/:status" , waterRepairStatus);
router.delete("/delete/water/installs/:id" , deleteWaterInstallComplaint);
router.delete("/delete/water/repairs/:id" , deleteWaterRepairComplaint);


// for Road Department
router.get("/road/installs", getRoadInstalls);
router.get("/road/repairs", getRoadRepairs);
router.delete("/delete/road/installs/:id" , deleteRoadInstallComplaint);
router.delete("/delete/road/repairs/:id" , deleteRoadRepairComplaint);
router.put("/road/install/:id/:status" , roadInstallStatus);
router.put("/road/repair/:id/:status" , roadRepairStatus);


// for Drainage Department 
router.get("/drainage/installs", getDrainageInstalls);
router.get("/drainage/repairs", getDrainageRepairs);
router.delete("/delete/drainage/installs/:id" , deleteDrainageInstallComplaint);
router.delete("/delete/drainage/repairs/:id" , deleteDrainageRepairComplaint);
router.put("/drainage/install/:id/:status" , drainageInstallStatus);
router.put("/drainage/repair/:id/:status" , drainageRepairStatus);


// for Garbage Department 
router.get("/garbage/installs", getGarbageInstalls);
router.get("/garbage/repairs", getGarbageRepairs);
router.delete("/delete/garbage/installs/:id" , deleteGarbageInstallComplaint);
router.delete("/delete/garbage/repairs/:id" , deleteGarbageRepairComplaint);
router.put("/garbage/install/:id/:status" , garbageInstallStatus);
router.put("/garbage/repair/:id/:status" , garbageRepairStatus);



module.exports = router;