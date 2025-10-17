import AboutCompanySection from "./components/AboutCompanySection";
import HeroSlider from "./components/HeroSection";
import ITServicesSection from "./components/ITServicesSection";
import ShowcaseTestimonial from "./components/ShowcaseTestimonial";
import ServiceStackImageSection from "./components/ServiceStackImageSection";
import RequestCallBackSection from "./components/RequestCallBackSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <ITServicesSection />
      <AboutCompanySection />
      <ServiceStackImageSection />
      <ShowcaseTestimonial />
      <RequestCallBackSection />
    </div>
  );
}
