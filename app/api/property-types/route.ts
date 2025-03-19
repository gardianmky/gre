import { NextResponse } from "next/server"

export async function GET() {
  const propertyTypes = ["forSale", "forRent", "commercialLease", "commercialSale", "auction"]

  return NextResponse.json(propertyTypes)
}

