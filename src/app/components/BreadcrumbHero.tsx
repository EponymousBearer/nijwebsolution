// components/BreadcrumbHero.tsx
import Link from "next/link";
import Image from "next/image";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

type Crumb = { label: string; href?: string };

export default function BreadcrumbHero({
  title = "About Us",
  crumbs = [{ label: "Home", href: "/" }, { label: "About Us" }],
  decoUnderTitleSrc = "/zigzag.svg", // optional small zig-zag under title
}: {
  title?: string;
  crumbs?: Crumb[];
  decoUnderTitleSrc?: string;
}) {
  return (
    <section
      className="relative w-full"
      style={{ backgroundImage: "url('/SE.png')" }}
    >
      <div className="mx-auto px-4 sm:px-8 xl:px-24 max-w-screen-2xl 2xl:px-36 pt-6 pb-6">
        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-bold text-heading">{title}</h1>

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mt-4">
          <ol className="flex items-center gap-2 text-sm">
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <li
                  key={`${c.label}-${i}`}
                  className="flex items-center gap-2 text-lg"
                >
                  {c.href && !isLast ? (
                    <Link
                      href={c.href}
                      className="text-body hover:text-primary transition-colors"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-primary">{c.label}</span>
                  )}

                  {!isLast && <FaGreaterThan className="w-4 h-4" />}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      {/* Small zig-zag under title (optional) */}
      <div className="mt-1">
        <div className="absolute top-18 left-20 h-6 w-22 slide-x-slow">
          <Image
            src={decoUnderTitleSrc}
            alt=""
            fill
            className="object-contain"
            sizes="96px"
          />
        </div>
      </div>
    </section>
  );
}
