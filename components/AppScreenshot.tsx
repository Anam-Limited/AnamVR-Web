import { Heart, Moon } from "lucide-react";

export default function AppScreenshot() {
  return (
    <div className="bg-blue-100 p-6 rounded-3xl flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10">
        <div
          className="bg-white rounded-2xl shadow-lg overflow-hidden border-8 border-white"
          style={{ width: "160px", height: "320px" }}
        >
          <div className="bg-purple-100 h-full w-full p-3 flex flex-col">
            <div className="bg-purple-500 text-white rounded-lg p-2 mb-3">
              <h3 className="font-bold text-sm">VR Hub</h3>
            </div>
            <div className="bg-white rounded-lg p-2 mb-2 flex items-center">
              <div className="bg-purple-200 rounded-full p-1 mr-2">
                <Heart size={12} className="text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-xs">Managing Anxiety</h4>
                <p className="text-[10px] text-gray-500">10 min</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-2 mb-2 flex items-center">
              <div className="bg-blue-200 rounded-full p-1 mr-2">
                <Moon size={12} className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-xs">Better Sleep</h4>
                <p className="text-[10px] text-gray-500">15 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-200 rounded-full opacity-50"></div>
      <div className="absolute -top-10 -left-10 w-24 h-24 bg-purple-200 rounded-full opacity-50"></div>
    </div>
  );
}
