import Image from "next/image";
import Link from "next/link";
import Marquee from "./Marquee";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black px-5 pb-12 pt-32 text-white"
    >
      <div className="mx-auto grid max-w-[1036px] grid-cols-1 gap-6 md:grid-cols-[330px_1fr]">
        {/* LEFT PROFILE CARD */}
        <div className="flex flex-col items-center rounded-2xl border border-[#1b1b1e] bg-[#121214] px-7 py-8 text-center">
          {/* Profile Banner Image */}
          <div className="relative mb-6 flex h-[250px] w-full items-center justify-center">
            {/* Orange Circle Background */}
            <div className="absolute top-6 h-[205px] w-[205px] overflow-hidden rounded-full bg-[#F15B3A]">
              {/* White Curved Line */}
              <svg
                viewBox="0 0 220 220"
                className="absolute inset-0 h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-15 125 C25 125 38 92 57 92 C72 92 65 142 88 142 C110 142 116 91 135 91 C154 91 151 126 175 126 C194 126 207 112 235 112"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Your Transparent Profile Image */}
            <div className="absolute inset-x-0 bottom-5 z-10 mx-auto h-[245px] w-[220px]">
              <Image
                src="/profile.png"
                alt="Yeasin Khan"
                fill
                priority
                sizes="220px"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Name */}
          <h2 className="text-3xl font-semibold tracking-tight">Yeasin Khan</h2>

          {/* Description */}
          <p className="mt-2 max-w-[230px] text-sm leading-6 text-gray-400">
            I am a Full Stack Developer building modern web experiences.
          </p>

          {/* Social Links */}

          {/* Modern Social Links */}
          {/* Modern Social Links */}
          <div className="mt-6 flex items-center gap-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/yeasin.khan.67651"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#29292d] bg-[#19191c] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#F15B3A] hover:bg-[#F15B3A] hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.4v2.2H7v3.2h2.8V21h3.6Z" />
              </svg>
            </a>

            {/* X */}
            <a
              href="https://x.com/kyeasin58"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#29292d] bg-[#19191c] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#F15B3A] hover:bg-[#F15B3A] hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 17.8h1.7L7.3 4.1H5.5l12.3 15.7Z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/yeasinkhan08"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#29292d] bg-[#19191c] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#F15B3A] hover:bg-[#F15B3A] hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.59c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          {/* INTRODUCTION CARD */}
          <div
            id="about"
            className="rounded-2xl border border-[#1b1b1e] bg-[#121214] p-8 md:p-9"
          >
            <p className="text-sm text-gray-400">Hello There!</p>

            <h1 className="mt-4 text-3xl font-medium leading-tight tracking-tight md:text-[34px]">
              I’m Yeasin Khan, a Full Stack Developer, I build modern, scalable
              web experiences from frontend to backend.
            </h1>

            {/* Availability */}
            <div className="mt-5 flex items-center gap-2 text-sm text-gray-400">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              Available for Freelancing
            </div>

            {/* Download CV */}
            <a
              href="/resume.pdf"
              download
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#F15B3A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#dc4829]"
            >
              Download CV
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* TECHNOLOGIES CARD */}
          <div
            id="works"
            className="rounded-2xl border border-[#1b1b1e] bg-[#121214] px-8 py-7 md:px-9"
          >
            <h2 className="text-xl font-bold">Technologies I Work With</h2>

            <div className="mt-8 w-full overflow-hidden text-center">
              <Marquee />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
