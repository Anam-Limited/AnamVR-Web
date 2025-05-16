"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { TestimonialType } from "../data/index";

interface TestimonialSliderProps {
  testimonials: TestimonialType[];
}

export default function TestimonialSlider({
  testimonials,
}: TestimonialSliderProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Navigation functions
  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(index);
  };

  return (
    <div className="bg-green-100 p-6 rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold text-green-900">Testimonials</h3>
        <div className="flex space-x-1">
          <button
            onClick={goToPrevious}
            className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center hover:bg-green-300 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={14} className="text-green-700" />
          </button>
          <button
            onClick={goToNext}
            className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center hover:bg-green-300 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={14} className="text-green-700" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden h-40">
        <div className="relative w-full h-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
                currentTestimonial === index
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
              style={{
                transform: `translateX(${(index - currentTestimonial) * 100}%)`,
              }}
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-green-700 font-bold text-xs">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-green-700">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-green-800 text-sm italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center space-x-1 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentTestimonial === index ? "bg-green-600" : "bg-green-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
