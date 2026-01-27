// utils/resolvers.js
const mongoose = require("mongoose");
const TrainingDomain = require("../models/TrainingDomain");
const TrainingDuration = require("../models/TrainingDuration");

const normalizeSlug = (v) =>
  v.toLowerCase().trim().replace(/\s+/g, "-");

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

async function getUserFromToken(req) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    // Verify token
    const decoded = await clerk.verifyToken(token);
    const userId = decoded.sub;

    if (!userId) return null;

    return {
      userId
    };
  } catch (err) {
    console.error("Clerk token verification failed:", err.message);
    return null;
  }
}
module.exports = {
  resolveDomain,
  resolveDuration,
  getUserFromToken,
};
