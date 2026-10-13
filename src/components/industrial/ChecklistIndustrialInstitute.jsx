import React from "react";
import {
  HiOutlineWrenchScrewdriver,
  HiOutlineAcademicCap,
  HiOutlineDocumentText,
  HiOutlineCheckBadge,
  HiBolt,
} from "react-icons/hi2";

export default function ChecklistIndustrialInstitute() {
  const checklist = [
    {
      id: 1,
      label: "হাতে-কলমে কাজ",
      title: "Practical Skills কারিকুলাম",
      desc: "প্রশিক্ষণে বাস্তবে কাজের ক্ষেত্রে প্রয়োজনীয় কী কী Practical Skills শেখানো হবে তা ভালোভাবে জেনে নিন।",
      theme: "teal",
      icon: <HiOutlineWrenchScrewdriver className="text-xl" />,
    },
    {
      id: 2,
      label: "সাপোর্ট সিস্টেম",
      title: "Project Work ও Mentor Support",
      desc: "কাজের ধরন অনুযায়ী বাস্তব Project Work করার সুযোগ এবং অভিজ্ঞ Mentor Support-এর সুব্যবস্থা রয়েছে কি না।",
      theme: "teal",
      icon: <HiOutlineAcademicCap className="text-xl" />,
    },
    {
      id: 3,
      label: "অফিশিয়াল প্রমাণ",
      title: "প্রয়োজনীয় Documentation",
      desc: "Industrial Attachment সফলভাবে সম্পন্ন করার জন্য আপনার প্রতিষ্ঠানের চাহিদা অনুযায়ী প্রয়োজনীয় Documentation দেওয়া হবে কি না।",
      theme: "teal",
      icon: <HiOutlineDocumentText className="text-xl" />,
    },
    {
      id: 4,
      label: "সনদ ও স্বীকৃতি",
      title: "সার্টিফিকেট ও গ্রহণযোগ্যতা",
      desc: "প্রশিক্ষণ শেষে কোন ধরনের Certificate প্রদান করা হবে এবং তা আপনার প্রতিষ্ঠানের শর্ত ও নিয়মের সাথে সামঞ্জস্যপূর্ণ কি না।",
      theme: "orange",
      icon: <HiOutlineCheckBadge className="text-xl" />,
    },
  ];

  return (
    <section className="py-14 font-HindSiliguri bg-linear-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9] text-slate-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold tracking-wide mb-3">
          <span className="w-2 h-2 rounded-full bg-teal-500"></span>
          ভর্তি নির্দেশিকা ও চেকলিস্ট
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-HindSiliguri pt-2 text-transparent bg-clip-text bg-linear-to-b from-[#005776] to-[#008BB8]">
          Industrial Training Institute বেছে নেওয়ার আগে যা দেখবেন
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-3xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
          একটি ভালো Industrial Training Institute বেছে নেওয়ার সময় শুধু কোর্সের নাম বা সার্টিফিকেটের দিকে না তাকিয়ে প্রশিক্ষণের ধরন, Practical Work, Mentor Support এবং আপনার প্রতিষ্ঠানের প্রয়োজনীয় শর্ত পূরণের বিষয়গুলোও বিবেচনা করা জরুরি। ভর্তির আগে জেনে নিন:
        </p>

        {/* 4 Cards Grid Layout (Matching Old Theme) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 text-left">
          {checklist.map((item) => {
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

        {/* Bottom Note Bar */}
        <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-2 px-5 py-3 rounded-xl bg-orange-50 border border-orange-200 text-xs sm:text-sm text-slate-700 shadow-sm text-center sm:text-left">
          <span className="font-bold text-orange-600 flex items-center gap-1.5 shrink-0">
            <HiBolt className="text-base" /> শিক্ষার্থীদের পরামর্শ:
          </span>
          <span>
            চূড়ান্ত ভর্তির পূর্বে ইনস্টিটিউটের ল্যাব সুবিধা, বিগত ব্যাচের স্টুডেন্টদের রিভিউ এবং পলিটেকনিকের অফিশিয়াল ইন্টার্নশিপ রিকোয়ারমেন্ট মিলিয়ে নিন।
          </span>
        </div>

      </div>
    </section>
  );
}   