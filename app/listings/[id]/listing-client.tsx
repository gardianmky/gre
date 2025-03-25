'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface Address {
  street: string;
  suburb: string;
  state: string;
  postcode: number;
}

interface BedBathCarLand {
  key: string;
  value: string;
}

interface Image {
  url: string;
}

interface Agent {
  agentID: number;
  name: string;
  title: string;
  phone: string;
  mobile: string;
  imageURL: string;
}

interface Listing {
  listingID: string;
  type: 'forSale' | 'forRent';
  address: Address;
  heading: string;
  price: string;
  bedBathCarLand: BedBathCarLand[];
  images: Image[];
  agents: Agent[];
}

export default function ListingClient({ listing }: { listing: Listing }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Image gallery */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {listing.images.map((image: Image, index: number) => (
                <div key={index} className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src={image.url || "/placeholder.svg"}
                    alt={`Property image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
