import {
  BookOpen,
  Trophy,
  Briefcase,
  Network,
} from "lucide-react";
import HorizonGlow from "@/components/ui/backgrounds/HorizonGlow";

const VISION_ITEMS = [
  {
    icon: BookOpen,
    title: "Expanded Learning Programs",
    description:
      "Introducing focused courses and advanced learning tracks built around industry needs and evolving technologies.",
  },
  {
    icon: Trophy,
    title: "Hackathons & Challenges",
    description:
      "Hands-on hackathons and problem-solving events to encourage innovation, collaboration, and real-world thinking.",
  },
  {
    icon: Briefcase,
    title: "Career & Job Opportunities",
    description:
      "Creating pathways that connect skilled learners with internships, projects, and future job opportunities.",
  },
  {
    icon: Network,
    title: "Growing Learning Ecosystem",
    description:
      "Building a connected ecosystem of learners, mentors, and industry professionals under one platform.",
  },
];

export default function FutureVision() {
  return (
    <section className="relative py-28 overflow-hidden">
      <HorizonGlow />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Our Future Vision
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Syntecxhub is evolving into a complete learning and opportunity
            ecosystem — continuously expanding to support learners beyond
            training and internships.
          </p>
        </div>

        {/* Vision Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VISION_ITEMS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="
                group rounded-xl border border-gray-200
                bg-white p-6
                transition-all duration-300
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
