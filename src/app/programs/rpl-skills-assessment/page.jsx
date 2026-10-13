import RPL from "@/components/Home/RPL";
import AssessmentCTA from "@/components/rpl/AssessmentCTA";
import RplEligibilitySection from "@/components/rpl/RplEligibilitySection";
import RplProcessSection from "@/components/rpl/RplProcessSection";
import WhatIsRpl from "@/components/rpl/whatIsRpl";
import WhyEshikhonRplSection from "@/components/rpl/WhyEshikhonRplSection";
import { rplFaq } from "@/Data/faq";
import CenterHeroBanner from "@/shared/CenterHeroBanner";
import FAQ from "@/shared/FAQ";
import React from "react";

export const metadata = {
  title: "RPL Skills Assessment in Bangladesh | NSDA RPL Certificate | eShikhon",
  description:
    "কাজের অভিজ্ঞতা ও অর্জিত দক্ষতার স্বীকৃতি পেতে eShikhon-এর RPL Skills Assessment সম্পর্কে জানুন। NSDA RPL Certificate-এর যোগ্যতা, Assessment প্রক্রিয়া ও আবেদনের নিয়ম দেখুন।",
  alternates: {
    canonical:
      "https://eshikhon.edu.bd/programs/rpl-skills-assessment",
  },
  keywords: [
    "RPL Skills Assessment",
    "RPL Certificate",
    "RPL certificate Bangladesh",
    "RPL certificate online free",
    "RPL certificate online",
    "RPL certificate NSDA",
    "RPL training Bangladesh",
    "RPL Level-3",
    "technical training center in Bangladesh",
    "Training Institute Bangladesh",
    "IT training Bangladesh",
    "RPL training and assessment",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "RPL Skills Assessment in Bangladesh | NSDA RPL Certificate | eShikhon",
    description:
      "কাজের অভিজ্ঞতা ও অর্জিত দক্ষতার স্বীকৃতি পেতে eShikhon-এর RPL Skills Assessment সম্পর্কে জানুন। NSDA RPL Certificate-এর যোগ্যতা, Assessment প্রক্রিয়া ও আবেদনের নিয়ম দেখুন।",
    url: "https://eshikhon.edu.bd/programs/rpl-skills-assessment",
    siteName: "eShikhon",
    locale: "bn_BD",
    type: "website",
  },
};



const page = () => {
  return (
    <div>
      <CenterHeroBanner
        imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
        title="RPL Skills Assessment"
        subtitle="আপনার কি কাজের অভিজ্ঞতা বা নিজের শেখা কোনো দক্ষতা আছে, কিন্তু সেই দক্ষতার স্বীকৃত সার্টিফিকেট নেই? RPL Skills Assessment-এর মাধ্যমে আপনার অর্জিত দক্ষতা মূল্যায়ন করে NSDA অনুমোদিত RPL Certificate পাওয়ার সুযোগ রয়েছে।"
        courseID={"#rpl-course"}
      />

      <WhatIsRpl/>
      <RplEligibilitySection/>
      <RplProcessSection/>
      <div id="rpl-course">
        <RPL/>
      </div>
      <WhyEshikhonRplSection/>  
      <FAQ name={"RPL"} faqs={rplFaq}/>
      <AssessmentCTA/>

    </div>
  );
};

export default page;
