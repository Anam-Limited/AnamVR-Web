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
    <div className="px-6 md:px-12 lg:pt-14 min-h-[720px] bg-gradient-to-br from-[#FFE3ED] to-[#F7D1C3] items-center flex justify-center">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Section */}
        <div
          ref={heroAnimation.ref}
          className={`flex flex-col lg:mt-0 mx-4 md:mx-10 lg:mx-12 mt-36 lg:flex-row items-center justify-between lg:space-x-12 transition-opacity duration-700 ease-out ${
            heroAnimation.isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          {/* Left side */}
          <div className="w-full lg:w-7/12 space-y-6 text-center md:text-start">
            <div
              ref={headingAnimation.ref}
              className={`transition-opacity duration-700 ease-out ${
                headingAnimation.isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
              {/* Updated title: Oxygen bold font, size 60, two lines */}
              <h1 className="font-['Oxygen'] text-[#2b2b2b] font-bold text-[52px] leading-[1.3]">
                Reshape Your Relationship with Mental Health
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
                <a
                  href="https://apps.apple.com/ie/app/anamvr/id6499339767"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Made badges slightly smaller */}
                  <img
                    src={appleBadge}
                    alt="Get it on App Store"
                    className="h-10 md:h-12 lg:h-14"
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
                <a
                  href="https://play.google.com/store/apps/details?id=com.anamvr&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Made badges slightly smaller */}
                  <img
                    src={androidBadge}
                    alt="Get it on Google Play"
                    className="h-10 md:h-12 lg:h-14"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Scaled down mockup */}
          <div
            ref={imageAnimation.ref}
            className={`w-full pb-14 lg:w-5/12 mt-12 flex justify-center lg:justify-end transition-opacity duration-700 ease-out ${
              imageAnimation.isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            {/* Reduced max-width classes to scale down the mockup */}
            <div className="relative max-w-xs md:max-w-sm lg:max-w-md">
              <img
                src={AppMockupLanding || "/placeholder.svg"}
                alt="AnamVR App Mockup"
                className="w-96 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
