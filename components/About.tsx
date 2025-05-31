"use client";

import { useState } from "react";
import assemblyLogo from "../src/assets/AnamVR-IconNoBg.webp";
import spineLogo from "../src/assets/AnamVR-IconNoBg.webp";
import paretoLogo from "../src/assets/AnamVR-IconNoBg.webp";
import team from "../src/assets/team.webp";
import { Download } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const trustedLogos = [assemblyLogo, spineLogo, paretoLogo];

export default function AboutUs() {
  const missionAnim = useScrollAnimation({ threshold: 0.2 });
  const journeyAnim = useScrollAnimation({ threshold: 0.2 });
  const founderAnim = useScrollAnimation({ threshold: 0.2 });

  // Additional scroll animations for future sections
  const headerAnimation = useScrollAnimation();
  const benefitsAnimation = useScrollAnimation({ threshold: 0.2 });
  const businessGainsAnimation = useScrollAnimation({ threshold: 0.2 });
  const demoAnimation = useScrollAnimation({ threshold: 0.2 });
  const testimonialAnimation = useScrollAnimation({ threshold: 0.2 });

  const benefitAnimations = [
    useScrollAnimation({ delay: 100 }),
    useScrollAnimation({ delay: 200 }),
    useScrollAnimation({ delay: 300 }),
    useScrollAnimation({ delay: 400 }),
    useScrollAnimation({ delay: 500 }),
    useScrollAnimation({ delay: 600 }),
  ];

  return (
    <>
      {/* Hero Section with dark teal background */}
      <div className="relative min-h-[860px] bg-purple-200 px-6 md:px-12 py-24">
        {/* Abstract background elements with better positioning and opacity */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#7745B8] blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-[#487CE5] blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#F97316] blur-3xl"></div>
        </div>
        <div className="max-w-7xl mt-20 mx-auto">
          <h1
            ref={headerAnimation.ref}
            className={`text-4xl lg:text-5xl font-bold text-black mb-20 transition-opacity duration-700 ${
              headerAnimation.isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            About
          </h1>

          <div className="flex flex-col gap-28">
            {/* Our mission section */}
            <div
              ref={missionAnim.ref}
              className={`${missionAnim.isVisible ? "animate-slide-up" : "opacity-0"} transition-opacity duration-700`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
                <div className="md:col-span-1">
                  <h2 className="text-3xl lg:text-end text-start pr-12 font-bold text-black">
                    Our mission
                  </h2>
                </div>
                <div className="md:col-span-2">
                  <p className="text-black/90 text-lg leading-relaxed">
                    At AnamVR, our mission is to make mental wellbeing support
                    universally accessible, deeply engaging, and rooted in
                    evidence. We believe that wherever you are, you deserve
                    tools that support your emotional and mental health in a way
                    that is personal, effective, and even enjoyable. We’re not
                    just building a platform — we’re creating a new standard in
                    how therapeutic support is delivered: combining psychology,
                    immersive technology, and game design to support real,
                    lasting change.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Journey section */}
            <div
              ref={journeyAnim.ref}
              className={`${journeyAnim.isVisible ? "animate-slide-up" : "opacity-0"} transition-opacity duration-700`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
                <div className="md:col-span-1">
                  <h2 className="text-3xl lg:text-end text-start pr-12 font-bold text-black">
                    Our Journey
                  </h2>
                </div>
                <div className="md:col-span-2">
                  <p className="text-black/90 text-lg leading-relaxed">
                    AnamVR began with a simple, powerful question: what if the
                    tools to support your mental health were as engaging as your
                    favourite app, as immersive as your favourite film, and as
                    accessible as your phone? Founded at the intersection of
                    psychology and technology, we started with a mission to
                    reduce the barriers to care — cost, access, and stigma. We
                    partnered with clinicians, researchers, and developers to
                    build a platform that delivers evidence-based therapeutic
                    content through smartphone-powered VR. Today, our journey
                    continues as we expand our reach, evolve our technology, and
                    deepen our impact. From students and frontline workers to
                    global teams and underserved communities, we’re helping
                    people reconnect with themselves — one immersive experience
                    at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Founders Section - Improved spacing and design */}
      <section className="py-24 bg-[#F8F9FC] pb-48">
        <div
          ref={founderAnim.ref}
          className={`${founderAnim.isVisible ? "animate-slide-up" : "opacity-0"} transition-opacity duration-700 max-w-6xl mx-auto px-6`}
        >
          {/* Section Title */}
          <div className="text-start mb-16">
            <h2 className="text-black text-5xl md:text-6xl font-bold mt-2">
              <span className="relative inline-block">
                <span className="relative z-10">The Founders</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#487ce5]/30 -z-10"></span>
              </span>
            </h2>
          </div>

          {/* Founder Content - Improved layout */}
          <div className="mt-8">
            <div className="flex flex-col gap-16 items-center">
              <div
                ref={benefitsAnimation.ref}
                className={`${benefitsAnimation.isVisible ? "animate-slide-up" : "opacity-0"} transition-opacity duration-700 w-full`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
                  <p className="text-[#2D2D2D] mb-6 text-lg leading-relaxed">
                    <span className="font-semibold text-[#6035A9]">
                      Pierce O'Brien [left]:
                    </span>{" "}
                    As a skilled game designer and developer, Pierce co-founded
                    AnamVR, infusing creativity and innovation into our
                    platform. His passion for creating immersive experiences
                    fosters a unique approach to mental wellness through
                    gamification.
                  </p>
                  <p className="text-[#2D2D2D] mb-6 text-lg leading-relaxed">
                    <span className="font-semibold text-[#3A66CC]">
                      Rob Sheridan [right]:
                    </span>{" "}
                    As a qualified Psychotherapist and member of the Irish
                    Association of Counselling Psychotherapists (IACP),
                    specialising in cognitive behavioural therapy (CBT), Rob
                    brings invaluable insight as the co-founder of AnamVR. His
                    dedication to mental wellness and understanding of
                    therapeutic techniques drives the foundation of our
                    platform.
                  </p>
                </div>
              </div>
              <div
                ref={demoAnimation.ref}
                className={`${demoAnimation.isVisible ? "animate-slide-up" : "opacity-0"} transition-opacity duration-700`}
              >
                <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-md transform hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src={team || "/placeholder.svg"}
                    alt="Team"
                    className="w-full h-auto object-fill object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
