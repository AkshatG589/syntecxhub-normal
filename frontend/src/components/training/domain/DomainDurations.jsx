import { Clock, ArrowRight } from "lucide-react";

export default function DomainDurations({ durations = [], domain }) {
  return (
    <section id="durations" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-12">
          Training Durations Available
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {durations.map((d) => (
            <div
              key={d._id}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center hover:shadow-lg transition"
            >
              <Clock className="mx-auto text-blue-600 mb-3" />

              <h3 className="text-lg font-semibold text-gray-900">
                {d.label}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {d.totalWeeks} weeks · {d.months} months
              </p>

              <button
                disabled
                className="mt-6 inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium opacity-80 cursor-not-allowed"
              >
                Apply (Coming Soon)
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
