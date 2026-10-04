import IndustrialAttachMent from "@/components/Home/IndustrialAttachMent";
import IndustrialAttachmentBenefits from "@/components/industrial/IndustrialAttachmentBenefits";
import WhatIsIndustrialAttachment from "@/components/industrial/WhatisIndustral";
import WhoIsThisProgramFor from "@/components/industrial/WhoIsThisProgramFor";
import { attachmentFaq } from "@/Data/faq";
import CenterHeroBanner from "@/shared/CenterHeroBanner";
import FAQ from "@/shared/FAQ";
import React from "react";

const page = () => {
  return (
    <div>
      <CenterHeroBanner
        imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
        title="Industrial Attachment"
        subtitle="ডিপ্লোমা শিক্ষার্থীদের জন্য হাতেকলমে প্রজেক্ট ও মেন্টর সাপোর্টসহ প্রশিক্ষণ।"
      />

      <WhatIsIndustrialAttachment />
      <WhoIsThisProgramFor/>
      <IndustrialAttachmentBenefits/>
      <IndustrialAttachMent/>
      <FAQ faqs={attachmentFaq} name={"Industrial Attachment"} />
    </div>
  );
};

export default page;
