import { GraduationCap, Briefcase, Layers, CheckCircle } from "lucide-react";
import SoftNeutral from "@/components/ui/backgrounds/SoftNeutral";

const HIGHLIGHTS = [
  {
    icon: Layers,
    title: "Structured Training Foundation",
    description:
      "Start with a guided training phase that builds strong fundamentals and practical understanding.",
  },
  {
    icon: Briefcase,
    title: "Integrated Internship Experience",
    description:
      "Transition smoothly into an internship phase where you apply your skills in real scenarios.",
  },
  {
    icon: CheckCircle,
    title: "Outcome-Driven Progress",
    description:
      "Advance by completing tasks, projects, and milestones — not just watching content.",
  },
];

export default function TrainingInternshipSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <SoftNeutral />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm font-medium text-gray-600 mb-4">
              <GraduationCap size={18} />
              Training & Internship Program
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Learn. Practice. Intern.
              <br />
              All in One Structured Program
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Syntecxhub offers a unified training and internship program
              designed to take you from foundational concepts to real-world
              execution — step by step.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              You begin with structured training, strengthen your skills through
              guided tasks, and then apply everything during a supervised
              internship experience.
            </p>
          </div>

          {/* RIGHT HIGHLIGHTS */}
          <div className="space-y-6">
            {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="
                  flex gap-4 p-5 rounded-xl
                  border border-gray-200 bg-white
                  transition-all duration-300
                  hover:shadow-md
                "
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-black/5 shrink-0">
                  <Icon size={22} className="text-gray-800" />
                </div>

                <div>
                  <h3 className="font-medium text-base">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
