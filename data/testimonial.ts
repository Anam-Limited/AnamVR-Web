export type TestimonialType = {
  id: string;
  name: string;
  initial: string;
  role: string;
  quote: string;
};

export const testimonialData: TestimonialType[] = [
  {
    id: "1",
    name: "Sarah J.",
    initial: "S",
    role: "Anxiety Management",
    quote:
      "The mood tracking feature has completely changed how I understand my anxiety patterns. I can now identify triggers before they escalate.",
  },
  {
    id: "2",
    name: "Michael T.",
    initial: "M",
    role: "Depression Recovery",
    quote:
      "The guided meditations in the Relief Hub have been a lifeline during my darkest moments. I've learned to create space between my thoughts and feelings.",
  },
  {
    id: "3",
    name: "Priya K.",
    initial: "P",
    role: "Stress Management",
    quote:
      "I was skeptical about VR therapy, but it's been transformative. The immersive exercises helped me practice mindfulness in a way traditional methods never could.",
  },
  {
    id: "4",
    name: "David L.",
    initial: "D",
    role: "Sleep Improvement",
    quote:
      "The CBT lessons taught me practical techniques I use daily. My sleep has improved dramatically, and I feel more in control of my thoughts.",
  },
  {
    id: "5",
    name: "Emma R.",
    initial: "E",
    role: "Work-Life Balance",
    quote:
      "I've tried many mental health apps, but this is the only one that offers such a comprehensive approach. The combination of tracking, learning, and practicing is perfect.",
  },
  {
    id: "6",
    name: "James W.",
    initial: "J",
    role: "Panic Attack Management",
    quote:
      "The VR exercises helped me practice breathing techniques in simulated stressful situations. Now I can apply them in real life with confidence.",
  },
];
