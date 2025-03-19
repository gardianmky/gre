"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"

export default function PropertyNav() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentType = searchParams.get("type") || ""

  const propertyTypes = [
    { label: "For Sale", value: "forSale" },
    { label: "For Rent", value: "forRent" },
    { label: "Commercial Lease", value: "commercialLease" },
    { label: "Commercial Sale", value: "commercialSale" },
    { label: "Auction", value: "auction" },
  ]

  const handleTypeChange = (type: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (type) {
      params.set("type", type)
    } else {
      params.delete("type")
    }

    router.push(`/?${params.toString()}`)
  }

  return (
    <div className="bg-muted/50 p-2 rounded-lg mb-6 flex flex-wrap gap-2">
      {propertyTypes.map((type) => (
        <button
          key={type.value}
          onClick={() => handleTypeChange(type.value)}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-medium transition-colors",
            currentType === type.value ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted",
          )}
        >
          {type.label}
        </button>
      ))}
    </div>
  )
}

