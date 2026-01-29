// src/app/training/[domainSlug]/apply/page.jsx

export default async function ApplyPage({ params, searchParams }) {
  // ✅ In Next.js 15+, you MUST await these
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const { domainSlug } = resolvedParams;
  const durationSlug = resolvedSearchParams?.duration;

  // These will now show the correct values in your terminal
  console.log("APPLY PAGE DEBUG");
  console.log("domainSlug:", domainSlug);
  console.log("durationSlug:", durationSlug);

  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Apply Page</h1>

        <p className="mt-4 text-gray-600">
          Domain: <strong>{domainSlug}</strong>
        </p>

        <p className="mt-2 text-gray-600">
          Duration: <strong>{durationSlug}</strong>
        </p>
      </div>
    </section>
  );
}