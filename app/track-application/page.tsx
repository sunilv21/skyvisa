import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Clock, CheckCircle, Phone, Mail, ArrowRight } from "lucide-react"
import Head from "next/head"
import { pageMetadata } from "@/lib/pageMetadata"

export const metadata = {
  title: pageMetadata.trackApplication.title,
  description: pageMetadata.trackApplication.description,
  keywords: pageMetadata.trackApplication.keywords.join(", "),
}

export default function TrackApplicationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">Application Tracking</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Track Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Application
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated on your visa application status with real-time tracking. Enter your reference number below to
              get instant updates.
            </p>
          </div>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <Card className="max-w-2xl mx-auto shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">Enter Your Details</CardTitle>
              <CardDescription className="text-base">
                Use your reference number and email to track your application status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Reference Number *</label>
                <Input
                  placeholder="e.g., SV-2024-001234"
                  className="h-12 border-2 focus:border-blue-500 text-center text-lg font-mono"
                />
                <p className="text-xs text-gray-500">Your reference number was provided in your confirmation email</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                <Input type="email" placeholder="john@example.com" className="h-12 border-2 focus:border-blue-500" />
              </div>
              <Button className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Search className="mr-3 h-5 w-5" />
                Track Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Application Status Examples */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Application Status Guide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding what each status means for your visa application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Application Received</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-3">
                  Initial Stage
                </Badge>
                <p className="text-gray-600 text-sm">
                  Your application has been received and is being reviewed by our team
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Under Review</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-3 bg-orange-100 text-orange-800">
                  In Progress
                </Badge>
                <p className="text-gray-600 text-sm">
                  Our experts are reviewing your documents and preparing your application
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Submitted to Embassy</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-3 bg-purple-100 text-purple-800">
                  Processing
                </Badge>
                <p className="text-gray-600 text-sm">
                  Your application has been submitted to the embassy for processing
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Approved</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-3 bg-green-100 text-green-800">
                  Complete
                </Badge>
                <p className="text-gray-600 text-sm">
                  Congratulations! Your visa has been approved and is ready for collection
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Application Status */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Sample Application Status</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what your application tracking might look like
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">Application #SV-2024-001234</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Tourist Visa for France • Submitted on March 15, 2024
                  </CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800 px-4 py-2">Approved</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Visa Approved</h3>
                    <p className="text-gray-600">March 18, 2024 at 2:30 PM</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Your visa has been approved! You can collect it from our office or we'll courier it to you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Submitted to Embassy</h3>
                    <p className="text-gray-600">March 16, 2024 at 10:00 AM</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Your application has been submitted to the French Embassy for processing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Documents Reviewed</h3>
                    <p className="text-gray-600">March 15, 2024 at 4:45 PM</p>
                    <p className="text-sm text-gray-500 mt-1">
                      All documents have been reviewed and verified by our expert team.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Application Received</h3>
                    <p className="text-gray-600">March 15, 2024 at 11:30 AM</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Your application and documents have been received and assigned to our processing team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Next Steps</h3>
                <p className="text-green-700 text-sm">
                  Your visa is ready for collection! Please bring a valid ID to our office, or we can courier it to your
                  address. Contact us at +91 7471137339 to arrange collection.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Need Help?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can't find your application or have questions about the status?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Call Us</CardTitle>
                <CardDescription>Speak directly with our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600 font-bold text-lg mb-2">+91 7471137339</p>
                <p className="text-gray-600 text-sm mb-4">Mon-Fri 10AM-6PM IST</p>
                <Button variant="outline" className="w-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Email Us</CardTitle>
                <CardDescription>Send us your query and reference number</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-green-600 font-bold text-lg mb-2">info@skyvisa.in</p>
                <p className="text-gray-600 text-sm mb-4">Response within 2 hours</p>
                <Button variant="outline" className="w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
