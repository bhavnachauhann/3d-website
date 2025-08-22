'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import './WhatWeDo.css'; // Import custom styles
import { ul } from 'framer-motion/client';

const WhatWeDo = () => {
  const services = [
    { 
      name: 'Web Design', 
      description: 'We create modern, responsive websites that look great on any device.',
      image: 'https://media.psdreams.com/images/large/730/c6/dc/macbook-air-mockup.jpg',
      tags: ['UI/UX', 'Responsive Design', 'Development']
    },
    { 
      name: 'Brand Design', 
      description: 'We build bold, cohesive brand identities that leave a lasting impression.',
      image: 'https://media.psdreams.com/images/large/730/c6/dc/macbook-air-mockup.jpg',
      tags: ['Visual Identity', 'Style Guides', 'Brand Strategy']
    },
    { 
      name: 'Logo Design', 
      description: 'Unique, memorable logos that capture the essence of your brand.',
      image: 'https://media.psdreams.com/images/large/730/c6/dc/macbook-air-mockup.jpg',
      tags: ['Symbol Design', 'Wordmarks', 'Logo Systems']
    }
  ];

  const [activeService, setActiveService] = useState(services[1]); // default = Brand Design

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#dcdcdc]">
      {/* Animated Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="animate-slide-left whitespace-nowrap">
          <span className="text-[8vw] font-black text-[#ff4d00] select-none">
            {activeService.name} {activeService.name} {activeService.name}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Label */}
        <div className="text-sm text-[#838383] mb-8 animate-fade-in">
          (Services)
        </div>

        {/* Main Heading */}
        <h2 className="text-6xl md:text-8xl font-black text-foreground mb-16 animate-fade-in">
          What we do
        </h2>

        {/* Timeline Navigation */}
        <hr className="border-gray-400 mb-4" />
        <ul className="flex flex-wrap gap-8 justify-between mb-16 animate-fade-in">
          {services.map((service) => (
            <li
              key={service.name}
              onClick={() => setActiveService(service)}
              className={`text-lg md:text-xl font-medium transition-colors duration-300 relative list-disc ${
                activeService.name === service.name 
                  ? 'text-[#ff4d00]'
                  : 'text-[#838383] hover:text-black'
              }`}
            >
              {service.name}
              {activeService.name === service.name && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff4d00]"></div>
              )}
            </li>
          ))}
        </ul>

      {/* Main Content (Single Column Centered) */}
<div className="flex flex-col items-center gap-12 text-center">
  {/* Image */}
  <div className="animate-fade-in">
    <img
      src={activeService.image}
      alt={activeService.name}
      className="w-[250px] md:w-[500px] rounded-3xl shadow-2xl object-cover"
    />
  </div>

  {/* Text */}
  <div className="space-y-8 animate-fade-in max-w-2xl">
    <p className="text-sm md:text-base  font-light text-gray-500]"> 
      {activeService.description}
    </p>

    {/* Service Tags */}
    <div className="flex flex-wrap gap-3 justify-center">
      {activeService.tags.map((tag) => (
        <Button
          key={tag}
          variant="secondary"
          size="sm"
          className="rounded-full px-6 py-2 text-sm font-medium bg-[#5c5c5c] text-white hover:bg-[#ff4d00] hover:text-white transition-all duration-300"
        >
          {tag}
        </Button>
      ))}
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default WhatWeDo;
