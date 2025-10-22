import BreadcrumbHero from "@/app/components/BreadcrumbHero";
import ServicesOverviewSection from "@/app/components/ServicesOverviewSection";

export default function Work() {
  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbHero
        title="Our Work"
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Work" }]}
        decoUnderTitleSrc="/breadcrumb_shape02.png"
      />

      <ServicesOverviewSection />
    </main>
  );
}
