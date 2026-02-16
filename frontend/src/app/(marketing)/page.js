import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import HowLearningWorks from "@/components/home/HowLearningWorks";
import TrainingInternshipSection from "@/components/home/TrainingInternshipSection";
import FutureVision from "@/components/home/FutureVision";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

/* ================= SEO METADATA ================= */
export const metadata = {
  title: "Future-Ready Training, Learning & Innovation Platform",
  description:
    "Syntecxhub is a modern platform offering structured training & internships, hands-on projects, future-ready courses, and innovation programs like hackathons — all designed to build real-world skills.",
  keywords: [
    "Syntecxhub",
    "training and internship platform",
    "online training programs",
    "skill development platform",
    "project based learning",
    "future-ready skills",
    "tech learning hub",
    "student innovation platform",
  ],
  openGraph: {
    title: "Syntecxhub | Create. Think. Solve.",
    description:
      "Create. Think. Solve. Syntecxhub empowers learners through structured training, internships, courses, and innovation programs built for the future.",
    url: "https://syntecxhub.com",
    siteName: "Syntecxhub",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syntecxhub | Create. Think. Solve.",
    description:
      "Create. Think. Solve. A future-ready platform for training, internships, courses, and innovation.",
  },
};


/* ================= PAGE ================= */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <WhatWeOffer />
      <HowLearningWorks />
      <TrainingInternshipSection />
      <FutureVision />
      <FAQ />
      <FinalCTA />
    </>
  );
}
