"use client";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Plus, Minus } from "lucide-react";
import questions, { Question } from "../data/contactQuestions";
export default function Contact() {
  const animation = useScrollAnimation({ delay: 200 });
  const faqAnimation = useScrollAnimation({ delay: 300 });
  const [activeIndex, setActiveIndex] = useState<number | undefined>();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  function handleToggle(index: number) {
    if (activeIndex === index) {
      setActiveIndex(undefined);
    } else {
      setActiveIndex(index);
    }
  }

  // Get all unique categories
  const categories: string[] = [
    "all",
    ...Array.from(new Set(questions.map((faq: Question) => faq.category))),
  ];

  // Filter questions based on selected category
  const filteredFaqs: Question[] =
    activeCategory === "all"
      ? questions
      : questions.filter((faq: Question) => faq.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100  to-purple-100">
      {/* Header Section */}
      <div
        ref={animation.ref}
        className={`max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32 gap-12 items-center justify-center transition-opacity duration-700 ease-out ${
          animation.isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Content */}
        <div className="flex flex-col justify-center items-center text-center mt-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-[#2b2b2b] mb-6">
            Contact us
          </h1>

          <p className="text-lg text-[#2b2b2b] mb-8 max-w-lg">
            We're here to help. Visit our help center to receive support with
            your subscription, account, troubleshooting, and top FAQs.
          </p>
        </div>

        {/* FAQ Section */}
        <div
          ref={faqAnimation.ref}
          className={`px-4 pb-24 transition-opacity duration-700 ease-out ${
            faqAnimation.isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category: string) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[#7745b8] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48">
            {filteredFaqs.map((item: Question, index: number) => (
              <div
                key={index}
                className={`pb-6 ${
                  index === 0 ? "border-t border-[#545454]/30 pt-6 " : ""
                }${
                  index !== filteredFaqs.length - 1
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
                  <div className="mt-4">
                    <p
                      className="text-base sm:text-lg text-gray-700"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    ></p>

                    {/* Related Questions */}
                    {item.relatedQuestions &&
                      item.relatedQuestions.length > 0 && (
                        <div className="mt-4">
                          <p className="font-medium text-sm text-gray-700">
                            Related Questions:
                          </p>
                          <ul className="mt-2 space-y-1">
                            {item.relatedQuestions.map(
                              (question: string, idx: number) => (
                                <li
                                  key={idx}
                                  className="text-sm text-[#7745b8]"
                                >
                                  {question}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
