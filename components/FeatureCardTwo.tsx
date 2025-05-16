import { Heart, Brain, Moon, Sun } from "lucide-react";

const feature = [
  {
    id: 3,
    title: "Guided Relaxation",
    description:
      "Lorem ipsum dolor sit amet consectetur. A non augue eget egestas habitasse placerat. Adipiscing sagittis bibendum felis sollicitudin egestas egestas. Etiam etiam amet sed mollis.",
    icon: <Moon size={24} className="text-green-600" />,
    iconColor: "bg-green-900/20",
    textColor: "text-green-900/80",
  },
  {
    id: 4,
    title: "Daily Practice",
    description:
      "Lorem ipsum dolor sit amet consectetur. A non augue eget egestas habitasse placerat. Adipiscing sagittis bibendum felis sollicitudin egestas egestas. Etiam etiam amet sed mollis.",
    icon: <Sun size={24} className="text-yellow-600" />,
    iconColor: "bg-yellow-900/20",
    textColor: "text-yellow-900/80",
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
