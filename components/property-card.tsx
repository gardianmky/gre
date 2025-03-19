import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Bed, Bath, Car, MapPin } from "lucide-react"

interface PropertyCardProps {
  listing: {
    listingID: string
    type: string
    address: {
      street: string
      suburb: string
      state: string
      postcode: number
    }
    heading: string
    price: string
    bedBathCarLand: Array<{
      key: string
      value: string
    }>
    images: Array<{
      url: string
    }>
    agents: Array<{
      agentID: number
      name: string
      title: string
      phone: string
      mobile: string
      imageURL: string
    }>
  }
}

export default function PropertyCard({ listing }: PropertyCardProps) {
  const { listingID, type, address, heading, price, bedBathCarLand, images } = listing

  const getPropertyFeature = (key: string) => {
    const feature = bedBathCarLand.find((item) => item.key === key)
    return feature ? feature.value : null
  }

  const bedrooms = getPropertyFeature("bedrooms")
  const bathrooms = getPropertyFeature("bathrooms")
  const carSpaces = getPropertyFeature("carSpaces")

  return (
    <Link href={`/listings/${listingID}`}>
      <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative h-48 w-full">
          {images && images.length > 0 ? (
            <Image
              src={images[0].url || "/placeholder.svg"}
              alt={heading}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="No image available"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          <Badge variant="secondary" className="absolute top-2 left-2 capitalize">
            {type === "forSale" ? "For Sale" : type === "forRent" ? "For Rent" : type}
          </Badge>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-lg line-clamp-1">{heading}</h3>
          <p className="text-primary font-medium mt-1">{price}</p>
          <div className="flex items-center text-muted-foreground text-sm mt-2">
            <MapPin className="h-3 w-3 mr-1" />
            <span className="line-clamp-1">
              {address.suburb}, {address.state} {address.postcode}
            </span>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex justify-between border-t mt-2">
          {bedrooms && (
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{bedrooms}</span>
            </div>
          )}

          {bathrooms && (
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{bathrooms}</span>
            </div>
          )}

          {carSpaces && (
            <div className="flex items-center">
              <Car className="h-4 w-4 mr-1" />
              <span>{carSpaces}</span>
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  )
}

