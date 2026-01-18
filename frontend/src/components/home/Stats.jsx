"use client";

import {
  Layers,
  Route,
  Briefcase,
  ClipboardCheck,
} from "lucide-react";
import SoftGlow from "@/components/ui/backgrounds/SoftGlow";
import CountUp from "@/components/ui/CountUp";

const STATS = [
  {
    icon: Layers,
    value: 8,
    suffix: "+",
    label: "Training & Internship Domains",
  },
  {
    icon: Route,
    value: 40,
    suffix: "+",
    label: "Structured Learning Paths",
  },
  {
    icon: Briefcase,
    value: 12,
    suffix: "+",
    label: "Internship Tracks",
  },
  {
    icon: ClipboardCheck,
    value: 100,
    suffix: "+",
    label: "Projects Designed",
  },
];

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      <SoftGlow />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Syntecxhub at a Glance
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A growing ecosystem of structured learning, hands-on internships,
            and real-world project experiences.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map(({ icon: Icon, value, suffix, label }) => (
            <div
              key={label}
              className="
                flex flex-col items-center text-center
                transition-transform duration-300
                hover:-translate-y-1
              "
            >
              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-black/5">
                <Icon size={26} className="text-gray-800" />
              </div>

              <div className="text-3xl font-semibold">
                <CountUp to={value} />
                {suffix}
              </div>

              <div className="mt-1 text-sm text-gray-600">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
