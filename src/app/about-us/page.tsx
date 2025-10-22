import BreadcrumbHero from "@/app/components/BreadcrumbHero";
import AboutCompanyBlock from "@/app/components/AboutCompanyBlock";
import WhatWeDoSection from "../components/WhatWeDoSection";
import VisionMissionGoals from "../components/VisionMissionGoals";
import CoreValuesSection from "../components/CoreValuesSection";
import FourTagsSection from "../components/FourTagsSection";
import ShowcaseTestimonialAboutUs from "../components/ShowcaseTestimonialAboutUs";
import RequestCallBackSection from "../components/RequestCallBackSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbHero
        title="About Us"
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        decoUnderTitleSrc="/breadcrumb_shape02.png"
      />

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

      <ShowcaseTestimonialAboutUs />

      <RequestCallBackSection />
    </main>
  );
}
