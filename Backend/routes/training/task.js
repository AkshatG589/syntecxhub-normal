const express = require("express");
const mongoose = require("mongoose");

const TrainingTask = require("../../models/TrainingTask");
const TrainingDomain = require("../../models/TrainingDomain");
const TrainingDuration = require("../../models/TrainingDuration");

const router = express.Router();

/* --------------------------------
   HELPERS
--------------------------------- */
const normalizeSlug = (v) =>
  v.toLowerCase().trim().replace(/\s+/g, "-");

/* --------------------------------
   RESOLVERS
--------------------------------- */
async function resolveDomain(identifier) {
  if (mongoose.Types.ObjectId.isValid(identifier)) {
    const d = await TrainingDomain.findById(identifier);
    if (d) return d;
  }
  return TrainingDomain.findOne({ slug: normalizeSlug(identifier) });
}

async function resolveDuration(identifier) {
  if (mongoose.Types.ObjectId.isValid(identifier)) {
    const d = await TrainingDuration.findById(identifier);
    if (d) return d;
  }
  return TrainingDuration.findOne({ slug: normalizeSlug(identifier) });
}

async function resolveDomainDuration(domainIdentifier, durationIdentifier) {
  const domain = await resolveDomain(domainIdentifier);
  if (!domain) return { error: "DOMAIN_NOT_FOUND" };

  const duration = await resolveDuration(durationIdentifier);
  if (!duration) return { error: "DURATION_NOT_FOUND" };

  if (duration.domainId.toString() !== domain._id.toString()) {
    return { error: "DURATION_DOMAIN_MISMATCH" };
  }

  return { domain, duration };
}


async function resolveTask(identifier) {
  if (mongoose.Types.ObjectId.isValid(identifier)) {
    const t = await TrainingTask.findById(identifier);
    if (t) return t;
  }
  return TrainingTask.findOne({ slug: normalizeSlug(identifier) });
}

/* =================================================
   GET TASKS BY DOMAIN + DURATION (ID OR SLUG)
   GET /api/training/task/duration/:domainIdentifier/:durationIdentifier
================================================== */
router.get(
  "/:domainIdentifier/:durationIdentifier",
  async (req, res) => {
    try {
      const { domainIdentifier, durationIdentifier } = req.params;

      const result = await resolveDomainDuration(
        domainIdentifier,
        durationIdentifier
      );

      if (result.error === "DOMAIN_NOT_FOUND") {
        return res.status(404).json({
          success: false,
          message: "Training domain not found",
        });
      }

      if (result.error === "DURATION_NOT_FOUND") {
        return res.status(404).json({
          success: false,
          message: "Training duration not found",
        });
      }

      if (result.error === "DURATION_DOMAIN_MISMATCH") {
        return res.status(400).json({
          success: false,
          message: "Duration does not belong to the given domain",
        });
      }

      const tasks = await TrainingTask.find({
        durationId: result.duration._id,
        isActive: true,
      }).sort({ order: 1 });

      res.status(200).json({
        success: true,
        data: tasks,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch tasks",
        error: error.message,
      });
    }
  }
);


/* =================================================
   GET  A TASK BY DOMAIN + DURATION + TASK(ID OR SLUG)
   GET /api/training/task/duration/:domainIdentifier/:durationIdentifier/:taskIdentifier
================================================== */
router.get(
  "/:domainIdentifier/:durationIdentifier/:taskIdentifier",
  async (req, res) => {
    try {
      const { domainIdentifier, durationIdentifier, taskIdentifier } =
        req.params;

      const result = await resolveDomainDuration(
        domainIdentifier,
        durationIdentifier
      );

      if (result.error) {
        return res.status(400).json({
          success: false,
          message: "Invalid domain-duration combination",
        });
      }

      const task = await resolveTask(taskIdentifier);
      if (!task) {
        return res.status(404).json({
          success: false,
          message: "Training task not found",
        });
      }

      if (
        task.domainId.toString() !== result.domain._id.toString() ||
        task.durationId.toString() !== result.duration._id.toString()
      ) {
        return res.status(400).json({
          success: false,
          message: "Task does not belong to this domain or duration",
        });
      }

      res.status(200).json({
        success: true,
        data: task,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch task",
        error: error.message,
      });
    }
  }
);



module.exports = router;