// components/FAQItem.jsx
"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

export default function FAQItem({ id, qBn, qEn, defaultOpen = false, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`bg-white rounded-2xl border transition-[border-color,box-shadow] duration-200 overflow-hidden ${
        isOpen
          ? "border-orange-200 shadow-sm border-l-4 border-l-orange-500"
          : "border-slate-200/80 hover:border-teal-300"
      }`}
    >
      {/* Header Button */}
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
      >
        <div className="flex items-start sm:items-center gap-3.5">
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-lg transition-colors shrink-0 ${
              isOpen
                ? "bg-orange-50 text-orange-600 border border-orange-200"
                : "bg-teal-50 text-teal-700 border border-teal-100"
            }`}
          >
            {id}
          </span>

          <div>
            <h3
              className={`text-sm sm:text-base font-bold transition-colors ${
                isOpen ? "text-slate-900" : "text-slate-700"
              }`}
            >
              {qBn}
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
              {qEn}
            </p>
          </div>
        </div>

        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-[transform,background-color,color] duration-300 ease-out ${
            isOpen
              ? "rotate-180 bg-orange-50 text-orange-500"
              : "bg-slate-50 text-slate-400"
          }`}
        >
          <HiChevronDown className="w-4 h-4" aria-hidden="true" />
        </div>
      </button>

      {/* Smooth Animated Body */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-slate-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}