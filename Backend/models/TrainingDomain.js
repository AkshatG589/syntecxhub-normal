// models/TrainingDomain.js
const mongoose = require("mongoose");

/* Reusable media schema (Cloudflare R2 compatible) */
const mediaSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true, // Public CDN URL
    },

    key: {
      type: String,
      required: true, // R2 object key (used for delete/update)
    },

    bucket: {
      type: String,
      default: "syntecxhub-assets",
    },

    contentType: {
      type: String, // image/png, application/pdf, video/mp4
    },

    size: {
      type: Number, // bytes
    },

    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const trainingDomainSchema = new mongoose.Schema(
  {
    /* Core Identity */
    name: {
      type: String,
      required: true,
      unique: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    /* Admin sets maximum duration allowed */
    maxDurationMonths: {
      type: Number,
      required: true,
    },

    /* Media (Primary Banner / Card Image) */
    image: {
      type: mediaSchema,
      default: null,
    },

    /* Optional additional assets (future proof) */
    assets: {
      type: [mediaSchema], // PDFs, videos, extra images
      default: [],
    },

    /* Short bullet points (for cards & highlights) */
    shortDescription: {
      type: [String],
      default: [],
    },

    /* Detailed explanation */
    longDescription: {
      type: [String],
      default: [],
    },

    /* Skills / technologies covered */
    skillsCovered: {
      type: [String],
      default: [],
    },

    /* Qualification / eligibility */
    qualification: {
      type: [String],
      default: [],
    },

    /* What student will gain */
    outcomes: {
      type: [String],
      default: [],
    },

    /* SEO */
    seoTitle: String,
    seoDescription: String,

    /* Control visibility */
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TrainingDomain", trainingDomainSchema);
