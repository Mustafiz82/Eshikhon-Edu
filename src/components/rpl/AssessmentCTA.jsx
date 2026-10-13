// components/AssessmentCTA.jsx
import { HiOutlineDocumentCheck, HiOutlineArrowRight } from "react-icons/hi2";

export default function AssessmentCTA() {
  return (
    <section className="py-14 font-HindSiliguri bg-white text-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Main Card */}
        <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200 p-7 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-sm">
          
          {/* Left Side: Information */}
          <div className="max-w-2xl">
            {/* Badge */}
         
            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
              আপনার দক্ষতার Assessment খুঁজুন
            </h2>

            {/* Description */}
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              আপনার অভিজ্ঞতা যে স্কিলের সঙ্গে মেলে, সেটি নির্বাচন করে সংশ্লিষ্ট পেজে Assessment-এর যোগ্যতা, প্রয়োজনীয় কাগজপত্র, তারিখ এবং আবেদনের নিয়ম দেখে নিন।
            </p>
          </div>

          {/* Right Side: Action Button */}
          <div className="w-full lg:w-auto shrink-0">
            <a
              href="/assessment-page" // Replace with your actual link
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#008BB8] hover:bg-[#005776] text-white font-bold text-base shadow-lg shadow-teal-900/10 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Assessment দেখুন</span>
              <HiOutlineArrowRight className="text-lg" />
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}