"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  text: string;
  image: string;
};

export default function ProjectHighlight() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Anupalan",
      text: "when anner unknown printer took type and scramble to make specimen book.",
      image: "/service/p1.png",
    },
    {
      id: 2,
      title: "the Meadows Wellness",
      text: "when anner unknown printer took type and scramble to make specimen book.",
      image: "/service/p2.png",
    },
    {
      id: 3,
      title: "Matrix Cab",
      text: "when anner unknown printer took type and scramble to make specimen book.",
      image: "/service/p3.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const handlePrev = () =>
    setIndex((p) => (p === 0 ? projects.length - 1 : p - 1));
  const handleNext = () =>
    setIndex((p) => (p === projects.length - 1 ? 0 : p + 1));
  const current = projects[index];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/service/h3_project_bg.jpg')" }}
      />

      {/* TOP RIGHT WAVES */}
      <div
        className="
          absolute top-0 right-0
          w-[220px] h-[160px] sm:w-[280px] sm:h-[200px] lg:w-[340px] lg:h-[240px]
          pointer-events-none select-none
          z-[1]
        "
      >
        <div className="relative w-full h-full">
          <Image
            src="/service/h3_project_shape01.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-8 xl:px-24 2xl:px-36 py-12 lg:py-16">
        <h2 className="text-center text-heading text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold mb-10">
          Projects That Make an Impact
        </h2>

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white h-12 w-12 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition"
            aria-label="Previous project"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Left text card */}
          <div className="w-full max-w-[450px] p-8 text-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] bg-primary">
            <h3 className="text-[20px] sm:text-[24px] font-extrabold mb-4">
              {current.title}
            </h3>
            <p className="text-sm sm:text-base leading-7 opacity-95">
              {current.text}
            </p>
          </div>

          {/* Right image */}
          <div className="relative w-full max-w-[600px] min-h-[470px] rounded-2xl overflow-hidden shadow-[0_12px_50px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 600px"
              priority
            />
          </div>

          {/* Right arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white h-12 w-12 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition"
            aria-label="Next project"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index === i ? "bg-primary" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
