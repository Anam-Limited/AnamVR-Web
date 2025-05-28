"use client";
import React, { useEffect, useState } from "react";
import { useChatbot } from "../context/ChatbotContext";
import { X } from "lucide-react";
import anamvrLogo from "../src/assets/AnamVR-IconNoBg.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openChat } = useChatbot();

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header
        className={`flex items-center min-w-full lg:min-w-5xl mx-auto justify-between py-4 px-6 md:px-14 fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
          scrolled || (typeof window !== "undefined" && window.innerWidth < 768)
            ? "bg-white/90 shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Left navigation */}
        <nav className="hidden md:flex items-center text-sm lg:text-base font-medium space-x-4 lg:space-x-6">
          <a
            href="about"
            className="text-black hover:text-[#7745b8] transition-colors relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7745b8] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="shop"
            className="text-black hover:text-[#7745b8] transition-colors relative group"
          >
            Shop
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7745b8] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="blog"
            className="text-black hover:text-[#7745b8] transition-colors relative group"
          >
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7745b8] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <button
            onClick={(e) => {
              e.preventDefault();
              openChat();
            }}
            className="text-black hover:text-[#7745b8] transition-colors relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7745b8] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </nav>

        {/* Logo (center) */}
        <a href="/" className="flex items-center justify-center">
          <img
            src={anamvrLogo || "/placeholder.svg"}
            className="w-14 h-auto lg:w-16 transition-transform hover:scale-105 duration-300"
            alt="AnamVR Logo"
          />
        </a>

        {/* Right section buttons */}
        <div className="hidden md:flex items-center text-sm lg:text-base font-medium space-x-4 lg:space-x-6">
          <a
            href="/for-individuals"
            className="bg-[#7745b8] text-white px-4 py-2 lg:px-5 lg:py-2 rounded-full hover:bg-[#572994] transition-colors shadow-md flex items-center justify-center"
          >
            For Individuals
          </a>
          <a
            href="/for-organisations"
            className="bg-white text-[#7745b8] border-2 border-[#7745b8] px-4 py-2 lg:px-5 lg:py-1.5 rounded-full hover:bg-[#7745b8] hover:border-[#7745b8] hover:text-white transition-colors shadow-sm flex items-center justify-center"
          >
            For Organisations
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-full bg-white/80 text-[#7745b8] shadow-sm border border-[#eacfff] hover:bg-[#eacfff] transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[85%] max-w-md bg-gradient-to-br from-white to-[#f9f5ff] z-40 shadow-2xl transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu header with close button properly aligned to right */}
        <div className="flex justify-end items-center p-5 border-b border-purple-100 w-full">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-full bg-gray-200 text-black transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Mobile navigation items */}
        <nav className="flex flex-col h-[calc(100%-70px)]">
          {" "}
          {/* Fill remaining height */}
          <div className="flex-grow p-6 space-y-5 overflow-y-auto">
            {" "}
            {/* Main links scrollable */}
            {[
              { href: "/about", label: "About" },
              { href: "/shop", label: "Shop" },
              { href: "/blog", label: "Blog" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-xl font-medium text-gray-700 hover:text-[#7745b8] py-2 transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                openChat();
                toggleMobileMenu();
              }}
              className="block w-full text-left text-xl font-medium text-gray-700 hover:text-[#7745b8] py-2 transition-colors duration-200"
            >
              Contact
            </button>
          </div>
          {/* Action buttons - fixed at the bottom */}
          <div className="p-6 mb-10 border-t border-purple-100 space-y-4">
            <a
              href="/for-individuals"
              className="flex w-full items-center text-lg justify-center bg-[#7745b8] text-white px-6 py-3.5 rounded-full hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-purple-300/50 transform hover:-translate-y-0.5"
              onClick={toggleMobileMenu}
            >
              For Individuals
            </a>
            <a
              href="/for-organisations"
              className="flex w-full items-center text-lg justify-center bg-white text-[#7745b8] border-2 border-[#7745b8] px-6 py-3 rounded-full hover:bg-[#7745b8] hover:text-white transition-all duration-200 shadow-md hover:shadow-purple-200/50 transform hover:-translate-y-0.5"
              onClick={toggleMobileMenu}
            >
              For Organisations
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
