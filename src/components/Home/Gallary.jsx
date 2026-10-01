import React from 'react';
import Image from 'next/image';

const galleryItems = [
  {
    id: 1,
    title: 'Automation & Robotics Lab',
    titleBn: 'মেকাট্রনিক্স ও পিএলসি ল্যাব',
    category: 'Advanced Facility',
    badge: 'NSDA অনুমোদিত',
    description: 'সর্বাধুনিক পিএলসি ও ইন্ডাস্ট্রিয়াল রোবোটিক্সের বাস্তব প্রশিক্ষণ।',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    // Top Left: 2 Cols x 2 Rows
    className: 'md:col-span-2 md:row-span-2',
    isPrimary: true,
  },
  {
    id: 2,
    title: 'Circuit & Embedded Systems',
    titleBn: 'ইলেকট্রনিক্স ও হার্ডওয়্যার টেস্টিং',
    category: 'Hardware Lab',
    badge: 'হ্যান্ডস-অন প্র্যাকটিস',
    description: 'পিসিবি ডিজাইন এবং রিয়েল-টাইম সার্কিট অ্যানালাইসিস সুবিধা।',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80',
    // Top Mid-Right (Col 3, Row 1)
    className: 'md:col-span-1 md:row-span-1',
    isPrimary: false,
  },
  {
    id: 3,
    title: 'Industrial Field Attachment',
    titleBn: 'বাস্তব ফ্যাক্টরি ভিজিট ও প্রশিক্ষণ',
    category: 'Field Experience',
    badge: 'জব প্লেসমেন্ট',
    description: 'শীর্ষস্থানীয় শিল্প কারখানায় সরাসরি কাজ শেখার বাস্তব অভিজ্ঞতা।',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    // Far Right: 1 Col x 2 Rows (Col 4, Row 1-2)
    className: 'md:col-span-1 md:row-span-2',
    isPrimary: false,
  },
  {
    id: 4,
    title: 'CAD & 3D Modeling Studio',
    titleBn: 'অটোকেড ও ড্রাফটিং ল্যাব',
    category: 'Design Studio',
    badge: 'সফটওয়্যার ল্যাব',
    description: 'ইন্ডাস্ট্রিয়াল লেভেল ৩ডি মেকানিক্যাল ড্রয়িং ও মডেলিং প্র্যাকটিস।',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    // Center Tall: Spans 2 Rows downward from Row 2 to Row 3
    className: 'md:col-span-1 md:row-span-2 md:col-start-3 md:row-start-2',
    isPrimary: true,
  },
  {
    id: 5,
    title: 'RPL Assessment & Certification',
    titleBn: 'জাতীয় দক্ষতা মূল্যায়ন কেন্দ্র',
    category: 'Certification',
    badge: 'সরকারি সনদ',
    description: 'অভিজ্ঞ টেকনিশিয়ানদের দক্ষতা যাচাই ও জাতীয় সনদের এসেসমেন্ট টেস্ট।',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    // Bottom Left (Col 1-2, Row 3)
    className: 'md:col-span-2 md:row-span-1',
    isPrimary: false,
  },
  {
    id: 6,
    title: 'CNC & Precision Machining',
    titleBn: 'সিএনসি ও হেভি মেশিনারি',
    category: 'Manufacturing',
    badge: 'মেশিনারি ল্যাব',
    description: 'লেদ মেশিন ও সিএনসি প্রোগ্রামিং এর সরাসরি ব্যবহারিক ট্রেনিং।',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80',
    // Bottom Right (Col 4, Row 3)
    className: 'md:col-span-1 md:row-span-1',
    isPrimary: true,
  },
];

export default function BentoGallery() {
  return (
    <section className="bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
         
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Explore Campus Life & <span className="text-[#EA580C]">Labs</span>
          </h2>

          <p className="mt-1 text-sm font-HindSiliguri font-medium text-[#0D9488]">
            আধুনিক ল্যাব ফ্যাসিলিটি ও হ্যান্ডস-অন ইন্ডাস্ট্রিয়াল ট্রেনিং অভিজ্ঞতা
          </p>
        </div>

        {/* 4-Column Balanced Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 auto-rows-[170px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xs transition-all duration-300 hover:shadow-md ${item.className}`}
            >
              {/* Next.js Image with Unsplash placeholder */}
              <img
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                priority={item.id === 1}
              />

              {/* Base Gradient Shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-30" />

              {/* Default Bengali Title on Resting state */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2 pointer-events-none">
                <p className="text-white text-xs font-semibold drop-shadow-sm truncate pr-2">
                  {item.titleBn}
                </p>
                <span className="w-5 h-5 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-[10px] shrink-0">
                  ↗
                </span>
              </div>

              {/* Floating Top Badge on Hover */}
              <div className="absolute top-2.5 left-2.5 z-10 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white shadow-xs backdrop-blur-md ${
                    item.isPrimary ? 'bg-[#EA580C]' : 'bg-[#0D9488]'
                  }`}
                >
                  <span className="w-1 h-1 rounded-full bg-white animate-ping" />
                  {item.badge}
                </span>
              </div>

              {/* Hover Bottom Slide-up Drawer */}
              <div className="absolute inset-x-0 bottom-0 p-3.5 z-10 bg-gradient-to-t from-slate-950 via-slate-900/95 to-slate-900/40 backdrop-blur-[2px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex flex-col justify-end">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C]">
                  {item.category}
                </span>
                
                <h3 className="text-xs sm:text-sm font-bold text-white leading-snug truncate">
                  {item.title}
                </h3>
                
                <p className="text-[11px] font-medium text-teal-300 truncate">
                  {item.titleBn}
                </p>

                <p className="text-[10px] text-slate-300 mt-1 leading-relaxed line-clamp-2 border-t border-slate-700/60 pt-1">
                  {item.description}
                </p>
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#EA580C]/80 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}