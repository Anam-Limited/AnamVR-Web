"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    id: "mood-log",
    title: "Mood Log",
    color: "bg-[#487ce5]",
    textColor: "text-white",
    heading: "Track your emotions",
    subheading: "with daily mood logging",
    description:
      "Easily track your mood throughout the day, with the flexibility to log up to three times daily. Dive deeper into your emotional patterns and progress with our robust analytics, providing valuable insights into your mood fluctuations over time.",
    buttonText: "Start tracking",
  },
  {
    id: "relief-hub",
    title: "Relief Hub",
    color: "bg-[#7745b8]",
    textColor: "text-white",
    heading: "Find relief",
    subheading: "with guided meditations",
    description:
      "Find solace and support in our curated selection of situational-based meditations within the Relief Hub. Custom made to address various presentations of mood and anxiety-related issues, these meditations are designed to empower you to navigate life's challenges.",
    buttonText: "Explore meditations",
  },
  {
    id: "lessons",
    title: "Lessons",
    color: "bg-[#3c8c4f]",
    textColor: "text-white",
    heading: "Learn CBT techniques",
    subheading: "with expert guidance",
    description:
      "Delve into the fundamentals of cognitive-behavioural therapy (CBT) with our engaging lessons. Learn practical strategies to apply CBT principles to your daily life, equipping yourself with a comprehensive toolkit to manage life's curveballs effectively.",
    buttonText: "Start learning",
  },
  {
    id: "vr-hub",
    title: "VR Hub",
    color: "bg-[#f3d009]",
    textColor: "text-black",
    heading: "Immersive therapy",
    subheading: "with virtual reality",
    description:
      "By integrating virtual reality (VR), gamification, and CBT techniques, we ensure effective treatment is readily available in the comfort of your own home. Immerse yourself in our VR-based exercises aimed at enhancing anxiety management techniques.",
    buttonText: "Try VR therapy",
  },
];

export default function Description() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="max-w-7xl mt-16 mx-auto px-4 py-12">
      <div className="text-center text-purple-900 mb-16 flex flex-col items-center">
        <span className="font-semibold text-5xl">
          Empowering you on your journey
        </span>
        <span className="font-semibold text-5xl">
          towards better mental health
        </span>
      </div>
      {/* Tabs */}
      <div className="flex justify-center mb-8 overflow-x-auto no-scrollbar">
        <div className="flex space-x-2 p-1 bg-gray-300 rounded-full">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => handleTabClick(index)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-200 whitespace-nowrap ${
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
        className="relative overflow-hidden"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleSwipeEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleSwipeEnd}
        onMouseLeave={handleSwipeEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{
            transform: `translateX(calc(-${activeIndex * 100}% - ${
              activeIndex * 1.5
            }rem))`,
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`w-full flex-shrink-0 ${feature.color} rounded-3xl overflow-hidden`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 min-h-[550px]">
                <div className="hidden md:flex items-center justify-center p-20">
                  {/* Placeholder for feature image or illustration */}
                  <div className="bg-white bg-opacity-20 rounded-2xl w-full h-4/5 flex items-center justify-center">
                    <span className="text-white text-6xl">
                      {feature.id === "mood-log" && "📊"}
                      {feature.id === "relief-hub" && "🧘‍♀️"}
                      {feature.id === "lessons" && "📚"}
                      {feature.id === "vr-hub" && "🥽"}
                    </span>
                  </div>
                </div>
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <h2
                    className={`text-4xl md:text-5xl font-bold ${feature.textColor} mb-2`}
                  >
                    {feature.heading}
                  </h2>
                  <h3
                    className={`text-2xl md:text-3xl font-medium ${feature.textColor} opacity-90 mb-6`}
                  >
                    {feature.subheading}
                  </h3>
                  <p
                    className={`text-lg mb-8 opacity-90 max-w-lg ${feature.textColor}`}
                  >
                    {feature.description}
                  </p>
                  {/* <div>
                    <button className="bg-white text-[#7745b8] font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transition-all">
                      {feature.buttonText}
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation arrows */}
        <button
          onClick={handlePrevious}
          className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md transition-all ${
            activeIndex === 0
              ? "opacity-50 cursor-not-allowed pointer-events-none"
              : "hover:bg-opacity-100"
          }`}
          aria-label="Previous slide"
          disabled={activeIndex === 0}
        >
          <ChevronLeft className="h-6 w-6 text-black" />
        </button>
        <button
          onClick={handleNext}
          className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md transition-all ${
            activeIndex === features.length - 1
              ? "opacity-50 cursor-not-allowed pointer-events-none"
              : "hover:bg-opacity-100"
          }`}
          aria-label="Next slide"
          disabled={activeIndex === features.length - 1}
        >
          <ChevronRight className="h-6 w-6 text-black" />
        </button>

        {/* Pagination dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index
                  ? "bg-white w-6"
                  : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
