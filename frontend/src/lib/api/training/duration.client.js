import api from "../axios";
import { handleApiError } from "../handleApiError";

/**
 * GET all durations (admin / analytics use)
 * GET /api/training/duration
 */
export async function getAllDurations() {
  try {
    const res = await api.get("/api/training/duration");
    return res.data.data;
  } catch (error) {
    handleApiError(error);
    return [];
  }
}

/**
 * GET durations by domain (ID or slug)
 * GET /api/training/duration/domain/:identifier
 */
export async function getDurationsByDomain(identifier) {
  try {
    const res = await api.get(
      `/api/training/duration/domain/${identifier}`
    );
    return res.data.data;
  } catch (error) {
    handleApiError(error);
    return [];
  }
}
