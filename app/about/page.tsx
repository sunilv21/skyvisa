import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, Shield, Star, ArrowRight, Target, Heart, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { pageMetadata } from "@/lib/pageMetadata"

export const metadata = {
  title: "About Us - Sky Visa",
  description: "Trusted travel and visa consultancy for global destinations.",
  keywords: ["visa", "travel", "sky visa", "consulting"],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-cyan-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-sky-100 text-sky-800 px-4 py-2">About Sky Visa</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Your Trusted{" "}
              <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
                Visa Partner
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Since 2018, we've been helping travelers achieve their dreams with expert visa assistance, processing over
              20,000 successful applications with a 99.2% approval rate.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-sky-600">20K+</div>
              <div className="text-gray-600">Successful Applications</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-green-600">99.2%</div>
              <div className="text-gray-600">Approval Rate</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-cyan-600">180+</div>
              <div className="text-gray-600">Countries Covered</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-orange-600">7+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="text-center p-8 border-0 bg-gradient-to-br from-sky-50 to-sky-100">
              <CardHeader>
                <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To simplify the visa application process and make international travel accessible to everyone through
                  expert guidance, cutting-edge technology, and personalized service.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 bg-gradient-to-br from-cyan-50 to-cyan-100">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To become the world's most trusted visa assistance platform, connecting cultures and enabling seamless
                  global mobility for millions of travelers worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Integrity, excellence, and customer-centricity drive everything we do. We believe in transparent
                  processes, reliable service, and building lasting relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-sky-100 text-sky-800 px-4 py-2">Our Story</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">From Humble Beginnings to Global Success</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sky Visa was founded in 2018 by a team of immigration experts who experienced firsthand the
                  complexities and frustrations of visa applications. What started as a small consultancy helping
                  friends and family has grown into a comprehensive visa assistance platform.
                </p>
                <p>
                  Our founders, having navigated the visa process for their own international travels and business
                  ventures, understood the need for a more streamlined, transparent, and reliable service. They
                  envisioned a company that would eliminate the stress and uncertainty from visa applications.
                </p>
                <p>
                  Today, we're proud to have helped over 20,000 travelers achieve their dreams, from honeymoon trips to
                  business expansions, student exchanges to family reunions. Our success is measured not just in
                  numbers, but in the smiles of satisfied customers and the memories they create around the world.
                </p>
              </div>
              <Button className="bg-sky-600 hover:bg-sky-700" asChild>
                <Link href="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dtifkfdmk/image/upload/v1752666008/sky-logo_zmuhci.jpg?height=500&width=600"
                alt="Our story"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-sky-100 text-sky-800 px-4 py-2">Our Team</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Meet Our Experts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of visa specialists and customer service professionals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Sarah Mitchell"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 border-4 border-sky-200"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aakash Panchal</h3>
                <p className="text-sky-600 font-medium mb-3">CEO & Founder</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Former Legal Advisor in immigration matters with 10+ years experience. Sarah founded Sky Visa to make
                  international travel accessible to everyone.
                </p>
                <div className="flex justify-center mt-4 space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>

            

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Maria Rodriguez"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 border-4 border-purple-200"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Yash Mewade</h3>
                <p className="text-purple-600 font-medium mb-3">Head Operations</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Certified immigration consultant specializing in complex cases. Maria has helped thousands of clients
                  navigate challenging visa requirements.
                </p>
                <div className="flex justify-center mt-4 space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="David Chen"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 border-4 border-yellow-200"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vaibhav Shivhare</h3>
                <p className="text-yellow-600 font-medium mb-3">Customer Success Manager</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Operations expert who streamlined our processes to achieve industry-leading processing times and
                  customer satisfaction rates.
                </p>
                <div className="flex justify-center mt-4 space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="David Chen"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 border-4 border-green-200"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sunil Verma</h3>
                <p className="text-green-600 font-medium mb-3">Digital Marketing & Tech Head</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Operations expert who streamlined our processes to achieve industry-leading processing times and
                  customer satisfaction rates.
                </p>
                <div className="flex justify-center mt-4 space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-cyan-100 text-cyan-800 px-4 py-2">Why Choose Us</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, technology, and personalized service to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-sky-600" />
                </div>
                <CardTitle className="text-lg">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Certified visa consultants with 7+ years of experience and deep knowledge of immigration laws
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Secure Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  High-level security ensuring your personal information is always protected
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle className="text-lg">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Coverage for 180+ countries with established relationships with embassies and consulates worldwide
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Round-the-clock customer support with multilingual assistance and dedicated account managers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-cyan-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Start Your Visa Journey?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who trusted us with their visa applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/get-started">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
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
        </div>
      </section>
    </div>
  )
}
