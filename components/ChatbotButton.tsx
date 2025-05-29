"use client";

import { MessageSquareMore } from "lucide-react";
import { useChatbot } from "../context/ChatbotContext";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ChatbotButton() {
  const { showChat, openChat } = useChatbot();
  const [isHovered, setIsHovered] = useState(false);

  // Don't show the button if chat is already open
  if (showChat) return null;

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      onClick={openChat}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center shadow-lg rounded-full bg-[#7745b8] text-white p-3 sm:p-4"
      style={{
        boxShadow: isHovered
          ? "0 8px 32px rgba(119, 69, 184, 0.3)"
          : "0 4px 16px rgba(119, 69, 184, 0.2)",
        transition: "box-shadow 0.3s ease",
      }}
      aria-label="Open chat with Anam"
    >
      <MessageSquareMore size={24} className="text-white" />
    </motion.button>
  );
}
