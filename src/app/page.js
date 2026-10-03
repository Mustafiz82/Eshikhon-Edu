import Asset from "@/components/Home/ASSET";
import Banner from "@/components/Home/Banner";
import BentoGallery from "@/components/Home/Gallary";
import IndustrialAttachMent from "@/components/Home/IndustrialAttachMent";
import Partners from "@/components/Home/Partners";
import RPL from "@/components/Home/RPL";
import SuccessStories from "@/components/Home/SuccessStory";
import Image from "next/image";

export default function Home() {
  return (
   <div>

    <Banner/>
    <IndustrialAttachMent/>
    <RPL/>  
    <Asset/>
    <Partners/>
    <SuccessStories/>
    <BentoGallery/>
   </div>
  );
}
