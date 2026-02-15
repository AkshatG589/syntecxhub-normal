const express = require("express");
const TrainingDomain = require("../../models/TrainingDomain");
const { resolveDomain } = require("../../utils/resolvers");

const router = express.Router();

/* -------------------------------------------------
   GET ALL DOMAINS
   GET /api/training/domain
-------------------------------------------------- */
router.get("/", async (req, res) => {
  try {
    const domains = await TrainingDomain.find()
      .sort({ createdAt: -1 })
      .lean();

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
   RESOLVE DOMAIN (BY SLUG OR ID)
   GET /api/training/domain/resolve/:identifier
-------------------------------------------------- */
router.get("/resolve/:identifier", async (req, res) => {
  try {
    const domain = await resolveDomain(req.params.identifier);

    if (!domain) {
      return res.status(404).json({
        success: false,
        message: "Domain not found",
      });
    }

    res.status(200).json({
      success: true,
      data: {
        _id: domain._id,
        name: domain.name,
        slug: domain.slug,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to resolve domain",
    });
  }
});


/* -------------------------------------------------
   GET DOMAIN COUNT
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
    const domain = await resolveDomain(req.params.identifier);

    if (!domain) {
      return res.status(404).json({
        success: false,
        message: "Training domain not found",
      });
    }

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
