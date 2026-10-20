import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black px-5 pb-12 pt-32 text-white"
    >
      <div className="mx-auto grid max-w-[1036px] grid-cols-1 gap-6 md:grid-cols-[330px_1fr]">
        {/* Left Profile Card */}
        <div className="flex flex-col items-center rounded-2xl border border-[#1b1b1e] bg-[#121214] px-7 py-8 text-center">
          {/* Profile Image */}
          <div className="relative mb-6 flex h-[230px] w-[230px] items-center justify-center overflow-hidden rounded-full bg-[#f15b3a]">
            <Image
              src="/images/profile.png"
              alt="Yeasin Khan"
              fill
              priority
              className="object-cover"
              sizes="230px"
            />
          </div>

          <h2 className="text-3xl font-semibold tracking-tight">Yeasin Khan</h2>

          <p className="mt-2 max-w-[230px] text-sm leading-6 text-gray-400">
            I am a Frontend Developer building modern web experiences.
          </p>

          {/* Social Links */}
          <div className="mt-5 flex items-center gap-4">
            <a
              href="https://www.facebook.com/yeasin.khan.67651"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#252528] text-gray-400 transition hover:border-[#f15b3a] hover:text-[#f15b3a]"
            >
              f
            </a>

            <a
              href="https://x.com/kyeasin58"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#252528] text-gray-400 transition hover:border-[#f15b3a] hover:text-[#f15b3a]"
            >
              𝕏
            </a>

            <a
              href="https://github.com/yeasinkhan08"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#252528] text-gray-400 transition hover:border-[#f15b3a] hover:text-[#f15b3a]"
            >
              GH
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Introduction Card */}
          <div
            id="about"
            className="rounded-2xl border border-[#1b1b1e] bg-[#121214] p-8 md:p-9"
          >
            <p className="text-sm text-gray-400">Hello There!</p>

            <h1 className="mt-4 text-3xl font-medium leading-tight tracking-tight md:text-[34px]">
              I’m Yeasin Khan, a frontend developer crafting modern web
              experiences with React and Next.js.
            </h1>

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-400">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              Available for Freelancing
            </div>

            <a
              href="/resume.pdf"
              download
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#f15b3a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#dc4829]"
            >
              Download CV
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Companies / Technologies Card */}
          <div
            id="works"
            className="rounded-2xl border border-[#1b1b1e] bg-[#121214] px-8 py-7 md:px-9"
          >
            <h2 className="text-lg font-semibold">Technologies I Work With</h2>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-x-5 gap-y-4 text-lg font-bold text-gray-500 sm:text-xl">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>React</span>
              <span>Next.js</span>
              <span>Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
