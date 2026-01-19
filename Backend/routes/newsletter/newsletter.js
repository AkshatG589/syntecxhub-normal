// routes/newsletter.js
const express = require("express");
const router = express.Router();
const Newsletter = require("../../models/Newsletter");
// ✅ Subscribe
router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    // Check if already subscribed
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(400).json({ success: false, message: "Already subscribed" });
    }

    const subscriber = new Newsletter({ email });
    await subscriber.save();

    res.status(201).json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Newsletter error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Get all subscribers
router.get("/all", async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ createdAt: -1 });
    res.json({ success: true, subscribers });
  } catch (error) {
    console.error("Newsletter fetch error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Delete a subscriber by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Newsletter.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Subscriber not found" });
    }

    res.json({ success: true, message: "Subscriber deleted successfully" });
  } catch (error) {
    console.error("Newsletter delete error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;