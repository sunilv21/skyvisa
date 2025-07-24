import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileText, Scale, Shield, CreditCard, AlertTriangle, Phone, Globe, Users,
} from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-muted">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-sky-50 to-cyan-50">
        <div className="container mx-auto px-4 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900">
            Terms of{" "}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please read these terms carefully before using our visa assistance services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {termsContent.map((section, idx) => (
              <Card
                key={idx}
                className={`rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col ${
                  section.highlight ? "border-l-4 border-l-sky-500" : ""
                }`}
              >
                <CardHeader className="flex items-center gap-3 pb-2">
                  {section.icon && (
                    <div
                      className={`p-2 rounded-lg bg-${section.iconColor}/10 text-${section.iconColor}`}
                    >
                      <section.icon className="h-5 w-5" />
                    </div>
                  )}
                  <CardTitle className="text-base font-semibold text-gray-900">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700 grow space-y-3">
                  {Array.isArray(section.content) ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {section.content.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{section.content}</p>
                  )}
                </CardContent>

              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

const termsContent = [
  {
    title: "Agreement to Terms",
    icon: FileText,
    iconColor: "sky-600",
    highlight: true,
    content: (
      <>
        <div>
          These Terms of Service ("Terms") constitute a legally binding agreement between you and Sky Visa Assistance.
        </div>
        <div>
          By accessing or using our services, you agree to be bound by these Terms. If you do not agree, you may not use our services.
        </div>
        <div>These Terms apply to all users including customers, browsers, and contributors.</div>
      </>
    ),
  },
  {
    title: "Description of Services",
    icon: Globe,
    iconColor: "green-600",
    content: (
      <>
        <p>Sky Visa Assistance provides the following services:</p>
        <h4>Visa Processing Services</h4>
        <ul>
          <li>Tourist, business, student, work, and transit visa applications</li>
          <li>Document review and preparation</li>
          <li>Embassy appointment scheduling</li>
          <li>Application submission and tracking</li>
        </ul>
        <h4>Consultation & Additional Services</h4>
        <ul>
          <li>Visa requirement assessment, interview prep</li>
          <li>Travel insurance, photo, translation, courier support</li>
        </ul>
        <p>
          <strong>Note:</strong> We are not a government agency and cannot guarantee visa approval.
        </p>
      </>
    ),
  },
  {
    title: "User Obligations and Responsibilities",
    icon: Users,
    iconColor: "cyan-600",
    content: (
      <>
        <h4>Accurate Information & Documents</h4>
        <ul>
          <li>Provide truthful info</li>
          <li>Submit high-quality, valid documents</li>
        </ul>
        <h4>Communication & Compliance</h4>
        <ul>
          <li>Respond timely, attend appointments</li>
          <li>Follow legal & embassy rules</li>
        </ul>
      </>
    ),
  },
  {
    title: "Payment Terms and Conditions",
    icon: CreditCard,
    iconColor: "purple-600",
    content: (
      <>
        <h4>Service Fees & Schedule</h4>
        <ul>
          <li>Fees vary by visa type & urgency</li>
          <li>Express services are extra</li>
        </ul>
        <h4>Refunds & Late Fees</h4>
        <p>Embassy fees are non-refundable. Late payments may incur 1.5% monthly interest.</p>
      </>
    ),
  },
  {
    title: "Refund and Cancellation Policy",
    icon: Shield,
    iconColor: "red-600",
    content: (
      <>
        <h4>Service Fee Refunds</h4>
        <ul>
          <li>Full: Our error</li>
          <li>Partial: Before document submission</li>
          <li>None: After embassy submission</li>
        </ul>
        <p>All refunds subject to a non-refundable processing fee.</p>
      </>
    ),
  },
  {
    title: "Liability and Disclaimers",
    icon: AlertTriangle,
    iconColor: "orange-600",
    content: (
      <>
        <ul>
          <li>We provide assistance only</li>
          <li>No guarantee of visa approval</li>
          <li>We are not responsible for embassy decisions</li>
        </ul>
      </>
    ),
  },
  {
    title: "Intellectual Property Rights",
    icon: Scale,
    iconColor: "indigo-600",
    content: (
      <>
        <ul>
          <li>All website content is proprietary</li>
          <li>You may not copy or reproduce our content</li>
        </ul>
      </>
    ),
  },
  {
    title: "Privacy and Data Protection",
    content: (
      <>
        <p>We protect your data as per our Privacy Policy.</p>
        <ul>
          <li>Used only for service delivery</li>
          <li>Deleted when no longer needed</li>
        </ul>
      </>
    ),
  },
  {
    title: "Termination of Services",
    content: (
      <>
        <h4>By You or Us</h4>
        <p>Services may be terminated for violations or non-payment. Refunds per our policy.</p>
      </>
    ),
  },
  {
    title: "Governing Law and Dispute Resolution",
    content: (
      <>
        <ul>
          <li>Indian laws apply</li>
          <li>Jurisdiction: Indore, Madhya Pradesh</li>
          <li>Disputes resolved via negotiation, mediation, or arbitration</li>
        </ul>
      </>
    ),
  },
  {
    title: "Contact Information",
    icon: Phone,
    iconColor: "sky-600",
    highlight: true,
    content: (
      <>
        <ul>
          <li><strong>Email:</strong> legal@skyvisa.in</li>
          <li><strong>Phone:</strong> +91 7471137339</li>
          <li><strong>Address:</strong> 219 Orbit Mall, Indore</li>
        </ul>
      </>
    ),
  },
  {
    title: "Updates to Terms",
    content: (
      <>
        <p>We may revise these Terms at any time. Continued use indicates acceptance.</p>
        <ul>
          <li>Version 3.0 - January 2025 (Current)</li>
        </ul>
      </>
    ),
  },
]
