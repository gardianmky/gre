import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.datocms-assets.com/132516/1716001449-shutterstock_1056968909.jpg?fm=webp?height=500&width=1200')",
          filter: "brightness(0.8)",
        }}
      />

      {/* Content overlay */}
      <div className="relative h-full flex flex-col justify-center items-start container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight">
          Agents. Tours.
          <br />
          Loans. Homes.
        </h1>

        <div className="w-full max-w-2xl mt-8 bg-white rounded-lg overflow-hidden flex">
          <Input
            type="text"
            placeholder="Enter an address, neighborhood, city, or ZIP code"
            className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-14 text-base"
          />
          <Button size="icon" className="h-14 w-14 rounded-none bg-primary">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

