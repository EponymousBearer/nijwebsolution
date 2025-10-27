import Link from "next/link";
import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa";

type Crumb = { label: string; href?: string };

export default function BreadcrumbHero({
  title = "Contact Us",
  crumbs = [{ label: "Home", href: "/" }, { label: "Contact Us" }],
  decoUnderTitleSrc = "/zigzag.svg",
}: {
  title?: string;
  crumbs?: Crumb[];
  decoUnderTitleSrc?: string;
}) {
  return (
    <section
      className="relative isolate w-full overflow-hidden z-0"
      style={{
        backgroundImage: "url('/breadcrumb_bg.jpg')",
        width: "100%",
        height: "150px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto px-4 sm:px-8 xl:px-24 max-w-screen-2xl 2xl:px-36 pt-10 pb-10 z-10">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-heading">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mt-2">
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

      {/* Small zig-zag */}
      <div className="absolute top-18 left-20 h-6 w-22 z-0 slide-x-slow">
        <Image
          src={decoUnderTitleSrc}
          alt=""
          fill
          className="object-contain"
          sizes="96px"
        />
      </div>

      {/* Lines */}
      <div className="absolute bottom-0 right-0 xl:right-70 2xl:left-150">
        <Image
          src={"/breadcrumb_shape03.png"}
          alt=""
          height={800}
          width={800}
          className="object-contain"
        />
      </div>
    </section>
  );
}
