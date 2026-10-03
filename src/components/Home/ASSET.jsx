import { assetCoursesData } from "@/Data/asset-data";
import { IndustrialDAta } from "@/Data/industrial-course";
import CourseCard from "@/shared/CourseCard";
import Title from "@/shared/title";
import React from "react";

const Asset = () => {
  return (
    <section className="relative py-16 md:py-24 bg-linear-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9] overflow-hidden">
      {/* Decorative subtle background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-orange-100/40 via-blue-50/20 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <Title
            title="ASSET প্রশিক্ষণ কোর্স"
            desc="নতুন ডিজিটাল স্কিল শিখুন NSDA-সংযুক্ত Level 3 ও Level 4 কোর্সে।"
          />
        </div>

        {/* Responsive Course Grid (1 col on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {assetCoursesData.map((item, index) => (
            <CourseCard
              key={item.id || item._id || index}
              course={item}

            />
          ))}
        </div>

          
      </div>
    </section>
  );
};

export default Asset;