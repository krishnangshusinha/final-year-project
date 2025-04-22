const express = require("express");
const { createMessage, getMessages, markasread } = require("../controllers/messageController");
const router = express.Router();

// routes

// creating new record for new installation complaint
router.post("/",  createMessage);

// getting notifications of an admin
router.get("/:admin" , getMessages);

// marking a msg as mark as read
router.put("/:id", markasread);

module.exports = router;