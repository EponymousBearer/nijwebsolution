"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaQuoteRight, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type Testimonial = {
  name: string;
  position: string;
  rating: number;
  description: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Sharma",
    position: "Marketing Director, FashionVista",
    rating: 4,
    description:
      "We’ve been working with Nij Web Solutions on our digital marketing strategy for over a year, and the results speak for themselves. Their targeted campaigns have significantly increased our web traffic and boosted our conversions. The team’s expertise in SEO and social media marketing has made a huge difference to our bottom line",
  },
  {
    name: "Raj Patel",
    position: "Founder, Retail Tech Solutions",
    rating: 4,
    description:
      "Nij Web Solutions has been an integral part of our business growth. Their eCommerce development expertise helped us launch our online store seamlessly, and their attention to detail in design and functionality exceeded our expectations. Our sales have grown steadily, and the team continues to provide valuable support.",
  },
  {
    name: "Neha Desai",
    position: "CEO, UrbanFitness App",
    rating: 4,
    description:
      "The team at Nij Web Solutions took our ideas and transformed them into a user-friendly mobile app that our customers love. Their professionalism, creativity, and dedication made the entire process smooth, and they were there every step of the way. We couldn’t be happier with the results!",
  },
  {
    name: "Amit Kumar",
    position: "Operations Manager, SmartSolutions Pvt Ltd",
    rating: 4,
    description:
      "As a small business, we needed a reliable partner for web application development, and Nij Web Solutions delivered. They listened to our needs, understood our vision, and developed a custom solution that streamlined our internal processes. The impact on our efficiency and productivity has been remarkable.",
  },
];

function StarRatingDisplay({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-x-1">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} color="green" size={20} />
      ))}
      {hasHalfStar && <FaStarHalfAlt color="green" size={20} />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} color="green" size={20} />
      ))}
    </div>
  );
}
export default function ShowcaseTestimonialAboutUs() {
  const [i, setI] = useState(0);

  // Auto-rotate every 5s
  useEffect(() => {
    const id = setInterval(
      () => setI((x) => (x + 1) % TESTIMONIALS.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[i];

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f7]">
      <div className="relative w-full py-8">
        {/* Heading */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <p className="text-center text-green-600 font-semibold tracking-widest uppercase">
            Testimonials
          </p>
          <h2 className="mt-2 text-center text-3xl lg:text-4xl font-extrabold text-blue-900">
            Why Businesses Trust Us
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:min-h-[28rem] min-h-[48rem] lg:grid-cols-2 items-center">
          {/* ========== LEFT COLUMN ========== */}
          <div className="order-2 lg:order-1 relative h-[30rem]  lg:h-full mx-auto w-full">
            {/* BG shape */}
            <div className="absolute bottom-0 md:left-36 lg:left-8 md:w-[60%] lg:w-[85%] ">
              <Image
                src="/testimonial_shape01.png"
                alt=""
                width={900}
                height={700}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Girl above the bg */}
            <div className="absolute left-[22%] z-20 bottom-0 md:left-56 lg:left-32 xl:left-40 w-[100%] md:w-[40%] lg:w-[60%] xl:w-[50%]">
              <Image
                src="/testimonial_img.png"
                alt="customer"
                width={800}
                height={1000}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Top-left circles (animated up/down) */}
            <div className="absolute left-0 -top-4 md:left-36 md:top-10 lg:left-10 lg:top-12 float-y-slow">
              <Image
                src="/testimonial_shape02.png"
                alt=""
                width={88}
                height={88}
                className="w-16 md:w-24 h-auto object-contain opacity-90"
              />
            </div>

            {/* Bottom-left dots (static) */}
            <div className="hidden md:flex absolute md:bottom-26 md:left-40 lg:bottom-16 lg:left-16 opacity-80">
              <Image
                src="/testimonial_shape03.png"
                alt=""
                width={110}
                height={110}
                className="w-20 sm:w-24 h-auto object-contain"
              />
            </div>

            {/* Bottom-right line (animated L/R) */}
            <div className="hidden md:flex absolute right-10 bottom-22 md:right-44 lg:right-8 slide-x-slow opacity-80">
              <Image
                src="/testimonial_shape04.png"
                alt=""
                width={120}
                height={50}
                className="w-24 sm:w-28 h-auto object-contain"
              />
            </div>
          </div>

          {/* ========== RIGHT COLUMN (decor + testimonial) ========== */}
          <div className="order-1 lg:order-2 relative lg:h-full w-full h-[30rem] md:h-80  overflow-hidden">
            {/* bottom bg shape (behind text) */}
            <div className="hidden lg:flex absolute bottom-0 left-12 opacity-70 z-0">
              <Image
                src="/testimonial_shape05.png"
                alt=""
                width={580}
                height={220}
                className="w-[70vw] sm:w-[36vw] lg:w-[520px] h-auto object-contain"
              />
            </div>

            {/* static green quotes on the right */}
            <div className="absolute right-0 bottom-30 hidden md:flex z-20">
              <div className="h-16 w-16 rounded-tl-4xl bg-primary flex items-center justify-center shadow-md">
                <FaQuoteRight color="white" size={28} />
              </div>
            </div>

            {/* Testimonial content */}
            <div className="relative z-10 flex items-center h-full sm:px-4">
              <div key={i} className="fade-in">
                <h4 className="text-heading font-bold text-2xl">{t.name}</h4>
                <p className="text-heading text-md">{t.position}</p>
                <div className="mt-4">
                  <StarRatingDisplay rating={t.rating} />
                </div>
                <p className="mt-6 text-lg leading-7 text-body italic max-w-xl lg:max-w-sm xl:max-w-lg ">
                  “{t.description}”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* top-left small png */}
      <div className="absolute h-full w-full top-0 z-10 flex justify-end items-start">
        <Image
          src="/testimonial_shape06.png"
          alt=""
          width={90}
          height={90}
          className="w-80 h-auto object-contain "
        />
      </div>
    </section>
  );
}
