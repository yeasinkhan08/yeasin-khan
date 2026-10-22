import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[1296px] px-4">
        <div className="bento-card relative overflow-hidden text-center py-14 px-6 md:py-20 md:px-16 border border-white/10 bg-[#121214]">
          {/* Subtle ambient orange glow behind */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-[#f15b3a]/10 blur-3xl" />

          <h2 className="relative mx-auto max-w-3xl text-2xl font-normal leading-[1.3] tracking-tight text-white sm:text-3xl md:text-[38px]">
            Are You Ready to kickstart your project with a touch of magic?
          </h2>

          <p className="relative mx-auto mt-4 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-[#9f9f9f]">
            Reach out and let&apos;s make it happen ✨. I&apos;m also available for
            freelance contracts, full-time engineering roles, or consulting to build exceptional web applications.
          </p>

          <div className="relative mt-8 flex justify-center">
            <Link href="/contact" className="theme-btn group">
              Let&apos;s Talk
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
