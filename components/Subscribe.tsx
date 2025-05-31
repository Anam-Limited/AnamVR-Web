"use client";

import type React from "react";
import element from "../src/assets/elements.webp";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const animation = useScrollAnimation({ delay: 100 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section
      ref={animation.ref}
      className={`border-t py-16 transition-opacity duration-700 ease-out ${
        animation.isVisible ? "animate-slide-up" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-40">
              <img
                src={element}
                alt="Element"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-grow max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Stay in the loop
            </h2>
            <p className="text-gray-600 mb-4">
              Be the first to get updates on our latest content, special offers,
              and new features.
            </p>

            <div className="mt-2 text-sm text-gray-500">
              By signing up, you're agreeing to receive marketing emails from
              AnamVR. You can unsubscribe at any time. For more details, check
              out our{" "}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Privacy Policy"
                className="underline hover:text-[#7745b8]"
              >
                Privacy Policy
              </a>
              .
            </div>
          </div>

          <div className="w-full md:w-auto flex-shrink-0 mt-4 md:mt-0">
            {isSuccess ? (
              <div className="bg-green-50 text-green-700 px-6 py-4 rounded-lg">
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex w-full max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7745b8]/30"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gray-900 hover:bg-black text-white font-medium px-6 py-3 rounded-r-lg transition-colors"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
