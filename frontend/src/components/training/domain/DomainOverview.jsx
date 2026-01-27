// src/components/training/domain/DomainOverview.jsx

import DividerGlow from "@/components/ui/backgrounds/DividerGlow";

export default function DomainOverview({ domain }) {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative background */}
      <DividerGlow />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          About the {domain.name} Program
        </h2>

        <div className="space-y-4 text-gray-600 leading-relaxed">
          {domain.longDescription?.length > 0 ? (
            domain.longDescription.map((para, i) => (
              <p key={i}>{para}</p>
            ))
          ) : (
            <p>
              This program is designed to build strong conceptual foundations,
              hands-on skills, and real-world experience aligned with industry
              expectations.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
