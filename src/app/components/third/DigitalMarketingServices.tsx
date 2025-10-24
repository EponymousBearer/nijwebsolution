// components/third/DigitalMarketingServices.tsx
"use client";

const ITEMS = [
  {
    title: "Conversion Rate Optimization (CRO)",
    desc: "If your website is receiving traffic but not converting visitors into customers, it’s time to optimize. We specialize in conversion rate optimization by refining your website’s user experience, streamlining the customer journey, and crafting targeted landing pages. With our CRO strategies, we help turn your clicks into customers, improving your ROI.",
  },
  {
    title: "SEO Services (Search Engine Optimization)",
    desc: "Organic search is one of the most powerful ways to expand your business online. Our expert SEO services will help you dominate search engine results, from technical SEO and on-page optimization to link-building strategies and content marketing. We focus on increasing your search visibility, driving high-quality traffic, and improving rankings, helping you stay ahead of competitors.",
  },
  {
    title: "PPC (Pay-Per-Click) Campaigns",
    desc: "Effective paid advertising requires smart planning and continuous optimization. Our PPC management services ensure that your budget is spent wisely to get the best results. We focus on maximizing your ROI by targeting high-converting keywords, optimizing your bids, and refining ad copy. Our goal is to generate a minimum of 4x return on investment for every penny you spend.",
  },
  {
    title: "Content Marketing",
    desc: "Great content is the backbone of any successful online marketing strategy. Our content marketing services focus on creating high-quality, engaging content that attracts the right audience and encourages conversions. From blog posts to video content, we help you tell your story and drive meaningful engagement, ensuring that your brand remains relevant and top-of-mind.",
  },
  {
    title: "Social Media Optimization (SMO)",
    desc: "Connect with your audience in a more personal way. Our SMO services help your business engage with customers across popular social platforms like Facebook, Instagram, LinkedIn, and Twitter. We craft tailored social strategies, schedule regular posts, and engage with your community to build brand loyalty, expand reach, and drive traffic to your website.",
  },
  {
    title: "The Outsourced CMO (Chief Marketing Officer)",
    desc: "Not ready to hire a full-time CMO? We’ve got you covered. With our Outsourced CMO service, we step in as your marketing leadership team. We handle the strategic direction, execution, and monitoring of your marketing campaigns, ensuring alignment with your business goals and delivering measurable results. Our expert guidance helps steer your digital marketing efforts, ensuring optimal growth and consistent performance.",
  },
];

export default function DigitalMarketingServices() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('/service/services_bg.jpg')" }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <h2 className="text-center text-2xl sm:text-4xl font-bold text-heading">
          Our Digital Marketing Services
        </h2>

        <div className="mt-8 flex flex-wrap -m-3">
          {ITEMS.map((it, i) => (
            <div key={i} className="w-full md:w-1/2 xl:w-1/3 p-3">
              <div className="h-full rounded-xl border border-slate-200 bg-white shadow-sm hover:-translate-y-1 transition-transform">
                <div className="border-l-8 border-primary pl-3 py-6 shadow-md rounded-tr-xl">
                  <h3 className="font-semibold text-xl text-heading">{it.title}</h3>
                </div>
                <p className="p-6 text-md text-body leading-6">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
