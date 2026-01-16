const items = [
  {
    title: "Structured Paths",
    description: "Well-defined domains, durations, and weekly tasks.",
  },
  {
    title: "Project Focused",
    description: "Every training includes practical, hands-on projects.",
  },
  {
    title: "Clarity First",
    description: "No noise. No overload. Just what matters.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12">
        {items.map((item) => (
          <div key={item.title}>
            <h3 className="text-xl font-medium">{item.title}</h3>
            <p className="mt-3 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
