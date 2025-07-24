"use client"

import { useEffect } from "react"

export default function LinkedInRedirect() {
  useEffect(() => {
    // Redirect to LinkedIn page
    window.location.href = "http://www.linkedin.com/in/skyvisaconsultancy"
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to LinkedIn...</h1>
        <p className="text-gray-600">
          If you're not redirected automatically,{" "}
          <a href="http://www.linkedin.com/in/skyvisaconsultancy" className="text-sky-600 hover:underline">
            click here
          </a>
        </p>
      </div>
    </div>
  )
}
