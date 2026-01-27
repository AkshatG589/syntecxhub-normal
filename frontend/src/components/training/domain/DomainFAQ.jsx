const FAQS = [
  {
    q: "Who can apply for this program?",
    a: "Students, freshers, and early-career professionals interested in this domain.",
  },
  {
    q: "Is this program completely online?",
    a: "Yes, the entire training and internship experience is conducted online.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes, verified certificates are provided after successful completion.",
  },
  {
    q: "Are tasks and projects included?",
    a: "Yes, every duration includes structured tasks and real-world projects.",
  },
];

export default function DomainFAQ() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {FAQS.map((f, i) => (
            <div key={i}>
              <h3 className="font-medium text-gray-900">{f.q}</h3>
              <p className="mt-2 text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
