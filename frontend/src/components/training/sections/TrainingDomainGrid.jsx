"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Sparkles } from "lucide-react";
import ImageWithPlaceholder from "@/components/ui/ImageWithPlaceholder";

export default function TrainingDomainGrid({ domains = [] }) {
  return (
    <section className="relative py-28">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            <Sparkles size={16} />
            Career-focused programs
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Choose Your Learning Domain
          </h2>

          <p className="mt-4 text-gray-600">
            Structured learning paths designed to build real-world skills and
            internship readiness.
          </p>
        </div>

        {/* GRID */}
        {domains.length === 0 ? (
          <p className="text-center text-gray-500">
            No training domains available right now.
          </p>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            id="training-domains"
          >
            {domains.map((domain, index) => (
              <DomainCard
                key={domain._id}
                domain={domain}
                priority={index === 0}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ================= DOMAIN CARD ================= */

function DomainCard({ domain, priority }) {
  return (
    <div
      className="
        group relative rounded-2xl border border-gray-200 bg-white
        overflow-hidden transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.35)]
      "
    >
      {/* IMAGE */}
      {domain.image?.url && (
        <div className="relative h-52 w-full bg-gray-100">
          <ImageWithPlaceholder
            src={domain.image.url}
            alt={domain.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* CONTENT */}
      <div className="p-6 flex flex-col h-full">
        {/* TITLE */}
        <div className="flex items-center gap-2 mb-2">
          <BookOpen size={18} className="text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">{domain.name}</h3>
        </div>

        {/* SHORT DESCRIPTION */}
        {domain.shortDescription?.length > 0 && (
          <ul className="mt-2 space-y-1.5 text-sm text-gray-600">
            {domain.shortDescription.slice(0, 3).map((point, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-500">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* SKILLS */}
        {domain.skillsCovered?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {domain.skillsCovered.slice(0, 5).map((skill, i) => (
              <span
                key={i}
                className="
                  text-xs px-3 py-1 rounded-full
                  bg-blue-50 text-blue-700
                  border border-blue-100
                "
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
            className="
    flex-1 inline-flex items-center justify-center gap-2
    px-4 py-2.5 rounded-lg
    bg-blue-600 text-white
    text-sm font-medium
    hover:bg-blue-700 transition
  "
          >
            Explore & Apply
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* HOVER ACCENT */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition" />
    </div>
  );
}
