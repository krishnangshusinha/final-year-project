const express = require("express");
const { workersLogin, assignWorker, infoTechnician } = require("../controllers/workerController");
const router = express.Router();

// routes

// creating new record for new installation complaint
router.post("/", workersLogin);
router.put("/assign/:phone/:unique", assignWorker);
router.get("/info/:phone", infoTechnician);

module.exports = router;