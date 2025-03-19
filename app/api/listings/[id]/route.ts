import { type NextRequest, NextResponse } from "next/server"
import { mockListings } from "../mockData"

// Simple in-memory cache
const cache = new Map()
const CACHE_TTL = 300 * 1000 // 5 minutes for individual listings

// Rate limiting
const rateLimit = new Map()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 100 // Max 100 requests per minute

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
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

  const id = params.id
  const cacheKey = `listing-${id}`

  // Check cache
  if (cache.has(cacheKey)) {
    const { data, timestamp } = cache.get(cacheKey)
    if (now - timestamp < CACHE_TTL) {
      return NextResponse.json(data)
    }
    // Cache expired, remove it
    cache.delete(cacheKey)
  }

  const listing = mockListings.find((listing) => listing.listingID === id)

  if (!listing) {
    return NextResponse.json({ error: "Listing not found" }, { status: 404 })
  }

  // Store in cache
  cache.set(cacheKey, {
    data: listing,
    timestamp: now,
  })

  return NextResponse.json(listing)
}

