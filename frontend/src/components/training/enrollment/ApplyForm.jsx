"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

import {
  generateProfilePhotoUploadUrl,
  uploadFileToR2,
  applyForTraining,
} from "@/lib/api/training/enrollment.client";

export default function ApplyForm({ domain, duration }) {
  const router = useRouter();
  const { getToken } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "prefer_not_to_say",
    collegeName: "",
    degree: "",
    yearOfStudy: "",
    priorExperience: "",
    source: "other",
    referredBy: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = await getToken();

      if (!token) {
        throw new Error("Authentication failed");
      }

      let profilePhotoPayload = null;

      /* ==============================
         STEP 1: Upload Image (If Exists)
      =============================== */
      if (selectedFile) {
        const uploadData = await generateProfilePhotoUploadUrl({
          originalName: selectedFile.name,
          contentType: selectedFile.type,
          token,
        });

        await uploadFileToR2({
          uploadUrl: uploadData.uploadUrl,
          file: selectedFile,
        });

        profilePhotoPayload = {
          url: uploadData.url,
          key: uploadData.key,
          contentType: selectedFile.type,
          size: selectedFile.size,
        };
      }

      /* ==============================
         STEP 2: Submit Application
      =============================== */
      await applyForTraining({
        token,
        formData: {
          domainIdentifier: domain.slug,
          durationIdentifier: duration.slug,
          ...form,
          profilePhoto: profilePhotoPayload,
        },
      });

      router.push(
        `/training/${domain.slug}/apply/success`
      );
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
      <h1 className="text-2xl font-semibold mb-6">
        Apply for {domain.name} ({duration.label})
      </h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-600 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />

        {/* Gender */}
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer_not_to_say">
            Prefer not to say
          </option>
        </select>

        {/* College */}
        <input
          type="text"
          name="collegeName"
          placeholder="College Name"
          value={form.collegeName}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        {/* Degree */}
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={form.degree}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        {/* Year */}
        <input
          type="text"
          name="yearOfStudy"
          placeholder="Year of Study"
          value={form.yearOfStudy}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        {/* Experience */}
        <textarea
          name="priorExperience"
          placeholder="Prior Experience"
          value={form.priorExperience}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        {/* Source */}
        <select
          name="source"
          value={form.source}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option value="instagram">Instagram</option>
          <option value="linkedin">LinkedIn</option>
          <option value="friend">Friend</option>
          <option value="college">College</option>
          <option value="google">Google</option>
          <option value="youtube">YouTube</option>
          <option value="other">Other</option>
        </select>

        {/* Referred By */}
        <input
          type="text"
          name="referredBy"
          placeholder="Referred By (Optional)"
          value={form.referredBy}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        {/* Profile Photo */}
        <div>
          <label className="block mb-2 font-medium">
            Profile Photo (Optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white p-3 rounded hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
