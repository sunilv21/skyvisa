import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Plane, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TransitVisasPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8">
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2">Transit Visas</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Seamless{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Transit Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Need to transit through a country on your way to your final destination? We make transit visa applications
              quick and hassle-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              >
                <Link href="/get-started">Apply for Transit Visa</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/consultation">Check Requirements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Transit Visa Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Transit Visa Types</h2>
            <p className="text-xl text-gray-600">Choose the right transit option for your journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Airport Transit Visa",
                description: "For passengers transiting through international airports",
                features: ["No entry to country", "Valid for 24-48 hours", "Same-day processing"],
                icon: <Plane className="h-8 w-8 text-blue-600" />,
              },
              {
                title: "Short-stay Transit",
                description: "For brief stopovers with entry to the transit country",
                features: ["Up to 5 days validity", "City exploration allowed", "Hotel stays permitted"],
                icon: <MapPin className="h-8 w-8 text-green-600" />,
              },
              {
                title: "Multiple Transit",
                description: "For travelers with multiple stopovers",
                features: ["Multiple entries", "Extended validity", "Flexible itinerary"],
                icon: <Clock className="h-8 w-8 text-purple-600" />,
              },
            ].map((visa, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {visa.icon}
                  </div>
                  <CardTitle className="text-xl">{visa.title}</CardTitle>
                  <CardDescription>{visa.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {visa.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/get-quote">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Transit Countries */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Popular Transit Countries</h2>
            <p className="text-xl text-gray-600">Countries that commonly require transit visas</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { country: "United Kingdom", requirement: "Required for most", processing: "Same day" },
              { country: "Germany", requirement: "Schengen transit", processing: "1-2 days" },
              { country: "France", requirement: "Airport transit", processing: "1-2 days" },
              { country: "Canada", requirement: "eTA required", processing: "Minutes" },
              { country: "Australia", requirement: "Transit visa", processing: "1-3 days" },
              { country: "United States", requirement: "ESTA/Visa", processing: "Same day" },
              { country: "China", requirement: "24/72/144 hour", processing: "On arrival" },
              { country: "UAE", requirement: "Transit permit", processing: "Same day" },
            ].map((country, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{country.country}</h3>
                  <p className="text-sm text-gray-600 mb-2">{country.requirement}</p>
                  <Badge variant="secondary" className="text-xs">
                    {country.processing}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Transit Visa Quick Facts</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Fast Processing</h3>
              <p className="text-gray-600">Most transit visas processed within 24-48 hours</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Simple Requirements</h3>
              <p className="text-gray-600">Minimal documentation needed for most transit visas</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Plane className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">Airport Assistance</h3>
              <p className="text-gray-600">Guidance for airport transit procedures</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold">Global Coverage</h3>
              <p className="text-gray-600">Transit visa services for all major transit hubs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need a Transit Visa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let transit requirements delay your journey. Get your transit visa processed quickly.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/get-started">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
