"use client";

import { useAuth } from "@clerk/clerk-react";
import { getEnrollmentUploadUrl } from "@/lib/api/training/enrollment.client";

export default function PhotoUploader({ profilePhoto, setProfilePhoto }) {
  const { getToken } = useAuth();

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const token = await getToken();

    const uploadData = await getEnrollmentUploadUrl(
      {
        fileName: file.name,
        contentType: file.type,
      }
    );

    if (!uploadData) return;

    await fetch(uploadData.uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": file.type,
      },
      body: file,
    });

    setProfilePhoto({
      url: uploadData.url,
      key: uploadData.key,
      bucket: uploadData.bucket,
      contentType: file.type,
      size: file.size,
    });
  };

  return (
    <div>
      <label className="block font-medium mb-2">
        Profile Photo (Optional)
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="input"
      />

      {profilePhoto && (
        <img
          src={profilePhoto.url}
          alt="Preview"
          className="mt-4 w-32 h-32 object-cover rounded-xl"
        />
      )}
    </div>
  );
}
