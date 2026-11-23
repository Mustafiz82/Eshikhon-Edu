// components/CenterHeroBanner.jsx
import Image from "next/image";
import Link from "next/link";

export default function CenterHeroBanner({
  imageUrl,
  title,
  subtitle,
  courseID,
}) {
  return (
    <section className="relative w-full font-HindSiliguri h-[400px] sm:h-[500px] lg:h-[500px] flex items-center justify-center overflow-hidden shadow-xl">
      {/* Background Image layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Brand Color Overlay: Teal with 80% opacity */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#083241] opacity-80"
        />
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-[40px] font-HindSiliguri font-extrabold tracking-tight text-white leading-tight drop-shadow-sm">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-md text-gray-100/90 mt-2 leading-relaxed max-w-4xl drop-shadow-sm">
          {subtitle}
        </p>

        <Link
          href={courseID}
          className="w-fit px-8 mt-2 flex items-center justify-center py-3 text-sm font-bold text-white bg-[#F26724] hover:bg-[#df5613] rounded-xl shadow-md shadow-[#F26724]/20 active:scale-[0.98] transition-[transform,background-color] duration-200"
        >
          কোর্স দেখুন
        </Link>
      </div>
    </section>
  );
}
