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
            <PropertyListings />
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

