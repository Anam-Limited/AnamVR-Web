import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="md:col-span-2 bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 md:p-10 rounded-3xl">
      <h1 className="text-4xl md:text-5xl pr-4 font-bold mb-4">
        Re-shape your relationship with mental health
      </h1>
      <p className="mb-6 text-xl text-purple-100">
        AnamVR combines virtual reality with evidence-based therapeutic
        techniques to help you manage emotions and make life easier.
      </p>
      <a
        href="/download"
        className="inline-flex items-center bg-white text-purple-700 hover:bg-purple-50 px-6 py-3 rounded-full font-medium transition-colors"
      >
        Download <ArrowRight size={18} className="ml-2" />
      </a>
    </div>
  );
}
