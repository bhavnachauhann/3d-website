"use client";
import React from "react";

const awards = [
  {
    title: "Awwwards",
    award: "SOTY 2023-1st Winner",
    company: "Archin",
  },
  {
    title: "CSS Awards",
    award: "Top 5 Best of eCommerce Websites 2023",
    company: "VNTNR",
  },
  {
    title: "CSS Awards",
    award: "Winner - US Behance Portfolio Review 2024",
    company: "Aeorim",
  },
  {
    title: "Dribbble",
    award: "Top 10 Best of Mobile App Design 2024",
    company: "Swat Co.",
  },
  {
    title: "FWA Awards",
    award: "Winner - Best of Architecture Website 2025",
    company: "Unerio",
  },
];

const Awards = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#dcdcdc]">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="text-center text-sm text-neutral-500 mb-2">
          (Awards)
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
          Awards Winning
        </h2>

        {/* Awards Table */}
        <div className="divide-y divide-neutral-300">
          {awards.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 py-6 text-sm md:text-base"
            >
              {/* Left (Award Title) */}
              <div className="text-neutral-600">{item.title}</div>

              {/* Middle (Award Description) */}
              <div className="text-center font-medium text-neutral-900">
                {item.award}
              </div>

              {/* Right (Company) */}
              <div className="text-right text-neutral-600">{item.company}</div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Awards;
