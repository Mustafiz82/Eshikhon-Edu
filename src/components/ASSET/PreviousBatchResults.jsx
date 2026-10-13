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
   const [activeId, setActiveId] = useState(null);

  const shortsVideos = [
    { id: 1, videoId: "VGL0Wa91dPQ" },
    { id: 2, videoId: "HsdZyTusFQw" },
    { id: 3, videoId: "crE9yBBevWo" },
    { id: 4, videoId: "Cq9xdYsVEDk" },
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

  // const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section className="py-16 font-HindSiliguri bg-[#F8FAFC] text-slate-800 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4">

        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold tracking-wide mb-3">
            বাস্তব প্রমাণ ও অর্জন
          </div>
          <h2 className="text-2xl pt-2 sm:text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-[#005776] to-[#008BB8]">
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
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shortsVideos.map((vid) => (
            <div 
              key={vid.id} 
              className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 transition-all duration-300"
            >
              {activeId === vid.id ? (
                // Play the video when active
                <iframe
                  src={`https://www.youtube.com/embed/${vid.videoId}?autoplay=1&rel=0&modestbranding=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                // Show thumbnail when inactive
                <div 
                  className="absolute inset-0 cursor-pointer group"
                  onClick={() => setActiveId(vid.id)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${vid.videoId}/hqdefault.jpg`}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg group-hover:scale-110 transition-transform">
                      <HiOutlinePlay className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
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