"use client";

import Image from "next/image";

type Service = {
  title: string;
  img: string;
  points: string[];
};

const SERVICES: Service[] = [
  {
    title: "Mobile Application Development",
    img: "/App-Development.png",
    points: [
      "Android Development",
      "iOS Development",
      "Flutter Development",
      "React Native Development",
    ],
  },
  {
    title: "Web Development",
    img: "/webd.jpg",
    points: ["React Js", "Python", "Angular Js", "WordPress", "Node Js"],
  },
  {
    title: "UI/UX Design",
    img: "/uiw.png",
    points: ["Photoshop", "Illustrator", "Adobe XD", "Sketch", "Figma"],
  },
  {
    title: "ERP Solution",
    img: "/erp.jpg",
    points: [
      "Connect remote locations",
      "Automate business processes",
      "Improved user experience",
      "More traffic to your website",
      "Lead and conversion generation",
    ],
  },
];

export default function ServicesOverviewSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto px-4 sm:px-8 xl:px-24 max-w-screen-2xl 2xl:px-36 py-28 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 justify-center items-center">
          {SERVICES.map((s, i) => (
            <Card key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ title, img, points }: Service) {
  return (
    <div
      className="
        rounded-xl border border-slate-200 bg-white
        transform transition-transform duration-300 ease-out
        hover:-translate-y-2
      
      "
    >
      {/* inner layout */}
      <div className="flex flex-col sm:flex-row md:gap-x-6 lg:gap-x-0">
        {/* image */}
        <div className="lg:w-56 sm:flex-none rounded-s-xl overflow-hidden bg-slate-50">
          <Image
            src={img}
            alt={title}
            width={320}
            height={220}
            className="h-64 w-full object-cover"
          />
        </div>

        {/* content */}
        <div className="flex-1 p-6 md:p-8">
          <h3 className="text-2xl font-bold text-heading">{title}</h3>

          <ul className="mt-3 space-y-1">
            {points.map((p, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-md text-body"
              >
                <span className="mt-[8px] h-[8px] w-[8px] bg-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
