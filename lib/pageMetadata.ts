// lib/pageMetadata.ts

import TrackApplicationPage from "@/app/track-application/page";

export const pageMetadata: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
  }
> = {
  home: {
    title: "Sky Visa | Your Gateway to the World",
    description: "Sky Visa provides trusted visa consultancy and travel planning for tourists, students, and business professionals worldwide.",
    keywords: ["Sky Visa", "visa services", "travel consultancy", "tourist visa", "student visa", "business travel"],
  },
  about: {
    title: "About Us | Sky Visa",
    description: "Learn more about Sky Visa, our mission, and how we help travelers achieve their visa goals with expert guidance.",
    keywords: ["about Sky Visa", "visa consultants", "our mission", "travel experts"],
  },
  destination: {
    title: "Explore Destinations | Sky Visa",
    description: "Browse global destinations and find visa information, travel requirements, and expert assistance for every country.",
    keywords: ["destinations", "country visas", "travel requirements", "visa info"],
  },
  services: {
    title: "Our Services | Sky Visa",
    description: "Discover our full range of services including visa consultation, travel planning, document assistance, and more.",
    keywords: ["visa services", "travel planning", "consultancy", "visa application help"],
  },
  touristVisas: {
    title: "Tourist Visas | Sky Visa",
    description: "Apply for tourist visas to top destinations with ease and confidence. Expert support and fast processing guaranteed.",
    keywords: ["tourist visa", "travel visa", "holiday visa", "vacation travel"],
  },
  process: {
    title: "Visa Application Process | Sky Visa",
    description: "Understand the step-by-step visa application process and how Sky Visa supports you at every stage.",
    keywords: ["visa process", "application steps", "how to apply visa", "visa help"],
  },
  contact: {
    title: "Contact Us | Sky Visa",
    description: "Have questions? Contact Sky Visa for quick support, expert guidance, or to schedule a consultation.",
    keywords: ["contact Sky Visa", "visa support", "help center", "reach us"],
  },
  getStarted: {
    title: "Get Started | Sky Visa",
    description: "Begin your visa journey with Sky Visa. Start your application now and explore the world with confidence.",
    keywords: ["start visa application", "get started", "travel plans", "visa help"],
  },
  consultation: {
    title: "Visa Consultation | Sky Visa",
    description: "Book a personalized visa consultation session with our experts and receive guidance tailored to your travel goals.",
    keywords: ["visa consultation", "talk to expert", "travel advice", "visa guidance"],
  },
  travelPlanning: {
    title: "Travel Planning | Sky Visa",
    description: "Plan your trip stress-free with Sky Visa. We assist with routes, itineraries, bookings, and visa preparation.",
    keywords: ["travel planning", "trip advice", "tour planning", "travel support"],
  },
  helpCentre: {
    title: "Help Centre | Sky Visa",
    description: "Visit our Help Centre to find answers to common visa questions, travel documents, and processing timelines.",
    keywords: ["help center", "visa help", "travel FAQs", "support"],
  },
  faq: {
    title: "Frequently Asked Questions (FAQ) | Sky Visa",
    description: "Find answers to the most common visa and travel queries in our comprehensive FAQ section.",
    keywords: ["visa FAQ", "visa questions", "common questions", "visa info"],
  },
  privacyPolicy: {
    title: "Privacy Policy | Sky Visa",
    description: "Understand how Sky Visa collects, uses, and protects your personal information in compliance with global standards.",
    keywords: ["privacy policy", "data protection", "user privacy", "GDPR"],
  },
  trackApplication: {
    title: "Track Your Application | Sky Visa",
    description: "Stay updated on your visa application status with real-time tracking.",
    keywords: ["track application", "visa status", "application updates", "real-time tracking"],
  },
  testimonial: {
    title: "Testimonials | Sky Visa",
    description: "Read client testimonials and success stories about their visa experiences with Sky Visa.",
    keywords: ["client testimonials", "visa success stories", "Sky Visa reviews", "customer feedback"],
  },
  termsofservice: {
    title: "Terms of Service | Sky Visa",
    description: "Review the terms and conditions governing your use of Sky Visa's services.",
    keywords: ["terms of service", "user agreement", "Sky Visa terms", "service conditions"], 
  },
};
