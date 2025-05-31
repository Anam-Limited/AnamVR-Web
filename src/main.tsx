import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Layout from "./Layout.tsx";
import About from "../components/About.tsx";
import BlogPage from "../components/BlogPage.tsx";
import BlogContent from "../components/BlogContent.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatbotProvider } from "../context/ChatbotContext.tsx";
import Contact from "../components/Contact.tsx";
import Chatbot from "../components/Chatbot";
import ForIndividuals from "../components/ForIndividuals.tsx";
import ForOrganisations from "../components/ForOrganisations.tsx";
import Contributors from "../components/Contributors.tsx";
import OurTeam from "../components/OurTeam.tsx";
import ChatOverlay from "../components/ChatOverlay.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ChatbotProvider>
        <ChatOverlay>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<App />} />
              <Route path="about" element={<About />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="/blog/:blogId" element={<BlogContent />} />
              <Route path="for-individuals" element={<ForIndividuals />} />
              <Route path="for-organisations" element={<ForOrganisations />} />
              <Route path="our-contributors" element={<Contributors />} />
              <Route path="our-team" element={<OurTeam />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
          <Chatbot />
        </ChatOverlay>
      </ChatbotProvider>
    </BrowserRouter>
  </StrictMode>
);
