"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"

// Mackay suburbs data
const mackaySuburbs = {
  northSuburbs: [
    "Andergrove",
    "Beaconsfield",
    "Blacks Beach",
    "Bucasia",
    "Dolphin Heads",
    "Eimeo",
    "Mount Pleasant",
    "Rural View",
    "Shoal Point",
    "Slade Point",
  ],
  centralSuburbs: ["East Mackay", "Mackay", "North Mackay", "South Mackay", "West Mackay"],
  southSuburbs: ["Bakers Creek", "Ooralea", "Paget", "Racecourse", "Te Kowai"],
  westernSuburbs: ["Erakala", "Farleigh", "Foulden", "Glenella", "Richmond", "Walkerston"],
}

interface DropdownSectionProps {
  title: string
  items: string[]
  type: string
}

function DropdownSection({ title, items, type }: DropdownSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b md:border-none py-4 md:py-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-medium text-gray-700 hover:text-primary mb-4"
      >
        {title}
        {isOpen ? <ChevronUp className="h-5 w-5 md:hidden" /> : <ChevronDown className="h-5 w-5 md:hidden" />}
      </button>

      <div className={`space-y-2 ${isOpen ? "block" : "hidden md:block"}`}>
        <Link href={`/browse-all-${type}`} className="block text-blue-600 hover:underline">
          Browse all {type}
        </Link>
        {items.map((item) => (
          <Link
            key={item}
            href={`/${type}/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="block text-blue-600 hover:underline"
          >
            {item} {type === "homes" ? "real estate" : type === "rentals" ? "rentals" : type}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <DropdownSection title="Real Estate" items={mackaySuburbs.northSuburbs} type="homes" />

          <DropdownSection title="Rentals" items={mackaySuburbs.centralSuburbs} type="rentals" />

          <DropdownSection title="Mortgage Rates" items={mackaySuburbs.southSuburbs} type="mortgage" />

          <DropdownSection title="Browse Homes" items={mackaySuburbs.westernSuburbs} type="browse" />
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} PropertyFinder. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/terms" className="hover:underline">
              Terms of Use
            </Link>{" "}
            |
            <Link href="/privacy" className="hover:underline ml-2">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

