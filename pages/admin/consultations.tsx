import Sidebar from "./Sidebar"
import { useEffect, useState } from "react"

export default function ConsultationsPage() {
  const [consultations, setConsultations] = useState([])

  useEffect(() => {
    fetch("/api/consultations")
      .then(res => res.json())
      .then(data => setConsultations(Array.isArray(data) ? data : []))
  }, [])

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Consultations</h1>
        <ul className="bg-white rounded shadow p-4">
          {consultations.length === 0 && <li className="text-gray-500">No consultations</li>}
          {consultations.map((c: any, i) => (
            <li key={c._id || i} className="border-b py-2">
              <div><b>{c.name}</b> {c.email && <span className="text-gray-400">({c.email})</span>}</div>
              <div>Type: {c.consultType} | Destination: {c.destination} | Date: {c.date} {c.time && `at ${c.time}`}</div>
              {c.notes && <div className="text-gray-500">Notes: {c.notes}</div>}
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}