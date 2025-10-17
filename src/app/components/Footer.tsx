"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiMapPin, FiPhoneCall } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";

export default function Footer() {
  const [up, setUp] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    // track scroll direction to toggle the ball position
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const goingUp = y < lastY.current;
      setUp(goingUp);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative w-full bg-white">
      {/* Decorative waves (optional) */}
      <div className="pointer-events-none absolute right-0 top-0 z-0">
        <Image
          src="/footer_shape02.png" /* optional */
          alt=""
          width={520}
          height={220}
          className="w-[50vw] max-w-[350px] h-auto"
        />
      </div>

      <div className="pointer-events-none absolute left-0 bottom-0 z-0">
        <Image
          src="/footer_shape01.png" /* optional */
          alt=""
          width={520}
          height={220}
          className="w-[50vw] max-w-[350px] h-auto"
        />
      </div>

      {/* Floating ball (animated by scroll direction) */}
      <div
        className={`pointer-events-none absolute right-8 top-8 md:right-10 md:top-22 z-20 footer-ball ${
          up ? "to-corner" : ""
        }`}
        aria-hidden
      >
        <Image
          src="/footer_shape03.png" /* optional */
          alt=""
          width={41}
          height={41}
        />
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-24 z-10">
        {/* Use flex-wrap for responsiveness; NO grid */}
        <div className="flex flex-col xl:flex-row gap-y-10 gap-x-12 lg:gap-x-20">
          <div className="md:w-full xl:w-2/4 flex flex-col md:flex-row gap-y-10 xl:gap-x-18">
            {/* Column 1: Brand + about + socials */}
            <div className="w-full md:w-2/4 xl:w-1/2">
              <div className="flex items-center ">
                <Image
                  src="/logo.png"
                  alt="Nij Web Solutions"
                  width={60}
                  height={60}
                  className="h-14 w-40 object-contain"
                />
              </div>

              <p className="text-body mt-1 max-w-[18rem] lg:max-w-none leading-6">
                Nij Web Solutions is committed to delivering innovative,
                scalable, and user-friendly solutions that drive success and
                growth. Let’s build the future together.
              </p>

              {/* Socials */}
              <div className="mt-6 flex items-center gap-2">
                <SocialSquare href="#" label="Facebook">
                  <FaFacebookF size={20} />
                </SocialSquare>
                <SocialSquare href="#" label="Instagram">
                  <FaInstagram size={20} />
                </SocialSquare>
                <SocialSquare href="#" label="LinkedIn">
                  <FaLinkedinIn size={20} />
                </SocialSquare>
              </div>
            </div>

            {/* Column 2: Information */}
            <div className="w-full md:w-2/4 xl:w-1/2">
              <h4 className="text-heading text-xl font-semibold">
                Information
              </h4>
              <span className="underline-primary mt-2" />
              <ul className="mt-5 space-y-4 text-body">
                <li className="flex items-start gap-3">
                  <FiPhoneCall size={24} className="flex-shrink-0" />
                  <a
                    href="tel:+919662125656"
                    className="cursor-pointer hover:text-primary transition-colors"
                  >
                    +91 96621 25656
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <BiEnvelope size={24} className="flex-shrink-0" />
                  <span className="cursor-pointer hover:text-primary transition-colors">
                    hr@nijwebsolution.com
                  </span>
                </li>
                <li className="flex items-start gap-3 leading-7">
                  <FiMapPin size={24} className="flex-shrink-0 mt-1" />
                  <span className="text-body cursor-pointer hover:text-primary transition-colors">
                    Plot No 1, 3rd floor, Panchdev Row House, Beside Green
                    Plaza, D-mart Road, Mota Varachha, Surat, Gujarat 394101
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Column 3: Company */}
          <div className="md:w-full xl:w-2/4 flex flex-col md:flex-row gap-y-10">
            <div className="w-full md:w-2/4 xl:w-1/2">
              <h4 className="text-heading text-xl font-semibold">Company</h4>
              <span className="underline-primary mt-2" />
              <ul className="mt-5 space-y-2">
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/contact">Contact Us</FooterLink>
                <FooterLink href="/work">Our Work</FooterLink>
              </ul>
            </div>

            {/* Column 4: IT Services */}
            <div className="w-full md:w-2/4 xl:w-1/2">
              <h4 className="text-heading text-xl font-semibold">
                IT Services
              </h4>
              <span className="underline-primary mt-2" />
              <ul className="mt-5 space-y-2">
                <FooterLink href="#">Mobile App Development</FooterLink>
                <FooterLink href="#">Web Development</FooterLink>
                <FooterLink href="#">UI/UX Design</FooterLink>
                <FooterLink href="#">ERP Solution</FooterLink>
                <FooterLink href="#">Marketing Services</FooterLink>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative w-full bg-[#EEF6FA] border-t border-[#DCE8F0] z-10">
        <div className="text-center font-semibold max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center gap-x-4 gap-y-3 text-body">
          <p className="text-sm">
            Copyright © Nij Web Solutions | All Right Reserved
          </p>
          <p className="text-sm">
            <Link href="#" className="hover:underline">
              Support
            </Link>{" "}
            <Link href="#" className="hover:underline">
              Terms &amp; Conditions
            </Link>{" "}
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- small building blocks ---------- */
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group cursor-pointer transition-colors hover:text-primary inline-block"
      >
        <span className="relative inline-block">
          {children}
          {/* underline element */}
          <span
            className="absolute bottom-0 left-0 h-[1px] bg-primary 
                       w-0 group-hover:w-full 
                       transition-all duration-300 ease-out
                       group-hover:h-[1px]"
          />
        </span>
      </Link>
    </li>
  );
}

function SocialSquare({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      aria-label={label}
      href={href}
      className="h-10 w-10 rounded-sm bg-[#EEF3F9] flex items-center justify-center shadow-sm hover:shadow-md hover:bg-white transition"
    >
      {children}
    </Link>
  );
}
