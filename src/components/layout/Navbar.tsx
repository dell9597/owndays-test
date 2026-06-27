"use client";

import { useState, useEffect } from "react";

const mainNavItems = [
  { label: "ABOUT", href: "#about" },
  { label: "PRODUCTS", href: "#products" },
  { label: "STORES", href: "#stores" },
] as const;

const subNavItems = [
  { label: "CONTACT US", href: "#contact" },
  { label: "PRIVACY POLICY", href: "#privacy" },
  { label: "TERMS OF USE", href: "#terms" },
  { label: "特定商取引法表示", href: "#legal" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── NAVBAR ── */}
      <header
        className={`sticky inset-x-0 top-0 z-[9999] text-white transition-[background-color,backdrop-filter] duration-300 ease-in-out ${
          scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex items-center justify-between py-[30px] px-[17px] sm:px-6 md:px-[70px]"
          aria-label="Primary navigation"
        >
          <a
            href="#top"
            className="text-lg font-display font-black uppercase tracking-[0.18em] text-white drop-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            OWNDAYS × MELLER
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-[50px] md:flex">
            {mainNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  relative
                  text-[15px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-white
                  transition-colors
                  duration-300
                  hover:text-[#FF5500]

                  after:absolute
                  after:left-0
                  after:-bottom-[6px]
                  after:h-[2px]
                  after:w-full
                  after:origin-left
                  after:scale-x-0
                  after:bg-[#FF5500]
                  after:transition-transform
                  after:duration-300
                  after:ease-out
                  after:content-['']

                  hover:after:scale-x-100
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hamburger Button */}
          <button
            type="button"
            className="flex flex-col items-center justify-center gap-1.5 md:hidden z-50"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((c) => !c)}
          >
            <span className="h-px w-5 bg-white" />
            <span className="h-px w-5 bg-white" />
            <span className="h-px w-5 bg-white" />
          </button>
        </nav>
      </header>

      {/* ── OVERLAY — อยู่นอก header เพื่อให้ fixed คำนวณจาก viewport จริงๆ ── */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* ── DRAWER — อยู่นอก header เช่นกัน ── */}
      <div
        className={`fixed inset-y-0 right-0 z-[9999] my-[16px] mr-[16px] w-[calc(100%-32px)] sm:max-w-[380px] bg-black p-8 px-[40px] pt-[80px] rounded-[20px] shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-[calc(100%+16px)]"
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-6 right-6 text-[#FF5500] transition hover:opacity-80"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="size-[42px]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full flex-col justify-start mt-[23px]">
          {/* Main Links */}
          <div className="flex flex-col gap-[25px]">
            {mainNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[18px] font-semibold uppercase tracking-[0.15em] text-[#FF5500] transition hover:opacity-80"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Sub Links */}
          <div className="flex flex-col gap-[15px] pt-[60px]">
            {subNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[11px] font-semibold tracking-[0.12em] text-[#FF5500] transition hover:opacity-80"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}