"use client";

import { ArrowDownRight } from "lucide-react";
import ImageWithPlaceholder from "@/components/ui/ImageWithPlaceholder";
import SoftGlow from "@/components/ui/backgrounds/SoftGlow";

export default function DomainHero({ domain }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <SoftGlow />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* TEXT */}
        <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
            {domain.name} Training & Internship Program
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            {domain.shortDescription?.[0] ||
              "Learn industry-ready skills through structured training and guided internships."}
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href="#durations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
              View Training Durations
              <ArrowDownRight size={18} />
            </a>
          </div>
        </div>

        {/* IMAGE */}
        {domain.image?.url && (
          <div className="w-full h-[320px] sm:h-[380px] lg:h-[440px]">
            <ImageWithPlaceholder
              src={domain.image.url}
              alt={`${domain.name} training program`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}
