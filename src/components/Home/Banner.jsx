import Image from "next/image";
import { FaArrowRight, FaComputer } from "react-icons/fa6";
import { HiAcademicCap, HiBookOpen } from "react-icons/hi2";
import { HiOfficeBuilding, HiShieldCheck, HiBadgeCheck } from "react-icons/hi";

export default function Banner() {
  return (
    <section className="relative w-full bg-[#F4F8FC] py-12 md:py-20 px-4 sm:px-6 lg:px-12 flex items-center justify-center overflow-hidden">
      {/* Decorative Background Ambient Glows (Radial gradients instead of heavy blur-3xl) */}
      {/* <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(186,230,253,0.45)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-28 w-[24rem] h-[24rem] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(255,237,213,0.5)_0%,transparent_70%)]"
      /> */}

      <div className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Top Gov Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-sky-100 shadow-sm text-[#0A3A5E] text-xs sm:text-sm font-semibold transition-transform duration-200 hover:scale-[1.02]">
            <span className="bg-[#D97706] hidden md:block text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
              BD GOV
            </span>
            <span className="font-HindSiliguri text-[#0F3654]">
              গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত স্কিলস ইনিশিয়েটিভ
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-HindSiliguri text-[#0C2340] tracking-tight leading-[1.15]">
            দক্ষতা অর্জন করুন, স্বীকৃতি নিন, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-[#005776] to-[#008BB8]">
              এগিয়ে যান ক্যারিয়ারে!
            </span>
          </h1>

          {/* Subheading (Bengali) */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-HindSiliguri text-[#006080] leading-snug">
            নতুন দক্ষতা অর্জন হোক বা পূর্বের দক্ষতার স্বীকৃতি, আপনার{" "}
            <br className="hidden sm:inline" /> ক্যারিয়ারে এগিয়ে যাওয়ার
            প্রয়োজনীয় সুযোগ এক জায়গায়।
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
            নতুন কোনো দক্ষতা শিখতে চান? দীর্ঘদিনের কাজের অভিজ্ঞতা ও দক্ষতার
            স্বীকৃতি পেতে চান? অথবা প্রশিক্ষণের পাশাপাশি বাস্তব কর্মপরিবেশে
            কাজের অভিজ্ঞতা নিতে চান? এই ভিন্ন ভিন্ন প্রয়োজনকে সামনে রেখে রয়েছে{" "}
            <span className="font-semibold text-slate-800">
              {" "}
              ASSET Project Training , <br className="hidden md:block" /> RPL
              Certification ও Industrial Attachment
            </span>
            -এর সুযোগ।
          </p>

          {/* Action Pills / Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1 w-full">
            <button
              type="button"
              className="group flex items-center gap-2.5 px-5 py-3 rounded-xl bg-linear-to-b from-[#EA580C] to-[#D97706] hover:from-[#C2410C] hover:to-[#B45309] text-white font-semibold text-sm transition-[transform,box-shadow] duration-300 shadow-md shadow-orange-950/15 hover:shadow-lg hover:-translate-y-0.5"
            >
              <HiBookOpen
                className="text-lg text-orange-100"
                aria-hidden="true"
              />
              <span>ASSET Project Training</span>
              <FaArrowRight
                className="text-xs opacity-70 group-hover:translate-x-1 transition-transform duration-300"
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white hover:bg-sky-50 border border-sky-100 text-[#024B68] font-medium text-sm transition-[transform,background-color] duration-200 shadow-xs hover:-translate-y-0.5"
            >
              <HiAcademicCap
                className="text-base text-[#007096]"
                aria-hidden="true"
              />
              <span className="font-HindSiliguri font-semibold">
                RPL Certificate
              </span>
            </button>

            <button
              type="button"
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white hover:bg-sky-50 border border-sky-100 text-[#024B68] font-medium text-sm transition-[transform,background-color] duration-200 shadow-xs hover:-translate-y-0.5"
            >
              <HiOfficeBuilding
                className="text-base text-[#007096]"
                aria-hidden="true"
              />
              <span className="font-HindSiliguri font-semibold">
                Industrial Attachment
              </span>
            </button>
          </div>

          {/* Bottom Features Strip */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-6 pt-3 text-xs sm:text-sm font-semibold font-HindSiliguri text-[#004B63] bg-white/85 p-3 rounded-xl border border-sky-50 w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-md bg-sky-50 text-[#007096]">
                <HiShieldCheck className="text-base" aria-hidden="true" />
              </div>
              <span>NSDA Approved Training</span>
            </div>

            <span
              aria-hidden="true"
              className="hidden sm:inline text-slate-300 font-bold"
            >
              •
            </span>

            <div className="flex items-center gap-2">
              <div className="p-1 rounded-md bg-sky-50 text-[#007096]">
                <HiBadgeCheck className="text-base" aria-hidden="true" />
              </div>
              <span>Government Skills Certificate</span>
            </div>

            <span
              aria-hidden="true"
              className="hidden sm:inline text-slate-300 font-bold"
            >
              •
            </span>

            <div className="flex items-center gap-2">
              <div className="p-1 rounded-md bg-sky-50 text-[#007096]">
                <FaComputer className="text-base" aria-hidden="true" />
              </div>
              <span>Free Skills Training</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT CARD ================= */}
        <div className="lg:col-span-5 w-full">
          <div className="relative bg-white/95 p-4 sm:p-5 rounded-3xl shadow-xl shadow-slate-200/60 border border-white/80 transition-shadow duration-300 hover:shadow-2xl hover:shadow-slate-300/60">
            {/* Image Container */}
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden group shadow-inner">
              <Image
                src="/banner-section/দক্ষতা-অর্জন-করুন.webp"
                alt="Students in Robotics and Engineering Lab"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1023px) 92vw, 500px"
                className="object-cover brightness-120 object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* 3 Modern Stats Boxes */}
            <div className="grid grid-cols-3 gap-3 pt-3">
              <div className="bg-[#F4F9FD] hover:bg-[#EBF4FC] transition-colors rounded-2xl py-3 px-2 text-center flex flex-col items-center justify-center border border-sky-50">
                <span className="text-base sm:text-xl font-extrabold text-[#005776] font-HindSiliguri">
                  ১.৫ লাখ+
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium font-HindSiliguri mt-0.5">
                  প্রশিক্ষার্থী
                </span>
              </div>

              <div className="bg-[#F4F9FD] hover:bg-[#EBF4FC] transition-colors rounded-2xl py-3 px-2 text-center flex flex-col items-center justify-center border border-sky-50">
                <span className="text-base sm:text-xl font-extrabold text-[#005776] font-HindSiliguri">
                  ৯৫%
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium font-HindSiliguri mt-0.5">
                  পাসের হার
                </span>
              </div>

              <div className="bg-[#F4F9FD] hover:bg-[#EBF4FC] transition-colors rounded-2xl py-3 px-2 text-center flex flex-col items-center justify-center border border-sky-50">
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
