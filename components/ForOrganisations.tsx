import { useState } from "react";
import {
  Headphones,
  CircleDollarSign,
  Users,
  Activity,
  HeartHandshake,
  RectangleGoggles,
  Hospital,
  ChartLine,
} from "lucide-react";
import androidBadge from "../src/assets/googlebadge.svg";
import appleBadge from "../src/assets/appstorebadge.svg";
import cardMockUp from "../src/assets/cardMockUp1.svg";

const benefits = [
  {
    icon: <CircleDollarSign className="w-6 h-6" />,
    title: "Private, On-Demand Support",
    description:
      "Employees can access immersive mental wellness tools from anywhere — using just a smartphone and a low-cost headset.",
    color: "bg-[#7745b8]",
    textColor: "text-[#7745b8]",
    bgColor: "bg-[#7745b8]/10",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Meditation & Mindfulness That Feels Natural ",
    description:
      "Calming, guided VR experiences crafted by mental health experts to reduce stress and boost focus.",
    color: "bg-[#487ce5]",
    textColor: "text-[#487ce5]",
    bgColor: "bg-[#487CE5]/10",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Tools to Reframe Unhelpful Thinking",
    description:
      "Practical exercises based on Cognitive Behavioural Therapy to help manage anxiety, low mood, and stress.",
    color: "bg-[#3c8c4f]",
    textColor: "text-[#3c8c4f]",
    bgColor: "bg-[#3C8C4F]/10",
  },
  {
    icon: <ChartLine className="w-6 h-6" />,
    title: "Personal Progress Tracking",
    description:
      "Easy-to-use dashboards let users see their own growth over time, supporting reflection and motivation.",
    color: "bg-[#E74856]",
    textColor: "text-[#E74856]",
    bgColor: "bg-[#E74856]/10",
  },
  {
    icon: <Hospital className="w-6 h-6" />,
    title: "Clinically Validated Assessments",
    description:
      "Regular check-ins with tools like GAD-7 and PHQ-9 — helping users better understand their mental wellbeing.",
    color: "bg-[#F05984]",
    textColor: "text-[#F05984]",
    bgColor: "bg-[#F05984]/10",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Personalised Content Recommendations",
    description:
      "Smart suggestions based on user needs and patterns to keep engagement high and content relevant.",
    color: "bg-[#FF7A1A]",
    textColor: "text-[#FF7A1A]",
    bgColor: "bg-[#FF7A1A]/10",
  },
];

const productivity = [
  {
    content:
      "Healthier, More Resilient Teams Improved focus & productivity, reduced levels of burnout and absenteeism, and higher satisfaction thanks to engaging, evidence-based support.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    content:
      "Proven Outcomes from Virtual Reality Therapy (VRT) Scientifically supported improvements in stress, anxiety, and emotional wellbeing — outperforming traditional wellness apps.",
    icon: <RectangleGoggles className="w-6 h-6" />,
  },
  {
    content:
      "Enterprise-Ready at a Startup Cost Scalable support for your entire team with minimal overhead — no expensive hardware or complex setup.",
    icon: <HeartHandshake className="w-6 h-6" />,
  },
];

