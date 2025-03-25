import { Suspense } from "react"
import PropertyListings from "@/components/property-listings"
import SearchFilters from "@/components/search-filters"
import PropertyNav from "@/components/property-nav"
import MainNav from "@/components/main-nav"
import HeroSection from "@/components/hero-section"
import SalesCTA from "@/components/sales-cta"
import FeaturedAgents from "@/components/featured-agents"
import Footer from "@/components/footer"
import { Skeleton } from "@/components/ui/skeleton"
import PropertyCard from "@/components/property-card"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <>
      <MainNav />
      <HeroSection />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <PropertyNav />
          <SearchFilters />

          <Suspense fallback={<ListingsSkeleton />}>
            <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <PropertyCard 
              key={i}
              className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" className="px-8 py-4">
            View More Properties
          </Button>
        </div>
      </div>
          </Suspense>
        </div>

        <SalesCTA />
        <FeaturedAgents />
      </main>
      <Footer />
    </>
  )
}

function ListingsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <div className="p-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-4" />
              <div className="flex justify-between mb-4">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/4" />
              </div>
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        ))}
    </div>
  )
}
