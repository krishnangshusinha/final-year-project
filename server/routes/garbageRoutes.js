const express = require("express");
const { createInstallRequest, createRepairRequest } = require("../controllers/garbageController");
const router = express.Router();

// routes

// creating new record for new installation complaint
router.post("/install",  createInstallRequest);

// creating new record for repair complaint
router.post("/repair" ,  createRepairRequest);

module.exports = router;