"use client"  ;
import { useState, useEffect, use } from "react"
import { Star, Quote, ArrowLeft, ArrowRight, Users, Award } from "lucide-react"
import Head from "next/head"   

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "USA",
    visa: "Tourist Visa to Japan",
    rating: 5,
    text: "Sky Visa made my dream trip to Japan possible! The process was smooth and their team was incredibly helpful throughout.",
    image: "/images/destinations/japan.jpg",
  },
  {
    name: "Michael Chen",
    country: "Canada",
    visa: "Business Visa to UK",
    rating: 5,
    text: "Professional service and quick processing. Got my UK business visa approved in record time!",
    image: "/images/destinations/uk.jpg",
  },
  {
    name: "Emma Rodriguez",
    country: "Spain",
    visa: "Student Visa to Australia",
    rating: 5,
    text: "The team at Sky Visa guided me through every step of my student visa application. Highly recommended!",
    image: "/images/destinations/australia.jpg",
  },
]

export default function TestimonialClientPage() {
  const [current, setCurrent] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 relative">
      <div className="absolute inset-0 bg-[url('/images/home-image.png')] bg-no-repeat bg-cover opacity-5" />
      <div className="relative z-10">

        {/* Hero */}
        <section className="text-white bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Star className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Client Testimonials</h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto">
              Real stories from clients who achieved their visa dreams with Sky Visa
            </p>
          </div>
        </section>

        {/* Carousel */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
              <Quote className="absolute top-4 left-4 w-12 h-12 text-sky-200" />

              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800">{testimonials[current].name}</div>
                  <div className="text-gray-600">{testimonials[current].visa}</div>
                  <div className="text-sm text-sky-600">From {testimonials[current].country}</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-4">
                <button
                  aria-label="Previous testimonial"
                  onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
                  className="p-2 rounded-full bg-sky-100 hover:bg-sky-200 transition-colors"
                >
                  <ArrowLeft className="w-6 h-6 text-sky-600" />
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      aria-label={`Go to testimonial ${index + 1}`}
                      onClick={() => setCurrent(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === current ? "bg-sky-600" : "bg-sky-200"
                      }`}
                    />
                  ))}
                </div>

                <button
                  aria-label="Next testimonial"
                  onClick={() => setCurrent((current + 1) % testimonials.length)}
                  className="p-2 rounded-full bg-sky-100 hover:bg-sky-200 transition-colors"
                >
                  <ArrowRight className="w-6 h-6 text-sky-600" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* TrustIndex Widget */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">All Client Reviews</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Browse through hundreds of authentic reviews from our satisfied clients
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="relative">
                {!isLoaded && (
                  <div className="flex items-center justify-center h-96 bg-gradient-to-r from-sky-100 to-cyan-100 rounded-lg">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading reviews...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src="https://cdn.trustindex.io/amp-widget.html#9dc03a9481965434a716b1d4d9c"
                  width="100%"
                  height="342"
                  frameBorder="0"
                  scrolling="no"
                  className={`w-full transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => setIsLoaded(true)}
                  aria-label="Trustindex Client Reviews"
                  title="Customer Reviews and Testimonials"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-gradient-to-r from-sky-50 to-cyan-50">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Trusted by Thousands</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our commitment to excellence has earned us the trust of clients worldwide. Every review represents a
                successful visa journey and a dream fulfilled.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-sky-600 mb-2">50,000+</div>
                  <div className="text-gray-600">Visas Processed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-blue-600 mb-2">4.9/5</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
                <Award className="w-12 h-12 text-sky-600" />
                <div>
                  <div className="font-semibold text-gray-800">Industry Recognition</div>
                  <div className="text-gray-600">Award-winning visa services</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
                <Users className="w-12 h-12 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-800">Expert Team</div>
                  <div className="text-gray-600">Certified visa consultants</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
                <Star className="w-12 h-12 text-cyan-600" />
                <div>
                  <div className="font-semibold text-gray-800">5-Star Service</div>
                  <div className="text-gray-600">Consistently rated excellent</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Our Next Success Story</h2>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              Join the thousands of satisfied clients who have achieved their visa goals with Sky Visa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold hover:bg-sky-50 transition-colors">
                Start Your Application
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-sky-600 transition-colors">
                Read More Reviews
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
