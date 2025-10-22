"use client";

import Image from "next/image";
import { FormEvent } from "react";
import { FiMapPin, FiPhoneCall } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import { FaClock } from "react-icons/fa";

export default function ContactHelpSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thanks! We received your message.");
  };

  return (
    <section className="w-full bg-white">
      <div className="flex justify-center items-start flex-col lg:flex-row gap-10 xl:gap-6 mx-auto px-4 sm:px-8 xl:px-24 max-w-screen-2xl 2xl:px-36 py-10 lg:py-14">
        {/* ======= Title + Intro ======= */}
        <div className="flex flex-col lg:w-2/3 items-end">
          {/* ---------- TOP (details) ---------- */}
          <div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-heading">
              How can we help you?
            </h2>
            <p className="mt-3 text-md leading-6 text-body">
              Drop us a line! We’ll set up a time to chat over the phone or
              in-person to know more about your business needs. All primary
              conferences are free of charge.
            </p>
            {/* Contact list */}
            <div className="space-y-5 mt-8">
              <ContactRow
                icon={<FiPhoneCall size={32} strokeWidth={1.5} />}
                title="Phone"
                content={
                  <a
                    className="text-body hover:text-primary"
                    href="tel:+919662125656"
                  >
                    +91 9662125656
                  </a>
                }
              />
              <ContactRow
                icon={<BiEnvelope size={32} />}
                title="E-mail"
                content={
                  <a
                    className="text-body hover:text-primary"
                    href="mailto:hr@nijwebsolution.com"
                  >
                    hr@nijwebsolution.com
                  </a>
                }
              />
              <ContactRow
                icon={<FiMapPin size={32} strokeWidth={1.5} />}
                title="Address"
                content={
                  <span className="text-body">
                    Plot No 1, 3rd Floor, Panchdev Row House, D-mart Road, Near
                    Green Plaza, Mota Varachha, Surat, Gujarat 394101
                  </span>
                }
              />
            </div>
          </div>

          {/* ---------- BOTTOM (form) ---------- */}
          <div className="w-full xl:w-[95%] min-w-[280px]">
            {/* Enquiry form card */}
            <div className="mt-8 lg:mt-10 rounded-xl border border-slate-200 bg-[#EEF6FB] shadow-sm">
              <div className="px-5 py-5 sm:py-6 md:py-8">
                <h3 className="text-[26px] lg:text-[28px] font-bold text-heading">
                  Share Your Needs For The Best Service!
                </h3>
                <p className="mt-2  text-body">
                  We are here to help you 24/7 with experts{" "}
                  <span className="text-primary">*</span>
                </p>

                <form onSubmit={handleSubmit} className="mt-5">
                  {/* name + email in a row from md (flex only) */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      required
                      placeholder="Name"
                      className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-[15px] outline-none focus:ring-2 focus:ring-primary/40"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email"
                      className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-[15px] outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>

                  {/* phone */}
                  <div className="mt-4">
                    <input
                      required
                      placeholder="Phone"
                      className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-[15px] outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>

                  {/* message */}
                  <div className="mt-4">
                    <textarea
                      rows={5}
                      placeholder="Message"
                      className="w-full rounded-md border border-slate-300 bg-white p-3 text-[15px] outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>

                  {/* checkbox */}
                  <label className="mt-3 flex items-start gap-2 text-body">
                    <input type="checkbox" className="mt-[6px]" />
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>

                  {/* submit */}
                  <button
                    type="submit"
                    className="mt-4 inline-flex items-center rounded-md bg-[#41B64A] px-5 py-2.5 font-semibold text-white hover:bg-[#36a13e] transition-colors"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* ======= Two columns (flex only) ======= */}
        <div className="flex flex-wrap lg:w-1/3 w-full gap-8 lg:gap-10">
          {/* ---------- RIGHT (call, photo, hours) ---------- */}
          <aside className="w-full lg:w-[380px] xl:w-[420px] flex flex-col gap-6">
            {/* phone banner */}
            <div className="flex justify-center items-center rounded-lg bg-[#EEF3FB] px-6 py-4">
              <p className="text-[26px] sm:text-[28px] font-bold text-heading">
                +91 9662202656
              </p>
            </div>

            {/* image card with small bottom overlay */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
              <Image
                src="/get-career-counselling.jpg"
                alt="Support representative"
                width={720}
                height={480}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* business hours card */}
            <div className="rounded-xl border border-slate-200 bg-[#EEF3FB] px-6 py-8 shadow-sm">
              <h4 className="text-[18px] font-semibold text-heading">
                Business hours
              </h4>

              <div className="mt-3 flex text-lg items-center gap-3 text-body">
                <FaClock />
                <p>9am to 6pm (Monday-Friday)</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ------------ small building block ------------ */

function ContactRow({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-[#EAF4FF] text-secondary">
        {icon}
      </div>
      <div>
        <p className="text-lg font-bold text-heading">{title}</p>
        <div className="mt-1 font-medium text-md text-body max-w-[12rem] md:max-w-xl xl:max-w-2xl">
          {content}
        </div>
      </div>
    </div>
  );
}
