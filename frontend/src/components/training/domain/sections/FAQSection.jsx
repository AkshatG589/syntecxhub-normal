"use client";

import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import SoftNeutral from "@/components/ui/backgrounds/SoftNeutral";

const faqs = [
  {
    q: "Who can enroll in this training program?",
    a: "This program is designed for students, beginners, and early professionals who want structured learning with practical exposure. No prior industry experience is required unless specified.",
  },
  {
    q: "Is this training completely online?",
    a: "Yes. The entire training is conducted online, allowing you to learn at your own pace with guided tasks and mentorship.",
  },
  {
    q: "Will I receive a certificate after completion?",
    a: "Yes. A verified certificate is provided after successful completion of the training and assigned tasks.",
  },
  {
    q: "Are internships guaranteed after training?",
    a: "Internship opportunities depend on performance, availability, and program structure. The training is designed to prepare you for internship-level work.",
  },
  {
    q: "How much time do I need to dedicate weekly?",
    a: "On average, learners spend 6–10 hours per week, depending on the selected duration and learning speed.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <SoftNeutral />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            <HelpCircle size={16} />
            FAQs
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600">
            Answers to common questions about the training program.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    w-full flex items-center justify-between
                    px-6 py-4 text-left
                    text-sm md:text-base font-medium text-gray-900
                    hover:bg-gray-50 transition
                  "
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
