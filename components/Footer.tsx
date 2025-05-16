import {
  Heart,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Globe,
  ArrowRight,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import anamvrLogo from "../src/assets/AnamVR-Icon.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                <img
                  src={anamvrLogo}
                  alt="AnamVR Logo"
                  className="w-full h-full rounded-md"
                />
              </div>
              <span className="text-white text-xl font-bold">AnamVR</span>
            </div>

            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Reshaping your relationship with mental health through innovative
              VR technology. Our mission is to make mental wellness accessible
              to everyone, everywhere.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Mail
                  size={18}
                  className="text-purple-400 mr-3 flex-shrink-0"
                />
                <a
                  href="mailto:hello@anamvr.com"
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  hello@anamvr.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone
                  size={18}
                  className="text-purple-400 mr-3 flex-shrink-0"
                />
                <a
                  href="tel:+14155552671"
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  +1 (415) 555-2671
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/features"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight size={14} className="mr-1" /> Features
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight size={14} className="mr-1" /> Pricing
                </a>
              </li>
              <li>
                <a
                  href="/download"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight size={14} className="mr-1" /> Download
                </a>
              </li>
              <li>
                <a
                  href="/updates"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight size={14} className="mr-1" /> Updates
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight size={14} className="mr-1" /> Security
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/blog"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight size={14} className="mr-1" /> Blog
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight size={14} className="mr-1" /> Help Center
                </a>
              </li>
              <li>
                <a
                  href="/guides"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight size={14} className="mr-1" /> Guides
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight size={14} className="mr-1" /> Events
                </a>
              </li>
              <li>
                <a
                  href="/community"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight size={14} className="mr-1" /> Community
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight size={14} className="mr-1" /> About Us
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight size={14} className="mr-1" /> Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight size={14} className="mr-1" /> Contact
                </a>
              </li>
              <li>
                <a
                  href="/partners"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight size={14} className="mr-1" /> Partners
                </a>
              </li>
              <li>
                <a
                  href="/press"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight size={14} className="mr-1" /> Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">
              Stay Connected
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and mental
              health tips.
            </p>

            <form className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-l-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-r-lg text-sm px-4 py-2.5 transition-colors"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-white text-sm font-medium mb-2">
                Download Our App
              </h4>
              <div className="flex space-x-3">
                <a
                  href="/ios-app"
                  className="bg-gray-700 hover:bg-gray-600 p-2 rounded transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
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
                </a>
                <a
                  href="/android-app"
                  className="bg-gray-700 hover:bg-gray-600 p-2 rounded transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.00977 21V3H21.0098V21H3.00977ZM16.0098 11H8.00977V13H16.0098V11ZM14.0098 7H10.0098V9H14.0098V7ZM14.0098 15H10.0098V17H14.0098V15Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-xs mb-4 md:mb-0">
            © {currentYear} AnamVR. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <a
              href="/terms"
              className="hover:text-purple-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="hover:text-purple-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/cookies"
              className="hover:text-purple-400 transition-colors"
            >
              Cookie Policy
            </a>
            <a
              href="/accessibility"
              className="hover:text-purple-400 transition-colors"
            >
              Accessibility
            </a>
            <a
              href="/sitemap"
              className="hover:text-purple-400 transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
