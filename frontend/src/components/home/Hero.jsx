"use client";

import GridBackground from "@/components/ui/backgrounds/GridBackground";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, LayoutDashboard, GraduationCap } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <GridBackground variant="hero" />

      {/* Floating Assets (BOTTOM ONLY – DESKTOP) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* Progress / Roadmap Card */}
        <Image
          src="/assets/code-progress.png"
          alt="Learning progress"
          width={300}
          height={220}
          className="absolute bottom-24 left-16 animate-floatSlower drop-shadow-xl"
        />

        {/* Achievement / Trophy */}
        <Image
          src="/assets/trophy.png"
          alt="Achievement"
          width={160}
          height={160}
          className="absolute bottom-28 right-20 animate-floatSlow drop-shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Empowering Skills for the Future
          <br />
          <span className="text-gray-500">with Syntecxhub</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          A structured platform for building real-world skills through
          guided training, internships, and future-ready learning paths.
        </p>

        {/* Taglines */}
        <div className="mt-5 text-sm tracking-wide text-gray-500">
          Create • Think • Solve
        </div>

        <div className="mt-2 text-sm text-gray-400">
          Software Solutions • Internship Training • Future Courses
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

          {/* SIGNED IN */}
          <SignedIn>
            <Link
              href="/dashboard"
              className="
                inline-flex items-center justify-center gap-2
                px-7 py-3 rounded-md
                bg-black text-white
                transition-all duration-300
                hover:bg-gray-900 hover:gap-3
              "
            >
              View Dashboard
              <LayoutDashboard size={18} />
            </Link>

            <Link
              href="/training"
              className="
                inline-flex items-center justify-center gap-2
                px-7 py-3 rounded-md
                border border-gray-300
                text-gray-700
                transition-all duration-300
                hover:bg-gray-50 hover:border-gray-400
              "
            >
              Explore Programs
              <ArrowRight size={18} />
            </Link>
          </SignedIn>

          {/* SIGNED OUT */}
          <SignedOut>
            <Link
              href="/sign-up"
              className="
                inline-flex items-center justify-center gap-2
                px-7 py-3 rounded-md
                bg-black text-white
                transition-all duration-300
                hover:bg-gray-900 hover:gap-3
              "
            >
              Get Started Free
              <GraduationCap size={18} />
            </Link>

            <Link
              href="/training"
              className="
                inline-flex items-center justify-center gap-2
                px-7 py-3 rounded-md
                border border-gray-300
                text-gray-700
                transition-all duration-300
                hover:bg-gray-50 hover:border-gray-400
              "
            >
              Explore Programs
              <ArrowRight size={18} />
            </Link>
          </SignedOut>

        </div>
      </div>
    </section>
  );
}
