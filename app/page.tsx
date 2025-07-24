import Head from "next/head"
import EnhancedHeroSection from "@/components/Home/EnhancedHeroSection"
import QuickVisaSearch from "@/components/Home/QuickVisaSearch"
import EnhancedServicesSection from "@/components/Home/EnhancedServicesSection"
import AdditionalServicesSection from "@/components/Home/AdditionalServicesSection"
import ProcessSection from "@/components/Home/ProcessSection"
import TestimonialsSection from "@/components/Home/TestimonialsSection"
import ContactSection from "@/components/Home/ContactSection"
import EnhancedFooter from "@/components/Home/EnhancedFooter"
import LiveChat from "@/components/Home/live-chat"
import { metadata } from "@metadata"

export const metadata = {
  title: "Sky Visa | Your Our Responsibility",
  description: "Sky Visa provides trusted visa consultancy and travel planning for tourists, students, and business professionals worldwide.",
  keywords: ["Sky Visa", "visa services", "travel consultancy", "tourist visa", "student visa", "business travel"],
}
export default function VisaAssistanceWebsite() {
  return (
    <>
      
      <div>
        {/* Removed Background Image */}
        <div className="relative z-10">
          <EnhancedHeroSection />
          {/*<QuickVisaSearch /> */}
          <EnhancedServicesSection />
          <AdditionalServicesSection />
          <ProcessSection />
          <TestimonialsSection />
          <ContactSection />
          <EnhancedFooter />
          <LiveChat />
        </div>
      </div>
    </>
  )
}
