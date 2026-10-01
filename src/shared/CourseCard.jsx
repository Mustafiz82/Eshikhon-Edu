import React from "react";

const CourseCard = ({ course, onDetailsClick, onBuyNowClick }) => {
  return (
    <div className="group w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-teal-400/60 transition-all duration-300 border border-slate-100 flex flex-col">
      {/* 1. Image Thumbnail with Discount Badge & Category */}
      <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
        <img
          src={
            course?.imageUrl ||
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
          }
          alt={course?.name || "Course"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Floating Category Pill (Deep Teal Accent) */}
        {course?.category && (
          <span className="absolute top-3 left-3 bg-teal-900/85 backdrop-blur-md text-teal-100 text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm">
            {course.category}
          </span>
        )}

        {/* Floating Discount Badge (Primary Orange) */}
        {course?.discount && (
          <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
            {course.discount} {!course.upcoming && "OFF"}
          </span>
        )}
      </div>

      {/* 2. Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between gap-3">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-amber-500 text-sm">★</span>
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
              title={course?.name}
              className="font-bold text-base md:text-lg text-slate-900 leading-snug line-clamp-2 group-hover:text-teal-700 transition-colors"
            >
              {course?.name || "Course Title"}
            </h3>
          </div>

          {/* Duration & Feature Meta Strip (Soft Teal Tint) */}
          <div className="flex flex-wrap items-center gap-2 mt-2 pt-2 border-t border-slate-50 text-xs font-medium">
            <span className="inline-flex items-center gap-1 bg-teal-50/80 border border-teal-200/60 px-2 py-0.5 rounded-md text-teal-800">
              ⏱️ {course?.duration || "৩ মাস (3 Months)"}
            </span>
            <span className="inline-flex items-center gap-1 bg-teal-50/80 border border-teal-200/60 px-2 py-0.5 rounded-md text-teal-800">
              🏢 {course?.type || "ল্যাব + প্রজেক্ট"}
            </span>
          </div>
        </div>

        {/* 3. Pricing & Two-Button Action Strip */}
        <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
          {/* Price Row */}
          {!course.upcoming && (
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-slate-900">
                ৳{course?.sellPrice?.toLocaleString() || "15,000"}
              </span>
              {course?.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ৳{course.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          )}
          <div
            className={`grid gap-2 ${course.upcoming ? "grid-cols-1" : "grid-cols-2"}`}
          >
            {/* View Details Button */}
            <button
              onClick={onDetailsClick}
              className={`w-full border font-HindSiliguri bg-white text-xs md:text-sm py-2.5 rounded-lg transition-all duration-150 flex items-center justify-center gap-1 cursor-pointer active:scale-95 font-semibold ${
                course.upcoming
                  ? "border-orange-500 text-orange-600 hover:bg-primary hover:text-white"
                  : "border-slate-200 text-slate-700 hover:border-teal-500 hover:text-teal-700 hover:bg-teal-50/40"
              }`}
            >
              বিস্তারিত
            </button>

            {/* Buy Now Button */}
            {!course.upcoming && (
              <button
                onClick={onBuyNowClick}
                className="w-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold text-xs md:text-sm py-2.5 rounded-lg shadow-sm hover:shadow-orange-500/20 hover:shadow-md transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer"
              >
                Enroll Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
