import { useEffect } from "react"
import { useRouter } from "next/router"
import Sidebar from "./Sidebar"

export default function AdminIndex() {
  const router = useRouter()
  useEffect(() => {
    router.replace("/admin/dashboard")
  }, [router])
  return null
}

export function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <p>Welcome to the Sky Visa admin dashboard. Use the sidebar to navigate between categories.</p>
      </main>
    </div>
  )
}