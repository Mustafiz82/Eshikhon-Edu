import IndustrialAttachMent from "@/components/Home/IndustrialAttachMent";
import ChecklistIndustrialInstitute from "@/components/industrial/ChecklistIndustrialInstitute";
import IndustrialAttachmentBenefits from "@/components/industrial/IndustrialAttachmentBenefits";
import WhatIsIndustrialAttachment from "@/components/industrial/WhatisIndustral";
import WhoIsThisProgramFor from "@/components/industrial/WhoIsThisProgramFor";
import WhyIndustrialAttachment from "@/components/industrial/WhyIndustrialAttachment";
import { attachmentFaq } from "@/Data/faq";
import CenterHeroBanner from "@/shared/CenterHeroBanner";
import FAQ from "@/shared/FAQ";
import React from "react";


export const metadata = {
  title:
    "Industrial Attachment Training in Bangladesh | ডিপ্লোমা শিক্ষার্থীদের প্রশিক্ষণ | eShikhon",
  description:
    "Industrial Attachment Training in Bangladesh-এর মাধ্যমে Diploma ও Polytechnic শিক্ষার্থীদের জন্য হাতে-কলমে প্রশিক্ষণ, Practical Skills এবং Project-Based Learning-এর সুযোগ। eShikhon-এর প্রশিক্ষণ, যোগ্যতা ও ভর্তির বিস্তারিত জানুন।",
  alternates: {
    canonical:
      "https://eshikhon.edu.bd/programs/industrial-attachment-training",
  },
  keywords: [
    "Industrial Attachment Training",
    "Industrial Attachment Programme",
    "Industrial Training Institute",
    "Industrial Training Certificate",
    "Industrial attachment training in Bangladesh",
    "Industrial attachment for Diploma students",
    "Industrial attachment for Polytechnic students",
    "Polytechnic Industrial Attachment Training",
    "Industrial Attachment for Polytechnic Students",
    "Diploma Industrial Training Bangladesh",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Industrial Attachment Training in Bangladesh | ডিপ্লোমা শিক্ষার্থীদের প্রশিক্ষণ | eShikhon",
    description:
      "Diploma ও Polytechnic শিক্ষার্থীদের জন্য Industrial Attachment Training in Bangladesh। হাতে-কলমে প্রশিক্ষণ, Practical Skills এবং Project-Based Learning সম্পর্কে জানুন eShikhon-এ।",
    url: "https://eshikhon.edu.bd/programs/industrial-attachment-training",
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
        title="Industrial Attachment Training in Bangladesh"
        subtitle="ডিপ্লোমা শেষ করার আগে বাস্তব কাজের অভিজ্ঞতা অর্জন করতে প্রয়োজন Practical Training। eShikhon-এর Industrial Attachment Training-এ হাতে-কলমে শিখুন, Practical Projects করুন এবং ক্যারিয়ারের জন্য প্রস্তুত হন।
"
          courseID={"/programs/industrial-attachment/#attachment-course"}
      />

      <WhatIsIndustrialAttachment />

      <WhyIndustrialAttachment/>
      <WhoIsThisProgramFor/>
      <IndustrialAttachmentBenefits/>

      <ChecklistIndustrialInstitute/>

      <div id="attachment-course">

      <IndustrialAttachMent/>
      </div>
      <FAQ faqs={attachmentFaq} name={"Industrial Attachment"} />
    </div>
  );
};

export default page;
