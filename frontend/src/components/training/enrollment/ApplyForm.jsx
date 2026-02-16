"use client";

import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { Input, Select, TextArea } from "./FormFields";
import PhotoUploader from "./PhotoUploader";
import Btn from "@/components/ui/button/Btn";
import { 
  generateProfilePhotoUploadUrl, 
  uploadFileToR2, 
  applyForTraining 
} from "@/lib/api/training/enrollment.client";
// Import the Server Action we created
import { completeEnrollmentAction } from "@/lib/api/training/enrollment.server";

export default function ApplyForm({ domain, duration }) {
  const { getToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", gender: "prefer_not_to_say",
    collegeName: "", degree: "", yearOfStudy: "",
    priorExperience: "", source: "other", referredBy: "",
  });

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const token = await getToken();
      let profilePhotoPayload = null;

      // 1. Handle Photo Upload
      if (selectedFile) {
        const uploadData = await generateProfilePhotoUploadUrl({
          originalName: selectedFile.name, contentType: selectedFile.type, token,
        });
        await uploadFileToR2({ uploadUrl: uploadData.uploadUrl, file: selectedFile });
        profilePhotoPayload = { 
          url: uploadData.url, 
          key: uploadData.key, 
          contentType: selectedFile.type, 
          size: selectedFile.size 
        };
      }

      // 2. Submit Application to your API
      await applyForTraining({
        token,
        formData: {
          domainIdentifier: domain.slug, durationIdentifier: duration.slug,
          ...form, profilePhoto: profilePhotoPayload,
        },
      });

      // 3. Trigger Server Action to set the "Success Guard" cookie and redirect
      // This is the "10/10" way to handle secure redirects
      await completeEnrollmentAction(domain.slug);

    } catch (err) {
      setError(err.message || "Something went wrong");
      setLoading(false); // Only stop loading if there's an error
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Application Form</h1>
        <p className="text-gray-500 mt-2">
          Applying for <span className="text-blue-600 font-medium">{domain.name}</span> • {duration.label}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
        {error && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm animate-pulse">
            {error}
          </div>
        )}

        {/* Section 1: Profile & Personal Details */}
        <div>
          <h3 className="text-lg font-semibold border-b pb-2 mb-6 text-gray-800">Personal Information</h3>
          <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
             <PhotoUploader onFileSelect={setSelectedFile} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} required placeholder="John Doe" />
            <Input label="Email Address" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" />
            <Input label="Phone Number" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 00000 00000" />
            <Select 
              label="Gender" name="gender" value={form.gender} onChange={handleChange}
              options={[
                { label: "Male", value: "male" }, { label: "Female", value: "female" },
                { label: "Other", value: "other" }, { label: "Prefer not to say", value: "prefer_not_to_say" }
              ]}
            />
          </div>
        </div>

        {/* Section 2: Academics */}
        <div>
          <h3 className="text-lg font-semibold border-b pb-2 mb-6 text-gray-800">Academic Background</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <Input label="College Name" name="collegeName" value={form.collegeName} onChange={handleChange} placeholder="University of Technology" />
            </div>
            <Input label="Degree" name="degree" value={form.degree} onChange={handleChange} placeholder="B.Tech Computer Science" />
            <Input label="Year of Study" name="yearOfStudy" value={form.yearOfStudy} onChange={handleChange} placeholder="3rd Year" />
          </div>
        </div>

        {/* Section 3: Professional & Misc */}
        <div>
          <h3 className="text-lg font-semibold border-b pb-2 mb-6 text-gray-800">Additional Details</h3>
          <div className="space-y-6">
            <TextArea label="Prior Experience" name="priorExperience" value={form.priorExperience} onChange={handleChange} placeholder="Briefly describe any relevant skills or projects..." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select 
                label="How did you hear about us?" name="source" value={form.source} onChange={handleChange}
                options={[
                  { label: "LinkedIn", value: "linkedin" }, { label: "Instagram", value: "instagram" },
                  { label: "Google", value: "google" }, { label: "Friend/Senior", value: "friend" },
                  { label: "Other", value: "other" }
                ]}
              />
              <Input label="Referred By" name="referredBy" value={form.referredBy} onChange={handleChange} placeholder="Name of referrer" />
            </div>
          </div>
        </div>

        <Btn
          type="submit"
          text="Submit Application"
          loadingText="Processing Application..."
          loading={loading}
          fullWidth={true}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 shadow-lg hover:shadow-blue-200 transition-all active:scale-[0.98]"
        />
      </form>
    </div>
  );
}