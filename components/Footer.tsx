import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import anamvrLogo from "../src/assets/AnamVR-Icon.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mb-20 mt-10 mx-auto px-6">
        {/* Main footer content in a row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
              <img
                src={anamvrLogo || "/placeholder.svg"}
                alt="AnamVR Logo"
                className="w-full h-full rounded-md"
              />
            </div>
            <span className="text-white text-lg font-bold">AnamVR</span>
          </div>

          {/* Main navigation links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-6 md:mb-0">
            <a
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="/download"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Download
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="/blog"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Blog
            </a>
          </div>

          {/* App download buttons */}
          <div className="flex space-x-3 mb-6 md:mb-0">
            <a
              href="/ios-app"
              className="bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-md transition-colors flex items-center text-sm"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="mr-1.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0349 10.3652C16.9917 8.08813 18.8294 6.85948 18.9079 6.81034C17.8466 5.24969 16.1913 5.03237 15.6013 5.01172C14.1719 4.86517 12.7887 5.87241 12.0635 5.87241C11.3244 5.87241 10.1943 5.02827 8.98276 5.05548C7.41552 5.08269 5.96207 5.9669 5.16 7.34345C3.50345 10.1531 4.72552 14.2979 6.31586 16.5341C7.11793 17.6345 8.05241 18.8631 9.27448 18.8155C10.4621 18.7679 10.9176 18.0427 12.3331 18.0427C13.7348 18.0427 14.1583 18.8155 15.4007 18.7883C16.6772 18.7679 17.4793 17.6889 18.2542 16.5748C19.1751 15.2934 19.5493 14.0376 19.5697 13.9765C19.5425 13.9629 17.0826 13.0079 17.0349 10.3652Z"
                  fill="white"
                />
                <path
                  d="M14.8217 3.6C15.4697 2.79793 15.9048 1.68103 15.7797 0.545454C14.8217 0.585103 13.6321 1.17931 12.9569 1.96483C12.3566 2.65655 11.8266 3.81379 11.9721 4.90759C13.0521 5.00586 14.1533 4.38897 14.8217 3.6Z"
                  fill="white"
                />
              </svg>
              iOS
            </a>
            <a
              href="/android-app"
              className="bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-md transition-colors flex items-center text-sm"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="mr-1.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 3H6.5C5.4 3 4.5 3.9 4.5 5V19C4.5 20.1 5.4 21 6.5 21H17.5C18.6 21 19.5 20.1 19.5 19V5C19.5 3.9 18.6 3 17.5 3ZM13.5 19H10.5V17H13.5V19ZM17 16H7V5H17V16Z"
                  fill="white"
                />
              </svg>
              Android
            </a>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 w-full mb-6"></div>

        {/* Copyright row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} AnamVR. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="/privacy"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
