import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SalesCTA() {
  return (
    <div className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center">
            <div className="relative w-40 h-40 mb-6">
              <Image
                src="/rent.svg?height=160&width=160&text=Buy+a+home"
                alt="Buy a home"
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Buy a home</h3>
            <p className="text-muted-foreground mb-6">
              A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprise
              expenses.
            </p>
            <Button asChild className="mt-auto">
              <Link href="/agents">Find a local agent</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center">
            <div className="relative w-40 h-40 mb-6">
              <Image
                src="/sell.png?height=160&width=160&text=Sell+a+home"
                alt="Sell a home"
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Sell a home</h3>
            <p className="text-muted-foreground mb-6">
              No matter what path you take to sell your home, we can help you navigate a successful sale.
            </p>
            <Button asChild variant="outline" className="mt-auto">
              <Link href="/sell">See your options</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center">
            <div className="relative w-40 h-40 mb-6">
              <Image
                src="/buy.png?height=160&width=160&text=Rent+a+home"
                alt="Rent a home"
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Rent a home</h3>
            <p className="text-muted-foreground mb-6">
              We're creating a seamless online experience – from shopping on the largest rental network, to applying, to
              paying rent.
            </p>
            <Button asChild variant="outline" className="mt-auto">
              <Link href="/?type=forRent">Find rentals</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
