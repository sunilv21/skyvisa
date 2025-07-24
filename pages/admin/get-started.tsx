import Sidebar from "./Sidebar"
import { useEffect, useState } from "react"

export default function GetStartedAppsPage() {
  const [getStartedApps, setGetStartedApps] = useState([])

  useEffect(() => {
    fetch("/api/get-started")
      .then(res => res.json())
      .then(data => setGetStartedApps(Array.isArray(data) ? data : []))
  }, [])

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Get Started Applications</h1>
        <ul className="bg-white rounded shadow p-4 space-y-4">
          {getStartedApps.length === 0 && <li className="text-gray-500">No applications</li>}
          {getStartedApps.map((app: any, i) => (
            <li key={app._id || i} className="border-b py-2">
              <div><b>{app.fullName}</b> ({app.email})</div>
              <div>From: {app.country} → {app.destination}</div>
              <div>Purpose: {app.purpose} | Date: {app.travelDate} | Duration: {app.duration}</div>
              <div>Phone: {app.phone}</div>
              
              {/* 🧍‍♂️ Passenger count */}
              <div className="mt-1 text-sm text-gray-700">
                <span>Adults: {app.adults || 0}</span>
                {" | "}
                <span>Minors: {app.minors || 0}</span>
                {" | "}
                <span>Infants: {app.infants || 0}</span>
              </div>

              {app.additional && (
                <div className="text-gray-500 mt-1">Additional: {app.additional}</div>
              )}
              <div className="text-xs text-gray-400 mt-1">
                Submitted: {app.createdAt && new Date(app.createdAt).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
