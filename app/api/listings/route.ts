import { type NextRequest, NextResponse } from "next/server"

// Mock data - in a real app, this would come from a database
const mockListings = [
  {
    listingID: "20063454",
    type: "forSale",
    address: {
      street: "33 Beach Road",
      suburb: "DOLPHIN HEADS",
      state: "QLD",
      postcode: 4740,
    },
    heading: "Relax, Entertain & Unwind by the Water",
    price: "By Negotiation",
    bedBathCarLand: [
      {
        key: "bedrooms",
        value: "3",
      },
      {
        key: "bathrooms",
        value: "2",
      },
      {
        key: "carSpaces",
        value: "2",
      },
      {
        key: "landSize",
        value: "868 Square Mtr",
      },
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Beach+Road",
      },
    ],
    agents: [
      {
        agentID: 648325,
        name: "Ben Kerrisk, Mick McLeod and Ryan Patton",
        title: "Principal/Licensee/Sales Agents",
        phone: "0407514983",
        mobile: "0407514983",
        imageURL: "/placeholder.svg?height=200&width=200&text=Agent",
      },
    ],
  },
  {
    listingID: "20063455",
    type: "forRent",
    address: {
      street: "42 Ocean View",
      suburb: "MACKAY",
      state: "QLD",
      postcode: 4740,
    },
    heading: "Stunning Beachfront Property",
    price: "$450 per week",
    bedBathCarLand: [
      {
        key: "bedrooms",
        value: "4",
      },
      {
        key: "bathrooms",
        value: "2",
      },
      {
        key: "carSpaces",
        value: "1",
      },
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Ocean+View",
      },
    ],
    agents: [
      {
        agentID: 648326,
        name: "Sarah Johnson",
        title: "Property Manager",
        phone: "0412345678",
        mobile: "0412345678",
        imageURL: "/placeholder.svg?height=200&width=200&text=Sarah",
      },
    ],
  },
  {
    listingID: "20063456",
    type: "forSale",
    address: {
      street: "15 Mountain View",
      suburb: "EIMEO",
      state: "QLD",
      postcode: 4740,
    },
    heading: "Spacious Family Home with Views",
    price: "$750,000",
    bedBathCarLand: [
      {
        key: "bedrooms",
        value: "5",
      },
      {
        key: "bathrooms",
        value: "3",
      },
      {
        key: "carSpaces",
        value: "2",
      },
      {
        key: "landSize",
        value: "1200 Square Mtr",
      },
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Mountain+View",
      },
    ],
    agents: [
      {
        agentID: 648327,
        name: "Michael Smith",
        title: "Sales Agent",
        phone: "0423456789",
        mobile: "0423456789",
        imageURL: "/placeholder.svg?height=200&width=200&text=Michael",
      },
    ],
  },
  {
    listingID: "20063457",
    type: "forRent",
    address: {
      street: "8 River Road",
      suburb: "NORTH MACKAY",
      state: "QLD",
      postcode: 4740,
    },
    heading: "Modern Apartment Near CBD",
    price: "$380 per week",
    bedBathCarLand: [
      {
        key: "bedrooms",
        value: "2",
      },
      {
        key: "bathrooms",
        value: "1",
      },
      {
        key: "carSpaces",
        value: "1",
      },
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=River+Road",
      },
    ],
    agents: [
      {
        agentID: 648328,
        name: "Jessica Brown",
        title: "Leasing Consultant",
        phone: "0434567890",
        mobile: "0434567890",
        imageURL: "/placeholder.svg?height=200&width=200&text=Jessica",
      },
    ],
  },
  {
    listingID: "20063458",
    type: "commercialLease",
    address: {
      street: "120 Victoria Street",
      suburb: "MACKAY",
      state: "QLD",
      postcode: 4740,
    },
    heading: "Prime Retail Space in CBD",
    price: "$2,500 per month",
    bedBathCarLand: [
      {
        key: "floorArea",
        value: "150 Square Mtr",
      },
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Victoria+Street",
      },
    ],
    agents: [
      {
        agentID: 648331,
        name: "James Anderson",
        title: "Commercial Agent",
        phone: "0467890123",
        mobile: "0467890123",
        imageURL: "/placeholder.svg?height=200&width=200&text=James",
      },
    ],
  },
  {
    listingID: "20063459",
    type: "commercialSale",
    address: {
      street: "45 Industrial Drive",
      suburb: "PAGET",
      state: "QLD",
      postcode: 4740,
    },
    heading: "Industrial Warehouse with Office",
    price: "$1,200,000",
    bedBathCarLand: [
      {
        key: "floorArea",
        value: "800 Square Mtr",
      },
      {
        key: "landSize",
        value: "2000 Square Mtr",
      },
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Industrial+Drive",
      },
    ],
    agents: [
      {
        agentID: 648331,
        name: "James Anderson",
        title: "Commercial Agent",
        phone: "0467890123",
        mobile: "0467890123",
        imageURL: "/placeholder.svg?height=200&width=200&text=James",
      },
    ],
  },
  {
    listingID: "20063460",
    type: "auction",
    address: {
      street: "22 Beachside Avenue",
      suburb: "BLACKS BEACH",
      state: "QLD",
      postcode: 4740,
    },
    heading: "Luxury Beachfront Property - Auction",
    price: "Auction - June 15, 2025",
    bedBathCarLand: [
      {
        key: "bedrooms",
        value: "6",
      },
      {
        key: "bathrooms",
        value: "4",
      },
      {
        key: "carSpaces",
        value: "3",
      },
      {
        key: "landSize",
        value: "1500 Square Mtr",
      },
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Beachside+Avenue",
      },
    ],
    agents: [
      {
        agentID: 648325,
        name: "Ben Kerrisk, Mick McLeod and Ryan Patton",
        title: "Principal/Licensee/Sales Agents",
        phone: "0407514983",
        mobile: "0407514983",
        imageURL: "/placeholder.svg?height=200&width=200&text=Agent",
      },
    ],
  },
]

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
  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = Number.parseInt(searchParams.get("limit") || "10")
  const type = searchParams.get("type")
  const minBedrooms = searchParams.get("minBedrooms")
  const suburb = searchParams.get("suburb")

  // Create cache key based on query parameters
  const cacheKey = `listings-${page}-${limit}-${type}-${minBedrooms}-${suburb}`

  // Check cache
  if (cache.has(cacheKey)) {
    const { data, timestamp } = cache.get(cacheKey)
    if (now - timestamp < CACHE_TTL) {
      return NextResponse.json(data)
    }
    // Cache expired, remove it
    cache.delete(cacheKey)
  }

  // Apply filters
  let filteredListings = [...mockListings]

  if (type) {
    filteredListings = filteredListings.filter((listing) => listing.type === type)
  }

  if (minBedrooms) {
    filteredListings = filteredListings.filter((listing) => {
      const bedroomFeature = listing.bedBathCarLand.find((item) => item.key === "bedrooms")
      if (!bedroomFeature) return false
      return Number.parseInt(bedroomFeature.value) >= Number.parseInt(minBedrooms)
    })
  }

  if (suburb) {
    filteredListings = filteredListings.filter(
      (listing) => listing.address.suburb.toLowerCase() === suburb.toLowerCase(),
    )
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

