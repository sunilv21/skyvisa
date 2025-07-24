"use client"

import { useEffect } from "react"

export default function TwitterRedirect() {
  useEffect(() => {
    // Redirect to Twitter page
    window.location.href = "https://www.twitter.com/skyvisaofficial"
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Twitter...</h1>
        <p className="text-gray-600">
          If you're not redirected automatically,{" "}
          <a href="https://www.twitter.com/skyvisaofficial" className="text-sky-600 hover:underline">
            click here
          </a>
        </p>
      </div>
    </div>
  )
}
