const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const TrainingEnrollment = require("../../models/TrainingEnrollment");

const generateUploadUrl = require("../../utils/r2Upload");

const getUserFromToken = require("../../utils/getUserFromToken");
const {
  resolveDomain,
  resolveDuration,
} = require("../../utils/resolvers");

/* =====================================================
   🔹 1. Generate Presigned URL for Profile Photo Upload
   POST /api/training/profile-photo/upload-url
===================================================== */
router.post("/profile-photo/upload-url", async (req, res) => {
  try {
    const user = await getUserFromToken(req);
    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const { originalName, contentType } = req.body;

    if (!originalName || !contentType) {
      return res.status(400).json({
        success: false,
        message: "originalName and contentType are required",
      });
    }

    const { uploadUrl, key, url } = await generateUploadUrl({
      folder: `training/profile-photos/${user.userId}`,
      originalName,
      contentType,
    });

    return res.json({
      success: true,
      uploadUrl,
      key,
      url,
    });
  } catch (err) {
    console.error("Upload URL error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to generate upload URL",
    });
  }
});

router.post("/apply", async (req, res) => {
  try {
    const user = await getUserFromToken(req);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const {
      domainIdentifier,
      durationIdentifier,

      fullName,
      email,
      phone,
      gender,

      collegeName,
      degree,
      yearOfStudy,
      priorExperience,

      source,
      referredBy,

      profilePhoto,
    } = req.body;

    /* ==============================
       Basic Validation
    =============================== */
    if (!domainIdentifier || !durationIdentifier) {
      return res.status(400).json({
        success: false,
        message: "Domain and duration are required",
      });
    }

    if (!fullName || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Full name, email and phone are required",
      });
    }

    /* ==============================
       Resolve & Validate Domain
    =============================== */
    const domain = await resolveDomain(domainIdentifier);

    if (!domain || !domain.isActive) {
      return res.status(404).json({
        success: false,
        message: "Training domain not found or inactive",
      });
    }

    /* ==============================
       Resolve Duration INSIDE Domain
    =============================== */
    const duration = await resolveDuration(
      durationIdentifier,
      domain._id
    );

    if (!duration) {
      return res.status(400).json({
        success: false,
        message: "Invalid duration for selected domain",
      });
    }

    /* ==============================
       Create Enrollment
    =============================== */
    const enrollment = await TrainingEnrollment.create({
      userId: user.userId,

      profilePhoto: profilePhoto || undefined,

      domainId: domain._id,
      domainSlug: domain.slug,
      domainName: domain.name,

      durationId: duration._id,
      durationSlug: duration.slug,
      durationLabel: duration.label,
      months: duration.months,

      fullName,
      email,
      phone,
      gender,

      collegeName,
      degree,
      yearOfStudy,
      priorExperience,

      source,
      referredBy,
    });

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      enrollment,
    });

  } catch (err) {
    console.error("Apply error:", err);

    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message:
          "You already have an active/applied enrollment for this domain",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to apply for training",
    });
  }
});



module.exports = router;
