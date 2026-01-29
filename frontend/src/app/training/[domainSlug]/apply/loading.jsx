// src/app/training/[domainSlug]/apply/loading.jsx

import SkeletonLoader from "@/components/ui/loader/SkeletonLoader";

export default function Loading() {
  return (
    <section className="min-h-screen bg-white py-24">
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        {/* Page title */}
        <SkeletonLoader height={32} width="60%" />

        {/* Subtitle */}
        <SkeletonLoader height={18} width="40%" />

        {/* Form block */}
        <div className="rounded-2xl border border-gray-200 p-8 space-y-6">
          <SkeletonLoader height={44} />
          <SkeletonLoader height={44} />
          <SkeletonLoader height={44} />
          <SkeletonLoader height={44} />
          <SkeletonLoader height={56} />
        </div>
      </div>
    </section>
  );
}
