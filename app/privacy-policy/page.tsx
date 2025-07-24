import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Users, FileText, Globe, Clock, Phone } from "lucide-react"
import Head from "next/head"  
import { pageMetadata } from "@/lib/pageMetadata"


export const metadata = {
  title: pageMetadata.privacyPolicy.title,
  description: pageMetadata.privacyPolicy.description,
  keywords: pageMetadata.privacyPolicy.keywords.join(", "),
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-cyan-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6">
            <Badge className="bg-sky-100 text-sky-800 px-4 py-2">Privacy Policy</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Privacy{" "}
              <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduction */}
            <Card className="border-l-4 border-l-sky-500">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-sky-600" />
                  <span>Introduction</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Sky Visa Assistance ("we," "our," or "us") is committed to protecting your privacy and personal
                  information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you use our visa assistance services, visit our website, or interact with us in any
                  way.
                </p>
                <p>
                  By using our services, you consent to the data practices described in this policy. If you do not agree
                  with the practices described in this policy, please do not use our services.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-green-600" />
                  <span>Information We Collect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h4>Personal Information</h4>
                <p>We collect personal information that you provide directly to us, including:</p>
                <ul>
                  <li>
                    <strong>Identity Information:</strong> Full name, date of birth, nationality, passport details
                  </li>
                  <li>
                    <strong>Contact Information:</strong> Email address, phone number, mailing address
                  </li>
                  <li>
                    <strong>Travel Information:</strong> Destination countries, travel dates, purpose of travel
                  </li>
                  <li>
                    <strong>Financial Information:</strong> Bank statements, income proof, payment information
                  </li>
                  <li>
                    <strong>Supporting Documents:</strong> Photos, employment letters, invitation letters
                  </li>
                </ul>

                <h4>Automatically Collected Information</h4>
                <ul>
                  <li>
                    <strong>Usage Data:</strong> Pages visited, time spent, click patterns
                  </li>
                  <li>
                    <strong>Device Information:</strong> IP address, browser type, operating system
                  </li>
                  <li>
                    <strong>Cookies:</strong> Session cookies, preference cookies, analytics cookies
                  </li>
                </ul>

                <h4>Third-Party Information</h4>
                <p>We may receive information about you from:</p>
                <ul>
                  <li>Embassy and consulate partners</li>
                  <li>Payment processors</li>
                  <li>Background check services (where legally required)</li>
                  <li>Social media platforms (if you choose to connect)</li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-cyan-600" />
                  <span>How We Use Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>We use your information for the following purposes:</p>

                <h4>Service Provision</h4>
                <ul>
                  <li>Process visa applications and related services</li>
                  <li>Communicate with embassies and consulates on your behalf</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Schedule appointments and consultations</li>
                </ul>

                <h4>Legal and Compliance</h4>
                <ul>
                  <li>Comply with legal obligations and government requirements</li>
                  <li>Verify identity and prevent fraud</li>
                  <li>Maintain records as required by law</li>
                  <li>Respond to legal requests and court orders</li>
                </ul>

                <h4>Business Operations</h4>
                <ul>
                  <li>Improve our services and website functionality</li>
                  <li>Conduct analytics and research</li>
                  <li>Send service updates and important notifications</li>
                  <li>Process payments and manage billing</li>
                </ul>

                <h4>Marketing (with consent)</h4>
                <ul>
                  <li>Send promotional emails about our services</li>
                  <li>Provide personalized recommendations</li>
                  <li>Conduct surveys and feedback collection</li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-purple-600" />
                  <span>Information Sharing and Disclosure</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>We may share your information in the following circumstances:</p>

                <h4>Service Providers</h4>
                <ul>
                  <li>
                    <strong>Embassies and Consulates:</strong> Required for visa processing
                  </li>
                  <li>
                    <strong>Payment Processors:</strong> For secure payment processing
                  </li>
                  <li>
                    <strong>Courier Services:</strong> For document delivery
                  </li>
                  <li>
                    <strong>Technology Partners:</strong> For website and system maintenance
                  </li>
                </ul>

                <h4>Legal Requirements</h4>
                <ul>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights and property</li>
                  <li>To prevent fraud or illegal activities</li>
                  <li>In response to government requests</li>
                </ul>

                <h4>Business Transfers</h4>
                <p>
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the
                  new entity, subject to the same privacy protections.
                </p>

                <h4>With Your Consent</h4>
                <p>We may share information for other purposes with your explicit consent.</p>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Lock className="h-6 w-6 text-red-600" />
                  <span>Data Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>We implement comprehensive security measures to protect your information:</p>

                <h4>Technical Safeguards</h4>
                <ul>
                  <li>
                    <strong>Encryption:</strong> 256-bit SSL encryption for data transmission
                  </li>
                  <li>
                    <strong>Secure Storage:</strong> Encrypted databases and secure servers
                  </li>
                  <li>
                    <strong>Access Controls:</strong> Multi-factor authentication and role-based access
                  </li>
                  <li>
                    <strong>Regular Updates:</strong> Security patches and system updates
                  </li>
                </ul>

                <h4>Physical Safeguards</h4>
                <ul>
                  <li>Secure office facilities with access controls</li>
                  <li>Locked filing cabinets for physical documents</li>
                  <li>Surveillance systems and security personnel</li>
                  <li>Secure document destruction procedures</li>
                </ul>

                <h4>Administrative Safeguards</h4>
                <ul>
                  <li>Employee background checks and training</li>
                  <li>Confidentiality agreements for all staff</li>
                  <li>Regular security audits and assessments</li>
                  <li>Incident response procedures</li>
                </ul>

                <h4>Data Breach Response</h4>
                <p>
                  In the unlikely event of a data breach, we will notify affected users within 72 hours and take
                  immediate steps to secure the data and prevent further unauthorized access.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Eye className="h-6 w-6 text-orange-600" />
                  <span>Your Privacy Rights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>You have the following rights regarding your personal information:</p>

                <h4>Access and Portability</h4>
                <ul>
                  <li>Request a copy of your personal information</li>
                  <li>Receive your data in a portable format</li>
                  <li>Access your account information online</li>
                </ul>

                <h4>Correction and Updates</h4>
                <ul>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Update your contact preferences</li>
                  <li>Modify your account settings</li>
                </ul>

                <h4>Deletion and Restriction</h4>
                <ul>
                  <li>Request deletion of your personal information (subject to legal requirements)</li>
                  <li>Restrict processing of your data</li>
                  <li>Object to certain uses of your information</li>
                </ul>

                <h4>Marketing Communications</h4>
                <ul>
                  <li>Opt-out of marketing emails</li>
                  <li>Unsubscribe from promotional communications</li>
                  <li>Manage communication preferences</li>
                </ul>

                <h4>How to Exercise Your Rights</h4>
                <p>To exercise any of these rights, contact us at:</p>
                <ul>
                  <li>Email: privacy@skyvisa.in</li>
                  <li>Phone: +91 7471137339</li>
                  <li>Mail: 219 Orbit Mall, AB Rd, Scheme 54 PU4, Indore, MP - 452010</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-teal-600" />
                  <span>Data Retention</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>We retain your information for the following periods:</p>

                <h4>Active Accounts</h4>
                <ul>
                  <li>Personal information: As long as your account is active</li>
                  <li>Transaction records: 7 years for tax and legal compliance</li>
                  <li>Communication records: 3 years for customer service</li>
                </ul>

                <h4>Inactive Accounts</h4>
                <ul>
                  <li>Account data: 2 years after last activity</li>
                  <li>Marketing data: Until you opt-out or 3 years of inactivity</li>
                  <li>Legal records: As required by applicable laws</li>
                </ul>

                <h4>Visa Applications</h4>
                <ul>
                  <li>Application documents: 5 years for reference and reapplication</li>
                  <li>Embassy communications: 3 years for audit purposes</li>
                  <li>Payment records: 7 years for financial compliance</li>
                </ul>

                <h4>Secure Deletion</h4>
                <p>
                  When data is no longer needed, we securely delete it using industry-standard methods to ensure it
                  cannot be recovered or reconstructed.
                </p>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-indigo-600" />
                  <span>International Data Transfers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  As part of our visa services, your information may be transferred to and processed in countries other
                  than your country of residence, including:
                </p>

                <h4>Embassy Submissions</h4>
                <ul>
                  <li>Visa applications are submitted to relevant embassies and consulates</li>
                  <li>Each country has its own data protection laws</li>
                  <li>We ensure appropriate safeguards are in place</li>
                </ul>

                <h4>Service Providers</h4>
                <ul>
                  <li>Cloud storage providers with global infrastructure</li>
                  <li>Payment processors operating internationally</li>
                  <li>Customer support services in different time zones</li>
                </ul>

                <h4>Safeguards</h4>
                <ul>
                  <li>Standard contractual clauses for data protection</li>
                  <li>Adequacy decisions where available</li>
                  <li>Binding corporate rules for multinational partners</li>
                  <li>Regular compliance audits</li>
                </ul>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-pink-600" />
                  <span>Children's Privacy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Our services are not directed to children under 13 years of age. We do not knowingly collect personal
                  information from children under 13.
                </p>

                <h4>Minors' Visa Applications</h4>
                <ul>
                  <li>Applications for minors must be submitted by parents or legal guardians</li>
                  <li>Parental consent is required for all processing</li>
                  <li>Additional documentation may be required for minors</li>
                  <li>Special care is taken with minors' sensitive information</li>
                </ul>

                <h4>If You Are a Parent</h4>
                <p>
                  If you believe your child has provided personal information to us, please contact us immediately. We
                  will take steps to remove such information from our systems.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-l-4 border-l-sky-500">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-sky-600" />
                  <span>Contact Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>

                <h4>Privacy Officer</h4>
                <ul>
                  <li>
                    <strong>Email:</strong> privacy@skyvisa.in
                  </li>
                  <li>
                    <strong>Phone:</strong> +91 7471137339
                  </li>
                  <li>
                    <strong>Address:</strong> 219 Orbit Mall, AB Rd, Scheme 54 PU4, Indore, Madhya Pradesh - 452010
                  </li>
                </ul>

                <h4>Response Time</h4>
                <p>
                  We will respond to your privacy-related inquiries within 30 days of receipt. For urgent matters,
                  please call our privacy hotline.
                </p>

                <h4>Complaints</h4>
                <p>
                  If you believe we have not addressed your privacy concerns adequately, you have the right to file a
                  complaint with the relevant data protection authority in your jurisdiction.
                </p>
              </CardContent>
            </Card>

            {/* Updates to Policy */}
            <Card>
              <CardHeader>
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                  legal requirements, or other factors.
                </p>

                <h4>Notification of Changes</h4>
                <ul>
                  <li>Material changes will be communicated via email</li>
                  <li>Updates will be posted on our website</li>
                  <li>Continued use constitutes acceptance of changes</li>
                </ul>

                <h4>Version History</h4>
                <ul>
                  <li>Version 3.0 - January 2025 (Current)</li>
                  <li>Version 2.1 - June 2024</li>
                  <li>Version 2.0 - January 2024</li>
                  <li>Version 1.0 - January 2023</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
