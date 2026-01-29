import {
  Features,
  Modules,
  Stats,
  Tests,
  Customers,
  Testimonials,
  FAQ,
  CTA,
  AIFuture,
  SampleResult,
} from "@/components/sections";

// Enhanced components
import { HeroEnhanced } from "@/components/sections/HeroEnhanced";
import { LogoBand } from "@/components/sections/LogoBand";
import { HowItWorksEnhanced } from "@/components/sections/HowItWorksEnhanced";

export default function Home() {
  return (
    <>
      <HeroEnhanced />
      <LogoBand />
      <HowItWorksEnhanced />
      <Features />
      <SampleResult />
      <AIFuture />
      <Modules />
      <Tests />
      <Testimonials />
      <Customers />
      <Stats />
      <FAQ />
      <CTA />
    </>
  );
}
