// src/app/training/[domainSlug]/page.jsx

import { notFound } from "next/navigation";
import { getDomainSSR } from "@/lib/api/training/domain.server";
import { getDurationsByDomainSSR } from "@/lib/api/training/duration.server";

import DomainHero from "@/components/training/domain/DomainHero";
import DomainOverview from "@/components/training/domain/DomainOverview";
import DomainDurations from "@/components/training/domain/DomainDurations";
import DomainApart from "@/components/training/domain/DomainApart";
import DomainOutcomes from "@/components/training/domain/DomainOutcomes";
import DomainTestimonials from "@/components/training/domain/DomainTestimonials";
import DomainFAQ from "@/components/training/domain/DomainFAQ";

/* ================= SEO ================= */

export async function generateMetadata({ params }) {
  const { domainSlug } = await params;

  if (!domainSlug) return {};

  try {
    const domain = await getDomainSSR(domainSlug);
    if (!domain) return {};

    return {
      title: domain.seoTitle || `${domain.name} Training | Syntecxhub`,
      description:
        domain.seoDescription ||
        `Enroll in ${domain.name} training with guided internships at Syntecxhub.`,
    };
  } catch {
    return {};
  }
}

/* ================= PAGE ================= */

export default async function DomainPage({ params }) {
  const { domainSlug } = await params;

  // 🔴 THIS LOG WILL APPEAR IN TERMINAL (NOT BROWSER)
  console.log("[DomainPage] domainSlug =", domainSlug);

  if (!domainSlug) {
    notFound();
  }

  let domain;
  let durations;

  try {
    [domain, durations] = await Promise.all([
      getDomainSSR(domainSlug),
      getDurationsByDomainSSR(domainSlug),
    ]);
    console.log("[DomainPage] domain =", domain);
    console.log("[DomainPage] durations =", durations); 
  } catch (error) {
    console.error("[DomainPage] fetch error:", error);
    notFound();
  }

  if (!domain || !domain.isActive) {
    notFound();
  }

  return (
    <>
      <DomainHero domain={domain} />
      <DomainOverview domain={domain} />
      <DomainDurations durations={durations} domain={domain} />
      <DomainApart />
      <DomainOutcomes domain={domain} />
      <DomainTestimonials />
      <DomainFAQ />
    </>
  );
}
