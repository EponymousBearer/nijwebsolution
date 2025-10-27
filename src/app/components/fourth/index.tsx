"use client";

import Image from "next/image";
import React from "react";

export type FourthSectionProps = {
  title: string;
  bullets: string[];
  imageMain: string;
  imageOverlay?: string;
  altMain?: string;
  altOverlay?: string;
};

function FourthSection({
  title,
  bullets,
  imageMain,
  imageOverlay,
  altMain = "Service visual",
  altOverlay = "Supporting visual",
}: FourthSectionProps) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* left: text */}
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
            {title}
          </h2>

          <ul className="mt-8 space-y-5">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                {/* green tick in a soft circle */}
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-4 w-4 text-primary"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="text-base leading-relaxed text-gray-700">{b}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* right: imagery */}
        <div className="relative mx-auto w-full max-w-[520px]">
          {/* big card */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
            <Image
              src={imageMain}
              alt={altMain}
              width={1040}
              height={720}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          {/* overlay card */}
          {imageOverlay && (
            <div className="pointer-events-none absolute -bottom-8 -left-8 hidden w-2/3 overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 sm:block">
              <Image
                src={imageOverlay}
                alt={altOverlay}
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          {/* accent shape */}
          <div className="pointer-events-none absolute -bottom-14 left-28 hidden h-24 w-36 rounded-[40%] bg-yellow-400/80 blur-2xl sm:block" />
        </div>
      </div>
    </section>
  );
}

const makeFourth = (data: FourthSectionProps): React.FC => {
  return function FourthWrapped() {
    return <FourthSection {...data} />;
  };
};

const FOURTH_DATA_BY_SLUG: Record<string, FourthSectionProps> = {
  "web-development": {
    title: "Why Choose Nij Web Solutions?",
    bullets: [
      "Customized solutions aligned with your processes.",
      "Full-stack expertise in Laravel, Node.js, React, and more.",
      "Performance-driven, secure, and scalable builds.",
      "User-centric interfaces that keep visitors engaged.",
      "End-to-end delivery from idea to deployment.",
    ],
    imageMain: "/images/Fourth/web-dev-main.jpg",
    imageOverlay: "/images/Fourth/web-dev-overlay.jpg",
    altMain: "Website development screen",
    altOverlay: "Team collaborating on a project",
  },
  "mobile-apps": {
    title: "Mobile Apps That Users Love",
    bullets: [
      "Native & cross-platform builds (iOS/Android).",
      "Offline-first patterns and smooth performance.",
      "App Store/Play Store publishing support.",
      "Crash analytics, OTA updates, and CI/CD.",
      "Secure auth and API integrations.",
    ],
    imageMain: "/images/Fourth/mobile-main.jpg",
    imageOverlay: "/images/Fourth/mobile-overlay.jpg",
  },
  "ui-ux-design": {
    title: "Human-Centered UI/UX",
    bullets: [
      "Research-driven decisions and user testing.",
      "Design systems and tokens for scale.",
      "Accessible components (WCAG) by default.",
      "Clickable prototypes to validate quickly.",
      "Hand-off with specs and components.",
    ],
    imageMain: "/images/Fourth/uiux-main.jpg",
    imageOverlay: "/images/Fourth/uiux-overlay.jpg",
  },
  ecommerce: {
    title: "High-Conversion Ecommerce",
    bullets: [
      "Fast storefronts with SEO baked in.",
      "Checkout flows that increase AOV & CR.",
      "Inventory, payments, and tax integrations.",
      "Personalization & merchandising rules.",
      "Analytics dashboards for decisions.",
    ],
    imageMain: "/images/Fourth/ecom-main.jpg",
    imageOverlay: "/images/Fourth/ecom-overlay.jpg",
  },
  seo: {
    title: "Technical SEO That Moves the Needle",
    bullets: [
      "Site structure, sitemaps, and clean routing.",
      "Core Web Vitals & performance budgets.",
      "Schema markup and rich snippets.",
      "Content strategy and programmatic SEO.",
      "Tracking, reporting, and iteration.",
    ],
    imageMain: "/images/Fourth/seo-main.jpg",
    imageOverlay: "/images/Fourth/seo-overlay.jpg",
  },
};

export const FOURTH_SECTION_BY_SLUG: Record<string, React.FC> =
  Object.fromEntries(
    Object.entries(FOURTH_DATA_BY_SLUG).map(([slug, data]) => [
      slug,
      makeFourth(data),
    ])
  );

export default FourthSection;
