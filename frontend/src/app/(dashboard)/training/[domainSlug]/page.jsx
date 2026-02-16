// src/app/training/[domainSlug]/page.jsx

import { notFound } from "next/navigation";
import { getDomainSSR } from "@/lib/api/training/domain.server";
import { getDurationsByDomainSSR } from "@/lib/api/training/duration.server";

import { DomainHero, OverviewSection, SkillsSection, DurationsSection, QualificationSection, OutcomesSection, CertificateSection, ApartSection, UpcomingBatch, TestimonialsSection, FAQSection } from "@/components/training/domain";

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
      <OverviewSection domain={domain} />
      <SkillsSection domain={domain} />
      <DurationsSection domain={domain} durations={durations} />
      <QualificationSection domain={domain} />
      <OutcomesSection domain={domain} />
      <CertificateSection />
      <ApartSection />
      <UpcomingBatch />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}