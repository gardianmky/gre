e Error

Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

See more info here: https://nextjs.org/docs/messages/react-hydration-error

- className="light"
- style={{color-scheme:"light"}}

createUnhandledError
../src/client/components/react-dev-overlay/internal/helpers/console-error.ts (14:35)
formattedErrorMessage
../src/client/components/react-dev-overlay/internal/helpers/use-error-handler.ts (30:34)
error
../src/client/components/globals/intercept-console-error.ts (32:11)
emitPendingHydrationWarnings
node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js (4299:1)import ListingClient from './listing-client';

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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/listings/${id}`, {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });
  if (!res.ok) {
    throw new Error('Failed to fetch listing');
  }
  return res.json();
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

  const listing = await getListing(id).catch(() => null);
  
  if (!listing) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Listing Not Found</h1>
        <p>The requested listing could not be loaded.</p>
      </div>
    );
  }

  return <ListingClient listing={listing} />;
