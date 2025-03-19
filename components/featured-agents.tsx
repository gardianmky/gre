import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Mock data for featured agents
const featuredAgents = [
  {
    id: 648325,
    name: "Ben Kerrisk",
    title: "Principal/Licensee",
    image: "/placeholder.svg?height=200&width=200&text=Ben",
    specialties: ["Residential", "Commercial", "Waterfront"],
    listings: 12,
  },
  {
    id: 648326,
    name: "Sarah Johnson",
    title: "Property Manager",
    image: "/placeholder.svg?height=200&width=200&text=Sarah",
    specialties: ["Rentals", "Apartments", "Units"],
    listings: 8,
  },
  {
    id: 648327,
    name: "Michael Smith",
    title: "Sales Agent",
    image: "/placeholder.svg?height=200&width=200&text=Michael",
    specialties: ["Luxury Homes", "Acreage", "New Developments"],
    listings: 15,
  },
  {
    id: 648328,
    name: "Jessica Brown",
    title: "Leasing Consultant",
    image: "/placeholder.svg?height=200&width=200&text=Jessica",
    specialties: ["Commercial Leasing", "Retail", "Office Space"],
    listings: 10,
  },
]

export default function FeaturedAgents() {
  return (
    <section className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Meet Our Top Agents</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our experienced agents are ready to help you find your dream property or sell your current one. With deep
            local knowledge and proven results, they're your partners in real estate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAgents.map((agent) => (
            <Card key={agent.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-64 w-full">
                <Image
                  src={agent.image || "/placeholder.svg"}
                  alt={agent.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{agent.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{agent.title}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {agent.specialties.map((specialty) => (
                    <span key={specialty} className="text-xs bg-muted px-2 py-1 rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>

                <p className="text-sm mb-4">{agent.listings} active listings</p>

                <Button asChild variant="outline" className="w-full">
                  <Link href={`/agents/${agent.id}`}>View Profile</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link href="/agents">View All Agents</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

