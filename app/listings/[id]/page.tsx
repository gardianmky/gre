import ListingClient from './listing-client';
import { mockListings } from '@/app/api/listings/mockData';

interface Listing {
  listingID: string;
  type: 'forSale' | 'forRent';
  address: {
    street: string;
    suburb: string;
    state: string;
    postcode: number;
  };
  heading: string;
  price: string;
  bedBathCarLand: Array<{
    key: string;
    value: string;
  }>;
  images: Array<{
    url: string;
  }>;
  agents: Array<{
    agentID: number;
    name: string;
    title: string;
    phone: string;
    mobile: string;
    imageURL: string;
  }>;
}

async function getListing(id: string): Promise<Listing> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/listings/${id}`, {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    if (!res.ok) {
      throw new Error('Failed to fetch listing');
    }
    return res.json();
  } catch (error) {
    console.warn('Using mock data due to API error:', error);
    // Find matching mock listing or use first one
    const mockListing = mockListings.find(listing => listing.listingID === id) || mockListings[0];
    return mockListing as Listing;
  }
}

// Utility function to validate listing ID
function isValidListingID(id: string): boolean {
  return /^\d+$/.test(id);
}

export default async function ListingPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Validate the listing ID
  if (!isValidListingID(id)) {
    return <div>Invalid listing ID</div>;
  }

  const listing = await getListing(id).catch((error: Error) => {
    console.error('Error fetching listing:', error.message);
    return null;
  });
  
  if (!listing) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Listing Not Found</h1>
        <p>The requested listing could not be loaded.</p>
      </div>
    );
  }

  return <ListingClient listing={listing} />;
}
