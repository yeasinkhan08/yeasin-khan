"use client";

import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "DaisyUI",
  "PostgreSQL",
  "REST APIs",
  "Git & GitHub",
];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden py-2">
      <MarqueeText direction="left" duration={35}>
        <div className="flex items-center gap-4 px-3">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[14px] font-medium text-[#cecece] backdrop-blur-sm transition-all duration-200 hover:border-[#f15b3a]/50 hover:text-white hover:bg-white/[0.06]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#f15b3a]" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </MarqueeText>
    </div>
  );
}
