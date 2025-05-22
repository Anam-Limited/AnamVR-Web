"use client";

import PhoneMockup from "../src/assets/mockup1.png";
import assemblyLogo from "../src/assets/AnamVR-IconNoBg.png";
import spineLogo from "../src/assets/AnamVR-IconNoBg.png";
import paretoLogo from "../src/assets/AnamVR-IconNoBg.png";
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
      className="px-6 md:px-12 min-h-[860px] py-12 items-center flex justify-center"
      style={{
        background:
          "linear-gradient(to bottom right, rgb(255, 255, 255), rgb(234, 207, 255), rgb(168, 137, 240))",
      }}
    >
      <div className="max-w-8xl lg:min-w-5xl mx-auto">
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
            <div className="flex flex-col items-start justify-start gap-2 md:flex-row md:gap-4">
              <div
                ref={iosButtonAnimation.ref}
                className={`transition-opacity duration-700 ease-out ${
                  iosButtonAnimation.isVisible ? "animate-fade-in" : "opacity-0"
                }`}
              >
                <button className="px-6 py-3 bg-white text-[#7745b8]/80 hover:bg-[#7745b8] hover:text-white rounded-full font-medium shadow transition-colors flex items-center">
                  Download iOS
                </button>
              </div>
              <div
                ref={androidButtonAnimation.ref}
                className={`transition-opacity duration-700 ease-out ${
                  androidButtonAnimation.isVisible
                    ? "animate-fade-in"
                    : "opacity-0"
                }`}
              >
                <button className="px-6 py-3 bg-white text-[#7745b8]/80 hover:bg-[#7745b8] hover:text-white rounded-full font-medium shadow transition-colors flex items-center">
                  Download Android
                </button>
              </div>
            </div>

            {/* Trusted by slider - Fixed */}
            <div
              ref={logosAnimation.ref}
              className={`pt-4 flex flex-col items-start transition-opacity duration-700 ease-out ${
                logosAnimation.isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
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
          <div
            ref={imageAnimation.ref}
            className={`max-w-fit lg:w-1/2 mb-12 lg:mb-0 transition-opacity duration-700 ease-out ${
              imageAnimation.isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
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
