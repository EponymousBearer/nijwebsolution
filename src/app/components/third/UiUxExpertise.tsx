// components/third/UiUxExpertise.tsx
"use client";
import Image from "next/image";

const ITEMS = [
  {
    icon: "/service/u1.webp",
    title: "Photoshop",
    desc: "Our talented artists use Photoshop to create original and captivating UI/UX layouts tailored to your brand’s identity.",
  },
  {
    icon: "/service/u2.webp",
    title: "Illustrator",
    desc: "We craft memorable illustrations and design elements that set your business apart from the competition.",
  },
  {
    icon: "/service/u3.webp",
    title: "Adobe XD",
    desc: "Using Adobe XD, we deliver cutting-edge UI/UX solutions that align with the latest design trends and user expectations.",
  },
  {
    icon: "/service/u4.webp",
    title: "Sketch",
    desc: "Our experts utilize Sketch to create stunning, goal-oriented designs that capture your business's essence.",
  },
  {
    icon: "/service/u5.webp",
    title: "Figma",
    desc: "Figma allows us to streamline collaboration and deliver designs that are consistent, interactive, and aligned with your business objectives.",
  },
  {
    icon: "/service/u6.webp",
    title: "After Effects",
    desc: "We add a dynamic touch with motion graphics and special effects that enhance your digital content and presentations.",
  },
];

export default function UiUxExpertise() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('/service/services_bg.jpg')" }}
      />
      <div className="relative z-10 mx-auto px-6 xl:px-24 max-w-screen-2xl 2xl:px-36 py-10 lg:py-16">
        <h2 className="text-center text-2xl sm:text-4xl font-bold text-heading">
          Our Expertise in UI/UX Design
        </h2>

        <div className="mt-8 flex flex-wrap">
          {ITEMS.map((it, i) => (
            <div key={i} className="w-full md:w-1/2 xl:w-1/3 p-3 min-h-80">
              <div className="h-full rounded-xl border border-slate-200 bg-white p-10 shadow-xl hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-3">
                  <span className="relative h-16 w-16">
                    <Image
                      src={it.icon}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </span>
                  <h3 className="font-semibold text-xl text-heading">
                    {it.title}
                  </h3>
                </div>
                <p className="mt-3 text-body text-md leading-6">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
