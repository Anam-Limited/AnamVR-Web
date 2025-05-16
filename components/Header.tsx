"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import anamvrLogo from "../src/assets/AnamVR-IconNoBg.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-2 px-6 xl:px-44 sticky top-0 z-50 shadow-sm">
      <div className="max-w-auto mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center">
            <img src={anamvrLogo} alt="AnamVR Logo" className="w-full h-full" />
          </div>
        </div>

        {/* Right: Navigation */}
        <div className="flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-purple-900 hover:text-purple-600 font-medium"
            >
              Home
            </a>
            <a
              href="/download"
              className="text-purple-900 hover:text-purple-600 font-medium"
            >
              Download
            </a>
            <a
              href="/shop"
              className="text-purple-900 hover:text-purple-600 font-medium"
            >
              Shop
            </a>
            <a
              href="/Blog"
              className="text-purple-900 hover:text-purple-600 font-medium"
            >
              Blog
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-purple-900 ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[60px] left-0 right-0 bg-white z-50 shadow-lg">
          <div className="flex flex-col p-4">
            <a
              href="/"
              className="text-purple-900 py-2 hover:bg-purple-50 px-4 rounded font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/download"
              className="text-purple-900 py-2 hover:bg-purple-50 px-4 rounded font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Download
            </a>
            <a
              href="/shop"
              className="text-purple-900 py-2 hover:bg-purple-50 px-4 rounded font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
            <a
              href="/blog"
              className="text-purple-900 py-2 hover:bg-purple-50 px-4 rounded font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <div className="border-t border-gray-200 my-2"></div>
            <a
              href="/login"
              className="text-purple-900 py-2 hover:bg-purple-50 px-4 rounded font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </a>
            <a
              href="/download"
              className="bg-purple-600 text-white py-2 px-4 rounded-full font-medium mt-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Try for free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
