// components/WhatIsAsset.jsx
import {
  HiOutlineBuildingLibrary,
  HiOutlineGlobeAlt,
  HiOutlineCheckBadge,
  HiBolt,
} from "react-icons/hi2";

export default function WhatIsAsset() {
  const cards = [
    {
      label: "বাস্তবায়নে",
      title: "কারিগরি শিক্ষা অধিদপ্তর (DTE)",
      sub: "শিক্ষা মন্ত্রণালয়",
      theme: "teal",
      icon: <HiOutlineBuildingLibrary className="text-xl" />,
    },
    {
      label: "সহায়তায়",
      title: "বিশ্বব্যাংক (World Bank)",
      sub: "আন্তর্জাতিক অর্থায়ন ও সহযোগিতা",
      theme: "teal",
      icon: <HiOutlineGlobeAlt className="text-xl" />,
    },
    {
      label: "সার্টিফিকেশনে",
      title: "NSDA স্বীকৃতিপ্রাপ্ত",
      sub: "জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ",
      theme: "orange",
      icon: <HiOutlineCheckBadge className="text-xl" />,
    },
  ];

  return (
    <section className="py-14 font-HindSiliguri bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9]   text-slate-800">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold tracking-wide mb-3">
          <span className="w-2 h-2 rounded-full bg-teal-500"></span>
          সরকারি দক্ষতা উন্নয়ন উদ্যোগ
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl  sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight  font-HindSiliguri text-[#0C2340]  pt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#005776] to-[#008BB8]">
          ASSET প্রজেক্ট কী?
        </h2>

        {/* Short Subtitle for Students */}
        <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
          বাংলাদেশ সরকার ও বিশ্বব্যাংকের যৌথ উদ্যোগে দেশের ১০ লাখ তরুণ-তরুণীকে
          আধুনিক কর্মমুখী দক্ষতায় গড়ে তুলে নিশ্চিত কর্মসংস্থানে যুক্ত করার একটি
          জাতীয় প্রকল্প।{" "}
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
          <span className="font-bold text-orange-600 flex items-center gap-1">
            <HiBolt className="text-base" /> ইশিখনের ভূমিকা:
          </span>
          <span>
            এই প্রকল্পের অধীনে অনুমোদিত ডিজিটাল স্কিল কোর্স ও প্র্যাকটিক্যাল
            প্রশিক্ষণ পরিচালনা করা।
          </span>
        </div>
      </div>
    </section>
  );
}
