import Link from "next/link";

const footerLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Works", href: "/#works" },
  { name: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yeasinkhan08",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.59c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/khan-yeasin/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/kyeasin58",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 17.8h1.7L7.3 4.1H5.5l12.3 15.7Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/yeasin.khan.67651",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.4v2.2H7v3.2h2.8V21h3.6Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06] bg-black">
      {/* Top section */}
      <div className="mx-auto max-w-[1296px] px-4 py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:max-w-[280px]">
            <Link
              href="/#home"
              className="text-[22px] font-extrabold tracking-[-0.5px] text-white transition-colors hover:text-[#f15b3a]"
            >
              Yeasin<span className="text-[#f15b3a]">.</span>
            </Link>
            <p className="text-[14px] leading-relaxed text-[#9f9f9f]">
              Full Stack Developer crafting modern, high-performance web
              applications from frontend to backend.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2 mt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#161618] text-[#9f9f9f] transition-all duration-200 hover:border-[#f15b3a]/40 hover:bg-[#f15b3a]/10 hover:text-[#f15b3a]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#9f9f9f]">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#cecece] transition-colors hover:text-[#f15b3a]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="flex flex-col gap-4">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#9f9f9f]">
              Get In Touch
            </p>
            <p className="text-[14px] text-[#9f9f9f] leading-relaxed">
              Open to new opportunities and<br className="hidden md:block" /> freelance projects.
            </p>
            <Link
              href="/#contact"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#f15b3a] px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-[#dc4829] hover:shadow-lg hover:shadow-[#f15b3a]/25 hover:-translate-y-px"
            >
              Hire Me
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="mx-auto flex max-w-[1296px] flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row">
          <p className="text-[13px] text-[#9f9f9f]">
            © 2026{" "}
            <Link href="/" className="text-[#f15b3a] transition-colors hover:underline">
              Yeasin Khan
            </Link>
            . All Rights Reserved.
          </p>
          <p className="text-[13px] text-[#9f9f9f]">
            Built with <span className="text-[#f15b3a]">♥</span> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
