import RPL from "@/components/Home/RPL";
import WhatIsRpl from "@/components/rpl/whatIsRpl";
import { rplFaq } from "@/Data/faq";
import CenterHeroBanner from "@/shared/CenterHeroBanner";
import FAQ from "@/shared/FAQ";
import React from "react";

const page = () => {
  return (
    <div>
      <CenterHeroBanner
        imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
        title="RPL সার্টিফিকেশন"
        subtitle="স্কিল আছে কিন্তু সার্টিফিকেট নেই? মূল্যায়নের মাধ্যমে পান সার্টিফিকেট।"
      />

      <WhatIsRpl/>
      <RPL/>
      <FAQ name={"RPL"} faqs={rplFaq}/>
      
    </div>
  );
};

export default page;
