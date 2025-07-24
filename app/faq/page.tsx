import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, HelpCircle, ArrowRight, Clock, FileText, CreditCard, Shield, Globe } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Head from "next/head"
import { pageMetadata } from "@/lib/pageMetadata"


export const metadata = {
  title: pageMetadata.faq.title,
  description: pageMetadata.faq.description,
  keywords: pageMetadata.faq.keywords.join(", "),
} 

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-cyan-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6">
            <Badge className="bg-sky-100 text-sky-800 px-4 py-2">FAQ</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our visa services
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input placeholder="Search FAQ..." className="pl-12 h-14 text-lg border-2 focus:border-sky-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Browse by Category</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-sky-600" />
                </div>
                <CardTitle className="text-lg">Processing Times</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center">Questions about visa processing times and delivery</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center">Document requirements and preparation guidelines</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle className="text-lg">Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center">Payment methods, fees, and refund policies</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center">Data protection and security measures</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Countries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center">Country-specific visa requirements and restrictions</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">General</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center">General questions about our services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">General Questions</h2>

            {[
              {
                question: "How long does visa processing typically take?",
                answer:
                  "Processing times vary by country and visa type. Tourist visas typically take 3-10 business days, business visas 5-15 days, and work visas 2-4 weeks. We offer express processing for urgent applications with same-day to 48-hour turnaround times.",
              },
              {
                question: "What documents do I need for a tourist visa?",
                answer:
                  "Common requirements include: valid passport (6+ months validity), completed application form, passport-sized photos, proof of accommodation (hotel bookings), travel itinerary, financial statements (bank statements for last 3 months), travel insurance, and return flight tickets. Specific requirements vary by destination country.",
              },
              {
                question: "Can I track my visa application status?",
                answer:
                  "Yes! You can track your application status 24/7 through our online portal using your reference number. You'll receive real-time updates via email and SMS throughout the process, including when documents are received, under review, submitted to embassy, and when your visa is ready.",
              },
              {
                question: "What happens if my visa application is rejected?",
                answer:
                  "We offer a 99.2% approval rate, but if your application is rejected due to our error, we provide: full refund of our service fees, free reapplication service, detailed explanation of rejection reasons, and guidance on how to strengthen your next application. Embassy fees are non-refundable.",
              },
              {
                question: "Do you offer express processing services?",
                answer:
                  "Yes, we offer multiple express options: Same-day processing (4-8 hours), Next-day processing (24 hours), and 48-hour processing. Express services include dedicated case managers, priority embassy appointments, real-time updates, and express courier delivery.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, bank transfers, UPI payments, digital wallets (PayPal, Google Pay, Apple Pay), and cash payments at our office. All payments are processed securely with 256-bit SSL encryption.",
              },
              {
                question: "Is my personal information secure?",
                answer:
                  "Absolutely. We use bank-level security with 256-bit SSL encryption, are GDPR compliant, store documents in secure encrypted servers, have strict access controls, and never share your information with third parties without consent. All staff sign confidentiality agreements.",
              },
              {
                question: "Can you help with visa interviews?",
                answer:
                  "Yes! We provide comprehensive interview preparation including: mock interview sessions, common questions and answers, country-specific interview tips, document organization guidance, and confidence-building techniques. This service is included with our premium packages.",
              },
              {
                question: "Do you provide travel insurance?",
                answer:
                  "Yes, we offer comprehensive travel insurance covering: medical emergencies up to $100,000, trip cancellation/interruption, lost baggage protection, 24/7 emergency assistance, and COVID-19 coverage. Insurance is mandatory for many countries and we can arrange it for you.",
              },
              {
                question: "What if I need to change my travel dates?",
                answer:
                  "If you need to change travel dates after visa approval, contact us immediately. Options include: visa amendment (if allowed by the country), new application with updated dates, or guidance on visa validity periods. Some countries allow flexible travel dates within the visa validity period.",
              },
              {
                question: "Can you help with group applications?",
                answer:
                  "Yes! We specialize in group applications for families, corporate teams, tour groups, and educational institutions. We offer: group discounts (3+ people), dedicated group coordinator, synchronized processing, and special rates for large groups (10+ people).",
              },
              {
                question: "What countries do you provide visa services for?",
                answer:
                  "We provide visa services for 180+ countries including: USA, UK, Canada, Australia, Schengen countries (EU), Japan, Singapore, UAE, China, Russia, and many more. We have partnerships with embassies and consulates worldwide to ensure smooth processing.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "Our refund policy includes: full refund if visa is rejected due to our error, partial refund if you cancel before document submission, no refund after embassy submission (embassy fees are non-refundable), and money-back guarantee on our service quality.",
              },
              {
                question: "Can I apply for multiple country visas?",
                answer:
                  "Yes! We can help you apply for multiple country visas simultaneously. This is common for multi-country trips. We coordinate timing to ensure all visas are ready for your travel dates and provide guidance on the optimal application sequence.",
              },
              {
                question: "What if my passport expires soon?",
                answer:
                  "Most countries require 6+ months passport validity. If your passport expires within 6 months, we recommend renewing it first. We can guide you through passport renewal and then proceed with your visa application to avoid delays or rejections.",
              },
            ].map((faq, index) => (
              <details key={index} className="group">
                <summary className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer list-none p-6 rounded-lg bg-white hover:bg-sky-50 transition-colors duration-300 shadow-sm">
                  {faq.question}
                  <span className="transition group-open:rotate-180">
                    <HelpCircle className="h-5 w-5" />
                  </span>
                </summary>
                <div className="bg-white p-6 pt-2 rounded-b-lg shadow-sm">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our expert team is here to help you with any visa-related questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-sky-600"
              asChild
            >
              <Link href="/consultation">Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
