import BreadcrumbHeroServices from "@/app/components/BreadcrumbHeroServices";
import ServiceDetail from "@/app/components/ServiceDetail";
import {
  SERVICE_CONTENT,
  FOURTH_SERVICE_CONTENT,
  FIFTH_SERVICE_CONTENT,
} from "../_content";
import { THIRD_SECTION_BY_SLUG } from "@/app/components/third";
import WhyChoose from "@/app/components/WhyChoose";
import FromIdeaToExecution from "@/app/components/FromIdeaToExecution";
import WhatWeOffer from "@/app/components/WhatWeOffer";
import SolutionsForEveryNeed from "@/app/components/SolutionsForEveryNeed";
import ProjectHighlight from "@/app/components/ProjectHighlight";
import FaqAccordion from "@/app/components/FaqAccordion";

type Params = { service: string };

export default async function Service({ params }: { params: Promise<Params> }) {
  const { service } = await params;

  // Fallback to "web-development" if unknown
  const sections =
    SERVICE_CONTENT[service] ?? SERVICE_CONTENT["web-development"];

  const fourthsections =
    FOURTH_SERVICE_CONTENT[service] ??
    FOURTH_SERVICE_CONTENT["web-development"];

  const fifthsections =
    FIFTH_SERVICE_CONTENT[service] ?? FIFTH_SERVICE_CONTENT["web-development"];

  // Dynamic title from content or slug
  const title =
    sections?.[0]?.heading ??
    service.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  // Dynamic breadcrumb image
  const heroImage = sections?.[0]?.banner ?? "/SE.png";

  const Third =
    THIRD_SECTION_BY_SLUG[service] ?? THIRD_SECTION_BY_SLUG["web-development"];

  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbHeroServices
        title={title}
        crumbs={[{ label: "Home", href: "/" }, { label: title }]}
        image={heroImage}
      />

      {/* Render all service sections; alternate sides */}
      {sections.map((s, i) => (
        <ServiceDetail key={i} {...s} reverse={i % 2 === 1} />
      ))}

      {/* 3rd section - expertise / offerings list */}
      <Third />

      {/* 4th section - why choose */}
      {fourthsections.map((s, i) => (
        <WhyChoose key={i} {...s} />
      ))}

      {/* 5th section - From Idea to Execution */}
      {fifthsections.map((s, i) => {
        if (service === "erp-solution") {
          return null;
        }

        if (service === "ui-ux-design") {
          return <WhatWeOffer key={`what-we-offer-${i}`} />;
        }

        // all other services render normally
        return <FromIdeaToExecution key={i} {...s} />;
      })}

      <SolutionsForEveryNeed />

      <ProjectHighlight />

      <FaqAccordion />
    </main>
  );
}
