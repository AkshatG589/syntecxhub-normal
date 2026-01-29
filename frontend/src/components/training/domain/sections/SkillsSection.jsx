"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import GridBackground from "@/components/ui/backgrounds/GridBackground";

export default function SkillsSection({ domain }) {
  if (!domain?.skillsCovered || domain.skillsCovered.length === 0) {
    return null;
  }

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle grid tech background */}
      <GridBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            <Code2 size={16} />
            Skills You’ll Master
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Industry-Relevant Skills
          </h2>

          <p className="mt-4 text-gray-600">
            Carefully curated skills aligned with real-world projects and
            current industry demand.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {domain.skillsCovered.map((skill, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.35 }}
              className="
                inline-flex items-center
                px-4 py-2 rounded-full
                bg-blue-50 text-blue-700
                border border-blue-100
                text-sm font-medium
                hover:bg-blue-100 hover:border-blue-200
                transition
              "
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
