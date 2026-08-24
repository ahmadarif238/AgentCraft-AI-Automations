import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ServicesPreviewSection } from "@/components/sections/ServicesPreviewSection";
import { IndustriesPreviewSection } from "@/components/sections/IndustriesPreviewSection";
import { CaseStudiesPreviewSection } from "@/components/sections/CaseStudiesPreviewSection";
import { ProcessPreviewSection } from "@/components/sections/ProcessPreviewSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { FlyerSection } from "@/components/sections/FlyerSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesPreviewSection />
      <IndustriesPreviewSection />
      <CaseStudiesPreviewSection />
      <ProcessPreviewSection />
      <BenefitsSection />
      <SecuritySection />
      <FlyerSection />
      {/* Objections answered before the final ask, not after someone has already converted. */}
      <FaqSection />
      <CTASection />
    </>
  );
}
