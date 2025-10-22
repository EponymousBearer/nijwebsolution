import BreadcrumbHeroContactUs from "@/app/components/BreadcrumbHeroContactUs";
import RequestCallBackSection from "../components/RequestCallBackSection";
import ContactHelpSection from "../components/ContactHelpSection";
import MapEmbed from "../components/MapEmbed";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbHeroContactUs
        title="Contact Us"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        decoUnderTitleSrc="/breadcrumb_shape02.png"
      />

      <ContactHelpSection />

      <MapEmbed />

      <RequestCallBackSection />
    </main>
  );
}
