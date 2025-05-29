import { ArrowRight, ShoppingCart } from "lucide-react";
import vrImage from "../src/assets/vr-image.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ShopPreview() {
  const animation = useScrollAnimation({ delay: 400 });

  return (
    <div
      ref={animation.ref}
      className={`md:col-span-3 lg:col-span-5 sm:col-span-3 bg-blue-100 p-4 sm:p-6 rounded-3xl flex flex-col justify-between transition-opacity duration-700 ease-out ${
        animation.isVisible ? "animate-slide-up" : "opacity-0"
      }`}
    >
      <h3 className="flex items-center font-bold text-xl text-blue-900 mb-2">
        <ShoppingCart size={18} className="text-blue-900 mr-2" />
        Shop
      </h3>

      <div className="flex-grow grid grid-cols-5 items-start gap-2">
        {/* Left Side: Pricing and Features (3/5 width) */}
        <div className="col-span-3 flex flex-col">
          <div className="mb-3">
            <div className="mb-3">
              <span className="text-2xl sm:text-3xl font-bold text-blue-900">
                €19.99
              </span>
              <span className="text-blue-700 line-through text-sm ml-2">
                €25.00
              </span>
            </div>
            <ul className="space-y-1.5">
              {[
                "HD Optical Resin Lenses",
                "Custom Focal Adjustment",
                "Optimised field of View",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-center text-sm text-blue-800"
                >
                  <div className="min-w-4 h-4 bg-blue-200 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
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
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: VR Headset Image (2/5 width) */}
        <div className="col-span-2 flex justify-end items-center h-full">
          <img
            src={vrImage || "/placeholder.svg"}
            alt="VR Headset"
            className="w-full max-h-28 sm:max-h-36 object-contain rounded-xl"
          />
        </div>
      </div>

      <a
        href="shop"
        className="flex items-center text-blue-700 hover:text-blue-800 text-sm sm:text-base font-semibold cursor-pointer mt-2"
      >
        View more details <ArrowRight size={16} className="ml-1" />
      </a>
    </div>
  );
}
