// components/FAQSection.jsx
"use client";

import { useState } from "react";
import { HiChevronDown, HiBolt } from "react-icons/hi2";

export default function FAQ({name , faqs}) {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default


  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 font-HindSiliguri bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9] text-slate-800">
      <div className="max-w-4xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-10">
   

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0C2340] text-transparent bg-clip-text bg-gradient-to-r from-[#005776] to-[#008BB8]">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            {name} সম্পর্কিত সাধারণ প্রশ্ন ও উত্তর
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-orange-200 shadow-sm border-l-4 border-l-orange-500"
                    : "border-slate-200/80 hover:border-teal-300"
                }`}
              >
                {/* Header Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    {/* Number Badge (Teal when closed, Orange when open) */}
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-lg transition-colors shrink-0 ${
                        isOpen
                          ? "bg-orange-50 text-orange-600 border border-orange-200"
                          : "bg-teal-50 text-teal-700 border border-teal-100"
                      }`}
                    >
                      {faq.id}
                    </span>

                    {/* Question text */}
                    <div>
                      <h3
                        className={`text-sm sm:text-base font-bold transition-colors ${
                          isOpen ? "text-slate-900" : "text-slate-700"
                        }`}
                      >
                        {faq.qBn}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                        {faq.qEn}
                      </p>
                    </div>
                  </div>

                  {/* Smooth Rotating Chevron (Orange when open) */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ease-out ${
                      isOpen
                        ? "rotate-180 bg-orange-50 text-orange-500"
                        : "bg-slate-50 text-slate-400"
                    }`}
                  >
                    <HiChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Smooth Animated Body (CSS Grid Rows Transition) */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-slate-100">
                      <p className="text-xs sm:text-sm leading-relaxed sm:pl-10 text-slate-600">
                        {faq.ans}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Support Banner matching the WhatIsAsset eShikhon bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 p-3.5 rounded-xl bg-orange-50 border border-orange-200 text-xs sm:text-sm text-slate-700 text-center">
          <span className="font-bold text-orange-600 flex items-center gap-1">
            <HiBolt className="text-base" /> আরও কোনো প্রশ্ন আছে?
          </span>
          <span>
            আমাদের হেল্পলাইন বা ফেসবুক পেজে সরাসরি মেসেজ দিয়ে জেনে নিতে পারেন।
          </span>
        </div>

      </div>
    </section>
  );
}