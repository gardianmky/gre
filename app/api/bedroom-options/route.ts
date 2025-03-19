import { NextResponse } from "next/server"

export async function GET() {
  const bedroomOptions = ["Any", "1+", "2+", "3+", "4+", "5+"]

  return NextResponse.json(bedroomOptions)
}

