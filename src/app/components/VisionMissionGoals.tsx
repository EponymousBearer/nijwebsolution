import Image from "next/image";

type Item = {
  title: string;
  desc: string;
  iconFront: string;
  iconBack?: string;
};

const items: Item[] = [
  {
    title: "Our Vision",
    desc: "Our vision is to empower businesses with innovative and reliable IT solutions that drive growth and create lasting impact.",
    iconFront: "/icons/vision.svg",
    iconBack: "/icons/vision.svg",
  },
  {
    title: "Our Mission",
    desc: "Our mission is to deliver exceptional technology services by combining creativity, expertise, and customer-centric approaches, ensuring every client achieves their digital transformation goals.",
    iconFront: "/icons/mission.svg",
    iconBack: "/icons/mission.svg",
  },
  {
    title: "Our Goal",
    desc: "Our goal is to be the preferred global partner for IT services by consistently exceeding client expectations through quality, innovation, and trust.",
    iconFront: "/icons/goal.svg",
    iconBack: "/icons/goal.svg",
  },
];

export default function VisionMissionGoals() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto px-4 sm:px-8 xl:px-24 2xl:px-36 max-w-screen-2xl py-8 sm:py-12">
        {/* FLEX + WRAP for responsive rows */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-8">
          {items.map((it, i) => (
            <Card
              key={i}
              {...it}
              // full width on mobile, 2-up on md, 3-up on lg
              className="w-full md:w-[calc(50%-12px)] lg:w-1/3 md:last:mx-auto lg:mx-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  title,
  desc,
  iconFront,
  iconBack,
  className = "",
}: Item & { className?: string }) {
  return (
    <div
      className={`group relative ${className} rounded-2xl border border-[#e8ecf6]/80 bg-white
        px-5 py-6 sm:px-6 sm:py-7 shadow-[0_10px_30px_rgba(17,37,80,0.06)]
        transition-all duration-300 flex gap-4 sm:gap-5`}
    >
      {/* Icon with 3D flip */}
      <div
        className="relative h-16 w-16 shrink-0 rounded-xl bg-amber-50
          flex items-center justify-center
          [transform-style:preserve-3d]
          transition-transform duration-500
          group-hover:[transform:rotateY(180deg)]"
      >
        {/* front */}
        <div className="absolute inset-0 grid place-items-center [backface-visibility:hidden]">
          <Image src={iconFront} alt="" width={36} height={36} />
        </div>
        {/* back */}
        <div className="absolute inset-0 grid place-items-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Image src={iconBack || iconFront} alt="" width={36} height={36} />
        </div>
      </div>

      {/* Text */}
      <div className="min-w-0">
        <h3 className="text-[20px] sm:text-[22px] font-bold text-heading">
          {title}
        </h3>
        <p className="mt-2 text-[15px] sm:text-[16px] leading-6 text-body">
          {desc}
        </p>
      </div>
    </div>
  );
}
