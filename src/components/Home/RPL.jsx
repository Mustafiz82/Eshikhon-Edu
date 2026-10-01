import { IndustrialDAta } from "@/Data/industrial-course";
import { rplData } from "@/Data/rpldata";
import CourseCard from "@/shared/CourseCard";
import Title from "@/shared/title";
import React from "react";

const RPL = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9] overflow-hidden">
      {/* Decorative subtle background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-orange-100/40 via-blue-50/20 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <Title
            title="RPL সার্টিফিকেশন কোর্স"
            desc="স্কিল আছে কিন্তু সার্টিফিকেট নেই? মূল্যায়নের মাধ্যমে পান Level 3 সার্টিফিকেট।"
          />
        </div>

        {/* Responsive Course Grid (1 col on mobile, 2 on tablet, 3 on desktop) */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {rplData.map((item, index) => (
            <div
              key={item.id || item._id || index}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
            >
              <CourseCard course={item} />
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default RPL;
