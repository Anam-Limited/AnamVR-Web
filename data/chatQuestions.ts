export type FAQ = {
  question: string;
  answer: string;
  category: Category;
  relatedQuestions?: string[];
};

export type Category =
  | "general"
  | "technical"
  | "features"
  | "pricing"
  | "support"
  | "clinical"
  | "business";

export const faqs: FAQ[] = [
  {
    question: "What is AnamVR?",
    answer:
      "AnamVR is a mental wellness platform that uses virtual reality and cognitive behavioural therapy techniques to support your mental health.",
    category: "general",
    relatedQuestions: [
      "How does AnamVR work?",
      "Is AnamVR free? What's the pricing?",
      "Who created AnamVR?",
    ],
  },
  {
    question: "How do I download or install AnamVR?",
    answer:
      "You can download AnamVR from the following links:<br/><br/>• <a href='https://play.google.com/store/apps/details?id=com.anamvr&hl=en' target='_blank' rel='noopener noreferrer' style=\"color: #3B82F6;\">Google Play Store</a><br/>• <a href='https://apps.apple.com/ie/app/anamvr/id6499339767' target='_blank' rel='noopener noreferrer' style=\"color: #3B82F6;\">Apple App Store</a>",
    category: "technical",
    relatedQuestions: [
      "What devices are supported?",
      "Can I use AnamVR without a headset?",
      "How do I start using AnamVR?",
    ],
  },
  {
    question: "How does AnamVR work?",
    answer:
      "AnamVR offers immersive VR experiences and guided exercises designed by mental health professionals to help you relax, focus, and improve your wellbeing.",
    category: "features",
    relatedQuestions: [
      "What kind of VR experiences are included?",
      "What's included in Premium?",
      "Can I use AnamVR without a headset?",
    ],
  },
  {
    question: "Is AnamVR free? What's the pricing?",
    answer:
      "AnamVR offers both free and premium plans. You can try the basic features for free, or upgrade for more content and features.",
    category: "pricing",
    relatedQuestions: [
      "What's included in Premium?",
      "How do I cancel my subscription?",
      "Can I switch billing plans?",
    ],
  },
  {
    question: "What devices are supported?",
    answer:
      "AnamVR works with most VR headsets and is compatible with iPhone and Android smartphones (4.7–7.2 inch displays).",
    category: "technical",
    relatedQuestions: [
      "Can I use AnamVR without a headset?",
      "Do I need your headset specifically?",
      "How do I download or install AnamVR?",
    ],
  },
  {
    question: "Can I use AnamVR without a headset?",
    answer:
      "Some features can be accessed without a VR headset, but for the best experience, we recommend using a compatible headset.",
    category: "technical",
    relatedQuestions: [
      "What devices are supported?",
      "Where can I buy a headset?",
      "What's included in Premium?",
    ],
  },
  {
    question: "What's included in Premium?",
    answer:
      "Premium includes access to exclusive VR experiences, advanced tracking, and personalised wellness plans.",
    category: "pricing",
    relatedQuestions: [
      "Is AnamVR free? What's the pricing?",
      "How often is new content added?",
      "Can I track my progress?",
    ],
  },
  {
    question: "How do I contact support?",
    answer:
      "You can contact our support team through the Contact page or by emailing support@anamvr.com.",
    category: "support",
    relatedQuestions: [
      "How do I reset my password?",
      "The app isn't working—what should I do?",
      "How can I send feedback or request a feature?",
    ],
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Yes, your privacy is important to us. We never share your personal data without your consent.",
    category: "general",
    relatedQuestions: [
      "Can my therapist monitor my use?",
      "Can I share my data with someone like a therapist?",
      "Is AnamVR clinically validated?",
    ],
  },
  {
    question: "Who created AnamVR?",
    answer:
      "AnamVR was created by a team of mental health professionals and technologists passionate about improving wellbeing through technology.",
    category: "general",
    relatedQuestions: [
      "Is AnamVR clinically validated?",
      "Are you adding AI or new features?",
      "What is AnamVR?",
    ],
  },
  {
    question: "Can AnamVR help with anxiety or stress?",
    answer:
      "Yes, AnamVR offers VR exercises and guided meditations specifically designed to help manage anxiety and stress.",
    category: "clinical",
    relatedQuestions: [
      "Is this suitable for sleep or focus?",
      "Is this a replacement for therapy?",
      "Is AnamVR clinically validated?",
    ],
  },
  {
    question: "How do I reset my password?",
    answer:
      "To reset your password, go to the login screen and click 'Forgot Password', then follow the instructions.",
    category: "support",
    relatedQuestions: [
      "How do I contact support?",
      "The app isn't working—what should I do?",
      "Is my data private and secure?",
    ],
  },
  {
    question: "Where can I buy a headset?",
    answer: "You can purchase the AnamVR headset directly from our Shop page.",
    category: "technical",
    relatedQuestions: [
      "Do I need your headset specifically?",
      "What devices are supported?",
      "Can I use AnamVR without a headset?",
    ],
  },
  {
    question: "How do I update the app?",
    answer:
      "Updates are available through your device's app store. Make sure to keep AnamVR updated for the latest features.",
    category: "technical",
    relatedQuestions: [
      "The app isn't working—what should I do?",
      "How do I download or install AnamVR?",
      "What devices are supported?",
    ],
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can manage or cancel your subscription in your account settings or through your app store subscriptions.",
    category: "pricing",
    relatedQuestions: [
      "Can I get a refund?",
      "Can I switch billing plans?",
      "Is AnamVR free? What's the pricing?",
    ],
  },
  {
    question: "How do I start using AnamVR?",
    answer:
      "Download the app, create an account, and follow the simple setup instructions for your headset.",
    category: "general",
    relatedQuestions: [
      "How do I download or install AnamVR?",
      "What devices are supported?",
      "What kind of VR experiences are included?",
    ],
  },
  {
    question: "Is AnamVR available internationally?",
    answer:
      "Yes, AnamVR is available globally. As long as you have a compatible smartphone and VR headset, you can access the app from anywhere.",
    category: "general",
    relatedQuestions: [
      "What languages are supported?",
      "What devices are supported?",
      "Is AnamVR free? What's the pricing?",
    ],
  },
  {
    question: "What languages are supported?",
    answer:
      "Currently, AnamVR is available in English. We’re working on support for additional languages based on demand.",
    category: "features",
    relatedQuestions: [
      "Is AnamVR available internationally?",
      "How can I send feedback or request a feature?",
      "What kind of VR experiences are included?",
    ],
  },
  {
    question: "What kind of VR experiences are included?",
    answer:
      "AnamVR includes mindfulness journeys, breathing exercises, guided meditations, CBT-based activities, and immersive nature environments.",
    category: "features",
    relatedQuestions: [
      "How often is new content added?",
      "What's included in Premium?",
      "Is this suitable for sleep or focus?",
    ],
  },
  {
    question: "How often is new content added?",
    answer:
      "We regularly add new experiences and wellness modules every month for premium users, based on feedback and current mental health trends.",
    category: "features",
    relatedQuestions: [
      "What kind of VR experiences are included?",
      "What's included in Premium?",
      "How can I send feedback or request a feature?",
    ],
  },
  {
    question: "Can I repeat sessions?",
    answer:
      "Yes, you can revisit any session as often as you like. Many users return to their favourites for ongoing support.",
    category: "features",
    relatedQuestions: [
      "Is content personalised?",
      "Can I track my progress?",
      "What kind of VR experiences are included?",
    ],
  },
  {
    question: "Is content personalised?",
    answer:
      "Yes, premium users can access personalised wellness journeys based on mood check-ins and preferences.",
    category: "features",
    relatedQuestions: [
      "Can I track my progress?",
      "What's included in Premium?",
      "What kind of VR experiences are included?",
    ],
  },
  {
    question: "Can I track my progress?",
    answer:
      "Yes, the app includes simple dashboards to track usage, mood changes, and completed sessions.",
    category: "features",
    relatedQuestions: [
      "Is content personalised?",
      "Can I share my data with someone like a therapist?",
      "What's included in Premium?",
    ],
  },
  {
    question: "Is AnamVR clinically validated?",
    answer:
      "AnamVR is based on proven cognitive behavioural therapy principles and was developed with input from mental health professionals.",
    category: "clinical",
    relatedQuestions: [
      "Is this a replacement for therapy?",
      "Who created AnamVR?",
      "Can AnamVR help with anxiety or stress?",
    ],
  },
  {
    question: "Is this a replacement for therapy?",
    answer:
      "AnamVR is a supportive self-help tool and not a replacement for professional therapy or medical advice.",
    category: "clinical",
    relatedQuestions: [
      "Can my therapist monitor my use?",
      "Is AnamVR clinically validated?",
      "Can AnamVR help with anxiety or stress?",
    ],
  },
  {
    question: "Can my therapist monitor my use?",
    answer:
      "You can share your progress reports with your therapist if you wish, but AnamVR does not currently integrate directly with clinical systems.",
    category: "clinical",
    relatedQuestions: [
      "Can I share my data with someone like a therapist?",
      "Is my data private and secure?",
      "Is this a replacement for therapy?",
    ],
  },
  {
    question: "Is there a version for businesses?",
    answer:
      "Yes, we offer tailored packages for organisations looking to support their teams’ mental wellness at scale.",
    category: "business",
    relatedQuestions: [
      "Can I get a demo for my company?",
      "Is there a trial for businesses?",
      "Can I use it in the workplace?",
    ],
  },
  {
    question: "Can I get a demo for my company?",
    answer:
      "Absolutely. Contact our sales team to book a live demo or get a custom quote.",
    category: "business",
    relatedQuestions: [
      "Is there a version for businesses?",
      "Is there a trial for businesses?",
      "Can I use it in the workplace?",
    ],
  },
  {
    question: "Can I get a refund?",
    answer:
      "Refunds are handled via your app store provider and follow their policies. If you need help, reach out to support.",
    category: "pricing",
    relatedQuestions: [
      "How do I cancel my subscription?",
      "Can I switch billing plans?",
      "Is AnamVR free? What's the pricing?",
    ],
  },
  {
    question: "Can I switch billing plans?",
    answer:
      "Yes, you can switch plans anytime via your account settings in the app or your app store subscription settings.",
    category: "pricing",
    relatedQuestions: [
      "How do I cancel my subscription?",
      "Can I get a refund?",
      "Is AnamVR free? What's the pricing?",
    ],
  },
  {
    question: "Can I use AnamVR offline?",
    answer:
      "Some experiences can be downloaded in advance for offline use, especially for premium users.",
    category: "features",
    relatedQuestions: [
      "Is content personalised?",
      "Can I share my data with someone like a therapist?",
      "What's included in Premium?",
    ],
  },
  {
    question: "Can I use headphones or earbuds?",
    answer:
      "Yes, we recommend using quality headphones or earbuds to enhance the immersive audio experience.",
    category: "technical",
    relatedQuestions: [
      "Can I mute the app or music?",
      "Can I use AnamVR offline?",
      "What devices are supported?",
    ],
  },
  {
    question: "The app isn’t working—what should I do?",
    answer:
      "Please try restarting or reinstalling the app. If the issue continues, contact support with details about your device.",
    category: "support",
    relatedQuestions: [
      "How do I contact support?",
      "How do I update the app?",
      "What devices are supported?",
    ],
  },
  {
    question: "Do I need your headset specifically?",
    answer:
      "No. AnamVR supports most smartphone VR headsets that are compatible with your device.",
    category: "technical",
    relatedQuestions: [
      "Where can I buy a headset?",
      "What devices are supported?",
      "Can I use AnamVR without a headset?",
    ],
  },
  {
    question: "Are you adding AI or new features?",
    answer:
      "Yes, we’re exploring AI-based support and adaptive experiences as part of our future roadmap.",
    category: "features",
    relatedQuestions: [
      "How can I send feedback or request a feature?",
      "How often is new content added?",
      "What kind of VR experiences are included?",
    ],
  },
  {
    question: "How can I send feedback or request a feature?",
    answer:
      "We’d love to hear from you! Use the in-app feedback form or email feedback@anamvr.com.",
    category: "support",
    relatedQuestions: [
      "Are you adding AI or new features?",
      "How do I contact support?",
      "How often is new content added?",
    ],
  },
  {
    question: "Is this suitable for sleep or focus?",
    answer:
      "Yes, our library includes VR sessions for improving sleep, focus, and emotional regulation.",
    category: "features",
    relatedQuestions: [
      "Can AnamVR help with anxiety or stress?",
      "What kind of VR experiences are included?",
      "Is content personalised?",
    ],
  },
  {
    question: "Can I use it in the workplace?",
    answer:
      "Yes, AnamVR is ideal for workplace wellness programmes and scalable employee support.",
    category: "business",
    relatedQuestions: [
      "Is there a version for businesses?",
      "Can I get a demo for my company?",
      "Is there a trial for businesses?",
    ],
  },
  {
    question: "Is there a trial for businesses?",
    answer:
      "Yes, business trials are available. Contact our team for access to pilot options.",
    category: "business",
    relatedQuestions: [
      "Can I get a demo for my company?",
      "Is there a version for businesses?",
      "Can I use it in the workplace?",
    ],
  },
  {
    question: "Can I share my data with someone like a therapist?",
    answer:
      "Yes, you can export your progress manually and share it with any professional you choose.",
    category: "clinical",
    relatedQuestions: [
      "Can my therapist monitor my use?",
      "Is my data private and secure?",
      "Can I track my progress?",
    ],
  },
  {
    question: "How can I contact AnamVR?",
    answer:
      "Please choose the appropriate contact form based on your needs:\n\n" +
      "• Sales (for businesses): <a href='/for-organisations#demo-section' target='_blank' rel='noopener noreferrer' style=\"color: #3B82F6; text-decoration: underline;\">Go to business demo form</a>\n" +
      "• Support: <a href='/for-individuals#contact-us' target='_blank' rel='noopener noreferrer' style=\"color: #3B82F6; text-decoration: underline;\">Go to support form</a>\n",
    category: "support",
    relatedQuestions: [
      "How do I contact support?",
      "Can I get a demo for my company?",
      "Is there a version for businesses?",
    ],
  },
];

export const popularQuestions = {
  general: [
    "What is AnamVR?",
    "How do I start using AnamVR?",
    "Is AnamVR available internationally?",
  ],
  technical: [
    "What devices are supported?",
    "Can I use AnamVR without a headset?",
    "How do I download or install AnamVR?",
  ],
  features: [
    "How does AnamVR work?",
    "What kind of VR experiences are included?",
    "Is content personalised?",
  ],
  pricing: [
    "Is AnamVR free? What's the pricing?",
    "What's included in Premium?",
    "How do I cancel my subscription?",
  ],
  support: [
    "How can I contact AnamVR?",
    "The app isn't working—what should I do?",
    "How do I reset my password?",
  ],
  clinical: [
    "Can AnamVR help with anxiety or stress?",
    "Is AnamVR clinically validated?",
    "Is this a replacement for therapy?",
  ],
  business: [
    "Is there a version for businesses?",
    "Can I use it in the workplace?",
    "Can I get a demo for my company?",
  ],
};
