// routes/messages.js
import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// Get messages with lazy loading (pagination)
router.get("/:conversationId", async (req, res) => {
  const { conversationId } = req.params;
  const { page = 1, limit = 20 } = req.query;

  try {
    const messages = await Message.find({ conversationId })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
      
    res.json(messages.reverse()); // reverse so newest at bottom
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
