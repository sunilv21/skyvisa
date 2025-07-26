"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, HeadphonesIcon, ArrowRight } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  // Show popup when success changes
  useEffect(() => {
    if (success) {
      setShowPopup(true)
      const timer = setTimeout(() => setShowPopup(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [success])

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await res.json()

      if (res.ok) {
        setSuccess("Message sent successfully!")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        setError(result.error || "Something went wrong")
      }
    } catch (err) {
      setError("Failed to submit form. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all">
          {success}
       </div>
      )}

      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? Our visa experts are here to help you 24/7
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Cards */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex flex-col md:flex-row gap-4">
                <ContactCard
                  icon={<Phone className="h-6 w-6 text-sky-600" />}
                  title="Phone Support"
                  details={[
                    "+91 7471137339",
                    "Mon-Sat 10AM-6PM IST",
                    "Average wait time: 10 Minutes",
                  ]}
                  buttonText="Call Now"
                  buttonLink="tel:+917471137339"
                  bg="sky"
                />
                <ContactCard
                  icon={<Phone className="h-6 w-6 text-sky-600" />}
                  title="Phone Support"
                  details={[
                    "+91 8827 222177",
                    "Mon-Sat 10AM-6PM IST",
                    "Average wait time: 10 Minutes",
                  ]}
                  buttonText="Call Now"
                  buttonLink="tel:+918827222177"
                  bg="sky"
                />
              </div>


            {/* Email */}
            <ContactCard
              icon={<Mail className="h-6 w-6 text-green-600" />}
              title="Email Support"
              details={[
                "info@skyvisa.in",
                "24/7 response within 2 hours",
                "Priority support for urgent cases",
              ]}
              buttonText="Send Email"
              buttonLink="mailto:info@skyvisa.in"
              bg="green"
            />

            {/* Address */}
            <ContactCard
              icon={<MapPin className="h-6 w-6 text-cyan-600" />}
              title="Office Address"
              details={[
                "282, Orbit Mall, AB Rd, Scheme 54 PU4",
                "Indore, Madhya Pradesh - 452010",
                "Walk-in consultations available",
              ]}
              buttonText="Get Directions"
              buttonLink="https://maps.app.goo.gl/dj6g9LPcrZsRw8Cm8"
              bg="cyan"
            />

            {/* WhatsApp */}
            <ContactCard
              icon={<HeadphonesIcon className="h-6 w-6 text-orange-600" />}
              title="Chat Support"
              details={[
                "Available on WhatsApp",
                "Responses in 30 min",
              ]}
              buttonText="Start WhatsApp Chat"
              buttonLink="https://wa.me/917471137339"
              bg="green"
            />
          </div>

          {/* Contact Form */}
          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription className="text-base">
                Fill out the form and we'll get back to you within 2 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {success && <p className="text-green-600 text-sm">{success}</p>}
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <InputField name="firstName" value={formData.firstName} onChange={handleChange} label="First Name *" required />
                  <InputField name="lastName" value={formData.lastName} onChange={handleChange} label="Last Name *" required />
                </div>
                <InputField name="email" value={formData.email} onChange={handleChange} label="Email Address *" type="email" required />
                <InputField name="phone" value={formData.phone} onChange={handleChange} label="Phone Number *" required />
                <InputField name="subject" value={formData.subject} onChange={handleChange} label="Subject *" required />
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px] px-4 py-3 border-2 border-input rounded-lg focus:border-sky-500 focus:outline-none resize-none"
                    placeholder="Tell us about your visa needs, travel dates, and any specific requirements..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 text-lg bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// 🔹 Reusable ContactCard component
function ContactCard({ icon, title, details, buttonText, buttonLink, bg }: any) {
  return (
    <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 bg-${bg}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-xl text-gray-900 mb-2">{title}</h3>
        {details.map((line: string, i: number) => (
          <p key={i} className={i === 0 ? "text-" + bg + "-600 font-semibold text-lg" : "text-gray-600"}>
            {line}
          </p>
        ))}
        <Button size="sm" className={`mt-2 bg-${bg}-600 hover:bg-${bg}-700`} asChild>
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">{buttonText}</a>
        </Button>
      </div>
    </div>
  )
}

// 🔹 Reusable InputField component
function InputField({ name, value, onChange, label, type = "text", required = false }: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <Input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="h-12 border-2 focus:border-sky-500"
      />
    </div>
  )
}
