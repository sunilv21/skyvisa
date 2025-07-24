import { FiEye, FiEdit2, FiCheck, FiDownload, FiMail, FiCalendar } from "react-icons/fi"

const demoData = [
  {
    id: "VF-2025-A12345678",
    name: "John Smith",
    email: "john.smith@email.com",
    type: "Tourist Visa",
    status: "Application Received",
    submitted: "7/9/2025",
    initials: "JS",
    statusColor: "bg-blue-100 text-blue-700",
    typeColor: "bg-blue-50 text-blue-700",
    actions: [<FiEye />, <FiEdit2 />, <FiCheck />],
  },
  {
    id: "VF-2025-B98765432",
    name: "Maria Garcia",
    email: "maria.garcia@email.com",
    type: "Business Visa",
    status: "Visa Form Filled",
    submitted: "7/9/2025",
    initials: "MG",
    statusColor: "bg-purple-100 text-purple-700",
    typeColor: "bg-purple-50 text-purple-700",
    actions: [<FiEye />, <FiEdit2 />, <FiCheck />],
  },
  {
    id: "VF-2025-C11223344",
    name: "Li Wei",
    email: "li.wei@email.com",
    type: "Student Visa",
    status: "Documents Received",
    submitted: "7/9/2025",
    initials: "LW",
    statusColor: "bg-yellow-100 text-yellow-700",
    typeColor: "bg-green-50 text-green-700",
    actions: [<FiEye />, <FiEdit2 />, <FiCheck />, <FiCalendar />],
  },
  {
    id: "VF-2025-D55667788",
    name: "Raj Patel",
    email: "raj.patel@email.com",
    type: "Work Visa",
    status: "Appointment Scheduled",
    submitted: "7/9/2025",
    initials: "RP",
    statusColor: "bg-pink-100 text-pink-700",
    typeColor: "bg-yellow-50 text-yellow-700",
    actions: [<FiEye />, <FiEdit2 />, <FiCheck />],
  },
  {
    id: "VF-2025-E99887766",
    name: "Emma Johnson",
    email: "emma.johnson@email.com",
    type: "Transit Visa",
    status: "Visa Processed - Success",
    submitted: "7/9/2025",
    initials: "EJ",
    statusColor: "bg-green-100 text-green-700",
    typeColor: "bg-gray-50 text-gray-700",
    actions: [<FiEye />, <FiDownload />, <FiMail />],
  },
]

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Applications</h1>
            <div className="text-gray-500">Manage all visa applications</div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700">
            + New Application
          </button>
        </div>
        <div className="flex gap-2 mb-4">
          <select className="border rounded px-3 py-2 text-sm">
            <option>All Statuses</option>
          </select>
          <button className="border rounded px-3 py-2 text-sm flex items-center gap-1">
            <span>More Filters</span>
          </button>
          <input
            className="border rounded px-3 py-2 text-sm ml-auto"
            placeholder="Search applications..."
            style={{ minWidth: 200 }}
          />
        </div>
        <div className="bg-white rounded-xl shadow p-6">
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
              {demoData.map((app, i) => (
                <tr key={app.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-mono text-xs">{app.id}</td>
                  <td className="py-3 px-4 flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 font-bold text-gray-700">
                      {app.initials}
                    </span>
                    <div>
                      <div className="font-semibold">{app.name}</div>
                      <div className="text-xs text-gray-500">{app.email}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${app.typeColor}`}>
                      {app.type}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${app.statusColor}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{app.submitted}</td>
                  <td className="py-3 px-4 flex gap-2">
                    {app.actions.map((Icon, idx) => (
                      <button key={idx} className="hover:text-blue-600">{Icon}</button>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 text-xs text-gray-500">
            Showing {demoData.length} applications
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch your data here
  return {
    props: {}, // pass props to your component
  }
}