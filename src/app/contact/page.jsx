"use client";

import React from "react";
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaPhoneVolume,
} from "react-icons/fa6";

export default function Page() {
  const phoneNumbers = [
    { label: "হটলাইন ১", number: "01705 776939", tel: "+8801705776939" },
    { label: "হটলাইন ২", number: "01948 858258", tel: "+8801948858258" },
    { label: "হটলাইন ৩", number: "01842 858258", tel: "+8801842858258" },
    { label: "টেলিফোন", number: "09638 388388", tel: "+8809638388388" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-HindSiliguri text-slate-800 pb-20">
      
      {/* ================= 1. PAGE HEADER ================= */}
      <section className="bg-white border-b border-slate-100 py-12 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-600 border border-orange-200 mb-3">
            <HiOutlineSparkles className="text-sm" />
            যোগাযোগ ও সাপোর্ট
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#005776] via-[#006f94] to-[#008BB8] tracking-tight leading-tight">
            আমাদের সাথে যোগাযোগ করুন
          </h1>

          <p className="mt-3 text-xs sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            যেকোনো কোর্স সংক্রান্ত তথ্য, ক্যারিয়ার কাউন্সেলিং বা সরাসরি ক্যাম্পাস পরিদর্শনের জন্য আমরা সর্বদা আপনার পাশে আছি।
          </p>
        </div>
      </section>

      {/* ================= 2. MAIN 2-COLUMN SECTION ================= */}
      <main className="max-w-6xl mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT COLUMN: CONTACT DETAILS ================= */}
          <div className="lg:col-span-6 bg-white rounded-3xl border-2 border-orange-100 shadow-sm p-6 sm:p-8 space-y-7">
            
            {/* Address Block */}
            <div className="space-y-3 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <HiOutlineMapPin className="text-xl" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block">
                    অফিস ও ক্যাম্পাস
                  </span>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                    ঠিকানা / প্রধান কার্যালয়
                  </h2>
                </div>
              </div>

              {/* Full Unbroken Address */}
              <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100">
                <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed break-words">
                  151/7, Goodluck Center (4th Floor), Panthapath Signal, Green Road, Dhaka-1205
                </p>
              </div>
            </div>

            {/* Phone & Hotline Block */}
            <div className="space-y-3 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FaPhoneVolume className="text-teal-700 text-lg" />
                <h3 className="text-base font-bold text-slate-900">
                  সরাসরি কথা বলুন (Hotline)
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {phoneNumbers.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.tel}`}
                    className="p-3.5 rounded-xl border border-teal-100 bg-teal-50/40 hover:bg-teal-100/60 transition flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[11px] font-bold text-teal-700 block">
                        {phone.label}
                      </span>
                      <span className="text-sm sm:text-base font-black text-slate-900 group-hover:text-teal-800">
                        {phone.number}
                      </span>
                    </div>
                    <HiOutlinePhone className="text-teal-600 text-lg group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 pt-1">
                <HiOutlineClock className="text-orange-600 text-base" />
                <span>অফিস সময়: সকাল ৯:৩০ থেকে রাত ৯:৩০ পর্যন্ত (প্রতিদিন খোলা)</span>
              </div>
            </div>

            {/* Instant Messaging (WhatsApp & IMO) */}
            <div className="space-y-3 pb-6 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                সরাসরি মেসেজ করুন
              </span>
              
              <div className="flex flex-wrap gap-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801948858258/?text=Hi%2C+Welcome+to+eShikhon%2C+which+course+you+need%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-sm transition"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>WhatsApp চ্যাট</span>
                </a>

                {/* IMO */}
                <a
                  href="tel:+8801948858258"
                  className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm shadow-sm transition"
                >
                  <HiOutlineChatBubbleLeftRight className="text-lg" />
                  <span>IMO: 01948858258</span>
                </a>
              </div>
            </div>

            {/* Facebook Community Join Buttons */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                আমাদের কমিউনিটিতে যুক্ত হন
              </span>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.facebook.com/groups/eshikhon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1877F2] hover:bg-[#0f65d4] text-white font-bold text-xs sm:text-sm shadow-sm transition text-center"
                >
                  <FaFacebookF className="text-sm" />
                  <span>ফেসবুক গ্রুপে যুক্ত হোন</span>
                </a>

                <a
                  href="https://www.facebook.com/eshikhon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white font-bold text-xs sm:text-sm transition text-center"
                >
                  <FaFacebookF className="text-sm" />
                  <span>অফিসিয়াল পেজ ভিজিট করুন</span>
                </a>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: VIDEO & YOUTUBE BOX ================= */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 1. Featured Video Embed */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                  ইশিখন পরিচিতি ভিডিও
                </span>
                <span className="text-[11px] font-bold text-slate-400">YouTube Video</span>
              </div>

              <div className="relative aspect-video w-full bg-slate-900">
                <iframe
                  src="https://www.youtube.com/embed/Bem3pOFLtCc?si=8NUJKX-v1eRpr_NJ"
                  title="eShikhon Overview Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>

            {/* 2. YouTube Channel Card Box */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              {/* YouTube Channel Cover */}
              <div className="h-32 sm:h-36 w-full overflow-hidden bg-slate-100 relative">
                <img
                  src="https://eshikhon.com.bd/wp-content/uploads/2025/06/Cover-v2.jpg"
                  alt="eShikhon YouTube Cover"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Profile & Info Box */}
              <div className="p-5 sm:p-6 relative pt-0">
                <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 -mt-10 mb-4">
                  {/* Avatar */}
                  <img
                    src="https://eshikhon.com.bd/wp-content/uploads/2025/06/DP-1-1.jpg"
                    alt="eShikhon Profile"
                    className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-md bg-white shrink-0"
                  />

                  {/* Subscribe Button */}
                  <a
                    href="https://www.youtube.com/@eShikhonTraining"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-red-600/20 transition cursor-pointer"
                  >
                    <FaYoutube className="text-base" />
                    <span>চ্যানেল সাবস্ক্রাইব করুন</span>
                  </a>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 text-center sm:text-left">
                    <a
                      href="https://www.youtube.com/@eShikhonTraining"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-600 transition"
                    >
                      eShikhon – Learn Skills, Earn Smart
                    </a>
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 text-center sm:text-left leading-relaxed">
                    ফ্রিল্যান্সিং টিউটোরিয়াল, লাইভ সেমিনার এবং সফল শিক্ষার্থীদের অনুপ্রেরণামূলক গল্প দেখতে আমাদের অফিসিয়াল ইউটিউব চ্যানেলে যুক্ত থাকুন।
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ================= 3. FULL-WIDTH CAMPUS GOOGLE MAP ================= */}
        <div className="mt-14 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <span className="text-orange-500">📍</span>
                eShikhon Campus (পান্থপথ সিগন্যাল)
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                সরাসরি এসে কথা বলুন ও আধুনিক কম্পিউটার ল্যাব পরিদর্শন করুন
              </p>
            </div>
            
            <a
              href="https://maps.google.com/?q=eShikhon+Campus-2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 px-3.5 py-1.5 rounded-xl transition w-fit"
            >
              Google Maps-এ ওপেন করুন ↗
            </a>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="w-full h-[400px] sm:h-[450px] bg-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9082114355583!2d90.38424437487215!3d23.75065238876763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b98bab68c95d%3A0x33b3818c4acf063b!2seShikhon%20Campus-2!5e0!3m2!1sen!2sbd!4v1699340742927!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="eShikhon Campus Location Map"
              className="w-full h-full"
            />
          </div>
        </div>

      </main>
    </div>
  );
}