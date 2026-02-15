const mongoose = require("mongoose");
const TrainingDomain = require("../models/TrainingDomain");
const TrainingDuration = require("../models/TrainingDuration");


const normalizeSlug = (v) =>
  v?.toString().toLowerCase().trim().replace(/\s+/g, "-");

/* =====================================================
   Resolve Domain (by id or slug) + active check
===================================================== */
async function resolveDomain(identifier) {
  if (!identifier) return null;

  let domain = null;

  if (mongoose.Types.ObjectId.isValid(identifier)) {
    domain = await TrainingDomain.findById(identifier);
  }

  if (!domain) {
    domain = await TrainingDomain.findOne({
      slug: normalizeSlug(identifier),
    });
  }

  return domain;
}

/* =====================================================
   Resolve Duration
   Optional: enforce domain binding
===================================================== */
async function resolveDuration(identifier, domainId = null) {
  if (!identifier) return null;

  let query = {};

  if (mongoose.Types.ObjectId.isValid(identifier)) {
    query._id = identifier;
  } else {
    query.slug = normalizeSlug(identifier);
  }

  if (domainId) {
    query.domainId = domainId;
  }

  // Always enforce active durations
  query.isActive = true;

  return TrainingDuration.findOne(query);
}


module.exports = {
  resolveDomain,
  resolveDuration,
};
