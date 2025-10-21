"use client";

import { FC, ReactNode, useState } from "react";
import Image from "next/image";

type Slide = {
  img: string;
  title: ReactNode;
  sub: string;
  cta: string;
  ctaOnClick?: () => void;
};

const slides: Slide[] = [
  {
    img: "/h9_banner_bg_2.png",
    title: (
      <>
        Your Vision, Our Expertise — <br className="hidden lg:inline" />
        <span className="text-primary">
          Empowering Businesses With Tailored Digital Solutions.
        </span>
      </>
    ),
    sub: "From Web development To Marketing, UI/UX Design, And More — we deliver excellence that drives results. Let&apos;s build your success story together!",
    cta: "LET&apos;S DISCUSS YOUR PROJECT →",
  },
  {
    img: "/h9_banner_bg_2.png",
    title: (
      <>
        Transforming Ideas Into Reality — <br className="hidden lg:inline" />
        <span className="text-primary">
          Your One-Stop Destination For Digital Excellence.
        </span>
      </>
    ),
    sub: "Whether It&apos;s Software Development, ECommerce, SEO, Or Mobile Apps, We Create Solutions That Elevate Your Business. Start Your Journey With Us Today!",
    cta: "LET&apos;S DISCUSS YOUR PROJECT →",
  },
  {
    img: "/h9_banner_bg_3.png",
    title: (
      <>
        Building Reliable <span className="text-primary">IT Solutions</span> To{" "}
        <br className="hidden lg:inline" />
        <span className="text-primary">Help Your Business Grow!</span>
      </>
    ),
    sub: "Expertise in Mobile App Development, Web Development, E-commerce, Digital Marketing, and more.",
    cta: "LET’S DISCUSS YOUR PROJECT →",
  },
];

const HeroSlider: FC = () => {
  const [index, setIndex] = useState<number>(0);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <section
      // className="min-h-[80vh] isolate md:min-h-[80vh] lg:min-h-[70vh] xl:min-h-[60] relative w-full overflow-hidden"
      // aria-roledescription="carousel"
      // FIXED pixel height on each breakpoint (no svh/lvh/dvh)
      className="
        relative w-full overflow-hidden
        h-[630px] md:h-[650px] lg:h-[540px] 2xl:h-[600px]
      "
      aria-roledescription="carousel"
      aria-label="Hero slides"
    >
      {/* Slides wrapper */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-out will-change-transform"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div key={i} className="relative min-w-full h-full">
            {/* Background image */}
            <Image
              src={s.img}
              alt=""
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />

            {/* Extra gradient tint to match shade */}
            <div className="absolute inset-0 bg-black/80" aria-hidden="true" />

            {/* PNG overlay (wavy/texture) — put your file in /public */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none">
              <Image
                src="/h9_banner_img.png"
                alt="overlay"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full mx-auto  px-6 xl:px-24 max-w-screen-2xl 2xl:px-36 flex items-center lg:items-end pb-0 lg:pb-16">
              <div className=" text-center mx-auto lg:mx-0 lg:text-left lg:max-w-md xl:max-w-3xl mt-16 sm:mt-0">
                <h1 className="text-xl md:text-[1.75rem] lg:text-3xl xl:text-[2.7rem] font-bold text-white leading-[1.1] font-sans">
                  {s.title}
                </h1>
                <p className="capitalize mt-8 text-lg sm:text-base md:text-xl text-gray-200">
                  {s.sub}
                </p>
                <button
                  onClick={s.ctaOnClick}
                  className="text-sm sm:text-base mt-16 inline-flex items-center bg-primary hover:bg-primary text-white font-semibold px-5 py-2 rounded-md shadow transition"
                >
                  {s.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Up / Down buttons */}
      <div className="hidden lg:flex flex-col gap-3 absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <button
          onClick={() => go(-1)}
          className="pointer-events-auto h-12 w-12 rounded-full bg-white/90 hover:bg-white shadow flex items-center justify-center transition"
          aria-label="Previous"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 15l6-6 6 6"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => go(1)}
          className="pointer-events-auto h-12 w-12 rounded-full bg-white/90 hover:bg-white shadow flex items-center justify-center transition"
          aria-label="Next"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 9l-6 6-6-6"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
