import { useScrollAnimation } from "../hooks/useScrollAnimation";
import socialIreland from "../src/assets/socialIreelandLogo.webp";
import enterpriseIreland from "../src/assets/enterpriseLogo.webp";
import furthrLogo from "../src/assets/furthrLogo.webp";

const trustedLogos = [
  {
    src: socialIreland,
    alt: "Social Entrepreneurs Ireland",
  },
  {
    src: enterpriseIreland,
    alt: "Enterprise Ireland",
  },
  {
    src: furthrLogo,
    alt: "Furthr",
  },
];

export default function Partners() {
  const logosAnimation = useScrollAnimation({ delay: 300 });

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div
        ref={logosAnimation.ref}
        className={`flex flex-col items-center transition-opacity duration-700 ease-out ${
          logosAnimation.isVisible ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#7745b8] font-semibold text-center mb-12 md:mb-16">
          Trusted by the world's leading organizations
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {trustedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
