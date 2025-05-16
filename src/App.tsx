import React, { useState } from "react";

import { testimonialData } from "../data/testimonial";
import { blogPosts } from "../data/blogPost";

import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingPage from "../components/LandingPage";
import About from "../components/About";
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

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <div className="min-h-screen max-w-full bg-gray-100 lg:min-w-5xl mx-auto">
      {/* Main Content */}
      <LandingPage />
      <main className="max-w-8xl lg:min-w-5xl mx-auto">
        <Description />
        <Testimonial testimonials={testimonialData} />
        <div className="grid mt-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* <TestimonialSlider testimonials={testimonials} /> */}
          <Subscribe />
          <About />
          <BlogPreview blogPosts={blogPosts} />
          <ShopPreview />
        </div>
      </main>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
