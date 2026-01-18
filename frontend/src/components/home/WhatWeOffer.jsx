import {
  GraduationCap,
  Briefcase,
  Code,
  Target,
} from "lucide-react";

const OFFERINGS = [
  {
    icon: GraduationCap,
    title: "Training & Internship Programs",
    description:
      "Carefully designed programs that combine structured learning with real internship exposure.",
  },
  {
    icon: Code,
    title: "Real-World Projects",
    description:
      "Hands-on projects inspired by industry use cases to build practical skills and confidence.",
  },
  {
    icon: Target,
    title: "Career-Focused Learning",
    description:
      "Every learning path is aligned with industry expectations and job-ready outcomes.",
  },
  {
    icon: Briefcase,
    title: "Mentored Internship Experience",
    description:
      "Guidance, feedback, and structured tasks that simulate real professional environments.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="relative py-24 bg-white">
      {/* Divider Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            What We Offer
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A balanced ecosystem of learning, internships, and practical
            exposure — designed to prepare you for the real world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {OFFERINGS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="
                group rounded-xl border border-gray-200
                p-6 transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-black/5">
                <Icon size={22} className="text-gray-800" />
              </div>

              <h3 className="font-medium text-lg">
                {title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
