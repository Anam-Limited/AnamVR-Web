"use client";
import React, { useEffect, useState } from "react";
import { useChatbot } from "../context/ChatbotContext";
import { X } from "lucide-react";
import anamvrLogo from "../src/assets/AnamVR-IconNoBg.webp";

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
        className={`flex items-center min-w-full lg:min-w-5xl mx-auto justify-between py-6 px-6 md:px-14 fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
          scrolled || (typeof window !== "undefined" && window.innerWidth < 768)
            ? "bg-[#fafafa]/90 shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Left navigation */}
        <nav className="hidden md:flex items-center text-sm lg:text-base font-medium space-x-4 lg:space-x-6">
          <a
            href="/"
            aria-label="Homepage"
            className="text-black hover:text-[#7745b8] transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7745b8] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="https://shop.anamvr.com"
            aria-label="Shop"
            className="text-black hover:text-[#7745b8] transition-colors relative group"
          >
            Shop
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7745b8] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="blog"
            aria-label="Blog"
            className="text-black hover:text-[#7745b8] transition-colors relative group"
          >
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7745b8] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="contact"
            aria-label="Contact"
            className="text-black hover:text-[#7745b8] transition-colors relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7745b8] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <button
            type="button"
            className="relative text-black hover:text-[#7745b8] cursor-pointer transition-colors group focus:outline-none"
            tabIndex={0}
            aria-haspopup="true"
            aria-expanded="false"
          >
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7745b8] transition-all duration-300 group-hover:w-full"></span>
            {/* Dropdown */}
            <div className="absolute left-0 top-full mt-2 min-w-[180px] bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-all duration-200 z-50">
              <a
                href="/about"
                aria-label="About AnamVR"
                className="block px-5 py-3 text-gray-700 hover:bg-[#f6f0ff] rounded-t-xl transition-colors"
              >
                About AnamVR
              </a>
              <a
                href="/mission"
                aria-label="Mission of AnamVR"
                className="block px-5 py-3 text-gray-700 hover:bg-[#f6f0ff] transition-colors"
              >
                Mission
              </a>
              <a
                href="/pillars"
                aria-label="Pillars of AnamVR"
                className="block px-5 py-3 text-gray-700 hover:bg-[#f6f0ff] transition-colors"
              >
                Pillars
              </a>
              <a
                href="/research"
                aria-label="Research by AnamVR"
                className="block px-5 py-3 text-gray-700 hover:bg-[#f6f0ff] rounded-b-xl transition-colors"
              >
                Research
              </a>
              <a
                href="/our-contributors"
                aria-label="Contributors of AnamVR"
                className="block px-5 py-3 text-gray-700 hover:bg-[#f6f0ff] rounded-b-xl transition-colors"
              >
                Contributors
              </a>
              <a
                href="/our-team"
                aria-label="Team of AnamVR"
                className="block px-5 py-3 text-gray-700 hover:bg-[#f6f0ff] rounded-b-xl transition-colors"
              >
                Team
              </a>
            </div>
          </button>
        </nav>

        {/* Logo (center) */}
        <a
          href="/"
          aria-label="AnamVR Logo"
          className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        >
          <img
            src={anamvrLogo || "/placeholder.svg"}
            className="w-14 h-auto lg:w-16 transition-transform hover:scale-105 duration-300"
            alt="AnamVR Logo"
            width={64}
            height={64}
          />
        </a>

        {/* Right section buttons */}
        <div className="hidden md:flex items-center text-sm lg:text-base font-medium space-x-4 lg:space-x-6">
          <a
            href="/for-individuals"
            aria-label="Learn more about AnamVR for individuals"
            className="bg-[#7745b8] text-white px-4 py-2 lg:px-5 lg:py-2 rounded-full hover:bg-[#572994] transition-colors shadow-md flex items-center justify-center"
          >
            For Individuals
          </a>
          <a
            href="/for-organisations"
            aria-label="Learn more about AnamVR for organisations"
            className="bg-[#7745b8] text-white px-4 py-2 lg:px-5 lg:py-2 rounded-full hover:bg-[#572994] transition-colors shadow-md flex items-center justify-center"
          >
            For Organisations
          </a>
        </div>

        {/* Mobile view logo and menu */}
        <div className="flex items-center justify-between w-full md:hidden">
          <a href="/" aria-label="Homepage" className="flex items-center">
            <img
              src={anamvrLogo}
              className="w-12 h-auto transition-transform hover:scale-105 duration-300"
              alt="AnamVR Logo"
              width={48}
              height={48}
            />
          </a>
          <button
            className="p-2 rounded-full bg-[#fafafa]/80 text-[#7745b8] shadow-sm border border-[#eacfff] hover:bg-[#eacfff] transition-colors"
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
        </div>
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
              { href: "/", label: "Home" },
              { href: "/shop", label: "Shop" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About Us" },
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
              aria-label="Learn more about AnamVR for individuals"
              className="flex w-full items-center text-lg justify-center bg-[#7745b8] text-white px-6 py-3.5 rounded-full hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-purple-300/50 transform hover:-translate-y-0.5"
              onClick={toggleMobileMenu}
            >
              For Individuals
            </a>
            <a
              href="/for-organisations"
              aria-label="Learn more about AnamVR for organisations"
              className="flex w-full items-center text-lg justify-center bg-[#7745b8] text-white px-6 py-3.5 rounded-full hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-purple-300/50 transform hover:-translate-y-0.5"
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
