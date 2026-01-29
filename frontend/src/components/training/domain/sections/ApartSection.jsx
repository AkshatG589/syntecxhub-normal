"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import SoftGlow from "@/components/ui/backgrounds/SoftGlow";

const FEATURES = [
  {
    icon: Workflow,
    title: "Structured Learning Path",
    desc: "A clearly defined roadmap that takes you from fundamentals to real-world implementation without confusion.",
  },
  {
    icon: Target,
    title: "Internship-Oriented Training",
    desc: "Every task and project is designed to simulate real industry workflows and expectations.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Certification",
    desc: "Receive certificates that validate your skills and strengthen your academic and professional profile.",
  },
  {
    icon: Sparkles,
    title: "Mentor Guidance",
    desc: "Get regular reviews, feedback, and guidance from experienced mentors throughout the program.",
  },
];

export default function ApartSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <SoftGlow />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            <Sparkles size={16} />
            Why Syntecxhub
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            What Sets Us Apart
          </h2>

          <p className="mt-4 text-gray-600">
            We don’t just teach concepts — we help you build confidence,
            experience, and industry readiness.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="
                  group rounded-2xl border border-gray-200
                  bg-white p-6
                  hover:-translate-y-1
                  hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.35)]
                  transition
                "
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
