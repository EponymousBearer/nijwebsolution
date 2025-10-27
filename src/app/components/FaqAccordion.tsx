"use client";

import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

export default function FaqAccordion() {
  const faqs: FaqItem[] = [
    {
      q: "How long it will take to complete the project?",
      a: "To provide you with a precise answer, we have to evaluate the project complexity and the work scope. Knowing this information, we can provide you with the estimated time frame.",
    },
    {
      q: "Should I be familiar with the technical details to work with you?",
      a: "No. We translate business needs into technical tasks and keep you in the loop with clear, non-technical updates.",
    },
    {
      q: "What information do you need from me to start work?",
      a: "Goals, scope, key stakeholders, timeline, brand assets, and any existing designs/APIs. We’ll share a simple checklist before kickoff.",
    },
    {
      q: "Do you provide product support services after the app development is complete?",
      a: "Yes. We offer ongoing maintenance, SLAs, and feature iteration plans tailored to your budget and growth stage.",
    },
    {
      q: "Will you sign an NDA?",
      a: "Absolutely—your idea and data remain confidential. We can sign your NDA or provide ours.",
    },
    {
      q: "How long do I have to wait before the work on my project starts?",
      a: "Usually within 3–7 business days after the proposal is approved and the onboarding checklist is complete.",
    },
    {
      q: "Can you make changes to a product which other developers have already started?",
      a: "Yes. We audit the codebase, agree on priorities, then stabilize and extend the product with minimal disruption.",
    },
  ];

  // Only one open at a time
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-8 xl:px-24 2xl:px-36 py-12 lg:py-16">
        <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold text-heading">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="
                  rounded-xl overflow-hidden
                  shadow-[0_6px_20px_rgba(2,6,23,0.06)]
                  ring-1 ring-[#2d7a38]/10
                  bg-primary
                  text-white
                "
              >
                {/* Button / Summary */}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="
                    w-full flex items-center gap-4 justify-between
                    px-5 sm:px-6 lg:px-7 py-4 sm:py-5
                    text-left focus:outline-none
                    focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary
                  "
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="font-semibold text-[16px] sm:text-[18px] leading-snug">
                    {item.q}
                  </span>

                  {/* Plus / minus icon */}
                  <span
                    className={`
                      grid place-content-center h-8 w-8 rounded-full
                      bg-white/15 ring-1 ring-white/25
                      transition-transform duration-300
                      ${isOpen ? "rotate-45" : ""}
                    `}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white"
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                {/* Separator line (like the mock) */}
                <div
                  className={`
                    h-px w-full bg-white/25
                    ${isOpen ? "block" : "hidden"}
                  `}
                />

                {/* Answer (animated open/close) */}
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-header-${i}`}
                  className={`
                    grid transition-all duration-300
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0">
                    <p className="px-5 sm:px-6 lg:px-7 py-4 text-[14px] leading-7 text-white/95">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
