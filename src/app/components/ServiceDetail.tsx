// components/ServiceDetail.tsx
"use client";

import Image from "next/image";
import { BiPhoneCall } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";

export type ServiceTextBlock = {
  /** Small green label at the start of a paragraph (optional) */
  lead?: string;
  /** Bold heading before the paragraph (optional) */
  title?: string;
  /** The paragraph content (required) */
  body: string;
};

export type ServiceDetailProps = {
  /** Big heading on the right (e.g., "Web Development") */
  heading: string;
  /** BG for breadcrumb */
  banner?: string;
  /** Illustration on the left */
  image: string;
  /** One or more blocks of text with green bullets */
  blocks: ServiceTextBlock[];
  /** When true the image goes on the RIGHT (alternating section) */
  reverse?: boolean;
  /** Optional CTA line below the text */
  cta?: { text: string; phone?: string };
};

export default function ServiceDetail({
  heading,
  image,
  blocks,
  reverse = false,
  cta,
}: ServiceDetailProps) {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto px-4 sm:px-8 xl:px-24 max-w-screen-2xl 2xl:px-36 py-10 lg:py-16">
        {/* Wrapper: image + text (flex only) */}
        <div
          className={`flex flex-col items-center gap-8 ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Illustration */}
          <div className="w-full shrink-0 lg:w-1/2">
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[520px]">
              <Image
                src={image}
                alt={heading}
                fill
                priority
                className="object-contain"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="w-full lg:w-1/2 max-w-lg">
            <h2 className="text-2xl sm:text-5xl font-semibold text-heading">
              {heading}
            </h2>

            <div className="mt-5 space-y-5">
              {blocks.map((b, i) => (
                <div key={i}>
                  <div className="text-body">
                    {b.lead ? (
                      <div className="flex items-center gap-2 text-xl font-semibold text-heading">
                        <div className="bg-primary rounded-full p-[0.15rem]">
                          <FiArrowRight size={16} className="text-white" />
                        </div>
                        {b.lead}
                      </div>
                    ) : null}
                    {b.title ? (
                      <div className="text-xl font-semibold text-heading gap-2 flex items-center">
                        <div className="bg-primary rounded-full p-[0.15rem]">
                          <FiArrowRight size={16} className="text-white" />
                        </div>
                        {b.title}
                      </div>
                    ) : null}
                    <div>
                      {b.body.split("\n").map((line, i) => (
                        <p
                          key={i}
                          className={`leading-6 ${i > 0 ? "mt-2" : ""}`} // add top margin after first paragraph
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {cta ? (
              <div className="mt-2 flex items-center gap-2 text-body">
                <span className="font-medium flex items-center gap-2">
                  <BiPhoneCall size={26} className="text-primary" />
                  {cta.text}
                </span>
                {cta.phone ? (
                  <a
                    href={`tel:${cta.phone.replace(/\s+/g, "")}`}
                    className="ml-2 font-semibold text-primary hover:underline"
                  >
                    {cta.phone}
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
