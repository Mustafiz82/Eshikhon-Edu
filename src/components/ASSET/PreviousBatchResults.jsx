// components/PreviousBatchResults.jsx
"use client";

import { useState } from "react";
import {
  HiOutlinePlay,
  HiOutlineCheckBadge,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineXMark,
  HiOutlineClock,
} from "react-icons/hi2";

export default function PreviousBatchResults() {
  // 1. Video List (Strictly ASSET batch verified outcomes, NO income figures)
  const videos = [
    {
      id: 1,
      name: "রহিম উদ্দিন",
      course: "Web Design & Development",
      batch: "ASSET ব্যাচ ৩",
      outcome: "৩ মাসের প্রশিক্ষণ শেষে সফলভাবে NSDA সার্টিফিকেট অর্জন করেছেন",
      duration: "১:১৫ মিনিট",
      thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw9WgXcQ", // Replace with real ASSET video embed
    },
    {
      id: 2,
      name: "নাসরিন আক্তার",
      course: "Graphic & UI Design",
      batch: "ASSET ব্যাচ ২",
      outcome: "জাতীয় দক্ষতা মূল্যায়ন (NSDA Assessment) সফলভাবে সম্পন্ন",
      duration: "০:৫৮ মিনিট",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dw9WgXcQ",
    },
    {
      id: 3,
      name: "তানভীর আহমেদ",
      course: "Digital Marketing",
      batch: "ASSET ব্যাচ ৩",
      outcome: "কোর্স সমাপনী লাইভ প্রজেক্ট প্রেজেন্টেশন সম্পন্ন করেছেন",
      duration: "১:০৫ মিনিট",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQwWgXcQ",
    },
  ];

  // 2. Batch Photos (6 photos, verified captions with Batch and Month)
  const photos = [
    {
      id: 1,
      caption: "ASSET ব্যাচ ৩: প্র্যাকটিক্যাল কম্পিউটার ল্যাব",
      date: "মার্চ ২০২৬",
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      caption: "ASSET ব্যাচ ২: NSDA সনদপত্র বিতরণ অনুষ্ঠান",
      date: "ফেব্রুয়ারি ২০২৬",
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      caption: "ASSET ব্যাচ ৩: ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট রিভিউ",
      date: "মার্চ ২০২৬",
      src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      caption: "ASSET ব্যাচ ১: শিক্ষার্থীদের ল্যাব প্র্যাকটিস সেশন",
      date: "জানুয়ারি ২০২৬",
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      caption: "ASSET ব্যাচ ২: সরকারি NSDA এসেসমেন্ট পরীক্ষার দিন",
      date: "ফেব্রুয়ারি ২০২৬",
      src: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      caption: "ASSET ব্যাচ ৩: সমাপনী ক্লাস ও গ্রুপ ফটো",
      date: "মার্চ ২০২৬",
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section className="py-16 font-HindSiliguri bg-[#F8FAFC] text-slate-800 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4">

        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold tracking-wide mb-3">
            বাস্তব প্রমাণ ও অর্জন
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-[#005776] to-[#008BB8]">
            আমাদের পূর্ববর্তী ব্যাচের সফলতা
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            ASSET ব্যাচের শিক্ষার্থীদের অভিজ্ঞতা এবং ক্লাসরুম ও ল্যাবের বাস্তব মুহূর্ত।
          </p>
        </div>

        {/* --- BLOCK 1: RESULTS STRIP (Plain, clean, real records) --- */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-6 mb-12 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 text-center">
            
            <div className="py-3 sm:py-1 px-4">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 block tracking-tight">
                ০৬+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5 block">
                ASSET ব্যাচ সম্পন্ন
              </span>
            </div>

            <div className="py-3 sm:py-1 px-4">
              <span className="text-2xl sm:text-3xl font-black text-teal-700 block tracking-tight">
                ৪৫০+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5 block">
                প্রশিক্ষণ সম্পন্নকারী শিক্ষার্থী
              </span>
            </div>

            <div className="py-3 sm:py-1 px-4">
              <span className="text-2xl sm:text-3xl font-black text-orange-600 block tracking-tight">
                ৩৫০+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5 block">
                NSDA সনদপ্রাপ্ত গ্র্যাজুয়েট
              </span>
            </div>

          </div>
        </div>

        {/* --- BLOCK 2: STUDENT VIDEOS (Desktop: Player Left + Thumbnails Right | Mobile: Swipe Row) --- */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
              শিক্ষার্থীদের নিজস্ব অভিজ্ঞতা (ভিডিও)
            </h3>
           
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Main Featured Player (7 Columns) */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-sm">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 shadow-inner">
                <iframe
                  src={activeVideo.videoEmbedUrl}
                  title={activeVideo.name}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Active Video Meta */}
              <div className="pt-4 px-1 pb-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-md bg-teal-50 text-teal-800 border border-teal-200">
                    {activeVideo.batch}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                    <HiOutlineClock className="w-3.5 h-3.5 text-slate-400" />
                    {activeVideo.duration}
                  </span>
                </div>
                
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-2">
                  {activeVideo.name} — <span className="font-normal text-slate-600 text-sm">{activeVideo.course}</span>
                </h4>
                
                <p className="text-xs sm:text-sm text-teal-800 font-medium mt-1 flex items-center gap-1.5">
                  <HiOutlineCheckBadge className="w-4 h-4 text-teal-600 shrink-0" />
                  {activeVideo.outcome}
                </p>
              </div>
            </div>

            {/* Thumbnail Playlist (5 Columns) */}
            <div className="lg:col-span-5 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 snap-x">
              {videos.map((vid) => {
                const isSelected = activeVideo.id === vid.id;
                return (
                  <button
                    key={vid.id}
                    onClick={() => setActiveVideo(vid)}
                    className={`shrink-0 w-72 sm:w-80 lg:w-full snap-start text-left p-3 rounded-xl border transition-all flex items-center gap-3 ${
                      isSelected
                        ? "bg-teal-50/60 border-teal-400 shadow-sm"
                        : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {/* Thumbnail with Play Icon */}
                    <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                      <img
                        src={vid.thumbnail}
                        alt={vid.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center text-orange-600 shadow">
                          <HiOutlinePlay className="w-3.5 h-3.5 ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-500 uppercase">
                          {vid.batch}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {vid.duration}
                        </span>
                      </div>
                      <h5 className="text-sm font-bold text-slate-900 truncate">
                        {vid.name}
                      </h5>
                      <p className="text-xs text-slate-500 truncate">
                        {vid.course}
                      </p>
                      <p className="text-[11px] text-teal-700 truncate mt-0.5">
                        ✓ {vid.outcome}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/* --- BLOCK 3: BATCH PHOTOS (3x2 Desktop, 2x3 Mobile) --- */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
             Classroom and Lab Photos
            </h3>
            <span className="text-xs text-slate-500 hidden sm:inline-block">
              *ছবিতে ক্লিক করে বড় আকারে দেখুন
            </span>
          </div>

          {/* 3x2 Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className="group relative h-44 sm:h-52 rounded-xl overflow-hidden cursor-pointer border border-slate-200 bg-slate-100 shadow-sm"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Gradient Overlay & Verified Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-3 text-white">
                  <span className="text-[10px] font-medium text-orange-300">
                    {photo.date}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold line-clamp-2 leading-snug">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Link Button */}
          <div className="mt-8 text-center">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-teal-200 text-teal-800 text-xs sm:text-sm font-bold shadow-sm hover:bg-teal-50 hover:border-teal-400 transition-all"
            >
              সব ASSET ছবি দেখুন
              <HiOutlineArrowTopRightOnSquare className="text-sm text-teal-600" />
            </a>
          </div>
        </div>

      </div>

      {/* --- LIGHTBOX MODAL FOR PHOTOS --- */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition"
              aria-label="Close modal"
            >
              <HiOutlineXMark className="w-5 h-5" />
            </button>

            <img
              src={activePhoto.src}
              alt={activePhoto.caption}
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-100">
              <p className="text-sm sm:text-base font-bold text-slate-800">
                {activePhoto.caption}
              </p>
              <span className="text-xs font-semibold text-orange-600 px-2.5 py-1 rounded-md bg-orange-50 w-fit">
                {activePhoto.date}
              </span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}