import { IndustrialDAta } from "@/Data/industrial-course";
import CourseCard from "@/shared/CourseCard";
import Title from "@/shared/title";
import React from "react";

const IndustrialAttachMent = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9] overflow-hidden">
      {/* Decorative subtle background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-orange-100/40 via-blue-50/20 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <Title
            title="ইন্ডাস্ট্রিয়াল অ্যাটাচমেন্ট কোর্সসমূহ"
            desc="ডিপ্লোমা শিক্ষার্থীদের জন্য হাতেকলমে প্রজেক্ট ও মেন্টর সাপোর্টসহ ইন্ডাস্ট্রিয়াল অ্যাটাচমেন্ট।"
          />
        </div>

        {/* Responsive Course Grid (1 col on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {IndustrialDAta.map((item, index) => (
            <CourseCard
              key={item.id || item._id || index}
              course={item}

            />
          ))}
        </div>

        {/* Optional: Trust / Help Banner for Polytechnic Students */}
        <div className="mt-14 p-6 font-HindSiliguri rounded-2xl bg-white border border-slate-200/80 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-800 text-base">
              কোন কোর্সটি আপনার ডিপ্লোমা ট্রেডের জন্য উপযুক্ত বুঝতে পারছেন না?
            </h4>
            <p className="text-xs md:text-sm text-slate-500 mt-0.5">
              আমাদের ক্যারিয়ার কাউন্সিলরের সাথে কথা বলে সঠিক ট্র্যাক বেছে নিন।
            </p>
          </div>
          <a
            href="tel:+8801XXXXXXXXX"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs md:text-sm font-semibold transition-all duration-200"
          >
            ফ্রি কাউন্সেলিং নিন →
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustrialAttachMent;