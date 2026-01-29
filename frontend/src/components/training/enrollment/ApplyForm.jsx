"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

import { applyForTraining } from "@/lib/api/training/enrollment.client";
import FormFields from "./FormFields";
import PhotoUploader from "./PhotoUploader";

export default function ApplyForm({ domain, duration }) {
  const router = useRouter();
  const { user, isLoaded } = useUser();

  const [loading, setLoading] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.primaryEmailAddress?.emailAddress || "",
    phone: "",
    gender: "prefer_not_to_say",
    collegeName: "",
    degree: "",
    yearOfStudy: "",
    priorExperience: "",
    source: "other",
    referredBy: "",
  });

  if (!isLoaded) return null;

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      userId: user.id,

      domainIdentifier: domain.slug,
      durationIdentifier: duration.slug,

      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      gender: formData.gender,

      collegeName: formData.collegeName,
      degree: formData.degree,
      yearOfStudy: formData.yearOfStudy,
      priorExperience: formData.priorExperience,

      source: formData.source,
      referredBy: formData.referredBy,

      profilePhoto,
    };

    const res = await applyForTraining(payload);

    setLoading(false);

    if (res) {
      router.push(`/training/${domain.slug}/apply/success`);
    }
  };

  /* ================= UI ================= */

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Apply for {domain.name}
          </h1>

          <p className="mt-2 text-gray-600">
            Duration selected:{" "}
            <span className="font-medium">{duration.label}</span>
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-10"
        >
          {/* Profile Photo */}
          <PhotoUploader
            value={profilePhoto}
            onChange={setProfilePhoto}
          />

          {/* Fields */}
          <FormFields
            value={formData}
            onChange={setFormData}
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full rounded-lg bg-blue-600 px-6 py-3
              text-white font-medium
              hover:bg-blue-700 transition
              disabled:opacity-60
            "
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </section>
  );
}
