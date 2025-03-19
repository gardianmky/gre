import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Phone } from "lucide-react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

// Mock data for agents
const agents = [
  {
    id: 648325,
    name: "Ben Kerrisk",
    title: "Principal/Licensee",
    image: "/placeholder.svg?height=200&width=200&text=Ben",
    phone: "0407514983",
    location: "Mackay Central",
    specialties: ["Residential", "Commercial", "Waterfront"],
    experience: "15+ years",
    listings: 12,
  },
  {
    id: 648326,
    name: "Sarah Johnson",
    title: "Property Manager",
    image: "/placeholder.svg?height=200&width=200&text=Sarah",
    phone: "0412345678",
    location: "North Mackay",
    specialties: ["Rentals", "Apartments", "Units"],
    experience: "8 years",
    listings: 8,
  },
  {
    id: 648327,
    name: "Michael Smith",
    title: "Sales Agent",
    image: "/placeholder.svg?height=200&width=200&text=Michael",
    phone: "0423456789",
    location: "South Mackay",
    specialties: ["Luxury Homes", "Acreage", "New Developments"],
    experience: "12 years",
    listings: 15,
  },
  {
    id: 648328,
    name: "Jessica Brown",
    title: "Leasing Consultant",
    image: "/placeholder.svg?height=200&width=200&text=Jessica",
    phone: "0434567890",
    location: "Mackay Harbour",
    specialties: ["Commercial Leasing", "Retail", "Office Space"],
    experience: "6 years",
    listings: 10,
  },
  {
    id: 648329,
    name: "David Wilson",
    title: "Sales Agent",
    image: "/placeholder.svg?height=200&width=200&text=David",
    phone: "0445678901",
    location: "Rural View",
    specialties: ["Rural Properties", "Residential", "Land"],
    experience: "10 years",
    listings: 9,
  },
  {
    id: 648330,
    name: "Emma Taylor",
    title: "Property Manager",
    image: "/placeholder.svg?height=200&width=200&text=Emma",
    phone: "0456789012",
    location: "Andergrove",
    specialties: ["Rentals", "Property Management", "Tenant Relations"],
    experience: "7 years",
    listings: 14,
  },
  {
    id: 648331,
    name: "James Anderson",
    title: "Commercial Agent",
    image: "/placeholder.svg?height=200&width=200&text=James",
    phone: "0467890123",
    location: "Paget",
    specialties: ["Commercial Sales", "Industrial", "Investments"],
    experience: "14 years",
    listings: 6,
  },
  {
    id: 648332,
    name: "Olivia Martin",
    title: "Buyer's Agent",
    image: "/placeholder.svg?height=200&width=200&text=Olivia",
    phone: "0478901234",
    location: "Mount Pleasant",
    specialties: ["First Home Buyers", "Investors", "Downsizers"],
    experience: "9 years",
    listings: 0,
  },
]

export default function AgentsPage() {
  return (
    <>
      <MainNav />
      <main className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Our Real Estate Agents</h1>
            <p className="text-muted-foreground">
              Meet our team of experienced real estate professionals dedicated to helping you with all your property
              needs in the Mackay region.
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search agents by name, specialty, or location"
                className="pl-10 py-6 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {agents.map((agent) => (
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

                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{agent.location}</span>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Phone className="h-4 w-4 mr-1" />
                    <span>{agent.phone}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {agent.specialties.map((specialty) => (
                      <span key={specialty} className="text-xs bg-muted px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between text-sm mb-4">
                    <span>{agent.experience} experience</span>
                    <span>{agent.listings} active listings</span>
                  </div>

                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/agents/${agent.id}`}>View Profile</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

