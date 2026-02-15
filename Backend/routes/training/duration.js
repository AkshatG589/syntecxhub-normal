const express = require("express");
const TrainingDuration = require("../../models/TrainingDuration");
const { resolveDomain, resolveDuration } = require("../../utils/resolvers");

const router = express.Router();

/* =================================================
   VALIDATE DOMAIN + DURATION MATCH
   GET /api/training/duration/validate/:domainSlug/:durationSlug
================================================== */
router.get("/validate/:domainSlug/:durationSlug", async (req, res) => {
  try {
    const { domainSlug, durationSlug } = req.params;

    if (!domainSlug || !durationSlug) {
      return res.status(400).json({
        success: false,
        message: "Domain and duration are required",
      });
    }

    // ✅ Resolve Domain using util
    const domain = await resolveDomain(domainSlug);
    if (!domain) {
      return res.status(404).json({
        success: false,
        message: "Domain not found",
      });
    }

    // ✅ Resolve Duration WITH domain binding
    const duration = await resolveDuration(durationSlug, domain._id);
    if (!duration) {
      return res.status(404).json({
        success: false,
        message: "Duration not found for this domain",
      });
    }

    return res.json({
      success: true,
      data: {
        domain: {
          _id: domain._id,
          name: domain.name,
          slug: domain.slug,
        },
        duration: {
          _id: duration._id,
          label: duration.label,
          slug: duration.slug,
          months: duration.months,
          domainId: duration.domainId,
        },
      },
    });

  } catch (error) {
    console.error("Validate Domain-Duration Error:", error);

    return res.status(500).json({
      success: false,
      message: "Validation failed",
    });
  }
});


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
   GET /api/training/duration/domain/:identifier
-------------------------------------------------- */
router.get("/domain/:identifier", async (req, res) => {
  try {
    const { identifier } = req.params;

    // ✅ Use resolver instead of manual mongoose logic
    const domain = await resolveDomain(identifier);

    if (!domain) {
      return res.status(404).json({
        success: false,
        message: "Training domain not found",
      });
    }

    const durations = await TrainingDuration.find({
      domainId: domain._id,
      isActive: true, // consistency with resolveDuration
    }).sort({ months: 1 });

    res.status(200).json({
      success: true,
      data: durations,
    });

  } catch (error) {
    console.error("Fetch Durations By Domain Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch durations for domain",
    });
  }
});

module.exports = router;
