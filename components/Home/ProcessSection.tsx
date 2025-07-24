import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 mt-20 mb-20 bg-gradient-to-br from-sky-50 to-cyan-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center space-y-6 mb-16">
              <Badge className="bg-sky-100 text-sky-800 px-4 py-2">Our Process</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Simple 4-Step Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Getting your visa has never been easier with our streamlined process
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-6 group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                 {/* <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div> */}
                </div>
                <h3 className="text-xl font-bold text-gray-900">Choose Your Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  Select your destination and visa type from our comprehensive list of 180+ countries
                </p>
                <Button variant="ghost" size="sm" className="text-sky-600 hover:text-sky-700" asChild>
                  <Link href="/services">View Services →</Link>
                </Button>
              </div>
              <div className="text-center space-y-6 group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                 {/*  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping animation-delay-500"></div> */}
                </div>
                <h3 className="text-xl font-bold text-gray-900">Submit Documents</h3>
                <p className="text-gray-600 leading-relaxed">
                  Upload your documents securely through our encrypted platform with guided assistance
                </p>
                <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700" asChild>
                  <Link href="/upload">Upload Documents →</Link>
                </Button>
              </div>
              <div className="text-center space-y-6 group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                 {/* <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping animation-delay-1000"></div> */}
                </div>
                <h3 className="text-xl font-bold text-gray-900">Expert Review</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our certified specialists review and prepare your application with meticulous attention
                </p>
                <Button variant="ghost" size="sm" className="text-cyan-600 hover:text-cyan-700" asChild>
                  <Link href="/process">Learn More →</Link>
                </Button>
              </div>
              <div className="text-center space-y-6 group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">4</span>
                  </div>
                 {/* <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping animation-delay-1500"></div> */}
                </div>
                <h3 className="text-xl font-bold text-gray-900">Get Your Visa</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive your approved visa and travel with confidence knowing everything is handled
                </p>
                <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700" asChild>
                  <Link href="/track-application">Track Status →</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
  )
}