import { Geist, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/Nav";
import Footer from "@/shared/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const HindSiliguri = Hind_Siliguri({
  variable: "--font-hind-silliguri",
  subsets: ["bengali"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "ASSET Project, RPL & Industrial Attachment | eShikhon",
  description:
    "eShikhon-এ ASSET Project-এর আওতায় বিনামূল্যে প্রশিক্ষণ, NSDA RPL Assessment-এর মাধ্যমে দক্ষতার স্বীকৃতি এবং Polytechnic Industrial Attachment Training-এর সুযোগ সম্পর্কে জানুন।",
  alternates: {
    canonical: "https://eshikhon.edu.bd/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ASSET Project, RPL & Industrial Attachment | eShikhon",
    description:
      "বিনামূল্যে ASSET প্রশিক্ষণ, NSDA RPL Assessment এবং Polytechnic Industrial Attachment Training সম্পর্কে বিস্তারিত জানুন eShikhon-এ।",
    url: "https://eshikhon.edu.bd/",
    siteName: "eShikhon",
    locale: "bn_BD",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${HindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-HindSiliguri">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}