import { ReactNode } from "react";
import ChatbotButton from "./ChatbotButton";
import Chatbot from "./Chatbot";

export default function ChatOverlay({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      {/* These components will float over all content */}
      <ChatbotButton />
      <Chatbot />
    </>
  );
}
