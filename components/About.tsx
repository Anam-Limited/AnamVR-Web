"use client";

import { Users, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import team from "../src/assets/team.jpg";

export default function AboutUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <>
      <div className=" bg-yellow-100/80 p-6 rounded-3xl h-full flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-2xl text-yellow-900 mb-3 flex items-center">
            <Users size={18} className="text-yellow-600 mr-2" />
            Our Mission
          </h3>
          <p className="text-lg text-yellow-800">
            To transform the landscape of anxiety management.
          </p>
        </div>
        {/* <button
          onClick={openModal}
          className="flex items-center text-yellow-700 hover:text-yellow-900 text-lg font-semibold"
        >
          Read about us <ArrowRight size={16} className="ml-1 font-semibold" />
        </button> */}
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative w-[90%] max-w-6xl max-h-[90vh] overflow-auto rounded-3xl bg-yellow-100/30 border border-yellow-200/60 backdrop-blur-lg shadow-2xl shadow-yellow-100/40 ring-1 ring-yellow-200/40">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-0">
              <h2 className="text-4xl font-bold mb-4">About AnamVR</h2>
              <div className="flex items-center mb-6">
                <span className="text-gray-600">Our Story • Founded 2024</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 pt-0">
              <div className="mb-8">
                <img
                  src={team}
                  alt="AnamVR Team"
                  className="w-full h-auto rounded-xl mb-4"
                />
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  Pierce O'Brien [left]: As a skilled game designer and
                  developer, Pierce co-founded AnamVR, infusing creativity and
                  innovation into our platform. His passion for creating
                  immersive experiences fosters a unique approach to mental
                  wellness through gamification. Rob Sheridan [right]: As a
                  qualified Psychotherapist and member of the Irish Association
                  of Counselling Psychotherapists (IACP), specialising in
                  cognitive behavioural therapy (CBT), Rob brings invaluable
                  insight as the co-founder of AnamVR. His dedication to mental
                  wellness and understanding of therapeutic techniques drives
                  the foundation of our platform. Rob and Pierce lead AnamVR
                  with a shared vision to revolutionise mental wellness,
                  blending therapeutic principles with cutting-edge technology
                  for a transformative user experience.
                </p>

                <p>
                  We believe that by combining evidence-based therapeutic
                  techniques with immersive VR experiences, we can create
                  powerful tools for emotional regulation, anxiety management,
                  and overall mental wellbeing. Our approach is grounded in
                  cognitive-behavioral therapy principles, mindfulness
                  practices, and the latest research in neuroscience.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
