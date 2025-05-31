"use client";

import androidBadge from "../src/assets/googlebadge.svg";
import appleBadge from "../src/assets/appstorebadge.svg";
import assemblyLogo from "../src/assets/AnamVR-IconNoBg.webp";
import spineLogo from "../src/assets/AnamVR-IconNoBg.webp";
import paretoLogo from "../src/assets/AnamVR-IconNoBg.webp";
import AppMockupLanding from "../src/assets/AppMockupLanding.webp";

const trustedLogos = [assemblyLogo, spineLogo, paretoLogo];

export default function LandingPage() {
  return (
    <div className="w-full min-h-[710px] py-28 px-16 bg-gradient-to-br from-[#FFE3ED] to-[#F7D1C3] transition-opacity duration-700 ease-out">
      <div className="max-w-7xl mx-auto md:px-6 lg:px-8">
        {/* Main Hero Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left side */}
          <div className="lg:w-2/3 w-full">
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-5xl text-center lg:text-start font-bold text-[#2b2b2b] mb-8 leading-tight">
                Reshape Your Relationship with Mental Health
              </h1>
              <p className="text-lg md:text-xl text-center lg:text-start text-[#545454] mb-10">
                AnamVR combines virtual reality with evidence-based therapeutic
                techniques to help you manage emotions and make life easier.
              </p>
              <div className="flex flex-row items-center justify-center lg:justify-start gap-2 md:gap-4">
                <a
                  href="https://apps.apple.com/ie/app/anamvr/id6499339767"
                  target="_blank"
                  arial-label="Get it on App Store"
                  rel="noopener noreferrer"
                >
                  <img
                    src={appleBadge}
                    alt="Get it on App Store"
                    className="h-10 md:h-12 lg:h-14"
                    width="135"
                    height="45"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.anamvr&hl=en"
                  target="_blank"
                  arial-label="Get it on Google Play"
                  rel="noopener noreferrer"
                >
                  <img
                    src={androidBadge}
                    alt="Get it on Google Play"
                    className="h-10 md:h-12 lg:h-14"
                    width="135"
                    height="45"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Mockup */}
          <div className="lg:w-1/3 w-full flex mb-12 lg:mb-0 items-start justify-start mt-6 lg:mt-0 lg:items-center lg:justify-center">
            <div className="relative w-full max-w-[420px] h-fit lg:h-[600px] flex items-start justify-start lg:items-center lg:justify-center">
              <img
                src={AppMockupLanding || "/placeholder.svg"}
                width="384"
                height="768"
                alt="AnamVR App Mockup"
                fetchPriority="high"
                decoding="async"
                loading="lazy"
                className="w-64 md:w-80 lg:w-96 h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
