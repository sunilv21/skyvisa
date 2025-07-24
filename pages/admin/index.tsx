"use client"

import { getSession } from "next-auth/react"
import { useEffect, useState } from "react"
import Sidebar from "./Sidebar"

function badgeColor(type: string) {
  switch (type) {
    case "Tourist Visa": return "bg-blue-100 text-blue-700"
    case "Business Visa": return "bg-purple-100 text-purple-700"
    case "Student Visa": return "bg-green-100 text-green-700"
    case "Work Visa": return "bg-yellow-100 text-yellow-700"
    case "Transit Visa": return "bg-gray-100 text-gray-700"
    default: return "bg-gray-100 text-gray-700"
  }
}

function statusColor(status: string) {
  switch (status) {
    case "Application Received": return "bg-blue-50 text-blue-700"
    case "Visa Form Filled": return "bg-purple-50 text-purple-700"
    case "Documents Received": return "bg-yellow-50 text-yellow-700"
    case "Appointment Scheduled": return "bg-pink-50 text-pink-700"
    case "Visa Processed - Success": return "bg-green-50 text-green-700"
    default: return "bg-gray-50 text-gray-700"
  }
}

function initials(name: string) {
  return name?.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) || ""
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    }
  }
  return { props: {} }
}

export default function AdminPanel() {
  const [getStartedApps, setGetStartedApps] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/get-started")
      .then(res => res.json())
      .then(data => setGetStartedApps(Array.isArray(data) ? data : []))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <main className="flex-1 p-8 pt-16 md:pt-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Applications</h1>
            <div className="text-gray-500">Manage all visa applications</div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700">
            Add New Application
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left font-semibold">APPLICATION ID</th>
                  <th className="py-3 px-4 text-left font-semibold">CLIENT</th>
                  <th className="py-3 px-4 text-left font-semibold">TYPE</th>
                  <th className="py-3 px-4 text-left font-semibold">STATUS</th>
                  <th className="py-3 px-4 text-left font-semibold">SUBMITTED</th>
                  <th className="py-3 px-4 text-left font-semibold">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {getStartedApps.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-gray-400">
                      No applications
                    </td>
                  </tr>
                )}
                {getStartedApps.map((app, i) => (
                  <tr key={app._id || i} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-xs">
                      {app.applicationId || `VF-2025-${(app._id || i).toString().slice(-8).toUpperCase()}`}
                    </td>
                    <td className="py-3 px-4 flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 font-bold text-gray-700">
                        {initials(app.fullName)}
                      </span>
                      <div>
                        <div className="font-semibold">{app.fullName}</div>
                        <div className="text-xs text-gray-500">{app.email}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${badgeColor(app.purpose)}`}>
                        {app.purpose}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor(app.status || "Application Received")}`}>
                        {app.status || "Application Received"}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      {app.createdAt ? new Date(app.createdAt).toLocaleDateString() : ""}
                    </td>
                    <td className="py-3 px-4 flex flex-wrap gap-2">
                      <button title="View" className="hover:text-blue-600"><span role="img" aria-label="view">👁️</span></button>
                      <button title="Edit" className="hover:text-green-600"><span role="img" aria-label="edit">✏️</span></button>
                      <button title="Approve" className="hover:text-purple-600"><span role="img" aria-label="approve">✔️</span></button>
                      <button title="Download" className="hover:text-gray-600"><span role="img" aria-label="download">⬇️</span></button>
                      <button title="Email" className="hover:text-yellow-600"><span role="img" aria-label="email">✉️</span></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 text-xs text-gray-500">
            Showing {getStartedApps.length} applications
          </div>
        </div>
      </main>
    </div>
  )
}
