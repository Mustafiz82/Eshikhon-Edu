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
    <strong className="text-slate-800 font-semibold">
      Industrial Attachment Training
    </strong>{" "}
    হলো এমন একটি প্রশিক্ষণ কার্যক্রম, যেখানে শিক্ষার্থীরা তাদের একাডেমিক জ্ঞান বাস্তব কাজের মাধ্যমে প্রয়োগ করার সুযোগ পান। এর মাধ্যমে নির্দিষ্ট বিষয়ে{" "}
    <strong className="text-slate-800 font-semibold">
      Practical Skills
    </strong>{" "}
    তৈরি, কাজের প্রক্রিয়া বোঝা এবং পেশাগত পরিবেশের সঙ্গে পরিচিত হওয়ার সুযোগ হয়।
  </p>

  <p>
    <strong className="text-slate-800 font-semibold">
      Industrial Attachment Programme
    </strong>{" "}
    বিশেষ করে{" "}
    <strong className="text-slate-800 font-semibold">
      Diploma ও Polytechnic
    </strong>{" "}
    শিক্ষার্থীদের জন্য অত্যন্ত গুরুত্বপূর্ণ, কারণ এটি পড়াশোনার পাশাপাশি বাস্তব কাজ শেখার সুযোগ তৈরি করে। নিজের বিভাগের সঙ্গে সম্পর্কিত বিষয়ে প্রশিক্ষণ নিলে ভবিষ্যতে চাকরি বা পেশাগত জীবনের জন্য প্রস্তুতি নিতেও সুবিধা হতে পারে।
  </p>
</div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#attachment-course"
                className="inline-flex items-center gap-2 bg-[#d95d13] hover:bg-[#b84d0d] text-white font-medium px-6 py-3 rounded-xl shadow-md shadow-orange-500/20 transition-all duration-200 text-sm"
              >
                <span>View Courses</span>
                <FiArrowRight className="w-4 h-4" />
              </a>

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
