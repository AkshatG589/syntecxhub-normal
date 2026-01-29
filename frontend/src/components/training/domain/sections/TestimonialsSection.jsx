"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SoftNeutral from "@/components/ui/backgrounds/SoftNeutral";

const testimonials = [
  {
    name: "Aman Verma",
    role: "B.Tech Student",
    text: "The training structure helped me understand concepts step by step. The tasks felt practical and aligned with real industry work.",
  },
  {
    name: "Sneha Patel",
    role: "Final Year Student",
    text: "What I liked most was the clarity of the learning path. It didn’t feel rushed, and the guidance made a big difference.",
  },
  {
    name: "Rohit Sharma",
    role: "Beginner Developer",
    text: "This program helped me move from basics to confidence. The experience felt more practical than regular online courses.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <SoftNeutral />

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
            <Quote size={16} />
            Learner Feedback
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            What Learners Say About This Program
          </h2>

          <p className="mt-4 text-gray-600">
            Honest experiences shared by students who enrolled in our training
            programs.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="
                rounded-2xl border border-gray-200 bg-white
                p-6 shadow-sm
                hover:shadow-md transition
              "
            >
              <p className="text-gray-700 text-sm leading-relaxed">
                “{item.text}”
              </p>

              <div className="mt-6">
                <p className="font-medium text-gray-900">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
