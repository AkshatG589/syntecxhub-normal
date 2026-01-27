import api from "../axios";
import { handleApiError } from "../handleApiError";

/**
 * GET all training domains
 * GET /api/training/domain
 */
export async function getAllDomains() {
  try {
    const res = await api.get("/api/training/domain");
    return res.data.data;
  } catch (error) {
    handleApiError(error);
    return [];
  }
}

/**
 * GET single domain by ID or SLUG
 * GET /api/training/domain/:identifier
 */
export async function getDomain(identifier) {
  try {
    const res = await api.get(
      `/api/training/domain/${identifier}`
    );
    return res.data.data;
  } catch (error) {
    handleApiError(error);
    return null;
  }
}

/**
 * RESOLVE domain ID by slug (lightweight)
 * GET /api/training/domain/resolve/:slug
 */
export async function resolveDomainBySlug(slug) {
  try {
    const res = await api.get(
      `/api/training/domain/resolve/${slug}`
    );
    return res.data.data;
  } catch (error) {
    handleApiError(error);
    return null;
  }
}

/**
 * GET domain count
 * GET /api/training/domain/stats/count
 */
export async function getDomainCount() {
  try {
    const res = await api.get(
      "/api/training/domain/stats/count"
    );
    return res.data.data.count;
  } catch (error) {
    handleApiError(error);
    return 0;
  }
}
