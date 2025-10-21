// app/about/page.tsx
import BreadcrumbHero from "@/app/components/BreadcrumbHero";
import AboutCompanyBlock from "@/app/components/AboutCompanyBlock";
import WhatWeDoSection from "../components/WhatWeDoSection";
import VisionMissionGoals from "../components/VisionMissionGoals";
import CoreValuesSection from "../components/CoreValuesSection";
import FourTagsSection from "../components/FourTagsSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1) Dynamic top section */}
      <BreadcrumbHero
        title="About Us"
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        // optional: swap the small under-title deco
        decoUnderTitleSrc="/breadcrumb_shape02.png"
      />

      {/* 2) Lower section */}
      <AboutCompanyBlock
        imageSrc="/inner_about01.png"
        eyebrow="About Company"
        heading="Who We Are?"
        years={7}
      />

      <WhatWeDoSection imageSrc="/img-cloud.png" />

      <VisionMissionGoals />

      <CoreValuesSection />

      <FourTagsSection />
    </main>
  );
}
