"use client";

import { ArrowRight, Network } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ContributorsPreview() {
  const animation = useScrollAnimation({ delay: 200 });

  return (
    <div
      ref={animation.ref}
      className={`col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3  
        bg-green-100/80 p-6 rounded-3xl h-full min-h-[280px] flex flex-col 
        justify-between transition-opacity duration-700 ease-out ${
          animation.isVisible ? "animate-slide-up" : "opacity-0"
        }`}
    >
      <div>
        <h3 className="font-bold text-xl text-green-900 mb-3 flex items-center">
          <Network size={18} className="text-green-600 mr-2" />
          Our Contributors
        </h3>
        <p className="text-md text-green-800">
          Meet the brilliant contributors who helped shape AnamVR.
        </p>
      </div>
      <a
        href="/our-contributors"
        aria-label="Know more about our contributors"
        className="flex items-center text-green-700 hover:text-green-900 text-base font-semibold mt-4"
      >
        Know more <ArrowRight size={16} className="ml-1 font-semibold" />
      </a>
    </div>
  );
}
