'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
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
  type: 'forSale' | 'forRent' | 'commercialSale' | 'commercialLease' | 'auction';
  address: Address;
  heading: string;
  price: string;
  description?: string;
  features?: string[];
  bedBathCarLand: BedBathCarLand[];
  images: Image[];
  agents: Agent[];
  openForInspection?: {
    date: string;
    time: string;
  }[];
}

export default function ListingClient({ listing }: { listing: Listing }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/${listing.type === 'forRent' ? 'rent' : 'buy'}`}>
              {listing.type === 'forRent' ? 'Rent' : 'Buy'}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/search?suburb=${listing.address.suburb}`}>
              {listing.address.suburb}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{listing.heading}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Price and heading */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{listing.heading}</h1>
            <p className="text-2xl font-semibold text-primary">{listing.price}</p>
          </div>

          {/* Image gallery with parallax */}
          <div className="mb-8">
            <div className="relative w-full h-[70vh] rounded-lg overflow-hidden mb-4 group">
              <div className="parallax-container h-full w-full">
                <Image
                  src={listing.images[0]?.url || "/placeholder.svg"}
                  alt="Main property image"
                  fill
                  className="object-cover parallax-image group-hover:scale-105 transition-transform duration-500"
                  priority
                  style={{ transform: 'translateZ(0)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h2 className="text-3xl font-bold drop-shadow-lg">{listing.heading}</h2>
                    <p className="text-xl font-medium drop-shadow-lg">{listing.price}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {listing.images.slice(1, 6).map((image: Image, index: number) => (
                <div key={index} className="relative h-48 w-full rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={image.url || "/placeholder.svg"}
                    alt={`Property image ${index + 2}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Property details */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Property Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {listing.bedBathCarLand.map((item, index) => {
                const iconMap = {
                  bedrooms: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
                      <path d="M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3"></path>
                      <path d="M12 12v3"></path>
                    </svg>
                  ),
                  bathrooms: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12h16"></path>
                      <path d="M12 12v8"></path>
                      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                      <path d="M4 6h16"></path>
                    </svg>
                  ),
                  parking: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="7" width="18" height="14" rx="2"></rect>
                      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="12" y1="12" x2="12" y2="12"></line>
                    </svg>
                  ),
                  land: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  )
                };

                return (
                  <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary/50 transition-colors duration-300">
                    <div className="w-10 h-10 flex items-center justify-center text-primary mb-2">
                      {iconMap[item.key.toLowerCase() as keyof typeof iconMap] || (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-gray-500 mb-1 capitalize">{item.key}</span>
                    <span className="text-2xl font-bold text-primary">{item.value}</span>
                  </div>
                );
              })}
            </div>
            
            {listing.description && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Property Description</h3>
                <div className="prose max-w-none text-gray-700">
                  {listing.description.split('\n').map((paragraph, i) => (
                    <p key={i} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {listing.features && listing.features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Property Features</h3>
                <div className="space-y-6">
                  {/* Group features by category */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-primary">Interior</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {listing.features
                        .filter(f => f.toLowerCase().includes('kitchen') || 
                                   f.toLowerCase().includes('bathroom') ||
                                   f.toLowerCase().includes('floor') ||
                                   f.toLowerCase().includes('built-in'))
                        .map((feature, index) => (
                          <li key={`interior-${index}`} className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mt-0.5 flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-primary">Exterior</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {listing.features
                        .filter(f => f.toLowerCase().includes('garden') || 
                                   f.toLowerCase().includes('pool') ||
                                   f.toLowerCase().includes('deck') ||
                                   f.toLowerCase().includes('garage'))
                        .map((feature, index) => (
                          <li key={`exterior-${index}`} className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mt-0.5 flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-primary">Other Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {listing.features
                        .filter(f => !f.toLowerCase().includes('kitchen') && 
                                   !f.toLowerCase().includes('bathroom') &&
                                   !f.toLowerCase().includes('floor') &&
                                   !f.toLowerCase().includes('built-in') &&
                                   !f.toLowerCase().includes('garden') && 
                                   !f.toLowerCase().includes('pool') &&
                                   !f.toLowerCase().includes('deck') &&
                                   !f.toLowerCase().includes('garage'))
                        .map((feature, index) => (
                          <li key={`other-${index}`} className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mt-0.5 flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Address and Inspection Times */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Location</h2>
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <p>
                    {listing.address.street}, {listing.address.suburb}, {listing.address.state} {listing.address.postcode}
                  </p>
                </div>
                <div className="h-64 bg-gray-200 rounded-lg">
                  {/* Map placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Property Map
                  </div>
                </div>
              </div>
              
              {listing.openForInspection && listing.openForInspection.length > 0 && (
                <div className="w-64 bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Open for Inspection</h3>
                  <ul className="space-y-2">
                    {listing.openForInspection.map((time, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-sm font-medium">
                          {time.date} at {time.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Enhanced Agent Profile */}
          {listing.agents.map((agent) => (
            <div key={agent.agentID} className="bg-white p-6 rounded-lg shadow mb-6 border border-gray-200">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-primary/10">
                  <Image
                    src={agent.imageURL || "/placeholder-user.jpg"}
                    alt={agent.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{agent.name}</h3>
                  <p className="text-primary font-medium">{agent.title}</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-sm text-gray-500">(24 reviews)</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-500">Mobile</p>
                    <p className="font-medium">{agent.mobile}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{agent.name.toLowerCase().replace(/\s+/g, '.')}@example.com</p>
                  </div>
                </div>
                
                <div className="flex justify-center gap-4 py-2">
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>

                <div className="space-y-2">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Agent
                  </Button>
                  <Button variant="outline" className="w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Chat Now
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Enhanced Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-6 text-center">Request More Information</h3>
            <form className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                <Input 
                  id="name" 
                  placeholder="John Smith" 
                  required 
                  className="focus-visible:ring-primary"
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  className="focus-visible:ring-primary"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="phone" className="text-sm font-medium">Phone *</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="0412 345 678" 
                  required 
                  className="focus-visible:ring-primary"
                  pattern="[0-9\s]{8,14}"
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="message" className="text-sm font-medium">Your Message *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your interest in this property..."
                  required
                  className="focus-visible:ring-primary min-h-[120px]"
                  defaultValue={
                    `I'm interested in ${listing.heading} (ID: ${listing.listingID}). Please contact me with more information.`
                  }
                />
              </div>
              
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="consent" 
                  required 
                  className="mt-1 accent-primary"
                />
                <Label htmlFor="consent" className="text-xs text-gray-500">
                  I agree to receive property information and marketing communications from this agent. I can unsubscribe at any time.
                </Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Send Inquiry
              </Button>
              
              <div className="text-center text-xs text-gray-500">
                Your information is secure and will never be shared with third parties.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
