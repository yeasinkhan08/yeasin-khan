import Image from "next/image";
import Marquee from "./Marquee";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black px-5 pb-12 pt-28 text-white sm:pt-32"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-stretch gap-6 md:grid-cols-[330px_minmax(0,1fr)]">
        {/* LEFT PROFILE CARD */}
        <div className="flex flex-col items-center rounded-2xl border border-[#1b1b1e] bg-[#121214] px-6 py-7 text-center sm:px-7 sm:py-8">
          {/* Profile image */}
          <div className="relative mb-5 flex h-[290px] w-full items-center justify-center">
            {/* Professional Orange Decorative Design */}
            <div className="relative h-[220px] w-[220px] shrink-0 overflow-hidden rounded-2xl border border-orange-300/20 bg-gradient-to-br from-[#FF8A00] via-[#F97316] to-[#C2410C] shadow-lg shadow-orange-950/30">
              <svg
                viewBox="0 0 220 220"
                className="absolute inset-0 h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Subtle orange glow */}
                <circle
                  cx="110"
                  cy="90"
                  r="75"
                  fill="#FDBA74"
                  fillOpacity="0.2"
                />

                {/* Fine circular outline */}
                <circle
                  cx="110"
                  cy="110"
                  r="82"
                  stroke="#FFFFFF"
                  strokeOpacity="0.5"
                  strokeWidth="1.5"
                />

                {/* White curved lower edge */}
                <path
                  d="M28 110 A82 82 0 0 0 192 110"
                  stroke="#FFFFFF"
                  strokeOpacity="0.95"
                  strokeWidth="2"
                />

                {/* Elegant flowing white wave */}
                <path
                  d="M-10 125
         C25 125 42 100 58 96
         C72 92 68 142 91 142
         C112 142 117 103 137 103
         C157 103 153 125 178 125
         C198 125 212 112 230 112"
                  stroke="#FFFFFF"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Small accent details */}
                <circle cx="176" cy="53" r="3" fill="#FFFFFF" />
                <circle cx="188" cy="53" r="1.5" fill="#FFEDD5" />
              </svg>
            </div>
            {/* Portrait — moved slightly upward */}
            <div className="absolute inset-x-0 bottom-7 top-0 z-10 mx-auto w-full max-w-[240px]">
              <Image
                src="/profile.png"
                alt="Yeasin Khan"
                fill
                priority
                sizes="(max-width: 768px) 240px, 240px"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight">Yeasin Khan</h2>

          <p className="mt-2 max-w-[230px] text-sm leading-6 text-gray-400">
            I am a Full Stack Developer building modern web experiences.
          </p>

          {/* Social links */}
          <div className="mt-5 flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/yeasin.khan.67651"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#252527] bg-[#151517] text-gray-400 transition hover:-translate-y-1 hover:border-[#F15B3A] hover:bg-[#F15B3A] hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.4v2.2H7v3.2h2.8V21h3.6Z" />
              </svg>
            </a>

            <a
              href="https://x.com/kyeasin58"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#252527] bg-[#151517] text-gray-400 transition hover:-translate-y-1 hover:border-[#F15B3A] hover:bg-[#F15B3A] hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 17.8h1.7L7.3 4.1H5.5l12.3 15.7Z" />
              </svg>
            </a>

            <a
              href="https://github.com/yeasinkhan08"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#252527] bg-[#151517] text-gray-400 transition hover:-translate-y-1 hover:border-[#F15B3A] hover:bg-[#F15B3A] hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
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
        <div className="flex min-w-0 flex-col gap-6">
          {/* INTRODUCTION CARD */}
          <div
            id="about"
            className="flex min-h-[322px] flex-col items-start rounded-2xl border border-[#1b1b1e] bg-[#121214] p-7 sm:p-8 md:p-9"
          >
            <p className="text-sm text-gray-400">Hello There!</p>

            <h1 className="mt-4 text-[28px] font-normal leading-[1.3] tracking-tight sm:text-3xl md:text-[32px]">
              I’m Yeasin Khan, a Full Stack Developer crafting modern,
              user-friendly web experiences from frontend to backend.
            </h1>

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-400">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" />
              Available for Freelancing
            </div>

            <a
              href="/resume.pdf"
              download
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#F15B3A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#dc4829]"
            >
              Download CV
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* TECHNOLOGIES CARD */}
          <div
            id="works"
            className="flex min-h-[169px] min-w-0 flex-col justify-between gap-6 rounded-2xl border border-[#1b1b1e] bg-[#121214] px-7 py-7 sm:px-8 md:px-9"
          >
            <h2 className="text-lg font-semibold">Technologies I Work With</h2>

            <div className="w-full min-w-0 overflow-hidden">
              <Marquee />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
