import {
  Hero,
  Features,
  Modules,
  Stats,
  Testimonials,
  FAQ,
  CTA,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Modules />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
