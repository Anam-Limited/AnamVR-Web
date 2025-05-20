"use client";

import { Users, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import team from "../src/assets/team.jpg";

export default function Mission() {
  return (
    <div className="md:col-span-3 lg:col-span-4 bg-yellow-100/80 p-6 rounded-3xl h-full flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-xl text-yellow-900 mb-3 flex items-center">
          <Users size={18} className="text-yellow-600 mr-2" />
          Our Mission
        </h3>
        <p className="text-md text-yellow-800">
          To transform the landscape of anxiety management through innovative VR
          technology, making mental wellness accessible to everyone, everywhere.
        </p>
      </div>
      <a
        href="/about"
        className="flex items-center text-yellow-700 hover:text-yellow-900 text-base font-semibold"
      >
        Read about us <ArrowRight size={16} className="ml-1 font-semibold" />
      </a>
    </div>
  );
}
