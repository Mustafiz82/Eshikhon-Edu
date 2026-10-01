"use client";

import { useState } from "react";
const successVideos = [
  {
    id: 1,
    title: "MERN Stack শিখে Student অবস্থাতেই ৮০K+ Salary!",
    course: "MERN Stack Web Development",
    highlight: "৮০K+ স্যালারি",
    category: "Job Placement",
    videoId: "qg_tIzXSqKI",
  },
  {
    id: 2,
    title: "কী শিখেছিলেন তিনি? ৩ মাসেই শুরু ডলার ইনকাম",
    course: "Freelancing Masterclass",
    highlight: "৩ মাসে ডলার ইনকাম",
    category: "Freelancing",
    videoId: "TMN3kqj3Cp0",
  },
  {
    id: 3,
    title: "মাত্র ১৫ বছর বয়সে একজন স্কুল পড়ুয়া Ethical Hacking শিখে অনলাইনে লাখ টাকার ইনকাম করছে!",
    course: "Ethical Hacking & Cyber Security",
    highlight: "লাখ টাকা ইনকাম (১৫ বছর)",
    category: "Cyber Security",
    videoId: "v18ieX2u7ic",
  },
  {
    id: 4,
    title: "মাত্র ৬ ক্লাসেই প্রথম ইন্টারন্যাশনাল ক্লায়েন্ট",
    course: "Digital Marketing & Freelancing",
    highlight: "৬ ক্লাসে ক্লায়েন্ট",
    category: "International Marketplace",
    videoId: "uPsd7gZSo4U",
  },
  {
    id: 5,
    title: "ক্যান্সারও থামাতে পারেনি তার স্বপ্ন | হার না মানার অনুপ্রেরণার গল্প",
    course: "Graphic & UI/UX Design",
    highlight: "অনুপ্রেরণার গল্প",
    category: "Inspirational",
    videoId: "7ANMFAknq9g",
  },
 
];


export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVideo = successVideos[activeIndex];

  return (
       <section className="relative  py-16 md:py-24 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9] overflow-hidden">
      {/* Decorative subtle background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-orange-100/40 via-blue-50/20 to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Crisp Header with Orange & Teal */}
        <div className="text-center max-w-2xl mx-auto mb-12">
         

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight ">
            শিক্ষার্থীদের <span className="  font-HindSiliguri text-[#0C2340] tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-[#005776] to-[#008BB8]">বাস্তব অর্জন ও অভিজ্ঞতা</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium">
            আমাদের কোর্স এবং প্র্যাকটিক্যাল ল্যাব ট্রেনিংয়ের মাধ্যমে যারা গড়েছেন সফল ক্যারিয়ার
          </p>
        </div>

        {/* ================= DESKTOP (lg+): 60/40 Split Layout ================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 60% Large Featured Video Player */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-3">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <iframe
                key={activeVideo.videoId + activeIndex}
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=0&rel=0`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Active Video Info */}
            <div className="pt-4 pb-2 px-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-md">
                  {activeVideo.course}
                </span>
                <span className="text-xs font-bold text-[#f25c05] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f25c05]"></span>
                  {activeVideo.role}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {activeVideo.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                শিক্ষার্থী: <span className="text-slate-800 font-semibold">{activeVideo.student}</span>
              </p>
            </div>
          </div>

          {/* Right: 40% Interactive Vertical List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
              অন্যান্য ভিডিও ({successVideos.length})
            </div>

            {successVideos.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left flex items-center gap-3 p-3 rounded-xl border transition-all duration-150 ${
                    isActive
                      ? "bg-teal-50/60 border-secondary ring-1 ring-secondary"
                      : "bg-white border-slate-200 hover:border-orange-300 hover:bg-slate-50/50"
                  }`}
                >
                  {/* Clean Thumbnail with Teal/Orange Play Icon */}
                  <div className="relative w-28 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100 border border-slate-200">
                    <img
                      src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center ${isActive ? "bg-[#f25c05] text-white" : "bg-secondary text-white"}`}>
                        <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4l12 6-12 6V4z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Details */}
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-bold text-teal-700 block truncate">
                      {item.course}
                    </span>
                    <h4 className={`text-xs font-bold line-clamp-2 mt-0.5 ${isActive ? "text-teal-900" : "text-slate-800"}`}>
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1 truncate">
                      {item.student} 
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* ================= MOBILE (< lg): Horizontal Snap Peek Row ================= */}
        <div className="lg:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {successVideos.map((story) => (
              <div
                key={story.id}
                className="w-[85vw] sm:w-[320px] flex-shrink-0 snap-center bg-white rounded-2xl border border-slate-200 p-3 flex flex-col justify-between"
              >
                {/* 16:9 Video Frame */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200 mb-3">
                  <iframe
                    src={`https://www.youtube.com/embed/${story.videoId}`}
                    title={story.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>

                {/* Details */}
                <div className="px-1">
                  <span className="inline-block text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded mb-1.5">
                    {story.course}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 line-clamp-2">
                    {story.title}
                  </h3>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                    <span className="font-semibold">{story.student}</span>
                    <span className="text-[#f25c05] font-bold truncate max-w-[120px]">{story.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Hint */}
          <div className="flex items-center justify-center gap-1.5 mt-3 text-slate-400 text-xs font-semibold">
            <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span>ডানে সোয়াইপ করে অন্য ভিডিওগুলো দেখুন</span>
          </div>
        </div>

      </div>
    </section>
  );
}