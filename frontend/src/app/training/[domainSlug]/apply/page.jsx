"use client";

import React, { useState, use, Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { applyForTraining, getEnrollmentUploadUrl } from "@/lib/api/training/enrollment.client";
import axios from "axios";
import { 
  Loader2, CheckCircle2, ArrowRight, User, 
  GraduationCap, Search, Camera, Compass
} from "lucide-react";

function ApplyForm({ domainSlug }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const durationSlug = searchParams.get("duration");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  const [formData, setFormData] = useState({
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

  // Prevents hydration mismatch by waiting for the client to mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const uploadImageToR2 = async () => {
    if (!imageFile) return null;
    try {
      const uploadConfig = await getEnrollmentUploadUrl({
        fileName: imageFile.name,
        contentType: imageFile.type,
      });

      if (!uploadConfig) return null;

      await axios.put(uploadConfig.uploadUrl, imageFile, {
        headers: { "Content-Type": imageFile.type },
      });

      return {
        url: uploadConfig.publicUrl,
        key: uploadConfig.key,
      };
    } catch (error) {
      console.error("Image upload failed:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const uploadedPhoto = await uploadImageToR2();

    const payload = {
      ...formData,
      userId: "USER_ID_FROM_CLERK", 
      domainIdentifier: domainSlug,
      durationIdentifier: durationSlug,
      profilePhoto: uploadedPhoto,
    };

    const result = await applyForTraining(payload);
    if (result) setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 bg-white rounded-3xl shadow-xl border border-gray-100 max-w-2xl mx-auto my-12 animate-in fade-in zoom-in duration-500">
        <div className="bg-green-100 p-5 rounded-full mb-6">
          <CheckCircle2 className="w-16 h-16 text-green-600" />
        </div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Application Sent!</h2>
        <p className="text-gray-600 text-lg mb-8 max-w-md">
          Your application for <span className="font-bold text-blue-600">{domainSlug?.replace(/-/g, " ")}</span> has been received.
        </p>
        <button
          onClick={() => router.push("/training")}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all"
        >
          <Compass className="w-5 h-5" /> Explore More Programs
        </button>
      </div>
    );
  }

  // Basic check for hydration
  if (!isMounted) return null;

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl font-black text-gray-900 capitalize tracking-tight">
          Apply for {domainSlug?.replace(/-/g, " ")}
        </h1>
        <p className="text-gray-500 mt-3 text-lg italic">Ready to start your {durationSlug} journey?</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        
        {/* Photo Upload Section */}
        <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center">
           <div className="relative group">
              <div className="w-32 h-32 rounded-full border-4 border-dashed border-gray-200 flex items-center justify-center overflow-hidden bg-gray-50">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <Camera className="w-10 h-10 text-gray-300" />
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white cursor-pointer hover:scale-110 transition-transform shadow-lg">
                <Camera className="w-4 h-4" />
                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
              </label>
           </div>
           <p className="text-sm text-gray-500 mt-4 font-medium text-center">
             Professional Profile Photo<br/>
             <span className="text-[10px] uppercase font-bold text-gray-400">Recommended for your ID card</span>
           </p>
        </section>

        {/* Personal Section */}
        <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b pb-4">
            <User className="text-blue-600 w-6 h-6" />
            <h3 className="text-xl font-bold text-gray-800">Personal Details</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input suppressHydrationWarning required name="fullName" placeholder="Full Name *" onChange={handleChange} className="input-style" />
            <input suppressHydrationWarning required type="email" name="email" placeholder="Email Address *" onChange={handleChange} className="input-style" />
            <input suppressHydrationWarning required type="tel" name="phone" placeholder="Phone Number *" onChange={handleChange} className="input-style" />
            <select suppressHydrationWarning name="gender" onChange={handleChange} className="input-style">
              <option value="prefer_not_to_say">Gender: Prefer not to say</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </section>

        {/* Academic Section */}
        <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b pb-4">
            <GraduationCap className="text-blue-600 w-6 h-6" />
            <h3 className="text-xl font-bold text-gray-800">Academic Background</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input suppressHydrationWarning name="collegeName" placeholder="College/University Name" onChange={handleChange} className="input-style md:col-span-2" />
            <input suppressHydrationWarning name="degree" placeholder="Degree (e.g. BCA, B.Tech)" onChange={handleChange} className="input-style" />
            <select suppressHydrationWarning name="yearOfStudy" onChange={handleChange} className="input-style">
              <option value="">Year of Study</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
              <option value="graduated">Graduated</option>
            </select>
          </div>
        </section>

        {/* Discovery Section */}
        <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b pb-4">
            <Search className="text-blue-600 w-6 h-6" />
            <h3 className="text-xl font-bold text-gray-800">Referral Info</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select suppressHydrationWarning name="source" onChange={handleChange} className="input-style">
              <option value="other">Where did you hear about us?</option>
              <option value="instagram">Instagram</option>
              <option value="linkedin">LinkedIn</option>
              <option value="friend">A Friend</option>
              <option value="college">College Seminar</option>
            </select>
            <input suppressHydrationWarning name="referredBy" placeholder="Referral Code / Person (Optional)" onChange={handleChange} className="input-style" />
          </div>
        </section>

        <button
          suppressHydrationWarning
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-black text-white font-black py-5 px-8 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xl disabled:opacity-50"
        >
          {loading ? (
            <><Loader2 className="mr-2 h-6 w-6 animate-spin" /> Finalizing Application...</>
          ) : (
            <>Submit Application <ArrowRight className="ml-2 h-6 w-6" /></>
          )}
        </button>
      </form>

      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 1rem;
          border-radius: 1rem;
          border: 1px solid #e5e7eb;
          background-color: #f9fafb;
          outline: none;
          transition: all 0.2s;
        }
        .input-style:focus {
          border-color: #2563eb;
          background-color: #fff;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }
      `}</style>
    </div>
  );
}

export default function ApplyPage({ params }) {
  const decodedParams = use(params);
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-blue-600" /></div>}>
      <ApplyForm domainSlug={decodedParams.domainSlug} />
    </Suspense>
  );
}