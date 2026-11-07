"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Works", href: "/#works" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
        ? "top-0 py-3"
        : "top-6 py-0"
        }`}
    >
      <div className="mx-auto max-w-[1296px] px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 transition-all duration-500 ${scrolled
            ? "h-[58px] border border-white/[0.08] bg-black/80 shadow-2xl shadow-black/40 backdrop-blur-xl"
            : "h-[52px] border border-white/[0.06] bg-black/60 backdrop-blur-md"
            }`}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/#home"
            className="shrink-0 text-[22px] font-extrabold leading-none tracking-[-0.5px] text-white transition-colors duration-200 hover:text-[#F15B3A]"
          >
            Yeasin Khan<span className="text-[#F15B3A]">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative whitespace-nowrap rounded-lg px-4 py-2 text-[14px] font-medium text-[#cecece] transition-all duration-200 hover:bg-white/[0.06] hover:text-white group"
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#F15B3A] transition-all duration-300 group-hover:w-4" />
              </Link>
            ))}
          </div>

          {/* Right side: Hire Me + Menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden h-[38px] items-center justify-center gap-2 rounded-xl bg-[#F15B3A] px-5 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-[#dc4829] hover:shadow-lg hover:shadow-[#F15B3A]/30 hover:-translate-y-px md:inline-flex"
            >
              Hire Me
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:border-white/20 hover:bg-white/[0.06] md:hidden"
            >
              <span
                className="relative flex h-4 w-5 flex-col items-center justify-center gap-[5px] transition-all"
              >
                <span
                  className={`block h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""
                    }`}
                />
                <span
                  className={`block h-[1.5px] rounded-full bg-current transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-full opacity-100"
                    }`}
                />
                <span
                  className={`block h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                    }`}
                />
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="mt-2 rounded-2xl border border-white/[0.08] bg-black/90 p-3 shadow-2xl shadow-black/60 backdrop-blur-xl">
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center rounded-xl px-4 py-3 text-[15px] font-medium text-[#cecece] transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  {link.name}
                </Link>
              ))}

              <div className="my-1 h-px bg-white/[0.06]" />

              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#F15B3A] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#dc4829]"
              >
                Hire Me
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
