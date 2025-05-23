"use client";

import { useState, useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import androidBadge from "../src/assets/googlebadge.svg";
import appleBadge from "../src/assets/appstorebadge.svg";
import vrheadset from "../src/assets/vr-image.png";
import mockup from "../src/assets/mockupicon.webp";
import {
  Check,
  ArrowRight,
  Play,
  Pause,
  BarChart3,
  Brain,
  ShieldCheck,
  Sparkles,
  Headphones,
  Zap,
  Sun,
  Moon,
  Heart,
} from "lucide-react";

export default function ForIndividuals() {
  const headerAnimation = useScrollAnimation();
  const introAnimation = useScrollAnimation({ threshold: 0.2 });
  const benefitsAnimation = useScrollAnimation({ threshold: 0.2 });
  const featuresAnimation = useScrollAnimation({ threshold: 0.2 });
  const contentAnimation = useScrollAnimation({ threshold: 0.2 });
  const toolsAnimation = useScrollAnimation({ threshold: 0.2 });
  const journeyAnimation = useScrollAnimation({ threshold: 0.2 });
  const testimonialAnimation = useScrollAnimation({ threshold: 0.2 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 });
  const categoriesAnimation = useScrollAnimation({ threshold: 0.2 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedBenefitIndex, setExpandedBenefitIndex] = useState<
    number | null
  >(0); // Start with first item expanded

  const toggleBenefit = (index: number) => {
    // If clicking on item 0 and it's already expanded, do nothing to keep it open
    // Otherwise, toggle as normal
    if (index === 0 && expandedBenefitIndex === 0) {
      return;
    }

    setExpandedBenefitIndex(
      expandedBenefitIndex === index ? (index === 0 ? 0 : null) : index
    );
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Categories carousel implementation (Headspace-style)
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const categories = [
    {
      title: "Manage Stress",
      icon: <Sun className="h-8 w-8" />,
      description: "Find calm in difficult moments with guided exercises",
      color: "bg-[#487ce5]",
      textColor: "text-[#487ce5]",
      image: "/images/stress-relief.jpg",
    },
    {
      title: "Improve Sleep",
      icon: <Moon className="h-8 w-8" />,
      description: "Peaceful sleepcasts and meditations for better rest",
      color: "bg-[#7745b8]",
      textColor: "text-[#7745b8]",
      image: "/images/sleep-better.jpg",
    },
    {
      title: "Boost Mood",
      icon: <Heart className="h-8 w-8" />,
      description: "Elevate your state of mind with science-backed techniques",
      color: "bg-[#3c8c4f]",
      textColor: "text-[#3c8c4f]",
      image: "/images/mood-boost.jpg",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section - Headspace-inspired with softer transitions */}
      {/* bg-gradient-to-br from-[#bcdbeb] to-[#eacfff] */}
      <section
        ref={headerAnimation.ref}
        className={`w-full min-h-[860px] pt-44 pb-20 px-16 bg-[#bcdbeb] transition-opacity duration-700 ease-out ${
          headerAnimation.isVisible ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={headerAnimation.ref}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-opacity duration-700 ease-out ${
              headerAnimation.isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="relative order-2 lg:order-1">
              <h1 className="text-5xl md:text-6xl font-bold text-[#7745b8] mb-8 leading-tight">
                Feel better. <br />
                Think clearer. <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Breathe easier</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#487ce5]/30 -z-10"></span>
                </span>
              </h1>
              <p className="text-xl text-[#545454] mb-10 max-w-lg">
                With immersive mental wellness that fits your life. Whether
                you're managing stress, low mood, or simply need space to reset,
                AnamVR gives you expert-designed tools in the comfort of your
                own home.
              </p>
              <div className="flex flex-row gap-2">
                <a href="/download">
                  <img
                    src={appleBadge}
                    alt="Download on the App Store"
                    className="h-16"
                  />
                </a>
                <a href="/download">
                  <img
                    src={androidBadge}
                    alt="Get it on Google Play"
                    className="h-16"
                  />
                </a>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-square rounded-3xl overflow-hidden ">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <button
                    className=""
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  ></button>
                </div>
                <video
                  poster="/images/video-thumbnail.jpg"
                  className="w-full h-full object-cover"
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src="/videos/anamvr-intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section - Headspace Card Style */}
      <section
        ref={benefitsAnimation.ref}
        className={`py-36 px-4 bg-gray-100 transition-opacity duration-700 ease-out ${
          benefitsAnimation.isVisible ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl flex flex-row gap-10 mx-auto transition-opacity duration-700 ease-out">
          {/* Right Side - Image */}
          <div>
            <img src={mockup} alt="AnamVR Mockup" className="w-full" />
          </div>

          {/* Left Side - Benefits */}
          <div className="flex flex-col gap-1">
            <div className="text-start mb-4">
              <h2 className="text-lg font-semibold text-[#545454] mb-2">
                Why AnamVR
              </h2>
              <p className="text-xl text-[#545454] font-medium max-w-2xl">
                Experience mental health support that adapts to your unique
                needs and fits into your lifestyle.
              </p>
            </div>

            {/* Accordion-style benefits */}
            {/* Accordion-style benefits with animation */}
            {(() => {
              const benefits = [
                {
                  title: "Affordable, Expert-Backed Support",
                  description:
                    "Access clinically grounded tools and experiences without the high costs of traditional therapy.",
                  icon: <ShieldCheck className="h-4 w-4" />,
                  color: "bg-[#7745b8]",
                  textColor: "text-[#7745b8]",
                  bgColor: "bg-[#7745b8]/5",
                },
                {
                  title: "Mindfulness & Meditation in VR",
                  description:
                    "Step into calming, immersive environments guided by experts to help you relax, refocus, and recharge.",
                  icon: <Headphones className="h-4 w-4" />,
                  color: "bg-[#487ce5]",
                  textColor: "text-[#487ce5]",
                  bgColor: "bg-[#487ce5]/5",
                },
                {
                  title: "Tools to Break Unhelpful Thought Patterns",
                  description:
                    "Learn simple, effective ways to challenge negative thinking using proven psychological techniques based on CBT.",
                  icon: <Brain className="h-4 w-4" />,
                  color: "bg-[#3c8c4f]",
                  textColor: "text-[#3c8c4f]",
                  bgColor: "bg-[#3c8c4f]/5",
                },
                {
                  title: "See Your Progress Clearly",
                  description:
                    "Track your mental health journey with simple, easy-to-understand dashboards — no jargon, just insight.",
                  icon: <BarChart3 className="h-4 w-4" />,
                  color: "bg-[#e74856]",
                  textColor: "text-[#e74856]",
                  bgColor: "bg-[#e74856]/5",
                },
                {
                  title: "Self-Guided Clinical Assessments",
                  description:
                    "Use recognised tools like GAD-7 and PHQ-9 to check in with your mental wellbeing regularly — on your own terms.",
                  icon: <Sparkles className="h-4 w-4" />,
                  color: "bg-[#ff7a1a]",
                  textColor: "text-[#ff7a1a]",
                  bgColor: "bg-[#ff7a1a]/5",
                },
                {
                  title: "Personalised Recommendations",
                  description:
                    "Let AnamVR guide you to the most helpful content based on your mood, usage, and personal goals.",
                  icon: <Zap className="h-4 w-4" />,
                  color: "bg-[#f3d009]",
                  textColor: "text-[#f3d009]",
                  bgColor: "bg-[#f3d009]/5",
                },
              ];
              const benefitAnimations = [
                useScrollAnimation({ delay: 100 }),
                useScrollAnimation({ delay: 200 }),
                useScrollAnimation({ delay: 300 }),
                useScrollAnimation({ delay: 400 }),
                useScrollAnimation({ delay: 500 }),
                useScrollAnimation({ delay: 600 }),
              ];
              return benefits.map((benefit, index) => {
                const animation = benefitAnimations[index];
                return (
                  <div
                    key={index}
                    ref={animation.ref}
                    className={`border-b border-gray-100 last:border-0 transition-opacity duration-700 ease-out ${
                      animation.isVisible ? "animate-slide-up" : "opacity-0"
                    }`}
                  >
                    <button
                      onClick={() => toggleBenefit(index)}
                      className={`w-full py-4 flex flex-col items-start justify-between rounded-lg px-3 transition-all ${
                        expandedBenefitIndex === index ? benefit.bgColor : ""
                      }`}
                    >
                      <div className="flex items-center w-full">
                        <span className="text-[#545454]/70 mr-4 text-sm font-mono w-7 text-right">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="flex flex-row gap-4 items-center flex-1">
                          <div
                            className={`${benefit.color} text-white p-2 rounded-lg flex items-center justify-center shrink-0 mt-1`}
                          >
                            {benefit.icon}
                          </div>
                          <span
                            className={`font-semibold ${benefit.textColor}`}
                          >
                            {benefit.title}
                          </span>
                        </div>

                        <div className="ml-auto flex items-center">
                          {expandedBenefitIndex === index ? (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={benefit.textColor}
                            >
                              <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                          ) : (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-[#545454]"
                            >
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          )}
                        </div>
                      </div>

                      {/* Expandable content */}
                      <div
                        className={`overflow-hidden text-start mt-3 transition-all duration-300 ease-in-out ${
                          expandedBenefitIndex === index
                            ? "max-h-72 opacity-100 mb-6"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-12 flex items-start gap-4">
                          <p className="text-[#545454]">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </section>

      {/* Intro Section - Simplified Headspace-style */}
      <section
        ref={introAnimation.ref}
        className={`py-20 px-4 bg-gradient-to-br from-purple-500 to-purple-600 transition-opacity duration-700 ease-out ${
          introAnimation.isVisible ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div
          ref={introAnimation.ref}
          className={`max-w-6xl mx-auto transition-opacity duration-700 ease-out ${
            introAnimation.isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Immersive mental wellness that fits your life
              </h2>
              <p className="text-xl text-white mb-6">
                Using your smartphone and a low-cost headset, experience
                powerful support that helps you take control of your mental
                wellbeing — anytime, anywhere.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <img
                  src={vrheadset}
                  alt="VR headset with smartphone"
                  className="w-96 h-auto"
                />
                {/* Decorative elements */}
                <div className="absolute -z-10 -right-4 -bottom-4 w-24 h-24 rounded-full bg-[#7745b8]/10"></div>
                <div className="absolute -z-10 -left-4 -top-4 w-16 h-16 rounded-full bg-[#487ce5]/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Clean, minimal style with centered navigation */}
      <section
        ref={testimonialAnimation.ref}
        className={`py-32 px-4 bg-white transition-opacity duration-700 ease-out ${
          testimonialAnimation.isVisible ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div
          ref={testimonialAnimation.ref}
          className={`max-w-5xl mx-auto transition-opacity duration-700 ease-out ${
            testimonialAnimation.isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          {/* Testimonial content */}
          <div className="relative py-16">
            <div className="transition-opacity duration-500 ease-out">
              {[
                {
                  quote:
                    "With AnamVR, a healthcare worker can discreetly connect with support anytime, from anywhere - whether they're on break at the hospital, on the commute, at home or from their desk at work.",
                  name: "Dr. Sarah Chen",
                  title: "Head of Mental Health Services, Metro Hospital",
                },
                {
                  quote:
                    "AnamVR has transformed how our students manage stress. The immersive experiences provide them with practical tools they can access whenever they need support.",
                  name: "Michael Roberts",
                  title: "University Wellness Director",
                },
                {
                  quote:
                    "The ability to access evidence-based mental health resources through VR has been a game-changer for our remote employees. AnamVR meets people where they are.",
                  name: "Jessica Parenti",
                  title: "Chief People Officer, TechGrowth Inc.",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`text-center max-w-4xl mx-auto transition-opacity duration-500 ${
                    activeTestimonial === idx
                      ? "block opacity-100"
                      : "hidden opacity-0"
                  }`}
                >
                  <p className="text-3xl md:text-4xl font-medium text-[#545454] mb-12 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-8">
                    <p className="text-xl font-medium text-[#7745b8]">
                      {testimonial.name}
                    </p>
                    <p className="text-[#545454]">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Simple centered navigation arrows */}
            <div className="flex justify-center gap-10 mt-16">
              <button
                onClick={() =>
                  setActiveTestimonial((prev) => Math.max(0, prev - 1))
                }
                className={`transition-opacity ${
                  activeTestimonial === 0
                    ? "opacity-30 cursor-not-allowed"
                    : "opacity-100 hover:text-[#7745b8]"
                }`}
                disabled={activeTestimonial === 0}
                aria-label="Previous testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                onClick={() =>
                  setActiveTestimonial((prev) => Math.min(2, prev + 1))
                }
                className={`transition-opacity ${
                  activeTestimonial === 2
                    ? "opacity-30 cursor-not-allowed"
                    : "opacity-100 hover:text-[#7745b8]"
                }`}
                disabled={activeTestimonial === 2}
                aria-label="Next testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean, modern style with app download focus */}
      <section
        ref={ctaAnimation.ref}
        className={`w-full bg-[#ff7a1a] transition-opacity duration-700 ease-out ${
          ctaAnimation.isVisible ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div
          ref={ctaAnimation.ref}
          className={`max-w-7xl mx-auto transition-opacity duration-700 ease-out ${
            ctaAnimation.isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left side - Text content */}
            <div className="py-20 px-8 md:px-16">
              <h3 className="text-white text-xl md:text-2xl font-medium mb-3">
                Download our app
              </h3>
              <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-12">
                The modern way
                <br />
                to manage your
                <br />
                mental wellness
              </h2>

              {/* App store badges */}
              <div className="flex flex-row gap-4">
                <a href="/download">
                  <img
                    src={appleBadge}
                    alt="Download on the App Store"
                    className="h-14"
                  />
                </a>
                <a href="/download">
                  <img
                    src={androidBadge}
                    alt="Get it on Google Play"
                    className="h-14"
                  />
                </a>
              </div>
            </div>

            {/* Right side - App mockups */}
            <div className="relative h-[500px] md:h-[600px] overflow-hidden">
              {/* Main phone mockup */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
                <img
                  src={mockup}
                  alt="AnamVR App"
                  className="w-[300px] md:w-[400px]"
                />

                {/* Notification cards */}
                <div className="absolute top-20 right-[280px] bg-white rounded-xl p-3 shadow-lg max-w-[220px] transform rotate-[-5deg]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-full bg-[#7745b8]/20 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-[#7745b8]" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Progress Report</p>
                      <p className="text-[#7745b8] font-bold text-sm">
                        +30.8% improvement
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-32 right-[320px] bg-white rounded-xl p-3 shadow-lg transform rotate-[5deg]">
                  <div>
                    <img
                      src="/images/calm-scene.jpg"
                      alt="Meditation scene"
                      className="w-40 h-24 object-cover rounded-lg mb-2"
                    />
                    <p className="font-medium text-sm">Ocean Calm</p>
                    <p className="text-[#3c8c4f] text-sm font-bold">
                      +12.4% better sleep
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-20 right-40 bg-white rounded-xl p-3 shadow-lg transform rotate-[-8deg]">
                  <div className="flex flex-col">
                    <p className="font-medium text-sm">Sleep Session</p>
                    <p className="text-[#487ce5] text-sm">
                      Today's meditation complete
                    </p>
                    <p className="text-[#487ce5] font-bold text-sm mt-1">
                      +10.4%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
