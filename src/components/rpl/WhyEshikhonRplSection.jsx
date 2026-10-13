import React from "react";
import {
  HiOutlineCheckBadge,
  HiOutlineDocumentText,
  HiOutlineAcademicCap,
  HiOutlineClock,
  HiBolt,
} from "react-icons/hi2";

export default function WhyEshikhonRplSection() {
  const features = [
    {
      id: 1,
      label: "দক্ষতার স্বীকৃতি",
      title: "পূর্ব দক্ষতার সরাসরি মূল্যায়ন",
      desc: "আপনার আগে থেকে অর্জিত বাস্তব কাজের দক্ষতাকে যথাযথভাবে মূল্যায়নের সুবর্ণ সুযোগ।",
      theme: "teal",
      icon: <HiOutlineCheckBadge className="text-xl" />,
    },
    {
      id: 2,
      label: "সঠিক তথ্য",
      title: "লেভেল ও অকুপেশন গাইডলাইন",
      desc: "সংশ্লিষ্ট Occupation ও Level-এর Assessment-সংক্রান্ত বিস্তারিত ও নির্ভুল তথ্য জানার সুবিধা।",
      theme: "teal",
      icon: <HiOutlineDocumentText className="text-xl" />,
    },
    {
      id: 3,
      label: "প্রস্তুতি সহায়তা",
      title: "ডকুমেন্টস ও প্রস্তুতি নির্দেশনা",
      desc: "আবেদন প্রক্রিয়া, প্রয়োজনীয় কাগজপত্র গোছানো এবং Assessment-এর সার্বিক প্রস্তুতি সম্পর্কে দিকনির্দেশনা।",
      theme: "teal",
      icon: <HiOutlineAcademicCap className="text-xl" />,
    },
    {
      id: 4,
      label: "শিডিউল ও ট্র্যাকিং",
      title: "তারিখ ও আপডেট পাওয়ার সুযোগ",
      desc: "নির্ধারিত Assessment-এর চূড়ান্ত তারিখ, ভেন্যু ও সর্বশেষ সকল আপডেট সময়মতো জানার সুবিধা।",
      theme: "orange",
      icon: <HiOutlineClock className="text-xl" />,
    },
  ];

  return (
    <section className="py-14 font-HindSiliguri bg-linear-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9] text-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold tracking-wide mb-3">
          <span className="w-2 h-2 rounded-full bg-teal-500"></span>
          আমাদের বিশেষত্ব ও সুবিধা
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-HindSiliguri pt-2 text-transparent bg-clip-text bg-linear-to-b from-[#005776] to-[#008BB8]">
          কেন eShikhon-এর RPL Assessment?
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
          আপনার কাজের অভিজ্ঞতাকে জাতীয় সনদে রূপান্তর করার প্রতিটি ধাপে ইশিখন দিচ্ছে সার্বিক প্রস্তুতি ও তথ্য সহায়তা:
        </p>

        {/* 4 Cards Grid Layout with Matching WhatIsRPL Hover Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 text-left">
          {features.map((item) => {
            const isTeal = item.theme === "teal";
            return (
              <div
                key={item.id}
                className={`bg-white p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between ${
                  isTeal
                    ? "border-teal-100 hover:border-teal-400"
                    : "border-orange-100 hover:border-orange-400"
                }`}
              >
                <div>
                  {/* Icon Box */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                      isTeal
                        ? "bg-teal-50 text-teal-600"
                        : "bg-orange-50 text-orange-500"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Label Tag */}
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider block ${
                      isTeal ? "text-teal-600" : "text-orange-500"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Main Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 leading-snug">
                    {item.title}
                  </h3>

                  {/* Subtext */}
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note Bar (WhatIsRPL স্টাইল) */}
        <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-2 px-5 py-3 rounded-xl bg-orange-50 border border-orange-200 text-xs sm:text-sm text-slate-700 shadow-sm text-center sm:text-left">
          <span className="font-bold text-orange-600 flex items-center gap-1.5 shrink-0">
            <HiBolt className="text-base" /> নিশ্চিত প্রস্তুতি:
          </span>
          <span>
            ইশিখনের অভিজ্ঞ নির্দেশনায় আপনার RPL সার্টিফিকেশন যাত্রা হবে সুশৃঙ্খল, স্পষ্ট ও ঝামেলামুক্ত।
          </span>
        </div>

      </div>
    </section>
  );
}   