// components/third/ErpOfferings.tsx
"use client";

const ITEMS = [
  {
    title: "Connect Remote Locations",
    desc: "If your business operates across multiple locations, our ERP software ensures seamless integration and synchronization between stores or offices, enabling smooth operations and efficient communication.",
  },
  {
    title: "Automate Business Processes",
    desc: "Simplify and streamline repetitive tasks with our ERP solutions. Automating business processes not only increases efficiency but also reduces the scope for errors, enabling your team to focus on strategic goals.",
  },
  {
    title: "Improved User Experience",
    desc: "Provide better customer service with an ERP system that automates tasks, improves accessibility, and delivers a more seamless user experience for your team and clients alike.",
  },
  {
    title: "Boost Website Traffic",
    desc: "ERP systems compile critical business data that can be leveraged to optimize marketing strategies, driving more targeted traffic to your website and increasing engagement.",
  },
  {
    title: "Generate Leads and Conversions",
    desc: "Enhance your marketing efforts with data-driven insights provided by your ERP system. Use analytics to fine-tune campaigns, attract quality leads, and boost conversion rates effectively.",
  },
];

export default function ErpOfferings() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('/service/services_bg.jpg')" }}
      />

      <div className="relative z-10 mx-auto px-4 py-10 lg:py-14">
        <h2 className="text-center text-2xl sm:text-4xl py-4 font-bold text-heading">
          What Our ERP Solutions Offer?
        </h2>

        <div className="mt-8 flex flex-wrap min-h-80">
          {ITEMS.map((it, i) => (
            <div
              key={i}
              className={`
                w-full md:w-1/2 lg:w-1/5 p-6 border border-slate-200 
                transition-transform duration-300 hover:-translate-y-1
                ${i % 2 === 0 ? "bg-[#FFF7ED]" : "bg-[#F0F7FF]"} 
              `}
            >
              <h3 className="font-semibold text-2xl text-heading">
                {it.title}
              </h3>
              <p className="mt-2 text-lg text-body leading-6">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
