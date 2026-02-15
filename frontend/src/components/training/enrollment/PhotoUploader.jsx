"use client";

import React, { useState, useEffect, useRef } from "react";
import { Pencil, User } from "lucide-react";
import ImageWithPlaceholder from "@/components/ui/ImageWithPlaceholder";

export default function PhotoUploader({ onFileSelect }) {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileSelect(file);
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  // Cleanup object URL to avoid memory leaks
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative group">
        {/* Profile Circle */}
        <div className="relative h-28 w-28 rounded-full bg-gray-100 border-4 border-white shadow-md flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
          {preview ? (
            <ImageWithPlaceholder
              src={preview}
              alt="Profile Preview"
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex flex-col items-center text-gray-400">
              <User size={40} strokeWidth={1.5} />
            </div>
          )}

          {/* Hover Overlay */}
          <div 
            className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center"
            onClick={() => fileInputRef.current?.click()}
          >
            <span className="text-white text-xs font-medium">Change Photo</span>
          </div>
        </div>

        {/* Floating Pencil Icon */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="absolute bottom-1 right-1 bg-blue-600 p-2 rounded-full text-white shadow-lg border-2 border-white hover:bg-blue-700 transition-colors active:scale-90"
          title="Upload Photo"
        >
          <Pencil size={16} />
        </button>
      </div>

      <div className="text-center">
        <p className="text-sm font-semibold text-gray-700">Profile Photo</p>
        <p className="text-xs text-gray-500 mt-1">Click the icon to upload</p>
      </div>

      {/* Hidden Native Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}