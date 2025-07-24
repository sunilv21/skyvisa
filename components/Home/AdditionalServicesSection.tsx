import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, BookOpen, Camera, FileSignatureIcon, Award, ArrowRight, CheckCircle, Clock, Shield  } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AdditionalServicesSection() {
  return (
<section id="Additional Services" className="py-20 bg-gradient-to-br from-gray-50 to-sky-50 relative">
          
      {/* Background image */}
      <img
        src="https://res.cloudinary.com/dtifkfdmk/image/upload/v1752665992/home-image_ftkarx.jpg"
        alt="Visa services background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none select-none"
        style={{ zIndex: 0, filter: "blur(1px) brightness(0.85)" }}
      />
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <Badge className="bg-cyan-100 text-cyan-800 px-4 py-2">Additional Services</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Beyond Visa Processing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete travel support services to make your journey seamless from start to finish
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-100 hover:border-sky-200">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CreditCard className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">Travel Insurance</CardTitle>
                  <CardDescription>Comprehensive travel insurance coverage for your peace of mind</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Medical coverage </li>
                    <li>• Travel delay and missed connection</li>
                    <li>• Personal accident protection</li>
                    <li>• 24/7 assistance hotline</li>
                    <li> </li>
                  </ul>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/consultation">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-100 hover:border-green-200">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">Travel Planning</CardTitle>
                  <CardDescription>Expert travel planning and itinerary creation services</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Customize Travel Plans</li>
                    <li>• Hotel & flight bookings</li>
                    <li>• Local attraction tickets</li>
                    <li>• Restaurant reservations</li>
                  </ul>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/consultation">Plan Trip</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-100 hover:border-cyan-200">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">Photo Services</CardTitle>
                  <CardDescription>Professional visa photo services meeting all embassy requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Embassy-compliant photos</li>
                    <li>• Digital & printed copies</li>
                    <li>• Same-day service</li>
                    <li>• Retouching included</li>
                  </ul>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/services/photo-services">Book Session</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-100 hover:border-orange-200">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileSignatureIcon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">Digital Signature </CardTitle>
                  <CardDescription>Certified document translation in 50+ languages</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Assistance</li>
                    <li>• Appointment Schedule</li>
                    <li>• Flexible dates </li>
                    <li>• 24-48 hour turnaround</li>
                  </ul>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/consultation">Schedule</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

  )
}
