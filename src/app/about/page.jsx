// components/AboutUs.jsx
"use client";

import React from "react";
import {
  HiOutlineSparkles,
  HiOutlineRocketLaunch,
  HiOutlineGlobeAlt,
  HiOutlineTrophy,
  HiOutlineMapPin,
  HiOutlineCheck,
} from "react-icons/hi2";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

export default function AboutUs() {
  // 1. Mission, Vision & Goals (From eshikhon.site/aboutus/)
  const missionVisionGoals = [
    {
      label: "আমাদের ভিশন",
      title: "Vision: ডিজিটাল কর্মসংস্থান",
      theme: "teal",
      icon: <HiOutlineGlobeAlt className="text-2xl" />,
      points: [
        "বাংলাদেশের প্রতিটি তরুণ-তরুণীকে ঘরে বসে আন্তর্জাতিক মানের আইটি দক্ষতায় দক্ষ করা।",
        "গ্লোবাল মার্কেটপ্লেস ও দেশীয় কর্পোরেট সেক্টরে শীর্ষস্থানীয় দক্ষ মানবসম্পদ তৈরি।",
        "প্রান্তিক পর্যায় পর্যন্ত মানসম্মত আইটি শিক্ষাকে সহজে পৌঁছে দেওয়া।",
      ],
    },
    {
      label: "আমাদের মিশন",
      title: "Mission: হাতে-কলমে বাস্তব শিক্ষা",
      theme: "orange",
      icon: <HiOutlineRocketLaunch className="text-2xl" />,
      points: [
        "তাত্ত্বিক শিক্ষার বদলে লাইভ রিয়েল-ওয়ার্ল্ড প্রজেক্ট ও পোর্টফোলিওভিত্তিক প্রশিক্ষণ।",
        "ইন্ডাস্ট্রি-এক্সপার্ট মেন্টরদের সার্বক্ষণিক গাইডলাইন এবং ২৪/৭ সাপোর্ট সুবিধা।",
        "সাশ্রয়ী খরচে সর্বোচ্চ মানের পেশাদার কারিকুলাম নিশ্চিত করা।",
      ],
    },
    {
      label: "আমাদের লক্ষ্য",
      title: "Goal: স্বাবলম্বী বাংলাদেশ",
      theme: "teal",
      icon: <HiOutlineTrophy className="text-2xl" />,
      points: [
        "আগামী ৫ বছরে আরও ২ লক্ষাধিক তরুণ-তরুণীকে স্বাবলম্বী হিসেবে গড়ে তোলা।",
        "জাতীয় দক্ষতা মানদণ্ড (BTEB ও NSDA) অনুযায়ী প্রতিটি কোর্সের মান নিশ্চিতকরণ।",
        "কোর্স সমাপ্তির পর সফল শিক্ষার্থীদের জন্য ১০০% ক্যারিয়ার ও ইন্টার্নশিপ সহায়তা।",
      ],
    },
  ];

  // 2. Leadership (Ibrahim Akbar) with real social profiles
  const leadership = {
    name: "Ibrahim Akbar",
    role: "Founder & CEO",
    photo: "https://eshikhon.com.bd/wp-content/uploads/2025/06/Ibrahim-vai.webp",
    quote:
      "Empowering your learning journey with passion, purpose, and people who care. আমাদের মূল লক্ষ্য হলো দেশের প্রত্যন্ত অঞ্চলের তরুণদেরও এমন একটি আন্তর্জাতিক মানের দক্ষতায় গড়ে তোলা, যাতে ঘরে বসেই তারা বিশ্বমানের প্রযুক্তি ক্যারিয়ার গড়তে পারে।",
    socials: [
      { name: "Facebook", href: "https://www.facebook.com/w3cibrahim", icon: <FaFacebookF className="text-sm" /> },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/ibrahimakbar01/", icon: <FaLinkedinIn className="text-sm" /> },
    ],
  };

  // 3. Team Departments (Real data from eshikhon.com.bd/team/)
  const teamDepartments = [
    {
      category: "Business Development, HR & Operations",
      theme: "teal",
      members: [
        {
          name: "Rahe Sanjid Nahid",
          role: "Senior Operating Officer",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2026/06/Rahe-Sanjid-Nahid-1.webp",
        },
        {
          name: "Fozle Anwar Nayem",
          role: "Executive Director, Business Development",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2026/04/Fozle-Anwar-Nayem.webp",
        },
        {
          name: "Md Nadim Mahamud",
          role: "Business Development Executive",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2026/06/Nadim-Mahmud.webp",
        },
      ],
    },
    {
      category: "Marketing & Creative Team",
      theme: "orange",
      members: [
        {
          name: "Md. Shihab Shaharia",
          role: "Head of Digital Marketing Department",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2026/04/Md.-Shihab-Shaharia.webp",
        },
        {
          name: "Israt Jahan",
          role: "Senior Digital Marketing Executive",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2026/04/Israt-Jahan_Senior-Digital-Marketing-Executive.webp",
        },
        {
          name: "Shafikul Islam Shohag",
          role: "Sr Graphic Design Executive",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2026/04/Shafikul-Islam-Shohag.webp",
        },
        {
          name: "MD. Atikur Rahman",
          role: "Sr Graphic Design Executive",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2026/06/Atikur-Rahman.webp",
        },
        {
          name: "Md Mehedi Hasan",
          role: "Creative Video Editor & Videographer",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2025/06/mehedi-vai.webp",
        },
      ],
    },
    {
      category: "Support & Academic Team",
      theme: "teal",
      members: [
        {
          name: "Jannatul Ferdous",
          role: "Sr. Customer Support Executive",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2025/06/jannat-apu.webp",
        },
        {
          name: "Md. Shamim Sweet",
          role: "Sr. Customer Support Executive",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2026/04/Md.-Shamim-Sweet.webp",
        },
        {
          name: "Nayela Ahmed",
          role: "Front-Desk Executive",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2025/06/nayla-apu.webp",
        },
        {
          name: "Antora Imaculate Gomes",
          role: "Front-Desk Executive",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2025/06/noboni-apu.webp",
        },
        {
          name: "Sabrina Reem",
          role: "Front-Desk Executive",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2026/08/Rimi.jpg",
        },
        {
          name: "Niamur Rahman Nishad",
          role: "Customer Support Executive",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2026/04/Niamur-Rahman-Nishad.webp",
        },
        {
          name: "Fabiha Afifa",
          role: "Customer Support Executive",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2026/04/Fabiha-Afifa.webp",
        },
        {
          name: "Tawhid Khan",
          role: "Customer Support Executive",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2026/08/Tawhid.gif",
        },
        {
          name: "Md. Mustafiz Rahman",
          role: "Junior MERN Stack Developer",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2026/06/Mustafizur-Rahman.webp",
        },
        {
          name: "Bikrom Ray",
          role: "Instructor Web Design & Development",
          photo: "https://eshikhon.com.bd/wp-content/uploads/2026/06/Bikrom-Roy.webp",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-HindSiliguri text-slate-800 pb-20">
      
      {/* ================= 1. HERO HEADER ================= */}
      <section className="pt-16 pb-12 bg-white border-b border-slate-100 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-600 border border-orange-200 mb-3.5">
            <HiOutlineSparkles className="text-sm" />
            We Are eShikhon
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#005776] via-[#006f94] to-[#008BB8] tracking-tight leading-tight">
            দক্ষতা অর্জন ও ক্যারিয়ার গড়ার <br className="hidden sm:inline" /> বিশ্বস্ত ঠিকানা ইশিখন
          </h1>

          <p className="mt-4 text-xs sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Empowering your learning journey with passion, purpose, and people who care. ২০১২ সাল থেকে শুরু করে আজ পর্যন্ত ১.৫ লক্ষাধিক শিক্ষার্থীকে স্বাবলম্বী করেছে ইশিখন।
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 mt-12 space-y-16">

        {/* ================= 2. MISSION, VISION & GOAL CARDS ================= */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              আমাদের মূল দর্শন
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              মিশন, ভিশন ও আমাদের লক্ষ্য
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-lg mx-auto">
              যে আদর্শ ও লক্ষ্যকে সামনে রেখে এক দশকেরও বেশি সময় ধরে আমরা দক্ষ জনশক্তি গড়ে তুলছি
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionVisionGoals.map((item, idx) => {
              const isTeal = item.theme === "teal";
              return (
                <div
                  key={idx}
                  className={`bg-white p-6 sm:p-7 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between ${
                    isTeal
                      ? "border-teal-100 hover:border-teal-400"
                      : "border-orange-100 hover:border-orange-400"
                  }`}
                >
                  <div>
                    {/* Icon Box */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        isTeal
                          ? "bg-teal-50 text-teal-600"
                          : "bg-orange-50 text-orange-500"
                      }`}
                    >
                      {item.icon}
                    </div>

                    {/* Tag */}
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider block ${
                        isTeal ? "text-teal-600" : "text-orange-500"
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mt-1 mb-4 leading-snug">
                      {item.title}
                    </h3>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5">
                      {item.points.map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed"
                        >
                          <span
                            className={`mt-0.5 p-0.5 rounded-full shrink-0 ${
                              isTeal
                                ? "bg-teal-100 text-teal-700"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            <HiOutlineCheck className="w-3 h-3" />
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= 3. FOUNDER & CEO SPOTLIGHT ================= */}
        <div className="bg-white rounded-3xl border-2 border-orange-100 shadow-sm p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Founder Photo */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative">
                <img
                  src={leadership.photo}
                  alt={leadership.name}
                  className="w-48 h-56 sm:w-60 sm:h-72 rounded-2xl object-cover border-4 border-orange-50 shadow-md bg-slate-100"
                />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-orange-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                  {leadership.role}
                </span>
              </div>
            </div>

            {/* Founder Details & ONLY VALID SOCIAL LINKS */}
            <div className="md:col-span-8 space-y-3.5 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {leadership.name}
              </h2>
              <p className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Founder & CEO, eShikhon
              </p>
              
              <blockquote className="text-xs sm:text-sm text-slate-600 leading-relaxed italic pt-2 border-t border-slate-100">
                "{leadership.quote}"
              </blockquote>

              {/* Real Social Links Only (No blank #) */}
              <div className="flex items-center justify-center md:justify-start gap-2.5 pt-2">
                {leadership.socials.map((soc, sIdx) => (
                  <a
                    key={sIdx}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.name}
                    className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white flex items-center justify-center transition shadow-2xs"
                  >
                    {soc.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ================= 4. TEAM DEPARTMENTS SHOWCASE ================= */}
        <div className="space-y-14">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
              Our People
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              মিট আওয়ার ডেডিকেটেড টিম
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              যাঁদের আন্তরিক প্রচেষ্টা ও দিকনির্দেশনায় ইশিখনের শিক্ষার্থীরা প্রতিনিয়ত সফলতার শিখরে পৌঁছাচ্ছেন
            </p>
          </div>

          {teamDepartments.map((dept, dIdx) => {
            const isTeal = dept.theme === "teal";
            return (
              <div key={dIdx} className="space-y-6">
                
                {/* Department Section Header */}
                <div className="border-l-4 border-l-orange-500 pl-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {dept.category}
                  </h3>
                  <span className="text-xs text-slate-400">
                    {dept.members.length} জন টিম সদস্য
                  </span>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {dept.members.map((member, mIdx) => (
                    <div
                      key={mIdx}
                      className={`bg-white rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md overflow-hidden flex flex-col justify-between ${
                        isTeal
                          ? "border-teal-100 hover:border-teal-400"
                          : "border-orange-100 hover:border-orange-400"
                      }`}
                    >
                      {/* Image Container */}
                      <div className="aspect-[4/4] w-full overflow-hidden bg-slate-100 relative">
                        <img
                          src={member.photo}
                          alt={member.name}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                        />
                      </div>

                      {/* Details */}
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                            {member.name}
                          </h4>
                          <p
                            className={`text-[11px] sm:text-xs font-semibold mt-1 leading-tight ${
                              isTeal ? "text-teal-600" : "text-orange-600"
                            }`}
                          >
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* ================= 5. CAMPUS LOCATION CARD ================= */}
        <div className="bg-white rounded-2xl border-2 border-orange-100 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-2.5 py-1 rounded-md">
              সরাসরি ক্যাম্পাস ভিজিট করুন
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              আমাদের আধুনিক কম্পিউটার ল্যাব ও অফিস
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 flex items-center justify-center md:justify-start gap-2">
              <HiOutlineMapPin className="text-orange-600 shrink-0 text-base" />
              <span>151/7, Goodluck Center (4th Floor), Panthapath Signal, Green Road, Dhaka</span>
            </p>
          </div>

          <a
            href="/contact"
            className="px-6 py-3 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl text-sm shadow-md shadow-orange-500/25 transition cursor-pointer whitespace-nowrap"
          >
            যোগাযোগ ও দিকনির্দেশনা
          </a>
        </div>

      </div>
    </div>
  );
}