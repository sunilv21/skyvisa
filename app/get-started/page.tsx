"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Plane, Briefcase, GraduationCap, Users } from "lucide-react"
import Link from "next/link"

export default function GetStartedPage() {
  const [form, setForm] = useState({
    country: "",
    destination: "",
    purpose: "",
    travelDate: "",
    duration: "",
    fullName: "",
    email: "",
    phone: "",
    additional: "",
    agree: false,
    adults: "1",
    minors: "0",
    infants: "0",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess("")
    setError("")
    if (!form.country || !form.destination || !form.purpose || !form.travelDate || !form.fullName || !form.email || !form.phone || !form.agree) {
      setError("Please fill all required fields and agree to the terms.")
      setLoading(false)
      return
    }
    try {
      const res = await fetch("/api/get-started", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSuccess("Application submitted successfully!")
        setForm({
          country: "",
          destination: "",
          purpose: "",
          travelDate: "",
          duration: "",
          fullName: "",
          email: "",
          phone: "",
          additional: "",
          agree: false,
          adults: "1",
          minors: "0",
          infants: "0",
        })
      } else {
        setError("Failed to submit application.")
      }
    } catch {
      setError("Failed to submit application.")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Start Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Visa Journey
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Begin your visa application. Our expert team will guide you through every
              stage of your application.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <Card className="max-w-4xl mx-auto shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl">Quick Application Start</CardTitle>
              <CardDescription className="text-lg">
                Tell us about your travel plans and we'll get you started immediately
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Country */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Your Country *</label>
                    <select
                      name="country"
                      className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none"
                      value={form.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your country of residence</option>
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
                    </select>
                  </div>

                  {/* Destination */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Destination Country *</label>
                    <select
                      name="destination"
                      className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none"
                      value={form.destination}
                      onChange={handleChange}
                      required
                    >
                         <option value="">Where do you want to travel?</option>
                        <optgroup label="Popular Destinations">
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="ca">Singapore</option>
                        <option value="au">Malaysia</option>
                        <option value="fr">Indonesia</option>
                        <option value="de">Thailand</option>
                        <option value="it">Australia</option>
                        <option value="es">United Arab Emirates</option>
                        <option value="us">Turkey</option>
                        <option value="schengen">Schengen Area (EU)</option>
                        <option value="uk">Italy</option>
                        <option value="uk">Spain</option>
                        <option value="uk">United Kingdom</option>
                        <option value="uk">United States</option>
                        <option value="uk">Canada</option>
                        <option value="uk">Australia</option>
                        <option value="uk">Germany</option> 
                        <option value="uk">France</option>
                        <option value="uk">Netherlands</option>
                        <option value="uk">New Zealand</option>
                        <option value="jp">Japan</option>
                        <option value="kr">South Korea</option>
                        <option value="cn">China</option>
                        <option value="ot">Other</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Purpose */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Travel Purpose *</label>
                    <select
                      name="purpose"
                      className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none"
                      value={form.purpose}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select purpose</option>
                      <optgroup label="Tourism & Leisure">
                        <option value="tourist">Tourism/Vacation</option>
                      </optgroup>
                      <optgroup label="Business & Professional">
                        <option value="business">Business Meeting</option>
                        <option value="conference">Conference/Seminar</option>
                      </optgroup>
                      <optgroup label="Family & Personal">
                        <option value="family-visit">Family Visit</option>
                        <option value="wedding">Wedding/Marriage</option>
                        <option value="retirement">Retirement/Senior</option>
                      </optgroup>
                      <optgroup label="Transit & Transportation">
                        <option value="transit">Airport Transit</option>
                        <option value="connecting-flight">Connecting Flight</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Travel Date */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Travel Date *</label>
                    <Input
                      name="travelDate"
                      type="date"
                      className="h-12 border-2 focus:border-blue-500"
                      value={form.travelDate}
                      onChange={handleChange}
                      required
                       min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  {/* Duration */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Duration of Stay</label>
                    <Input
                      name="duration"
                      placeholder="e.g., 2 weeks"
                      className="h-12 border-2 focus:border-blue-500"
                      value={form.duration}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* No. of Persons */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">No. of Persons</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Adults (12+)</label>
                      <select
                        name="adults"
                        value={form.adults}
                        onChange={handleChange}
                        className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none"
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Minors (2–11)</label>
                      <select
                        name="minors"
                        value={form.minors}
                        onChange={handleChange}
                        className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none"
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i} value={i}>{i}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Infants (0–1)</label>
                      <select
                        name="infants"
                        value={form.infants}
                        onChange={handleChange}
                        className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none"
                      >
                        {[...Array(5)].map((_, i) => (
                          <option key={i} value={i}>{i}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                    <Input
                      name="fullName"
                      placeholder="As per passport"
                      className="h-12 border-2 focus:border-blue-500"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="h-12 border-2 focus:border-blue-500"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
                  <Input
                    name="phone"
                    placeholder="+91 (555)00-0000"
                    className="h-12 border-2 focus:border-blue-500"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Additional Information</label>
                  <textarea
                    name="additional"
                    className="w-full min-h-[100px] px-4 py-3 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                    placeholder="Any specific requirements, previous visa history, or questions..."
                    value={form.additional}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                  <p className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link href="/terms-of-service" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Start My Application"}
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                {success && <div className="text-green-600 font-semibold">{success}</div>}
                {error && <div className="text-red-600 font-semibold">{error}</div>}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
