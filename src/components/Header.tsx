"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/resources", label: "Resources" },
  { href: "/cv", label: "CV" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full p-4 flex justify-between items-center backdrop-blur-sm z-10 font-light text-[#D4A017] font-[family-name:var(--font-reem-kufi)]">
        <Link
          href="/"
          className="relative z-30 text-4xl sm:text-5xl text-[#F4B400] transition-colors duration-200 hover:text-[#F5E9DA]"
          onClick={() => setMenuOpen(false)}
        >
          <span dir="rtl" lang="ar">
            إرشاد
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-3xl transition-colors duration-200 hover:text-[#F5E9DA]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="sm:hidden relative z-30 flex flex-col justify-center items-center w-10 h-10 gap-[6px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-7 h-[2px] bg-[#D4A017] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`block w-7 h-[2px] bg-[#D4A017] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-7 h-[2px] bg-[#D4A017] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile menu overlay — outside header to avoid backdrop-filter stacking context */}
      {menuOpen && (
        <nav className="sm:hidden fixed inset-0 bg-[#750D37] flex flex-col items-center justify-center gap-10 z-20 font-light text-[#D4A017] font-[family-name:var(--font-reem-kufi)]">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-4xl transition-colors duration-200 hover:text-[#F5E9DA]"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
