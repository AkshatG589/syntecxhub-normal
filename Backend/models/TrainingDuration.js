// models/TrainingDuration.js
const mongoose = require("mongoose");

const trainingDurationSchema = new mongoose.Schema(
  {
    domainId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TrainingDomain",
      required: true,
      index: true,
    },

    // 🔑 IMPORTANT: for clean nested routing & SEO
    domainSlug: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
    },

    slug: {
      type: String,
      required: true,
      lowercase: true,
    },

    months: {
      type: Number,
      required: true,
    },

    /* Auto-derived weeks */
    totalWeeks: {
      type: Number,
      required: true,
    },

    label: {
      type: String,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

/* ✅ Prevent duplicate duration slugs INSIDE a domain */
trainingDurationSchema.index(
  { domainSlug: 1, slug: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "TrainingDuration",
  trainingDurationSchema
);
