import type React from "react";

import { useState } from "react";
import { Mail, Send, ArrowRight } from "lucide-react";

export default function StayUpdated() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <div className="bg-gradient-to-br from-purple-100 to-blue-200 p-6 rounded-3xl h-full">
      <h3 className="font-bold text-purple-900 mb-3 flex items-center">
        <Mail size={18} className="text-purple-600 mr-2" />
        Stay Updated
      </h3>
      <p className="text-sm text-purple-800 mb-4">
        Subscribe to our newsletter for the latest updates and mental health
        tips.
      </p>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="bg-white border border-purple-200 text-purple-900 text-sm rounded-l-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
            required
          />
          <button
            type="submit"
            className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-r-lg text-sm px-4 py-2.5"
          >
            <Send size={16} />
          </button>
        </div>
      </form>

      <a
        href="/contact"
        className="flex items-center text-purple-700 hover:text-purple-900 text-sm font-medium mt-4"
      >
        Contact us <ArrowRight size={16} className="ml-1" />
      </a>
    </div>
  );
}
