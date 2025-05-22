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
      "AnamVR is a mental wellness platform that combines virtual reality with evidence-based cognitive behavioral therapy (CBT) techniques to help you manage stress, anxiety, and improve your overall mental wellbeing. Our immersive experiences are designed by mental health professionals to provide effective, accessible support wherever you are.",
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
      "You can download AnamVR from the App Store for iOS devices or Google Play for Android devices. Simply search for 'AnamVR' or visit our Download page for direct links. Once downloaded, follow the in-app instructions to set up your account and connect your VR headset if you have one.",
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
      "AnamVR offers immersive VR experiences and guided exercises designed by mental health professionals. When you open the app, you'll complete a brief assessment to personalize your experience. You can then choose from various modules targeting specific needs like stress reduction, anxiety management, or mindfulness practice. Each session guides you through evidence-based techniques in calming virtual environments, helping you build mental wellness skills that transfer to everyday life.",
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
      "AnamVR offers both free and premium plans. The free version gives you access to basic exercises and limited content to get started. Our Premium subscription unlocks the full library of experiences, personalized recommendations, progress tracking, and new content updates. Premium is currently priced at $9.99/month or $79.99/year (saving 33%). We also offer special rates for healthcare providers and organizations.",
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
      "AnamVR works with most popular VR headsets including Meta Quest 2/3, Pico, and smartphone-compatible headsets. Our mobile app is compatible with iPhone (iOS 14+) and Android smartphones (Android 10+) with displays between 4.7–7.2 inches. For the best experience, we recommend using a dedicated VR headset, but many features are accessible through just your smartphone.",
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
      "Yes, you can use AnamVR without a VR headset. While a headset provides the most immersive experience, we've designed many exercises and features to work directly on your smartphone. The mobile app includes guided audio sessions, 2D versions of our environments, breathing exercises, and progress tracking. For the full immersive experience, we recommend using a compatible VR headset.",
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
      "AnamVR Premium includes: 1) Full access to our library of 50+ VR experiences and exercises, 2) Personalized wellness plans based on your needs and goals, 3) Advanced progress tracking and insights, 4) New content added monthly, 5) Offline access to downloaded sessions, 6) Priority customer support, and 7) Exclusive early access to new features. Premium members also receive guided programs for specific concerns like anxiety, stress, and sleep difficulties.",
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
      "You can contact our support team through several channels: 1) In-app: Tap the Profile icon > Help & Support > Contact Us, 2) Email: support@anamvr.com, 3) Website: Visit our Contact page and fill out the support form, or 4) Live chat: Available on our website Monday-Friday, 9am-5pm GMT. For fastest response, please include your account email, device model, and a clear description of your issue.",
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
      "Yes, your privacy and data security are our top priorities. All personal data is encrypted both in transit and at rest. We never share your personal information with third parties without your explicit consent. Your usage data is anonymized for product improvement purposes only. You can review and manage your privacy settings in the app, and you can request deletion of your data at any time. For more details, please see our Privacy Policy.",
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
      "AnamVR was founded in 2020 by Rob Sheridan, a qualified Psychotherapist specializing in cognitive behavioral therapy, and Pierce O'Brien, a game designer and VR specialist. They assembled a diverse team of mental health professionals, VR developers, and UX designers with a shared mission to make evidence-based mental wellness techniques more accessible through immersive technology. The company is headquartered in Dublin, Ireland, with team members across Europe and North America.",
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
      "Yes, AnamVR is specifically designed to help with anxiety and stress management. Our app includes targeted modules for different types of anxiety (social, general, panic) and stress reduction. These modules incorporate evidence-based techniques like deep breathing exercises, progressive muscle relaxation, cognitive reframing, and mindfulness practices—all enhanced through immersive VR environments. Many users report significant reduction in anxiety symptoms with regular use, though individual results may vary.",
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
      "To reset your password: 1) On the login screen, tap 'Forgot Password', 2) Enter the email address associated with your account, 3) Check your email for a password reset link (including spam/junk folders), 4) Click the link and follow instructions to create a new password. If you don't receive the email within a few minutes, you can request another link or contact our support team for assistance.",
    category: "support",
    relatedQuestions: [
      "How do I contact support?",
      "The app isn't working—what should I do?",
      "Is my data private and secure?",
    ],
  },
  {
    question: "Where can I buy a headset?",
    answer:
      "You can purchase VR headsets compatible with AnamVR from several sources: 1) Directly through our Shop page, where we offer the AnamVR Comfort Headset optimized for our app, 2) Major electronics retailers like Amazon, Best Buy, or Currys, 3) Official stores for specific VR brands like Meta or Pico. We recommend headsets with at least 3DOF (degrees of freedom) for the best experience with our app.",
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
      "To update the AnamVR app: For iOS devices, open the App Store, tap your profile icon, scroll to see available updates, and tap 'Update' next to AnamVR. For Android devices, open Google Play Store, tap your profile icon, select 'Manage apps & device', find AnamVR in the 'Updates available' section, and tap 'Update'. We recommend enabling automatic updates in your device settings to ensure you always have the latest features and improvements.",
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
      "To cancel your AnamVR subscription: 1) If you subscribed through the App Store: Go to iPhone Settings > Your Name > Subscriptions > AnamVR > Cancel Subscription. 2) If you subscribed through Google Play: Open Google Play Store > Profile > Payments & subscriptions > Subscriptions > AnamVR > Cancel subscription. 3) If you subscribed through our website: Log in to your account, go to Settings > Subscription > Cancel Subscription. Your access will continue until the end of your current billing period.",
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
      "Getting started with AnamVR is easy: 1) Download the app from your device's app store, 2) Create an account or sign in, 3) Complete the brief onboarding questionnaire to personalize your experience, 4) If using a VR headset, follow the in-app instructions to pair your device, 5) Choose from recommended experiences based on your goals or browse our library, 6) Follow the guided instructions for each experience. We recommend starting with our 'Introduction to VR Wellness' session if you're new to VR therapy.",
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
      "Yes, AnamVR is available worldwide. The app can be downloaded from global app stores, and our VR experiences work anywhere. Currently, the interface and content are available in English, with selected content in Spanish, French, German, and Japanese. Payment processing supports multiple currencies, and our customer support team can assist users from any country. If the app isn't available in your region's app store, please contact us for alternative download options.",
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
      "Currently, AnamVR is fully available in English, with partial support for Spanish, French, German, and Japanese (covering our most popular experiences). We're actively working on expanding our language offerings based on user demand. Our roadmap includes adding complete support for these languages, followed by Italian, Portuguese, Mandarin Chinese, and Arabic. If you'd like to request support for a specific language, please let us know through our feedback form.",
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
      "AnamVR offers a diverse library of therapeutic VR experiences, including: 1) Guided meditation sessions in serene natural environments (beaches, forests, mountains), 2) Interactive breathing exercises with visual feedback, 3) CBT-based activities for managing negative thoughts, 4) Progressive muscle relaxation in calming settings, 5) Mindfulness practices with expert guidance, 6) Sleep preparation environments, 7) Focus-enhancing exercises, and 8) Emotional regulation activities. Each experience is designed by mental health professionals and optimized for therapeutic benefit.",
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
      "We add new content to AnamVR every month. Premium subscribers typically receive 2-3 new experiences monthly, including seasonal specials and content based on user requests. Our content development is guided by user feedback, emerging research in mental health, and collaboration with clinical experts. We announce new content through in-app notifications, our newsletter, and social media channels. You can view our content roadmap and vote on upcoming experiences in the 'Coming Soon' section of the app.",
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
      "Yes, you can repeat any session in AnamVR as many times as you like. In fact, regular practice with your favorite sessions often leads to better results. Many therapeutic techniques become more effective with repetition as you build familiarity and skill. Your most recently used and favorite sessions appear on your home screen for easy access. Premium users can also create custom playlists of their preferred sessions for different needs or times of day.",
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
      "Yes, AnamVR offers personalized content recommendations based on several factors: 1) Your initial assessment when you first sign up, 2) Your ongoing mood check-ins and feedback, 3) Your usage patterns and session preferences, 4) Goals you've set in the app. Premium users receive more advanced personalization, including custom wellness plans and adaptive difficulty levels that adjust to your progress. Our recommendation algorithm improves over time as it learns your preferences and what works best for you.",
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
      "Yes, AnamVR includes comprehensive progress tracking features. In the 'Insights' section, you can view: 1) Usage statistics (frequency, duration, types of sessions), 2) Mood tracking visualizations showing patterns over time, 3) Achievement milestones to celebrate consistent practice, 4) Self-reported symptom changes, and 5) Personal notes on your experience. Premium users get enhanced analytics with more detailed metrics and exportable reports. Regular tracking helps reinforce your practice and identify which techniques work best for you.",
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
      "Yes, AnamVR is built on clinically validated therapeutic techniques. Our approach combines established cognitive behavioral therapy (CBT) methods with evidence-based VR therapy protocols. We've conducted several clinical studies in partnership with university research departments, showing significant improvements in anxiety symptoms and stress reduction compared to control groups. Our most recent study (2024) demonstrated a 32% reduction in anxiety symptoms after 30 days of regular use. All our content is developed with input from licensed mental health professionals and follows clinical best practices.",
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
      "No, AnamVR is not a replacement for professional therapy or medical treatment. While our app provides evidence-based tools that can support mental wellness, it's designed as a complementary resource rather than a substitute for professional care. If you're experiencing significant mental health challenges, we recommend working with a qualified healthcare provider. Many therapists actually recommend AnamVR as a supplemental tool between sessions to reinforce therapeutic techniques. Always consult with a healthcare professional about incorporating digital tools into your treatment plan.",
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
      "AnamVR doesn't currently offer direct therapist monitoring within the app. However, we've designed several features to facilitate collaboration with your healthcare provider: 1) You can export progress reports and usage data as PDFs to share with your therapist, 2) The 'Notes' feature lets you record insights to discuss in therapy sessions, 3) Therapists can assign specific AnamVR exercises as 'homework' between sessions. We're developing a dedicated therapist portal for future release, which will allow providers to recommend specific content and review progress with patient consent.",
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
      "Yes, AnamVR offers enterprise solutions for businesses and organizations. Our AnamVR for Business platform includes: 1) Centralized deployment and user management, 2) Usage analytics and wellbeing insights at the organizational level (anonymized), 3) Custom branding options, 4) Dedicated account management and priority support, 5) Bulk licensing discounts, and 6) Optional on-site training and implementation support. We work with companies of all sizes, from startups to global enterprises, as well as healthcare systems and educational institutions.",
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
      "We offer comprehensive demos for organizations interested in AnamVR's business solutions. Our demo includes: 1) A guided tour of the platform and its features, 2) Sample VR experiences tailored to workplace wellness, 3) Overview of implementation options and technical requirements, 4) Discussion of customization possibilities for your organization, and 5) Q&A with our business solutions team. To schedule a demo, visit our Business page or email business@anamvr.com with your company details and team size.",
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
      "Our refund policy varies by platform: 1) App Store purchases: Refunds are handled directly through Apple according to their policies. Visit reportaproblem.apple.com to request a refund. 2) Google Play purchases: Refunds are managed through Google Play. Open the Play Store app > Account > Purchases > AnamVR > Request refund. 3) Direct website subscriptions: We offer a 14-day money-back guarantee. Contact support@anamvr.com with your account email and purchase date. For special circumstances outside these policies, please contact our support team.",
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
      "Yes, you can switch between monthly and annual billing plans at any time. To change your plan: 1) Open the AnamVR app and go to Settings > Subscription, 2) Select 'Change Plan' and choose your preferred option, 3) Confirm the change. If you upgrade from monthly to annual, you'll be charged the annual rate immediately, with credit for any remaining time on your monthly plan. If you switch from annual to monthly, the change will take effect at the end of your current annual billing cycle. You can also switch between individual and family plans using the same process.",
    category: "pricing",
    relatedQuestions: [
      "How do I cancel my subscription?",
      "Can I get a refund?",
      "Is AnamVR free? What's the pricing?",
    ],
  },
  {
    question: "Can I track my progress?",
    answer:
      "Yes, AnamVR includes comprehensive progress tracking features. In the 'Insights' section, you can view: 1) Usage statistics (frequency, duration, types of sessions), 2) Mood tracking visualizations showing patterns over time, 3) Achievement milestones to celebrate consistent practice, 4) Self-reported symptom changes, and 5) Personal notes on your experience. Premium users get enhanced analytics with more detailed metrics and exportable reports. Regular tracking helps reinforce your practice and identify which techniques work best for you.",
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
      "Yes, AnamVR is built on clinically validated therapeutic techniques. Our approach combines established cognitive behavioral therapy (CBT) methods with evidence-based VR therapy protocols. We've conducted several clinical studies in partnership with university research departments, showing significant improvements in anxiety symptoms and stress reduction compared to control groups. Our most recent study (2024) demonstrated a 32% reduction in anxiety symptoms after 30 days of regular use. All our content is developed with input from licensed mental health professionals and follows clinical best practices.",
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
      "No, AnamVR is not a replacement for professional therapy or medical treatment. While our app provides evidence-based tools that can support mental wellness, it's designed as a complementary resource rather than a substitute for professional care. If you're experiencing significant mental health challenges, we recommend working with a qualified healthcare provider. Many therapists actually recommend AnamVR as a supplemental tool between sessions to reinforce therapeutic techniques. Always consult with a healthcare professional about incorporating digital tools into your treatment plan.",
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
      "AnamVR doesn't currently offer direct therapist monitoring within the app. However, we've designed several features to facilitate collaboration with your healthcare provider: 1) You can export progress reports and usage data as PDFs to share with your therapist, 2) The 'Notes' feature lets you record insights to discuss in therapy sessions, 3) Therapists can assign specific AnamVR exercises as 'homework' between sessions. We're developing a dedicated therapist portal for future release, which will allow providers to recommend specific content and review progress with patient consent.",
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
      "Yes, AnamVR offers enterprise solutions for businesses and organizations. Our AnamVR for Business platform includes: 1) Centralized deployment and user management, 2) Usage analytics and wellbeing insights at the organizational level (anonymized), 3) Custom branding options, 4) Dedicated account management and priority support, 5) Bulk licensing discounts, and 6) Optional on-site training and implementation support. We work with companies of all sizes, from startups to global enterprises, as well as healthcare systems and educational institutions.",
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
      "We offer comprehensive demos for organizations interested in AnamVR's business solutions. Our demo includes: 1) A guided tour of the platform and its features, 2) Sample VR experiences tailored to workplace wellness, 3) Overview of implementation options and technical requirements, 4) Discussion of customization possibilities for your organization, and 5) Q&A with our business solutions team. To schedule a demo, visit our Business page or email business@anamvr.com with your company details and team size.",
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
      "Our refund policy varies by platform: 1) App Store purchases: Refunds are handled directly through Apple according to their policies. Visit reportaproblem.apple.com to request a refund. 2) Google Play purchases: Refunds are managed through Google Play. Open the Play Store app > Account > Purchases > AnamVR > Request refund. 3) Direct website subscriptions: We offer a 14-day money-back guarantee. Contact support@anamvr.com with your account email and purchase date. For special circumstances outside these policies, please contact our support team.",
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
      "Yes, you can switch between monthly and annual billing plans at any time. To change your plan: 1) Open the AnamVR app and go to Settings > Subscription, 2) Select 'Change Plan' and choose your preferred option, 3) Confirm the change. If you upgrade from monthly to annual, you'll be charged the annual rate immediately, with credit for any remaining time on your monthly plan. If you switch from annual to monthly, the change will take effect at the end of your current annual billing cycle. You can also switch between individual and family plans using the same process.",
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
      "Yes, AnamVR offers offline functionality for Premium users. You can download selected experiences to use without an internet connection, which is perfect for travel or areas with limited connectivity. To use offline mode: 1) While connected to Wi-Fi, go to the experience you want to download, 2) Tap the download icon to save it to your device, 3) Access downloaded content in the 'My Library' section, even without internet. Free users have limited offline access to basic exercises only. Downloaded content syncs your progress when you reconnect to the internet.",
    category: "technical",
    relatedQuestions: [
      "Can I use headphones or earbuds?",
      "How do I update the app?",
      "What's included in Premium?",
    ],
  },
  {
    question: "Can I use headphones or earbuds?",
    answer:
      "Yes, we highly recommend using headphones or earbuds with AnamVR for the best experience. Our sessions feature spatial audio designed to enhance immersion and therapeutic effects. Any headphones will work, but for optimal results, we suggest using: 1) Over-ear headphones for the most immersive experience, 2) Noise-cancelling headphones to minimize distractions, or 3) Comfortable earbuds for extended sessions. Bluetooth headphones are compatible but may introduce slight audio latency in some VR experiences. You can adjust audio settings, including volume and balance, in the app settings.",
    category: "technical",
    relatedQuestions: [
      "Can I mute the app or music?",
      "Can I use AnamVR offline?",
      "What devices are supported?",
    ],
  },
  {
    question: "Can I mute the app or music?",
    answer:
      "Yes, you have complete control over AnamVR's audio settings. During any experience, you can: 1) Adjust the volume or mute completely using the on-screen controls, 2) Balance the mix between voice guidance, background music, and ambient sounds, 3) Enable or disable specific audio elements (like nature sounds or binaural beats), 4) Use your device's volume buttons for quick adjustments. You can also set your default audio preferences in Settings > Audio, which will apply to all future sessions unless manually changed.",
    category: "technical",
    relatedQuestions: [
      "Can I use headphones or earbuds?",
      "The app isn't working—what should I do?",
      "Can I use AnamVR offline?",
    ],
  },
  {
    question: "The app isn't working—what should I do?",
    answer:
      "If you're experiencing issues with AnamVR, try these troubleshooting steps: 1) Close and restart the app, 2) Check for app updates in your device's app store, 3) Restart your device completely, 4) Ensure you have sufficient storage space and a stable internet connection, 5) If using a VR headset, check that it's properly connected and charged. If problems persist, please contact our support team with: your device model, operating system version, app version (found in Settings > About), and a detailed description of the issue, including any error messages. Screenshots or screen recordings are also helpful.",
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
      "No, you don't need the AnamVR-branded headset to use our app. While we do offer our own comfortable, lightweight headset optimized for wellness experiences, AnamVR works with most popular VR headsets including: 1) Meta Quest 2 and 3, 2) Pico 4, 3) Most smartphone VR headsets (like Google Cardboard-compatible devices), 4) Other standalone VR headsets that support Android apps. Our app is designed to be hardware-flexible, though some advanced features may vary by device capabilities. Check our compatibility page for a complete list of tested and recommended headsets.",
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
      "Yes, we're actively developing new features and AI capabilities for AnamVR. Our current roadmap includes: 1) AI-powered personalization that adapts experiences based on your responses and progress, 2) Voice-guided interactions for hands-free navigation, 3) Expanded content library with specialized modules for specific conditions, 4) Enhanced social features for group wellness sessions, 5) Integration with wearable devices for biofeedback. We release major updates quarterly, with smaller improvements monthly. Premium users get early access to beta features through our Preview Program.",
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
      "We welcome your feedback and feature requests! You can share your thoughts through several channels: 1) In-app feedback form: Go to Profile > Help & Support > Send Feedback, 2) Email: feedback@anamvr.com, 3) Community forum: Join discussions at community.anamvr.com, 4) Social media: Tag us @AnamVR on Twitter or Instagram. For feature requests, please be as specific as possible about what you'd like to see and how it would benefit your experience. We review all feedback and prioritize development based on user demand and technical feasibility.",
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
      "Yes, AnamVR includes dedicated modules for both sleep improvement and focus enhancement. Our sleep collection features: 1) Bedtime wind-down experiences, 2) Progressive relaxation specifically for sleep preparation, 3) Calming environments with sleep-inducing audio, and 4) Breathing techniques for sleep onset. Our focus collection includes: 1) Attention training exercises, 2) Distraction-free work environments, 3) Brain-training activities, and 4) Micro-breaks designed to refresh mental energy. Users report significant improvements in both sleep quality and concentration with regular use of these specialized modules.",
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
      "AnamVR is increasingly being adopted in workplace wellness programs. Our platform offers several workplace-specific features: 1) Quick 5-10 minute sessions designed for work breaks, 2) Focus-enhancing environments for productivity, 3) Stress-reduction exercises tailored for work-related challenges, 4) Team wellness activities for group settings. For organizations, we offer special deployment options including kiosk mode for shared devices, usage analytics for wellness program managers, and custom content addressing specific workplace stressors.",
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
      "Yes, we offer a comprehensive 30-day trial for businesses interested in AnamVR's enterprise solutions. The trial includes: 1) Full access to all Premium features for up to 10 users, 2) Basic implementation of company branding, 3) Access to usage analytics dashboard, 4) One virtual onboarding session with our business solutions team, 5) Documentation and resources for larger rollouts. To request a business trial, complete the form on our Business page or email business@anamvr.com with your company details, team size, and specific wellness goals.",
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
      "Yes, you can share your AnamVR usage data and progress with healthcare providers or others of your choosing. To share your data: 1) Go to Profile > Insights > Export Data, 2) Select the date range and types of data you want to share, 3) Generate a PDF report or CSV file, 4) Share via email, messaging, or by downloading the file. The report includes session history, mood tracking, and progress metrics. This feature is particularly useful for therapy integration, allowing your provider to incorporate your AnamVR practice into your treatment plan. All sharing is completely voluntary and under your control.",
    category: "clinical",
    relatedQuestions: [
      "Can my therapist monitor my use?",
      "Is my data private and secure?",
      "Can I track my progress?",
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
    "How do I contact support?",
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
