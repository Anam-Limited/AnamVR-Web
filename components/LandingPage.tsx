"use client";

import androidBadge from "../src/assets/googlebadge.svg";
import appleBadge from "../src/assets/appstorebadge.svg";
import assemblyLogo from "../src/assets/AnamVR-IconNoBg.png";
import spineLogo from "../src/assets/AnamVR-IconNoBg.png";
import paretoLogo from "../src/assets/AnamVR-IconNoBg.png";
import AppMockupLanding from "../src/assets/AppMockupLanding.png";
import AppMockupVR from "../src/assets/AppMockupVR.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const trustedLogos = [assemblyLogo, spineLogo, paretoLogo];

export default function LandingPage() {
  const heroAnimation = useScrollAnimation();
  const headingAnimation = useScrollAnimation({ delay: 100 });
  const paragraphAnimation = useScrollAnimation({ delay: 200 });
  const iosButtonAnimation = useScrollAnimation({ delay: 300 });
  const androidButtonAnimation = useScrollAnimation({ delay: 400 });
  const imageAnimation = useScrollAnimation({ delay: 600 });

  return (
    <div className="px-6 md:px-12 min-h-[880px] bg-gradient-to-br from-[#FFE3ED] to-[#F7D1C3] items-center flex justify-center">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Section */}
        <div
          ref={heroAnimation.ref}
          className={`flex flex-col lg:mt-0 mx-4 md:mx-10 lg:mx-12 mt-36 lg:flex-row items-center justify-between lg:space-x-12 transition-opacity duration-700 ease-out ${
            heroAnimation.isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          {/* Left side */}
          <div className="w-full lg:w-1/2 space-y-6 text-center md:text-start">
            <div
              ref={headingAnimation.ref}
              className={`transition-opacity duration-700 ease-out ${
                headingAnimation.isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <h1 className="text-4xl z-50 md:text-6xl font-semibold leading-spacious text-[#2b2b2b]">
                Reshape your Relationship with Mental Health
              </h1>
            </div>
            <div
              ref={paragraphAnimation.ref}
              className={`transition-opacity duration-700 ease-out ${
                paragraphAnimation.isVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <p className="text-lg text-[#2b2b2b] font-medium">
                AnamVR combines virtual reality with evidence-based therapeutic
                techniques to help you manage emotions and make life easier.
              </p>
            </div>
            <div className="flex flex-row items-center justify-center md:justify-start gap-2 md:gap-4">
              <div
                ref={iosButtonAnimation.ref}
                className={`transition-opacity duration-700 ease-out ${
                  iosButtonAnimation.isVisible ? "animate-fade-in" : "opacity-0"
                }`}
              >
                <a href="/download">
                  <img
                    src={appleBadge}
                    alt="Get it on App Store"
                    className="h-12 md:h-14 lg:h-16"
                  />
                </a>
              </div>
              <div
                ref={androidButtonAnimation.ref}
                className={`transition-opacity duration-700 ease-out ${
                  androidButtonAnimation.isVisible
                    ? "animate-fade-in"
                    : "opacity-0"
                }`}
              >
                <a href="/download">
                  <img
                    src={androidBadge}
                    alt="Get it on Google Play"
                    className="h-12 md:h-14 lg:h-16"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Simplified and responsive */}
          <div
            ref={imageAnimation.ref}
            className={`w-full pb-14 md:pb-0 lg:w-1/2 mt-12 flex justify-center lg:justify-end transition-opacity duration-700 ease-out ${
              imageAnimation.isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="relative max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src={AppMockupLanding || "/placeholder.svg"}
                alt="AnamVR App Mockup"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
