import { Heart, Moon } from "lucide-react";
import mockup from "../src/assets/mockup.jpg";

export default function AppScreenshot() {
  return (
    <div className="col-span-3 bg-orange-300 rounded-3xl flex items-center justify-center relative overflow-hidden">
      <img
        src={mockup}
        alt="App Screenshot"
        className="w-full h-auto rounded-3xl shadow-lg"
      />
    </div>
  );
}
