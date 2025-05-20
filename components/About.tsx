"use client";

import { useState } from "react";
import assemblyLogo from "../src/assets/AnamVR-IconNoBg.png";
import spineLogo from "../src/assets/AnamVR-IconNoBg.png";
import paretoLogo from "../src/assets/AnamVR-IconNoBg.png";
import team from "../src/assets/team.jpg";
import {
  ArrowRight,
  Globe,
  Brain,
  Sparkles,
  Heart,
  ChevronRight,
  Download,
} from "lucide-react";

const trustedLogos = [assemblyLogo, spineLogo, paretoLogo];

// Refined color palette with better contrast and harmony
const colors = {
  primary: {
    dark: "#6035A9", // Deeper purple, more professional
    medium: "#7745B8", // Your original purple
    light: "#EFE5FA", // Softer light purple
  },
  secondary: {
    dark: "#3A66CC", // Deeper blue
    medium: "#487CE5", // Your original blue
    light: "#E2EBFA", // Softer light blue
  },
  accent: {
    green: "#36A269", // Richer green
    red: "#E0455E", // Warmer red
    orange: "#F97316", // Vibrant orange
    yellow: "#F0C000", // Richer yellow
  },
  neutral: {
    dark: "#2D2D2D", // Near black
    medium: "#545454", // Dark gray
    light: "#F8F9FC", // Off-white
  },
};

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <>
      {/* Hero Section with improved gradient background */}
      <div className="relative min-h-[860px] px-6 md:px-12 py-24 flex items-center bg-gradient-to-br from-[#eacfff] to-[#bcdbeb] overflow-hidden">
        {/* Abstract background elements with better positioning and opacity */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#7745B8] blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-[#487CE5] blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#F97316] blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Main Hero Section */}
          <div className="flex flex-col gap-8 items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight bg-gradient-to-r from-[#6035A9] to-[#3A66CC] text-transparent bg-clip-text">
              Know more about AnamVR
            </h1>

            <p className="text-xl text-[#2D2D2D] text-center mb-8 leading-relaxed max-w-3xl">
              AnamVR combines virtual reality with evidence-based therapeutic
              techniques to help you manage emotions and make life easier. Our
              mission is to make mental wellness accessible to everyone,
              everywhere.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/download"
                className="inline-flex items-center bg-[#6035A9] text-white hover:bg-[#7745B8] px-8 py-4 rounded-full font-medium transition-colors duration-300 shadow-lg shadow-[#6035A9]/20"
              >
                Download our app <Download size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Founders Section - Improved spacing and design */}
      <section className="py-24 bg-[#F8F9FC]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider text-[#6035A9] uppercase">
              Our Team
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-[#6035A9] to-[#3A66CC] text-transparent bg-clip-text">
              The Founders
            </h2>
          </div>

          {/* Founder Content - Improved layout */}
          <div className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-[#2D2D2D] mb-6 text-lg leading-relaxed">
                  <span className="font-semibold text-[#6035A9]">
                    Pierce O'Brien [left]:
                  </span>{" "}
                  As a skilled game designer and developer, Pierce co-founded
                  AnamVR, infusing creativity and innovation into our platform.
                  His passion for creating immersive experiences fosters a
                  unique approach to mental wellness through gamification.
                </p>
                <p className="text-[#2D2D2D] mb-6 text-lg leading-relaxed">
                  <span className="font-semibold text-[#3A66CC]">
                    Rob Sheridan [right]:
                  </span>{" "}
                  As a qualified Psychotherapist and member of the Irish
                  Association of Counselling Psychotherapists (IACP),
                  specialising in cognitive behavioural therapy (CBT), Rob
                  brings invaluable insight as the co-founder of AnamVR. His
                  dedication to mental wellness and understanding of therapeutic
                  techniques drives the foundation of our platform.
                </p>
                <p className="text-[#2D2D2D] mb-6 text-lg leading-relaxed">
                  Rob and Pierce lead AnamVR with a shared vision to
                  revolutionise mental wellness, blending therapeutic principles
                  with cutting-edge technology for a transformative user
                  experience.
                </p>
              </div>
              <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={team || "/placeholder.svg"}
                  alt="Team"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence-based outcomes section - Improved stats cards */}
      <section className="py-28 bg-[#F8F9FC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider text-[#6035A9] uppercase">
              Real Results
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-[#6035A9] to-[#3A66CC] text-transparent bg-clip-text">
              Our Impact
            </h2>
            <p className="text-lg text-[#545454] max-w-2xl mx-auto mt-4">
              Real-world results from our users show significant improvements in
              mental wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Stress Reduction Stats Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#E2EBFA] hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="bg-[#E2EBFA] p-4 rounded-2xl mb-6">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="60"
                    height="60"
                    rx="30"
                    fill="#3A66CC"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M15 20H45V40C45 42.7614 42.7614 45 40 45H20C17.2386 45 15 42.7614 15 40V20Z"
                    fill="#3A66CC"
                  />
                  <circle cx="30" cy="30" r="10" fill="#F0C000" />
                </svg>
              </div>
              <h3 className="text-5xl font-bold text-[#3A66CC] mb-2">32%</h3>
              <p className="text-[#545454] mb-4">
                less stress in 30 days of using AnamVR
              </p>
            </div>

            {/* Productivity Stats Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#FAF2D7] hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="bg-[#FAF2D7] p-4 rounded-2xl mb-6">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="60"
                    height="60"
                    rx="30"
                    fill="#F0C000"
                    fillOpacity="0.1"
                  />
                  <path d="M30 15L40 35H20L30 15Z" fill="#F0C000" />
                  <path d="M35 25L45 45H25L35 25Z" fill="#F0C000" />
                </svg>
              </div>
              <h3 className="text-5xl font-bold text-[#F0C000] mb-2">3+</h3>
              <p className="text-[#545454] mb-4">
                more productive days after 30 days*
              </p>
            </div>

            {/* Anxiety Stats Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#D8F0E3] hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="bg-[#D8F0E3] p-4 rounded-2xl mb-6">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="60"
                    height="60"
                    rx="30"
                    fill="#36A269"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M30 15L35.3 25.7L47 27.1L38.5 35.4L40.6 47L30 41.5L19.4 47L21.5 35.4L13 27.1L24.7 25.7L30 15Z"
                    fill="#36A269"
                  />
                </svg>
              </div>
              <h3 className="text-5xl font-bold text-[#36A269] mb-2">59%</h3>
              <p className="text-[#545454] mb-4">
                of members* experienced improvement in anxiety symptoms
              </p>
            </div>

            {/* Depression Stats Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#FBE5D9] hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="bg-[#FBE5D9] p-4 rounded-2xl mb-6">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="60"
                    height="60"
                    rx="30"
                    fill="#F97316"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M30 15V45M15 30H45"
                    stroke="#F97316"
                    strokeWidth="8"
                  />
                </svg>
              </div>
              <h3 className="text-5xl font-bold text-[#F97316] mb-2">70%</h3>
              <p className="text-[#545454] mb-4">
                of members* experienced improvement in depression symptoms
              </p>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-[#545454]">
            * Based on user surveys and clinical trials
          </div>
        </div>
      </section>

      {/* Partners Section - Improved design */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider text-[#6035A9] uppercase">
              Partnerships
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 bg-gradient-to-r from-[#6035A9] to-[#3A66CC] text-transparent bg-clip-text">
              Trusted by our partners
            </h2>
            <p className="text-lg text-[#545454] max-w-2xl mx-auto mt-4">
              We collaborate with industry leaders to deliver the best mental
              wellness solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-16 py-12 px-8 rounded-3xl">
            {trustedLogos.map((logo, index) => (
              <div
                key={index}
                className="w-32 md:w-40 p-6 rounded-xl bg-white shadow-sm transform hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={logo || "/placeholder.svg"}
                  alt="Partner logo"
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - New section */}
      <section className="py-20 bg-gradient-to-r from-[#6035A9] to-[#3A66CC]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to improve your mental wellness?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Download AnamVR today and start your journey to better mental health
            with our innovative VR therapy platform.
          </p>
          <a
            href="/download"
            className="inline-flex items-center bg-white text-[#6035A9] hover:bg-[#EFE5FA] px-8 py-4 rounded-full font-medium transition-colors duration-300 shadow-lg"
          >
            Download now <Download size={18} className="ml-2" />
          </a>
        </div>
      </section>
    </>
  );
}
