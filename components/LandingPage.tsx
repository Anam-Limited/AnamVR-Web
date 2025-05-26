"use client";

import androidBadge from "../src/assets/googlebadge.svg";
import appleBadge from "../src/assets/appstorebadge.svg";
import assemblyLogo from "../src/assets/AnamVR-IconNoBg.png";
import spineLogo from "../src/assets/AnamVR-IconNoBg.png";
import paretoLogo from "../src/assets/AnamVR-IconNoBg.png";
import mockup1 from "../src/assets/iphone1.avif";
import mockup2 from "../src/assets/iphone2.avif";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const trustedLogos = [assemblyLogo, spineLogo, paretoLogo];

export default function LandingPage() {
  const heroAnimation = useScrollAnimation();
  const headingAnimation = useScrollAnimation({ delay: 100 });
  const paragraphAnimation = useScrollAnimation({ delay: 200 });
  const iosButtonAnimation = useScrollAnimation({ delay: 300 });
  const androidButtonAnimation = useScrollAnimation({ delay: 400 });
  const logosAnimation = useScrollAnimation({ delay: 500 });
  const imageAnimation = useScrollAnimation({ delay: 600 });

  return (
    <div
      className="px-6 md:px-12 min-h-[860px] items-center flex justify-center"
      style={{
        background:
          "linear-gradient(to bottom right, rgb(255, 255, 255), rgb(234, 207, 255), rgb(168, 137, 240))",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Section */}

        <div
          ref={heroAnimation.ref}
          className={`flex flex-col-reverse lg:mt-20 mx-4 md:mx-10 lg:mx-12 mt-36 lg:flex-row items-center justify-between lg:space-x-12 transition-opacity duration-700 ease-out ${
            heroAnimation.isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          {/* Left side */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div
              ref={headingAnimation.ref}
              className={`transition-opacity duration-700 ease-out ${
                headingAnimation.isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <h1 className="text-4xl z-50 md:text-6xl font-semibold leading-tight text-black">
                Reshape your
                <span className="text-[#7745b8]"> Relationship</span> with
                <span className="text-[#7745b8]"> Mental Health</span>
              </h1>
            </div>
            <div
              ref={paragraphAnimation.ref}
              className={`transition-opacity duration-700 ease-out ${
                paragraphAnimation.isVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <p className="text-lg text-[#7745b8]/80 font-medium">
                AnamVR combines virtual reality with evidence-based therapeutic
                techniques to help you manage emotions and make life easier.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start justify-start gap-2 md:gap-4">
              <div
                ref={iosButtonAnimation.ref}
                className={`transition-opacity duration-700 ease-out ${
                  iosButtonAnimation.isVisible ? "animate-fade-in" : "opacity-0"
                }`}
              >
                <a href="/download">
                  <img
                    src={appleBadge}
                    alt="Get it on Google Play"
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

            {/* Trusted by slider - Fixed */}
            <div
              ref={logosAnimation.ref}
              className={`pt-4 pb-10 flex flex-col items-start transition-opacity duration-700 ease-out ${
                logosAnimation.isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <p className="text-gray-600 font-medium mr-8">
                Trusted by the world’s leading organizations ↘︎
              </p>
              <div className="relative pt-2 overflow-hidden flex-1">
                {/* Inner container with double content for seamless loop */}
                <div className="flex whitespace-nowrap">
                  {/* First set of logos */}
                  <div className="flex items-center justify-center gap-4">
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
          <div
            ref={imageAnimation.ref}
            className={`relative w-full lg:w-1/2 h-[700px] lg:h-[750px] mb-12 lg:mb-0 transition-opacity duration-700 ease-out ${
              imageAnimation.isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            {/* Main center/right phone (mockup2 from original code, now acting as the primary large one) */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-[30%] -translate-y-[45%] z-20">
              <div className="relative">
                <img
                  src={mockup2 || "/placeholder.svg"} // Assuming mockup2 is the main large one now
                  alt="AnamVR App Dashboard"
                  className="w-72 md:w-80 lg:w-96 h-auto rounded-3xl"
                />
                {/* Feature highlight overlay for this phone */}
              </div>
            </div>

            {/* Top-left phone (mockup1 from original code, now smaller and to the left) */}
            <div className="absolute top-[15%] left-[5%] lg:left-[10%] transform -rotate-[15deg] z-10">
              <div className="relative">
                <img
                  src={mockup1 || "/placeholder.svg"}
                  alt="AnamVR App Main Screen"
                  className="w-60 md:w-64 lg:w-72 h-auto rounded-3xl"
                />
                {/* Optional: Add a small card if needed for this mockup */}
              </div>
            </div>

            {/* Decorative gradient elements (adjust if needed) */}
            <div className="absolute -bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-[#eacfff]/70 to-[#bcdbeb]/70 rounded-full opacity-50 blur-3xl -z-10"></div>
            <div className="absolute -top-16 left-5 w-56 h-56 bg-gradient-to-r from-[#e9ffdb]/70 to-[#eacfff]/70 rounded-full opacity-40 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
