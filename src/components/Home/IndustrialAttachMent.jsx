import { courses } from "@/Data/courseData";
import { IndustrialDAta } from "@/Data/industrial-course";
import CourseCard from "@/shared/CourseCard";
import Title from "@/shared/title";
import React from "react";

const IndustrialAttachMent = () => {
  return (
    <section className="relative py-16 md:py-24 bg-linear-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9] overflow-hidden">
      {/* Decorative subtle background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-orange-100/40 via-blue-50/20 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <Title
            title="Industrial Attachment Programme"
            desc="ডিপ্লোমা ও পলিটেকনিকের শিক্ষার্থীদের জন্য রয়েছে Industrial Attachment Training-এর আওতায় বিভিন্ন কোর্স। অভিজ্ঞ মেন্টরের গাইডলাইন, হাতে-কলমে Practical Training, আধুনিক ল্যাবে কাজ শেখা এবং Internship-এর মাধ্যমে বাস্তব অভিজ্ঞতা অর্জনের সুযোগ পাবেন ইশিখনের Polytechnic Industrial Attachment Training কোর্সে।
"
          />
        </div>

        {/* Responsive Course Grid (1 col on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses?.filter(item => item.program == "industrial-attachment-training").map((item, index) => (
            <CourseCard
              key={item.id || item._id || index}
              course={item}

            />
          ))}
        </div>

        {/* Optional: Trust / Help Banner for Polytechnic Students */}
        <div className="mt-14 p-6 font-HindSiliguri rounded-2xl bg-white border border-slate-200/80 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-800 text-base">
              আপনার ডিপ্লোমার সঙ্গে কোন Industrial Attachment Course মিলবে, বুঝতে পারছেন না?
            </h4>
            <p className="text-xs md:text-sm text-slate-500 mt-0.5">
              আপনার ডিপার্টমেন্ট ও ক্যারিয়ারের লক্ষ্য অনুযায়ী কোর্স বেছে নিতে eShikhon-এর Career Counsellor-এর সঙ্গে কথা বলুন।

            </p>
          </div>
          <a
            href="tel:+8801XXXXXXXXX"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs md:text-sm font-semibold transition-all duration-200"
          >
            ফ্রি  Counselling নিন →
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustrialAttachMent;