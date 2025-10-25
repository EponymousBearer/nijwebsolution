// components/WhyChoose.tsx
"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export type FourthServiceDetailProps = {
  heading: string;
  image: string;
  bullets: string; // newline-separated bullets
};

export default function WhyChoose({
  heading,
  image,
  bullets,
}: FourthServiceDetailProps) {
  const items = bullets
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto px-4 sm:px-8 xl:px-24 max-w-screen-2xl 2xl:px-36 py-10 lg:py-16">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          {/* Text (left like the design) */}
          <div className="w-full lg:w-1/2 max-w-xl order-2 lg:order-1">
            <h2 className="text-2xl sm:text-[40px] font-bold text-heading">
              {heading}
            </h2>
            <ul className="mt-6 space-y-3">
              {items.map((line, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 leading-6 text-body"
                >
                  <span className="mt-1 inline-flex p-1 rounded-full bg-green-500">
                    <FiArrowRight className="text-white" size={16} />
                  </span>
                  <span className="text-[17px]">{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Illustration (right like the design) */}
          <div className="w-full shrink-0 lg:w-1/2 order-1 lg:order-2">
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
        </div>
      </div>
    </section>
  );
}
