"use client";

import type React from "react";

import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    newsletter: false,
  });
  const animation = useScrollAnimation({ delay: 100 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      newsletter: e.target.checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for your message. We'll be in touch shortly!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      newsletter: false,
    });
  };

  return (
    <div
      ref={animation.ref}
      className={`md:col-span-3 lg:col-span-12 rounded-3xl mt-16 overflow-hidden transition-opacity duration-700 ease-out ${
        animation.isVisible ? "animate-slide-up" : "opacity-0"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 bg-gradient-to-br from-[#eacfff]/30 via-[#bcdbeb]/30 to-[#e9ffdb]/30">
        {/* Left side - Contact info */}
        <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#7745b8] mb-6">
              Contact us
            </h2>

            <div className="mb-8">
              <p className="text-lg text-[#545454] mb-4">
                Empowering you on your journey towards better mental health.
              </p>
              <p className="text-[#545454] mb-6">
                At AnamVR, our team is dedicated to revolutionising the mental
                wellness space by offering accessible, affordable, and
                convenient solutions for anxiety and mood-related issues.
              </p>
              <p className="text-xl font-medium text-[#7745b8]">
                Do you have any questions for us? Fill out this form and we will
                be in touch shortly.
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Contact form */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-tl-3xl rounded-bl-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-[#545454] mb-6">
              <h3 className="font-medium mb-1">
                Name <span className="text-[#7745b8]">(required)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7745b8]/50"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7745b8]/50"
                  />
                </div>
              </div>
            </div>

            <div className="text-[#545454]">
              <label htmlFor="email" className="block mb-1">
                Email <span className="text-[#7745b8]">(required)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7745b8]/50"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-[#7745b8] border-gray-300 rounded focus:ring-[#7745b8]"
              />
              <label
                htmlFor="newsletter"
                className="ml-2 text-sm text-[#545454]"
              >
                Sign up for news and updates
              </label>
            </div>

            <div className="text-[#545454]">
              <label htmlFor="subject" className="block mb-1">
                Subject <span className="text-[#7745b8]">(required)</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7745b8]/50"
              />
            </div>

            <div className="text-[#545454]">
              <label htmlFor="message" className="block mb-1">
                Message <span className="text-[#7745b8]">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7745b8]/50"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#7745b8] hover:bg-[#7745b8]/90 text-white font-medium py-3 px-8 rounded-full flex items-center transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
