import Link from "next/link";
import Image from "next/image";

const CourseCard = ({ course, onBuyNowClick }) => {
  const isAsset = course?.program === "asset-project-training";
  const imageSrc =
    course?.thumbnail?.src ||
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop";
  const imageAlt = course?.thumbnail?.alt || course?.title || "Course thumbnail";

  return (
    <div className="group w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-teal-400/60 transition-[transform,box-shadow,border-color] duration-300 border border-slate-100 flex flex-col">
      {/* 1. Image Thumbnail Container (Reserved Aspect Ratio / Height) */}
      <div
        className={`relative w-full ${
          isAsset ? "aspect-video" : "h-48"
        } bg-slate-100 overflow-hidden`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 380px"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Floating Category Pill */}
        {course?.category && (
          <span className="absolute top-3 left-3 z-10 bg-teal-900/85 backdrop-blur-md text-teal-100 text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm">
            {course.category}
          </span>
        )}

        {/* Floating Discount Badge */}
        {course?.discount && (
          <span className="absolute top-3 right-3 z-10 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
            {course.discount} {!course.upcoming && "OFF"}
          </span>
        )}
      </div>

      {/* 2. Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between gap-3">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2">
            <span aria-hidden="true" className="text-amber-500 text-sm">★</span>
            <span className="text-sm font-bold text-slate-800">
              {course?.rating || "4.8"}
            </span>
            <span className="text-xs text-slate-400">
              ({course?.ratingCount || "120"} reviews)
            </span>
          </div>

          {/* Course Title with fixed height and Teal Hover Accent */}
          <div className="min-h-[3.25rem] flex items-start">
            <h3
              title={course?.title}
              className={`font-bold ${
                isAsset ? "text-base" : "text-base md:text-lg"
              } text-slate-900 leading-snug line-clamp-2 group-hover:text-teal-700 transition-colors`}
            >
              {course?.title || "Course Title"}
            </h3>
          </div>

          {/* Duration & Feature Meta Strip */}
          <div className="flex flex-wrap items-center gap-2 mt-2 pt-2 border-t border-slate-50 text-xs font-medium">
            <span className="inline-flex items-center gap-1 bg-teal-50/80 border border-teal-200/60 px-2 py-0.5 rounded-md text-teal-800">
              ⏱️ {course?.durationMonths || ""} মাস
            </span>
            <span className="inline-flex items-center gap-1 bg-teal-50/80 border border-teal-200/60 px-2 py-0.5 rounded-md text-teal-800">
              🏢 {course?.type || "ল্যাব + প্রজেক্ট"}
            </span>
          </div>
        </div>

        {/* 3. Pricing & Two-Button Action Strip */}
        <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
          {/* Price Row */}
          <div className="flex justify-between items-center">
            {!course?.upcoming && (
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black text-slate-900">
                  ৳{course?.pricing?.price?.toLocaleString() || "0"}
                </span>
                {course?.pricing?.originalPrice && (
                  <span className="text-xs text-slate-400 line-through">
                    ৳{course.pricing.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            )}

            {course?.stipendIncluded && (
              <p className="bg-linear-to-b from-[#005776] to-[#008BB8] text-white text-xs px-3 py-1 rounded-full flex items-center">
                Stipend Included
              </p>
            )}
          </div>

          <div
            className={`grid gap-2 ${
              course?.upcoming ? "grid-cols-1" : "grid-cols-2"
            }`}
          >
            {/* View Details Button */}
            <Link
              href={`/programs/${
                course?.program === "attachment"
                  ? "industrial-attachment"
                  : course?.program
              }/${course?.slug}`}
              className={`w-full border font-HindSiliguri bg-white text-xs md:text-sm py-2.5 rounded-lg transition-colors duration-150 flex items-center justify-center gap-1 cursor-pointer active:scale-95 font-semibold ${
                course?.upcoming
                  ? "border-orange-500 text-orange-600 hover:bg-primary hover:text-white"
                  : "border-slate-200 text-slate-700 hover:border-teal-500 hover:text-teal-700 hover:bg-teal-50/40"
              }`}
            >
              বিস্তারিত
            </Link>

            {/* Buy Now Button */}
            {!course?.upcoming && (
              <Link
                href={course?.action?.link || "#"}
                onClick={onBuyNowClick}
                target="_blank"
                className="w-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold text-xs md:text-sm py-2.5 rounded-lg shadow-sm hover:shadow-orange-500/20 hover:shadow-md transition-[background-color,box-shadow,transform] duration-200 flex items-center justify-center gap-1 cursor-pointer"
              >
                Enroll Now
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;