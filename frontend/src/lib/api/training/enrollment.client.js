"use client";
import api from "../axios";
import { handleApiError } from "../handleApiError";

/* =====================================================
   🔹 Generate Presigned Upload URL
===================================================== */
export const generateProfilePhotoUploadUrl = async ({
  originalName,
  contentType,
  token,
}) => {
  try {
    const { data } = await api.post(
      "/api/training/enrollment/profile-photo/upload-url",
      { originalName, contentType },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};

/* =====================================================
   🔹 Upload File Directly To R2
===================================================== */
export const uploadFileToR2 = async ({ uploadUrl, file }) => {
  try {
    await fetch(uploadUrl, {
      method: "PUT",
      body: file,
      headers: {
        "Content-Type": file.type,
      },
    });

    return true;
  } catch (error) {
    throw new Error("File upload failed");
  }
};

/* =====================================================
   🔹 Apply For Training
===================================================== */
export const applyForTraining = async ({
  formData,
  token,
}) => {
  try {
    const { data } = await api.post(
      "/api/training/enrollment/apply",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};
