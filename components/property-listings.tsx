"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import PropertyCard from "@/components/property-card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface Listing {
  listingID: string
  type: string
  address: {
    street: string
    suburb: string
    state: string
    postcode: number
  }
  heading: string
  price: string
  bedBathCarLand: Array<{
    key: string
    value: string
  }>
  images: Array<{
    url: string
  }>
  agents: Array<{
    agentID: number
    name: string
    title: string
    phone: string
    mobile: string
    imageURL: string
  }>
}

interface ListingsResponse {
  data: Listing[]
  page: number
  limit: number
  total: number
  totalPages: number
}

export default function PropertyListings() {
  const searchParams = useSearchParams()
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalResults: 0,
    resultsPerPage: 10,
  })

  const page = searchParams.get("page") || "1"
  const type = searchParams.get("type") || ""
  const query = searchParams.get("query") || ""
  const bedrooms = searchParams.get("bedrooms") || ""

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true)
      try {
        let url = "/api/listings"

        // If there's a search query, use the search endpoint
        if (query) {
          url = "/api/listings/search"
        }

        // Build query parameters
        const params = new URLSearchParams()
        params.set("page", page)
        params.set("limit", "9") // Show 9 listings per page for better grid layout

        if (type) params.set("type", type)
        if (query) params.set("query", query)
        if (bedrooms && bedrooms !== "Any") {
          params.set("bedrooms", bedrooms.replace("+", ""))
        }

        const response = await fetch(`${url}?${params.toString()}`)
        const data: ListingsResponse = await response.json()

        setListings(data.data)
        setPagination({
          currentPage: data.page,
          totalPages: data.totalPages,
          totalResults: data.total,
          resultsPerPage: data.limit,
        })
      } catch (error) {
        console.error("Error fetching listings:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchListings()
  }, [page, type, query, bedrooms])

  if (loading) {
    return <p>Loading listings...</p>
  }

  if (listings.length === 0) {
    return <p>No listings found matching your criteria.</p>
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {listings.map((listing) => (
          <PropertyCard key={listing.listingID} listing={listing} />
        ))}
      </div>

      {pagination.totalPages > 1 && (
        <div className="mt-8">
          <p className="text-sm text-muted-foreground mb-2">
            Showing {listings.length} of {pagination.totalResults} listings
          </p>
          <Pagination>
            <PaginationContent>
              {pagination.currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    href={`?page=${pagination.currentPage - 1}${type ? `&type=${type}` : ""}${query ? `&query=${query}` : ""}${bedrooms ? `&bedrooms=${bedrooms}` : ""}`}
                  />
                </PaginationItem>
              )}

              {Array.from({ length: pagination.totalPages }).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href={`?page=${i + 1}${type ? `&type=${type}` : ""}${query ? `&query=${query}` : ""}${bedrooms ? `&bedrooms=${bedrooms}` : ""}`}
                    isActive={pagination.currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {pagination.currentPage < pagination.totalPages && (
                <PaginationItem>
                  <PaginationNext
                    href={`?page=${pagination.currentPage + 1}${type ? `&type=${type}` : ""}${query ? `&query=${query}` : ""}${bedrooms ? `&bedrooms=${bedrooms}` : ""}`}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  )
}

