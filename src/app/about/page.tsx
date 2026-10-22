import Image from "next/image";
import Link from "next/link";
import Resume from "@/components/Resume";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "About Me - Yeasin Khan",
  description: "Learn more about Yeasin Khan, a Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-36 pb-12 bg-black text-white">
      {/* Intro Bio Area */}
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-[1296px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Column: Portrait Bento Card */}
            <div className="lg:col-span-4 bento-card flex flex-col items-center justify-between p-7 sm:p-9 text-center">
              <div className="relative mx-auto flex h-[270px] w-full max-w-[270px] items-center justify-center">
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

              <div className="mt-4">
                <h2 className="text-[26px] font-bold text-white tracking-tight">Yeasin Khan</h2>
                <p className="mt-1 text-sm text-[#9f9f9f]">Full Stack Developer</p>
                <p className="mt-1 text-xs text-[#77777d]">Jurain, Dhaka, Bangladesh</p>
              </div>

              {/* Social links */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <a
                  href="https://www.facebook.com/yeasin.khan.67651"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#161618] text-[#cecece] transition-all hover:border-[#f15b3a] hover:bg-[#f15b3a] hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.4v2.2H7v3.2h2.8V21h3.6Z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/kyeasin58"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#161618] text-[#cecece] transition-all hover:border-[#f15b3a] hover:bg-[#f15b3a] hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 17.8h1.7L7.3 4.1H5.5l12.3 15.7Z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/yeasinkhan08"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#161618] text-[#cecece] transition-all hover:border-[#f15b3a] hover:bg-[#f15b3a] hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.59c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: Bio Narrative */}
            <div className="lg:col-span-8 bento-card p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#f15b3a]">
                  About Me
                </p>
                <h1 className="mt-2 text-[26px] sm:text-[34px] md:text-[40px] font-bold text-white tracking-tight leading-[1.25]">
                  I’m Yeasin Khan, a Full Stack Developer crafting seamless digital experiences.
                </h1>

                <div className="mt-6 space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#9f9f9f]">
                  <p>
                    I specialize in building end-to-end web applications with modern architectures. Based in Dhaka, Bangladesh, I work with startups, businesses, and engineering teams to transform conceptual wireframes into high-performing, interactive web applications.
                  </p>
                  <p>
                    My primary technical foundation is built on React, Next.js, TypeScript, Node.js, Express, and MongoDB. I have a strong dedication to writing clean, maintainable, modular code and implementing pixel-perfect user interfaces with Tailwind CSS and DaisyUI.
                  </p>
                  <p>
                    Whether working on authentication, complex database models, real-time dashboards, or API integrations, my focus remains constant: delivering user-centric performance, reliability, and visual excellence.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="theme-btn group">
                  Get In Touch
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                  </svg>
                </Link>

                <a
                  href="/resume.pdf"
                  download
                  className="theme-btn-outline rounded-[15px] px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
                >
                  Download Resume
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience & Education Timelines */}
      <Resume />

      {/* Testimonials Slider */}
      <Testimonials />

      {/* Call to Action Banner */}
      <CallToAction />
    </div>
  );
}
