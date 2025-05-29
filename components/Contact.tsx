"use client";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Contact() {
  const animation = useScrollAnimation({ delay: 200 });

  return (
    <div className="min-h-screen bg-white">
      <div
        ref={animation.ref}
        className={`max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-opacity duration-700 ease-out ${
          animation.isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Left Column - Content */}
        <div className="flex flex-col">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6">
            Contact us
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            We're here to help. Visit our help center to receive support
            with your subscription, account, troubleshooting, and top
            FAQs.
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

            <div>
              <h3 className="text-lg font-semibold text-gray-800">Office Hours</h3>
              <p className="text-gray-600">Monday – Friday, 9am – 5pm GMT</p>
            </div>
          </div>
        </div>

        {/* Right Column - Illustration */}
        <div className="bg-yellow-400 rounded-3xl overflow-hidden relative h-[400px] sm:h-[500px]">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Orange blob */}
            <div className="absolute w-64 h-64 rounded-full bg-orange-500 left-0 top-0 flex items-center justify-center">
              <div className="w-12 h-6 border-b-4 border-black rounded-full mt-6"></div>
            </div>

            {/* Green blob */}
            <div className="absolute w-32 h-32 rounded-lg bg-green-500 right-0 bottom-0 flex items-center justify-center">
              <div className="w-8 h-4 border-b-2 border-black rounded-full mt-2"></div>
            </div>

            {/* Blue blob */}
            <div className="absolute w-40 h-24 rounded-full bg-blue-500 left-4 bottom-8">
              <div className="flex justify-center mt-4 space-x-4">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Speech bubble */}
            <div className="absolute w-16 h-16 bg-white rounded-full left-12 top-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