export default function ForOrganisationsEnhanced() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const [expandedBenefitIndex, setExpandedBenefitIndex] = useState<
    number | null
  >(0);

  // Track form submission for thank you message
  const [formSubmitted, setFormSubmitted] = useState(false);

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
      <section className="w-full min-h-[710px] py-28 px-16 bg-gradient-to-br from-[#F7F296] to-[#F7D1C3] transition-opacity duration-700 ease-out animate-slide-up">
        <div className="max-w-7xl mx-auto md:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 transition-opacity duration-700 ease-out animate-slide-up">
            {/* Left Text Content */}
            <div className="lg:w-2/3 w-full">
              <div className="relative order-2 lg:order-1">
                <h1 className="text-2xl sm:text-5xl md:text-5xl text-center lg:text-start font-normal text-[#2b2b2b] mb-8 leading-tight">
                  <b>Support {""}</b> your people. {""}
                  <b>Strengthen {""}</b> your culture. {""}
                  <b>Improve {""}</b> Outcomes.
                </h1>
                <p className="text-lg md:text-xl text-center lg:text-start text-[#545454] mb-10 lg:pr-6">
                  AnamVR makes it easy to deliver meaningful, measurable mental
                  health support across your organisation. With immersive,
                  clinically-backed tools that employees actually want to use —
                  and insights that help you track impact — it’s wellness that
                  works for everyone.
                </p>
                <div className="flex justify-center items-center lg:justify-start lg:items-start flex-row gap-2">
                  <a
                    href="https://apps.apple.com/ie/app/anamvr/id6499339767"
                    target="_blank"
                    aria-label="Download on the App Store"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={appleBadge}
                      alt="Download on the App Store"
                      className="h-10 md:h-12 lg:h-14 w-auto"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.anamvr&hl=en"
                    target="_blank"
                    aria-label="Get it on Google Play"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={androidBadge}
                      alt="Get it on Google Play"
                      className="h-10 md:h-12 lg:h-14 w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Image Content */}
            <div className="lg:w-1/3 w-full flex mb-12 lg:mb-0 items-start justify-start mt-6 lg:mt-0 lg:items-center lg:justify-center">
              <div className="relative w-full max-w-[420px] h-fit lg:h-[600px] flex items-start justify-start lg:items-center lg:justify-center transition-opacity duration-700 ease-out animate-slide-up">
                {/* Main phone mockup */}
                <img
                  src={cardMockUp || "/placeholder.svg"}
                  alt="AnamVR App Dashboard"
                  className="w-64 md:w-80 lg:w-96 h-auto rounded-3xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section - Headspace Card Style */}
      <section className="py-36 px-4 bg-gray-100 transition-opacity duration-700 ease-out animate-slide-up">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-10">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2b2b2b] mb-2">
              Wellness that works for everyone
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Benefit Cards */}
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                onClick={() => toggleBenefit(index)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl ${benefit.bgColor} ${benefit.textColor}`}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-semibold  mb-1 ${benefit.textColor} transition-colors duration-300`}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-[#2b2b2b]">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 px-4 bg-white transition-opacity duration-700 ease-out animate-slide-up">
        <div className="max-w-5xl mx-auto transition-opacity duration-700 ease-out animate-slide-up">
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

      {/* What your business will gain? */}
      <section className="py-24 px-4 bg-gray-100 transition-opacity duration-700 ease-out animate-slide-up">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Your Business Will Gain
            </h2>
          </div>

          {/* Main Benefits Grid - Bento Box Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* First box (larger, spanning 2 columns) */}
            <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-[#7745b8]/10 text-[#7745b8]">
                  {productivity[0].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#2b2b2b]">
                    Healthier, More Resilient Teams
                  </h3>
                  <p className="text-[#545454] leading-relaxed">
                    {productivity[0].content}
                  </p>
                </div>
              </div>
            </div>

            {/* Second box (taller) */}
            <div className="bg-[#487ce5]/10 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 md:row-span-2 flex flex-col">
              <div className="p-4 rounded-2xl bg-white text-[#487ce5] self-start mb-4">
                {productivity[1].icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#2b2b2b]">
                Proven Outcomes from VRT
              </h3>
              <p className="text-[#545454] leading-relaxed">
                {productivity[1].content}
              </p>
            </div>

            {/* Third box */}
            <div className="md:col-span-2 bg-[#F2D147]/20 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-[#F2D147]/10">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-white text-[#FF7A1A]">
                  {productivity[2].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#2b2b2b]">
                    Enterprise-Ready at a Startup Cost
                  </h3>
                  <p className="text-[#545454] leading-relaxed">
                    {productivity[2].content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Demo CTA Section - Enhanced */}
      <section
        id="demo-section"
        className="py-36 px-6 bg-[#F2D147] text-white transition-opacity duration-700 ease-out animate-slide-up"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Content */}
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-[#f3d009] rounded-full animate-pulse"></div>
                <span className="text-sm text-[#fafafa] font-medium">
                  Book Your Demo Today
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl text-[#2b2b2b] font-bold mb-6 leading-tight">
                Ready to transform mental health support in your organization?
              </h2>
            </div>

            {/* Right Side - Enhanced Form */}
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#f3d009]/20 rounded-full blur-xl"></div>

              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 w-full max-w-3xl mx-auto">
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
                        "e0d08ccb-aa34-4b38-9068-8531ab111d36"
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
                      const roleElement = form.elements.namedItem(
                        "role"
                      ) as HTMLInputElement | null;
                      if (roleElement && roleElement.value)
                        formData.append("role", roleElement.value);
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
                    <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                      <div className="flex-1 min-w-[200px]">
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
                      <div className="flex-1 min-w-[200px]">
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

                    <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                      <div className="flex-1 min-w-[200px]">
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
                      <div className="flex-1 min-w-[200px]">
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
                    </div>

                    <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                      <div className="flex-1 min-w-[200px]">
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
                      <div className="flex-1 min-w-[200px]">
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

                    <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                      <div className="flex-1 min-w-[200px]">
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
