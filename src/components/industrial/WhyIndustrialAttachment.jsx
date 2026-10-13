import React from "react";
import {
  HiOutlineWrenchScrewdriver,
  HiOutlineDocumentCheck,
  HiOutlineAcademicCap,
  HiOutlineCheckBadge,
  HiBolt,
  HiArrowRight,
  HiCheck,
} from "react-icons/hi2";

export default function WhyIndustrialAttachment() {
  return (
    <section className="py-16 md:py-20 font-HindSiliguri bg-linear-to-b from-[#F8FAFC] via-slate-50 to-[#F1F5F9] text-slate-800 relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-700 text-xs font-semibold tracking-wide mb-3">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            পলিটেকনিক ও ডিপ্লোমা ইন্টার্নশিপ
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-HindSiliguri pt-1 text-transparent bg-clip-text bg-linear-to-b from-[#005776] to-[#008BB8]">
            কেন eShikhon-এর Industrial Attachment Programme বেছে নেবেন?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            শুধুমাত্র ইন্টার্নশিপ সার্টিফিকেট নয়, কর্মক্ষেত্রের বাস্তব অভিজ্ঞতা ও ক্যারিয়ার প্রস্তুতির সম্পূর্ণ নিশ্চয়তা:
          </p>
        </div>

        {/* 12-Column Asymmetric Bento Grid (2 + 3 = 5 Items) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* CARD 1: Wide Featured Card (7 Columns) - Practical Training */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 border border-teal-100 shadow-xs hover:border-teal-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center text-2xl group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <HiOutlineWrenchScrewdriver />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                  হাতে-কলমে প্রশিক্ষণ
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                Practical Training: মুখস্থ নয়, সরাসরি প্র্যাকটিক্যাল কাজ
              </h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                শুধু ক্লাসরুমের তাত্ত্বিক জ্ঞান বা লেকচার নয়; আধুনিক ল্যাব ও ইন্ডাস্ট্রিয়াল টুলস ব্যবহার করে হাতে-কলমে কাজ করার মাধ্যমে নিজের দক্ষতাকে কর্মক্ষেত্রের উপযোগী করে গড়ে তুলুন।
              </p>
            </div>

            {/* Feature Pills */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 font-medium"># ইন্ডাস্ট্রি টুলস</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 font-medium"># ল্যাব প্র্যাকটিস</span>
              <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 font-medium"># ১০০% হ্যান্ডস-অন</span>
            </div>
          </div>

          {/* CARD 2: Project Focused Card (5 Columns) - Project-Based Learning */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 border border-orange-100 shadow-xs hover:border-orange-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <HiOutlineDocumentCheck />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-200">
                  রিয়েল-লাইফ অভিজ্ঞতা
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                Project-Based Learning
              </h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                বাস্তব ইন্ডাস্ট্রির স্ট্যান্ডার্ড ও কাজের গতিপ্রকৃতি হুবহু অনুসরণ করে লাইভ প্রোজেক্ট সম্পন্ন করুন, যা আপনাকে প্রথম দিন থেকেই প্রফেশনাল আত্মবিশ্বাস এনে দেবে।
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-orange-600">
              <HiCheck className="text-base" /> বাস্তব কেস-স্টাডি ও লাইভ প্রোজেক্ট
            </div>
          </div>

          {/* CARD 3: Compact Tile (4 Columns) - Mentor Support */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs hover:border-teal-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl mb-4 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                <HiOutlineAcademicCap />
              </div>
              <span className="text-[11px] font-bold text-teal-600 uppercase tracking-wider block">
                সার্বক্ষণিক দিকনির্দেশনা
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                Dedicated Mentor Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                শেখার পুরো সময়টাতে যখনই কোনো সমস্যা হবে, অভিজ্ঞ মেন্টরদের কাছ থেকে পাবেন সরাসরি গাইডলাইন ও প্রবলেম সলভিং সাহায্য।
              </p>
            </div>
          </div>

          {/* CARD 4: Compact Tile (4 Columns) - বিষয়ভিত্তিক প্রশিক্ষণ */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs hover:border-teal-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl mb-4 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                <HiOutlineCheckBadge />
              </div>
              <span className="text-[11px] font-bold text-teal-600 uppercase tracking-wider block">
                পছন্দের স্বাধীনতা
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                বিষয়ভিত্তিক প্রশিক্ষণ ট্র্যাক
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                আপনার ডিপ্লোমা সাবজেক্ট এবং ভবিষ্যৎ ক্যারিয়ার লক্ষ্যের সাথে মিলিয়ে সেরা মানানসই Training Track বেছে নেওয়ার উন্মুক্ত সুযোগ।
              </p>
            </div>
          </div>

          {/* CARD 5: Accent Grand Finale Card (4 Columns) - Career Preparation */}
          <div className="lg:col-span-4 rounded-3xl p-6 sm:p-7 bg-linear-to-br from-[#005776] to-[#003b50] text-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-2xl bg-white/10 text-orange-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <HiBolt />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30">
                  জব-রেডি সাপোর্ট
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                Career Preparation
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                ইন্টার্নশিপ শেষে সরাসরি জবের জন্য প্রস্তুত হতে সিভি তৈরি, পোর্টফোলিও রিভিউ ও ইন্টারভিউ ট্রেইনিং সাপোর্ট।
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-teal-200">
              <span className="font-semibold text-orange-300">CV + Portfolio + Mock Interview</span>
              <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}