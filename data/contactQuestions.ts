export type QuestionCategory = 
  | "general" 
  | "technical" 
  | "features" 
  | "pricing" 
  | "support" 
  | "safety" 
  | "privacy" 
  | "accessibility";

export interface Question {
  question: string;
  answer: string;
  category: QuestionCategory;
}

const questions: Question[] = [
  {
    question: "What is AnamVR?",
    answer:
      "AnamVR is a virtual reality app designed to help users manage their emotions and improve their mental well-being through immersive experiences.",
    category: "general"
  },
  {
    question: "How does AnamVR work?",
    answer:
      "AnamVR combines virtual reality technology with evidence-based therapeutic techniques to provide users with interactive and engaging experiences that promote emotional well-being.",
    category: "general"
  },
  {
    question: "Is AnamVR safe to use?",
    answer:
      "Yes, AnamVR is designed with user safety in mind. It is important to follow the guidelines provided within the app and consult with a healthcare professional if you have any concerns.",
    category: "safety"
  },
  {
    question: "Can I use AnamVR without a VR headset?",
    answer:
      "While AnamVR is primarily designed for use with a VR headset, some features may be accessible on mobile devices or computers. However, the full experience is best enjoyed with a VR headset.",
    category: "technical"
  },
  {
    question: "Is AnamVR suitable for everyone?",
    answer:
      "AnamVR is designed for a wide range of users, but it may not be suitable for individuals with certain medical conditions or those who are pregnant. It is recommended to consult with a healthcare professional before using the app.",
    category: "safety"
  },
  {
    question: "What platforms is AnamVR available on?",
    answer:
      "AnamVR is available on major VR platforms and select mobile devices. Please check the official website for a list of supported devices.",
    category: "technical"
  },
  {
    question: "Do I need an internet connection to use AnamVR?",
    answer:
      "An internet connection is required for downloading the app and accessing certain features, but some experiences may be available offline.",
    category: "technical"
  },
  {
    question: "How do I get started with AnamVR?",
    answer:
      "Download the app from your device's app store, create an account, and follow the onboarding instructions to begin your journey.",
    category: "technical"
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, AnamVR offers a free trial period for new users. Details can be found on the subscription page within the app.",
    category: "pricing"
  },
  {
    question: "How much does AnamVR cost?",
    answer:
      "Pricing varies depending on the subscription plan. Please visit the pricing section on our website for more information.",
    category: "pricing"
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time through your account settings. Your access will continue until the end of the billing period.",
    category: "pricing"
  },
  {
    question: "Are there guided meditations in AnamVR?",
    answer:
      "Yes, AnamVR includes a variety of guided meditations and mindfulness exercises designed to help you relax and focus.",
    category: "features"
  },
  {
    question: "Can I track my progress in AnamVR?",
    answer:
      "AnamVR provides tools to track your usage and progress over time, helping you monitor your mental well-being journey.",
    category: "features"
  },
  {
    question: "Is my data secure with AnamVR?",
    answer:
      "We take user privacy and data security seriously. All personal information is encrypted and handled according to our privacy policy.",
    category: "privacy"
  },
  {
    question: "Can I use AnamVR with friends or family?",
    answer:
      "Some experiences in AnamVR support multi-user modes, allowing you to connect and share sessions with friends or family.",
    category: "features"
  },
  {
    question: "What age group is AnamVR suitable for?",
    answer:
      "AnamVR is intended for users aged 13 and above. Parental guidance is recommended for younger users.",
    category: "safety"
  },
  {
    question: "Are there accessibility features in AnamVR?",
    answer:
      "Yes, AnamVR includes several accessibility options such as adjustable text size, audio descriptions, and customizable controls.",
    category: "accessibility"
  },
  {
    question: "How often is new content added to AnamVR?",
    answer:
      "We regularly update AnamVR with new experiences, meditations, and features. Check the app or website for the latest updates.",
    category: "features"
  },
  {
    question: "Can I provide feedback or request new features?",
    answer:
      "Absolutely! We welcome user feedback. You can submit suggestions or report issues through the app or our website.",
    category: "support"
  },
  {
    question: "Does AnamVR offer support for different languages?",
    answer:
      "AnamVR supports multiple languages. You can change your preferred language in the app settings.",
    category: "accessibility"
  },
  {
    question: "What should I do if I feel discomfort while using AnamVR?",
    answer:
      "If you experience discomfort, dizziness, or nausea, stop using the app immediately and rest. Consult a healthcare professional if symptoms persist.",
    category: "safety"
  },
  {
    question: "Can I use AnamVR for professional therapy?",
    answer:
      "AnamVR is designed as a self-help tool and is not a substitute for professional therapy. Please consult a licensed therapist for clinical needs.",
    category: "safety"
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team through the help section in the app or by visiting our website's contact page.",
    category: "support"
  },
  {
    question: "Are there parental controls in AnamVR?",
    answer:
      "Yes, AnamVR offers parental controls to help manage access and monitor usage for younger users.",
    category: "features"
  },
  {
    question: "Does AnamVR require any special setup?",
    answer:
      "Basic setup instructions are provided within the app. For VR headset users, ensure your device is properly configured before starting.",
    category: "technical"
  },
];

export default questions;
