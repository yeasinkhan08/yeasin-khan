"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Jonathan Vance",
    role: "Product Lead at CloudScale",
    text: "Yeasin delivered our full stack platform on schedule with extraordinary precision. His frontend architecture and clean API structure saved us months of rework.",
    initials: "JV",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Founder, TechLaunch Studio",
    text: "Working with Yeasin Khan was seamless. He has a rare blend of strong backend engineering logic and eye-catching frontend design taste.",
    initials: "SJ",
  },
  {
    id: 3,
    name: "David Rahman",
    role: "Engineering Director, Nova Apps",
    text: "Yeasin is a dependable, high-caliber developer. He built our dashboard with blazing speed and responsive perfection across all screen resolutions.",
    initials: "DR",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-12 md:py-16 bg-black text-white">
      <div className="mx-auto max-w-[1296px] px-4">

        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#f15b3a]">
            Testimonials
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[42px] font-normal tracking-tight text-white">
            What clients say!
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="mx-auto max-w-3xl bento-card p-8 sm:p-12 text-center relative">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-[#f15b3a] to-[#ff8a00] text-xl font-bold text-white shadow-lg shadow-[#f15b3a]/30 mb-6">
            {current.initials}
          </div>

          <p className="text-base sm:text-xl font-normal leading-relaxed text-[#cecece] italic">
            &ldquo;{current.text}&rdquo;
          </p>

          <div className="mt-6">
            <h5 className="text-[18px] font-bold text-white">{current.name}</h5>
            <span className="text-sm text-[#9f9f9f]">{current.role}</span>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prevTestimonial}
              aria-label="Previous Testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#161618] text-white transition-all hover:border-[#f15b3a] hover:bg-[#f15b3a]"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next Testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#161618] text-white transition-all hover:border-[#f15b3a] hover:bg-[#f15b3a]"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
