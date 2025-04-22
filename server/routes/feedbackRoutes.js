const express = require("express");
const { submitFeedback, getFeedback } = require("../controllers/feedbackController");
const router = express.Router();

// routes
router.post("/", submitFeedback);

router.get("/:department" , getFeedback);

module.exports = router;