import { Brain, Moon, Sun, Eye } from "lucide-react";

export default function FeatureCard() {
  return (
    <div className="overflow-hidden bg-[#eacfff] w-full py-2">
      <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <span
              key={index}
              className="text-[#545454] text-xl font-medium flex items-center gap-3 px-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 15c1.333-1.333 2.667-1.333 4 0s2.667 1.333 4 0 2.667-1.333 4 0 2.667 1.333 4 0"
                />
              </svg>
              Don't miss a thing
            </span>
          ))}
      </div>
    </div>
  );
}
