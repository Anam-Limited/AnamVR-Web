"use client";

import { Fragment } from "react";
import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type TestimonialType = {
  id: string;
  name: string;
  initial: string;
  role: string;
  quote: string;
};

const testimonialData: TestimonialType[] = [
  {
    id: "1",
    name: "Sarah J.",
    initial: "S",
    role: "Anxiety Management",
    quote:
      "The mood tracking feature has completely changed how I understand my anxiety patterns. I can now identify triggers before they escalate.",
  },
  {
    id: "2",
    name: "Michael T.",
    initial: "M",
    role: "Depression Recovery",
    quote:
      "The guided meditations in the Relief Hub have been a lifeline during my darkest moments. I've learned to create space between my thoughts and feelings.",
  },
  {
    id: "3",
    name: "Priya K.",
    initial: "P",
    role: "Stress Management",
    quote:
      "I was skeptical about VR therapy, but it's been transformative. The immersive exercises helped me practice mindfulness in a way traditional methods never could.",
  },
  {
    id: "4",
    name: "David L.",
    initial: "D",
    role: "Sleep Improvement",
    quote:
      "The CBT lessons taught me practical techniques I use daily. My sleep has improved dramatically, and I feel more in control of my thoughts.",
  },
  {
    id: "5",
    name: "Emma R.",
    initial: "E",
    role: "Work-Life Balance",
    quote:
      "I've tried many mental health apps, but this is the only one that offers such a comprehensive approach. The combination of tracking, learning, and practicing is perfect.",
  },
  {
    id: "6",
    name: "James W.",
    initial: "J",
    role: "Panic Attack Management",
    quote:
      "The VR exercises helped me practice breathing techniques in simulated stressful situations. Now I can apply them in real life with confidence.",
  },
];

export default function Testimonial() {
  const testimonials = testimonialData;
  const testimonialAnimation = useScrollAnimation();
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

  return (
    <div
      ref={testimonialAnimation.ref}
      className={`max-w-7xl mx-auto mt-16 px-4 py-16 transition-opacity duration-700 ease-out ${
        testimonialAnimation.isVisible ? "animate-slide-up" : "opacity-0"
      }`}
    >
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
        {testimonials.map((testimonial, idx) => {
          const cardAnimation = useScrollAnimation({ delay: idx * 100 });
          const color = colorSchemes[idx % colorSchemes.length];
          return (
            <div
              key={idx}
              ref={cardAnimation.ref}
              className={`bg-white border-2 rounded-3xl p-6 shadow-sm col-span-1 md:col-span-2 lg:col-span-1 row-span-1 transition-opacity duration-700 ease-out ${
                cardAnimation.isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ borderColor: color.accent }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: color.accent }}
                >
                  <span className="text-white font-bold">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-[#545454]">
                    {testimonial.name}
                  </h4>
                  <p
                    className={`text-sm font-medium`}
                    style={{ color: color.accent }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-[#545454] leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
