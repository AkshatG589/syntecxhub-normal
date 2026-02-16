import { notFound } from "next/navigation";
import ApplyForm from "@/components/training/enrollment/ApplyForm";
import { validateDomainDurationSSR } from "@/lib/api/training/duration.server";

/* ---------------- METADATA GENERATION ---------------- */
export async function generateMetadata({ params, searchParams }) {
  const { domainSlug } = await params;
  const { duration } = (await searchParams) || {};

  if (!domainSlug || !duration) return { title: "Apply | Syntecxhub" };

  try {
    const data = await validateDomainDurationSSR(domainSlug, duration);
    if (!data) return { title: "Apply | Syntecxhub" };

    const { domain, duration: durationData } = data;

    return {
      // Accuracy: "Apply: Web Development (6 Months)"
      title: `Apply: ${domain.name} • ${durationData.label} | Syntecxhub`, 
      description: `Join the ${domain.name} program at Syntecxhub. Duration: ${durationData.label}. Submit your application to start your internship.`,
      openGraph: {
        title: `Enroll in ${domain.name} Training`,
        description: `Start your ${durationData.label} journey in ${domain.name}.`,
      },
    };
  } catch {
    return { title: "Apply | Syntecxhub" };
  }
}

/* ---------------- PAGE COMPONENT ---------------- */
export default async function ApplyPage({ params, searchParams }) {
  const { domainSlug } = await params;
  const { duration } = (await searchParams) || {};

  if (!domainSlug || !duration) {
    return notFound();
  }

  // Next.js handles duplicate requests automatically via fetch cache/deduping
  const data = await validateDomainDurationSSR(domainSlug, duration);

  if (!data) {
    return notFound();
  }

  const { domain, duration: durationData } = data;

  return (
    <div className="py-16 px-6 bg-gray-50 min-h-screen">
      <ApplyForm
        domain={domain}
        duration={durationData}
      />
    </div>
  );
}