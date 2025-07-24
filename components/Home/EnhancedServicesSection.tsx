"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, CheckCircle, Users, Zap, Globe, Shield, Award } from "lucide-react"
import Link from "next/link"

export default function EnhancedServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-sky-50 relative"
    >
      {/* Background image */}
      <img
        src="https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665991/additionalservices_qso9gv.jpg"
        alt="Visa services background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none select-none"
        style={{ zIndex: 0, filter: "blur(1px) brightness(0.85)" }}
      />
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <Badge className="bg-sky-100 text-sky-800 px-4 py-2">Our Expertise</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Complete Visa Solutions</h2>
          <p className="text-xl  text-gray-900 max-w-4xl mx-auto">
            From consultation to approval, we provide comprehensive visa assistance with personalized support
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Document Preparation</CardTitle>
              <CardDescription>
                Expert review and preparation of all required documents with accuracy guarantee
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Complete document checklist
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Professional form filling
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Document verification & validation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Digital document management
                </li>
              </ul>
              <Button variant="outline" className="w-full mt-4 group-hover:bg-sky-50" asChild>
                <Link href="/services/document-preparation">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Expert Consultation</CardTitle>
              <CardDescription>
                One-on-one guidance from certified visa specialists with 10+ years experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Free initial consultation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Personalized visa strategy
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  24/7 expert support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Video consultation available
                </li>
              </ul>
              <Button variant="outline" className="w-full mt-4 group-hover:bg-green-50" asChild>
                <Link href="/consultation">Book Consultation</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Express Processing</CardTitle>
              <CardDescription>
                Expedited processing for urgent travel needs with guaranteed timelines
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Same-day processing available
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Real-time status updates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Priority embassy appointments
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Express courier delivery
                </li>
              </ul>
              <Button variant="outline" className="w-full mt-4 group-hover:bg-cyan-50" asChild>
                <Link href="#">Get Express Service</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Global Coverage</CardTitle>
              <CardDescription>Visa services for 180+ destinations with local embassy partnerships</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Tourist & business visas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Student & work visas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Transit & multiple entry
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  Embassy partnerships
                </li>
              </ul>
              <Button variant="outline" className="w-full mt-4 group-hover:bg-orange-50" asChild>
                <Link href="/services/tourist-visas">View Countries</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}