import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Zap, Shield, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ExpressProcessingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8">
            <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2">Express Processing</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent">
                Lightning Fast
              </span>{" "}
              Visa Processing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Need your visa urgently? Our express processing service gets your visa approved in record time with
              guaranteed delivery dates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-red-600 hover:from-yellow-700 hover:to-red-700"
              >
                <Link href="/get-started">Express Application</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/consultation">Emergency Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Express Service Tiers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Express Service Tiers</h2>
            <p className="text-xl text-gray-600">Choose the speed that matches your urgency</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Same Day Express",
                time: "4-8 hours",
                price: "From $499",
                features: [
                  "Same day processing",
                  "Dedicated case manager",
                  "Priority embassy appointments",
                  "Express courier delivery",
                  "24/7 status updates",
                ],
                popular: false,
                color: "from-red-500 to-red-600",
              },
              {
                title: "Next Day Express",
                time: "24 hours",
                price: "From $299",
                features: [
                  "Next business day processing",
                  "Fast-track review",
                  "Priority scheduling",
                  "Express delivery",
                  "Real-time tracking",
                ],
                popular: true,
                color: "from-orange-500 to-orange-600",
              },
              {
                title: "48 Hour Express",
                time: "2 days",
                price: "From $199",
                features: [
                  "48-hour processing",
                  "Expedited review",
                  "Quick appointments",
                  "Fast delivery",
                  "Status notifications",
                ],
                popular: false,
                color: "from-yellow-500 to-yellow-600",
              },
            ].map((tier, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${tier.popular ? "ring-2 ring-orange-500 scale-105" : ""}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{tier.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-gray-900">{tier.time}</CardDescription>
                  <div className="text-3xl font-bold text-blue-600">{tier.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full bg-gradient-to-r ${tier.color} hover:opacity-90`} asChild>
                    <Link href="/get-started">Choose Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Express Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Choose Express Processing?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Guaranteed Speed</h3>
              <p className="text-gray-600">Meet your travel deadlines with guaranteed processing times</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Priority Handling</h3>
              <p className="text-gray-600">Your application gets top priority at every step</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Dedicated Support</h3>
              <p className="text-gray-600">Personal case manager available 24/7</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Success Guarantee</h3>
              <p className="text-gray-600">Same high approval rates with express speed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Situations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Perfect for Emergency Situations</h2>
            <p className="text-xl text-gray-600">When you need your visa urgently</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Last-minute business trips",
              "Family emergencies",
              "Medical treatments abroad",
              "Conference deadlines",
              "Job interview opportunities",
              "Educational deadlines",
            ].map((situation, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <span className="text-gray-700 font-medium">{situation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-red-600 text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Your Visa Urgently?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let time constraints stop your travel plans. Get express processing now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/get-started">
                Start Express Application <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-gray-900"
              asChild
            >
              <Link href="tel:+91 7471137339">Call Emergency Line</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
