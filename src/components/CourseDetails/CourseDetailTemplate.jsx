"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineClock,
  HiOutlineCalendarDays,
  HiOutlineMapPin,
  HiOutlineChevronDown,
  HiOutlineCheckCircle,
  HiOutlineDocumentCheck,
  HiOutlineCreditCard,
  HiOutlineGift,
  HiOutlineInformationCircle,
  HiOutlinePhone,
} from "react-icons/hi2";
import ProgramTrustCard from "./ProgramTrustCard";

const PROGRAM_LABELS = {
  asset: "ASSET Project",
  rpl: "RPL Assessment",
  attachment: "Industrial Attachment",
};

export default function CourseDetailTemplate({ course }) {
  const [openModule, setOpenModule] = useState(0);

  const isFree = course.pricing?.type === "free";
  const hasStipend = Boolean(course.pricing?.perkLine);
  const isClosed = course.isClosed || course.action?.type === "closed";
  const programTitle = PROGRAM_LABELS[course.program] || course.program;

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-HindSiliguri text-slate-800 pb-20">
      {/* 1. Breadcrumb Bar */}
      <nav
        aria-label="Breadcrumb"
        className="bg-white border-b border-slate-200 py-3"
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between text-xs sm:text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-teal-700 transition-colors">
              হোম
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-teal-700">
              {programTitle}
            </span>
            <span aria-hidden="true">/</span>
            <span className="text-slate-900 font-medium truncate max-w-xs">
              {course.title}
            </span>
          </div>

          {/* Show Deadline OR Closed status in header */}
          {isClosed ? (
            <span className="text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold">
              তথ্য প্রদর্শনের জন্য সংরক্ষিত
            </span>
          ) : (
            course.enrollEnd && (
              <div className="bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-full font-semibold flex items-center gap-1.5 mt-2 sm:mt-0 text-xs">
                <HiOutlineClock className="text-sm shrink-0 text-orange-600" aria-hidden="true" />
                <span>আবেদনের শেষ তারিখ: {course.enrollEnd}</span>
              </div>
            )
          )}
        </div>
      </nav>

      {/* 2. Hero Area */}
      <header className="bg-white border-b border-slate-100 py-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
            {/* Status Pill */}
            {isClosed ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-700">
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                আবেদন প্রক্রিয়া বন্ধ
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-white shadow-xs">
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                ভর্তি চলছে
              </span>
            )}

            {/* Program Badge */}
            <span className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
              {programTitle}
            </span>

            {/* Level Badge */}
            {course.level && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                <HiOutlineDocumentCheck className="text-sm text-orange-600" aria-hidden="true" />
                লেভেল {course.level}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold break-words text-transparent bg-clip-text bg-gradient-to-r from-[#005776] via-[#006d94] to-[#008BB8] max-w-4xl leading-snug">
            {course.title}
          </h1>

          {/* Alert Notice Banner for Closed Programs */}
          {isClosed && (
            <div className="mt-4 p-3.5 bg-amber-50/90 border border-amber-200 rounded-xl flex items-start gap-2.5 text-xs sm:text-sm text-amber-900 max-w-2xl">
              <HiOutlineInformationCircle className="text-xl text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
              <p>
                <strong>বিজ্ঞপ্তি:</strong> বর্তমানে এই প্রোগ্রামের নতুন ব্যাচের
                আবেদন গ্রহণ স্থগিত রয়েছে। নিচে উল্লেখিত তথ্যসমূহ শুধুমাত্র কোর্স
                সিলেবাস ও যোগ্যতা সম্পর্কিত ধারণার জন্য প্রদর্শিত হচ্ছে।
              </p>
            </div>
          )}
        </div>
      </header>

      {/* 3. Main Grid Layout */}
      <main className="max-w-6xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================= LEFT CONTENT AREA (65%) ================= */}
          <div className="lg:col-span-8 space-y-7">
            {/* Stats Card: Non-RPL vs RPL */}
            {course.program !== "rpl" ? (
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <div className="grid grid-cols-3 gap-3 pb-4 border-b border-slate-100 text-center sm:text-left">
                  <div className="sm:border-r border-slate-100 sm:pr-3">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      সময়সীমা
                    </span>
                    <p className="font-extrabold text-slate-900 text-base sm:text-lg mt-0.5">
                      {course.durationMonths} মাস
                    </p>
                  </div>
                  <div className="sm:border-r border-slate-100 sm:pr-3">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      মোট ক্লাস
                    </span>
                    <p className="font-extrabold text-orange-600 text-base sm:text-lg mt-0.5">
                      {course.totalClasses} টি সেশন
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      মোট সময়
                    </span>
                    <p className="font-extrabold text-slate-900 text-base sm:text-lg mt-0.5">
                      {course.totalHours}+ ঘণ্টা
                    </p>
                  </div>
                </div>

                {/* Dedicated Full-Width Venue Strip */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-orange-50/60 border border-orange-100">
                  <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <HiOutlineMapPin className="text-lg" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 block">
                      ক্যাম্পাস / ভেন্যু লোকেশন
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5 leading-relaxed break-words">
                      {course.venue}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <div className="grid grid-cols-3 gap-3 pb-4 border-b border-slate-100 text-center sm:text-left">
                  <div className="sm:border-r border-slate-100 sm:pr-3">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Assessment Date
                    </span>
                    <p className="font-extrabold text-slate-900 text-base sm:text-lg mt-0.5">
                      {course.assessmentDate}
                    </p>
                  </div>
                  <div className="sm:border-r border-slate-100 sm:pr-3">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Registration Deadline
                    </span>
                    <p className="font-extrabold text-orange-600 text-base sm:text-lg mt-0.5">
                      {course.registrationDeadline}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Assessment Duration
                    </span>
                    <p className="font-extrabold text-slate-900 text-base sm:text-lg mt-0.5">
                      {course.duration}
                    </p>
                  </div>
                </div>

                {/* Dedicated Full-Width Venue Strip */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-orange-50/60 border border-orange-100">
                  <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <HiOutlineMapPin className="text-lg" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 block">
                      ক্যাম্পাস / ভেন্যু লোকেশন
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5 leading-relaxed break-words">
                      {course.venue}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Description & Eligibility Sections */}
            <div className="space-y-6">
              {course.sections?.map((section, index) => (
                <div
                  key={section.id ?? index}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs"
                >
                  <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 border-l-4 border-l-orange-500 pl-3">
                    {section.title}
                  </h2>

                  <div className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {section.content && (
                      <p className="whitespace-pre-line">{section.content}</p>
                    )}

                    {section.points && (
                      <ul className="space-y-2.5">
                        {section.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <ProgramTrustCard
              program={course.program}
              courseTitle={course.title}
            />

            {/* Curriculum Accordion */}
            {course.curriculum && (
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs">
                <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 border-l-4 border-l-orange-500 pl-3 flex items-center justify-between">
                  <span>পাঠ্যসূচি (Curriculum)</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-100 text-orange-700">
                    {course.curriculum.length} টি মডিউল
                  </span>
                </h2>

                <div className="space-y-3">
                  {course.curriculum.map((mod, idx) => {
                    const isOpen = openModule === idx;
                    return (
                      <div
                        key={mod.id ?? idx}
                        className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                          isOpen
                            ? "border-orange-300 shadow-xs"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => setOpenModule(isOpen ? -1 : idx)}
                          className={`w-full flex items-center justify-between p-4 text-left transition-colors duration-200 cursor-pointer ${
                            isOpen
                              ? "bg-orange-50/50"
                              : "bg-slate-50 hover:bg-slate-100"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold transition-colors ${
                                isOpen
                                  ? "bg-orange-500 text-white"
                                  : "bg-slate-200 text-slate-700"
                              }`}
                            >
                              {idx + 1}
                            </span>
                            <span className="font-bold text-slate-800 text-sm sm:text-base">
                              {mod.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-500 font-semibold">
                              {mod.topics.length} টি টপিক
                            </span>
                            <HiOutlineChevronDown
                              aria-hidden="true"
                              className={`text-slate-500 transition-transform duration-200 ${
                                isOpen ? "rotate-180 text-orange-600" : ""
                              }`}
                            />
                          </div>
                        </button>

                        {isOpen && (
                          <div className="p-4 bg-white space-y-2.5 border-t border-orange-100">
                            {mod.topics.map((t, tIdx) => (
                              <div
                                key={tIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600"
                              >
                                <HiOutlineCheckCircle className="text-orange-500 text-base shrink-0 mt-0.5" aria-hidden="true" />
                                <span className="leading-snug">{t}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* ================= RIGHT STICKY SIDEBAR (35%) ================= */}
          <aside
            aria-label="Enrollment Actions"
            className="lg:col-span-4 lg:sticky lg:top-20 space-y-5"
          >
            {/* Action / Pricing Card */}
            <div className="bg-white rounded-2xl border-2 border-orange-100 shadow-md overflow-hidden">
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <Image
                  src={course.thumbnail.src}
                  alt={course.thumbnail.alt || course.title}
                  fill
                  sizes="(max-width: 1023px) 92vw, 380px"
                  className="object-cover"
                />
                <div
                  className={`absolute top-3 left-3 text-white text-[11px] font-bold px-2.5 py-1 rounded-md ${
                    isClosed ? "bg-slate-800/90" : "bg-orange-600"
                  }`}
                >
                  {isClosed ? "আবেদন স্থগিত" : "ব্যাচ এনরোলমেন্ট"}
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-5">
                {/* Price Display */}
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    কোর্স ফি ও স্কলারশিপ
                  </span>

                  {isFree ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-black text-slate-800">
                        সম্পূর্ণ ফ্রি
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-black text-slate-900">
                        ৳{course.pricing?.price}
                      </span>
                    </div>
                  )}

                  {/* Stipend Callout if present */}
                  {hasStipend && (
                    <div className="mt-2.5 p-3 rounded-xl bg-orange-50 border border-orange-200 flex items-center gap-2.5 text-orange-800 text-xs font-bold leading-snug">
                      <HiOutlineGift className="text-xl shrink-0 text-orange-600" aria-hidden="true" />
                      <span>{course.pricing.perkLine}</span>
                    </div>
                  )}
                </div>

                {/* DYNAMIC BUTTON: Disabled if closed, Active if open */}
                {isClosed ? (
                  <div className="space-y-2">
                    <button
                      type="button"
                      disabled
                      className="w-full py-3.5 px-4 rounded-xl font-bold text-slate-400 bg-slate-100 border border-slate-200 cursor-not-allowed text-center text-sm"
                    >
                      বর্তমানে আবেদন বন্ধ রয়েছে
                    </button>

                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 transition-colors duration-200 text-xs text-center"
                    >
                      <HiOutlinePhone className="text-sm" aria-hidden="true" />
                      <span>নতুন ব্যাচের তথ্যের জন্য যোগাযোগ করুন</span>
                    </Link>
                  </div>
                ) : (
                  <a
                    href={course.action?.link || "#"}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 transition-[background-color,box-shadow] duration-200 cursor-pointer text-center text-sm sm:text-base"
                  >
                    <HiOutlineCreditCard className="text-lg" aria-hidden="true" />
                    <span>
                      {course.action?.type === "apply"
                        ? "আবেদন ফরম পূরণ করুন"
                        : "কোর্সে ভর্তি নিশ্চিত করুন"}
                    </span>
                  </a>
                )}

                {/* Schedule & Full Venue */}
                <div className="pt-4 border-t border-slate-100 space-y-3 text-xs text-slate-600">
                  {course.schedule && (
                    <div className="flex items-start gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                        <HiOutlineCalendarDays className="text-sm" aria-hidden="true" />
                      </div>
                      <div>
                        <strong className="text-slate-800 block">
                          ক্লাস শিডিউল:
                        </strong>
                        <span className="leading-relaxed">
                          {course.schedule}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                      <HiOutlineMapPin className="text-sm" aria-hidden="true" />
                    </div>
                    <div>
                      <strong className="text-slate-800 block">
                        ক্যাম্পাস ভেন্যু:
                      </strong>
                      <span className="leading-relaxed text-slate-700 break-words font-medium">
                        {course.venue}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructors Card */}
            {course.instructors && course.instructors.length > 0 && (
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs">
                <h2 className="text-sm font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100 border-l-[3px] border-l-orange-500 pl-2">
                  ইন্সট্রাক্টর ও মেন্টর
                </h2>
                <div className="space-y-4">
                  {course.instructors.map((inst, i) => (
                    <div key={i} className="flex items-start gap-3.5">
                      <Image
                        src={inst.photo}
                        alt={inst.name}
                        width={56}
                        height={56}
                        className="w-14 h-14 rounded-xl object-cover border border-slate-200 shrink-0"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 leading-snug">
                          {inst.name}
                        </h3>
                        <p className="text-sm font-semibold text-orange-600 mt-0.5">
                          {inst.designation}
                        </p>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                          {inst.bio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}