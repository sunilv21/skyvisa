"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, CheckCircle } from "lucide-react"
import { pageMetadata } from "@/lib/pageMetadata"


export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    destination: "",
    purpose: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess("")
    setError("")
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSuccess("Message sent successfully!")
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          destination: "",
          purpose: "",
          message: "",
        })
      } else {
        setError("Failed to send message.")
      }
    } catch {
      setError("Failed to send message.")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screengray-50">
      {/* Hero Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about your visa application? Our expert team is here to help you 24/7. Get personalized
              assistance and start your journey today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Phone Support</CardTitle>
                <CardDescription>Speak directly with our visa experts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600 font-bold text-lg">+91 7471137339</p>
                <p className="text-gray-600 text-sm">Mon-Fri 10AM-7PM IST</p>
                <p className="text-gray-500 text-xs">Average wait: 10 Minutes</p>
                <Button
                  asChild
                  className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="sm"
                >
                  <a href="tel:+917471137339">
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Email Support</CardTitle>
                <CardDescription>Get detailed responses to your queries</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-green-600 font-bold text-lg">info@skyvisa.in</p>
                <p className="text-gray-600 text-sm">24/7 within 2 hours</p>
                <p className="text-gray-500 text-xs">Priority for urgent cases</p>
                <Button
                  asChild
                  className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white"
                  size="sm"
                >
                  <a href="mailto:info@skyvisa.in">
                    Mail Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Live Chat</CardTitle>
                <CardDescription>Instant assistance from our team</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-purple-600 font-bold text-lg">Available Now</p>
                <p className="text-gray-600 text-sm">Reply in 15 min</p>
                <p className="text-gray-500 text-xs">Priority for urgent cases</p>
                <Button
                  asChild
                  size="sm"
                  className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <a
                    href="https://wa.me/917471137339?text=Hello%20SkyVisa%20Support!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="inline-block mr-2" width="18" height="18" viewBox="0 0 32 32" fill="none"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.386.832 4.587 2.236 6.414L4 29l7.793-2.236A11.963 11.963 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.957 0-3.81-.57-5.36-1.553l-.382-.24-4.635 1.33 1.33-4.635-.24-.382A9.963 9.963 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.145-1.71-.844-1.974-.94-.264-.097-.456-.145-.648.145-.193.29-.744.94-.912 1.134-.168.193-.336.218-.626.073-.29-.145-1.225-.451-2.334-1.438-.863-.77-1.445-1.72-1.616-2.01-.168-.29-.018-.447.127-.592.13-.13.29-.336.435-.504.145-.168.193-.29.29-.483.097-.193.048-.363-.024-.508-.073-.145-.648-1.566-.888-2.146-.234-.563-.472-.486-.648-.495l-.553-.01c-.193 0-.508.073-.773.363-.264.29-1.01.986-1.01 2.4 0 1.414 1.034 2.78 1.178 2.973.145.193 2.037 3.11 4.938 4.24.69.298 1.227.476 1.646.609.691.22 1.32.189 1.818.115.555-.082 1.71-.698 1.953-1.372.24-.674.24-1.252.168-1.372-.073-.12-.264-.193-.555-.338z" fill="#fff"/></svg>
                    WhatsApp Chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Office Visit</CardTitle>
                <CardDescription>Meet us in person for consultation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-orange-600 font-bold text-lg">Indore Office</p>
                <p className="text-gray-600 text-sm">282, Orbit Mall, AB Rd, Scheme 54 PU4, Indore, Madhya Pradesh-(452010)</p>
                <p className="text-gray-500 text-xs">By appointment only</p>
                <Button
                  asChild
                  size="sm"
                  className="mt-3 w-full bg-orange-600 hover:bg-orange-700 text-white"
                >
                  <a
                    href="https://maps.app.goo.gl/dj6g9LPcrZsRw8Cm8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="inline-block mr-2" width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" fill="#fff"/></svg>
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our visa experts will get back to you within 2 hours. For urgent matters,
                  please call us directly.
                </p>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">First Name *</label>
                        <Input
                          name="firstName"
                          placeholder="John"
                          className="h-12"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Last Name *</label>
                        <Input
                          name="lastName"
                          placeholder="Doe"
                          className="h-12"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="h-12"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                      <Input
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        className="h-12"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Country of Residence *</label>
                      <Input
                        name="country"
                        placeholder="United States"
                        className="h-12"
                        value={form.country}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Destination Country *</label>
                      <Input
                        name="destination"
                        placeholder="Where do you want to travel?"
                        className="h-12"
                        value={form.destination}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Travel Purpose</label>
                      <Input
                        name="purpose"
                        placeholder="Tourism, Business, Study, etc."
                        className="h-12"
                        value={form.purpose}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Message *</label>
                      <textarea
                        name="message"
                        className="w-full min-h-[120px] px-4 py-3 border border-input rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                        placeholder="Tell us about your visa needs, travel dates, and any specific requirements..."
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    {success && <div className="text-green-600 font-semibold">{success}</div>}
                    {error && <div className="text-red-600 font-semibold">{error}</div>}
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Contact Us?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Expert Guidance</h3>
                      <p className="text-gray-600">Get personalized advice from certified visa consultants</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Fast Response</h3>
                      <p className="text-gray-600">Average response time of 2 hours for all inquiries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Free Consultation</h3>
                      <p className="text-gray-600">Initial consultation is completely free with no obligations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                      <p className="text-gray-600">Round-the-clock assistance for urgent visa matters</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-semibold">10:00 AM - 6:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold">10:00 AM - 4:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold">Emergency Only</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-600">Emergency Support Available 24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <a href="/track-application">Track Your Application</a>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <a href="/faq">Frequently Asked Questions</a>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <a href="/services">View All Services</a>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <a href="/consultation">Book Free Consultation</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
