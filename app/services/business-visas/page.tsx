import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Globe, Briefcase, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BusinessVisasPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-8">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">Business Visas</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Expand Your Business{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Globally
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure business visas for meetings, conferences, and partnerships worldwide. Our expert team ensures your
              business travel goes smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="/get-started">Start Application</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/consultation">Business Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Visa Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Business Visa Categories</h2>
            <p className="text-xl text-gray-600">Choose the right visa type for your business needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Business Meetings",
                description: "For attending meetings, negotiations, and client visits",
                features: ["Single/Multiple entry", "Up to 6 months validity", "Fast processing"],
                icon: <Users className="h-8 w-8 text-blue-600" />,
              },
              {
                title: "Conferences & Events",
                description: "For attending conferences, seminars, and trade shows",
                features: ["Event-specific documentation", "Group applications", "Express service available"],
                icon: <Briefcase className="h-8 w-8 text-green-600" />,
              },
              {
                title: "Investment & Partnership",
                description: "For exploring investment opportunities and partnerships",
                features: ["Extended validity", "Multiple entry options", "Priority processing"],
                icon: <Globe className="h-8 w-8 text-purple-600" />,
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

      {/* Popular Business Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Top Business Destinations</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { country: "United States", processing: "3-5 days", popular: "Tech & Finance" },
              { country: "United Kingdom", processing: "2-4 days", popular: "Banking & Trade" },
              { country: "Germany", processing: "5-7 days", popular: "Manufacturing" },
              { country: "Singapore", processing: "2-3 days", popular: "Asia-Pacific Hub" },
              { country: "UAE", processing: "1-2 days", popular: "Middle East Gateway" },
              { country: "China", processing: "7-10 days", popular: "Manufacturing & Trade" },
              { country: "Japan", processing: "3-5 days", popular: "Technology" },
              { country: "Canada", processing: "5-8 days", popular: "Resources & Tech" },
            ].map((destination, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{destination.country}</h3>
                  <p className="text-sm text-gray-600 mb-2">{destination.popular}</p>
                  <Badge variant="secondary">{destination.processing}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Expand Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your business visa processed quickly and efficiently with our expert team
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
