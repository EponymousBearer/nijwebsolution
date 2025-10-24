// components/third/index.ts
import WebDevExpertise from "./WebDevExpertise";
import MobileAppExpertise from "./MobileAppExpertise";
import UiUxExpertise from "./UiUxExpertise";
import ErpOfferings from "./ErpOfferings";
import DigitalMarketingServices from "./DigitalMarketingServices";

export const THIRD_SECTION_BY_SLUG: Record<string, React.ComponentType> = {
  "web-development": WebDevExpertise,
  "mobile-app-development": MobileAppExpertise,
  "ui-ux-design": UiUxExpertise,
  "erp-solution": ErpOfferings,
  "marketing-services": DigitalMarketingServices,
};

// If you only have the title, normalize it → slug.
export const pickThirdByTitle = (title: string) => {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return THIRD_SECTION_BY_SLUG[slug] ?? WebDevExpertise;
};
