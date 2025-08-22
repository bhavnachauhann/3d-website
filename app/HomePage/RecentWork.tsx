"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

// ---------------- MAIN COMPONENT ----------------
export default function RecentWork() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // ✅ Smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative h-[300vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
      <Section3 scrollYProgress={scrollYProgress} />
    </main>
  );
}

// ---------------- SECTION 1 ----------------
function Section1({ scrollYProgress }: { scrollYProgress: any }) {
  const scale = useTransform(scrollYProgress, [0, 0.33, 0.66], [1, 0.9, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 0.33, 0.66], [0, -3, -6]);
  const blur = useTransform(scrollYProgress, [0.33, 0.66], ["0px", "15px"]);

  return (
    <motion.div
      style={{ scale, rotate, filter: blur }}
      className="sticky top-0 h-screen text-white flex items-center justify-center"
    >
      <div className="relative w-full h-[85%] rounded-3xl overflow-hidden bg-[url('https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

        {/* Content */}
        <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl text-left">
            {/* Left */}
            <div className="flex flex-col justify-between space-y-6 md:space-y-0">
              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xs">
                We’ve helped businesses across industries achieve their goals.
                Here are some of our selected works.
              </p>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">01 / 03</p>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-1 md:mt-2">
                  Archin
                </h2>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex items-center justify-center order-first md:order-none">
              <div className="w-full max-w-[500px] aspect-video bg-black rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://picsum.photos/800/500?random=10"
                  alt="Project Mockup"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-xs sm:text-sm">
              <div>
                <p className="text-gray-400">Year</p>
                <p className="font-bold text-base sm:text-lg">2025</p>
              </div>
              <div>
                <p className="text-gray-400">Role</p>
                <p className="font-medium">Lead Designer</p>
              </div>
              <div>
                <p className="text-gray-400">Services</p>
                <ul className="space-y-1">
                  <li>Website Design</li>
                  <li>Product Design</li>
                  <li>Branding</li>
                  <li>Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ---------------- SECTION 2 ----------------
function Section2({ scrollYProgress }: { scrollYProgress: any }) {
  const scale = useTransform(scrollYProgress, [0.33, 0.66], [0.85, 1]);
  const rotate = useTransform(scrollYProgress, [0.33, 0.66], [3, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen flex items-center justify-center text-white"
    >
      <div className="relative w-full h-[85%] rounded-3xl overflow-hidden bg-[url('https://picsum.photos/800/500?random=20')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xl" />

        <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
            {/* Left */}
            <div className="flex flex-col justify-between space-y-6 md:space-y-0">
              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xs mx-auto md:mx-0">
                We’ve partnered with businesses across various industries to
                help them achieve their goals.
              </p>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">02 / 03</p>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-1 md:mt-2">
                  VNTNR
                </h2>
              </div>
            </div>

            {/* Center */}
            <div className="flex items-center justify-center order-first md:order-none">
              <div className="w-full max-w-[500px] aspect-video bg-black rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://picsum.photos/800/500?random=20"
                  alt="Project Mockup"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-xs sm:text-sm">
              <div>
                <p className="text-gray-400">Year</p>
                <p className="font-bold text-base sm:text-lg">2018</p>
              </div>
              <div>
                <p className="text-gray-400">Role</p>
                <p className="font-medium">Logo Designer</p>
              </div>
              <div>
                <p className="text-gray-400">Services</p>
                <ul className="space-y-1">
                  <li>Designing</li>
                  <li>Branding</li>
                  <li>Redesigning</li>
                  <li>Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ---------------- SECTION 3 ----------------
function Section3({ scrollYProgress }: { scrollYProgress: any }) {
  const scale = useTransform(scrollYProgress, [0.66, 1], [0.85, 1]);
  const rotate = useTransform(scrollYProgress, [0.66, 1], [3, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen flex items-center justify-center text-white"
    >
      <div className="relative w-full h-[85%] rounded-3xl overflow-hidden bg-[url('https://picsum.photos/800/500?random=30')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />

        <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
            {/* Left */}
            <div className="flex flex-col justify-between space-y-6 md:space-y-0">
              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xs mx-auto md:mx-0">
                Another project showcase with beautiful transitions and
                animations.
              </p>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">03 / 03</p>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-1 md:mt-2">
                  Aurora
                </h2>
              </div>
            </div>

            {/* Center */}
            <div className="flex items-center justify-center order-first md:order-none">
              <div className="w-full max-w-[500px] aspect-video bg-black rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://picsum.photos/800/500?random=30"
                  alt="Project Mockup"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-xs sm:text-sm">
              <div>
                <p className="text-gray-400">Year</p>
                <p className="font-bold text-base sm:text-lg">2022</p>
              </div>
              <div>
                <p className="text-gray-400">Role</p>
                <p className="font-medium">UI/UX Designer</p>
              </div>
              <div>
                <p className="text-gray-400">Services</p>
                <ul className="space-y-1">
                  <li>UI/UX</li>
                  <li>Brand Strategy</li>
                  <li>Prototyping</li>
                  <li>Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
