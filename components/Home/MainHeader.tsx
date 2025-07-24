"use client"

import { Plane, Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export default function MainHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-8 z-40 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative">
            <Image src="/images/sky-logo.png" alt="Sky Logo" width={64} height={64} className="h-24 w-28 object-contain" priority/>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
            
          </span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-sky-600 transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/services/tourist-visas"
            className="text-sm font-medium hover:text-sky-600 transition-colors relative group"
          >
            Destination
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium hover:text-sky-600 transition-colors relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/process"
            className="text-sm font-medium hover:text-sky-600 transition-colors relative group"
          >
            Process
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-sky-600 transition-colors relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-sky-600 transition-colors relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
          </Link>
        </nav>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-sky-700" />
        </button>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/track-application">Track Application</Link>
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700"
          >
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow px-4 py-4 space-y-2">
          <Link
            href="/services"
            className="block text-base font-medium text-sky-700 py-2"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/services/tourist-visas"
            className="block text-base font-medium text-sky-700 py-2"
            onClick={() => setMobileOpen(false)}
          >
            Destination
          </Link>
          <Link
            href="/process"
            className="block text-base font-medium text-sky-700 py-2"
            onClick={() => setMobileOpen(false)}
          >
            Process
          </Link>
          <Link
            href="/about"
            className="block text-base font-medium text-sky-700 py-2"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-base font-medium text-sky-700 py-2"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/track-application"
            className="block text-base font-medium text-sky-700 py-2"
            onClick={() => setMobileOpen(false)}
          >
            Track Application
          </Link>
          <Link
            href="/get-started"
            className="block text-base font-medium text-white bg-gradient-to-r from-sky-600 to-cyan-600 rounded px-4 py-2 text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  )
}