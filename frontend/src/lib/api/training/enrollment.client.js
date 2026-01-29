import api from "../axios";
import { handleApiError } from "../handleApiError";

/* =================================================
   GET UPLOAD URL FOR PROFILE PHOTO
   POST /api/training/enrollment/upload-url
================================================== */
export async function getEnrollmentUploadUrl(payload) {
  try {
    const res = await api.post(
      "/api/training/enrollment/upload-url",
      payload
    );
    return res.data.data;
  } catch (error) {
    handleApiError(error);
    return null;
  }
}

/* =================================================
   APPLY FOR TRAINING
   POST /api/training/enrollment/apply
================================================== */
export async function applyForTraining(payload) {
  try {
    const res = await api.post(
      "/api/training/enrollment/apply",
      payload
    );
    return res.data.data;
  } catch (error) {
    handleApiError(error);
    return null;
  }
}

/* =================================================
   GET MY ENROLLMENTS
   GET /api/training/enrollment/me?userId=
================================================== */
export async function getMyEnrollments(userId) {
  try {
    const res = await api.get(
      `/api/training/enrollment/me?userId=${userId}`
    );
    return res.data.data;
  } catch (error) {
    handleApiError(error);
    return [];
  }
}

/* =================================================
   UPDATE ENROLLMENT STATUS (ADMIN)
   PATCH /api/training/enrollment/:id/status
================================================== */
export async function updateEnrollmentStatus(id, payload) {
  try {
    const res = await api.patch(
      `/api/training/enrollment/${id}/status`,
      payload
    );
    return res.data.data;
  } catch (error) {
    handleApiError(error);
    return null;
  }
}

/* =================================================
   HARD DELETE ENROLLMENT (ADMIN)
   DELETE /api/training/enrollment/:id
================================================== */
export async function deleteEnrollment(id) {
  try {
    const res = await api.delete(
      `/api/training/enrollment/${id}`
    );
    return res.data;
  } catch (error) {
    handleApiError(error);
    return null;
  }
}
