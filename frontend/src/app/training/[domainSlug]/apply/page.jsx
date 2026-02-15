import { notFound } from "next/navigation";
import ApplyForm from "@/components/training/enrollment/ApplyForm";
import { validateDomainDurationSSR } from "@/lib/api/training/duration.server";

export default async function ApplyPage({ params, searchParams }) {
  const { domainSlug } = await params;
  const { duration } = (await searchParams) || {};

  if (!domainSlug || !duration) {
    return notFound();
  }

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
