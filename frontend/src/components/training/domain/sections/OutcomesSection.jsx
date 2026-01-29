"use client";

import { motion } from "framer-motion";
import { Trophy, CheckCircle } from "lucide-react";
import SoftGlow from "@/components/ui/backgrounds/SoftGlow";

export default function OutcomesSection({ domain }) {
  if (!domain?.outcomes || domain.outcomes.length === 0) return null;

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <SoftGlow />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            <Trophy size={16} />
            Outcomes
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            What You’ll Achieve
          </h2>

          <p className="mt-4 text-gray-600">
            By the end of this program, you won’t just learn — you’ll be ready
            to apply your skills confidently in real-world scenarios.
          </p>
        </motion.div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {domain.outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="
                flex items-start gap-4
                rounded-2xl border border-gray-200
                bg-white p-6
                hover:shadow-[0_18px_35px_-15px_rgba(59,130,246,0.35)]
                transition
              "
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <CheckCircle size={20} />
              </span>

              <p className="text-gray-700 leading-relaxed">
                {outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
