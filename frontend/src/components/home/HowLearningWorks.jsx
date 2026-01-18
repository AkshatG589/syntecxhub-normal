import {
  Compass,
  Calendar,
  CheckSquare,
  Hammer,
} from "lucide-react";
import DirectionalGlow from "@/components/ui/backgrounds/DirectionalGlow";

const STEPS = [
  {
    icon: Compass,
    title: "Choose Your Path",
    description:
      "Select a training & internship domain that aligns with your interests and goals.",
  },
  {
    icon: Calendar,
    title: "Follow a Structured Plan",
    description:
      "Progress through a clear, week-wise roadmap designed for consistent learning.",
  },
  {
    icon: CheckSquare,
    title: "Complete Guided Tasks",
    description:
      "Solve weekly assignments and challenges to reinforce practical understanding.",
  },
  {
    icon: Hammer,
    title: "Build Real Projects",
    description:
      "Apply what you learn by creating real-world projects that strengthen your portfolio.",
  },
];

export default function HowLearningWorks() {
  return (
    <section className="relative py-24 overflow-hidden">
      <DirectionalGlow />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            How Learning Works
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A simple, structured approach that takes you from fundamentals
            to real-world application.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {STEPS.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-black/5">
                <Icon size={26} className="text-gray-800" />
              </div>

              <h3 className="font-medium text-lg">
                {title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {description}
              </p>

              {/* Connector (desktop only) */}
              {index !== STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-2.5rem] w-10 h-px bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
