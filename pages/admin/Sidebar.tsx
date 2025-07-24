"use client"

import Link from "next/link"
import { useState } from "react"
import {
  FiGrid,
  FiUsers,
  FiFileText,
  FiCalendar,
  FiBell,
  FiSettings,
  FiInbox,
  FiMenu,
  FiX,
  FiLogOut,
} from "react-icons/fi"
import { signOut } from "next-auth/react"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 md:hidden bg-white border-b shadow-sm flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2 font-bold text-xl text-blue-700">
          <span className="rounded-full w-8 h-8 overflow-hidden flex items-center justify-center">
            <img
              src="/images/sky-logo.png"
              alt="User"
              className="w-full h-full object-cover"
            />
          </span>
          Sky Visa
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-40 top-0 left-0 w-64 min-h-screen bg-white border-r shadow-sm transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Desktop Header */}
        <div className="hidden md:flex items-center gap-2 px-6 py-6 font-bold text-2xl text-blue-700 border-b">
          <span className="rounded-full w-8 h-8 overflow-hidden flex items-center justify-center">
            <img
              src="/images/sky-logo.png"
              alt="User"
              className="w-full h-full object-cover"
            />
          </span>
          Sky Visa
        </div>

        {/* Sidebar Links */}
        <nav className="flex-1 px-4 py-6 space-y-1 mt-14 md:mt-0">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-2 rounded-lg font-medium text-blue-700 bg-blue-50"
          >
            <FiGrid /> Dashboard
          </Link>
          <Link
            href="/admin/messages"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50"
          >
            <FiInbox /> Messages
          </Link>
          <Link
            href="/admin/consultations"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50"
          >
            <FiUsers /> Consultations
          </Link>
          <Link
            href="/admin/get-started"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50"
          >
            <FiFileText /> Applications
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50"
          >
            <FiCalendar /> Appointments
          </Link>
          <Link
            href="/admin/notifications"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50"
          >
            <FiBell /> Notifications
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50"
          >
            <FiSettings /> Settings
          </Link>
        </nav>

        {/* Sign Out Button */}
        <button
          onClick={() => signOut({ callbackUrl: "/signin" })}
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-red-50 w-full mt-4"
        >
          <FiLogOut /> Sign Out
        </button>
      </aside>

      {/* Optional overlay (for mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
