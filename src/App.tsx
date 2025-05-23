import React, { useState } from "react";

import { testimonialData } from "../data/testimonial";
import { blogPosts } from "../data/blogPost";

import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingPage from "../components/LandingPage";
import About from "../components/About";
import Mission from "../components/Mission";
import Subscribe from "../components/Subscribe";
import HeroSection from "../components/HeroSection";
import AppScreenshot from "../components/AppScreenshot";
import TestimonialSlider from "../components/TestimonialSlider";
import Testimonial from "../components/Testimonial";
import FeatureCardOne from "../components/FeatureCardOne";
import FeatureCardTwo from "../components/FeatureCardTwo";
import BlogPreview from "../components/BlogPreview";
import Description from "../components/Description";
import ShopPreview from "../components/ShopPreview";
import Contact from "../components/Contact";
import Questions from "../components/Questions";
import Chatbot from "../components/Chatbot";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <div className="min-h-screen items-center justify-center max-w-full bg-gray-100 lg:min-w-5xl mx-auto">
      {/* Main Content */}
      <Header />
      <LandingPage />
      <main className="max-w-8xl lg:min-w-5xl mx-auto">
        <Description />
        <Testimonial testimonials={testimonialData} />
        <div className="max-w-7xl mx-auto px-4 py-16 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            <HeroSection />
            <Mission />
            <BlogPreview blogPosts={blogPosts} />
            <ShopPreview />
            <AppScreenshot />
          </div>
        </div>
      </main>
      <Contact />
      <main className="max-w-8xl lg:min-w-5xl mx-auto">
        <Questions />
        <Subscribe />
      </main>
    </div>
  );
}
