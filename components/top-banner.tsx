"use client"

import { X } from "lucide-react"
import { useState } from "react"

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-[#0D6E6E] text-white py-2 px-4 text-center relative">
      <div className="container mx-auto">
        <p className="text-sm font-medium">
          Mackay Born and Bred - <span className="whitespace-nowrap">📞 (07) 4957 7424</span>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

