const express = require("express");
const { trackComplaint } = require("../controllers/complaintController");
const router = express.Router();

// routes

// route to track complaint
router.get("/:id", trackComplaint);

module.exports = router;