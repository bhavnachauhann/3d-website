import React from 'react'
import { X, Globe, Instagram } from 'lucide-react'

const Founder = () => {
  return (
    <section className="bg-founder-bg relative py-16 md:py-20 bg-[#dcdcdc]">
      {/* Heading */}
      <div className="text-center px-4">
        <p className="text-gray-500 text-base md:text-lg mb-2">(Intro)</p>
        <h1 className="text-5xl sm:text-6xl md:text-[12vw] font-extrabold tracking-wider 
          bg-gradient-to-b from-[#b7b7b7] to-[#d7d7d7] bg-clip-text text-transparent leading-tight">
          Meet Finton
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Left - Image */}
        <div className="flex justify-center lg:justify-start">
  <div className="relative w-[85%] sm:w-[350px] md:w-[400px] h-auto aspect-[3/4] rounded-3xl bg-gradient-to-br from-orange-500 to-red-600">
    
    {/* Profile Image */}
    <img
      src="https://picsum.photos/600/800?random=1"
      alt="Franklin Clinton - Founder"
      className="w-full h-full object-cover rounded-2xl"
    />

    {/* Rotating Badge */}
    <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 sm:translate-x-1/3 sm:translate-y-1/3 animate-spin-slow">
      <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-900/70 flex items-center justify-center p-2 text-center">
        <span className="text-[7px] sm:text-[9px] md:text-[10px] text-white font-bold leading-tight tracking-widest uppercase text-center">
          Since 2020 • Award Winning Designer
        </span>
      </div>
    </div>

    {/* Social Icons */}
    <div className="absolute bottom-4 left-4 flex space-x-2 sm:space-x-3">
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/40 flex items-center justify-center cursor-pointer hover:bg-black/90 transition-colors">
        <X className="w-4 h-4 text-white" />
      </div>
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/40 flex items-center justify-center cursor-pointer hover:bg-black/90 transition-colors">
        <Globe className="w-4 h-4 text-white" />
      </div>
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/40 flex items-center justify-center cursor-pointer hover:bg-black/90 transition-colors">
        <Instagram className="w-4 h-4 text-white" />
      </div>
    </div>
  </div>
</div>


          {/* Right - Text */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-founder-text-dark mb-4 md:mb-6">
                The Founder
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                Franklin Clinton is a visual designer focused on crafting bold, functional design systems. 
                He works with creative teams and startups to build standout brands and seamless digital 
                experiences. Based in London, he balances clarity with character — and enjoys experimenting 
                with motion design and interactive visuals in his spare time.
              </p>
            </div>

            <hr className="border-t border-gray-400" />

            {/* Timeline */}
            <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-6">
              {[
                { role: "Founder at Agero", years: "2024-Now" },
                { role: "Brand Designer at Google", years: "2023-2024" },
                { role: "Web Designer at Shopify", years: "2018-2023" },
                { role: "Junior Designer at Meta", years: "2015-2018" },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-2 sm:pb-3"
                >
                  <h3 className="font-medium text-sm sm:text-base">{item.role}</h3>
                  <span className="text-founder-text-dark/60 font-medium text-xs sm:text-base">
                    {item.years}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder
