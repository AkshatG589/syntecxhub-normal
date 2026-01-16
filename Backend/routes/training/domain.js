const express = require("express");
const mongoose = require("mongoose");
const TrainingDomain = require("../../models/TrainingDomain");

const router = express.Router();

/* -------------------------------------------------
   GET ALL DOMAINS
   GET /api/training/domain
-------------------------------------------------- */
router.get("/", async (req, res) => {
  try {
    const domains = await TrainingDomain.find().sort({ createdAt: -1 }).lean();

    res.status(200).json({
      success: true,
      data: domains,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch domains",
    });
  }
});


/* -------------------------------------------------
   GET DOMAIN ID BY SLUG
   GET /api/training/domain/resolve/:slug
-------------------------------------------------- */
router.get("/resolve/:slug", async (req, res) => {
  try {
    const domain = await TrainingDomain.findOne(
      { slug: req.params.slug },
      { _id: 1, name: 1, slug: 1 }
    );

    if (!domain) {
      return res.status(404).json({
        success: false,
        message: "Domain not found",
      });
    }

    res.status(200).json({
      success: true,
      data: domain,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to resolve domain",
    });
  }
});


/* -------------------------------------------------
   GET DOMAIN counts
   GET /api/training/domain/stats/count
-------------------------------------------------- */
router.get("/stats/count", async (req, res) => {
  try {
    const count = await TrainingDomain.countDocuments();
    res.status(200).json({
      success: true,
      data: { count },
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to fetch domain count",
    });
  }
});

/* -------------------------------------------------
   GET SINGLE DOMAIN (ID OR SLUG)
   GET /api/training/domain/:identifier
-------------------------------------------------- */

router.get("/:identifier", async (req, res) => {
  try {
    const { identifier } = req.params;

    let domain = null;

    // 1️⃣ Try finding by ObjectId (SAFE)
    if (mongoose.Types.ObjectId.isValid(identifier)) {
      domain = await TrainingDomain.findById(identifier);
    }

    // 2️⃣ Fallback to slug if not found
    if (!domain) {
      domain = await TrainingDomain.findOne({ slug: identifier });
    }

    // 3️⃣ Not found
    if (!domain) {
      return res.status(404).json({
        success: false,
        message: "Training domain not found",
      });
    }

    // 4️⃣ Success
    res.status(200).json({
      success: true,
      data: domain,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch domain",
    });
  }
});

module.exports = router;