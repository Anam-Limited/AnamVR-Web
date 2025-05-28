import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Mission from "../components/Mission";
import Subscribe from "../components/Subscribe";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimonial";
import BlogPreview from "../components/BlogPreview";
import ContributorsPreview from "../components/ContributorsPreview";
import Description from "../components/Description";
import ShopPreview from "../components/ShopPreview";
import Partners from "../components/Partners";
import Questions from "../components/Questions";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <div className="min-h-screen items-center justify-center max-w-full bg-gray-100 lg:min-w-5xl mx-auto">
      <Header />
      <LandingPage />
      <main className="max-w-8xl lg:min-w-5xl mx-auto">
        <Description />
        <Partners />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-6">
            {" "}
            <HeroSection />
            <Mission />
            <BlogPreview />
            <ShopPreview />
            <ContributorsPreview />
          </div>
        </div>
        <Testimonial />
      </main>
      <main className="max-w-8xl lg:min-w-5xl mx-auto">
        <Questions />
        <Subscribe />
      </main>
    </div>
  );
}
