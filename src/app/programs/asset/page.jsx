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

const Page = () => {
  return (
    <div className="bg-white">
      <CenterHeroBanner
        imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
        title="ASSET ফ্রি প্রশিক্ষণ"
        subtitle="৩ মাসের হাতে-কলমে ডিজিটাল স্কিল প্রশিক্ষণ, মাসিক স্টাইপেন্ড ও NSDA সার্টিফিকেটসহ।"
        courseID={"#asset-course"}
      />
      <WhatIsAsset/>
      <div id="asset-course">
         <Asset/>
      </div>
      <WhoCanApply/>
      <WhatYouWillGet/>
      <RequiredDocuments/>
      <PreviousBatchResults/>
      <FAQ
         name={"ASSET কোর্স ও প্রশিক্ষণ"}
         faqs={AssetFaQ}
      />
      <ASSETCTA/>
    </div>
  );
};

export default Page;
