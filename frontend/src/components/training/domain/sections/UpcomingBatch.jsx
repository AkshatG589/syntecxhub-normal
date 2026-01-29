"use client";

import { motion } from "framer-motion";
import { CalendarDays, Bell } from "lucide-react";
import SoftNeutral from "@/components/ui/backgrounds/SoftNeutral";

export default function UpcomingBatch() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <SoftNeutral />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            rounded-3xl border border-gray-200
            bg-gradient-to-br from-white to-blue-50
            p-10 text-center
          "
        >
          {/* Icon */}
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <CalendarDays size={26} />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-900">
            Upcoming Batch Schedule
          </h2>

          {/* Message */}
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Currently, no upcoming batches have been announced for this program.
            New batches are released periodically based on mentor availability
            and enrollment capacity.
          </p>

          <p className="mt-2 text-gray-600">
            Please check back soon or stay connected to receive updates.
          </p>

          {/* Soft CTA (no action yet) */}
          <div className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium">
            <Bell size={16} />
            Batch announcements coming soon
          </div>
        </motion.div>
      </div>
    </section>
  );
}
