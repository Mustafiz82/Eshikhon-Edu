// components/PreviousBatchResults.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { HiOutlinePlay, HiOutlineXMark } from "react-icons/hi2";

const shortsVideos = [
  { id: 1, videoId: "VGL0Wa91dPQ" },
  { id: 2, videoId: "HsdZyTusFQw" },
  { id: 3, videoId: "crE9yBBevWo" },
  { id: 4, videoId: "Cq9xdYsVEDk" },
];

const photos = [
  {
    id: 1,
    caption: "ASSET ব্যাচ ৩: প্র্যাকটিক্যাল কম্পিউটার ল্যাব",
    date: "মার্চ ২০২৬",
    src: "/Classroom and Lab Photos/1.webp",
  },
  {
    id: 2,
    caption: "ASSET ব্যাচ ২: NSDA সনদপত্র বিতরণ অনুষ্ঠান",
    date: "ফেব্রুয়ারি ২০২৬",
    src: "/Classroom and Lab Photos/2.webp",
  },
  {
    id: 3,
    caption: "ASSET ব্যাচ ৩: ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট রিভিউ",
    date: "মার্চ ২০২৬",
    src: "/Classroom and Lab Photos/3.webp",
  },
  {
    id: 4,
    caption: "ASSET ব্যাচ ১: শিক্ষার্থীদের ল্যাব প্র্যাকটিস সেশন",
    date: "জানুয়ারি ২০২৬",
    src: "/Classroom and Lab Photos/4.webp",
  },
  {
    id: 5,
    caption: "ASSET ব্যাচ ২: সরকারি NSDA এসেসমেন্ট পরীক্ষার দিন",
    date: "ফেব্রুয়ারি ২০২৬",
    src: "/Classroom and Lab Photos/5.webp",
  },
  {
    id: 6,
    caption: "ASSET ব্যাচ ৩: সমাপনী ক্লাস ও গ্রুপ ফটো",
    date: "মার্চ ২০২৬",
    src: "/Classroom and Lab Photos/6.webp",
  },
];

export default function PreviousBatchResults() {
  const [activeId, setActiveId] = useState(null);
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section className="py-16 font-HindSiliguri bg-[#F8FAFC] text-slate-800 border-t border-slate-200/60 [content-visibility:auto] [contain-intrinsic-size:1px_1200px]">
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
            ASSET ব্যাচের শিক্ষার্থীদের অভিজ্ঞতা এবং ক্লাসরুম ও ল্যাবের বাস্তব
            মুহূর্ত।
          </p>
        </div>

        {/* --- BLOCK 1: RESULTS STRIP --- */}
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

        {/* --- BLOCK 2: STUDENT VIDEOS --- */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span
                aria-hidden="true"
                className="w-2.5 h-2.5 rounded-full bg-orange-500"
              />
              শিক্ষার্থীদের নিজস্ব অভিজ্ঞতা (ভিডিও)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shortsVideos.map((vid) => (
              <div
                key={vid.id}
                className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900"
              >
                {activeId === vid.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${vid.videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={`Student experience video ${vid.id}`}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    aria-label="Play video"
                    className="absolute inset-0 w-full h-full cursor-pointer group"
                    onClick={() => setActiveId(vid.id)}
                  >
                    <Image
                      src={`https://img.youtube.com/vi/${vid.videoId}/hqdefault.jpg`}
                      alt="Video thumbnail"
                      fill
                      sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 270px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg group-hover:scale-110 transition-transform">
                        <HiOutlinePlay
                          className="w-8 h-8 text-white fill-white"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* --- BLOCK 3: BATCH PHOTOS (3x2 Desktop, 2x3 Mobile) --- */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span
                aria-hidden="true"
                className="w-2.5 h-2.5 rounded-full bg-teal-600"
              />
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
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  priority
                  sizes="(max-width: 767px) 48vw, 360px"
                  className={`${
                    photo.id === 4 || photo.id === 6 ? "brightness-120 " : ""
                  }object-cover transition-transform duration-300 group-hover:scale-105`}
                />
              </div>
            ))}
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
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
              aria-label="Close modal"
            >
              <HiOutlineXMark className="w-5 h-5" aria-hidden="true" />
            </button>
            <Image
              src={activePhoto.src}
              alt={activePhoto.caption}
              width={1200}
              height={800}
              sizes="(max-width: 768px) 95vw, 768px"
              className="w-full max-h-[70vh] object-cover h-auto"
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
