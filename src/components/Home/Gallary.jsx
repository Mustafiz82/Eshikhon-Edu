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
    image: '/একনজরে EShikhon/1.webp',
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
    image: '/একনজরে EShikhon/2.webp',
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
    image: '/একনজরে EShikhon/3.webp',
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
    image: '/একনজরে EShikhon/4.webp',
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
    image: '/একনজরে EShikhon/5.webp',
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
    image: '/একনজরে EShikhon/6.webp',
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
           একনজরে <span className="text-[#EA580C]">EShikhon</span>
          </h2>

          <p className="mt-1 text-sm font-HindSiliguri font-medium text-[#0D9488]">
           শেখার পাশাপাশি হাতে-কলমে অনুশীলন আর নতুন দক্ষতা গড়ে তোলার সুযোগ রয়েছে।
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
             

              {/* Hover Border Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#EA580C]/80 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}