"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Calculator,
  CheckCircle,
  Clock,
  Shield,
  Star,
  ArrowRight,
  FileText,
  Users,
  Plane,
  Briefcase,
  GraduationCap,
  Globe,
  Zap,
  Award,
  Phone,
  Mail,
  Info,
} from "lucide-react"
import Link from "next/link"

export default function GetQuotePage() {
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedDestination, setSelectedDestination] = useState("")
  const [selectedPurpose, setSelectedPurpose] = useState("")
  const [selectedService, setSelectedService] = useState("")
  const [numberOfApplicants, setNumberOfApplicants] = useState(1)
  const [urgency, setUrgency] = useState("standard")
  const [showQuote, setShowQuote] = useState(false)
  const [askForPackages, setAskForPackages] = useState(false)

  const calculateQuote = () => {
    setShowQuote(true)
  }

  // Add a mapping of destination country code to visa price (example values, update as needed)
  const visaPrices: Record<string, number> = {
    af: 0,
    dz: 11300,
    ao: 7100,
    ar: 17207,
    am: 790,
    aw: 0,
    au: 11000,
    at: 12100,
    az: 2600,
    ch: 12100,
    bh: 2300,
    bd: 0,
    pa: 5200,
    by: 8000,
    be: 12100,
    bz: 36800,
    bj: 6000,
    pg: 7800,
    py: 8700,
    bo: 0,
    ba: 0,
    bw: 1900,
    br: 8000,
    bn: 1000,
    bg: 10650,
    bf: 7500,
    bi: 7800,
    kh: 4300,
    pe: 2700,
    ca: 11700,
    td: 21600,
    cl: 4303,
    cn: 0,
    co: 9916,
    ph: 5700,
    pl: 12100,
    cg: 19500,
    cr: 3700,
    ci: 6000,
    hr: 12200,
    cu: 8400,
    cy: 8522,
    cz: 10143,
    dk: 10844,
    dj: 6500,
    dm: 6500,
    do: 12910,
    ec: 6900,
    eg: 3000,
    pt: 12100,
    qa: 4800,
    ee: 12100,
    et: 7100,
    fj: 3500,
    fi: 12100,
    fr: 12100,
    ga: 8610,
    gm: 8000,
    ge: 4100,
    de: 12100,
    gh: 10300,
    gr: 12100,
    gt: 4400,
    gn: 6900,
    in: 0,
    ro: 12100,
    gy: 7000,
    ru: 10361,
    rw: 4400,
    hk: 2600,
    hu: 12100,
    is: 12100,
    so: 12000,
    id: 3000,
    ir: 5700,
    iq: 4400,
    ie: 9300,
    il: 4300,
    it: 12100,
    sa: 16000,
    jp: 1850,
    jo: 5400,
    kz: 0,
    ke: 3100,
    sn: 0,
    kr: 5000,
    kw: 12000,
    la: 4400,
    lv: 12100,
    lb: 8520,
    ls: 13000,
    za: 3140,
    li: 12100,
    lt: 12100,
    lu: 12100,
    sc: 0,
    mg: 1700,
    mw: 4500,
    my: 3115,
    mv: 0,
    ml: 3600,
    mt: 12100,
    mu: 0,
    mx: 4500,
    md: 4000,
    es: 12100,
    mn: 400,
    ma: 0,
    mz: 5266,
    mm: 6100,
    na: 3000,
    sg: 2550,
    sk: 12100,
    nl: 12100,
    nz: 23000,
    si: 12100,
    ne: 20000,
    ng: 45800,
    no: 12100,
    om: 3100,
    lk: 0,
    tw: 4200,
    tj: 10500,
    tz: 21500,
    th: 5000,
    tg: 6700,
    sd: 2800,
    ss: 6225,
    tn: 6700,
    tr: 18673,
    se: 12100,
    ug: 4500,
    ae: 9500,
    uk: 16973,
    us: 16000,
    vi: 0,
    uy: 1180,
    uz: 1900,
    va: 0,
    vn: 2300,
    zm: 2300,
    gl: 9100,
  }

  // Replace getBasePrice with visa price lookup
  const getVisaPrice = () => {
    if (!selectedDestination) return 0
    const price = visaPrices[selectedDestination] || 0
    // Round up to nearest 100, then subtract 1 (e.g., 11300 -> 11299)
    if (price === 0) return 0
    return Math.ceil(price / 100) * 100 - 1
  }

  const getServicePrice = () => {
    // Flat service fee of 2999 for all services
    return 2999
  }

  const getUrgencyPrice = () => {
    const urgencyPrices = {
      standard: 0,
      priority: 299,
    }
    return urgencyPrices[urgency as keyof typeof urgencyPrices] || 0
  }

  const getTotalPrice = () => {
    const visaPrice = getVisaPrice()
    const servicePrice = getServicePrice()
    const urgencyPrice = getUrgencyPrice()
    const subtotal = (visaPrice + servicePrice + urgencyPrice) * numberOfApplicants
    return subtotal
  }

  // Make sure all code blocks above are closed!

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">Get Quote</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Get Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Instant Quote
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get transparent, upfront pricing for your visa application. No hidden fees, no surprises - just honest
              pricing for professional visa assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Calculator */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Visa Quote Calculator</h2>
                <p className="text-gray-600 mb-8">
                  Fill in your details below to get an accurate quote for your visa application
                </p>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Your Country *</label>
                      <select
                        className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none"
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                      >
                        <option value="">Select your country</option>
                        <option value="in">India</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Destination Country *</label>
                      <select
                        className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none"
                        value={selectedDestination}
                        onChange={(e) => setSelectedDestination(e.target.value)}
                      >
                        <option value="">Select destination</option>
                        <option value="af">Afghanistan</option>
                        <option value="dz">Algeria</option>
                        <option value="ao">Angola</option>
                        <option value="ar">Argentina</option>
                        <option value="am">Armenia</option>
                        <option value="aw">Aruba</option>
                        <option value="au">Australia</option>
                        <option value="at">Austria</option>
                        <option value="az">Azerbaijan</option>
                        <option value="ch">Switzerland</option>
                        <option value="bh">Bahrain</option>
                        <option value="bd">Bangladesh</option>
                        <option value="pa">Panama</option>
                        <option value="by">Belarus</option>
                        <option value="be">Belgium</option>
                        <option value="bz">Belize</option>
                        <option value="bj">Benin</option>
                        <option value="pg">Papua New Guinea</option>
                        <option value="py">Paraguay</option>
                        <option value="bo">Bolivia</option>
                        <option value="ba">Bosnia and Herzegovina</option>
                        <option value="bw">Botswana</option>
                        <option value="br">Brazil</option>
                        <option value="bn">Brunei</option>
                        <option value="bg">Bulgaria</option>
                        <option value="bf">Burkina Faso</option>
                        <option value="bi">Burundi</option>
                        <option value="kh">Cambodia</option>
                        <option value="pe">Peru</option>
                        <option value="ca">Canada</option>
                        <option value="td">Chad</option>
                        <option value="cl">Chile</option>
                        <option value="cn">China</option>
                        <option value="co">Colombia</option>
                        <option value="ph">Philippines</option>
                        <option value="pl">Poland</option>
                        <option value="cg">Congo</option>
                        <option value="cr">Costa Rica</option>
                        <option value="ci">Côte d'Ivoire</option>
                        <option value="hr">Croatia</option>
                        <option value="cu">Cuba</option>
                        <option value="cy">Cyprus</option>
                        <option value="cz">Czech Republic</option>
                        <option value="dk">Denmark</option>
                        <option value="dj">Djibouti</option>
                        <option value="dm">Dominica</option>
                        <option value="do">Dominican Republic</option>
                        <option value="ec">Ecuador</option>
                        <option value="eg">Egypt</option>
                        <option value="pt">Portugal</option>
                        <option value="qa">Qatar</option>
                        <option value="ee">Estonia</option>
                        <option value="et">Ethiopia</option>
                        <option value="fj">Fiji</option>
                        <option value="fi">Finland</option>
                        <option value="fr">France</option>
                        <option value="ga">Gabon</option>
                        <option value="gm">Gambia</option>
                        <option value="ge">Georgia</option>
                        <option value="de">Germany</option>
                        <option value="gh">Ghana</option>
                        <option value="gr">Greece</option>
                        <option value="gt">Guatemala</option>
                        <option value="gn">Guinea</option>
                        <option value="in">India</option>
                        <option value="ro">Romania</option>
                        <option value="gy">Guyana</option>
                        <option value="ru">Russia</option>
                        <option value="rw">Rwanda</option>
                        <option value="hk">Hong Kong</option>
                        <option value="hu">Hungary</option>
                        <option value="is">Iceland</option>
                        <option value="so">Somalia</option>
                        <option value="id">Indonesia</option>
                        <option value="ir">Iran</option>
                        <option value="iq">Iraq</option>
                        <option value="ie">Ireland</option>
                        <option value="il">israel</option>
                        <option value="it">Italy</option>
                        <option value="sa">Saudi Arabia</option>
                        <option value="jp">Japan</option>
                        <option value="jo">Jordan</option>
                        <option value="kz">Kazakhstan</option>
                        <option value="ke">Kenya</option>
                        <option value="sn">Senegal</option>
                        <option value="kr">South Korea</option>
                        <option value="kw">Kuwait</option>
                        <option value="la">Laos</option>
                        <option value="lv">Latvia</option>
                        <option value="lb">Lebanon</option>
                        <option value="ls">Lesotho</option>
                        <option value="za">South Africa</option>
                        <option value="li">Liechtenstein</option>
                        <option value="lt">Lithuania</option>
                        <option value="lu">Luxembourg</option>
                        <option value="sc">Seychelles</option>
                        <option value="mg">Madagascar</option>
                        <option value="mw">Malawi</option>
                        <option value="my">Malaysia</option>
                        <option value="mv">Maldives</option>
                        <option value="ml">Mali</option>
                        <option value="mt">Malta</option>
                        <option value="mu">Mauritius</option>
                        <option value="mx">Mexico</option>
                        <option value="md">Moldova</option>
                        <option value="es">Spain</option>
                        <option value="mn">Mongolia</option>
                        <option value="ma">Morocco</option>
                        <option value="mz">Mozambique</option>
                        <option value="mm">Myanmar</option>
                        <option value="na">Namibia</option>
                        <option value="sg">Singapore</option>
                        <option value="sk">Slovakia</option>
                        <option value="nl">Netherlands</option>
                        <option value="nz">New Zealand</option>
                        <option value="si">Slovenia</option>
                        <option value="ne">Niger</option>
                        <option value="ng">Nigeria</option>
                        <option value="no">Norway</option>
                        <option value="om">Oman</option>
                        <option value="lk">Sri Lanka</option>
                        <option value="tw">Taiwan</option>
                        <option value="tj">Tajikistan</option>
                        <option value="tz">Tanzania</option>
                        <option value="th">Thailand</option>
                        <option value="tg">Togo</option>
                        <option value="sd">Sudan</option>
                        <option value="ss">South Sudan</option>
                        <option value="tn">Tunisia</option>
                        <option value="tr">Turkey</option>
                        <option value="se">Sweden</option>
                        <option value="ug">Uganda</option>
                        <option value="ae">United Arab Emirates</option>
                        <option value="uk">United Kingdom</option>
                        <option value="us">United States</option>
                        <option value="vi">Vietnam</option>
                        <option value="uy">Uruguay</option>
                        <option value="uz">Uzbekistan</option>
                        <option value="va">Vatican City</option>
                        <option value="vn">Vietnam</option>
                        <option value="zm">Zambia</option>
                        <option value="gl">Greenland</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Purpose of Visit *</label>
                      <select
                        className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none"
                        value={selectedPurpose}
                        onChange={(e) => setSelectedPurpose(e.target.value)}
                      >
                        <option value="">Select purpose</option>
                        <option value="tourism">Tourism</option>
                        <option value="business">Business</option>
                        <option value="study">Study</option>
                        <option value="work">Work</option>
                        <option value="immigration">Immigration</option>
                        <option value="transit">Transit</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Service Required *</label>
                      <select
                        className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                      >
                        <option value="">Select service</option>
                        <option value="basic">Basic</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Number of Applicants *</label>
                      <input
                        type="number"
                        min="1"
                        className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none"
                        value={numberOfApplicants}
                        onChange={(e) => setNumberOfApplicants(Math.max(1, Number(e.target.value)))}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Urgency *</label>
                      <select
                        className="w-full h-12 px-4 border-2 border-input rounded-lg focus:border-blue-500 focus:outline-none"
                        value={urgency}
                        onChange={(e) => setUrgency(e.target.value)}>
                        <option value="standard">Standard </option>
                        <option value="priority">Priority </option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="askForPackages"
                      checked={askForPackages}
                      onChange={(e) => setAskForPackages(e.target.checked)}
                      className="h-4 w-4 border-gray-300 rounded"
                    />
                    <label htmlFor="askForPackages" className="text-sm text-gray-700">
                      I am interested in travel packages too
                    </label>
                  </div>

                  <Button
                    onClick={calculateQuote}
                    className="w-full h-12 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
                  >
                    Calculate Quote
                  </Button>
                </CardContent>
              </Card>

              {/* Display Quote */}
              {showQuote && (
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Quote</h3>
                  <div className="grid grid-cols-2 gap-4 text-gray-700">
                    <div className="font-semibold">Visa Price:</div>
                    <div className="text-right">
                      ₹{getVisaPrice().toLocaleString()}
                    </div>
                    <div className="font-semibold">Service Price:</div>
                    <div className="text-right">
                      ₹{getServicePrice().toLocaleString()}
                    </div>
                    <div className="font-semibold">Urgency Price:</div>
                    <div className="text-right">
                      ₹{getUrgencyPrice().toLocaleString()}
                    </div>
                    <div className="font-semibold">Total Price:</div>
                    <div className="text-right text-xl font-bold text-gray-900">
                      ₹{getTotalPrice().toLocaleString()}
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-4">
                      Please note that this is an estimate. The final price may vary based on additional factors.</p>
                      <p className="text-sm text-gray-500 mb-4"><b>Note:</b>Travel Package Charges are Excluded</p>
                    
                    <Button
                      as={Link}
                      href="/contact"
                      className="w-full h-12 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all"
                    >
                      Proceed to Book Appointment
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
                <p className="text-gray-600 mb-4">
                  We provide professional visa assistance with a focus on transparency and customer satisfaction.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Expert guidance from start to finish
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Transparent pricing with no hidden fees
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Fast and efficient processing
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Dedicated support team available 24/7
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Visa Information</h2>
                <p className="text-gray-600 mb-4">
                  Ensure you have all the necessary documents and information required for your visa application.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li className="flex items-start">
                    <Info className="min-w-5 min-h-5 w-5 h-5 text-blue-500 mr-2" />
                    <span>
                      <b>Passport</b>: Must be valid for at least 6 months beyond your intended stay. Should have at least 2 blank pages.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Info className="min-w-5 min-h-5 w-5 h-5 text-blue-500 mr-2" />
                    <span>
                      <b>Passport-Sized Photographs</b>: Recent (taken within 6 months). Size and background requirements vary (usually white background, 35mm x 45mm).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Info className="min-w-5 min-h-5 w-5 h-5 text-blue-500 mr-2" />
                    <span>
                      <b>Completed Visa Application Form</b>: Filled online or manually, depending on the embassy. Make sure it is signed and free of errors.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Info className="min-w-5 min-h-5 w-5 h-5 text-blue-500 mr-2" />
                    <span>
                      <b>Travel Itinerary</b>: Round-trip flight bookings or reservation. Travel dates and travel plans (cities to be visited).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Info className="min-w-5 min-h-5 w-5 h-5 text-blue-500 mr-2" />
                    <span>
                      <b>Proof of Accommodation</b>: Hotel bookings or a letter of invitation from a host (if staying with friends/family).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Info className="min-w-5 min-h-5 w-5 h-5 text-blue-500 mr-2" />
                    <span>
                      <b>Proof of Financial Means</b>: Bank statements from the last 3–6 months. Salary slips, income tax returns, or sponsorship letter if someone else is paying.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Info className="min-w-5 min-h-5 w-5 h-5 text-blue-500 mr-2" />
                    <span>
                      <b>Travel Insurance</b>: Coverage for medical emergencies and trip interruptions. Minimum coverage amount (varies by country, e.g., €30,000 for Schengen).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Info className="min-w-5 min-h-5 w-5 h-5 text-blue-500 mr-2" />
                    <span>
                      <b>Employment/Business Documents</b>:<br />
                      If employed: No Objection Certificate (NOC), leave letter from employer.<br />
                      If self-employed: Business registration certificate, company bank statements.<br />
                      If student: NOC from the educational institution.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Info className="min-w-5 min-h-5 w-5 h-5 text-blue-500 mr-2" />
                    <span>
                      <b>Visa Fee Payment</b>: Receipt or proof of payment, if paid online. Some embassies accept cash or card at the consulate.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Info className="min-w-5 min-h-5 w-5 h-5 text-blue-500 mr-2" />
                    <span>
                      <b>Cover Letter</b>: A brief letter stating the purpose of your trip, duration, and your intent to return.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Info className="min-w-5 min-h-5 w-5 h-5 text-blue-500 mr-2" />
                    <span>
                      <b>Additional Documents for Family Applications</b>: Marriage certificate (for spouse). Birth certificate (for children). Guardianship letters (if applicable).
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
