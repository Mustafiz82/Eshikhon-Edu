// components/WhatYouWillGet.jsx
import {
  HiOutlineSparkles,
  HiOutlineDocumentCheck,
  HiOutlineBanknotes,
  HiOutlineArrowTrendingUp,
  HiCheck,
} from "react-icons/hi2";

export default function WhatYouWillGet() {
  const benefits = [
    {
      num: "০১",
      title: "সম্পূর্ণ ফ্রি কোর্স",
      tag: "১০০% স্কলারশিপ",
      theme: "teal",
      icon: <HiOutlineSparkles className="text-2xl" />,
      points: [
        "৩ মাসের এই বিশেষ কোর্সে কোনো কোর্স ফি নেই",
        "ক্লাস ও স্টাডি ম্যাটেরিয়াল সম্পূর্ণ বিনামূল্যে প্রদান",
      ],
    },
    {
      num: "০২",
      title: "NSDA সার্টিফিকেশন",
      tag: "সরকারি অনুমোদন",
      theme: "orange",
      icon: <HiOutlineDocumentCheck className="text-2xl" />,
      points: [
        "Government approved অফিসিয়াল স্কিল সার্টিফিকেশন",
        "Instructor বা ট্রেইনার হতে সাহায্য করে (অনেক প্রতিষ্ঠানে এটি বাধ্যতামূলক)",
      ],
    },
    {
      num: "০৩",
      title: "মাসিক ভাতা (Stipend)",
      tag: "সর্বমোট ~২০,০০০ টাকা পর্যন্ত",
      theme: "teal",
      icon: <HiOutlineBanknotes className="text-2xl" />,
      points: [
        "প্রতি মাসে আনুমানিক ১,৫০০ – ২,০০০ টাকা সরাসরি ভাতা",
        "যাতায়াত ও শিক্ষা উপকরণসহ সর্বমোট প্রায় ২০,০০০ টাকার সমমূল্যের সুবিধা",
      ],
    },
    {
      num: "০৪",
      title: "ভবিষ্যতে ইনকাম ও ক্যারিয়ার সুযোগ",
      tag: "কর্মসংস্থান সাপোর্ট",
      theme: "orange",
      icon: <HiOutlineArrowTrendingUp className="text-2xl" />,
      points: [
        "কোর্স শেষেই ফ্রিল্যান্সিং ও রিমোট কাজ শুরু করার বাস্তব গাইডলাইন",
        "দক্ষতার ভিত্তিতে পরবর্তীতে Mentor হিসেবে কাজের সুযোগ",
      ],
    },
  ];

  return (
    <section className="py-16 font-HindSiliguri bg-[#F8FAFC] text-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl py-4 sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0C2340] text-transparent bg-clip-text bg-gradient-to-r from-[#005776] to-[#008BB8]">
            আপনি কী কী সুবিধা পাবেন?
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((item, index) => {
            const isTeal = item.theme === "teal";
            return (
              <div
                key={index}
                className={`bg-white p-6 sm:p-7 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md relative overflow-hidden flex flex-col justify-between ${
                  isTeal
                    ? "border-teal-100 hover:border-teal-400"
                    : "border-orange-100 hover:border-orange-400"
                }`}
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          isTeal
                            ? "bg-teal-50 text-teal-600"
                            : "bg-orange-50 text-orange-500"
                        }`}
                      >
                        {item.icon}
                      </div>
                      <span className="text-xs font-black tracking-widest text-slate-300">
                        {item.num}
                      </span>
                    </div>

                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                        isTeal
                          ? "bg-teal-50 text-teal-700 border border-teal-200"
                          : "bg-orange-50 text-orange-700 border border-orange-200"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-2.5">
                    {item.points.map((point, pIndex) => (
                      <li
                        key={pIndex}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed"
                      >
                        <span
                          className={`mt-0.5 p-0.5 rounded-full shrink-0 ${
                            isTeal
                              ? "bg-teal-100 text-teal-700"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          <HiCheck className="w-3 h-3" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}