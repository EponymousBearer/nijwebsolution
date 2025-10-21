"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Grip } from "lucide-react";
/**
 * Responsive Header for Next.js (App Router)
 * - Desktop: logo + nav + CTA, services dropdown.
 * - Mobile: minimal topbar with logo + grid button => right-side drawer.
 * - Accessibility: semantic nav/menus, keyboard support, focus trapping in drawer, aria-expanded, aria-controls.
 * - UX polish: sticky, auto shadow on scroll, reduced-motion safe animations, dark-mode friendly.
 * - Best practices: data-driven nav, Next/Image, Link, prefers-reduced-motion guards, event cleanup, ESC to close.
 */

const IconClose = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3 1.4 1.4Z"
      fill="currentColor"
    />
  </svg>
);

const IconPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5z" fill="currentColor" />
  </svg>
);

const IconMinus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="5" y="11" width="14" height="2" rx="1" fill="currentColor" />
  </svg>
);

const IconArrowDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M7 10l5 5 5-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ---- Data model ----
const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web Development", href: "/services/web" },
      { label: "E‑commerce", href: "/services/ecommerce" },
      { label: "Mobile Apps", href: "/services/mobile" },
      { label: "UI/UX Design", href: "/services/design" },
    ],
  },
  { label: "Our Work", href: "/work" },
  { label: "Contact Us", href: "/contact-us" },
];

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // <-- Add this line
  const drawerId = useId();
  const servicesId = useId();
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true); // <-- Set mounted to true after client mount
  }, []);

  // Sticky shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ESC to close drawer
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Focus trap (simple)
  useEffect(() => {
    if (!drawerOpen) return;
    const drawer = drawerRef.current;
    const focusable = drawer?.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0];
    first?.focus();
    const handleTab = (e: KeyboardEvent) => {
      if (!focusable || focusable.length === 0) return;
      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          (lastEl as HTMLElement).focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          (firstEl as HTMLElement).focus();
        }
      }
    };
    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [drawerOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header
      className={classNames(
        // positioned + high z + isolate
        "sticky top-0 z-[10000] isolate w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90",
        scrolled ? "shadow-sm ring-1 ring-black/5" : ""
      )}
      role="banner"
    >
      <div className="mx-auto px-4 sm:px-8 xl:px-24 max-w-screen-2xl 2xl:px-36">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 rounded-xl">
            {/* Replace with your logo asset */}
            <Image
              src="/logo-nijweb.png"
              alt="NIJ Web Solutions LLP"
              width={140}
              height={40}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden justify-center lg:flex items-center gap-8"
            aria-label="Main"
          >
            {NAV.map((item) =>
              !item.children ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className={classNames(
                    "text-[15px] font-semibold rounded-md px-1 py-1",
                    isActive(item.href) ? "text-primary" : "text-slate-800"
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                    aria-controls={servicesId}
                    onClick={() => setServicesOpen((v) => !v)}
                    className="group inline-flex items-center gap-1 text-[15px] font-medium text-slate-800 rounded-md px-1 py-1"
                  >
                    {item.label}
                    <IconArrowDown
                      className={classNames(
                        "h-4 w-4 transition-transform",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {/* Dropdown */}
                  <div
                    id={servicesId}
                    role="menu"
                    className={classNames(
                      "absolute left-0 mt-3 w-56 overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-xl ring-1 ring-black/5 z-[9999]",
                      servicesOpen
                        ? "opacity-100 translate-y-0"
                        : "pointer-events-none opacity-0 -translate-y-1",
                      "transition motion-reduce:transition-none"
                    )}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <ul className="py-2">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            role="menuitem"
                            className="block px-4 py-2.5 text-sm text-slate-700"
                            onClick={() => setServicesOpen(false)}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden xl:flex">
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-button-green px-4 py-2.5 font-semibold text-white transition-all hover:bg-button-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-button-green/60"
            >
              <span className="relative z-10 flex items-center gap-2">
                Quick Enquiry
                <Image
                  src="/rocket-icon.png"
                  alt="rocket icon"
                  width={30}
                  height={30}
                  /* ⬇️ remove translate-y-[1px]; let keyframes own transform */
                  className="rocket"
                  priority /* eager-loads above-the-fold to avoid first-loop decode stutter */
                />
              </span>

              {/* Static cloud (no animation) */}
              <Image
                src="/cloud-patteren.png"
                alt="cloud pattern"
                width={100}
                height={40}
                className="pointer-events-none absolute right-6 top-9 w-[90px] opacity-90"
                priority={false}
              />
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            className="lg:hidden inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white text-secondary shadow-lg ring-1 ring-black/8"
            aria-label="Open menu"
            aria-controls={drawerId}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            <Grip />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mounted && (
        <div
          ref={overlayRef}
          className={classNames(
            "fixed inset-0 z-[60] lg:hidden",
            drawerOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0 hidden"
          )}
          aria-hidden={!drawerOpen}
        >
          {/* Backdrop */}
          <div
            className={classNames(
              "absolute inset-0 bg-slate-900/40 transition-opacity duration-200 ease-out",
              drawerOpen ? "opacity-100" : "opacity-0"
            )}
            onClick={() => setDrawerOpen(false)}
          />

          {/* Panel */}
          <div
            ref={drawerRef}
            id={drawerId}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className={classNames(
              "fixed inset-y-0 right-0 w-[95%] max-w-sm md:max-w-xs h-dvh bg-white shadow-2xl ring-1 ring-black/5 flex flex-col overscroll-contain transition-transform",
              drawerOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            {/* Sticky top bar INSIDE the drawer */}
            <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-6 py-5 border-b border-slate-300/80">
              <Image
                src="/logo-nijweb.png"
                alt="NIJ Web Solutions LLP"
                width={120}
                height={36}
                className="h-8 w-auto"
              />
              <button
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-emerald-600 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
              >
                <IconClose className="h-5 w-5 text-emerald-600" />
              </button>
            </div>

            {/* Scrollable content area */}
            <div className="flex flex-col h-full justify-between overflow-y-auto">
              <nav aria-label="Mobile">
                <ul className="border-y border-slate-300/80 divide-y divide-slate-300/80">
                  {NAV.map((item) => (
                    <li key={item.label}>
                      {!item.children ? (
                        <Link
                          href={item.href}
                          className={classNames(
                            "flex items-center justify-between px-6 py-3 text-[16px] font-semibold",
                            isActive(item.href)
                              ? "text-primary"
                              : "text-heading"
                          )}
                          onClick={() => setDrawerOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <div className="">
                          <div
                            className={classNames(
                              "flex items-center justify-between px-6 py-2",
                              servicesOpen ? "border-b border-slate-300/80" : ""
                            )}
                          >
                            <Link
                              href={item.href}
                              className="text-[16px] font-semibold text-heading"
                              onClick={() => setDrawerOpen(false)}
                            >
                              {item.label}
                            </Link>
                            <button
                              className="grid place-items-center h-8 w-8 rounded-md bg-button-green text-white shadow-sm"
                              aria-expanded={servicesOpen}
                              aria-controls={`${servicesId}-mobile`}
                              onClick={() => setServicesOpen((v) => !v)}
                            >
                              {servicesOpen ? (
                                <IconMinus className="h-5 w-5 text-white" />
                              ) : (
                                <IconPlus className="h-5 w-5 text-white" />
                              )}
                            </button>
                          </div>
                          <div
                            id={`${servicesId}-mobile`}
                            className={classNames(
                              "overflow-hidden transition-[max-height,opacity]",
                              servicesOpen
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0",
                              "motion-reduce:transition-none "
                            )}
                          >
                            <ul className="py-0 divide-y divide-slate-300/80">
                              {item.children.map((c) => (
                                <li key={c.href} className="pl-4">
                                  <Link
                                    href={c.href}
                                    className="block px-8 py-3 text-[16px] font-semibold text-heading"
                                    onClick={() => setDrawerOpen(false)}
                                  >
                                    {c.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact + Socials */}
              <div className="px-6 py-8 space-y-1 font-semibold">
                <Link
                  href="mailto:hr@nijwebsolution.com"
                  className="block text-secondary hover:underline"
                >
                  hr@nijwebsolution.com
                </Link>
                <Link
                  href="tel:+919662202656"
                  className="block text-secondary hover:underline"
                >
                  +91 96622 02656
                </Link>
                <div className="flex gap-2 pt-4 text-secondary">
                  <Link
                    href="#"
                    aria-label="Facebook"
                    className="hover:opacity-80"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Instagram"
                    className="hover:opacity-80"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href="#"
                    aria-label="LinkedIn"
                    className="hover:opacity-80"
                  >
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// ---- Usage ----
// 1) Place your logo image at public/logo-nijweb.png (or update the src above).
// 2) Import <Header /> in app/layout.tsx and render above {children}.
// 3) Tailwind recommended classes already included; tweak colors for your brand.
