"use client";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Contact() {
  const animation = useScrollAnimation({ delay: 200 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-purple-200">
      <div
        ref={animation.ref}
        className={`max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-opacity duration-700 ease-out ${
          animation.isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Left Column - Content */}
        <div className="flex flex-col">
          <h1 className="text-5xl sm:text-6xl font-bold text-[#2b2b2b] mb-6">
            Contact us
          </h1>

          <p className="text-lg text-[#2b2b2b] mb-8 max-w-lg">
            We're here to help. Visit our help center to receive support with
            your subscription, account, troubleshooting, and top FAQs.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/help-center"
              className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full transition-colors"
            >
              Visit Help Center
            </a>

            <button
              onClick={() => window.open("mailto:support@anamvr.com")}
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-800 font-medium px-8 py-3 rounded-full border border-gray-300 transition-colors"
            >
              Email Support
            </button>
          </div>

          <div className="mt-12 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">support@anamvr.com</p>
            </div>
          </div>
        </div>

        {/* Right Column - Illustration */}
        <div className="bg-yellow-400 rounded-3xl overflow-hidden relative h-[400px] sm:h-[500px]"></div>
      </div>
    </div>
  );
}
