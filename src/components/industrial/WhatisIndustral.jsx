import React from "react";
import Image from "next/image";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { BsShieldCheck, BsPatchCheckFill } from "react-icons/bs";
import { LuFlaskConical, LuClock, LuBuilding2 } from "react-icons/lu";

export default function WhatIsIndustrialAttachment() {
  return (
    <section className="relative overflow-hidden font-HindSiliguri py-16 lg:py-24 bg-[#F4F8FC]">
      {/* Decorative Background Ambient Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ================= LEFT CONTENT COLUMN ================= */}
          <div className="lg:col-span-7 space-y-6">
            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#092244] tracking-tight leading-tight">
                What is Industrial Attachment?
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-[#006ca5]">
                Bridging Academic Theory with Real-World Industry{" "}
              </p>
            </div>

            {/* Description Text */}
            <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                The Polytechnic{" "}
                <strong className="text-slate-800 font-semibold">
                  Industrial Attachment Training
                </strong>{" "}
                হলো Diploma Engineering শিক্ষার্থীদের জন্য একটি{" "}
                <strong className="text-slate-800 font-semibold">
                  ৩ মাসের practical training program
                </strong>
                , যেখানে তারা classroom-এ শেখা বিষয়গুলো বাস্তব কাজের পরিবেশে
                প্রয়োগ করার সুযোগ পান।
              </p>

              <p>
                এই training-এর সময় শিক্ষার্থীরা{" "}
                <strong className="text-slate-800 font-semibold">
                  real projects
                </strong>
                ,{" "}
                <strong className="text-slate-800 font-semibold">
                  live systems
                </strong>{" "}
                এবং experienced engineers-এর guidance নিয়ে কাজ করেন। এর মাধ্যমে
                তারা theoretical knowledge-এর পাশাপাশি professional workplace-এ
                কীভাবে কাজ করতে হয়, team-এর সাথে কাজ করতে হয় এবং বাস্তব সমস্যার
                সমাধান করতে হয়—সেগুলোও শিখতে পারেন।
              </p>

              <p>
                The goal is simple: শিক্ষার্থীদের{" "}
                <strong className="text-slate-800 font-semibold">
                  practical skills
                </strong>
                , real work experience এবং workplace confidence তৈরি করা, যাতে
                তারা academic learning থেকে professional career-এ আরও সহজে
                transition করতে পারেন।
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#courses"
                className="inline-flex items-center gap-2 bg-[#d95d13] hover:bg-[#b84d0d] text-white font-medium px-6 py-3 rounded-xl shadow-md shadow-orange-500/20 transition-all duration-200 text-sm"
              >
                <span>View Courses</span>
                <FiArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#syllabus"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium px-5 py-3 rounded-xl shadow-sm transition-all duration-200 text-sm"
              >
                <FiDownload className="w-4 h-4 text-slate-500" />
                <span>Download Outline</span>
              </a>
            </div>

            {/* Feature Checkpoints */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <BsShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>সরকারি ও NSDA মানদণ্ড</span>
              </div>
              <div className="flex items-center gap-2">
                <LuFlaskConical className="w-4 h-4 text-sky-600 shrink-0" />
                <span>১০০% প্র্যাকটিক্যাল ল্যাব</span>
              </div>
              <div className="flex items-center gap-2">
                <BsPatchCheckFill className="w-4 h-4 text-blue-600 shrink-0" />
                <span>ভেরিফায়েড সার্টিফিকেট</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CARD COLUMN ================= */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-2xl shadow-blue-900/10 border border-slate-100">
              {/* Photo Area */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
                  alt="Industrial Attachment Engineering Students"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover"
                  priority
                />

                {/* Floating dark banner over image */}
                <div className="absolute inset-x-3 bottom-3 bg-[#092244]/90 backdrop-blur-sm text-white py-2.5 px-4 rounded-xl text-center shadow-lg">
                  <p className="text-xs sm:text-sm font-semibold tracking-wide">
                    নতুন সেশন ভর্তি চলছে (Admission Open 2026)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
