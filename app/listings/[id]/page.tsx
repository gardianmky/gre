import { type NextRequest, NextResponse } from "next/server";

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
        url: "https://renet.photos/w/1200/10021353/images/10021353_20063454_21_1741050168.jpg",
      },
    ],
    agents: [
      {
        agentID: 648325,
        name: "Ben Kerrisk, Mick McLeod and Ryan Patton",
        title: "Principal/Licensee/Sales Agents",
        phone: "0407514983",
        mobile: "0407514983",
        imageURL: "http://cdn.renet.net.au/10021353/images/1678154026_1655072239image.jpg",
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
        url: "/placeholder.svg?height=600&width=800",
      },
    ],
    agents: [
      {
        agentID: 648326,
        name: "Sarah Johnson",
        title: "Property Manager",
        phone: "0412345678",
        mobile: "0412345678",
        imageURL: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
];

// Utility function to validate listing ID
function isValidListingID(id: string): boolean {
  return /^\d+$/.test(id); // Example: Ensure ID is numeric
}

// Utility function to find a listing by ID
function findListingById(id: string) {
  return mockListings.find((listing) => listing.listingID === id);
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  // Validate the listing ID
  if (!isValidListingID(id)) {
    return NextResponse.json({ error: "Invalid listing ID" }, { status: 400 });
  }

  // Find the listing
  const listing = findListingById(id);

  // Handle listing not found
  if (!listing) {
    return NextResponse.json({ error: "Listing not found" }, { status: 404 });
  }

  // Return the listing
  return NextResponse.json(listing);
}

