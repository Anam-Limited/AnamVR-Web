"use client";
import React, { useEffect, useState } from "react";

import PhoneMockup from "../src/assets/mockup1.png";
import assemblyLogo from "../src/assets/AnamVR-IconNoBg.png";
import spineLogo from "../src/assets/AnamVR-IconNoBg.png";
import paretoLogo from "../src/assets/AnamVR-IconNoBg.png";
import anamvrLogo from "../src/assets/AnamVR-IconNoBg.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center min-w-full lg:min-w-5xl mx-auto justify-between py-4 px-24 md:px-24 fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Left navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <a
          href="#home"
          className="text-black hover:text-[#7745b8] font-medium transition-colors relative group"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7745b8] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#download"
          className="text-black hover:text-[#7745b8] font-medium transition-colors relative group"
        >
          Download
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7745b8] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#shop"
          className="text-black hover:text-[#7745b8] font-medium transition-colors relative group"
        >
          Shop
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7745b8] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#blog"
          className="text-black hover:text-[#7745b8] font-medium transition-colors relative group"
        >
          Blog
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7745b8] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>

      {/* Logo (center) */}
      <div className="flex items-center justify-center">
        <img
          src={anamvrLogo || "/placeholder.svg"}
          className="w-14 h-14 md:w-16 md:h-16 transition-transform hover:scale-105 duration-300"
          alt="AnamVR Logo"
        />
      </div>

      {/* Right section buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-[#7745b8] text-white px-5 py-2 rounded-full font-medium hover:bg-[#8a5cc7] transition-colors shadow-md">
          For Individuals
        </button>
        <button className="bg-white text-[#7745b8] border-2 border-[#7745b8] px-5 py-1.5 rounded-full font-medium hover:bg-[#eacfff] hover:border-[#8a5cc7] transition-colors shadow-sm">
          For Organizations
        </button>
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden p-2 rounded-full bg-white/80 text-[#7745b8] shadow-sm border border-[#eacfff] hover:bg-[#eacfff] transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </header>
  );
}
