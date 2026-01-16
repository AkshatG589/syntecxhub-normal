const express = require("express");
const TrainingDuration = require("../../models/TrainingDuration");
const TrainingDomain = require("../../models/TrainingDomain");
const mongoose = require("mongoose");
const router = express.Router();

function normalizeSlug(value) {
  return value.toLowerCase().trim().replace(/\s+/g, "-");
}


/* -------------------------------------------------
   GET ALL DURATIONS
   GET /api/training/duration
-------------------------------------------------- */
router.get("/", async (req, res) => {
  try {
    const durations = await TrainingDuration.find()
      .populate("domainId", "name slug")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: durations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch durations",
      error: error.message,
    });
  }
});

/* -------------------------------------------------
   GET DURATIONS BY DOMAIN (ID or Slug)
   GET /api/training/duration/domain/:domainId
-------------------------------------------------- */
router.get("/domain/:identifier", async (req, res) => {
  try {
    const { identifier } = req.params;

    let domain = null;

    if (mongoose.Types.ObjectId.isValid(identifier)) {
      domain = await TrainingDomain.findById(identifier);
    }

    if (!domain) {
      domain = await TrainingDomain.findOne({ slug: identifier });
    }

    if (!domain) {
      return res.status(404).json({
        success: false,
        message: "Training domain not found",
      });
    }

    const durations = await TrainingDuration.find({
      domainId: domain._id,
    }).sort({ months: 1 });

    res.status(200).json({
      success: true,
      data: durations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch durations for domain",
    });
  }
});

module.exports = router;
