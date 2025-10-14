// components/ITServicesSection.tsx
import Image from "next/image";

const services = [
  {
    title: "Web Development",
    desc: "Design and develop websites that don’t just look great but perform even better. From dynamic web apps to scalable eCommerce platforms, we bring your online presence to life.",
    img: "/services_img02.jpg",
    badge: "/verified_clutch.webp",
  },
  {
    title: "Mobile App Development",
    desc: "Transform your ideas into powerful, user-friendly mobile applications. Whether it's iOS, Android, or cross-platform, we create apps that drive engagement and deliver seamless experiences.",
    img: "/services_img03.png",
    badge: "/app-development.svg",
  },
  {
    title: "UI/UX Designing",
    desc: "Great design is more than just aesthetics—it's about creating meaningful user experiences. Our UI/UX experts craft intuitive designs that captivate and convert your audience.",
    img: "/services_img01.jpg",
    badge: "/verified_designrush.webp",
  },
  {
    title: "Digital Marketing Services",
    desc: "To succeed in today’s competitive online market, businesses need a strong digital marketing strategy. We take a data-driven approach to marketing, tailoring each campaign to meet your goals.",
    img: "/services_img04.png",
    badge: "/verified_clutch.webp",
  },
];

export default function ITServicesSection() {
  return (
    <section className="relative w-full bg-white">
      {/* Background PNG */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 pointer-events-none"
        style={{ backgroundImage: "url('/services_bg.jpg')" }}
      />
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-24">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-12">
          Empowering Businesses with Top IT Solution Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:px-8 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image (keeps overflow hidden just for the image) */}
              <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Badge (outside image, overlaps onto white content) */}
              <div className="absolute left-4 top-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-md z-20 flex items-center justify-center overflow-hidden">
                <Image
                  src={service.badge}
                  alt="badge"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6 pt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
