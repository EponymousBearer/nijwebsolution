// components/third/MobileAppExpertise.tsx
"use client";

import Image from "next/image";

type Item = { icon: string; title: string; desc: string };

const ALL: Item[] = [
  {
    icon: "/service/service-android.png",
    title: "Android App Development",
    desc: "Build feature-rich and robust Android apps using advanced technologies like Java, Kotlin, and C++ for a smooth user experience.",
  },
  {
    icon: "/service/service-ios.webp",
    title: "IOS App Development",
    desc: "Create powerful and visually stunning iOS apps using the latest tools and capabilities of the iOS SDK, tailored for Apple users.",
  },
  {
    icon: "/service/service-flutter.webp",
    title: "Flutter Development",
    desc: "By utilizing Flutter, an open-source framework, we develop high-performance native Android and iOS apps from a single codebase. This approach ensures faster development cycles and cost-efficient solutions, tailored to meet your business needs.",
  },
  {
    icon: "/service/service-react.webp",
    title: "React Native Development",
    desc: "Our React Native solutions offer a smooth, responsive user experience with apps that work seamlessly across multiple platforms. By combining native functionality with cross-platform compatibility, we deliver apps that stand out in the market.",
  },
];

export default function MobileAppExpertise() {
  const [primary, ...rest] = ALL;

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('/service/services_bg.jpg')" }}
      />

      <div className="relative z-10 mx-auto px-6 xl:px-24 max-w-screen-2xl 2xl:px-36 py-10 lg:py-14">
        {/* MAIN LAYOUT */}
        <div className="mt-6 flex flex-col lg:flex-row gap-6 lg:gap-16">
          {/* LEFT */}
          <div className="w-full lg:w-[46%] flex flex-col justify-center">
            <h2 className="text-[28px] sm:text-[40px] font-bold text-heading">
              Our Expertise
            </h2>
            <BigCard {...primary} />
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-[54%] flex flex-col gap-6">
            {rest.map((it, idx) => (
              <div
                key={idx}
                className={
                  idx === 1 ? "md:translate-x-4 lg:translate-x-10" : ""
                }
              >
                <LineCard {...it} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BigCard({ icon, title, desc }: Item) {
  return (
    <article
      className="
        relative rounded-2xl bg-white/95 backdrop-blur
        border border-slate-200 shadow-[0_10px_40px_rgba(17,37,80,0.10)]
        p-5 sm:p-6 lg:p-12 mt-4
      "
    >
      <div className="flex flex-col items-start gap-4 sm:gap-5">
        {/* circular badge */}
        <div className="flex items-center gap-4">
          <span className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#EFFEED] grid place-items-center shrink-0 ring-1 ring-[#6ee56e]/30">
            <Image
              src={icon}
              alt=""
              width={36}
              height={36}
              className="object-contain"
            />
          </span>
          <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-heading">
            {title}
          </h3>
        </div>
        <p className="text-lg leading-6 text-body">{desc}</p>
      </div>
    </article>
  );
}

function LineCard({ icon, title, desc }: Item) {
  return (
    <article
      className="
        relative rounded-2xl bg-white
        border border-slate-200 shadow-[0_8px_30px_rgba(17,37,80,0.08)]
        px-5 sm:px-6 lg:px-8 py-5 sm:py-6
        transition-transform duration-300 ease-out hover:-translate-y-1
      "
    >
      <div className="absolute -left-6 lg:-left-8 top-1/2 -translate-y-1/2 h-16 w-16 rounded-lg bg-white ring-1 ring-primary shadow-md">
        <div className="h-full w-full grid place-items-center rounded-lg bg-[#F0F7FF]">
          <Image src={icon} alt="" width={28} height={28} />
        </div>
      </div>

      <div className="flex items-start gap-4 pl-10 lg:px-4">
        <div className="min-w-0">
          <h4 className="text-xl font-semibold text-heading">{title}</h4>
          <p className="mt-2 text-lg leading-6 text-body">{desc}</p>
        </div>
      </div>
    </article>
  );
}
