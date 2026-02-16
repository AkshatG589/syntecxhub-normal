// src/app/training/page.jsx
import { getAllDomainsSSR } from "@/lib/api/training/domain.server";
import { TrainingHero, TrustStrip, TrainingDomainGrid } from "@/components/training";


export const metadata = {
  title: "Training & Internship Programs | Syntecxhub",
  description:
    "Explore future-ready training & internship programs at Syntecxhub. Learn through structured domains, real-world projects, and guided internships.",
  keywords: [
    "training programs",
    "internship programs",
    "online training",
    "student internships",
    "Syntecxhub",
    "technology training",
  ],
  openGraph: {
    title: "Training & Internship Programs | Syntecxhub",
    description:
      "Choose a domain, learn with structure, and apply for guided training & internships.",
    url: "https://syntecxhub.com/training",
    siteName: "Syntecxhub",
    type: "website",
  },
};

export default async function TrainingPage() {
  const domains = await getAllDomainsSSR(); // throws → training/error.jsx

  return (
    <>
      <TrainingHero />
      <TrustStrip />

      <section id="training-domains">
        <TrainingDomainGrid domains={domains} />
      </section>
    </>
  );
}
