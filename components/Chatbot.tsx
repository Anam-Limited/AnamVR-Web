import { useState, useEffect, useRef } from "react";
import { useChatbot } from "../context/ChatbotContext";
import { X, SendHorizonal } from "lucide-react";

type FAQ = {
  keywords: string[];
  answer: string;
};

const faqs: FAQ[] = [
  {
    keywords: ["what is anamvr", "about anamvr", "anamvr platform"],
    answer:
      "AnamVR is a mental wellness platform that uses virtual reality and cognitive behavioral therapy techniques to support your mental health.",
  },
  {
    keywords: ["download", "get anamvr", "install"],
    answer:
      "You can download AnamVR from the App Store or Google Play. Visit our Download page for direct links.",
  },
  {
    keywords: ["how does anamvr work", "how it works", "how anamvr works"],
    answer:
      "AnamVR offers immersive VR experiences and guided exercises designed by mental health professionals to help you relax, focus, and improve your wellbeing.",
  },
  {
    keywords: ["free", "pricing", "cost", "price"],
    answer:
      "AnamVR offers both free and premium plans. You can try the basic features for free, or upgrade for more content and features.",
  },
  {
    keywords: [
      "devices",
      "device",
      "supported",
      "compatibility",
      "phone",
      "headset",
    ],
    answer:
      "AnamVR works with most VR headsets and is compatible with iPhone and Android smartphones (4.7-7.2 inch displays).",
  },
  {
    keywords: ["without headset", "no headset", "use without vr"],
    answer:
      "Some features can be accessed without a VR headset, but for the best experience, we recommend using a compatible headset.",
  },
  {
    keywords: ["premium", "subscription", "upgrade"],
    answer:
      "Premium includes access to exclusive VR experiences, advanced tracking, and personalized wellness plans.",
  },
  {
    keywords: ["support", "help", "contact"],
    answer:
      "You can contact our support team through the Contact page or by emailing support@anamvr.com.",
  },
  {
    keywords: ["privacy", "data", "secure"],
    answer:
      "Yes, your privacy is important to us. We never share your personal data without your consent.",
  },
  {
    keywords: ["who created", "founder", "team"],
    answer:
      "AnamVR was created by a team of mental health professionals and technologists passionate about improving wellbeing through technology.",
  },
  {
    keywords: ["anxiety", "stress", "help with anxiety"],
    answer:
      "Yes, AnamVR offers VR exercises and guided meditations specifically designed to help manage anxiety and stress.",
  },
  {
    keywords: ["reset password", "forgot password"],
    answer:
      "To reset your password, go to the login screen and click 'Forgot Password', then follow the instructions.",
  },
  {
    keywords: ["buy headset", "purchase headset", "order headset"],
    answer: "You can purchase the AnamVR headset directly from our Shop page.",
  },
  {
    keywords: ["update", "upgrade app", "latest version"],
    answer:
      "Updates are available through your device's app store. Make sure to keep AnamVR updated for the latest features.",
  },
  {
    keywords: ["cancel subscription", "stop subscription", "unsubscribe"],
    answer:
      "You can manage or cancel your subscription in your account settings or through your app store subscriptions.",
  },
];

export default function Chatbot() {
  const { showChat, closeChat } = useChatbot();
  const [messages, setMessages] = useState([
    { sender: "bot", text: "How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showChat) {
      setMessages([{ sender: "bot", text: "How can I help you today?" }]);
    }
  }, [showChat]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Auto-expand on mobile devices
      if (mobile && showChat) {
        setIsExpanded(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, [showChat]);

  // Auto-scrolling
  useEffect(() => {
    const scrollToBottom = () => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    };

    scrollToBottom();
    // Add a small delay to ensure scrolling happens after render
    setTimeout(scrollToBottom, 10);
  }, [messages]);

  const handleSend = () => {
    const userInput = input.trim();
    if (!userInput) return;

    const lowerInput = userInput.toLowerCase();

    // Find the first FAQ whose keywords match the user input
    const match = faqs.find((faq) =>
      faq.keywords.some((keyword) => lowerInput.includes(keyword))
    );

    const botResponse = match
      ? match.answer
      : "I'm sorry, I don't understand that yet.";

    setMessages([
      ...messages,
      { sender: "user", text: userInput },
      { sender: "bot", text: botResponse },
    ]);
    setInput("");
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (!showChat) return null;

  // Determine chat container styles based on device and expanded state
  const containerStyle =
    isMobile && isExpanded
      ? {
          position: "fixed",
          top: "10%", // Start 10% from the top instead of 0
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "90%", // 90% height instead of 100%
          zIndex: 1000,
          borderRadius: "24px 24px 0 0", // Rounded top corners
          boxShadow: "0 -8px 32px rgba(72, 124, 229, 0.18)",
          background: "#b47ddf", // Use solid color to avoid white space
        }
      : isMobile
      ? {
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "60vh", // 60% height instead of 70%
          zIndex: 1000,
          borderRadius: "24px 24px 0 0",
          boxShadow: "0 -8px 32px rgba(72, 124, 229, 0.18)",
          background: "#b47ddf", // Use solid color
        }
      : {
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          width: 340,
          maxHeight: "80vh", // Limit maximum height
          borderRadius: 24,
          boxShadow: "0 8px 32px rgba(72, 124, 229, 0.18)",
          background: "#b47ddf", // Use solid color
        };

  // Adjust heights for content areas based on expansion state
  const chatAreaHeight =
    isMobile && isExpanded
      ? "calc(90vh - 140px)" // 90% height minus header and input
      : isMobile
      ? "calc(60vh - 130px)" // 60% height minus header and input
      : "350px"; // Shorter default for desktop

  return (
    <div className="fixed z-50" style={containerStyle as React.CSSProperties}>
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{
          borderTopLeftRadius:
            isMobile && !isExpanded ? 24 : isMobile && isExpanded ? 24 : 24, // Always rounded top corners
          borderTopRightRadius:
            isMobile && !isExpanded ? 24 : isMobile && isExpanded ? 24 : 24,
          background: "#7745b8",
        }}
      >
        <span className="text-white font-semibold text-lg flex items-center">
          AnamVR Assistant
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={closeChat}
            className="text-white hover:text-[#eacfff] transition-colors"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div
        className="flex flex-col px-5 py-4 overflow-y-auto bg-[#b47ddf]"
        style={{
          height: chatAreaHeight,
          minHeight: isMobile ? "auto" : "280px", // Ensure minimum height on desktop
        }}
        ref={chatRef}
      >
        <div className="flex flex-col gap-2 mb-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <span
                className={`rounded-2xl px-4 py-2 text-sm max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-[#487ce5] text-white"
                    : "bg-white text-[#7745b8] border border-[#eacfff]"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Input - Bottom with no gap or white space */}
      <div className="px-5 py-3 bg-[#b47ddf]">
        <div className="flex items-center bg-[#eacfff] rounded-xl px-2 py-1">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-transparent outline-none px-2 text-purple-800 placeholder-purple-600 font-medium"
            placeholder="Ask"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            style={{ fontSize: 16 }}
          />
          <button
            onClick={handleSend}
            className="ml-2 bg-[#487ce5] hover:bg-[#7745b8] transition-colors text-white rounded-full w-9 h-9 flex items-center justify-center"
            aria-label="Send"
          >
            <SendHorizonal size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
