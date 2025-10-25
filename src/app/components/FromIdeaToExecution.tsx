// components/FromIdeaToExecution.tsx
"use client";
import { Circle, Cross, CSSVarProps } from "./CoreValuesSection";
import Image from "next/image";

export type FifthServiceDetailProps = {
  heading: string;
  image?: string;
  bullets: string;
};

export default function FromIdeaToExecution({
  heading,
  bullets,
}: FifthServiceDetailProps) {
  const items = bullets
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((line) => {
      const [rawTitle, ...rest] = line.split(":");
      const title = (rawTitle || "").trim();
      const desc = rest.join(":").trim(); // in case ':' appears in text
      return { title, desc };
    });

  return (
    <section className="relative w-full bg-white">
      {/* Background PNG */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 pointer-events-none"
        style={{ backgroundImage: "url('/services_bg.jpg')" }}
      />
      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-8 xl:px-24 2xl:px-36 py-12 lg:py-16">
        {/* Heading */}
        <h2 className="text-center text-[22px] sm:text-[28px] lg:text-[40px] pb-12 max-w-xl mx-auto font-bold text-heading">
          {heading}
        </h2>

        {/* Grid of cards */}
        <div className="min-h-[40rem] mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-y-20 lg:gap-x-8">
          {items.map((it, idx) => {
            const lift = [1, 3, 5].includes(idx); // stagger: 2nd, 4th, 6th
            const isBottom = idx >= 4; // items 4,5,6
            const bottomStarts = [
              "lg:col-start-3",
              "lg:col-start-6",
              "lg:col-start-9",
            ]; // center

            return (
              <div
                key={idx}
                className={[
                  "relative flex flex-col items-center justify-center text-center",
                  "rounded-tl-2xl rounded-br-2xl border-b-3 border-primary bg-white shadow-sm ring-1 ring-gray-100 px-6 py-8",
                  "transition-transform duration-200 hover:-translate-y-0.5",
                  "lg:col-span-3", // each card = 3/12 cols
                  lift ? "lg:-translate-y-8 hover:-translate-y-10" : "",
                  isBottom ? bottomStarts[idx - 4] : "", // 5th→col 3, 6th→6, 7th→9
                ].join(" ")}
              >
                {/* Image */}
                <div className="relative flex justify-center items-center">
                  <Image
                    alt="Strategy"
                    src={"/service/a1.webp"}
                    height={65}
                    width={67}
                    className="z-10"
                  />
                  <div className="absolute -top-2 z-0 text-[#FEF6E6]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="89"
                      viewBox="0 0 100 89"
                      fill="none"
                    >
                      <path
                        d="M89.3997 20.1665C90.5806 21.4322 91.2497 23.0786 91.2607 24.7458C91.2717 26.4129 90.6237 27.965 89.4585 29.0627L82.7168 35.3787C83.8857 34.2836 85.4772 33.7354 87.141 33.8548C88.8049 33.9742 90.4049 34.7514 91.589 36.0153C92.7732 37.2792 93.4445 38.9265 93.4553 40.5946C93.4661 42.2627 92.8154 43.815 91.6465 44.9101L89.4391 46.9782C90.7021 46.1158 92.2814 45.7931 93.8594 46.075C95.4374 46.3569 96.897 47.2225 97.9445 48.4977C98.9919 49.7729 99.5496 51.363 99.5051 52.948C99.4607 54.5331 98.8175 55.9955 97.705 57.041L66.4218 86.3494C65.306 87.3914 63.8048 87.938 62.2202 87.8791C60.6357 87.8202 59.0853 87.1602 57.881 86.0319C56.6767 84.9037 55.908 83.3908 55.7294 81.7978C55.5509 80.2048 55.9757 78.6498 56.9185 77.4457L46.2874 87.4056C45.1185 88.5008 43.5271 89.0489 41.8632 88.9295C40.1994 88.8101 38.5994 88.033 37.4152 86.769C36.2311 85.5051 35.5598 83.8579 35.549 82.1898C35.5382 80.5217 36.1888 78.9693 37.3578 77.8742L42.5545 73.0055C41.5403 73.9509 40.2052 74.4903 38.7733 74.5334C37.3414 74.5764 35.8998 74.1205 34.6905 73.242C33.4812 72.3636 32.5777 71.1161 32.1318 69.7089C31.6858 68.3017 31.7245 66.8205 32.2413 65.5139L22.1964 74.9247C21.0275 76.0198 19.4361 76.5679 17.7722 76.4485C16.1084 76.3291 14.5084 75.552 13.3242 74.2881C12.1401 73.0241 11.4688 71.3769 11.458 69.7088C11.4472 68.0407 12.0978 66.4883 13.2667 65.3932L25.0674 54.3375C23.8985 55.4326 22.3071 55.9808 20.6432 55.8614C18.9794 55.742 17.3794 54.9649 16.1952 53.7009C15.0111 52.437 14.3398 50.7898 14.329 49.1217C14.3182 47.4536 14.9688 45.9012 16.1377 44.8061L11.4359 49.2111C10.267 50.3062 8.67555 50.8544 7.01169 50.735C5.34784 50.6156 3.74784 49.8384 2.56369 48.5745C1.37954 47.3106 0.708235 45.6633 0.697453 43.9952C0.686672 42.3271 1.3373 40.7748 2.5062 39.6797L35.5613 8.71135C36.7302 7.61624 38.3217 7.06808 39.9855 7.18747C41.6494 7.30686 43.2494 8.08401 44.4335 9.34795C45.6177 10.6119 46.289 12.2591 46.2998 13.9272C46.3105 15.5953 45.6599 17.1477 44.491 18.2428L61.4956 2.31173C62.6645 1.21663 64.2559 0.668477 65.9198 0.787863C67.5836 0.90725 69.1836 1.6844 70.3678 2.94834C71.5519 4.21229 72.2232 5.8595 72.234 7.5276C72.2448 9.19571 71.5942 10.7481 70.4253 11.8432L65.2285 16.7119C66.242 15.7657 67.5766 15.2252 69.0084 15.181C70.4403 15.1369 71.8821 15.5918 73.092 16.4694C74.3019 17.3471 75.2063 18.594 75.6532 20.001C76.1001 21.4079 76.0625 22.8893 75.5466 24.1964L80.5275 19.5299C81.699 18.4397 83.2895 17.8948 84.9518 18.014C86.6141 18.1333 88.2131 18.9071 89.3997 20.1665Z"
                        fill="currentcolor"
                      ></path>
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-[15px] sm:text-2xl font-bold tracking-wide text-heading uppercase">
                  {it.title}
                </h3>

                {/* Description */}
                {it.desc && (
                  <p className="mt-3 text-md leading-6 text-body">{it.desc}</p>
                )}

                {/* Cross */}
                <div className="hidden md:block pointer-events-none absolute top-24 -right-10 -translate-y-1/2 z-50">
                  <div
                    className="cross-orbit"
                    style={{ left: 0, top: 0 } as React.CSSProperties}
                  >
                    <Cross
                      style={{ "--r": "35px", "--dur": "8s" } as CSSVarProps}
                    />
                  </div>
                </div>

                {/* Circle */}
                <div className="hidden md:block pointer-events-none absolute top-5 right-3 -translate-y-1/2 z-50">
                  <div style={{ left: 0, top: 0 } as React.CSSProperties}>
                    <Circle />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
