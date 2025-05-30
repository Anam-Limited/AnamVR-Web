"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { useChatbot } from "../context/ChatbotContext";
import { X, ChevronDown, ChevronUp, Info, User } from "lucide-react";
import anam from "../src/assets/Anam.png";

import { faqs, popularQuestions } from "../data/chatQuestions";
import type { Category } from "../data/chatQuestions";

export default function Chatbot() {
  const { showChat, closeChat } = useChatbot();
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! I'm Anam - your AnamVR assistant." },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [showCategories, setShowCategories] = useState(false);
  const [currentOptions, setCurrentOptions] = useState<string[]>([]);
  const [lastAnsweredQuestion, setLastAnsweredQuestion] = useState<
    string | null
  >(null);
  const chatRef = useRef<HTMLDivElement>(null);

  // Only initialize chat on first open, not every time showChat changes
  const initializedRef = useRef(false);
  useEffect(() => {
    if (showChat && !initializedRef.current) {
      setMessages([
        { sender: "bot", text: "Hi there! I'm Anam - your AnamVR assistant." },
      ]);
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "How can I help you today? Please select a category you'd like to know more about:",
          },
        ]);
        setIsTyping(false);
        setShowCategories(true);
        setActiveCategory(null);
        setCurrentOptions([]);
      }, 1000);
      initializedRef.current = true;
    }
  }, [showChat]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile && showChat) {
        setIsExpanded(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [showChat]);

  // Prevent scrolling of the main page when scrolling chat
  useEffect(() => {
    if (!showChat) return;

    const handleWheel = (e: WheelEvent) => {
      if (chatRef.current && chatRef.current.contains(e.target as Node)) {
        e.stopPropagation();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (chatRef.current && chatRef.current.contains(e.target as Node)) {
        e.stopPropagation();
      }
    };

    // Add event listeners with passive: false to allow preventDefault
    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    // Clean up
    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [showChat]);

  // Auto-scrolling
  useEffect(() => {
    const scrollToBottom = () => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    };

    scrollToBottom();
    setTimeout(scrollToBottom, 10);
  }, [messages, showCategories, currentOptions]);

  const handleCategorySelect = (category: Category) => {
    // Add the category selection as a user message
    const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);
    setMessages((prev) => [...prev, { sender: "user", text: categoryLabel }]);
    setIsTyping(true);
    setShowCategories(false);

    setTimeout(() => {
      setActiveCategory(category);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Great! Here are some common questions about ${categoryLabel}:`,
        },
      ]);
      setIsTyping(false);
      setCurrentOptions(popularQuestions[category]);
    }, 800);
  };

  const handleQuestionSelect = (question: string) => {
    // Find the FAQ that matches this question
    const faq = faqs.find((f) => f.question === question);

    if (!faq) return;

    // Add the user question to the chat
    setMessages((prev) => [...prev, { sender: "user", text: question }]);
    setIsTyping(true);
    setCurrentOptions([]);
    setLastAnsweredQuestion(question);

    // After a delay, show the bot's answer
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: faq.answer }]);
      setIsTyping(false);

      // Set related questions as new options
      if (faq.relatedQuestions && faq.relatedQuestions.length > 0) {
        setTimeout(() => {
          setMessages((prev) => [...prev]);
          setCurrentOptions(faq.relatedQuestions);
        }, 500);
      }
    }, 1000);
  };

  const resetChat = () => {
    initializedRef.current = false;
    setMessages([
      { sender: "bot", text: "Let's start over. How can I help you today?" },
    ]);
    setShowCategories(true);
    setActiveCategory(null);
    setCurrentOptions([]);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Container styles
  const containerStyle =
    isMobile && isExpanded
      ? {
          position: "fixed",
          top: "10%",
          left: "0",
          right: "0",
          bottom: "0",
          width: "100%",
          height: "90%",
          zIndex: 1000,
          borderRadius: "24px 24px 0 0",
          boxShadow: "0 -8px 32px rgba(119, 69, 184, 0.18)",
          background: "#ffffff",
        }
      : isMobile
        ? {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "60vh",
            zIndex: 1000,
            borderRadius: "24px 24px 0 0",
            boxShadow: "0 -8px 32px rgba(119, 69, 184, 0.18)",
            background: "#ffffff",
          }
        : {
            position: "fixed",
            bottom: "1.5rem",
            right: "1.5rem",
            width: 460,
            maxHeight: "80vh",
            borderRadius: 24,
            boxShadow: "0 8px 32px rgba(119, 69, 184, 0.18)",
            background: "#ffffff",
          };

  // Chat area height
  const chatAreaHeight =
    isMobile && isExpanded
      ? "calc(90vh - 140px)"
      : isMobile
        ? "calc(60vh - 140px)"
        : "530px";

  // Add this helper function to render HTML content safely
  const renderAnswer = (answer: string) => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: answer.replace(/\n/g, "<br>") }}
      />
    );
  };

  // Prevent background scrolling when chatbot is open
  useEffect(() => {
    if (showChat) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showChat]);

  if (!showChat) return null;

  return (
    <>
      {showChat && (
        <div
          className="fixed inset-0 bg-gray-700/10 z-40 animate-fadeIn "
          onClick={closeChat}
        />
      )}
      <div
        className="fixed z-50"
        style={{ ...containerStyle, overflow: "hidden" } as React.CSSProperties}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{
            borderTopLeftRadius: isMobile && isExpanded ? 0 : 24,
            borderTopRightRadius: isMobile && isExpanded ? 0 : 24,
            background: "#7745b8",
          }}
        >
          <div className="flex items-center gap-3">
            <Info size={22} className="text-white" />
            <span className="text-white font-semibold text-lg">Anam</span>
          </div>
          <div className="flex items-center gap-3">
            {isMobile && (
              <button
                onClick={toggleExpand}
                className="text-white hover:text-[#eacfff] transition-colors"
                aria-label={isExpanded ? "Minimize chat" : "Expand chat"}
              >
                {isExpanded ? (
                  <ChevronDown size={22} />
                ) : (
                  <ChevronUp size={22} />
                )}
              </button>
            )}
            <button
              onClick={closeChat}
              className="text-white hover:text-[#eacfff] transition-colors"
              aria-label="Close chat"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div
          className="flex flex-col-reverse px-5 py-4 overflow-y-auto bg-[#f6f0ff]"
          style={{
            height: chatAreaHeight,
            minHeight: isMobile ? "auto" : "280px",
          }}
          ref={chatRef}
          onScroll={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-3 mb-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {/* Bot avatar on left */}
                {msg.sender === "bot" && (
                  <img src={anam} alt="Anam" className="w-8 h-8 mt-2" />
                )}
                <div
                  className={`rounded-2xl px-4 py-3 text-sm max-w-[85%] ${
                    msg.sender === "user"
                      ? "bg-[#7745b8] text-white"
                      : "bg-white text-[#545454] shadow-sm"
                  }`}
                >
                  {msg.sender === "bot" ? renderAnswer(msg.text) : msg.text}
                </div>
                {/* User avatar on right */}
                {msg.sender === "user" && (
                  <User className="w-8 h-8 mt-1 bg-[#7745b8] p-2 text-white rounded-full" />
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-[#545454] px-4 py-3 rounded-2xl text-sm max-w-[85%] shadow-sm">
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {/* Category options */}
            {showCategories && !isTyping && (
              <div className="flex justify-end mt-4">
                <div className="grid md:grid-cols-3 gap-2 items-center">
                  {(
                    [
                      "general",
                      "technical",
                      "features",
                      "pricing",
                      "support",
                      "clinical",
                      "business",
                    ] as Category[]
                  ).map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className="bg-[#f6f0ff] justify-center border border-[#7745b8] w-full items-center hover:bg-[#7745b8] hover:text-white text-[#7745b8] rounded-2xl px-4 py-2 text-sm text-center transition-colors"
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Question options */}
            {currentOptions.length > 0 && !isTyping && !showCategories && (
              <div className="flex justify-end mt-2">
                <div className="flex flex-col gap-2 justify-end items-end">
                  {currentOptions.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuestionSelect(question)}
                      className="bg-[#f6f0ff] w-fit border border-[#7745b8] hover:bg-[#7745b8] hover:text-white text-[#7745b8] rounded-2xl px-4 py-2 text-sm text-center transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input/footer area with reset button */}
        <div className="px-5 py-3 bg-[#f6f0ff]  border-t border-gray-200 flex items-center">
          <button
            onClick={resetChat}
            className="bg-[#7745b8] hover:bg-[#582a95] text-[#f6f0ff] rounded-xl px-2 py-2 text-base font-semibold transition-colors w-full"
          >
            New Chat
          </button>
        </div>
      </div>
    </>
  );
}
