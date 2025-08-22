"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import footerBg from "@/app/assets/images/footer-bg.png"; // ✅ background image
import styles from "./pricing.module.css";

const projects = [
  {
    title: "Basic Plan",
    description:
      "Perfect for individuals who need simple features to get started.",
    url: "#",
    price: "$500",
    delivery: "2–3 weeks",
    features: ["Basic feature set", "Email support", "Single project"],
    highlight: false,
  },
  {
    title: "Pro Plan",
    description:
      "Great for professionals looking to expand their workflow with advanced features.",
    url: "#",
    price: "$1000+",
    delivery: "4–6 weeks",
    features: [
      "All Basic features",
      "Priority support",
      "Multiple projects",
      "Advanced tools",
    ],
    highlight: true, // ✅ will have dark overlay
  },
];

export default function Pricing() {
  const container = useRef<HTMLDivElement>(null);

  // ✅ smooth scroll with Lenis
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className={`${styles.main} bg-[#dcdcdc] py-12`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="text-center text-sm text-neutral-500 mb-2">
          (Pricing Plan)
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:mb-24 mb-12">
          Explore Pricing
        </h2>
      </div>

      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}

// ✅ Card component
function Card({
  i,
  title,
  description,
  url,
  price,
  delivery,
  features,
  highlight,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  description: string;
  url: string;
  price: string;
  delivery: string;
  features: string[];
  highlight: boolean;
  progress: any;
  range: [number, number];
  targetScale: number;
}) {
  const container = useRef<HTMLDivElement>(null);

  useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          backgroundImage: highlight ? `url(${footerBg.src})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`${styles.card} relative rounded-3xl shadow-xl p-10 flex flex-col justify-between overflow-hidden ${
          highlight ? "text-white" : "bg-white text-black"
        }`}
      >
        {/* Dark overlay for readability */}
        {highlight && (
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 z-0" />
        )}

        {/* Content above overlay */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* Header */}
          <div>
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p
              className={`text-base mb-6 ${
                highlight ? "text-neutral-300" : "text-neutral-600"
              }`}
            >
              {description}
            </p>

            <div className="text-4xl font-extrabold flex items-baseline gap-2 mb-6">
              <span className="text-orange-400">{price}</span>
              <span className="text-lg font-medium text-neutral-400">
                /month
              </span>
            </div>
            <hr
              className={`mb-6 ${
                highlight ? "border-neutral-700" : "border-neutral-300"
              }`}
            />

            {/* Features */}
            <ul className="space-y-3">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                      highlight ? "bg-neutral-700 text-white" : "bg-gray-200"
                    }`}
                  >
                    ✓
                  </span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="mt-10">
            <div
              className={`flex justify-between text-sm mb-4 ${
                highlight ? "text-neutral-300" : "text-neutral-500"
              }`}
            >
              <span>Delivery Time</span>
              <span>{delivery}</span>
            </div>
            <a
              href={url}
              className="block w-full text-center py-4 rounded-2xl font-medium transition bg-orange-500 text-white hover:bg-orange-600"
            >
              Choose Plan →
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
