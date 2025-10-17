// components/WhatWeDoSection.tsx
import Image from "next/image";
import { JSX } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";

type Props = {
  title?: string;
  points?: string[];
  imageSrc?: string;
};

export default function WhatWeDoSection({
  title = "What we do?",
  points = [
    "At Nij Web Solutions, we help businesses transform through innovative and customized IT solutions. Since 2017, our team of experts has been delivering top-notch services that drive growth, enhance user experiences, and optimize operations.",
    "We specialize in eCommerce development, building online stores that are not only easy to use but also secure and scalable. Our web application development services focus on creating powerful, custom web apps designed to streamline business processes and improve efficiency. We craft user-centric UI/UX designs that ensure every digital interaction is intuitive and enjoyable.",
    "We aim to contribute to the technological field by delivering enhanced and compelling products with effective productivity schemes and executing business ethics to meet the industry requirements for people around the world.",
    "Additionally, our digital marketing strategies help businesses grow their online presence, attract quality leads, and boost conversions. With our IT consulting services, we provide expert guidance to help businesses make smarter technology decisions, while our Testing & QA ensures that every product is delivered with the highest quality, free of bugs, and ready for your customers.",
    "We’re here to build lasting partnerships and empower your business with the tools and strategies it needs to succeed in the digital world.",
  ],
  imageSrc = "/about-what-we-do.jpg",
}: Props) {
  return (
    <section className="w-full bg-white">
      <div className="relative mx-auto px-4 sm:px-8 xl:px-24 max-w-screen-2xl 2xl:px-36 py-10 sm:py-14">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-heading">
          {title}
        </h2>

        {/* Content (FLEX ONLY) */}
        <div className="mt-6 sm:mt-8 flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* LEFT: bullet list */}
          <div className="flex-1">
            <ul className="space-y-5">
              {points.map((p, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 min-w-6 items-center justify-center rounded-full bg-primary text-white">
                    <FiArrowRight className="h-4 w-4" />
                  </span>
                  <p className="text-[15px] leading-7 text-body">{p}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: image with rounded corners + dotted decoration */}
          <div className="flex-1 flex items-center z-20 ">
            <div className="relative w-full h-80 md:w-[26rem] mx-auto xl:mx-0 md:h-[32rem] lg:h-[32rem] xl:w-[26rem] rounded-2xl overflow-hidden">
              <Image
                src={imageSrc}
                alt="What we do"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 520px, (min-width:640px) 80vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* dotted decoration under the image */}
        <div className="absolute bottom-0 right-0 xl:bottom-12 md:right-56 lg:bottom-32 lg:right-20 xl:right-56 -translate-x-1/2 z-10 deco-rotate-slow">
          <Image
            src={"/dot-square.png"}
            alt="What we do"
            width={160}
            height={160}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

/** Small dotted SVG pattern */
function Dots({
  width = 160,
  height = 40,
}: {
  width?: number;
  height?: number;
}) {
  const cols = 16;
  const rows = 4;
  const gap = width / cols;
  const r = 2;
  const dots: JSX.Element[] = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      dots.push(
        <circle
          key={`${x}-${y}`}
          cx={x * gap + r}
          cy={y * (gap / 1.6) + r}
          r={r}
        />
      );
    }
  }
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="text-[#9AA4C5]"
      fill="currentColor"
      aria-hidden
    >
      {dots}
    </svg>
  );
}
