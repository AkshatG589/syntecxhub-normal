"use client";

import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Aman Verma",
    role: "BCA Student",
    content:
      "The structured tasks and mentor guidance helped me build real confidence. This felt very different from normal online courses.",
    rating: 5,
  },
  {
    name: "Sneha Gupta",
    role: "Frontend Intern",
    content:
      "I liked how everything was task-based. By the end, I actually had projects to show in interviews.",
    rating: 5,
  },
  {
    name: "Rohit Sharma",
    role: "CS Graduate",
    content:
      "The training-to-internship flow is very practical. It prepares you for real work, not just theory.",
    rating: 4,
  },
];

export default function DomainTestimonial() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            What Learners Say About This Program
          </h2>
          <p className="mt-4 text-gray-600">
            Feedback from students who have experienced our structured training
            and internship approach.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg transition"
            >
              {/* STARS */}
              <div className="flex gap-1 text-blue-600 mb-3">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>

              {/* CONTENT */}
              <p className="text-gray-600 text-sm leading-relaxed">
                “{t.content}”
              </p>

              {/* USER */}
              <div className="mt-6">
                <p className="font-medium text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
