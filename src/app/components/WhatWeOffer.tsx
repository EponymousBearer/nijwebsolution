"use client";

type OfferItem = {
  title: string;
  desc: string;
};

export default function WhatWeOffer() {
  const uiuxItems: OfferItem[] = [
    {
      title: "Prototype Design",
      desc:
        "Visualize your ideas with prototypes that bring your vision to life. " +
        "We focus on creating interactive models to map out every element of your user interface.",
    },
    {
      title: "Graphic Design",
      desc: "Combining aesthetics with functionality, our designs evoke positive emotions and make a lasting impression on users at first glance.",
    },
    {
      title: "Frontend Design",
      desc: "From concept to completion, we craft interfaces that are not only visually appealing but also intuitive and user-friendly down to the smallest detail.",
    },
    {
      title: "Responsive Web Design",
      desc: "We design interfaces that adapt seamlessly across all devices, ensuring a consistent experience for your users on any screen size.",
    },
    {
      title: "Mobile App Design",
      desc: "Our designers specialize in creating mobile app interfaces that prioritize usability, ensuring your apps are as functional as they are beautiful.",
    },
  ];

  return (
    <section className="relative w-full bg-white">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/services_bg.jpg')" }}
      />
      <div className="relative z-10 mx-auto py-12 lg:py-16">
        {/* Heading */}
        <h2 className="text-center text-[22px] sm:text-[28px] lg:text-[40px] font-bold text-heading">
          What We Offer for UI/UX Design
        </h2>

        {/* Offers Grid */}
        <div
          className="
            mt-10 grid
            grid-cols-1 md:grid-cols-5
            border-y border-[#E8ECF4]/80
            bg-white/70 backdrop-blur-[1px]
          "
        >
          {uiuxItems.map((it, idx) => (
            <div
              key={idx}
              className={`
                p-6 lg:p-10
                border border-r border-[#E8ECF4]/80
                ${idx === uiuxItems.length - 1 ? "xl:border-r-0" : ""}
              `}
            >
              <h3 className="text-heading font-bold text-[22px] sm:text-[24px] leading-tight">
                {it.title}
              </h3>
              <p className="mt-4 text-body text-[15px] leading-7">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
