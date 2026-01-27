// src/components/training/TrainingHero.jsx
"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

import SoftNeutral from "@/components/ui/backgrounds/SoftNeutral";
import Btn from "@/components/ui/button/Btn";

export default function TrainingHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <SoftNeutral />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* ================= TEXT ================= */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
              Future-Ready Training & Internship Programs
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Learn through structured domains, real-world projects, and guided
              internship experience — built for students and early
              professionals.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Structured learning paths</li>
              <li>✔ Real project & task-based training</li>
              <li>✔ Verified certificates & mentorship</li>
            </ul>

            <div className="mt-8">
              <Btn
                text="Explore Domains"
                icon={ArrowDownRight}
                iconPosition="right"
                className="bg-black text-white hover:bg-gray-900"
                onClick={() => {
                  const el = document.getElementById("training-domains");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
          </div>

          {/* ================= IMAGE ================= */}
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

/* =================================================
   IMAGE WITH PLACEHOLDER
================================================== */
function HeroImage() {
  return (
    <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[440px]">
      {/* Skeleton */}
      <div className="absolute inset-0 rounded-xl bg-gray-100 animate-pulse" />

      <Image
        src="/images/training/training-hero.png"
        alt="Students learning with structured training and internships"
        fill
        priority
        className="object-contain relative z-10"
      />
    </div>
  );
}
