import { type NextRequest, NextResponse } from "next/server"

// Mock data - in a real app, this would come from a database
const mockAgents = [
  {
    agentID: 648325,
    name: "Ben Kerrisk, Mick McLeod and Ryan Patton",
    title: "Principal/Licensee/Sales Agents",
    phone: "0407514983",
    mobile: "0407514983",
    imageURL: "http://cdn.renet.net.au/10021353/images/1678154026_1655072239image.jpg",
    listings: [
      {
        listingID: "20063454",
        heading: "Relax, Entertain & Unwind by the Water",
        price: "By Negotiation",
      },
    ],
  },
]

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)

  const agent = mockAgents.find((agent) => agent.agentID === id)

  if (!agent) {
    return NextResponse.json({ error: "Agent not found" }, { status: 404 })
  }

  return NextResponse.json(agent)
}

