import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function TopContactBanner() {
  return (
    <div className="bg-gradient-to-r from-sky-600 to-cyan-600 text-white py-2 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 7471 137339</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 8827 222177</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@skyvisa.in</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            <span className="text-xs">Follow us:</span>
            <div className="flex space-x-2">
              <Link href="/social/facebook" className="hover:text-sky-200 transition-colors">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="/social/twitter" className="hover:text-sky-200 transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.instagram.com/skytoursofficial/profilecard/?igsh=MXdwNXo3dTQ3MDc5ag=="
                className="hover:text-sky-200 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="/social/linkedin" className="hover:text-sky-200 transition-colors">
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}