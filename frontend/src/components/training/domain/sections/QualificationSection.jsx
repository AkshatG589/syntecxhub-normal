"use client";

import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";
import SoftGlow from "@/components/ui/backgrounds/SoftGlow";

export default function QualificationSection({ domain }) {
  if (!domain?.qualification || domain.qualification.length === 0) return null;

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <SoftGlow />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            <UserCheck size={16} />
            Eligibility
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Who Can Apply
          </h2>

          <p className="mt-4 text-gray-600">
            This program is designed to be accessible while ensuring learners
            can keep up with the pace and expectations.
          </p>
        </motion.div>

        {/* Qualification List */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            rounded-2xl border border-gray-200 bg-white
            p-6 md:p-8
            grid grid-cols-1 sm:grid-cols-2 gap-4
          "
        >
          {domain.qualification.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 text-sm text-gray-700"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
