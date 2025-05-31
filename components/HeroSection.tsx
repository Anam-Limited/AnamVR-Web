import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function HeroSection() {
  const animation = useScrollAnimation({ delay: 100 });

  return (
    <div
      ref={animation.ref}
      className={`sm:col-span-6 md:col-span-6 lg:col-span-4 md:row-span-2 
        bg-gradient-to-br from-purple-500 to-purple-600 text-white 
        p-6 sm:p-8 md:p-10 rounded-3xl flex flex-col justify-between 
        transition-opacity duration-700 ease-out ${
          animation.isVisible ? "animate-slide-up" : "opacity-0"
        }`}
    >
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Know more about AnamVR
        </h1>
        <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl">
          AnamVR combines virtual reality with evidence-based therapeutic
          techniques to help you manage emotions and make life easier. Explore
          our features, resources, and community.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 sm:gap-4">
        <a
          href="/for-individuals"
          aria-label="Learn more about AnamVR for individuals and how it can support your emotional well-being"
          className="inline-flex items-center bg-white text-[#7745b8] hover:bg-[#eacfff] 
               px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors"
        >
          Learn More <ArrowRight size={18} className="ml-2" />
        </a>
      </div>
    </div>
  );
}
