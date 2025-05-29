import React from "react";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import androidBadge from "../src/assets/googlebadge.svg";
import appleBadge from "../src/assets/appstorebadge.svg";
import anamvrLogo from "../src/assets/AnamVR-Icon.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mb-20 mt-10 mx-auto px-6">
        {/* Main footer content in a row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
              <img
                src={anamvrLogo || "/placeholder.svg"}
                alt="AnamVR Logo"
                className="w-full h-full rounded-md"
              />
            </div>
            <span className="text-white text-lg font-bold">AnamVR</span>
          </div>

          {/* Main navigation links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-6 md:mb-0">
            <a
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="https://shop.anamvr.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Shop
            </a>
            <a
              href="/blog"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="/our-team"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Our Team
            </a>
            <a
              href="/our-contributors"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Our Contributors
            </a>
          </div>

          {/* App download badges - UPDATED */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6 md:mb-0">
            <a href="/ios-app" className="transition-opacity hover:opacity-90">
              <img
                src={appleBadge}
                alt="Download on the App Store"
                className="h-10 w-auto"
              />
            </a>
            <a
              href="/android-app"
              className="transition-opacity hover:opacity-90"
            >
              <img
                src={androidBadge}
                alt="Get it on Google Play"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 w-full mb-6"></div>

        {/* Copyright row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} AnamVR. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="/"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
