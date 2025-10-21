"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  BiTrophy,
  BiBarChartSquare, // or BiLineChart
  BiHappy,
  BiUserCircle,
} from "react-icons/bi"; // ← react-icons

type Stat = {
  value: string;
  labelTop: string;
  labelBottom?: string;
  // use React nodes for icons now
  iconFront: React.ReactNode;
  iconBack?: React.ReactNode;
};

const STATS: Stat[] = [
  {
    value: "7+",
    labelTop: "Years of",
    labelBottom: "Experience",
    iconFront: <BiTrophy size={44} className="text-green-600" />,
    iconBack: <BiTrophy size={44} className="text-green-600 opacity-90" />,
  },
  {
    value: "100+",
    labelTop: "Projects",
    labelBottom: "Done",
    iconFront: <BiBarChartSquare size={44} className="text-green-600" />,
    iconBack: (
      <BiBarChartSquare size={44} className="text-green-600 opacity-90" />
    ),
  },
  {
    value: "50+",
    labelTop: "Happy",
    labelBottom: "Clients",
    iconFront: <BiHappy size={44} className="text-green-600" />,
    iconBack: <BiHappy size={44} className="text-green-600 opacity-90" />,
  },
  {
    value: "15+",
    labelTop: "Development",
    labelBottom: "Staff",
    iconFront: <BiUserCircle size={44} className="text-green-600" />,
    iconBack: <BiUserCircle size={44} className="text-green-600 opacity-90" />,
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
    <section className="relative w-full overflow-hidden bg-white">
      {/* LEFT wave */}
      <div className="pointer-events-none absolute left-0 top-0 md:bottom-0 z-0">
        <Image
          src="/counter_shape01.png"
          alt=""
          width={900}
          height={400}
          className="h-auto opacity-90 w-[110vw] sm:w-[80vw] md:w-[65vw] xl:w-[48vw] 2xl:w-[42vw]"
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
          className="h-auto opacity-90 w-[110vw] sm:w-[85vw] md:w-[70vw] xl:w-[50vw] 2xl:w-[44vw]"
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
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div
          className="
            grid items-start
            grid-cols-1 gap-y-8
            md:grid-cols-2 md:gap-x-10 md:gap-y-14
            xl:grid-cols-4 xl:gap-x-16 xl:gap-y-10
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
    <div className="group flex items-center md:items-start gap-4 sm:gap-5">
      {/* Icon with 3D flip on hover */}
      <div
        className="
          relative shrink-0 grid place-items-center rounded-full bg-white
          ring-1 ring-[#45B649]/30
          h-14 w-14 sm:h-16 sm:w-16 xl:h-18 xl:w-18
          [transform-style:preserve-3d] transition-transform duration-500
          group-hover:[transform:rotateY(180deg)]
        "
        aria-hidden
      >
        {/* Front */}
        <span className="absolute inset-0 grid place-items-center [backface-visibility:hidden]">
          {iconFront}
        </span>
        {/* Back (can be same as front; tweak class for a subtle change) */}
        <span className="absolute inset-0 grid place-items-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {iconBack ?? iconFront}
        </span>
      </div>

      {/* Numbers + labels */}
      <div className="flex items-baseline gap-3">
        <span className="leading-none font-extrabold text-[#0A1F7A] text-3xl sm:text-4xl lg:text-5xl">
          {value}
        </span>
        <div className="text-[#2A3463] text-sm sm:text-base lg:text-lg leading-snug">
          <div>{labelTop}</div>
          {labelBottom && <div>{labelBottom}</div>}
        </div>
      </div>
    </div>
  );
}
