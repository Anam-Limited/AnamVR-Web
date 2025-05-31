"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import caraMascot from "../src/assets/Cara.webp";

type TestimonialType = {
  id: string;
  name: string;
  initial: string;
  role: string;
  quote: string;
  recommended: number;
};

const testimonialData: TestimonialType[] = [
  {
    id: "1",
    name: "Sarah J.",
    initial: "S",
    role: "Sleep Improvement",
    quote:
      "The CBT lessons taught me practical techniques I use daily. My sleep has improved dramatically, and I feel more in control of my thoughts.",
    recommended: 100,
  },
  {
    id: "2",
    name: "Emma R.",
    initial: "E",
    role: "Work-Life Balance",
    quote:
      "I've tried many mental health apps, but this is the only one that offers such a comprehensive approach. The combination of tracking, learning, and practicing is perfect.",
    recommended: 100,
  },
  {
    id: "3",
    name: "Priya K.",
    initial: "P",
    role: "Stress Management",
    quote:
      "I was skeptical about VR therapy, but it's been transformative. The immersive exercises helped me practice mindfulness in a way traditional methods never could.",
    recommended: 100,
  },
  {
    id: "4",
    name: "Michael T.",
    initial: "M",
    role: "Depression Recovery",
    quote:
      "The guided meditations in the Relief Hub have been a lifeline during my darkest moments. I've learned to create space between my thoughts and feelings.",
    recommended: 100,
  },
  {
    id: "5",
    name: "David L.",
    initial: "D",
    role: "Anxiety Management",
    quote:
      "The mood tracking feature has completely changed how I understand my anxiety patterns. I can now identify triggers before they escalate.",
    recommended: 100,
  },
  {
    id: "6",
    name: "James W.",
    initial: "J",
    role: "Panic Attack Management",
    quote:
      "The VR exercises helped me practice breathing techniques in simulated stressful situations. Now I can apply them in real life with confidence.",
    recommended: 100,
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const testimonials = testimonialData;
  const testimonialAnimation = useScrollAnimation();

  // Responsive cards to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1); // Show 2 cards on mobile
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2); // Show 2 cards on tablet
      } else {
        setCardsToShow(3); // Show 3 cards on desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Color schemes for different testimonial cards
  const colorSchemes = [
    {
      bg: "bg-[#ff6b6b]",
      accent: "#ff6b6b",
      text: "text-[#ff6b6b]",
      light: "bg-[#ff6b6b]/10",
    },
    {
      bg: "bg-[#ff9f43]",
      accent: "#ff9f43",
      text: "text-[#ff9f43]",
      light: "bg-[#ff9f43]/10",
    },
    {
      bg: "bg-[#54a0ff]",
      accent: "#54a0ff",
      text: "text-[#54a0ff]",
      light: "bg-[#54a0ff]/10",
    },
    {
      bg: "bg-[#5f27cd]",
      accent: "#5f27cd",
      text: "text-[#5f27cd]",
      light: "bg-[#5f27cd]/10",
    },
    {
      bg: "bg-[#00d2d3]",
      accent: "#00d2d3",
      text: "text-[#00d2d3]",
      light: "bg-[#00d2d3]/10",
    },
    {
      bg: "bg-[#ff6348]",
      accent: "#ff6348",
      text: "text-[#ff6348]",
      light: "bg-[#ff6348]/10",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + cardsToShow >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - cardsToShow) : prev - 1
    );
  };

  const canGoNext = currentIndex + cardsToShow < testimonials.length;
  const canGoPrev = currentIndex > 0;

  return (
    <div
      ref={testimonialAnimation.ref}
      className={`max-w-7xl mx-auto mt-8 sm:mt-16 px-3 sm:px-4 py-8 sm:py-16 transition-opacity duration-700 ease-out ${
        testimonialAnimation.isVisible ? "animate-slide-up" : "opacity-0"
      }`}
    >
      <div className="flex flex-col justify-center lg:flex-row items-center mb-8 sm:mb-16 gap-4 sm:gap-8">
        {/* Header Content */}
        <div className="flex flex-col text-center gap-2 sm:gap-4">
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#7745b8] pb-2 sm:pb-4">
            What our users are saying
          </h3>
          <p className="text-[#7745b8] text-base sm:text-lg max-w-2xl px-4 sm:px-0">
            Join thousands of people who have transformed their relationship
            with mental health using our platform.
          </p>
        </div>
      </div>

      {/* Anam Mascot */}
      <div className="absolute top-64 left-60 -z-10 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
        <img
          src={caraMascot || "/placeholder.svg"}
          alt="Cara mascot"
          className="w-32 h-32 lg:w-40 lg:h-40 object-contain"
        />
      </div>

      {/* Carousel Container */}
      <div className="relative z-10 mb-8">
        {/* Carousel Track with proper padding to prevent cutoff */}
        <div className="overflow-hidden px-2 sm:px-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              gap: window.innerWidth < 640 ? "15px" : "20px",
            }}
          >
            {testimonials.map((testimonial, idx) => {
              const color = colorSchemes[idx % colorSchemes.length];
              return (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 bg-white border rounded-2xl sm:rounded-3xl shadow-sm transition-all duration-300 hover:shadow-lg mx-1 sm:mx-2"
                  style={{
                    borderColor: color.accent,
                    width: `calc(${100 / cardsToShow}% - ${window.innerWidth < 640 ? "24px" : "40px"})`,
                    minHeight: window.innerWidth < 640 ? "300px" : "280px",
                  }}
                >
                  {/* Card content with Headspace-inspired minimal design */}
                  <div className="p-5 sm:p-7 h-full flex flex-col">
                    {/* Quote Text - Headspace style with larger text */}
                    <div className="flex-1 mb-6">
                      <p className="text-[#2d2d2d] leading-relaxed text-base sm:text-lg font-normal">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Bottom section with user info */}
                    <div className="mt-auto space-y-3">
                      {/* User info */}
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0"
                          style={{ backgroundColor: color.accent }}
                        >
                          {testimonial.initial}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-sm sm:text-base text-[#2d2d2d]">
                            {testimonial.name}
                          </h3>
                          <h4 className="font-normal text-xs sm:text-sm text-gray-600">
                            Member on {testimonial.role.toLowerCase()}
                          </h4>
                        </div>
                      </div>

                      {/* Recommended Badge */}
                      <div>
                        <div
                          className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium"
                          style={{
                            backgroundColor: `${color.accent}15`,
                            color: color.accent,
                          }}
                        >
                          Recommended {testimonial.recommended}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls - Headspace style */}
        <div className="flex justify-center items-center mt-6 sm:mt-8 gap-3 px-4">
          <button
            onClick={prevSlide}
            disabled={!canGoPrev}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-0 flex items-center justify-center transition-all duration-200 ${
              canGoPrev
                ? "text-black hover:bg-black/10 cursor-pointer hover:shadow-xl"
                : "text-gray-300 cursor-not-allowed"
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={!canGoNext}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-0 flex items-center justify-center transition-all duration-200 ${
              canGoNext
                ? "text-black hover:bg-black/10 cursor-pointer hover:shadow-xl"
                : "text-gray-300 cursor-not-allowed"
            }`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
