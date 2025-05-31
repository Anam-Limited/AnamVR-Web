import React from "react";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import androidBadge from "../src/assets/googlebadge.svg";
import appleBadge from "../src/assets/appstorebadge.svg";
import anamvrLogo from "../src/assets/AnamVR-Icon.webp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mb-20 mt-10 mx-auto px-6">
        {/* Main footer content in a row */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="flex items-center mb-6 lg:mb-0">
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
          <div className="flex flex-wrap text-xs md:text-base justify-center gap-x-3 sm:gap-x-6 gap-y-3 mb-6 lg:mb-0">
            <a
              href="/"
              aria-label="Homepage"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="https://shop.anamvr.com"
              aria-label="Shop"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Shop
            </a>
            <a
              href="/blog"
              aria-label="Blog"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Blog
            </a>
            <a
              href="/contact"
              aria-label="Contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="/our-team"
              aria-label="Our Team"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Our Team
            </a>
            <a
              href="/our-contributors"
              aria-label="Our Contributors"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Our Contributors
            </a>
          </div>

          {/* App download badges - UPDATED */}
          <div className="flex flex-row items-center sm:space-y-0 space-x-3 mb-6 lg:mb-0">
            <a
              href="https://apps.apple.com/ie/app/anamvr/id6499339767"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
            >
              <img
                src={appleBadge}
                alt="Download on the App Store"
                className="h-8 sm:h-10 w-auto"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.anamvr&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
            >
              <img
                src={androidBadge}
                alt="Get it on Google Play"
                className="h-8 sm:h-10 w-auto"
              />
            </a>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/anamvr/"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/anamvrhealthcare/"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/anamvrhealthcare/"
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
              aria-label="Privacy Policy"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              aria-label="Terms of Service"
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
