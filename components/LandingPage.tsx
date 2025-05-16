"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import PhoneMockup from "../src/assets/mockup1.png";
import anamvrLogo from "../src/assets/AnamVR-IconNoBg.png";
import elements from "../src/assets/elements.png";

// Trusted logos
import assemblyLogo from "../src/assets/AnamVR-IconNoBg.png";
import spineLogo from "../src/assets/AnamVR-IconNoBg.png";
import paretoLogo from "../src/assets/AnamVR-IconNoBg.png";
import avonLogo from "../src/assets/AnamVR-IconNoBg.png";
import fountainLogo from "../src/assets/AnamVR-IconNoBg.png";
import rebetLogo from "../src/assets/AnamVR-IconNoBg.png";

const trustedLogos = [assemblyLogo, spineLogo, paretoLogo];

export default function LandingPage() {
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
    <div
      className="px-6 md:px-12 min-h-[815px] py-12 items-center flex justify-center"
      style={{
        background:
          "linear-gradient(to bottom right, rgb(255, 255, 255), rgb(234, 207, 255), rgb(168, 137, 240))",
      }}
    >
      <div className="max-w-8xl lg:min-w-5xl mx-auto">
        {/* Main Hero Section */}
        <header
          className={`flex items-center min-w-full lg:min-w-5xl mx-auto justify-between py-4 px-24 md:px-24 fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur-md shadow-sm"
              : "bg-transparent"
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
        <div className="flex flex-col-reverse lg:mt-20 mx-4 md:mx-10 lg:mx-12 mt-36 lg:flex-row items-center justify-between lg:space-x-12">
          {/* Left side */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl z-50 md:text-6xl font-semibold leading-tight text-black">
              Reshape your<span className="text-[#7745b8]"> Relationship</span>{" "}
              with
              <span className="text-[#7745b8]"> Mental Health</span>{" "}
            </h1>
            <p className="text-lg text-[#7745b8]/80 font-medium">
              AnamVR combines virtual reality with evidence-based therapeutic
              techniques to help you manage emotions and make life easier.
            </p>
            <div className="flex flex-col items-start justify-start gap-2 md:flex-row md:gap-4">
              <button className="px-6 py-3 bg-white text-[#7745b8]/80 hover:bg-[#7745b8] hover:text-white rounded-full font-medium shadow transition-colors flex items-center">
                Download iOS{" "}
              </button>
              <button className="px-6 py-3 bg-white text-[#7745b8]/80 hover:bg-[#7745b8] hover:text-white rounded-full font-medium shadow transition-colors flex items-center">
                Download Android{" "}
              </button>
            </div>

            {/* Trusted by slider - Fixed */}
            <div className="pt-4 flex flex-col items-start">
              <p className="text-gray-600 font-medium mr-8">
                Trusted by the world’s leading organizations ↘︎
              </p>
              <div className="relative overflow-hidden flex-1">
                {/* Inner container with double content for seamless loop */}
                <div className="flex whitespace-nowrap">
                  {/* First set of logos */}
                  <div className="flex items-center justify-center gap-4 animate-marquee">
                    {trustedLogos.map((logo) => (
                      <div className="flex-shrink-0">
                        <img
                          src={logo}
                          alt="Companies"
                          className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="max-w-fit lg:w-1/2 mb-12 lg:mb-0">
            <img
              src={PhoneMockup || "/placeholder.svg"}
              alt="AnamVR App"
              className="w-52 h-autorounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
