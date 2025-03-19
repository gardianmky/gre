import { type NextRequest, NextResponse } from "next/server"

// Import the mock listings from the main route
// In a real app, this would come from a database
import { mockListings } from "../mockData"

// Simple in-memory cache
const cache = new Map()
const CACHE_TTL = 60 * 1000 // 1 minute

// Rate limiting
const rateLimit = new Map()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 100 // Max 100 requests per minute

export async function GET(request: NextRequest) {
  // Rate limiting implementation
  const ip = request.headers.get("x-forwarded-for") || "unknown"
  const now = Date.now()
  const windowStart = now - RATE_LIMIT_WINDOW

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, [])
  }

  const requestTimestamps = rateLimit.get(ip)
  // Filter out old requests
  const recentRequests = requestTimestamps.filter((timestamp) => timestamp > windowStart)
  rateLimit.set(ip, [...recentRequests, now])

  if (recentRequests.length >= MAX_REQUESTS) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 })
  }

  // Parse query parameters
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query") || ""
  const type = searchParams.get("type")
  const minPrice = searchParams.get("minPrice")
  const maxPrice = searchParams.get("maxPrice")
  const bedrooms = searchParams.get("bedrooms")
  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = Number.parseInt(searchParams.get("limit") || "10")

  // Create cache key based on query parameters
  const cacheKey = `search-${query}-${type}-${minPrice}-${maxPrice}-${bedrooms}-${page}-${limit}`

  // Check cache
  if (cache.has(cacheKey)) {
    const { data, timestamp } = cache.get(cacheKey)
    if (now - timestamp < CACHE_TTL) {
      return NextResponse.json(data)
    }
    // Cache expired, remove it
    cache.delete(cacheKey)
  }

  // Apply search and filters
  let filteredListings = [...mockListings]

  if (query) {
    const searchTerms = query.toLowerCase()
    filteredListings = filteredListings.filter(
      (listing) =>
        listing.heading.toLowerCase().includes(searchTerms) ||
        listing.address.suburb.toLowerCase().includes(searchTerms) ||
        listing.address.state.toLowerCase().includes(searchTerms) ||
        listing.address.street.toLowerCase().includes(searchTerms),
    )
  }

  if (type) {
    filteredListings = filteredListings.filter((listing) => listing.type === type)
  }

  if (bedrooms) {
    filteredListings = filteredListings.filter((listing) => {
      const bedroomFeature = listing.bedBathCarLand.find((item) => item.key === "bedrooms")
      if (!bedroomFeature) return false
      return Number.parseInt(bedroomFeature.value) >= Number.parseInt(bedrooms)
    })
  }

  // Calculate pagination
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedListings = filteredListings.slice(startIndex, endIndex)

  // Prepare response
  const response = {
    data: paginatedListings,
    page,
    limit,
    total: filteredListings.length,
    totalPages: Math.ceil(filteredListings.length / limit),
    query: query || undefined,
  }

  // Store in cache
  cache.set(cacheKey, {
    data: response,
    timestamp: now,
  })

  // Set pagination headers
  const headers = new Headers()
  headers.set("X-Total-Count", filteredListings.length.toString())
  headers.set("X-Total-Pages", Math.ceil(filteredListings.length / limit).toString())

  return NextResponse.json(response, { headers })
}

