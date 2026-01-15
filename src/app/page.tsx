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
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Customers />
      <Stats />
      <Features />
      <Modules />
      <Tests />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
