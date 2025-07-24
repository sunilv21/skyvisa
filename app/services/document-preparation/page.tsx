"use client";

import { useState } from "react";
import {
  BookOpen,
  Calendar,
  DollarSign,
  ClipboardList,
  FileText,
  Home,
  IdCard,
  Image,
  ShieldCheck,
  Users,
  UserPlus,
  Briefcase,
  Paperclip,
} from "lucide-react";

export default function DocumentPreparation() {
  const [showOptional, setShowOptional] = useState(false);

  return (
    <main className="min-h-screen py-16 px-4 bg-gradient-to-br from-sky-50 to-white">
      <div className="max-w-3xl mx-auto bg-white/90 rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-sky-700 flex items-center gap-2">
          <FileText className="w-8 h-8 text-sky-600" />
          Document Preparation
        </h1>
        <p className="mb-6 text-gray-700">
          Our team provides expert review and preparation of all required documents for your visa application. We ensure accuracy and completeness, so you can apply with confidence.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600 flex items-center gap-2">
            <ClipboardList className="w-7 h-7" />
            General Requirements for a Tourist Visa Application
          </h2>
          <ol className="space-y-6 text-gray-800">
            <li>
              <div className="flex items-center gap-2 font-medium">
                <IdCard className="w-6 h-6 text-sky-500" /> 1. Passport
              </div>
              <ul className="list-disc pl-7 text-gray-600 text-sm">
                <li>Must be valid for at least 6 months beyond your intended stay.</li>
                <li>Should have at least 2 blank pages.</li>
              </ul>
            </li>
            <li>
              <div className="flex items-center gap-2 font-medium">
                <Image className="w-6 h-6 text-sky-500" /> 2. Passport-Sized Photographs
              </div>
              <ul className="list-disc pl-7 text-gray-600 text-sm">
                <li>Recent (taken within 6 months).</li>
                <li>Size and background requirements vary (usually white background, 35mm x 45mm).</li>
              </ul>
            </li>
            <li>
              <div className="flex items-center gap-2 font-medium">
                <FileText className="w-6 h-6 text-sky-500" /> 3. Completed Visa Application Form
              </div>
              <ul className="list-disc pl-7 text-gray-600 text-sm">
                <li>Filled online or manually, depending on the embassy.</li>
                <li>Make sure it is signed and free of errors.</li>
              </ul>
            </li>
            <li>
              <div className="flex items-center gap-2 font-medium">
                <Calendar className="w-6 h-6 text-sky-500" /> 4. Travel Itinerary
              </div>
              <ul className="list-disc pl-7 text-gray-600 text-sm">
                <li>Round-trip flight bookings or reservation.</li>
                <li>Travel dates and travel plans (cities to be visited).</li>
              </ul>
            </li>
            <li>
              <div className="flex items-center gap-2 font-medium">
                <Home className="w-6 h-6 text-sky-500" /> 5. Proof of Accommodation
              </div>
              <ul className="list-disc pl-7 text-gray-600 text-sm">
                <li>Hotel bookings or a letter of invitation from a host (if staying with friends/family).</li>
              </ul>
            </li>
            <li>
              <div className="flex items-center gap-2 font-medium">
                <DollarSign className="w-6 h-6 text-sky-500" /> 6. Proof of Financial Means
              </div>
              <ul className="list-disc pl-7 text-gray-600 text-sm">
                <li>Bank statements from the last 3–6 months.</li>
                <li>Salary slips, income tax returns, or sponsorship letter if someone else is paying.</li>
              </ul>
            </li>
            <li>
              <div className="flex items-center gap-2 font-medium">
                <ShieldCheck className="w-6 h-6 text-sky-500" /> 7. Travel Insurance
              </div>
              <ul className="list-disc pl-7 text-gray-600 text-sm">
                <li>Coverage for medical emergencies and trip interruptions.</li>
                <li>Minimum coverage amount (varies by country, e.g., €30,000 for Schengen).</li>
              </ul>
            </li>
            <li>
              <div className="flex items-center gap-2 font-medium">
                <Briefcase className="w-6 h-6 text-sky-500" /> 8. Employment/Business Documents
              </div>
              <ul className="list-disc pl-7 text-gray-600 text-sm">
                <li>If employed: No Objection Certificate (NOC), leave letter from employer.</li>
                <li>If self-employed: Business registration certificate, company bank statements.</li>
                <li>If student: NOC from the educational institution.</li>
              </ul>
            </li>
            <li>
              <div className="flex items-center gap-2 font-medium">
                <Paperclip className="w-6 h-6 text-sky-500" /> 9. Visa Fee Payment
              </div>
              <ul className="list-disc pl-7 text-gray-600 text-sm">
                <li>Receipt or proof of payment, if paid online.</li>
                <li>Some embassies accept cash or card at the consulate.</li>
              </ul>
            </li>
            <li>
              <div className="flex items-center gap-2 font-medium">
                <BookOpen className="w-6 h-6 text-sky-500" /> 10. Cover Letter
              </div>
              <ul className="list-disc pl-7 text-gray-600 text-sm">
                <li>A brief letter stating the purpose of your trip, duration, and your intent to return.</li>
              </ul>
            </li>
            <li>
              <div className="flex items-center gap-2 font-medium">
                <Users className="w-6 h-6 text-sky-500" /> 11. Additional Documents for Family Applications
              </div>
              <ul className="list-disc pl-7 text-gray-600 text-sm">
                <li>Marriage certificate (for spouse).</li>
                <li>Birth certificate (for children).</li>
                <li>Guardianship letters (if applicable).</li>
              </ul>
            </li>
          </ol>
        </div>

        <button
          className="text-sky-600 underline mb-4"
          onClick={() => setShowOptional((v) => !v)}
        >
          {showOptional ? "Hide" : "Show"} Optional / Destination-Specific Documents
        </button>

        {showOptional && (
          <div className="mb-8 bg-sky-50 rounded-lg p-4 border border-sky-100">
            <h3 className="text-lg font-semibold mb-2 text-sky-700 flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-sky-600" />
              Optional / Dependent on Destination
            </h3>
            <ul className="list-disc pl-7 text-gray-600 space-y-1 text-sm">
              <li>Invitation letter from a resident in the destination country.</li>
              <li>Proof of ties to home country (property documents, family ties, job letters).</li>
              <li>Previous visa copies (especially for USA, UK, Schengen, etc.).</li>
            </ul>
          </div>
        )}

        <div className="mt-10 flex flex-col items-center">
          <a
            href="/consultation"
            className="inline-block bg-sky-600 text-white px-8 py-3 rounded-lg shadow hover:bg-sky-700 transition font-semibold text-lg"
          >
            Book a Consultation
          </a>
          <p className="text-gray-500 text-sm mt-2">
            Need help? Our experts can guide you through every step.
          </p>
        </div>
      </div>
    </main>
  );
}