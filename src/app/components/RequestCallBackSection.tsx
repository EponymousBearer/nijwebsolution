// components/RequestCallBackSection.tsx
import React from "react";
import Image from "next/image";

export default function RequestCallBackSection() {
  return (
    <section className="w-full bg-[#004F5A] px-4 md:px-10 py-10 lg:py-0 mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:max-w-3xl xl:max-w-5xl mx-auto gap-x-4">
        {/* Left Content */}
        <div className="bg-white lg:max-w-xs xl:max-w-sm w-full py-10 px-6 sm:px-10 text-center lg:text-left relative">
          {/* Green Quote Badge */}
          <div className="absolute top-0 left-7 md:top-0 md:left-0 -translate-x-1/2 md:translate-x-0">
            <Image src="/quote.png" alt="" width={52} height={61} />
          </div>

          <h3 className="text-2xl font-bold text-[#0A1F7A] mt-10 md:mt-6">
            Request A Call Back
          </h3>
          <p className="text-gray-700 mt-3 leading-relaxed text-lg  mx-auto md:mx-0">
            Partner with our experts to turn your ideas into success. Let&apos;s get
            started today!
          </p>
        </div>

        {/* RIGHT Input Section */}
        <div className=" w-full flex items-center justify-center py-8 md:py-0 md:mt-8 lg:mt-0">
          <form className="w-full max-w-xl">
            <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md w-full">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-grow px-4 py-3 w-24 text-gray-700  focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#41B64A] text-white font-semibold px-6 md:px-8 py-3 rounded-full hover:bg-[#36a13e] transition-all"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
