'use client';

import React, { useRef } from "react";
import { FaRegStar, FaGlobe, FaPenNib } from "react-icons/fa";
import { MdOutlineWeb, MdOutlineDesignServices } from "react-icons/md";
import { PiStrategyLight } from "react-icons/pi";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

// ✅ Extracted reusable tags for clean code
const TAGS = [
  { icon: <FaRegStar />, label: "Branding" },
  { icon: <FaGlobe />, label: "Logo" },
  { icon: <MdOutlineWeb />, label: "Website" },
  { icon: <FaPenNib />, label: "Illustration" },
  { icon: <MdOutlineDesignServices />, label: "Interface" },
  { icon: <PiStrategyLight />, label: "Strategy" },
];

// ✅ Highlighted Scroll Text Component
const HighlightedScrollText = React.memo(({ text }: { text: string }) => {
  const ref = useRef<HTMLHeadingElement>(null);

  // Track scroll progress only for this element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end center", "start start"],
  });

  // Animate clipPath inset
  const scrollValue = useTransform(scrollYProgress, [0, 0.3], ["100%", "0%"]);
  const clipPath = useMotionTemplate`inset(0% ${scrollValue} 0% 0%)`;

  return (
    <h1
      ref={ref}
      className="relative text-3xl md:text-5xl font-bold leading-snug max-w-4xl text-center"
    >
      {/* Highlight Overlay */}
      <motion.span
        style={{ clipPath }}
        className="absolute left-0 top-0 text-black will-change-clip-path"
      >
        {text}
      </motion.span>

      {/* Base Text */}
      <span className="text-[#a1a1a1] opacity-60">{text}</span>
    </h1>
  );
});

HighlightedScrollText.displayName = "HighlightedScrollText";

const Hello = () => {
  return (
    <section className="bg-[#dcdcdc] flex flex-col items-center justify-center text-center py-10 px-6">
      {/* Intro */}
      <p className="text-orange-600 italic mb-4">(hello)</p>

      {/* Animated Heading */}
      <HighlightedScrollText text="We help fast moving digital startups launch sharper brands and websites — with clarity, speed, and no drama." />

     {/* Tags */}
<div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
  {TAGS.map(({ icon, label }) => (
    <div
      key={label}
      className="flex items-center gap-2 bg-[#333] text-white px-5 py-2 rounded-full shadow-md"
    >
      {icon}
      <span>{label}</span>
    </div>
  ))}
</div>

    </section>
  );
};

export default Hello;
