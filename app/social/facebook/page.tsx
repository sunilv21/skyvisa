"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function FacebookRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to Facebook page
    window.location.href = "https://www.facebook.com/share/19fJu64vhQ/?mibextid=wwXIfr"
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Facebook...</h1>
        <p className="text-gray-600">
          If you're not redirected automatically,{" "}
          <a href="https://www.facebook.com/share/19fJu64vhQ/?mibextid=wwXIfr" className="text-sky-600 hover:underline">
            click here
          </a>
        </p>
      </div>
    </div>
  )
}
