import { ArrowRight, ShoppingCart } from "lucide-react";
import vrImage from "../src/assets/vr-image.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ShopPreview() {
  const animation = useScrollAnimation({ delay: 400 });

  return (
    <div
      ref={animation.ref}
      className={`md:col-span-6 lg:col-span-8 sm:col-span-3 bg-blue-100 p-6 rounded-3xl flex flex-col justify-between transition-opacity duration-700 ease-out ${
        animation.isVisible ? "animate-slide-up" : "opacity-0"
      }`}
    >
      <h3 className="flex items-center font-bold text-xl text-blue-900 mb-3">
        <ShoppingCart size={18} className="text-blue-900 mr-2" />
        Shop
      </h3>
      <div className="flex-grow flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-6">
        {/* Left Side: Pricing and Features */}
        <div className="min-h-[250px] flex flex-col">
          <div className="mb-4">
            <div className="mb-4">
              <span className="text-3xl font-bold text-blue-900">€19.99</span>
              <span className="text-blue-700 line-through text-sm ml-2">
                €25.00
              </span>
            </div>
            <ul className="space-y-2">
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
          </div>
        </div>

        {/* Right Side: VR Headset Image */}
        <div className="flex max-w-sm">
          <img
            src={vrImage || "/placeholder.svg"}
            alt="VR Headset"
            className="w-72 h-auto object-contain rounded-3xl"
          />
        </div>
      </div>
      <a
        href="shop"
        className="flex items-center text-blue-700 hover:text-blue-800 text-base font-semibold cursor-pointer"
      >
        View more details <ArrowRight size={16} className="ml-1" />
      </a>
    </div>
  );
}
