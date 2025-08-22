import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./HomePage/Hero";
import BrandSlider from "./HomePage/BrandSlider";
import brand from "@/app/assets/images/brand.png";

// import LogoSlider from "./HomePage/LogoSlider";
import Hello from "./HomePage/Hello";
import Testmonial from "./HomePage/Testmonial";
import Founder from "./HomePage/Founder";
import WhatWeDo from "./HomePage/WhatWeDo";
import Awards from "./HomePage/Awards";
import FAQ from "./HomePage/FAQ";
import Pricing from "./HomePage/Pricing";
import ConnectForm from "./HomePage/ConnectForm";
import Footer from "./components/Footer";
import RecentWork from "./HomePage/RecentWork";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* --- Tech Logos Section --- */}
      <section className="bg-[#f5f5f5] pb-12  text-center">
        <Image src={brand} alt="Brand Logo" className="px-2 " />
        {/* <LogoSlider /> */}
      </section>

      {/* --- Flowing Text Section --- */}
      <section>
        <BrandSlider />
      </section>
      <Hello />
      <Testmonial />
      <RecentWork/>
      <WhatWeDo />
      <Founder />
      <Awards />

      <Pricing />
      <FAQ />
      <ConnectForm />
      <Footer />
    </>
  );
}
