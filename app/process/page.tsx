import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, FileText, Users, Shield, ArrowRight, Zap, Globe } from "lucide-react"
import Link from "next/link"
import Head from "next/head"
import { pageMetadata } from "@/lib/pageMetadata"

export const metadata = {
  title: pageMetadata.process.title,
  description: pageMetadata.process.description,
  keywords: pageMetadata.process.keywords.join(", "),
}

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
        <section className="py-10 bg-gradient-to-br from-sky-50 to-cyan-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center space-y-4"> {/* also reduced space-y */}
              <Badge className="bg-sky-100 text-sky-800 px-4 py-2">Our Process</Badge>
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">
                Simple{" "}
                <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
                  Visa Process
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our streamlined 4-step process makes getting your visa simple, fast, and stress-free
              </p>
            </div>
          </div>
        </section>


      {/* Detailed Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Choose Your Service</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Start by selecting your destination country and visa type from our comprehensive list of 180+
                  countries. Our intelligent system will guide you to the right visa category based on your travel
                  purpose.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">180+ destination countries</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">All visa types covered</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Instant requirement check</span>
                  </div>
                </div>
                <Button className="bg-sky-600 hover:bg-sky-700" asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Popular Services</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-sky-50 rounded-lg">
                        <h4 className="font-medium">Tourist Visa</h4>
                        <p className="text-sm text-gray-600">Leisure travel</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-medium">Business Visa</h4>
                        <p className="text-sm text-gray-600">Work meetings</p>
                      </div>
                      <div className="p-4 bg-cyan-50 rounded-lg">
                        <h4 className="font-medium">Visit Visa</h4>
                        <p className="text-sm text-gray-600">Any type of visit</p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <h4 className="font-medium">Transit Visa</h4>
                        <p className="text-sm text-gray-600">Airport transit</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="shadow-xl order-2 lg:order-1">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Document Checklist</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Valid passport</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Passport photos</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Travel itinerary</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Financial statements</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Supporting documents</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-sky-50 rounded-lg">
                      <p className="text-sm text-sky-700">
                        <strong>Tip:</strong> Upload high-quality scans for faster processing
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Submit Documents</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Upload your documents securely through our encrypted platform. Our system provides a personalized
                  checklist and guides you through each requirement with helpful tips and examples.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">256-bit SSL encryption</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Guided document upload</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Instant validation</span>
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/upload">Upload Documents</Link>
                </Button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Expert Review</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our certified visa specialists review your application with meticulous attention to detail. We check
                  for completeness, accuracy, and compliance with embassy requirements.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-700">Certified visa experts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-700">24-48 hour review</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-700">99.2% approval rate</span>
                  </div>
                </div>
                <Button className="bg-cyan-600 hover:bg-cyan-700" asChild>
                  <Link href="/consultation">Book Consultation</Link>
                </Button>
              </div>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Review Process</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                          <span className="text-sm font-bold text-cyan-600">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Document Verification</h4>
                          <p className="text-sm text-gray-600">Check all documents for completeness</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                          <span className="text-sm font-bold text-cyan-600">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Application Preparation</h4>
                          <p className="text-sm text-gray-600">Format and prepare for submission</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                          <span className="text-sm font-bold text-cyan-600">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Quality Assurance</h4>
                          <p className="text-sm text-gray-600">Final review before submission</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="shadow-xl order-2 lg:order-1">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Delivery Options</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <h4 className="font-medium text-orange-800">Express Delivery</h4>
                        <p className="text-sm text-orange-600">Same day pickup available</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h4 className="font-medium text-green-800">Standard Delivery</h4>
                        <p className="text-sm text-green-600">2-3 business days</p>
                      </div>
                      <div className="p-3 bg-sky-50 rounded-lg">
                        <h4 className="font-medium text-sky-800">Digital Copy</h4>
                        <p className="text-sm text-sky-600">Instant email delivery</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Track your visa:</strong> Real-time updates via SMS and email
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Get Your Visa</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Receive your approved visa and travel with confidence. We provide multiple delivery options and
                  real-time tracking so you always know the status of your application.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Multiple delivery options</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Real-time tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Secure delivery</span>
                  </div>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700" asChild>
                  <Link href="/track-application">Track Application</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Our Process Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures the highest success rates in the industry
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-sky-600" />
                </div>
                <CardTitle className="text-lg">99.2% Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Industry-leading approval rates through expert review and preparation
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Fast Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Streamlined process with express options for urgent travel needs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle className="text-lg">Secure & Confidential</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Bank-level security with complete data protection and privacy</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Dedicated specialists available 24/7 for guidance and support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Visa Process?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who chose our proven visa process
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/get-started">
              Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
