import {
  Hero,
  Features,
  Modules,
  Stats,
  Tests,
  Customers,
  Testimonials,
  FAQ,
  CTA,
  HowItWorks,
  AIFuture,
  SampleResult,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Customers />
      <Stats />
      <HowItWorks />
      <Features />
      <SampleResult />
      <AIFuture />
      <Modules />
      <Tests />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
