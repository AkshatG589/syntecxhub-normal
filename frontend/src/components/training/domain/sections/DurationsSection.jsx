"use client";

import { motion } from "framer-motion";
import { CalendarClock, ArrowRight, Info } from "lucide-react";
import SoftGlow from "@/components/ui/backgrounds/SoftGlow";

export default function DurationsSection({ domain, durations = [] }) {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <SoftGlow />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            <CalendarClock size={16} />
            Choose Your Duration
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Flexible Training Durations
          </h2>

          <p className="mt-4 text-gray-600">
            Select a duration that fits your schedule and learning goals.
            All tracks include structured tasks and mentorship.
          </p>
        </motion.div>

        {/* ================= NO DURATIONS ================= */}
        {durations.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              max-w-xl mx-auto text-center
              rounded-2xl border border-dashed border-gray-300
              bg-gray-50 px-6 py-10
            "
          >
            <div className="flex justify-center mb-4">
              <Info className="text-blue-600" size={28} />
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
              No Active Batches Right Now
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              We’re currently preparing the next batch for the{" "}
              <span className="font-medium">{domain.name}</span> program.
              New training opportunities will be announced soon.
            </p>

            <p className="mt-3 text-sm text-gray-500">
              You can still explore the program details above.
            </p>
          </motion.div>
        )}

        {/* ================= DURATION CARDS ================= */}
        {durations.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {durations.map((duration, index) => (
              <motion.div
                key={duration._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="
                  relative rounded-2xl bg-white
                  border border-gray-200
                  p-6 flex flex-col
                  hover:-translate-y-1
                  hover:shadow-[0_18px_35px_-15px_rgba(59,130,246,0.35)]
                  transition
                "
              >
                {/* Duration Info */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {duration.label}
                  </h3>

                  <p className="mt-2 text-gray-600 text-sm">
                    {duration.months} months · {duration.totalWeeks} weeks
                  </p>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>✔ Guided learning path</li>
                  <li>✔ Weekly tasks & checkpoints</li>
                  <li>✔ Certificate on completion</li>
                </ul>

                {/* CTA */}
                <a
                  href={`/training/${domain.slug}/apply?duration=${duration.slug}`}
                  className="
                    mt-auto inline-flex items-center justify-center gap-2
                    px-4 py-2.5 rounded-lg
                    bg-blue-600 text-white
                    text-sm font-medium
                    hover:bg-blue-700 transition
                  "
                >
                  Apply for this duration
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
