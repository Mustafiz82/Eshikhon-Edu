// components/WhatIsRPL.jsx
import {
  HiOutlineAcademicCap,
  HiOutlineWrenchScrewdriver,
  HiOutlineCheckBadge,
  HiBolt,
} from "react-icons/hi2";

export default function WhatIsRPL() {
  const cards = [
    {
      label: "মূল ধারণা",
      title: "পূর্ব অভিজ্ঞতার সরাসরি স্বীকৃতি",
      sub: "কাজ করে বা নিজে নিজে শেখা পূর্বের বাস্তব দক্ষতাকে প্রাতিষ্ঠানিক সনদে রূপান্তর করা।",
      theme: "teal",
      icon: <HiOutlineAcademicCap className="text-xl" />,
    },
    {
      label: "মূল্যায়ন পদ্ধতি",
      title: "হাতে-কলমে প্র্যাকটিক্যাল অ্যাসেসমেন্ট",
      sub: "অনুমোদিত সেন্টারে জাতীয় দক্ষতা কাঠামোর (NTVQF) মান অনুযায়ী বাস্তব কাজের মূল্যায়ন।",
      theme: "teal",
      icon: <HiOutlineWrenchScrewdriver className="text-xl" />,
    },
    {
      label: "সনদ ও কর্তৃপক্ষ",
      title: "NSDA জাতীয় সনদ",
      sub: "উত্তীর্ণ প্রার্থীরা পাচ্ছেন সরকার স্বীকৃত অফিসিয়াল সার্টিফিকেট, যা দেশ-বিদেশে সমাদৃত।",
      theme: "orange",
      icon: <HiOutlineCheckBadge className="text-xl" />,
    },
  ];

  return (
    <section className="py-14 font-HindSiliguri bg-linear-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9] text-slate-800">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold tracking-wide mb-3">
          <span className="w-2 h-2 rounded-full bg-teal-500"></span>
          দক্ষতা মূল্যায়ন ও জাতীয় প্রত্যয়ন
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-HindSiliguri pt-4 text-transparent bg-clip-text bg-linear-to-b from-[#005776] to-[#008BB8]">
          RPL (Recognition of Prior Learning) কী?
        </h2>

        {/* Short Subtitle for Students */}
        <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
          RPL হলো এমন একটি জাতীয় পদ্ধতি, যেখানে প্রাতিষ্ঠানিক ডিগ্রি না থাকলেও
          আপনার আগে থেকে অর্জিত কাজ, অভিজ্ঞতা ও জ্ঞান মূল্যায়ন করে সরাসরি সরকারি
          সনদ দেওয়া হয়।
        </p>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 text-left">
          {cards.map((item, index) => {
            const isTeal = item.theme === "teal";
            return (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                  isTeal
                    ? "border-teal-100 hover:border-teal-400"
                    : "border-orange-100 hover:border-orange-400"
                }`}
              >
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

                {/* Subtitle / Role Tag */}
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider block ${
                    isTeal ? "text-teal-600" : "text-orange-500"
                  }`}
                >
                  {item.label}
                </span>

                {/* Main Heading */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 leading-snug">
                  {item.title}
                </h3>

                {/* Subtext */}
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>

        {/* eShikhon Note Bar */}
        <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-2 px-5 py-3 rounded-xl bg-orange-50 border border-orange-200 text-xs sm:text-sm text-slate-700 shadow-sm text-center sm:text-left">
          <span className="font-bold text-orange-600 flex items-center gap-1 shrink-0">
            <HiBolt className="text-base" /> ইশিখনের ভূমিকা:
          </span>
          <span>
            ইশিখন.কম বর্তমানে নির্বাচিত ৫টি বিষয়ে জাতীয় লেভেল-৩ (Level 3) RPL
            অ্যাসেসমেন্ট প্রস্তুতি ও সার্টিফিকেশন সহায়তা প্রদান করছে।
          </span>
        </div>
      </div>
    </section>
  );
}