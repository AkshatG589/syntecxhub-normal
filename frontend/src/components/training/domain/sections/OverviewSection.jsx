"use client";

import { motion } from "framer-motion";
import { Info, ArrowRight } from "lucide-react";
import SoftNeutral from "@/components/ui/backgrounds/SoftNeutral";

export default function OverviewSection({ domain }) {
  if (!domain) return null;

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <SoftNeutral />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            <Info size={16} />
            Program Overview
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            About the {domain.name} Program
          </h2>

          <p className="mt-4 text-gray-600">
            A structured learning experience designed to build strong
            foundations, practical skills, and long-term career readiness.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Long Description */}
          <div className="md:col-span-2 space-y-6">
            {(domain.longDescription?.length > 0
              ? domain.longDescription
              : [
                  "This program is carefully designed to help learners master both core concepts and applied skills required in real-world environments.",
                  "You’ll progress through structured modules, complete hands-on tasks, and build confidence through continuous practice and mentor feedback.",
                  "By the end of the program, you’ll have a strong professional foundation, practical experience, and a portfolio that reflects your capabilities.",
                ]
            ).map((para, i) => (
              <div
                key={i}
                className="relative pl-5 border-l-2 border-blue-100"
              >
                <p className="text-gray-600 leading-relaxed">
                  {para}
                </p>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              What you’ll gain
            </h3>

            <ul className="space-y-3">
              {[
                "Structured learning roadmap",
                "Practical tasks & evaluations",
                "Mentor guidance & reviews",
                "Internship-oriented approach",
                "Verified certificate on completion",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 border border-gray-100 shadow-sm"
                >
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-sm font-semibold">
                    ✓
                  </span>

                  <span className="text-sm text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
