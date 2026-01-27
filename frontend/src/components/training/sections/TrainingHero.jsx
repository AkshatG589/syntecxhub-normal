"use client";

import { ArrowDownRight } from "lucide-react";
import ImageWithPlaceholder from "@/components/ui/ImageWithPlaceholder";

export default function TrainingHero() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* ================= TEXT ================= */}
          <div className="text-center lg:text-left mx-auto lg:mx-0 max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
              Future-Ready Training & Internship Programs
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed text-left">
              Learn through structured domains, real-world projects, and guided
              internship experience — built for students and early professionals.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 text-left">
              <li>✔ Structured learning paths</li>
              <li>✔ Real project & task-based training</li>
              <li>✔ Verified certificates & mentorship</li>
            </ul>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#training-domains"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-900 transition"
              >
                Explore Domains
                <ArrowDownRight size={18} />
              </a>
            </div>
          </div>

          {/* ================= IMAGE ================= */}
          <div className="w-full h-[300px] sm:h-[360px] lg:h-[440px] mx-auto">
            <ImageWithPlaceholder
              src="/assets/images/training/training-hero.png"
              alt="Students learning with structured training and internships"
              fill
              priority
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
