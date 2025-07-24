"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)

  const phone = "917471137339"

  const messages = [
    "I want a tourist visa.",
    "I want a business visa.",
    "I want travel insurance.",
    "I want a complete package for my vacation.",
    "I want to know the visa requirements for [Country].",
    "I want to track my visa application status.",
    "Can you help me with visa document preparation?",
    "Do you offer urgent visa services?",
    "I want group travel and visa assistance.",
    "I’m planning a honeymoon trip — please suggest packages.",
  ]

  const openWhatsApp = (msg: string) => {
    const encodedMsg = encodeURIComponent(msg)
    window.open(`https://wa.me/${phone}?text=${encodedMsg}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {isOpen && (
        <div className="bg-white shadow-lg rounded-xl p-4 w-80 max-h-[70vh] overflow-y-auto border">
          <p className="font-medium text-gray-700 mb-2">Quick Enquiry</p>
          {messages.map((msg, idx) => (
            <button
              key={idx}
              onClick={() => openWhatsApp(msg)}
              className="w-full text-left px-4 py-2 rounded-md bg-gray-100 hover:bg-green-100 text-sm transition"
            >
              {msg}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with us"
        style={{
          backgroundColor: "#25D366",
          color: "white",
          padding: "16px",
          border: "none",
          borderRadius: "50%",
          boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  )
}
