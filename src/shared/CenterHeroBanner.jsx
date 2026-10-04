// components/CenterHeroBanner.jsx
import Link from 'next/link';
import React from 'react';

export default function CenterHeroBanner({ 
  imageUrl, 
  title, 
  subtitle ,
  courseID,
}) {
  return (
    <section className="relative w-full font-HindSiliguri h-[400px] sm:h-[500px] lg:h-[500px] flex items-center justify-center overflow-hidden  shadow-xl ">
      
      {/* Background Image layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover object-center"
        />
        
        {/* Brand Color Overlay: Teal (using a dark shade for text contrast) with 70% opacity */}
        <div className="absolute inset-0 bg-[#083241] opacity-80"></div>
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-sm">
          {title}
        </h1>

   

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-100 leading-relaxed max-w-2xl drop-shadow-sm">
          {subtitle}
        </p>


        <Link href={courseID} className='w-fit px-8 mt-2  flex items-center justify-center py-3 text-sm font-bold text-white bg-[#F26724] hover:bg-[#df5613] rounded-xl shadow-md shadow-[#F26724]/20 active:scale-[0.98] transition-all'>কোর্স দেখুন </Link>

        {/* Optional CTA Button (Styled in Orange) */}
        {/* 
        <button className="mt-10 px-8 py-4 bg-[#F26522] hover:bg-orange-600 text-white font-semibold rounded-full transition duration-300 shadow-lg transform hover:scale-105">
          Apply Now
        </button> 
        */}
      </div>
    </section>
  );
}