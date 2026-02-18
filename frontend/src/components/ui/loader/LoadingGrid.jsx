// src/components/ui/loader/LoadingGrid.jsx
import SkeletonCard from "./SkeletonCard";
import GridBackground from "@/components/ui/backgrounds/GridBackground";

export default function LoadingGrid({ items = 6 }) {
  return (
    <div className="relative min-h-screen pt-24 pb-12 overflow-hidden">
      <GridBackground />
      <div className="relative z-10 container mx-auto px-6">
        {/* Header Skeleton */}
        <div className="mb-12 space-y-4">
          <div className="h-10 w-64 bg-gray-200 rounded-xl animate-pulse" />
          <div className="h-4 w-96 bg-gray-100 rounded-md animate-pulse" />
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(items)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}