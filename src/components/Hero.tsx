import React from 'react';
import img from '@/assets/bazar-hero.png';
import Image from 'next/image';

const Hero = () => {
  const date = new Date().toLocaleDateString('bn-BD', {
    dateStyle: 'full',
  });

  return (
    <section className="mt-3 rounded-2xl border border-gray-200 bg-[#fbfdfb] px-4 py-5 sm:px-8 sm:py-6">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
    
        <div className="w-full md:flex-1">
          
          <p className="mb-2 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
            {date}
          </p>

  
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-800 sm:text-3xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-<br></br>সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

     
          <a
            href="#সব-পণ্য"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-green-800 shadow-lg shadow-black/30"
          >
            সব পণ্য দেখুন
          </a>
        </div>

        <div className="flex w-full justify-center md:w-[35%]">
          <Image
            src={img}
            alt="/"
            priority
             />
        </div>
      </div>
    </section>
  );
};

export default Hero;