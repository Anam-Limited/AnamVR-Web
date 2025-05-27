"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const features = [
  {
    id: "mood-log",
    title: "Mood Log",
    color: "bg-[#BCDBEB]",
    textColor: "text-black",
    heading: "Track your emotions",
    subheading: "with daily mood logging",
    description:
      "Easily track your mood throughout the day, with the flexibility to log up to three times daily. Dive deeper into your emotional patterns and progress with our robust analytics, providing valuable insights into your mood fluctuations over time.",
  },
  {
    id: "relief-hub",
    title: "Relief Hub",
    color: "bg-[#F5C2D7]",
    textColor: "text-black",
    heading: "Find relief",
    subheading: "with guided meditations",
    description:
      "Find solace and support in our curated selection of situational-based meditations within the Relief Hub. Custom made to address various presentations of mood and anxiety-related issues, these meditations are designed to empower you to navigate life's challenges.",
  },
  {
    id: "lessons",
    title: "Lessons",
    color: "bg-[#B7EDBB]",
    textColor: "text-black",
    heading: "Learn CBT techniques",
    subheading: "with expert guidance",
    description:
      "Delve into the fundamentals of cognitive-behavioural therapy (CBT) with our engaging lessons. Learn practical strategies to apply CBT principles to your daily life, equipping yourself with a comprehensive toolkit to manage life's curveballs effectively.",
  },
  {
    id: "vr-hub",
    title: "VR Hub",
    color: "bg-[#FFF5BF]",
    textColor: "text-black",
    heading: "Immersive therapy",
    subheading: "with virtual reality",
    description:
      "By integrating virtual reality (VR), gamification, and CBT techniques, we ensure effective treatment is readily available in the comfort of your own home. Immerse yourself in our VR-based exercises aimed at enhancing anxiety management techniques.",
  },
];

export default function Description() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Scroll animations
  const headerAnimation = useScrollAnimation();
  const tabsAnimation = useScrollAnimation({ delay: 200 });
  const carouselAnimation = useScrollAnimation({ delay: 400 });

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  // Touch and mouse event handlers for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    handleSwipe(currentX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    handleSwipe(currentX);
  };

  const handleSwipeEnd = () => {
    setIsDragging(false);
  };

  const handleSwipe = (currentX: number) => {
    if (startX - currentX > 50) {
      // Swiped left
      handleNext();
      setIsDragging(false);
    } else if (currentX - startX > 50) {
      // Swiped right
      handlePrevious();
      setIsDragging(false);
    }
  };

  return (
    <div className="max-w-7xl mt-8 md:mt-16 mx-auto px-4 py-8 md:py-12">
      <div
        ref={headerAnimation.ref}
        className={`text-center text-[#7745b8] mb-10 md:mb-16 flex flex-col items-center 
            transition-opacity duration-700 ease-out 
            ${headerAnimation.isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <span className="font-semibold text-3xl md:text-5xl px-2 md:px-0">
          Empowering you on your journey
        </span>
        <span className="font-semibold text-3xl md:text-5xl px-2 md:px-0">
          towards better mental health
        </span>
      </div>

      {/* Tabs */}
      <div
        ref={tabsAnimation.ref}
        className={`flex justify-center mb-6 md:mb-8 transition-opacity duration-700 ease-out ${
          tabsAnimation.isVisible ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="flex space-x-1 md:space-x-2 p-1 bg-gray-300 rounded-full overflow-x-auto no-scrollbar max-w-full">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => handleTabClick(index)}
              className={`px-3 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-lg font-medium transition-all duration-200 whitespace-nowrap ${
                activeIndex === index
                  ? "bg-black text-white"
                  : "bg-transparent text-gray-700 hover:bg-gray-200"
              }`}
            >
              {feature.title}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={carouselAnimation.ref}
        className={`relative overflow-hidden rounded-xl md:rounded-3xl transition-opacity duration-900 ease-out ${
          carouselAnimation.isVisible ? "animate-slide-up" : "opacity-0"
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleSwipeEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleSwipeEnd}
        onMouseLeave={handleSwipeEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6"
          style={{
            transform: `translateX(calc(-${activeIndex * 100}% - ${
              activeIndex * (window.innerWidth < 768 ? 1 : 1.5)
            }rem))`,
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`w-full flex-shrink-0 ${feature.color} rounded-xl md:rounded-3xl overflow-hidden transition-all duration-700`}
            >
              <div className="flex flex-col-reverse md:grid md:grid-cols-2 min-h-[400px] md:min-h-[550px] py-6">
                <div className="hidden md:flex items-center justify-center p-8 md:p-20">
                  {/* Placeholder for feature image or illustration */}
                  <div className="bg-white bg-opacity-20 rounded-2xl w-full h-4/5 flex items-center justify-center">
                    <span className="text-white text-5xl md:text-6xl">
                      {feature.id === "mood-log" && "📊"}
                      {feature.id === "relief-hub" && "🧘‍♀️"}
                      {feature.id === "lessons" && "📚"}
                      {feature.id === "vr-hub" && "🥽"}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-10 lg:p-16 flex flex-col justify-center transition-all duration-700 animate-fade-in">
                  <h2
                    className={`text-3xl md:text-4xl lg:text-5xl font-bold ${feature.textColor} mb-1 md:mb-2`}
                  >
                    {feature.heading}
                  </h2>
                  <h3
                    className={`text-xl md:text-2xl lg:text-3xl font-medium ${feature.textColor} opacity-90 mb-3 md:mb-6`}
                  >
                    {feature.subheading}
                  </h3>
                  <p
                    className={`text-base md:text-lg mb-4 md:mb-8 opacity-90 max-w-lg ${feature.textColor}`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows - positioned better for mobile */}
        <div className="hidden md:flex flex-row items-center mt-4 md:mt-6 justify-center gap-8">
          <button
            onClick={handlePrevious}
            className={`rounded-full p-2 md:p-3 transition-all bg-white backdrop-blur-sm ${
              activeIndex === 0
                ? "opacity-30 cursor-not-allowed pointer-events-none"
                : "hover:bg-black/10"
            }`}
            aria-label="Previous slide"
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-black" />
          </button>
          <button
            onClick={handleNext}
            className={`rounded-full p-2 md:p-3 transition-all bg-white backdrop-blur-sm ${
              activeIndex === features.length - 1
                ? "opacity-30 cursor-not-allowed pointer-events-none"
                : "hover:bg-black/10"
            }`}
            aria-label="Next slide"
            disabled={activeIndex === features.length - 1}
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-black" />
          </button>
        </div>

        {/* Pagination dots - responsive positioning */}
        <div className="absolute bottom-4 md:bottom-24 left-1/2 -translate-x-1/2 flex space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index
                  ? "bg-gray-700 w-5 md:w-6"
                  : "bg-gray-700 bg-opacity-50 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
