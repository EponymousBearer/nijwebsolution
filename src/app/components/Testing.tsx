"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Slide = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
};

const SLIDES: Slide[] = [
  {
    id: "s1",
    imageSrc: "/hero/slide-1.jpg",
    imageAlt: "Dentist consulting a patient",
    title: "Grow Your Practice",
    subtitle: "Attract full-arch cases with data-backed campaigns.",
    ctaLabel: "Get Started",
    ctaHref: "/get-started",
  },
  {
    id: "s2",
    imageSrc: "/hero/slide-2.jpg",
    imageAlt: "Team analyzing performance on a dashboard",
    title: "See Everything, Clearly",
    subtitle: "Unified CRM + EHR insights in one modern dashboard.",
    ctaLabel: "See Live Demo",
    ctaHref: "/demo",
  },
  {
    id: "s3",
    imageSrc: "/hero/slide-3.jpg",
    imageAlt: "Patient booking an appointment on phone",
    title: "Book More, Faster",
    subtitle: "Frictionless scheduling with automated follow-ups.",
    ctaLabel: "Explore Features",
    ctaHref: "/features",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const slideCount = SLIDES.length;
  const pointer = useRef<{ startX: number; deltaX: number } | null>(null);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % slideCount),
    [slideCount]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slideCount) % slideCount),
    [slideCount]
  );

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Touch / swipe
  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    pointer.current = { startX: e.clientX, deltaX: 0 };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointer.current) return;
    pointer.current.deltaX = e.clientX - pointer.current.startX;
  };
  const onPointerUp = () => {
    if (!pointer.current) return;
    const { deltaX } = pointer.current;
    pointer.current = null;
    const threshold = 50;
    if (deltaX <= -threshold) next();
    if (deltaX >= threshold) prev();
  };

  return (
    <section
      // FIXED pixel height on each breakpoint (no svh/lvh/dvh)
      className="
        relative w-full overflow-hidden
        h-[630px] md:h-[650px] lg:h-[540px] 2xl:h-[600px]
      "
      aria-roledescription="carousel"
      aria-label="Hero slides"
    >
      {/* Fixed background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero/bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>

      {/* Slides container (fixed height) */}
      <div
        className="relative h-full"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (pointer.current = null)}
        role="group"
        aria-live="polite"
        aria-atomic="true"
      >
        <div
          className="
            flex h-full select-none touch-pan-y
            transition-transform duration-500 ease-out will-change-transform
            motion-reduce:transition-none motion-reduce:transform-none
          "
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((slide) => (
            <article
              key={slide.id}
              className="shrink-0 w-full h-full"
              aria-roledescription="slide"
            >
              {/* Content grid stays inside fixed height; inner overflow if needed */}
              <div
                className="
                  grid h-full grid-cols-1 lg:grid-cols-12 items-center
                  px-4 sm:px-6 lg:px-8 py-8 sm:py-10
                  overflow-hidden
                "
              >
                {/* Copy (scroll within if content is long on tiny screens) */}
                <div className="lg:col-span-7 text-white overflow-y-auto pr-1 sm:pr-2 max-h-full">
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight max-w-2xl">
                    {slide.title}
                  </h1>
                  <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl">
                    {slide.subtitle}
                  </p>
                  <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href={slide.ctaHref}
                      className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white text-gray-900 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-semibold shadow-sm hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                    >
                      {slide.ctaLabel}
                    </a>
                    <a
                      href="#learn-more"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60"
                    >
                      Learn more
                    </a>
                  </div>
                </div>

                {/* Media */}
                <div className="mt-6 lg:mt-0 lg:col-span-5 relative w-full">
                  {/* Keep media constrained inside fixed hero height */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]">
                    <Image
                      src={slide.imageSrc}
                      alt={slide.imageAlt}
                      fill
                      className="object-cover rounded-2xl ring-1 ring-white/10 shadow-2xl"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority={slide.id === SLIDES[0].id}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Nav buttons: right-center on md+, bottom-right on mobile */}
        <div
          className="
            pointer-events-none absolute
            right-3 sm:right-4 md:right-6
            md:top-1/2 md:-translate-y-1/2
            bottom-4 md:bottom-auto
            flex md:flex-col gap-2 md:gap-3
          "
        >
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="pointer-events-auto inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-md ring-1 ring-black/5 backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M12.78 4.22a.75.75 0 010 1.06L8.06 10l4.72 4.72a.75.75 0 01-1.06 1.06l-5.25-5.25a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="pointer-events-auto inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-md ring-1 ring-black/5 backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M7.22 15.78a.75.75 0 010-1.06L11.94 10 7.22 5.28a.75.75 0 011.06-1.06l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 01-1.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-3 sm:bottom-5 flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? "true" : "false"}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full ring-1 ring-white/40 transition ${
                i === index ? "bg-white" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
