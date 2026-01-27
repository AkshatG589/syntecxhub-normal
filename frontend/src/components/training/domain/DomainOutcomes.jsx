export default function DomainOutcomes({ domain }) {
  if (!domain.outcomes?.length) return null;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
          What You Will Gain
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
          {domain.outcomes.map((o, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-blue-600">✔</span>
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
