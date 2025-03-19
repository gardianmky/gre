"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SearchFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [query, setQuery] = useState(searchParams.get("query") || "")
  const [propertyType, setPropertyType] = useState(searchParams.get("type") || "")
  const [bedrooms, setBedrooms] = useState(searchParams.get("bedrooms") || "")
  const [propertyTypes, setPropertyTypes] = useState<string[]>([])
  const [bedroomOptions, setBedroomOptions] = useState<string[]>([])

  useEffect(() => {
    // Fetch property types
    const fetchPropertyTypes = async () => {
      try {
        const response = await fetch("/api/property-types")
        const data = await response.json()
        setPropertyTypes(data)
      } catch (error) {
        console.error("Error fetching property types:", error)
      }
    }

    // Fetch bedroom options
    const fetchBedroomOptions = async () => {
      try {
        const response = await fetch("/api/bedroom-options")
        const data = await response.json()
        setBedroomOptions(data)
      } catch (error) {
        console.error("Error fetching bedroom options:", error)
      }
    }

    fetchPropertyTypes()
    fetchBedroomOptions()
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()
    if (query) params.set("query", query)
    if (propertyType) params.set("type", propertyType)
    if (bedrooms && bedrooms !== "Any") params.set("bedrooms", bedrooms)
    params.set("page", "1") // Reset to first page on new search

    router.push(`/?${params.toString()}`)
  }

  const formatPropertyType = (type: string) => {
    switch (type) {
      case "forSale":
        return "For Sale"
      case "forRent":
        return "For Rent"
      case "commercialLease":
        return "Commercial Lease"
      case "commercialSale":
        return "Commercial Sale"
      default:
        return type.charAt(0).toUpperCase() + type.slice(1)
    }
  }

  return (
    <form onSubmit={handleSearch} className="bg-muted p-4 rounded-lg mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search by location or keyword"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Properties</SelectItem>
              {propertyTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {formatPropertyType(type)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select value={bedrooms} onValueChange={setBedrooms}>
            <SelectTrigger>
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              {bedroomOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option} Bedrooms
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </form>
  )
}

