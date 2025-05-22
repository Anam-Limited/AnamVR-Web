import { Heart, Moon } from "lucide-react";
import mockup from "../src/assets/mockup.jpg";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function AppScreenshot() {
  const animation = useScrollAnimation({ delay: 500 });

  return (
    <div
      ref={animation.ref}
      className={`col-span-3 bg-orange-300 rounded-3xl flex items-center justify-center relative overflow-hidden transition-opacity duration-700 ease-out ${
        animation.isVisible ? "animate-slide-up" : "opacity-0"
      }`}
    >
      <img
        src={mockup}
        alt="App Screenshot"
        className="w-full h-auto rounded-3xl shadow-lg"
      />
    </div>
  );
}
