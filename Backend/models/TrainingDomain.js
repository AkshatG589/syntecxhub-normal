// models/TrainingDomain.js
const mongoose = require("mongoose");

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
