import { ChevronRight } from "lucide-react";
import vrImage from "../src/assets/vr-image.png";

export default function ShopPreview() {
  return (
    <div className="bg-blue-50 md:col-span-2 p-6 rounded-3xl">
      <h3 className="font-bold text-blue-900 mb-3">Shop</h3>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
        {/* Left Side: Pricing and Features */}
        <div className="flex-1">
          <div className="mb-4">
            <span className="text-3xl font-bold text-blue-900">€19.99</span>
            <span className="text-blue-700 line-through text-sm ml-2">
              €25.00
            </span>
          </div>
          <ul className="space-y-2 mb-4">
            {[
              "HD Optical Resin Lenses",
              "Custom Focal Adjustment",
              "Optimised field of View",
            ].map((feature) => (
              <li
                key={feature}
                className="flex items-center text-sm text-blue-800"
              >
                <div className="w-4 h-4 bg-blue-200 rounded-full flex items-center justify-center mr-2">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href="/pricing"
            className="flex items-center text-blue-700 hover:text-blue-800 text-sm font-medium"
          >
            View more details <ChevronRight size={16} className="ml-1" />
          </a>
        </div>

        {/* Right Side: VR Headset Image */}
        <div className="flex-1 max-w-sm">
          <img
            src={vrImage || "/placeholder.svg"}
            alt="VR Headset"
            className="w-full h-auto object-contain rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
