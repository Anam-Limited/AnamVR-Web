import { Heart, Brain, Moon, Sun } from "lucide-react";

const feature = [
  {
    id: 1,
    title: "VR Therapy",
    description:
      "Lorem ipsum dolor sit amet consectetur. A non augue eget egestas habitasse placerat. Adipiscing sagittis bibendum felis sollicitudin egestas egestas. Etiam etiam amet sed mollis.",
    icon: <Brain size={24} className="text-blue-600" />,
    iconColor: "bg-blue-900/20",
    textColor: "text-blue-900/80",
  },
  {
    id: 2,
    title: "Emotion Tracking",
    description:
      "Lorem ipsum dolor sit amet consectetur. A non augue eget egestas habitasse placerat. Adipiscing sagittis bibendum felis sollicitudin egestas egestas. Etiam etiam amet sed mollis.",
    icon: <Heart size={24} className="text-purple-600" />,
    iconColor: "bg-purple-900/20",
    textColor: "text-purple-900/80",
  },
];

export default function FeatureCard() {
  return (
    <>
      {feature.map((feature) => (
        <div className="md:col-span-1 min-h-48 bg-white p-6 rounded-3xl shadow-sm flex flex-col justify-between">
          <div className="flex flex-col gap-2 items-start mb-4">
            <div className={`${feature.iconColor} p-2 rounded-full`}>
              {feature.icon}
            </div>
            <h2 className="text-2xl font-bold text-purple">{feature.title}</h2>
          </div>
          <p className={`${feature.textColor} text-md mt-auto`}>
            {feature.description}
          </p>
        </div>
      ))}
    </>
  );
}
