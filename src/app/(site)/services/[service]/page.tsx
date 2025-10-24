import BreadcrumbHeroServices from "@/app/components/BreadcrumbHeroServices";
import ServiceDetail from "@/app/components/ServiceDetail";
import { SERVICE_CONTENT } from "../_content";
import { THIRD_SECTION_BY_SLUG } from "@/app/components/third";
import { FOURTH_SECTION_BY_SLUG } from "@/app/components/fourth";

type Params = { service: string };

export default async function Service({ params }: { params: Promise<Params> }) {
  const { service } = await params;

  // Fallback to "web-development" if unknown
  const sections =
    SERVICE_CONTENT[service] ?? SERVICE_CONTENT["web-development"];

  // Dynamic title from content or slug
  const title =
    sections?.[0]?.heading ??
    service.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  // Dynamic breadcrumb image
  const heroImage = sections?.[0]?.banner ?? "/SE.png";

  const Third =
    THIRD_SECTION_BY_SLUG[service] ?? THIRD_SECTION_BY_SLUG["web-development"];

  const Fourth =
    FOURTH_SECTION_BY_SLUG[service] ??
    FOURTH_SECTION_BY_SLUG["web-development"];

  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbHeroServices
        title={title}
        crumbs={[{ label: "Home", href: "/" }, { label: title }]}
        image={heroImage} // ✅ Dynamic image
      />

      {/* Render all service sections; alternate sides */}
      {sections.map((s, i) => (
        <ServiceDetail key={i} {...s} reverse={i % 2 === 1} />
      ))}

      {/* 3rd section – expertise / offerings list */}
      <Third />

      {/* 4th section – Why Choose */}
      <Fourth />
    </main>
  );
}
