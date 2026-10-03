// components/UpcomingCTA.jsx
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi2";

export default function ASSETCTA() {
  return (
    <section className="py-14 font-HindSiliguri bg-linear-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9] text-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Horizontal Card */}
        <div className="bg-white rounded-3xl border border-teal-100 p-7 sm:p-10 shadow-lg shadow-teal-900/5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Left Side: Information */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold tracking-wide mb-3">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              আসন্ন ব্যাচ
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight  text-transparent bg-clip-text bg-linear-to-b from-[#005776] to-[#008BB8] leading-tight">
              পরবর্তী ASSET ব্যাচের আপডেট সবার আগে পান
            </h2>

            {/* Description */}
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              আবেদন শুরু হলে আমরা আপনাকে জানিয়ে দেব। এখনই আপনার আগ্রহ জানিয়ে
              রাখুন।
            </p>
          </div>

          {/* Right Side: Actions (WhatsApp & Calls) */}
          <div className="w-full lg:w-auto shrink-0 flex flex-col items-stretch sm:items-start lg:items-end gap-3.5">
            {/* WhatsApp CTA Button */}
            <a
              href="https://wa.me/8801948858258?text=আমি%20পরবর্তী%20ASSET%20ব্যাচের%20আপডেট%20পেতে%20আগ্রহী"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base shadow-md shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <FaWhatsapp className="text-xl" />
              <span>আপডেট পান (WhatsApp)</span>
            </a>

            {/* Phone Numbers Strip */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600">
              <span className="font-semibold text-slate-700 flex items-center gap-1">
                <HiOutlinePhone className="text-teal-600 text-base" /> সরাসরি
                কল:
              </span>

              <div className="flex items-center gap-1.5 font-bold">
                <a
                  href="tel:01948858258"
                  className="px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 hover:bg-teal-100 transition-colors"
                >
                  ০১৯৪৮-৮৫৮২৫৮
                </a>
                <span className="text-slate-300">/</span>
                <a
                  href="tel:09638388388"
                  className="px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 hover:bg-teal-100 transition-colors"
                >
                  ০৯৬৩৮-৩৮৮৩৮৮
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
