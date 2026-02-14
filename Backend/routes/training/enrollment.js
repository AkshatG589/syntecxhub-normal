const express = require("express");
const TrainingEnrollment = require("../../models/TrainingEnrollment");
const { resolveDomain, resolveDuration } = require("../../utils/resolvers");

const generateUploadUrl = require("../../utils/r2Upload");
const deleteFromR2 = require("../../utils/r2Delete");

const router = express.Router();

/* =================================================
   GET ENROLLMENT PROFILE PHOTO UPLOAD URL
   POST /api/training/enrollment/upload-url
================================================== */
router.post("/upload-url", async (req, res) => {
  try {
    const { fileName, contentType } = req.body;

    if (!fileName || !contentType) {
      return res.status(400).json({
        success: false,
        message: "fileName and contentType are required",
      });
    }

    /* ---------- ALLOWED IMAGE TYPES ---------- */
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(contentType)) {
      return res.status(400).json({
        success: false,
        message: "Only JPG, PNG, and WEBP images are allowed",
      });
    }

    const data = await generateUploadUrl({
      folder: "training-enrollments/profile-photos",
      originalName: fileName,
      contentType,
    });

    res.json({
      success: true,
      data: {
        uploadUrl: data.uploadUrl,
        key: data.key,
        url: data.publicUrl, // aligns with mediaSchema "url"
        bucket: "syntecxhub-assets",
        contentType,
      },
    });
  } catch (error) {
    console.error("Upload URL Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate upload URL",
    });
  }
});

/* =================================================
   APPLY FOR TRAINING
   POST /api/training/enrollment/apply
================================================== */
router.post("/apply", async (req, res) => {
  try {
    /* ---------- AUTH USER (DO NOT TRUST BODY) ---------- */
    const userId = req.auth?.userId;

    if (!userId) {
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

    /* ---------- BASIC VALIDATION ---------- */
    if (
      !domainIdentifier ||
      !durationIdentifier ||
      !fullName ||
      !email ||
      !phone
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    /* ---------- EMAIL NORMALIZATION ---------- */
    const normalizedEmail = email.toLowerCase().trim();

    /* ---------- PROFILE PHOTO VALIDATION ---------- */
    let validatedProfilePhoto = undefined;

    if (profilePhoto) {
      if (
        !profilePhoto.url ||
        !profilePhoto.key
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid profile photo structure",
        });
      }

      validatedProfilePhoto = {
        url: profilePhoto.url,
        key: profilePhoto.key,
        bucket: profilePhoto.bucket || "syntecxhub-assets",
        contentType: profilePhoto.contentType,
        size: profilePhoto.size,
      };
    }

    /* ---------- RESOLVE DOMAIN ---------- */
    const domain = await resolveDomain(domainIdentifier);
    if (!domain) {
      return res.status(404).json({
        success: false,
        message: "Training domain not found",
      });
    }

    /* ---------- RESOLVE DURATION ---------- */
    const duration = await resolveDuration(durationIdentifier);
    if (!duration) {
      return res.status(404).json({
        success: false,
        message: "Training duration not found",
      });
    }

    /* ---------- VALIDATE DOMAIN-DURATION MATCH ---------- */
    if (duration.domainId.toString() !== domain._id.toString()) {
      return res.status(400).json({
        success: false,
        message: "Duration does not belong to this domain",
      });
    }

    /* ---------- DOMAIN LOCK CHECK ---------- */
    const existing = await TrainingEnrollment.findOne({
      userId,
      domainId: domain._id,
      status: { $in: ["applied", "active"] },
    });

    if (existing) {
      return res.status(409).json({
        success: false,
        message:
          "You are already enrolled or applied for this training domain",
      });
    }

    /* ---------- CREATE ENROLLMENT ---------- */
    const enrollment = await TrainingEnrollment.create({
      userId,

      domainId: domain._id,
      domainSlug: domain.slug,
      domainName: domain.name,

      durationId: duration._id,
      durationSlug: duration.slug,
      durationLabel: duration.label,
      months: duration.months,

      fullName: fullName.trim(),
      email: normalizedEmail,
      phone: phone.trim(),
      gender,
      collegeName,
      degree,
      yearOfStudy,
      priorExperience,
      source,
      referredBy,

      profilePhoto: validatedProfilePhoto,
    });

    res.status(201).json({
      success: true,
      data: enrollment,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Enrollment already exists for this domain",
      });
    }

    console.error("Apply Enrollment Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to apply for training",
    });
  }
});


/* =================================================
   GET MY ENROLLMENTS
   GET /api/training/enrollment/me?userId=
================================================== */
router.get("/me", async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "userId is required",
      });
    }

    const enrollments = await TrainingEnrollment.find({ userId })
      .sort({ createdAt: -1 });

    res.json({ success: true, data: enrollments });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to fetch enrollments",
    });
  }
});

/* =================================================
   UPDATE STATUS (ADMIN)
   PATCH /api/training/enrollment/:id/status
================================================== */
router.patch("/:id/status", async (req, res) => {
  try {
    const { status, adminNotes, batchId } = req.body;

    const enrollment = await TrainingEnrollment.findByIdAndUpdate(
      req.params.id,
      {
        status,
        adminNotes,
        batchId,
        completedAt: status === "completed" ? new Date() : null,
      },
      { new: true }
    );

    res.json({ success: true, data: enrollment });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to update enrollment",
    });
  }
});

/* =================================================
   HARD DELETE (ADMIN)
   DELETE /api/training/enrollment/:id
================================================== */
router.delete("/:id", async (req, res) => {
  try {
    const enrollment = await TrainingEnrollment.findById(req.params.id);

    if (!enrollment) {
      return res.status(404).json({
        success: false,
        message: "Enrollment not found",
      });
    }

    /* ---------- DELETE PROFILE PHOTO FROM R2 ---------- */
    if (enrollment.profilePhoto?.key) {
      await deleteFromR2(enrollment.profilePhoto.key);
    }

    await enrollment.deleteOne();

    res.json({
      success: true,
      message: "Enrollment deleted permanently",
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to delete enrollment",
    });
  }
});

module.exports = router;
