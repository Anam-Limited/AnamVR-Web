import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="md:col-span-6 lg:col-span-4 md:row-span-2 bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 md:p-10 rounded-3xl flex flex-col justify-between">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Know more about AnamVR
        </h1>
        <p className="text-lg text-white/90 mb-8 max-w-2xl">
          AnamVR combines virtual reality with evidence-based therapeutic
          techniques to help you manage emotions and make life easier. Explore
          our features, resources, and community.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <a
          href="/about"
          className="inline-flex items-center bg-white text-[#7745b8] hover:bg-[#eacfff] px-6 py-3 rounded-full font-medium transition-colors"
        >
          Learn more <ArrowRight size={18} className="ml-2" />
        </a>
        <a
          href="/download"
          className="inline-flex items-center bg-[#eacfff]/20 text-white border border-white/30 hover:bg-white/20 px-6 py-3 rounded-full font-medium transition-colors"
        >
          Download app <ArrowRight size={18} className="ml-2" />
        </a>
      </div>
    </div>
  );
}
