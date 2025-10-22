import Image from "next/image";

export default function AboutCompanySection() {
  return (
    <section className="relative w-full bg-white">
      {/* Optional faint background pattern for the whole section */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/services_bg.jpg')" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 py-14 md:py-20">
        <div className="grid items-center gap-12 xl:gap-28 md:gap-16 lg:grid-cols-2">
          {/* LEFT: Copy */}
          <div className="order-2 lg:order-1">
            <p className="uppercase tracking-wider text-sm font-semibold text-primary">
              About Company
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-heading">
              Who We Are?
            </h2>

            <div className="mt-6 space-y-2 text-body sm:leading-7 leading-snug">
              <p>
                At Nij Web Solutions, we are more than just an IT outsourcing
                company—we’re your growth partners. Since 2017, we’ve been
                helping businesses of all sizes turn their ideas into reality
                with innovative, reliable, and user-focused solutions.
              </p>
              <p>
                Our mission is simple: to make technology work for you. From
                crafting responsive websites and building intuitive mobile apps
                to designing seamless user experiences and driving results
                through digital marketing, we bring expertise and creativity to
                every project.
              </p>
              <p>
                We don’t just deliver projects; we solve problems, add value,
                and create lasting partnerships. Whether you’re a startup
                looking to establish your digital presence or an established
                business aiming to scale, we’re here to make it happen.
              </p>
              <p>
                Your goals are our goals, and together, we’ll make your business
                thrive in the digital world.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/about"
                className="inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-2.5 text-white font-medium shadow-md hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                About Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M13.5 4.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7.41l-9.29 9.3a1 1 0 1 1-1.42-1.42l9.3-9.29H15.5a1 1 0 0 1-1-1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT: Image + rotating decorative PNG */}
          <div className="order-1 lg:order-2 relative mx-auto w-full max-w-md sm:max-w-lg">
            {/* Main image */}
            <div className="relative z-10 aspect-[4/3] lg:aspect-square xl:aspect-[3/3] w-full overflow-hidden rounded-2xl shadow-md bg-gray-200">
              <Image
                src="/inner04_about_img.png"
                alt="Our office"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 540px, (min-width: 640px) 80vw, 100vw"
                priority
              />
            </div>

            {/* Decorative PNG, slowly rotating back and forth */}
            <div
              aria-hidden
              className="absolute -bottom-16 lg:-bottom-6 right-0 lg:left-1/2 md:-translate-x-1/2 deco-rotate-slow"
            >
              <div className="relative h-24 w-32 lg:h-12 lg:w-20 pointer-events-none">
                <Image
                  src="/h5_about_shape.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
