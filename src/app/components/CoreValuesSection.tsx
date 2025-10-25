import Image from "next/image";

type Item = {
  title: string;
  desc: string;
  icon: string;
};

const items: Item[] = [
  {
    title: "Discipline",
    desc: "Acting with strong ethics is a priority for everyone representing the company.",
    icon: "/Discipline.png",
  },
  {
    title: "Happiness",
    desc: "Happiness is a bond that holds teams together and keeps businesses running in many ways.",
    icon: "/Happiness.png",
  },
  {
    title: "Innovation",
    desc: "The development of innovative ideas might lead the company towards profitable products.",
    icon: "/Innovation.png",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden isolate">
      {/* === BACKGROUND GLOWS === */}
      {/* LEFT PURPLE GLOW */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2
               w-[500px] h-[500px]
               pointer-events-none
               bg-[radial-gradient(circle,rgba(168,85,247,0.15),rgba(168,85,247,0)_70%)]
               blur-[120px]"
      />

      {/* RIGHT GREEN GLOW */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2
               w-[500px] h-[500px]
               pointer-events-none
               bg-[radial-gradient(circle,rgba(16,185,129,0.18),rgba(16,185,129,0)_70%)]
               blur-[140px]"
      />

      <div className="mx-auto px-4 sm:px-8 xl:px-24 2xl:px-36 max-w-screen-2xl py-10 sm:py-14">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-heading">
          Core Value
        </h2>

        <div className="mt-10 md:mt-24 flex flex-wrap lg:flex-nowrap gap-5 justify-center">
          {items.map((it, i) => (
            <Card
              key={i}
              {...it}
              className={`w-full md:w-[calc(50%-12px)] lg:w-[32%] lg:flex-none
                  max-w-full sm:max-w-md xl:max-w-md
                  md:last:mx-auto lg:mx-0
                  ${
                    i === 1
                      ? "lg:-translate-y-8 xl:-translate-y-8 lg:hover:-translate-y-10 xl:hover:-translate-y-10 lg:mx-2 xl:mx-3"
                      : "xl:translate-y-4 hover:-translate-y-1"
                  }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export type CSSVarProps = React.CSSProperties & {
  [key: `--${string}`]: string | number;
};

function Card({
  title,
  desc,
  icon,
  className = "",
}: Item & { className?: string }) {
  return (
    <div
      className={`relative ${className} rounded-2xl border border-[#e8ecf6]/80 bg-white
                  px-6 md:px-8 py-8 h-96
                  shadow-[0_18px_50px_rgba(17,37,80,0.12)]
                  transition-all duration-300
                  hover:shadow-[0_26px_70px_rgba(17,37,80,0.16)]`}
    >
      <div className="flex items-center justify-center mx-auto">
        <Image src={icon} alt="" width={62} height={62} />
      </div>

      <h3 className="mt-5 text-center text-[20px] sm:text-[22px] font-bold text-heading">
        {title}
      </h3>
      <p className="mt-3 text-center leading-7 text-lg text-body">{desc}</p>

      {/* ✅ Orbit + circle with proper types */}
      <div className="hidden md:block pointer-events-none absolute top-20 -right-10 -translate-y-1/2 z-50">
        <div
          className="cross-orbit"
          style={{ left: 0, top: 0 } as React.CSSProperties}
        >
          <Cross style={{ "--r": "35px", "--dur": "8s" } as CSSVarProps} />
        </div>
      </div>
      <div className="hidden md:block pointer-events-none absolute -top-1 right-1 -translate-y-1/2 z-50">
        <div style={{ left: 0, top: 0 } as React.CSSProperties}>
          <Circle />
        </div>
      </div>
    </div>
  );
}

export function Cross({ style }: { style?: CSSVarProps }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      style={style}
      className="text-primary opacity-80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M5 1v8M1 5h8" />
    </svg>
  );
}

export function Circle({ style }: { style?: CSSVarProps }) {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 10 10"
      style={style}
      className="text-primary opacity-80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="5" cy="5" r="4" />
    </svg>
  );
}
