
import { Resource, PricingPlan, Feature } from './types';

export const RESOURCES: Resource[] = [
  {
    name: "NPTEL",
    description: "Quality engineering and science courses from top IITs and IISc.",
    icon: "fa-solid fa-building-columns",
    link: "https://nptel.ac.in/"
  },
  {
    name: "Khan Academy",
    description: "Expert-created content and resources for every subject and level.",
    icon: "fa-solid fa-graduation-cap",
    link: "https://www.khanacademy.org/"
  },
  {
    name: "Physics Wallah",
    description: "Comprehensive JEE, NEET, and board exam preparation videos.",
    icon: "fa-solid fa-atom",
    link: "https://www.youtube.com/@PhysicsWallah"
  },
  {
    name: "CodeWithHarry",
    description: "In-depth programming tutorials in Hindi for Indian students.",
    icon: "fa-solid fa-code",
    link: "https://www.youtube.com/@CodeWithHarry"
  },
  {
    name: "Gate Smashers",
    description: "Focused learning for CS/IT Engineering and GATE aspirants.",
    icon: "fa-solid fa-microchip",
    link: "https://www.youtube.com/@GateSmashers"
  },
  {
    name: "Unacademy",
    description: "Vast collection of free UPSC, SSC, and Banking resources.",
    icon: "fa-solid fa-book-open",
    link: "https://www.unacademy.com/"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Basic Plan",
    price: "₹1,000",
    calls: "Up to 5 Tutor Calls",
    features: [
      "Unlimited text-based support",
      "5 One-on-one calls",
      "Curated learning paths",
      "Resource guidance",
      "Exam strategy tips"
    ]
  },
  {
    name: "Standard Plan",
    price: "₹1,500",
    calls: "Up to 10 Tutor Calls",
    features: [
      "Everything in Basic",
      "10 One-on-one calls",
      "Priority query resolution",
      "Weekly progress check",
      "Doubt clearing sessions"
    ],
    recommended: true
  },
  {
    name: "Advanced Plan",
    price: "₹2,000",
    calls: "Up to 15 Tutor Calls",
    features: [
      "Everything in Standard",
      "15 One-on-one calls",
      "Personalized exam plan",
      "College admission guidance",
      "24/7 Text priority"
    ]
  }
];

export const FEATURES: Feature[] = [
  {
    title: "Unlimited Text Support",
    description: "Stuck on a problem? Send a text any time and get student-friendly explanations quickly.",
    icon: "fa-solid fa-comment-dots"
  },
  {
    title: "Call-based Guidance",
    description: "Need a deeper explanation? Hop on a one-on-one call with our expert tutors for clear insights.",
    icon: "fa-solid fa-phone-volume"
  },
  {
    title: "Exam-Focused Mentoring",
    description: "Special strategies for boards, JEE, NEET, and competitive Indian exams.",
    icon: "fa-solid fa-bullseye"
  },
  {
    title: "Flexible Schedule",
    description: "Learn at your own pace. Our tutors adapt to your timeline and specific needs.",
    icon: "fa-solid fa-calendar-check"
  }
];
