"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Stat = {
  value: string;
  labelTop: string;
  labelBottom?: string;
  iconFront: React.ReactNode;
  iconBack?: React.ReactNode;
};

const STATS: Stat[] = [
  {
    value: "7+",
    labelTop: "Years of",
    labelBottom: "Experience",
    iconFront: (
      <Image alt="trophy-icon" src={"/trophy.png"} height={70} width={70} />
    ),
    iconBack: (
      <Image
        alt="trophy-icon"
        src={"/trophy.png"}
        height={70}
        width={70}
        className="opacity-90"
      />
    ),
  },
  {
    value: "100+",
    labelTop: "Projects",
    labelBottom: "Done",
    iconFront: (
      <Image alt="trophy-icon" src={"/profit.png"} height={70} width={70} />
    ),
    iconBack: (
      <Image
        alt="trophy-icon"
        src={"/profit-back.png"}
        height={70}
        width={70}
        className="opacity-90"
      />
    ),
  },
  {
    value: "50+",
    labelTop: "Happy",
    labelBottom: "Clients",
    iconFront: (
      <Image alt="trophy-icon" src={"/happy.png"} height={70} width={70} />
    ),
    iconBack: (
      <Image alt="trophy-icon" src={"/happy.png"} height={70} width={70} />
    ),
  },
  {
    value: "15+",
    labelTop: "Development",
    labelBottom: "Staff",
    iconFront: (
      <Image alt="trophy-icon" src={"/user.png"} height={70} width={70} />
    ),
    iconBack: (
      <Image alt="trophy-icon" src={"/user.png"} height={70} width={70} />
    ),
  },
];

export default function StatsRibbon() {
  const [up, setUp] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setUp(y < lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* LEFT wave */}
      <div className="pointer-events-none absolute left-0 top-0 md:bottom-0 z-0">
        <Image
          src="/counter_shape01.png"
          alt=""
          width={900}
          height={400}
          className="h-auto opacity-90 w-[110vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[20vw]"
          priority
        />
      </div>

      {/* RIGHT wave */}
      <div className="pointer-events-none absolute right-0 bottom-0 z-0">
        <Image
          src="/counter_shape03.png"
          alt=""
          width={900}
          height={400}
          className="h-auto opacity-90 w-[90vw] md:w-[40vw] lg:w-[30vw] xl:w-[20vw]"
          priority
        />
      </div>

      {/* Floating ball */}
      <div
        className={`pointer-events-none absolute right-4 top-4 sm:right-6 sm:top-6 lg:right-10 lg:top-8 z-10 footer-ball ${
          up ? "to-corner" : ""
        }`}
        aria-hidden
      >
        <Image src="/counter_shape02.png" alt="" width={44} height={44} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-4 sm:px-8 xl:px-24 max-w-screen-2xl 2xl:px-36 pt-14 pb-20">
        <div
          className="
            grid items-start
            grid-cols-1 gap-y-8
            md:grid-cols-2 md:gap-x-10
            xl:grid-cols-4
          "
        >
          {STATS.map((s, i) => (
            <StatItem key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, labelTop, labelBottom, iconFront, iconBack }: Stat) {
  return (
    <div className="group flex items-center gap-4">
      {/* Icon with 3D flip on hover */}
      <div
        className="
          relative shrink-0 grid place-items-center
          h-20 w-20
          [transform-style:preserve-3d] transition-transform duration-500
          group-hover:[transform:rotateY(180deg)]
        "
        aria-hidden
      >
        {/* Front */}
        <span className="absolute inset-0 grid place-items-center [backface-visibility:hidden]">
          {iconFront}
        </span>
        {/* Back */}
        <span className="absolute inset-0 grid place-items-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {iconBack ?? iconFront}
        </span>
      </div>

      {/* Numbers + labels */}
      <div className="flex flex-col items-baseline gap-2">
        <span className="leading-none font-extrabold text-heading text-4xl">
          {value}
        </span>
        <div className="text-body text-xl font-medium leading-snug">
          <div>{labelTop}</div>
          {labelBottom && <div>{labelBottom}</div>}
        </div>
      </div>
    </div>
  );
}
