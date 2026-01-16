import Hero from "@/components/home/Hero";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import DomainsPreview from "@/components/home/DomainsPreview";
import HowItWorks from "@/components/home/HowItWorks";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <WhatWeOffer />
      <DomainsPreview />
      <HowItWorks />
      <FinalCTA />
    </main>
  );
}
