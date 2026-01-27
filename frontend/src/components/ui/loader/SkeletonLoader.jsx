// src/components/ui/loader/SkeletonLoader.jsx

import Link from "next/link";
import Image from "next/image";
import SoftNeutral from "@/components/ui/backgrounds/SoftNeutral";

export default function SkeletonLoader({ domains = [] }) {
  return (
    <section className="relative py-28">
      <SoftNeutral />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Training & Internship Programs
          </h1>

          <p className="mt-4 text-gray-600">
            Choose a domain, learn through structured training, work on real
            projects, and apply for guided internship experience.
          </p>
        </div>

        {/* GRID */}
        {domains.length === 0 ? (
          <p className="text-center text-gray-500">
            No training domains available right now.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain) => (
              <DomainCard key={domain._id} domain={domain} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ================= DOMAIN CARD ================= */

function DomainCard({ domain }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* IMAGE */}
      {domain.image?.url && (
        <div className="relative h-48 w-full">
          <Image
            src={domain.image.url}
            alt={domain.name}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">
          {domain.name}
        </h3>

        {/* SHORT DESCRIPTION */}
        {domain.shortDescription?.length > 0 && (
          <ul className="mt-3 space-y-1 text-sm text-gray-600">
            {domain.shortDescription.slice(0, 3).map((point, i) => (
              <li key={i}>• {point}</li>
            ))}
          </ul>
        )}

        {/* SKILLS */}
        {domain.skillsCovered?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {domain.skillsCovered.slice(0, 5).map((skill, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* ACTIONS */}
        <div className="mt-6 flex gap-3">
          <Link
            href={`/training/${domain.slug}`}
            className="flex-1 text-center px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition"
          >
            Learn more
          </Link>

          <Link
            href={`/training/${domain.slug}`}
            className="flex-1 text-center px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-900 transition"
          >
            Apply now
          </Link>
        </div>
      </div>
    </div>
  );
}
