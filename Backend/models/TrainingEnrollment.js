const mongoose = require("mongoose");

/* =========================================
   REUSABLE MEDIA SCHEMA (R2 / CDN Based)
========================================= */
const mediaSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true, // Public CDN URL
      trim: true,
    },

    key: {
      type: String,
      required: true, // R2 object key (for delete/update)
      trim: true,
    },

    bucket: {
      type: String,
      default: "syntecxhub-assets",
      trim: true,
    },

    contentType: {
      type: String, // image/png, image/jpeg, application/pdf etc
      trim: true,
    },

    size: {
      type: Number, // file size in bytes
    },

    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false },
);

/* =========================================
   TRAINING ENROLLMENT SCHEMA
========================================= */
const trainingEnrollmentSchema = new mongoose.Schema(
  {
    /* ===============================
       AUTH / USER IDENTITY
    ================================ */
    userId: {
      type: String, // Clerk userId
      required: true,
      index: true,
    },

    /* ===============================
       PROFESSIONAL PHOTO (R2)
    ================================ */
    profilePhoto: {
      type: mediaSchema,
      required: false, // Optional upload
    },

    /* ===============================
       DOMAIN & DURATION (LOCK CORE)
    ================================ */
    domainId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TrainingDomain",
      required: true,
      index: true,
    },

    domainSlug: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
    },

    /* Snapshot for certificates/UI */
    domainName: {
      type: String,
      required: true,
      trim: true,
    },

    durationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TrainingDuration",
      required: true,
    },

    durationSlug: {
      type: String,
      required: true,
      lowercase: true,
    },

    durationLabel: {
      type: String, // e.g. "1 Month"
      required: true,
      trim: true,
    },

    months: {
      type: Number,
      required: true,
    },

    /* ===============================
       APPLICANT DETAILS
    ================================ */
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      index: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      match: /^[0-9]{10}$/,
    },

    gender: {
      type: String,
      enum: ["male", "female", "other", "prefer_not_to_say"],
      default: "prefer_not_to_say",
    },

    /* ===============================
       EDUCATION / BACKGROUND
    ================================ */
    collegeName: {
      type: String,
      trim: true,
    },

    degree: {
      type: String,
      trim: true,
    },

    yearOfStudy: {
      type: String,
      trim: true,
    },

    priorExperience: {
      type: String,
      trim: true,
    },

    /* ===============================
       DISCOVERY / REFERRAL
    ================================ */
    source: {
      type: String,
      enum: [
        "instagram",
        "linkedin",
        "friend",
        "college",
        "google",
        "youtube",
        "other",
      ],
      default: "other",
    },

    referredBy: {
      type: String,
      trim: true,
    },

    /* ===============================
       ENROLLMENT LIFECYCLE
    ================================ */
    status: {
      type: String,
      enum: ["applied", "active", "completed", "cancelled"],
      default: "applied",
      index: true,
    },

    appliedAt: {
      type: Date,
      default: Date.now,
    },

    completedAt: {
      type: Date,
      default: null,
    },

    /* ===============================
       ADMIN / BATCH (FUTURE)
    ================================ */
    batchId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },

    adminNotes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

/* =========================================
   🔐 HARD DOMAIN LOCK
   One active/applied enrollment
   per domain per user
========================================= */
trainingEnrollmentSchema.index(
  { userId: 1, domainId: 1 },
  {
    unique: true,
    partialFilterExpression: {
      status: { $in: ["applied", "active"] },
    },
  },
);

module.exports = mongoose.model("TrainingEnrollment", trainingEnrollmentSchema);
