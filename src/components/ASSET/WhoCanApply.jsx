// components/WhoCanApply.jsx
import {
  HiOutlineIdentification,
  HiOutlineAcademicCap,
  HiOutlineComputerDesktop,
  HiOutlineLightBulb,
} from "react-icons/hi2";

export default function WhoCanApply() {
  const criteria = [
    {
      label: "বয়সসীমা",
      title: "১৮ – ৪০ বছর",
      sub: "যেকোনো বাংলাদেশি নাগরিক আবেদন করতে পারবেন",
      theme: "teal",
      icon: <HiOutlineIdentification className="text-xl" />,
    },
    {
      label: "শিক্ষাগত যোগ্যতা",
      title: "HSC বা সমমান পাস",
      sub: "এইচএসসি বা তদূর্ধ্ব যেকোনো ডিগ্রির শিক্ষার্থী",
      theme: "orange",
      icon: <HiOutlineAcademicCap className="text-xl" />,
    },
    {
      label: "প্রযুক্তিগত দক্ষতা",
      title: "কম্পিউটার বেসিক জ্ঞান",
      sub: "কম্পিউটার পরিচালনা ও ইন্টারনেটের প্রাথমিক ধারণা",
      theme: "teal",
      icon: <HiOutlineComputerDesktop className="text-xl" />,
    },
    {
      label: "অগ্রাধিকার",
      title: "কোর্সের বেসিক ধারণা",
      sub: "নির্বাচিত কোর্সের উপর প্রাথমিক জ্ঞান থাকলে ভালো",
      theme: "orange",
      icon: <HiOutlineLightBulb className="text-xl" />,
    },
  ];

  return (
    <section className="py-14 font-HindSiliguri bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9] text-slate-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0C2340] text-transparent bg-clip-text bg-gradient-to-r from-[#005776] to-[#008BB8]">
          কারা আবেদন করতে পারবেন?
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 text-left">
          {criteria.map((item, index) => {
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

      </div>
    </section>
  );
}