"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function FinalCTA() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Divider glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Ready to Start Your
          <br />
          Training & Internship Journey?
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Join Syntecxhub to learn practical skills, work on real projects,
          and gain hands-on internship experience — all in one structured
          program.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          
          {/* SIGNED IN → Explore */}
          <SignedIn>
            <Link
              href="/training"
              className="
                inline-flex items-center justify-center gap-2
                px-8 py-3 rounded-md
                bg-black text-white
                transition-all duration-300
                hover:bg-gray-900 hover:gap-3
              "
            >
              Explore Programs
              <ArrowRight size={18} />
            </Link>
          </SignedIn>

          {/* SIGNED OUT → Get Started */}
          <SignedOut>
            <Link
              href="/sign-up"
              className="
                inline-flex items-center justify-center gap-2
                px-8 py-3 rounded-md
                border border-gray-300
                text-gray-700
                transition-all duration-300
                hover:bg-gray-50 hover:border-gray-400
              "
            >
              <GraduationCap size={18} />
              Get Started Free
            </Link>
          </SignedOut>

        </div>
      </div>
    </section>
  );
}
