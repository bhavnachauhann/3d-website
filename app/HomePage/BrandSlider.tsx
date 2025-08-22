import React from 'react';
import './brandSlider.css'; // import your CSS for animations

const BrandSlider = () => {
  return (
    <div className='bg-[#dcdcdc] md:py-20 py-10'>
      <div className="relative w-full h-28 md:h-40 mb-12">

        {/* Orange flowing band */}
        <div className="absolute top-1/2 left-0 w-full h-12 md:h-16 bg-[#ff4d00] transform -translate-y-1/2 -rotate-6 overflow-hidden">
          <div className="flex items-center h-full min-w-max animate-scroll-left">
            <span className="text-white font-semibold text-lg md:text-2xl mx-4 md:mx-8">Website Design</span>
            <span className="text-white text-sm md:text-lg mx-2">✦</span>
            <span className="text-white font-semibold text-lg md:text-2xl mx-4 md:mx-8">Brand Design</span>
            <span className="text-white text-sm md:text-lg mx-2">✦</span>
            <span className="text-white font-semibold text-lg md:text-2xl mx-4 md:mx-8">Logo Design</span>
            <span className="text-white text-sm md:text-lg mx-2">✦</span>
            <span className="text-white font-semibold text-lg md:text-2xl mx-4 md:mx-8">Website Design</span>
            <span className="text-white text-sm md:text-lg mx-2">✦</span>
            <span className="text-white font-semibold text-lg md:text-2xl mx-4 md:mx-8">Brand Design</span>
            <span className="text-white text-sm md:text-lg mx-2">✦</span>
            <span className="text-white font-semibold text-lg md:text-2xl mx-4 md:mx-8">Logo Design</span>
          </div>
        </div>

        {/* Black flowing band */}
        <div className="absolute top-1/2 left-0 w-full h-12 md:h-16 bg-black transform -translate-y-1/2 rotate-6 overflow-hidden">
          <div className="flex items-center h-full min-w-max animate-scroll-right">
            <span className="text-white font-semibold text-lg md:text-2xl mx-4 md:mx-8">10 Years of Experience</span>
            <span className="text-white text-sm md:text-lg mx-2">✦</span>
            <span className="text-white font-semibold text-lg md:text-2xl mx-4 md:mx-8">Over 100 Customers</span>
            <span className="text-white text-sm md:text-lg mx-2">✦</span>
            <span className="text-white font-semibold text-lg md:text-2xl mx-4 md:mx-8">Senior Designer</span>
            <span className="text-white text-sm md:text-lg mx-2">✦</span>
            <span className="text-white font-semibold text-lg md:text-2xl mx-4 md:mx-8">10 Years of Experience</span>
            <span className="text-white text-sm md:text-lg mx-2">✦</span>
            <span className="text-white font-semibold text-lg md:text-2xl mx-4 md:mx-8">Over 100 Customers</span>
            <span className="text-white text-sm md:text-lg mx-2">✦</span>
            <span className="text-white font-semibold text-lg md:text-2xl mx-4 md:mx-8">Senior Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
