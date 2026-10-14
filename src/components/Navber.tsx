"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-8 z-50 px-4">
      <nav
        className="relative mx-auto flex h-[50px] max-w-[1296px] items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="#home"
          className="shrink-0 text-[28px] font-extrabold leading-none tracking-[-1px] text-black transition-colors duration-200 dark:text-white hover:border-[#F15B3A] hover:text-[#F15B3A] trasnsition-colors  dark:border-[#242424] md:inline-flex"
        >
          Yeasin Khan
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-[16px] font-medium text-black transition-colors duration-200 hover:text-[#F15B3A] dark:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hire Me Button */}
        <Link
          href="#contact"
          className="hidden h-[46px] items-center justify-center gap-1.5 rounded-[16px] border border-gray-200 px-6 text-[14px] font-semibold text-black transition-all duration-200 hover:border-[#F15B3A] hover:bg-[#F15B3A] hover:text-white dark:border-[#242424] dark:text-white md:inline-flex"
        >
          Hire Me
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 8V5a2 2 0 0 0-4 0v7" />
            <path d="M8 10V4a2 2 0 0 0-4 0v9l3 6a4 4 0 0 0 3 2h5a4 4 0 0 0 4-4v-5a2 2 0 0 0-4 0" />
            <path d="M12 11V7a2 2 0 0 1 4 0v5" />
          </svg>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-black dark:border-[#242424] dark:text-white md:hidden"
        >
          {menuOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute left-0 right-0 top-[60px] rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl dark:border-[#242424] dark:bg-[#111111] md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-[15px] font-medium text-black transition-colors hover:bg-gray-100 hover:text-[#F15B3A] dark:text-white dark:hover:bg-[#202020]"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl bg-[#F15B3A] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Hire Me →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
