// models/TrainingTask.js
const mongoose = require("mongoose");

const trainingTaskSchema = new mongoose.Schema(
  {
    domainId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TrainingDomain",
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    durationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TrainingDuration",
      required: true,
    },

    /* Week number (STRICT: one task per week per duration) */
    weekNumber: {
      type: Number,
      required: true,
    },

    /* Task core info */
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    /* Ordering inside a duration */
    order: {
      type: Number,
      required: true,
    },

    taskType: {
      type: String,
      enum: ["task", "project"],
      default: "task",
    },

    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "easy",
    },

    /* Multiple projects under one task */
    projects: [
      {
        title: {
          type: String,
          required: true,
        },

        description: {
          type: [String],
          default: [],
          // Example:
          // [
          //   "Create a responsive layout",
          //   "Use semantic HTML tags",
          //   "Follow accessibility guidelines"
          // ]
        },

        resources: {
          type: [String],
          default: [],
        },
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

/* Prevent duplicate tasks per week per duration */
trainingTaskSchema.index(
  { durationId: 1, weekNumber: 1 },
  { unique: true }
);

module.exports = mongoose.model("TrainingTask", trainingTaskSchema);
