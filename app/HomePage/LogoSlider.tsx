import LogoLoop from "./LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export default function LogoSlider() {
  return (
   <div className="h-[200px] py-20 px-6 sm:px-10 md:px-20 lg:px-40">
  <LogoLoop
    logos={techLogos}
    speed={80}
    direction="left"
    logoHeight={80}
    gap={160}
    pauseOnHover
    fadeOut
    fadeOutColor="#f5f5f5"
    ariaLabel="Technology partners"
  />
</div>

  );
}
