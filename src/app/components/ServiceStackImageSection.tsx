// components/ServiceStackImageSection.tsx
import Image from "next/image";

type Props = {
  src?: string; // path to the single stacks banner image
  alt?: string;
};

export default function ServiceStackImageSection({
  src = "/logC.png", // <-- put your one image here (from /public)
  alt = "Our Technology Stack",
}: Props) {
  return (
    <section className="relative w-full bg-white">
      <div className="sm:max-w-7xl mx-auto sm:px-6 ">
        {/* Keep the image fully visible without cropping */}
        <div className="relative w-full min-h-[100px] md:min-h-[190px] lg:min-h-[260px] xl:min-h-[300px]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain p-3 sm:p-4"
            sizes="(min-width: 1280px) 1120px, (min-width: 1024px) 900px, (min-width: 640px) 640px, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
