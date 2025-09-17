"use client";

import React, { useState } from "react";
import Image from "next/image";


export default function Header ({ id }: { id?: string } = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close mobile menu after click
  };

  return (
    <header id={id} className="bg-gray-900 text-white sticky top-0 z-50 shadow">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <a
          className="flex title-font font-medium items-center text-white cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <Image
            src="/favicon.svg"
            alt="WeBuyItWeSellIt Logo"
            width={40}       // match original size
            height={40}      // match original size
            className="p-2 bg-indigo-500 rounded-full"
            />
          <span className="ml-3 text-xl">WeBuyItWeSellIt</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-wrap items-center text-base space-x-6">
          <button onClick={() => scrollToSection("features")} className="hover:text-yellow-400 transition">
            Services
          </button>
          <button onClick={() => scrollToSection("process")} className="hover:text-yellow-400 transition">
            How It Works
          </button>
          <button onClick={() => scrollToSection("stats")} className="hover:text-yellow-400 transition">
            Stats
          </button>
          <button onClick={() => scrollToSection("gallery")} className="hover:text-yellow-400 transition">
            Gallery
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="hover:text-yellow-400 transition">
            Testimonials
          </button>
          <a href="/merch" className="hover:text-yellow-400 transition font-semibold">
            Shop Merch
          </a>
          <button onClick={() => scrollToSection("cta")} className="hover:text-yellow-400 transition font-semibold">
            Get Started
          </button>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-policy"))}
            className="hover:text-yellow-400 transition underline text-sm"
          >
            Cookie Policy
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="outline-none mobile-menu-button"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <button
            onClick={() => scrollToSection("features")}
            className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("process")}
            className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("stats")}
            className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
          >
            Stats
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
          >
            Testimonials
          </button>
          <a
            href="/merch"
            className="block px-4 py-2 hover:bg-gray-700 w-full text-left font-semibold"
          >
            Shop Merch
          </a>
          <button
            onClick={() => scrollToSection("cta")}
            className="block px-4 py-2 hover:bg-gray-700 w-full text-left font-semibold"
          >
            Get Started
          </button>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-policy"))}
            className="block px-4 py-2 hover:bg-gray-700 w-full text-left underline text-sm"
          >
            Cookie Policy
          </button>
        </div>
      )}
    </header>
  );
}
