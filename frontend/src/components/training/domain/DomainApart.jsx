import { Sparkles, Users, Award, Layers } from "lucide-react";

const FEATURES = [
  {
    icon: Users,
    title: "Mentor-guided Learning",
    desc: "Learn under experienced mentors with structured guidance.",
  },
  {
    icon: Layers,
    title: "Task-based Training",
    desc: "Real-world tasks and mini-projects for every phase.",
  },
  {
    icon: Award,
    title: "Verified Certification",
    desc: "Industry-recognized certificates after successful completion.",
  },
  {
    icon: Sparkles,
    title: "Career-oriented Design",
    desc: "Curriculum aligned with internships and job readiness.",
  },
];

export default function DomainApart() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-14">
          What Sets This Program Apart
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {FEATURES.map((f, i) => (
            <div key={i} className="text-center">
              <f.icon className="mx-auto text-blue-600 mb-4" size={28} />
              <h3 className="font-medium text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
