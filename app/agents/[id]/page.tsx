import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

async function getAgentDetails(id: string) {
  try {
    const res = await fetch(`/api/agents/${id}`, { next: { revalidate: 3600 } })
    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error("Failed to fetch agent details:", error)
    return null
  }
}

export default async function AgentDetailsPage({ params }: { params: { id: string } }) {
  const agent = await getAgentDetails(params.id)

  if (!agent) {
    notFound()
  }

  const { name, title, phone, mobile, imageURL, listings } = agent

  return (
    <>
      <MainNav />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="flex items-center text-primary mb-6 hover:underline">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to listings
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-48 w-48 rounded-full overflow-hidden mb-4">
                      {imageURL ? (
                        <Image
                          src={imageURL || "/placeholder.svg"}
                          alt={name}
                          fill
                          className="object-cover"
                          sizes="192px"
                        />
                      ) : (
                        <Image
                          src="/placeholder.svg?height=192&width=192"
                          alt="No image available"
                          fill
                          className="object-cover"
                          sizes="192px"
                        />
                      )}
                    </div>
                    <h1 className="text-2xl font-bold mb-1">{name}</h1>
                    <p className="text-muted-foreground mb-4">{title}</p>

                    <div className="w-full space-y-2 mb-6">
                      {phone && (
                        <Button variant="outline" className="w-full justify-start">
                          <Phone className="h-4 w-4 mr-2" />
                          {phone}
                        </Button>
                      )}
                      {mobile && phone !== mobile && (
                        <Button variant="outline" className="w-full justify-start">
                          <Phone className="h-4 w-4 mr-2" />
                          {mobile}
                        </Button>
                      )}
                    </div>

                    <Button className="w-full">Contact Agent</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Agent Listings</h2>

              {listings && listings.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {listings.map((listing) => (
                    <Link key={listing.listingID} href={`/listings/${listing.listingID}`}>
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2">{listing.heading}</h3>
                          <p className="text-primary font-medium">{listing.price}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <p>No listings available for this agent</p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

