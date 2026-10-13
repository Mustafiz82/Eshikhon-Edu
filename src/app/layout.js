import { Geist, Geist_Mono, Roboto, Poppins ,  Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/Nav";
import Footer from "@/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure Roboto font (Requires specifying weights)
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Configure Poppins font (Requires specifying weights)
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


const HindSiliguri = Hind_Siliguri({
  variable: "--font-hind-silliguri",
  subsets: ["bengali"],
  weight: ["400", "600", "700"],
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
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${poppins.variable} ${HindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
