"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SoftNeutral from "@/components/ui/backgrounds/SoftNeutral";

const FAQS = [
  {
    question: "What is Syntecxhub?",
    answer:
      "Syntecxhub is a modern platform designed to help students and learners explore opportunities like training and internships, skill-building, and hands-on projects across various technology domains.",
  },
  {
    question: "Do I need prior experience to join?",
    answer:
      "Since Syntecxhub offers a structured training and internship program, having some foundational knowledge in your chosen domain is recommended so you can actively participate and make the most of the learning experience.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes. Every participant who successfully completes a program or internship receives a verified digital certificate from Syntecxhub as proof of achievement. A very small processing fee applies only for issuing the certificate.",
  },
  {
    question: "Is there any cost to join?",
    answer:
      "All our training and internship programs at Syntecxhub are completely free of cost. We do not charge any fee for learning or participation. Only a very small processing fee applies for the official certificate issued after completion.",
  },
  {
    question: "Are the training and internship programs remote or onsite?",
    answer:
      "All our training and internship programs are conducted virtually, allowing learners to participate from anywhere with full flexibility and convenience.",
  },
  {
    question: "Can I showcase my projects on LinkedIn?",
    answer:
      "Absolutely. All projects you work on can be added to your portfolio and shared on LinkedIn to showcase your skills and impress recruiters.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach us anytime through our contact form, email, or social media channels. Our support team is always happy to assist you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-28 overflow-hidden">
      <SoftNeutral />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to know about Syntecxhub’s training and internship programs.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`rounded-xl border bg-white overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-gray-400 shadow-sm"
                    : "border-gray-200"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="
                    w-full flex items-center justify-between
                    px-4 py-3 text-left
                    transition-colors
                    hover:bg-gray-50
                    focus:outline-none
                    focus-visible:ring-2 focus-visible:ring-gray-300
                    rounded-xl
                  "
                >
                  <span className="font-medium text-gray-800">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div
                    className={`
                      overflow-hidden px-4 pb-1
                      text-sm text-gray-600 leading-relaxed
                      transition-opacity duration-200
                      ${isOpen ? "opacity-100 delay-100" : "opacity-0"}
                    `}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
