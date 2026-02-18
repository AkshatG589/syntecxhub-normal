// src/components/ui/loader/LoadingApply.jsx
import GridBackground from "@/components/ui/backgrounds/GridBackground";

export default function LoadingApply() {
  return (
    <div className="relative min-h-screen bg-gray-50 py-16 px-6 overflow-hidden">
      <GridBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Form Header Skeleton */}
        <div className="mb-10 space-y-4">
          <div className="h-10 w-64 bg-gray-200 rounded-xl animate-pulse" />
          <div className="h-4 w-96 bg-gray-100 rounded-md animate-pulse" />
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-8">
          {/* Grid for Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-24 bg-gray-100 rounded animate-pulse" />
                <div className="h-12 w-full bg-gray-50 border border-gray-100 rounded-xl animate-pulse" />
              </div>
            ))}
          </div>

          {/* Large Text Area Skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-32 bg-gray-100 rounded animate-pulse" />
            <div className="h-32 w-full bg-gray-50 border border-gray-100 rounded-xl animate-pulse" />
          </div>

          {/* Submit Button Skeleton */}
          <div className="flex justify-end">
            <div className="h-12 w-40 bg-gray-200 rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}