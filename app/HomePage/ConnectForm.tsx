'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import contactBg from '@/app/assets/images/form.png';

const ConnectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const [emailTags] = useState([
    'franklin@agero.com',
    'franklin@agero.com',
    'franklin@agero.com'
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-[#dcdcdc] pt-8 pb-2">
      {/* Main Heading */}
      <div className="text-center px-4">
        <h1 className="text-[7vh] sm:text-6xl md:text-[22vh] font-[900] tracking-wider bg-gradient-to-b from-[#b7b7b7] to-[#d7d7d7] bg-clip-text text-transparent ">
          Let's Connect
        </h1>
      </div>

      <div className="relative min-h-screen w-full overflow-hidden text-white rounded-xl ">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${contactBg.src})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-contact-overlay backdrop-blur-xs" />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-4 sm:space-y-6 px-2 sm:px-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-contact-text leading-tight">
                Got a project in mind?
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-contact-text-muted">
                Let's make something happen together
              </p>
            </div>

            {/* Right Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0  p-4 sm:p-6 rounded-2xl ">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-contact-text">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-contact-input-bg border-contact-input-border text-contact-text placeholder:text-contact-text-muted focus:ring-contact-text-muted h-12 rounded-lg px-3"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-contact-text">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter the Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-contact-input-bg border-contact-input-border text-contact-text placeholder:text-contact-text-muted focus:ring-contact-text-muted h-12 rounded-lg px-3"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-medium text-contact-text">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Type Here..."
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full bg-contact-input-bg border-contact-input-border text-contact-text placeholder:text-contact-text-muted focus:ring-contact-text-muted min-h-[120px] rounded-lg px-3 py-2 resize-none"
                  />
                </div>

                {/* Button */}
                <Button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-800 text-black font-semibold h-12 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Send Now!
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Email Marquee */}
        <div className="absolute bottom-6 left-0 w-full overflow-hidden">
          <div className="flex items-center h-full whitespace-nowrap animate-scroll-left">
            {emailTags.map((email, i) => (
              <React.Fragment key={i}>
                <span className="text-white font-semibold text-lg sm:text-xl md:text-2xl mx-4 sm:mx-6 hover:text-[#ff4d00] transition-colors duration-300 cursor-pointer">
                  {email}
                </span>
                <span className="text-white text-sm sm:text-base md:text-lg mx-1 sm:mx-2">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectForm;
