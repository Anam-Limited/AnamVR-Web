"use client";

import { Star, Quote } from "lucide-react";
import type { TestimonialType } from "../data/testimonial";

export default function Testimonial({
  testimonials,
}: {
  testimonials: TestimonialType[];
}) {
  // Ensure we have at least 6 testimonials to work with
  const displayTestimonials = testimonials.slice(
    0,
    Math.min(6, testimonials.length)
  );

  // If we have fewer than 6, duplicate some to fill the grid
  while (displayTestimonials.length < 6) {
    displayTestimonials.push({
      ...testimonials[displayTestimonials.length % testimonials.length],
      id: `duplicate-${displayTestimonials.length}`,
    });
  }

  // Color schemes for different testimonial cards
  const colorSchemes = [
    {
      bg: "bg-[#eacfff]",
      accent: "#7745b8",
      text: "text-[#7745b8]",
      light: "bg-[#7745b8]/10",
    },
    {
      bg: "bg-[#bcdbeb]",
      accent: "#487ce5",
      text: "text-[#487ce5]",
      light: "bg-[#487ce5]/10",
    },
    {
      bg: "bg-[#e9ffdb]",
      accent: "#3c8c4f",
      text: "text-[#3c8c4f]",
      light: "bg-[#3c8c4f]/10",
    },
    {
      bg: "bg-[#f9b1af]",
      accent: "#e74856",
      text: "text-[#e74856]",
      light: "bg-[#e74856]/10",
    },
    {
      bg: "bg-[#f7d1c3]",
      accent: "#ff7a1a",
      text: "text-[#ff7a1a]",
      light: "bg-[#ff7a1a]/10",
    },
    {
      bg: "bg-[#fff5bf]",
      accent: "#f3d009",
      text: "text-[#f3d009]",
      light: "bg-[#f3d009]/10",
    },
  ];

  // Generate random rating between 4 and 5 stars
  const getRandomRating = () => {
    return Math.floor(Math.random() * 2) + 4; // 4 or 5
  };

  return (
    <div className="max-w-7xl mx-auto mt-16 px-4 py-16">
      <div className="flex flex-col items-center mb-10">
        <h3 className="text-3xl md:text-5xl font-semibold text-purple-900 mb-4 text-center">
          What our users are saying
        </h3>
        <p className="text-purple-900 text-lg max-w-2xl text-center">
          Join thousands of people who have transformed their relationship with
          mental health using our platform.
        </p>
      </div>

      {/* Bento Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured testimonial (large) */}
        <div
          className={`${colorSchemes[0].bg} rounded-3xl p-8 shadow-sm col-span-1 md:col-span-2 lg:col-span-2 row-span-1`}
        >
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: colorSchemes[0].accent }}
            >
              <span className="text-white text-xl font-bold">
                {displayTestimonials[0].initial}
              </span>
            </div>
            <div>
              <h4 className="font-bold text-[#545454] text-xl">
                {displayTestimonials[0].name}
              </h4>
              <p className={`${colorSchemes[0].text} font-medium`}>
                {displayTestimonials[0].role}
              </p>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < 5 ? colorSchemes[0].text : "text-gray-300"
                    } ${i < 5 ? "fill-current" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <Quote
              className={`absolute -left-2 -top-2 h-8 w-8 opacity-20 ${colorSchemes[0].text}`}
            />
            <p className="text-[#545454] text-xl leading-relaxed pl-6">
              "{displayTestimonials[0].quote}"
            </p>
          </div>
        </div>

        {/* Medium testimonial with accent background */}
        <div
          className="rounded-3xl p-6 shadow-sm col-span-1 row-span-1"
          style={{ backgroundColor: colorSchemes[1].accent }}
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="bg-white/20 rounded-full px-4 py-1 inline-block mb-4">
                <span className="text-white text-sm font-medium">
                  Verified User
                </span>
              </div>
              <p className="text-white text-lg leading-relaxed mb-4">
                "{displayTestimonials[1].quote}"
              </p>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">
                  {displayTestimonials[1].initial}
                </span>
              </div>
              <div>
                <h4 className="font-medium text-white">
                  {displayTestimonials[1].name}
                </h4>
                <p className="text-white/80 text-sm">
                  {displayTestimonials[1].role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Small testimonial with light background */}
        <div
          className={`${colorSchemes[2].bg} rounded-3xl p-6 shadow-sm col-span-1 row-span-1`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                style={{ backgroundColor: colorSchemes[2].accent }}
              >
                <span className="text-white font-bold">
                  {displayTestimonials[2].initial}
                </span>
              </div>
              <div>
                <h4 className="font-medium text-[#545454]">
                  {displayTestimonials[2].name}
                </h4>
                <p className={`text-sm ${colorSchemes[2].text}`}>
                  {displayTestimonials[2].role}
                </p>
              </div>
            </div>
            <div className={`${colorSchemes[2].light} rounded-full px-3 py-1`}>
              <span className={`text-xs font-medium ${colorSchemes[2].text}`}>
                New
              </span>
            </div>
          </div>
          <p className="text-[#545454] leading-relaxed">
            "{displayTestimonials[2].quote}"
          </p>
        </div>

        {/* Medium testimonial with accent border */}
        <div
          className={`bg-white border-2 rounded-3xl p-6 shadow-sm col-span-1 md:col-span-2 lg:col-span-1 row-span-1`}
          style={{ borderColor: colorSchemes[4].accent }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: colorSchemes[4].accent }}
            >
              <span className="text-white font-bold">
                {displayTestimonials[4].initial}
              </span>
            </div>
            <div>
              <h4 className="font-bold text-[#545454]">
                {displayTestimonials[4].name}
              </h4>
              <p
                className={`text-sm font-medium`}
                style={{ color: colorSchemes[4].accent }}
              >
                {displayTestimonials[4].role}
              </p>
            </div>
          </div>
          <p className="text-[#545454] leading-relaxed mb-4">
            "{displayTestimonials[4].quote}"
          </p>
          <div
            className={`${colorSchemes[4].light} rounded-full px-4 py-2 inline-flex items-center gap-2`}
          >
            <span
              className={`text-sm font-medium`}
              style={{ color: colorSchemes[4].accent }}
            >
              Recommended
            </span>
            <span
              className="text-xs bg-white rounded-full px-2 py-0.5"
              style={{ color: colorSchemes[4].accent }}
            >
              100%
            </span>
          </div>
        </div>

        {/* Small testimonial with quote focus */}
        <div
          className={`${colorSchemes[5].bg} rounded-3xl p-6 shadow-sm col-span-1 row-span-1`}
        >
          <Quote className={`h-10 w-10 mb-4 ${colorSchemes[5].text}`} />
          <p className="text-[#545454] text-lg leading-relaxed mb-4">
            "{displayTestimonials[5].quote}"
          </p>
          <div className="flex items-center mt-auto">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center mr-2"
              style={{ backgroundColor: colorSchemes[5].accent }}
            >
              <span className="text-white font-bold text-xs">
                {displayTestimonials[5].initial}
              </span>
            </div>
            <div>
              <h4 className="font-medium text-[#545454] text-sm">
                {displayTestimonials[5].name}
              </h4>
              <p className={`text-xs ${colorSchemes[5].text}`}>
                {displayTestimonials[5].role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
