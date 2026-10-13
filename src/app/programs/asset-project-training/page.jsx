import ASSETCTA from "@/components/ASSET/ASSETCTA";
import ASSETFAQ from "@/components/ASSET/ASSETFAQ";
import PreviousBatchResults from "@/components/ASSET/PreviousBatchResults";
import RequiredDocuments from "@/components/ASSET/RequiredDocuments";
import WhatIsAsset from "@/components/ASSET/WhatIsAsset";
import WhatYouWillGet from "@/components/ASSET/WhatYouWillGet";
import WhoCanApply from "@/components/ASSET/WhoCanApply";
import Asset from "@/components/Home/ASSET";
import { AssetFaQ } from "@/Data/faq";
import CenterHeroBanner from "@/shared/CenterHeroBanner";
import FAQ from "@/shared/FAQ";
import React from "react";

export const metadata = {
  title: "ASSET Project Training in Bangladesh | eShikhon",
  description:
    "eShikhon-এর ASSET Project-এর আওতায় বিনামূল্যে ৩ মাসের Skills Training-এর সুযোগ নিন। প্রশিক্ষণ, যোগ্যতা, কোর্স ও সার্টিফিকেট সম্পর্কে বিস্তারিত জানুন।",
  alternates: {
    canonical: "https://eshikhon.edu.bd/programs/asset-project-training",
  },
  keywords: [
    "ASSET project",
    "ASSET Project Training in Bangladesh",
    "ASSET Free Course",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ASSET Project Training in Bangladesh | eShikhon",
    description:
      "eShikhon-এর ASSET Project-এর আওতায় বিনামূল্যে ৩ মাসের Skills Training-এর সুযোগ নিন। প্রশিক্ষণ, যোগ্যতা, কোর্স ও সার্টিফিকেট সম্পর্কে বিস্তারিত জানুন।",
    url: "https://eshikhon.edu.bd/programs/asset-project-training",
    siteName: "eShikhon",
    locale: "bn_BD",
    type: "website",
  },
};

const Page = () => {
  return (
    <div className="bg-white">
      <CenterHeroBanner
        imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
        title="ASSET Project: বিনামূল্যে দক্ষতা উন্নয়ন প্রশিক্ষণ"
        subtitle="ASSET Project-এর আওতায় ইশিখনে বিনামূল্যে Skill Development Training-এর সুযোগ নিন। ৩ মাসের প্রশিক্ষণ শেষে Assessment-এ অংশ নিয়ে NSDA অনুমোদিত সার্টিফিকেট ও বৃত্তি পাওয়ার সুযোগ রয়েছে। নতুন দক্ষতা অর্জন করে এগিয়ে যান ক্যারিয়ারের পথে।"
        courseID={"#asset-course"}
      />
      <WhatIsAsset />
      <div id="asset-course">
        <Asset />
      </div>
      <WhoCanApply />
      <WhatYouWillGet />
      <RequiredDocuments />
      <PreviousBatchResults />
      <FAQ name={"ASSET কোর্স ও প্রশিক্ষণ"} faqs={AssetFaQ} />
      <ASSETCTA />
    </div>
  );
};

export default Page;
