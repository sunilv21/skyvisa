import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, CheckCircle, Clock, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EnhancedHeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectFit: "cover" }}
      >
        <source src="https://res.cloudinary.com/dtifkfdmk/video/upload/v1753087829/home-video-background_1_b86msr.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support the video tag */}
        Your browser does not support the video tag.
      </video>
      {/* Overlay for gradient and blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 opacity-40 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-6 relative z-20">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="space-y-8 animate-fade-in-up max-w-3xl w-full">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-800 border-0 px-4 py-2 animate-bounce-slow"
              >
                <Award className="w-4 h-4 mr-2" />
                Trusted by 20,000+ Travelers Worldwide
              </Badge>
              <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Your Visa Journey Made{" "}
                <span className="text-4xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Effortless
                </span>
              </h1>
              <p className="bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-800 border-0 px-4 py-2 animate-bounce-slow rounded-full">
                Expert visa assistance for all destinations. We handle the complexity, you focus on creating
                memories.
                <span className="font-semibold text-sky-600"> 99.2% approval rate guaranteed.</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/get-started">
                  Start Your Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-sky-200 hover:bg-sky-50 hover:border-sky-300 transition-all duration-300"
                asChild
              >
                <Link href="/consultation">Free Consultation</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 justify-center">
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur rounded-xl border border-white/20 shadow-sm justify-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">99.2% Success</div>
                  <div className="text-sm text-gray-600">Approval Rate</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur rounded-xl border border-white/20 shadow-sm justify-center">
                <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-sky-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">24-48 Hours</div>
                  <div className="text-sm text-gray-600">Fast Processing</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur rounded-xl border border-white/20 shadow-sm justify-center">
                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">100% Secure</div>
                  <div className="text-sm text-gray-600">& Confidential</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative animate-fade-in-right">
        
        {/* Floating Elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
      </div>
    </section>
  )
}