import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, HelpCircle, FileText, Phone, Mail, MessageCircle, Book, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import Head from "next/head"
import { pageMetadata } from "@/lib/pageMetadata" 

export const metadata = {
  title: pageMetadata.helpCentre.title,
  description: pageMetadata.helpCentre.description,
  keywords: pageMetadata.helpCentre.keywords.join(", "),
} 

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">Help Center</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              How Can We{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to your visa questions, get step-by-step guides, and access support resources all in one
              place.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search for help articles, guides, or FAQs..."
                  className="pl-12 h-14 text-lg border-2 focus:border-blue-500"
                />
                <Button className="absolute right-2 top-2 h-10">Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Popular Help Topics</h2>
            <p className="text-xl text-gray-600">Quick access to the most common questions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Visa Requirements",
                description: "Learn what documents you need for different visa types",
                icon: <FileText className="h-8 w-8 text-blue-600" />,
                articles: "45 articles",
                link: "/help-center/visa-requirements",
              },
              {
                title: "Application Process",
                description: "Step-by-step guides for visa applications",
                icon: <Book className="h-8 w-8 text-green-600" />,
                articles: "32 articles",
                link: "/help-center/application-process",
              },
              {
                title: "Processing Times",
                description: "Expected processing times for different countries",
                icon: <HelpCircle className="h-8 w-8 text-purple-600" />,
                articles: "28 articles",
                link: "/help-center/processing-times",
              },
              {
                title: "Document Preparation",
                description: "How to prepare and format your documents",
                icon: <Users className="h-8 w-8 text-orange-600" />,
                articles: "38 articles",
                link: "/help-center/document-preparation",
              },
              {
                title: "Payment & Pricing",
                description: "Information about fees and payment methods",
                icon: <MessageCircle className="h-8 w-8 text-red-600" />,
                articles: "15 articles",
                link: "/help-center/payment-pricing",
              },
              {
                title: "Track Application",
                description: "How to check your application status",
                icon: <Phone className="h-8 w-8 text-teal-600" />,
                articles: "12 articles",
                link: "/help-center/track-application",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                  <Badge variant="secondary" className="w-fit">
                    {category.articles}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-blue-50" asChild>
                    <Link href={category.link}>
                      Browse Articles <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "How long does visa processing typically take?",
                answer:
                  "Processing times vary by country and visa type. Tourist visas typically take 3-10 business days, while work visas may take 2-4 weeks. We offer express processing for urgent applications.",
              },
              {
                question: "What documents do I need for a tourist visa?",
                answer:
                  "Common requirements include a valid passport, completed application form, passport photos, proof of accommodation, travel itinerary, and financial statements. Specific requirements vary by destination.",
              },
              {
                question: "Can I track my visa application status?",
                answer:
                  "Yes! You can track your application status 24/7 through our online portal. You'll receive real-time updates via email and SMS throughout the process.",
              },
              {
                question: "What happens if my visa application is rejected?",
                answer:
                  "We offer a 99.2% approval rate, but if your application is rejected, we provide free reapplication services and a full refund under our guarantee policy.",
              },
              {
                question: "Do you offer express processing services?",
                answer:
                  "Yes, we offer same-day, next-day, and 48-hour express processing options for urgent travel needs. Express services include dedicated case managers and priority handling.",
              },
            ].map((faq, index) => (
              <details key={index} className="group">
                <summary className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer list-none p-6 rounded-lg bg-white hover:bg-blue-50 transition-colors duration-300">
                  {faq.question}
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 p-6 pt-2 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Still Need Help?</h2>
            <p className="text-xl text-gray-600">Our support team is here to assist you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Phone Support</h3>
                <p className="text-gray-600 mb-6">Speak directly with our visa experts</p>
                <p className="font-semibold text-blue-600 mb-4">+91 7471137339</p>
                <p className="text-sm text-gray-500">Mon-Fri 10AM-6PM IST</p>
                <Button className="mt-4" asChild>
                  <Link href="tel:+91 7471137339">Call Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Live Chat</h3>
                <p className="text-gray-600 mb-6">Get instant answers to your questions</p>
                <p className="font-semibold text-green-600 mb-4">Available 24/7</p>
                <p className="text-sm text-gray-500">Average response: 30 seconds</p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/chat">Start Chat</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Email Support</h3>
                <p className="text-gray-600 mb-6">Send us your detailed questions</p>
                <p className="font-semibold text-purple-600 mb-4">info@skyvisa.in</p>
                <p className="text-sm text-gray-500">Response within 2 hours</p>
                <Button className="mt-4 bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/contact">Send Email</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resource Links */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Additional Resources</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Visa Guide PDF", description: "Comprehensive visa guide", link: "/resources/visa-guide.pdf" },
              {
                title: "Country Requirements",
                description: "Detailed country-specific requirements",
                link: "/help-center/country-requirements",
              },
              {
                title: "Document Templates",
                description: "Downloadable document templates",
                link: "/resources/templates",
              },
              { title: "Video Tutorials", description: "Step-by-step video guides", link: "/help-center/tutorials" },
            ].map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={resource.link}>Access Resource</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
