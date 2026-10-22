import Image from "next/image";
import Marquee from "./Marquee";

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-8 md:pt-36 md:pb-12 bg-black text-white">
      <div className="mx-auto max-w-[1296px] px-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
          
          {/* LEFT COLUMN: Profile Card */}
          <div className="lg:col-span-4 flex flex-col justify-between bento-card text-center p-7 sm:p-9">
            <div>
              {/* Profile image with decorative badge */}
              <div className="relative mx-auto mb-6 flex h-[270px] w-full max-w-[270px] items-center justify-center">
                {/* Orange decorative card backdrop */}
                <div className="relative h-[230px] w-[230px] shrink-0 overflow-hidden rounded-2xl border border-orange-400/25 bg-gradient-to-br from-[#FF8A00] via-[#F97316] to-[#C2410C] shadow-xl shadow-orange-950/40">
                  <svg
                    viewBox="0 0 220 220"
                    className="absolute inset-0 h-full w-full opacity-70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="110" cy="90" r="75" fill="#FDBA74" fillOpacity="0.25" />
                    <circle cx="110" cy="110" r="82" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1.5" />
                    <path
                      d="M28 110 A82 82 0 0 0 192 110"
                      stroke="#FFFFFF"
                      strokeOpacity="0.8"
                      strokeWidth="2"
                    />
                    <path
                      d="M-10 125 C25 125 42 100 58 96 C72 92 68 142 91 142 C112 142 117 103 137 103 C157 103 153 125 178 125 C198 125 212 112 230 112"
                      stroke="#FFFFFF"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Profile Portrait */}
                <div className="absolute inset-x-0 bottom-3 top-0 z-10 mx-auto w-full max-w-[240px]">
                  <Image
                    src="/profile.png"
                    alt="Yeasin Khan"
                    fill
                    priority
                    sizes="(max-width: 768px) 240px, 240px"
                    className="object-contain object-bottom drop-shadow-2xl"
                  />
                </div>
              </div>

              <h2 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-white">
                Yeasin Khan
              </h2>

              <p className="mt-2 text-[15px] leading-relaxed text-[#9f9f9f]">
                I am a Full Stack Developer based in Dhaka, Bangladesh.
              </p>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href="https://www.facebook.com/yeasin.khan.67651"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#161618] text-[#cecece] transition-all duration-300 hover:-translate-y-1 hover:border-[#f15b3a] hover:bg-[#f15b3a] hover:text-white hover:shadow-lg hover:shadow-[#f15b3a]/30"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.4v2.2H7v3.2h2.8V21h3.6Z" />
                </svg>
              </a>

              <a
                href="https://x.com/kyeasin58"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#161618] text-[#cecece] transition-all duration-300 hover:-translate-y-1 hover:border-[#f15b3a] hover:bg-[#f15b3a] hover:text-white hover:shadow-lg hover:shadow-[#f15b3a]/30"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 17.8h1.7L7.3 4.1H5.5l12.3 15.7Z" />
                </svg>
              </a>

              <a
                href="https://github.com/yeasinkhan08"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#161618] text-[#cecece] transition-all duration-300 hover:-translate-y-1 hover:border-[#f15b3a] hover:bg-[#f15b3a] hover:text-white hover:shadow-lg hover:shadow-[#f15b3a]/30"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.59c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#161618] text-[#cecece] transition-all duration-300 hover:-translate-y-1 hover:border-[#f15b3a] hover:bg-[#f15b3a] hover:text-white hover:shadow-lg hover:shadow-[#f15b3a]/30"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Bento Stack */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-6">
            
            {/* TOP CARD: Introduction */}
            <div id="about" className="bento-card flex flex-col justify-between p-7 sm:p-9 md:p-10 flex-1">
              <div>
                <p className="text-[14px] font-medium tracking-wide text-[#9f9f9f]">
                  Hello There!
                </p>

                <h1 className="mt-3 text-[26px] sm:text-[32px] md:text-[38px] font-normal leading-[1.3] tracking-tight text-white">
                  I’m <span className="font-semibold text-white">Yeasin Khan</span>, a Full Stack Developer crafting user-centric web applications with pixel-perfect precision.
                </h1>

                {/* Status Indicator */}
                <div className="mt-6 flex items-center gap-2.5 text-sm text-[#cecece]">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  Available for Freelancing & Engineering Opportunities
                </div>
              </div>

              {/* Download CV Button */}
              <div className="mt-8">
                <a
                  href="/resume.pdf"
                  download
                  className="theme-btn group"
                >
                  Download CV
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                    aria-hidden="true"
                  >
                    <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* BOTTOM CARD: Technologies / Companies Scroller */}
            <div className="bento-card p-6 sm:p-8">
              <h3 className="text-[18px] font-semibold text-white mb-4">
                Technologies I Work With
              </h3>

              <div className="w-full overflow-hidden">
                <Marquee />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
