import React from 'react';
import Image from 'next/image';
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaShieldHalved, 
  FaCertificate, 
  FaFlask,
  FaArrowRight,
  FaUsers,
  FaAward,
  FaBookOpen
} from 'react-icons/fa6';
import { BsPatchCheckFill } from 'react-icons/bs';

export default function Banner() {
  return (
    <section className="relative w-full bg-[#F4F8FC] py-12 md:py-20 px-4 sm:px-6 lg:px-12 flex items-center justify-center overflow-hidden">
      
      {/* Decorative Background Ambient Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          
          {/* Top Gov Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-sky-100 shadow-sm text-[#0A3A5E] text-xs sm:text-sm font-semibold transition-transform hover:scale-[1.02]">    
            <span className="bg-[#D97706] hidden md:block text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
              BD GOV
            </span>
            <span className="font-HindSiliguri text-[#0F3654]">
              গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত স্কিলস ইনিশিয়েটিভ
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0C2340] tracking-tight leading-[1.15]">
            Government-recognized <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-[#005776] to-[#008BB8]">
              skills for your future
            </span>
          </h1>

          {/* Subheading (Bengali) */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-HindSiliguri text-[#006080] leading-snug">
            আপনার দক্ষতা ও ক্যারিয়ারের জন্য সরকারি স্বীকৃত <br className="hidden sm:inline" /> 
            প্রফেশনাল কোর্স ও সার্টিফিকেশন
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
            <span className="font-semibold text-slate-800">eShikhon.edu.bd</span> connects diploma students, experienced technicians, and ambitious youth across Bangladesh to NSDA-accredited training, RPL national certifications, and direct industry placement.
          </p>

          {/* Action Pills / Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1 w-full">
            {/* Primary Action Button (Featured) */}
            <button className="group flex items-center gap-2.5 px-5 py-3 rounded-xl bg-linear-to-b from-[#EA580C] to-[#D97706] hover:from-[#C2410C] hover:to-[#B45309] text-white font-semibold text-sm transition-all duration-300 shadow-md shadow-orange-950/15 hover:shadow-lg hover:-translate-y-0.5">
              <FaGraduationCap className="text-lg text-orange-100" />
              <span>ASSET ট্রেনিং <span className="text-xs opacity-80">(NSDA)</span></span>
              <FaArrowRight className="text-xs opacity-70 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Light Blue Button 1 */}
            <button className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white hover:bg-sky-50 border border-sky-100 text-[#024B68] font-medium text-sm transition-all shadow-xs hover:-translate-y-0.5">
              <BsPatchCheckFill className="text-base text-[#007096]" />
              <span className="font-HindSiliguri font-semibold">RPL সার্টিফিকেশন</span>
            </button>

            {/* Light Blue Button 2 */}
            <button className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white hover:bg-sky-50 border border-sky-100 text-[#024B68] font-medium text-sm transition-all shadow-xs hover:-translate-y-0.5">
              <FaBriefcase className="text-base text-[#007096]" />
              <span className="font-HindSiliguri font-semibold">ইন্ডাস্ট্রিয়াল অ্যাটাচমেন্ট</span>
            </button>
          </div>

          {/* Bottom Features Strip */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-3 text-xs sm:text-sm font-semibold font-HindSiliguri text-[#004B63] bg-white/70 backdrop-blur-xs p-3 rounded-xl border border-sky-50 w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-md bg-sky-50 text-[#007096]">
                <FaShieldHalved className="text-sm" />
              </div>
              <span>NSDA অনুমোদিত</span>
            </div>

            <span className="hidden sm:inline text-slate-300 font-bold">•</span>

            <div className="flex items-center gap-2">
              <div className="p-1 rounded-md bg-sky-50 text-[#007096]">
                <FaCertificate className="text-sm" />
              </div>
              <span>সরকারি সনদ</span>
            </div>

            <span className="hidden sm:inline text-slate-300 font-bold">•</span>

            <div className="flex items-center gap-2">
              <div className="p-1 rounded-md bg-sky-50 text-[#007096]">
                <FaFlask className="text-sm" />
              </div>
              <span>শতভাগ প্র্যাকটিক্যাল ল্যাব</span>
            </div>
          </div>

        </div>

        {/* ================= RIGHT CARD ================= */}
        <div className="lg:col-span-5 w-full">
          <div className="relative bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-3xl shadow-xl shadow-slate-200/60 border border-white/80 transition-all hover:shadow-2xl hover:shadow-slate-300/60">
        

            {/* Image Container with Floating Admission Tag */}
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden group shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="Students in Robotics and Engineering Lab"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Bottom Admission Strip with Glassmorphism */}
              <div className="absolute bottom-3 left-3 right-3 py-2.5 px-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 flex items-center justify-center gap-2.5 text-white text-xs sm:text-sm font-medium font-HindSiliguri shadow-lg">
               
                <span>নতুন সেশন ভর্তি চলছে (Admission Open 2026)</span>
              </div>
            </div>

            {/* 3 Modern Stats Boxes */}
            <div className="grid grid-cols-3 gap-3 pt-3">
              {/* Stat 1 */}
              <div className="group/stat bg-[#F4F9FD] hover:bg-[#EBF4FC] transition-colors rounded-2xl py-3 px-2 text-center flex flex-col items-center justify-center border border-sky-50">
                <span className="text-base sm:text-xl font-extrabold text-[#005776] font-HindSiliguri">
                  ১.৫ লাখ+
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium font-HindSiliguri mt-0.5">
                  প্রশিক্ষার্থী
                </span>
              </div>

              {/* Stat 2 */}
              <div className="group/stat bg-[#F4F9FD] hover:bg-[#EBF4FC] transition-colors rounded-2xl py-3 px-2 text-center flex flex-col items-center justify-center border border-sky-50">
                <span className="text-base sm:text-xl font-extrabold text-[#005776] font-HindSiliguri">
                  ৯৫%
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium font-HindSiliguri mt-0.5">
                  পাসের হার
                </span>
              </div>

              {/* Stat 3 */}
              <div className="group/stat bg-[#F4F9FD] hover:bg-[#EBF4FC] transition-colors rounded-2xl py-3 px-2 text-center flex flex-col items-center justify-center border border-sky-50">
                <span className="text-base sm:text-xl font-extrabold text-[#005776] font-HindSiliguri">
                  ৪০+
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium font-HindSiliguri mt-0.5">
                  ট্রেড ও কোর্স
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}