import React from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineDocumentText,
  HiOutlineDocumentCheck,
  HiOutlineClock,
  HiOutlineWrenchScrewdriver,
  HiOutlineCheckBadge,
  HiBolt,
} from "react-icons/hi2";

export default function RplProcessSection() {
  const steps = [
    {
      id: 1,
      step: "ধাপ ০১",
      title: "আপনার স্কিল নির্বাচন করুন",
      desc: "আপনার পূর্বের বাস্তব অভিজ্ঞতার সঙ্গে মেলে এমন নির্দিষ্ট Occupation ও Level বেছে নিন।",
      theme: "teal",
      icon: <HiOutlineAcademicCap className="text-xl" />,
    },
    {
      id: 2,
      step: "ধাপ ০২",
      title: "যোগ্যতা যাচাই করুন",
      desc: "সংশ্লিষ্ট Assessment-এর নির্ধারিত শর্তাবলি এবং প্রয়োজনীয় কাগজপত্র ঠিক আছে কি না দেখুন।",
      theme: "teal",
      icon: <HiOutlineDocumentText className="text-xl" />,
    },
    {
      id: 3,
      step: "ধাপ ০৩",
      title: "আবেদন সম্পন্ন করুন",
      desc: "নির্ধারিত প্ল্যাটফর্মে সঠিক নিয়মে ও প্রয়োজনীয় তথ্যাদিসহ আপনার আবেদন জমা দিন।",
      theme: "teal",
      icon: <HiOutlineDocumentCheck className="text-xl" />,
    },
    {
      id: 4,
      step: "ধাপ ০৪",
      title: "Assessment-এর জন্য প্রস্তুত হন",
      desc: "নির্ধারিত তারিখ, সময়, পরীক্ষা কেন্দ্র এবং কর্তৃপক্ষের প্রয়োজনীয় নির্দেশনা অনুসরণ করুন।",
      theme: "orange",
      icon: <HiOutlineClock className="text-xl" />,
    },
    {
      id: 5,
      step: "ধাপ ০৫",
      title: "দক্ষতা মূল্যায়নে অংশ নিন",
      desc: "অনুমোদিত Competency Standard অনুযায়ী প্র্যাকটিক্যাল কাজের মাধ্যমে নিজের দক্ষতা প্রদর্শন করুন।",
      theme: "orange",
      icon: <HiOutlineWrenchScrewdriver className="text-xl" />,
    },
    {
      id: 6,
      step: "ধাপ ০৬",
      title: "ফলাফল ও সার্টিফিকেট অর্জন",
      desc: "Assessment-এর ফলাফল এবং অফিসিয়াল সার্টিফিকেট পাওয়ার প্রক্রিয়া সংশ্লিষ্ট কর্তৃপক্ষের নিয়মে সম্পন্ন হবে।",
      theme: "orange",
      icon: <HiOutlineCheckBadge className="text-xl" />,
    },
  ];

  return (
    <section className="py-14 font-HindSiliguri bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold tracking-wide mb-3">
          <span className="w-2 h-2 rounded-full bg-teal-500"></span>
          ধাপে ধাপে সার্টিফিকেট অর্জনের পথ
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-HindSiliguri pt-2 text-transparent bg-clip-text bg-linear-to-b from-[#005776] to-[#008BB8]">
          RPL Assessment-এর সহজ প্রক্রিয়া
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
          পূর্ব অভিজ্ঞতার আনুষ্ঠানিক স্বীকৃতি পেতে নিচের ৬টি ধারাবাহিক ধাপ অনুসরণ করতে হবে:
        </p>

        {/* 6 Steps Grid Layout (3 Columns on Large Screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 text-left">
          {steps.map((item) => {
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
                  {/* Top Bar inside Card: Icon + Step Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        isTeal
                          ? "bg-teal-50 text-teal-600"
                          : "bg-orange-50 text-orange-500"
                      }`}
                    >
                      {item.icon}
                    </div>

                    {/* Step Indicator Tag */}
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                        isTeal
                          ? "bg-teal-50/60 text-teal-700 border-teal-200/80"
                          : "bg-orange-50/60 text-orange-600 border-orange-200/80"
                      }`}
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2 leading-snug">
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

        {/* Bottom Note Bar (Matching WhatIsRPL Theme) */}
        <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-2 px-5 py-3 rounded-xl bg-orange-50 border border-orange-200 text-xs sm:text-sm text-slate-700 shadow-sm text-center sm:text-left">
          <span className="font-bold text-orange-600 flex items-center gap-1.5 shrink-0">
            <HiBolt className="text-base" /> সার্বিক সহায়তা:
          </span>
          <span>
            আবেদন থেকে অ্যাসেসমেন্ট প্রস্তুতি পর্যন্ত যেকোনো প্রয়োজনে ইশিখন টিম আপনাকে সঠিক গাইডলাইন প্রদান করবে।
          </span>
        </div>

      </div>
    </section>
  );
}