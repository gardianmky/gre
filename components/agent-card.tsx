import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface AgentCardProps {
  agent: {
    agentID: number
    name: string
    title: string
    phone: string
    mobile: string
    imageURL: string
  }
}

export default function AgentCard({ agent }: AgentCardProps) {
  const { agentID, name, title, phone, mobile, imageURL } = agent

  return (
    <Card>
      <CardContent className="p-4">
        <Link href={`/agents/${agentID}`} className="flex items-center gap-4">
          <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
            {imageURL ? (
              <Image src={imageURL || "/placeholder.svg"} alt={name} fill className="object-cover" sizes="64px" />
            ) : (
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="No image available"
                fill
                className="object-cover"
                sizes="64px"
              />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="font-medium line-clamp-1">{name}</h4>
            <p className="text-sm text-muted-foreground line-clamp-1">{title}</p>
          </div>
        </Link>

        <div className="mt-4 space-y-2">
          {phone && (
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Phone className="h-3 w-3 mr-2" />
              {phone}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

