// src/components/ui/loader/SkeletonCard.jsx
export default function SkeletonCard() {
  return (
    <div className="w-full p-5 border border-gray-100 rounded-3xl bg-white/50 backdrop-blur-sm shadow-sm">
      {/* Image Area */}
      <div className="w-full h-44 bg-gray-200 rounded-2xl animate-pulse mb-4" />
      
      {/* Text Content */}
      <div className="space-y-3">
        <div className="h-6 w-3/4 bg-gray-200 rounded-md animate-pulse" />
        <div className="h-4 w-full bg-gray-100 rounded-md animate-pulse" />
        <div className="h-4 w-5/6 bg-gray-100 rounded-md animate-pulse" />
      </div>

      {/* Footer / Buttons */}
      <div className="mt-6 flex justify-between items-center">
        <div className="h-8 w-24 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-5 w-16 bg-gray-100 rounded-md animate-pulse" />
      </div>
    </div>
  );
}