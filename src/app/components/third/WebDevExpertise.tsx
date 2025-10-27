// components/third/WebDevExpertise.tsx
"use client";
import Image from "next/image";

type Item = { icon: string; title: string; desc: string };

const ITEMS: Item[] = [
  {
    icon: "/service/e1.webp",
    title: "Custom PHP Development",
    desc: "Transform your ideas into robust and scalable PHP web applications. Our team specializes in delivering tailored solutions for businesses of all sizes.",
  },
  {
    icon: "/service/e2.webp",
    title: "Laravel Development",
    desc: "Leverage the power of Laravel to build secure, flexible, and high-performance web applications. Perfect for businesses that need scalable solutions.",
  },
  {
    icon: "/service/e3.webp",
    title: "CodeIgniter",
    desc: "We develop full-fledged web applications with the assistance of CodeIgniter Services. Our effective and experienced team is very competent and specialized in Codeigniter Development.",
  },
  {
    icon: "/service/e4.webp",
    title: "Node.js Development",
    desc: "Take advantage of our expertise in Node.js for fast, reliable, and real-time applications that redefine performance standards..",
  },
  {
    icon: "/service/e5.webp",
    title: "Python Web Development",
    desc: "From dynamic websites to powerful business applications, our Python solutions deliver innovation and efficiency at every step.",
  },
  {
    icon: "/service/e6.webp",
    title: "AngularJS Development",
    desc: "We develop interactive, dynamic web apps using AngularJS, ensuring responsive interfaces and seamless functionality.",
  },
  {
    icon: "/service/e7.webp",
    title: "WordPress Development",
    desc: "We create secure, fast-loading WordPress websites that are easy to manage, making them perfect for eCommerce and business portfolios.",
  },
  {
    icon: "/service/e8.webp",
    title: "React.js Development",
    desc: "Our React.js solutions are designed for businesses that demand speed, scalability, and a premium user experience.",
  },
];

export default function WebDevExpertise() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto py-10 lg:py-14">
        <h2 className="text-center text-2xl sm:text-4xl font-bold text-heading">
          Our Expertise in Web Development
        </h2>

        <div className="mt-8 flex flex-wrap">
          {ITEMS.map((it, i) => {
            const isBrownRow = Math.floor(i / 4) % 2 === 0;
            const isBrownCard = isBrownRow ? i % 2 === 0 : i % 2 !== 0;

            // Define color classes
            const bgColor = isBrownCard ? "bg-[#fdf8f3]" : "bg-[#f3f8fd]";
            return (
              <div
                key={i}
                className={`min-h-96 w-full md:w-1/2 xl:w-1/4 border border-slate-200/60 ${bgColor}
                    p-12 hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className="h-20 w-20 relative">
                  <Image
                    src={it.icon}
                    alt={it.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className={`text-[22px] mt-4 font-bold text-heading`}>
                  {it.title}
                </h3>
                <p className="text-[17px] mt-4 text-body leading-6">
                  {it.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
