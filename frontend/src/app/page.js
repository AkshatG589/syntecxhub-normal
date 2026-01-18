import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import HowLearningWorks from "@/components/home/HowLearningWorks";
import TrainingInternshipSection from "@/components/home/TrainingInternshipSection";
import FutureVision from "@/components/home/FutureVision";
import FAQ from "@/components/home/FAQ";


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
    </>
  );
}
