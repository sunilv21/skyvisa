import { Separator } from "@/components/ui/separator"
import { Plane, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EnhancedFooter() {
  return (
    <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-5 gap-8 mb-12">
              <div className="md:col-span-2 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Image src="/images/sky-logo.png" alt="Sky Logo" width={64} height={64} className="h-32 w-32 object-contain" priority />
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Your trusted partner for visa assistance worldwide. Making travel dreams come true since 2018 with
                  over 20,000 successful applications.
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="/social/facebook"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/social/twitter"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-400 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/social/instagram"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/social/linkedin"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-white">Services</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <Link href="/services/tourist-visas" className="hover:text-white transition-colors">
                      Tourist Visas
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/business-visas" className="hover:text-white transition-colors">
                      Business Visas
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/tourist-visas" className="hover:text-white transition-colors">
                      Visit Visas
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/tourist-visas" className="hover:text-white transition-colors">
                      Transit Visas
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Express Processing
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-white">Support</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <Link href="/help-center" className="hover:text-white transition-colors">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/track-application" className="hover:text-white transition-colors">
                      Track Application
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-white transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Live Chat
                    </Link>
                  </li>
                  <li>
                    <Link href="/consultation" className="hover:text-white transition-colors">
                      Free Consultation
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-white">Company</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="hover:text-white transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.mytravelexperience.in" className="hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonial" className="hover:text-white transition-colors">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="hover:text-white transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Separator className="my-8 bg-gray-800" />
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 Sky Visa Assistance. All rights reserved. | Licensed Visa Consultancy
              </p>
              <div className="text-center">
                  <div className="text-xs text-gray-500"> 
                    <p>
                      Website Developed by <span className="text-green-400 font-medium">Sunil Verma</span>
                    </p>
                    <p>
                      Contact Developer:
                      <a
                        href="mailto:radsting16@gmail.com"
                        className="text-green-400 hover:text-green-300 transition-colors ml-1"
                      >
                        radsting16@gmail.com
                      </a>
                      {" | "}
                      <a
                        href="tel:+919826878405"
                        className="text-green-400 hover:text-green-300 transition-colors"
                      >
                        +91 98268 78405
                      </a>
                    </p>
                    <p>
                      LinkedIn:
                      <a
                        href="https://www.linkedin.com/in/sunil-verma-887b27237/" // replace with your actual LinkedIn
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition-colors ml-1"
                      >
                      sunil verma
                      </a>
                    </p>
                  </div>
                </div>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                  Terms
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookies
                </Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </footer>
  )
}
