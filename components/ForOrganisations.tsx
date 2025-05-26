import { useState } from "react";
import {
  BarChart3,
  Brain,
  ChevronRight,
  HeartPulse,
  Headphones,
  Shield,
  Sparkles,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  CheckCircle,
} from "lucide-react";
import mockup from "../src/assets/mockupicon.webp";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ForOrganisationsEnhanced() {
  const headerAnimation = useScrollAnimation();
  const benefitsAnimation = useScrollAnimation({ threshold: 0.2 });
  const businessGainsAnimation = useScrollAnimation({ threshold: 0.2 });
  const demoAnimation = useScrollAnimation({ threshold: 0.2 });
  const testimonialAnimation = useScrollAnimation({ threshold: 0.2 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const [expandedBenefitIndex, setExpandedBenefitIndex] = useState<
    number | null
  >(0);

  // Track form submission for thank you message
  const [formSubmitted, setFormSubmitted] = useState(false);

  const benefitAnimations = [
    useScrollAnimation({ delay: 100 }),
    useScrollAnimation({ delay: 200 }),
    useScrollAnimation({ delay: 300 }),
    useScrollAnimation({ delay: 400 }),
    useScrollAnimation({ delay: 500 }),
    useScrollAnimation({ delay: 600 }),
  ];

  // Demo form state for client-side submission
  const [demoState, setDemoState] = useState<{
    success?: boolean;
    error?: string;
  } | null>(null);
  const [isPending, setIsPending] = useState(false);

  const toggleBenefit = (index: number) => {
    if (index === 0 && expandedBenefitIndex === 0) {
      return;
    }

    setExpandedBenefitIndex(
      expandedBenefitIndex === index ? (index === 0 ? 0 : null) : index
    );
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        ref={headerAnimation.ref}
        className={`w-full min-h-[860px] pt-60 pb-20 px-4 sm:px-6 lg:px-8 bg-[#f3d009] text-black transition-opacity duration-700 ease-out ${
          headerAnimation.isVisible ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative order-2 lg:order-1">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">
              AnamVR for <br />
              <span className="relative inline-block">
                <span className="relative z-10">Businesses</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#e55848] -z-10"></span>
              </span>
            </h1>
            <p className="text-xl text-[#545454] mb-10 max-w-lg">
              AnamVR makes it easy to deliver meaningful, measurable mental
              health support across your organisation. With immersive,
              clinically-backed tools that employees actually want to use — and
              insights that help you track impact — it's wellness that works for
              everyone.
            </p>
            <div className="flex flex-row gap-2">
              <a
                href="#demo-section"
                className="bg-white text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition duration-300 flex items-center justify-center"
              >
                Book a Demo
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="hidden lg:block relative">
              {/* Placeholder for mockup image */}
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
        <div className="max-w-6xl flex flex-col lg:flex-row-reverse gap-10 mx-auto transition-opacity duration-700 ease-out">
          {/* Right Side - Benefits */}
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
            {(() => {
              const benefits = [
                {
                  title: "Private, On-Demand Support",
                  description:
                    "Employees can access immersive mental wellness tools from anywhere — using just a smartphone and a low-cost headset.",
                  icon: <Headphones className="h-4 w-4" />,
                  color: "bg-[#7745b8]",
                  textColor: "text-[#7745b8]",
                  bgColor: "bg-[#7745b8]/5",
                },
                {
                  title: "Meditation & Mindfulness That Feels Natural",
                  description:
                    "Calming, guided VR experiences crafted by mental health experts to reduce stress and boost focus.",
                  icon: <HeartPulse className="h-4 w-4" />,
                  color: "bg-[#487ce5]",
                  textColor: "text-[#487ce5]",
                  bgColor: "bg-[#487ce5]/5",
                },
                {
                  title: "Tools to Reframe Unhelpful Thinking",
                  description:
                    "Practical exercises based on Cognitive Behavioural Therapy to help manage anxiety, low mood, and stress.",
                  icon: <Brain className="h-4 w-4" />,
                  color: "bg-[#3c8c4f]",
                  textColor: "text-[#3c8c4f]",
                  bgColor: "bg-[#3c8c4f]/5",
                },
                {
                  title: "Personal Progress Tracking",
                  description:
                    "Easy-to-use dashboards let users see their own growth over time, supporting reflection and motivation.",
                  icon: <BarChart3 className="h-4 w-4" />,
                  color: "bg-[#e74856]",
                  textColor: "text-[#e74856]",
                  bgColor: "bg-[#e74856]/5",
                },
                {
                  title: "Clinically Validated Assessments",
                  description:
                    "Regular check-ins with tools like GAD-7 and PHQ-9 — helping users better understand their mental wellbeing.",
                  icon: <Shield className="h-4 w-4" />,
                  color: "bg-[#ff7a1a]",
                  textColor: "text-[#ff7a1a]",
                  bgColor: "bg-[#ff7a1a]/5",
                },
                {
                  title: "Personalised Content Recommendations",
                  description:
                    "Smart suggestions based on user needs and patterns to keep engagement high and content relevant.",
                  icon: <Sparkles className="h-4 w-4" />,
                  color: "bg-[#f3d009]",
                  textColor: "text-[#f3d009]",
                  bgColor: "bg-[#f3d009]/5",
                },
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
          {/* Left Side - Image */}
          <div>
            <img
              src={mockup || "/placeholder.svg"}
              alt="AnamVR Mockup"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Enhanced What Your Business Will Gain Section */}
      <section
        ref={businessGainsAnimation.ref}
        className={`py-24 px-4 bg-gray-100 transition-opacity duration-700 ease-out ${
          businessGainsAnimation.isVisible ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Your Business Will Gain
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your workplace culture with measurable mental health
              outcomes that drive real business results
            </p>
          </div>

          {/* Main Benefits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Cost Savings Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-xl">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Reduce Healthcare Costs
                  </h3>
                  <p className="text-gray-600">
                    Lower mental health-related claims and medical expenses
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">
                    Average 23% reduction in healthcare costs
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">
                    Decreased emergency mental health interventions
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">
                    Preventive care reduces long-term costs
                  </span>
                </div>
              </div>
            </div>

            {/* Productivity Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Boost Productivity
                  </h3>
                  <p className="text-gray-600">
                    Improved focus, creativity, and work performance
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">
                    18% increase in task completion rates
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">
                    Better decision-making under pressure
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">
                    Enhanced creative problem-solving
                  </span>
                </div>
              </div>
            </div>

            {/* Retention Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Improve Retention
                  </h3>
                  <p className="text-gray-600">
                    Keep your best talent with comprehensive wellness support
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-700">
                    34% reduction in voluntary turnover
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-700">
                    Higher employee satisfaction scores
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-700">
                    Stronger employer brand reputation
                  </span>
                </div>
              </div>
            </div>

            {/* Absenteeism Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Reduce Absenteeism
                  </h3>
                  <p className="text-gray-600">
                    Fewer sick days and mental health-related absences
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">
                    45% decrease in stress-related absences
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">
                    Improved work-life balance
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">
                    Better team continuity and planning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
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
                {
                  quote:
                    "As a busy parent, I love how AnamVR gives me quick, effective ways to manage stress and anxiety. The immersive experiences are like a mini-retreat I can access anytime.",
                  name: "Emily Johnson",
                  title: "Freelance Graphic Designer",
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
                  setActiveTestimonial((prev) => Math.min(3, prev + 1))
                }
                className={`transition-opacity ${
                  activeTestimonial === 3
                    ? "opacity-30 cursor-not-allowed"
                    : "opacity-100 hover:text-[#7745b8]"
                }`}
                disabled={activeTestimonial === 3}
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

      {/* Book a Demo CTA Section - Enhanced */}
      <section
        id="demo-section"
        ref={demoAnimation.ref}
        className={`py-36 px-4 bg-[#3c8c4f] text-white transition-opacity duration-700 ease-out ${
          demoAnimation.isVisible ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Content */}
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-[#f3d009] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Book Your Demo Today
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to transform mental health support in your organization?
              </h2>

              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Book a personalized demo to see how AnamVR can work for your
                team. Our experts will walk you through the platform and show
                you measurable results.
              </p>
            </div>

            {/* Right Side - Enhanced Form */}
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#f3d009]/20 rounded-full blur-xl"></div>

              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                {/* Thank you message after form submission */}
                {!formSubmitted ? (
                  <form
                    className="space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.currentTarget;
                      const formData = new FormData();

                      const firstName = form.firstName.value;
                      const lastName = form.lastName.value;
                      const email = form.email.value;
                      const message = form.message.value;

                      formData.append(
                        "access_key",
                        "f408a614-cb91-4835-887a-3bdffa5addef"
                      );
                      formData.append(
                        "subject",
                        "New Demo Request from AnamVR"
                      );
                      formData.append("name", `${firstName} ${lastName}`);
                      formData.append("email", email);
                      formData.append("message", message);

                      // Optionally include other fields
                      if (form.company?.value)
                        formData.append("company", form.company.value);
                      if (form.size?.value)
                        formData.append("size", form.size.value);
                      if (form.role?.value)
                        formData.append("role", form.role.value);
                      if (form.phone?.value)
                        formData.append("phone", form.phone.value);

                      fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        body: formData,
                      })
                        .then((res) => res.json())
                        .then((data) => {
                          if (data.success) {
                            setFormSubmitted(true);
                          } else {
                            alert("Submission failed. Please try again.");
                          }
                        })
                        .catch(() =>
                          alert("Something went wrong. Please try again.")
                        );
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-[#545454] mb-2"
                        >
                          First Name *
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#545454] bg-white/80"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-[#545454] mb-2"
                        >
                          Last Name *
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#545454] bg-white/80"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#545454] mb-2"
                      >
                        Work Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#545454] bg-white/80"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-[#545454] mb-2"
                      >
                        Company *
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#545454] bg-white/80"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="size"
                          className="block text-sm font-medium text-[#545454] mb-2"
                        >
                          Company Size *
                        </label>
                        <select
                          id="size"
                          name="size"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#545454] bg-white/80"
                        >
                          <option value="">Select size</option>
                          <option value="1-50">1-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501-1000">501-1000 employees</option>
                          <option value="1001+">1001+ employees</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="role"
                          className="block text-sm font-medium text-[#545454] mb-2"
                        >
                          Your Role *
                        </label>
                        <select
                          id="role"
                          name="role"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#545454] bg-white/80"
                        >
                          <option value="">Select role</option>
                          <option value="hr">HR Director</option>
                          <option value="ceo">CEO/Founder</option>
                          <option value="wellness">Wellness Manager</option>
                          <option value="benefits">
                            Benefits Administrator
                          </option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#545454] mb-2"
                      >
                        Phone Number (optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#545454] bg-white/80"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#545454] mb-2"
                      >
                        Tell us about your needs (optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#545454] bg-white/80 resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#7745b8] text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                    >
                      Book Your Demo
                    </button>
                  </form>
                ) : (
                  <div className="p-6 rounded-xl bg-green-100 text-green-800 text-center font-medium text-lg">
                    Thank you! Your demo request has been submitted.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
