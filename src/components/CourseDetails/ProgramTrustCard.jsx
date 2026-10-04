// components/CourseDetails/ProgramTrustCard.jsx
import React from "react";
import Link from "next/link";
import {
  HiOutlineSparkles,
  HiOutlineArrowRight,
  HiOutlineCheckBadge,
} from "react-icons/hi2";
import { programBridgeData } from "@/Data/programBridgeData";


export default function ProgramTrustCard({ program , courseTitle }) {
  const data = programBridgeData[program] || programBridgeData.attachment;

  return (
    <div className="bg-gradient-to-br from-white via-orange-50/20 to-teal-50/20 rounded-3xl border-2 border-orange-200/80 p-6 sm:p-8 shadow-sm relative overflow-hidden">
      
      {/* Decorative Brand Accent Corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-teal-400/10 rounded-full blur-2xl -z-10 pointer-events-none" />

      {/* Header */}
      <div className="space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-600 border border-orange-200">
          <HiOutlineSparkles className="text-sm" />
          {data.tag}
        </span>

           <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
          {data.getTitle(courseTitle)}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {data.subtitle}
        </p>
      </div>

      {/* 4 Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {data.benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-orange-300 transition duration-200"
          >
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                <HiOutlineCheckBadge className="text-sm" />
              </span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {benefit.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Parent Route CTA Bridge Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/60">
        <p className="text-xs text-slate-500 text-center sm:text-left">
          ইশিখনের এই উদ্যোগের পটভূমি ও সুযোগ-সুবিধা বিস্তারিত দেখতে মূল পেজ ভিজিট করুন
        </p>

        <Link
          href={data.parentRoute}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#005776] to-[#008BB8] hover:opacity-95 shadow-md shadow-teal-900/10 transition whitespace-nowrap cursor-pointer"
        >
          <span>{data.buttonText}</span>
          <HiOutlineArrowRight className="text-base" />
        </Link>
      </div>

    </div>
  );
}