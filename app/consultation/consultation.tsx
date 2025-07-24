"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Video, MessageCircle } from "lucide-react"
import { useState } from "react"
import { title } from "process"


export default function ConsultationPage() {
  const [consultType, setConsultType] = useState<"meeting" | "phone" | "chat" | null>("meeting")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("")
  const [destination, setDestination] = useState("")
  const [purpose, setPurpose] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [notes, setNotes] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch("/api/consultations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        consultType,
        name,
        email,
        phone,
        country,
        destination,
        purpose,
        date,
        time,
        notes,
      }),
    })
    setLoading(false)
    if (res.ok) {
      setSuccess(true)
      // Optionally reset form fields here
    }
  }

  return (
    <div className="min-h-screengray-50">
      {/* Hero Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">Free Consultation</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Book Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Free Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get personalized guidance from our visa experts. Discuss your travel plans, understand requirements, and
              get a clear roadmap for your visa application.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Booking */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Schedule Your Consultation</h2>
                <p className="text-gray-600 mb-8">
                  Choose your preferred consultation method and time. Our experts will provide personalized advice for
                  your visa application.
                </p>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Consultation Type</h3>
                      <div className="grid grid-cols-1 gap-3">
                        <div
                          className={`p-4 border-2 rounded-lg cursor-pointer ${
                            consultType === "meeting"
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => setConsultType("meeting")}
                          tabIndex={0}
                          role="button"
                          aria-pressed={consultType === "meeting"}
                        >
                          <div className="flex items-center space-x-3">
                            <Users className="h-6 w-6 text-blue-600" />
                            <div>
                              <h4 className="font-semibold">In-Person Meeting</h4>
                              <p className="text-sm text-gray-600">
                                Meet our expert at our office for a face-to-face consultation
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`p-4 border-2 rounded-lg cursor-pointer ${
                            consultType === "phone"
                              ? "border-green-500 bg-green-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => setConsultType("phone")}
                          tabIndex={0}
                          role="button"
                          aria-pressed={consultType === "phone"}
                        >
                          <div className="flex items-center space-x-3">
                            <Phone className="h-6 w-6 text-green-600" />
                            <div>
                              <h4 className="font-semibold">Phone Call</h4>
                              <p className="text-sm text-gray-600">Voice consultation at your convenience</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`p-4 border-2 rounded-lg cursor-pointer ${
                            consultType === "chat"
                              ? "border-purple-500 bg-purple-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => setConsultType("chat")}
                          tabIndex={0}
                          role="button"
                          aria-pressed={consultType === "chat"}
                        >
                          <div className="flex items-center space-x-3">
                            <MessageCircle className="h-6 w-6 text-purple-600" />
                            <div>
                              <h4 className="font-semibold">Chat Consultation</h4>
                              <p className="text-sm text-gray-600">Text-based consultation via our platform</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                        <Input
                          value={name}
                          onChange={e => setName(e.target.value)}
                          placeholder="John Doe"
                          className="h-12 border-2 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                        <Input
                          type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="h-12 border-2 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
                        <Input
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                          placeholder="+91 (555)00-0000"
                          className="h-12 border-2 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Country of Residence</label>
                        <select
                          className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none"
                          value={country}
                          onChange={e => setCountry(e.target.value)}
                        >
                          <option value="">Select your country</option>
                          <optgroup label="Popular Countries">
                            <option value="us">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="ca">Canada</option>
                            <option value="au">Australia</option>
                            <option value="in">India</option>
                            <option value="cn">China</option>
                            <option value="jp">Japan</option>
                            <option value="de">Germany</option>
                            <option value="fr">France</option>
                            <option value="ae">United Arab Emirates</option>
                            <option value="ot">Other</option>
                          </optgroup>
                          {/* Include all country options */}
                        </select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Destination Country</label>
                        <select
                          className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none"
                          value={destination}
                          onChange={e => setDestination(e.target.value)}
                        >
                          <option value="">Where do you want to travel?</option>
                          <optgroup label="Popular Destinations">
                            <option value="us">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="schengen">Schengen Area (EU)</option>
                            <option value="ca">Canada</option>
                            <option value="au">Australia</option>
                            <option value="jp">Japan</option>
                            <option value="sg">Singapore</option>
                            <option value="ae">United Arab Emirates</option>
                            <option value="nz">New Zealand</option>
                            <option value="ch">Switzerland</option>
                            <option value="ot">Other</option>
                          </optgroup>
                          {/* Include all destination options */}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Travel Purpose</label>
                        <select
                          className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none"
                          value={purpose}
                          onChange={e => setPurpose(e.target.value)}
                        >
                          <option value="">Select purpose</option>
                          <optgroup label="Tourism & Leisure">
                            <option value="tourism">Tourism</option>
                            <option value="business">Business</option>
                            <option value="family-visit">Family Visit</option>
                            <option value="medical">Medical Treatment</option>
                            <option value="transit">Transit</option>
                            <option value="other">Other</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Preferred Date</label>
                        <Input
                          type="date"
                          value={date}
                          onChange={e => setDate(e.target.value)}
                          className="h-12 border-2 focus:border-blue-500"
                           min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Preferred Time</label>
                        <select
                          className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none"
                          value={time}
                          onChange={e => setTime(e.target.value)}
                        >
                          <option value="">Select time</option>
                          <option value="12pm">12:00 PM</option>
                          <option value="1pm">1:00 PM</option>
                          <option value="2pm">2:00 PM</option>
                          <option value="3pm">3:00 PM</option>
                          <option value="4pm">4:00 PM</option>
                          <option value="5pm">5:00 PM</option>
                          <option value="9am">6:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Questions or Specific Requirements</label>
                      <textarea
                        className="w-full min-h-[100px] px-4 py-3 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                        placeholder="Tell us about your specific visa needs, concerns, or questions..."
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      disabled={loading}
                    >
                      <Calendar className="mr-3 h-5 w-5" />
                      {loading ? "Booking..." : "Book Free Consultation"}
                    </Button>
                    {success && (
                      <div className="mt-4 text-green-600 text-center font-semibold">
                        Your consultation has been booked!
                      </div>
                    )}
                  </form>
                  <div className="text-center text-sm text-gray-500">
                    No commitment required • 100% free consultation • Expert guidance guaranteed
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Consultation Benefits */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">What to Expect</CardTitle>
                  <CardDescription className="text-base">
                    Your consultation will cover all aspects of your visa application
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Visa Requirements Review</h3>
                      <p className="text-gray-600 text-sm">
                        Complete overview of documents and requirements for your specific destination
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Application Strategy</h3>
                      <p className="text-gray-600 text-sm">
                        Personalized approach based on your travel history and circumstances
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Timeline Planning</h3>
                      <p className="text-gray-600 text-sm">Realistic timeline for your application and travel dates</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Cost Breakdown</h3>
                      <p className="text-gray-600 text-sm">Transparent pricing for all services and government fees</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Q&A Session</h3>
                      <p className="text-gray-600 text-sm">
                        Address all your concerns and questions with expert answers
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Consultation Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">20-35 minutes duration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Certified visa experts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-purple-600" />
                      <span className="text-sm">Flexible scheduling</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                      <span className="text-sm">Follow-up support included</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Available Time Slots</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">12:00 PM - 6:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">01:00 PM - 06:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">By appointment only</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded-lg">
                    <p className="text-xs text-gray-600">
                      <strong>Note:</strong> We accommodate different time zones. International clients can book
                      consultations outside regular hours.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Book your free consultation today and take the first step towards your visa approval
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#consultation-form">
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
