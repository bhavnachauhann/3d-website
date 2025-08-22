import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="md:py-24 py-12 bg-[#f0f0f0] flex items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-6xl mx-auto pt-6 md:pt-10">
        {/* Main Heading with Circular Images */}
        <div className="space-y-6 mb-8">
          {/* Line 1 */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-4xl sm:text-4xl md:text-[65px] font-extrabold max-w-xs sm:max-w-none mx-auto">
            <span>Effortless</span>
            <div className="relative inline-flex items-center">
              <div className="animate-bubble w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-14 lg:w-24 lg:h-14 rounded-4xl bg-orange overflow-hidden flex items-center justify-center">
                <img
                  src="https://picsum.photos/200/200?random=1"
                  alt="Design workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-[#ff4d00]">Design</span>
          </div>

          {/* Line 2 */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-4xl sm:text-4xl md:text-[65px] font-extrabold max-w-xs sm:max-w-none mx-auto">
            <span className="text-[#5c5c5c]">for</span>
            <div className="relative inline-flex items-center">
              <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-14 lg:w-24 lg:h-16 rounded-4xl overflow-hidden animate-bubble">
                <img
                  src="https://picsum.photos/200/200?random=2"
                  alt="Creative designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span>Design</span>
            <span>Startups</span>
          </div>

          {/* Line 3 */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-4xl sm:text-4xl md:text-[65px] font-extrabold max-w-xs sm:max-w-none mx-auto">
            <span className="text-[#5c5c5c]">based</span>
            <span className="text-[#5c5c5c]">in</span>
            <span className="text-[#5c5c5c]">London,</span>
            <div className="relative inline-flex items-center">
              <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-14 lg:w-24 lg:h-14 rounded-4xl overflow-hidden animate-bubble">
                <img
                  src="https://picsum.photos/200/200?random=3"
                  alt="London Big Ben"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span>UK</span>
          </div>
        </div>

        {/* Description Text */}
        <div className="mb-10 sm:mb-12 px-2">
          <p className="text-gray-600 text-sm sm:text-md md:text-lg max-w-2xl mx-auto leading-relaxed">
            We make it easy for startups to launch, grow, and scale with clean,
            conversion-focused designs — no delays, no drama.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-center">
          <button className="bg-[#343434] text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-full shadow-2xl transition-all duration-300 hover:shadow-4xl flex items-center justify-center">
            View Plans
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
