"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import footerBg from "@/app/assets/images/footer-bg.png"; // replace with your footer background

const Footer = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative text-white calc-sans overflow-hidden rounded-xl">
      {/* Background Image */}
      <div className=" ">
        <Image
          src={footerBg}
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Optional Overlay */}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col gap-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Navigation */}
          <div>
            <h3 className="text-lg uppercase tracking-wider text-[#a6a4a3] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 ">
              <li className="hover:text-orange-500 cursor-pointer font-extrabold text-2xl">About</li>
              <li className="hover:text-orange-500 cursor-pointer font-extrabold text-2xl">Works</li>
              <li className="hover:text-orange-500 cursor-pointer font-extrabold text-2xl">Services</li>
              <li className="hover:text-orange-500 cursor-pointer font-extrabold text-2xl">Blog</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg uppercase tracking-wider text-[#a6a4a3] mb-4">
              Social
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-orange-500 cursor-pointer  font-extrabold text-2xl">Twitter(X)</li>
              <li className="hover:text-orange-500 cursor-pointer font-extrabold text-2xl">LinkedIn</li>
              <li className="hover:text-orange-500 cursor-pointer font-extrabold text-2xl">Dribbble</li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="text-lg uppercase tracking-wider text-[#a6a4a3] mb-4">
              Legals
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-orange-500 cursor-pointer text-2xl font-extrabold">Privacy Policy</li>
              <li className="hover:text-orange-500 cursor-pointer text-2xl font-extrabold">Term of Service</li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-base text-[#a6a4a3] gap-4">
          <p>© {new Date().getFullYear()} Agero. All rights reserved.</p>
          <p>London → {time}</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-orange-500 hover:underline"
          >
            Back to top
          </button>
        </div>
      </div>

    <div className="relative w-full text-center">
  <h1
    className="text-[22vh] md:text-[50vh] font-extrabold 
               bg-gradient-to-b from-white to-[#4d4b4b] 
               text-transparent bg-clip-text leading-none"
  >
    TAW
  </h1>
</div>
    </footer>
  );
};

export default Footer;
