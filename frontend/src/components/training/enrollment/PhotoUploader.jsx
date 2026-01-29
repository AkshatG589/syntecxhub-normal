"use client";

import { useState } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { getEnrollmentUploadUrl } from "@/lib/api/training/enrollment.client";

export default function PhotoUploader({ value, onChange }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Only image files are allowed");
      return;
    }

    setError("");
    setUploading(true);

    try {
      /* 1️⃣ Get upload URL */
      const uploadData = await getEnrollmentUploadUrl({
        fileName: file.name,
        contentType: file.type,
      });

      if (!uploadData) throw new Error("Upload URL failed");

      /* 2️⃣ Upload to R2 */
      await fetch(uploadData.uploadUrl, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      });

      /* 3️⃣ Save snapshot */
      onChange({
        url: uploadData.publicUrl,
        key: uploadData.key,
      });
    } catch {
      setError("Failed to upload photo. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  function removePhoto() {
    onChange(null);
  }

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-700">
        Profile Photo (optional)
      </label>

      {/* ================= PREVIEW ================= */}
      {value?.url ? (
        <div className="relative w-32 h-32 rounded-xl border overflow-hidden">
          <img
            src={value.url}
            alt="Profile"
            className="w-full h-full object-cover"
          />

          <button
            type="button"
            onClick={removePhoto}
            className="
              absolute top-1 right-1
              bg-white rounded-full p-1
              shadow hover:bg-gray-100
            "
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        /* ================= UPLOAD ================= */
        <label
          className="
            flex items-center gap-3
            w-full md:w-fit
            px-4 py-3 rounded-xl
            border border-dashed border-gray-300
            cursor-pointer
            hover:border-blue-500
            transition
          "
        >
          <Upload className="text-blue-600" size={20} />
          <span className="text-sm text-gray-600">
            {uploading ? "Uploading..." : "Upload profile photo"}
          </span>

          <input
            type="file"
            accept="image/*"
            hidden
            disabled={uploading}
            onChange={handleFileChange}
          />
        </label>
      )}

      {/* ================= HELP TEXT ================= */}
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <ImageIcon size={14} />
        JPG, PNG — max 2MB recommended
      </div>

      {/* ================= ERROR ================= */}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
