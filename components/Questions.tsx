import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const questions = [
  {
    question: "What is AnamVR?",
    answer:
      "AnamVR is a virtual reality app designed to help users manage their emotions and improve their mental well-being through immersive experiences.",
  },
  {
    question: "How does AnamVR work?",
    answer:
      "AnamVR combines virtual reality technology with evidence-based therapeutic techniques to provide users with interactive and engaging experiences that promote emotional well-being.",
  },
  {
    question: "Is AnamVR safe to use?",
    answer:
      "Yes, AnamVR is designed with user safety in mind. It is important to follow the guidelines provided within the app and consult with a healthcare professional if you have any concerns.",
  },
  {
    question: "Can I use AnamVR without a VR headset?",
    answer:
      "While AnamVR is primarily designed for use with a VR headset, some features may be accessible on mobile devices or computers. However, the full experience is best enjoyed with a VR headset.",
  },
  {
    question: "Is AnamVR suitable for everyone?",
    answer:
      "AnamVR is designed for a wide range of users, but it may not be suitable for individuals with certain medical conditions or those who are pregnant. It is recommended to consult with a healthcare professional before using the app.",
  },
];

export default function Questions() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>();
  const animation = useScrollAnimation({ delay: 100 });

  function handleToggle(index: number) {
    if (activeIndex === index) {
      setActiveIndex(undefined);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <>
      <div
        ref={animation.ref}
        className={`max-w-7xl my-16 mx-auto px-4 pt-12 pb-24 transition-opacity duration-700 ease-out ${
          animation.isVisible ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="text-center text-purple-900 mb-16 flex flex-col items-center">
          <span className="font-semibold text-5xl">FAQs</span>
        </div>

        <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48">
          {questions.map((item, index) => (
            <div
              key={index}
              className={`pb-6 ${
                index === 0 ? "border-t border-[#545454]/30 pt-6 " : ""
              }${
                index !== questions.length - 1
                  ? "border-b border-[#545454]/30"
                  : ""
              } cursor-pointer`}
              onClick={() => handleToggle(index)}
            >
              <h3 className="md:text-2xl sm:text-xl text-lg flex items-center justify-between font-medium text-black">
                {item.question}
                {activeIndex === index ? (
                  <Minus size={20} className="text-lg text-gray-700" />
                ) : (
                  <Plus size={20} className="text-lg text-gray-700" />
                )}
              </h3>
              {activeIndex === index && (
                <p className="mt-4 text-base sm:text-lg text-gray-700">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
