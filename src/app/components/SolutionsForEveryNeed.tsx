"use client";

import { JSX } from "react";
import Image from "next/image";

type SolutionItem = {
  title: string;
  icon: JSX.Element;
};

export default function SolutionsForEveryNeed() {
  const items: SolutionItem[] = [
    {
      title: "Business Applications",
      icon: <Image alt="i1" src={"/service/i1.png"} height={60} width={60} />,
    },
    {
      title: "Travel Applications",
      icon: <Image alt="i2" src={"/service/i2.png"} height={60} width={60} />,
    },
    {
      title: "ERP Applications",
      icon: <Image alt="i3" src={"/service/i3.png"} height={60} width={60} />,
    },
    {
      title: "Chat Applications",
      icon: <Image alt="i4" src={"/service/i4.png"} height={60} width={60} />,
    },
    {
      title: "Education Applications",
      icon: <Image alt="i5" src={"/service/i5.png"} height={60} width={60} />,
    },
    {
      title: "Social Networking Applications",
      icon: <Image alt="i6" src={"/service/i6.png"} height={60} width={60} />,
    },
    {
      title: "E-commerce Applications",
      icon: <Image alt="i7" src={"/service/i7.png"} height={60} width={60} />,
    },
    {
      title: "Tools & Utilities Applications",
      icon: <Image alt="i8" src={"/service/i8.png"} height={60} width={60} />,
    },
  ];

  return (
    <section className="relative w-full bg-white">
      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto h-[420px] w-[420px] rounded-full blur-3xl opacity-30 bg-fuchsia-200/40 translate-y-14" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-8 xl:px-24 2xl:px-36 py-12 lg:py-16">
        <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[44px] font-bold text-heading">
          Solutions for Every Need
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
          {items.map((it, i) => (
            <article
              key={i}
              className="
                group relative flex items-center gap-5
                bg-[#f7f7f7] backdrop-blur
                shadow-[0_6px_24px_rgba(2,6,23,0.06)]
                ring-1 ring-[#ecf1fb] px-6 py-6
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(30,64,175,0.15)]
              "
            >
              {/* Animated border glow */}
              <span
                className="
                  absolute inset-0 border-[2px] border-transparent
                  transition-all duration-300 group-hover:border-primary
                "
              ></span>

              <div className="relative z-10 flex items-center gap-5">
                <div className="shrink-0 transition-colors duration-300">
                  {it.icon}
                </div>
                <h3 className="text-[18px] lg:text-[22px] text-heading leading-snug">
                  {it.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
