import Image from "next/image";

export default function AboutCompanyBlock({
  imageSrc = "/inner_about01.png",
  eyebrow = "About Company",
  heading = "Who We Are?",
  paragraphs = [
    "At Nij Web Solutions, we are more than just an IT outsourcing company—we’re your growth partners. Since 2017, we’ve been helping businesses of all sizes turn their ideas into reality with innovative, reliable, and user-focused solutions.",
    "Our mission is simple: to make technology work for you. From crafting responsive websites and building intuitive mobile apps to designing seamless user experiences and driving results through digital marketing, we bring expertise and creativity to every project.",
    "We don’t just deliver projects; we solve problems, add value, and create lasting partnerships. Whether you’re a startup looking to establish your digital presence or an established business aiming to scale, we’re here to make it happen.",
    "Your goals are our goals, and together, we’ll make your business thrive in the digital world.",
  ],
  years = 7,
}: {
  imageSrc?: string;
  eyebrow?: string;
  heading?: string;
  paragraphs?: string[];
  years?: number;
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto px-4 sm:px-8 xl:px-24 max-w-screen-2xl 2xl:px-36 py-6 sm:py-16">
        <div className=" flex flex-col lg:flex-row items-start lg:items-stretch justify-between lg:gap-14 xl:gap-20">
          {/* LEFT: image + stats badge */}
          <div className="w-full lg:w-1/2 max-w-lg xl:max-w-none mx-auto xl:min-h-[34rem] flex flex-col justify-between gap-y-8">
            {/* top image */}
            <div className="relative w-full h-72 md:w-10/12 lg:w-[95%] xl:w-3/4 md:h-[26rem] lg:h-[28rem] rounded-xl xl:rounded-t-xl overflow-hidden">
              <Image
                src={imageSrc}
                alt="About image"
                width={500}
                height={500}
                className="object-top object-cover"
                priority
              />
            </div>

            {/* stat card */}
            <div className="md:-mt-32 xl:-mt-44 w-full flex justify-between items-stretch gap-x-8 lg:gap-x-2 xl:gap-x-18">
              {/* left */}
              <div className="flex items-end gap-x-4 mb-4">
                <div className="h-20 w-20 rounded-xl bg-[#F7EFDD] flex items-center justify-center shadow-sm">
                  <Image alt="trophy-icon" src={"/trophy.png"} height={40} width={40} />
                </div>

                <div className="flex-col gap-2 flex">
                  <span className="text-[#0A1F7A] text-5xl font-extrabold">
                    {years}+
                  </span>
                  <span className="text-[#2A3463] font-medium">
                    Years Of - Experience
                  </span>
                </div>
              </div>
              {/* right */}
              <div className="hidden sm:block flex-1 items-stretch justify-end z-20 border-8 border-white rounded-xl">
                <Image
                  src={"/inner_about02.png"}
                  alt=""
                  height={500}
                  width={500}
                  className="object-contain h-full w-full"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: copy */}
          <div className=" w-full lg:w-1/2 flex flex-col justify-center">
            <p className="uppercase tracking-wider text-sm font-semibold text-primary">
              {eyebrow}
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-body">
              {heading}
            </h2>

            <div className="mt-5 xl:mt-10 space-y-4 text-md text-body leading-6">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
