import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type ChatbotContextType = {
  showChat: boolean;
  toggleChat: () => void;
  openChat: () => void;
  closeChat: () => void;
};

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => setShowChat((prev) => !prev);
  const openChat = () => setShowChat(true);
  const closeChat = () => setShowChat(false);

  return (
    <ChatbotContext.Provider
      value={{ showChat, toggleChat, openChat, closeChat }}
    >
      {children}
    </ChatbotContext.Provider>
  );
}

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error("useChatbot must be used within a ChatbotProvider");
  }
  return context;
};
