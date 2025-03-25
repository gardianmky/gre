// Mock data for listings
export const mockListings = [
  {
    listingID: "20063454",
    type: "forSale",
    address: {
      street: "33 Beach Road",
      suburb: "DOLPHIN HEADS",
      state: "QLD",
      postcode: 4740,
    },
    heading: "Relax, Entertain & Unwind by the Water",
    price: "By Negotiation",
    description: `This stunning beachfront property offers the perfect blend of luxury and relaxation. The spacious open-plan living area flows seamlessly to the outdoor entertaining space and pool, creating an ideal environment for hosting guests or enjoying family time.

The modern kitchen features high-end appliances and stone benchtops, while the three generous bedrooms all include built-in wardrobes. The master suite boasts a walk-in robe and ensuite with dual vanity.

Located just steps from the beach, this home captures breathtaking ocean views and sea breezes. The private backyard includes a sparkling pool and landscaped gardens, perfect for Queensland's outdoor lifestyle.`,
    features: {
      indoor: ["Air conditioning", "Built-in wardrobes", "Walk-in robe", "Ensuite", "Dishwasher"],
      outdoor: ["Swimming pool", "Outdoor entertaining area", "Landscaped gardens", "Water views"],
      amenities: ["Beach access", "Close to shops", "Near schools", "Public transport"]
    },
    location: { lat: -21.1234, lng: 149.5678 },
    virtualTour: "https://example.com/tour/20063454",
    socialMeta: {
      title: "Beachfront Property - 33 Beach Road",
      description: "Stunning beachfront home with pool and ocean views",
      image: "/placeholder.svg?height=600&width=800&text=Beach+Road"
    },
    bedBathCarLand: [
      {
        key: "bedrooms",
        value: "3",
      },
      {
        key: "bathrooms",
        value: "2",
      },
      {
        key: "carSpaces",
        value: "2",
      },
      {
        key: "landSize",
        value: "868 Square Mtr",
      },
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Beach+Road+1",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Beach+Road+2",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Beach+Road+3",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Beach+Road+4",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Beach+Road+5",
      },
    ],
    openForInspection: [
      {
        date: "2025-04-15",
        time: "10:00 AM - 11:00 AM"
      },
      {
        date: "2025-04-17", 
        time: "2:00 PM - 3:00 PM"
      }
    ],
    agents: [
      {
        agentID: 648325,
        name: "Ben Kerrisk, Mick McLeod and Ryan Patton",
        title: "Principal/Licensee/Sales Agents",
        phone: "0407514983",
        mobile: "0407514983",
        imageURL: "/placeholder.svg?height=200&width=200&text=Agent",
      },
    ],
  },
  {
    listingID: "20063455",
    type: "forRent",
    address: {
      street: "42 Ocean View",
      suburb: "MACKAY",
      state: "QLD",
      postcode: 4740,
    },
    heading: "Stunning Beachfront Property",
    price: "$450 per week",
    description: `This beautifully maintained beachfront home offers spacious living with 4 bedrooms and 2 bathrooms. The open-plan design features a modern kitchen with stainless steel appliances, flowing through to a large living area that opens to the covered patio.

Enjoy spectacular ocean views from multiple rooms, including the master bedroom with ensuite. The property includes a single car garage and additional off-street parking. Located in a quiet cul-de-sac just minutes from Mackay's CBD and local amenities.`,
    features: {
      indoor: ["Air conditioning", "Ceiling fans", "Dishwasher", "Built-in robes"],
      outdoor: ["Covered patio", "Low maintenance yard", "Ocean views"],
      amenities: ["Walk to beach", "Close to shops", "Public transport"]
    },
    location: { lat: -21.1434, lng: 149.1878 },
    virtualTour: "https://example.com/tour/20063455",
    socialMeta: {
      title: "Beachfront Rental - 42 Ocean View",
      description: "Spacious 4 bedroom home with ocean views",
      image: "/placeholder.svg?height=600&width=800&text=Ocean+View"
    },
    bedBathCarLand: [
      {
        key: "bedrooms",
        value: "4",
      },
      {
        key: "bathrooms",
        value: "2",
      },
      {
        key: "carSpaces",
        value: "1",
      },
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Ocean+View+1",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Ocean+View+2",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Ocean+View+3",
      },
    ],
    openForInspection: [
      {
        date: "2025-04-16",
        time: "12:00 PM - 1:00 PM"
      }
    ],
    agents: [
      {
        agentID: 648326,
        name: "Sarah Johnson",
        title: "Property Manager",
        phone: "0412345678",
        mobile: "0412345678",
        imageURL: "/placeholder.svg?height=200&width=200&text=Sarah",
      },
    ],
  },
  {
    listingID: "20063456",
    type: "forSale",
    address: {
      street: "15 Mountain View",
      suburb: "EIMEO",
      state: "QLD",
      postcode: 4740,
    },
    heading: "Spacious Family Home with Views",
    price: "$750,000",
    description: `This expansive family home sits on 1200sqm of land with panoramic mountain views. The property features 5 generous bedrooms, including a master suite with walk-in robe and ensuite, plus 3 modern bathrooms.

The gourmet kitchen with stone benchtops opens to a large living/dining area with bi-fold doors to the outdoor entertaining space. Additional features include a media room, study nook, and double garage with workshop space.

The landscaped gardens include a fire pit area, vegetable garden, and plenty of space for kids and pets to play. Located in a quiet neighborhood with excellent schools nearby.`,
    features: {
      indoor: ["Air conditioning", "Media room", "Study nook", "Walk-in robe"],
      outdoor: ["Landscaped gardens", "Entertaining deck", "Fire pit", "Vegetable garden"],
      amenities: ["Close to schools", "Quiet street", "Community park"]
    },
    location: { lat: -21.1534, lng: 149.1778 },
    virtualTour: "https://example.com/tour/20063456",
    socialMeta: {
      title: "Family Home - 15 Mountain View",
      description: "5 bedroom home with mountain views on 1200sqm",
      image: "/placeholder.svg?height=600&width=800&text=Mountain+View"
    },
    bedBathCarLand: [
      {
        key: "bedrooms",
        value: "5",
      },
      {
        key: "bathrooms",
        value: "3",
      },
      {
        key: "carSpaces",
        value: "2",
      },
      {
        key: "landSize",
        value: "1200 Square Mtr",
      },
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Mountain+View+1",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Mountain+View+2",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Mountain+View+3",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Mountain+View+4",
      },
    ],
    openForInspection: [
      {
        date: "2025-04-14",
        time: "9:00 AM - 10:00 AM"
      },
      {
        date: "2025-04-16",
        time: "4:00 PM - 5:00 PM"
      }
    ],
    agents: [
      {
        agentID: 648327,
        name: "Michael Smith",
        title: "Sales Agent",
        phone: "0423456789",
        mobile: "0423456789",
        imageURL: "/placeholder.svg?height=200&width=200&text=Michael",
      },
    ],
  },
  {
    listingID: "20063457",
    type: "forRent",
    address: {
      street: "8 River Road",
      suburb: "NORTH MACKAY",
      state: "QLD",
      postcode: 4740,
    },
    heading: "Modern Apartment Near CBD",
    price: "$380 per week",
    description: `This stylish 2 bedroom apartment offers modern living just minutes from Mackay's CBD. The open-plan layout features a contemporary kitchen with stainless steel appliances, flowing through to a bright living area with balcony access.

Both bedrooms include built-in wardrobes, while the modern bathroom features a walk-in shower. The complex offers secure parking, a shared pool, and BBQ area. Perfect for professionals or couples seeking low-maintenance living close to all amenities.`,
    features: {
      indoor: ["Air conditioning", "Built-in robes", "Dishwasher", "Balcony"],
      outdoor: ["Shared pool", "BBQ area", "Secure complex"],
      amenities: ["Walk to CBD", "Near restaurants", "Public transport"]
    },
    location: { lat: -21.1334, lng: 149.1678 },
    virtualTour: "https://example.com/tour/20063457",
    socialMeta: {
      title: "Modern Apartment - 8 River Road",
      description: "2 bedroom apartment near Mackay CBD",
      image: "/placeholder.svg?height=600&width=800&text=River+Road"
    },
    bedBathCarLand: [
      {
        key: "bedrooms",
        value: "2",
      },
      {
        key: "bathrooms",
        value: "1",
      },
      {
        key: "carSpaces",
        value: "1",
      },
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=River+Road+1",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=River+Road+2",
      },
    ],
    openForInspection: [
      {
        date: "2025-04-15",
        time: "3:00 PM - 4:00 PM"
      }
    ],
    agents: [
      {
        agentID: 648328,
        name: "Jessica Brown",
        title: "Leasing Consultant",
        phone: "0434567890",
        mobile: "0434567890",
        imageURL: "/placeholder.svg?height=200&width=200&text=Jessica",
      },
    ],
  },
  {
    listingID: "20063458",
    type: "commercialLease",
    address: {
      street: "120 Victoria Street",
      suburb: "MACKAY",
      state: "QLD",
      postcode: 4740,
    },
    heading: "Prime Retail Space in CBD",
    price: "$2,500 per month",
    description: `This premium retail space in Mackay's CBD offers excellent exposure and foot traffic. The 150sqm space features:
- High ceilings with exposed beams
- Modern shopfront with glass facade
- Rear storage/office area
- Air conditioning throughout
- Shared restroom facilities

Ideal for boutique retail, professional services, or food/beverage businesses. Available on flexible lease terms.`,
    features: {
      indoor: ["Air conditioning", "High ceilings", "Office space", "Storage"],
      outdoor: ["Shopfront signage", "Street exposure"],
      amenities: ["CBD location", "High foot traffic", "Near parking"]
    },
    location: { lat: -21.1434, lng: 149.1578 },
    virtualTour: "https://example.com/tour/20063458",
    socialMeta: {
      title: "Retail Space - 120 Victoria Street",
      description: "150sqm prime retail space in Mackay CBD",
      image: "/placeholder.svg?height=600&width=800&text=Victoria+Street"
    },
    bedBathCarLand: [
      {
        key: "floorArea",
        value: "150 Square Mtr",
      },
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Victoria+Street+1",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Victoria+Street+2",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Victoria+Street+3",
      },
    ],
    agents: [
      {
        agentID: 648331,
        name: "James Anderson",
        title: "Commercial Agent",
        phone: "0467890123",
        mobile: "0467890123",
        imageURL: "/placeholder.svg?height=200&width=200&text=James",
      },
    ],
  },
  {
    listingID: "20063459",
    type: "commercialSale",
    address: {
      street: "45 Industrial Drive",
      suburb: "PAGET",
      state: "QLD",
      postcode: 4740,
    },
    heading: "Industrial Warehouse with Office",
    price: "$1,200,000",
    description: `This well-maintained industrial property features an 800sqm warehouse with 2000sqm of land. The facility includes:
- 6m clear height warehouse space
- 100sqm air-conditioned office
- 2 roller doors (5m x 5m)
- 3-phase power
- Staff amenities
- Secure yard with fencing

Located in Paget's industrial precinct with excellent transport links. Suitable for manufacturing, storage, or distribution businesses.`,
    features: {
      indoor: ["Office space", "High ceilings", "3-phase power", "Amenities"],
      outdoor: ["Secure yard", "Roller doors", "Parking"],
      amenities: ["Industrial zone", "Transport links", "Loading access"]
    },
    location: { lat: -21.1534, lng: 149.1478 },
    virtualTour: "https://example.com/tour/20063459",
    socialMeta: {
      title: "Industrial Property - 45 Industrial Drive",
      description: "800sqm warehouse on 2000sqm in Paget",
      image: "/placeholder.svg?height=600&width=800&text=Industrial+Drive"
    },
    bedBathCarLand: [
      {
        key: "floorArea",
        value: "800 Square Mtr",
      },
      {
        key: "landSize",
        value: "2000 Square Mtr",
      },
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Industrial+Drive+1",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Industrial+Drive+2",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Industrial+Drive+3",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Industrial+Drive+4",
      },
    ],
    agents: [
      {
        agentID: 648331,
        name: "James Anderson",
        title: "Commercial Agent",
        phone: "0467890123",
        mobile: "0467890123",
        imageURL: "/placeholder.svg?height=200&width=200&text=James",
      },
    ],
  },
  {
    listingID: "20063460",
    type: "auction",
    address: {
      street: "22 Beachside Avenue",
      suburb: "BLACKS BEACH",
      state: "QLD",
      postcode: 4740,
    },
    heading: "Luxury Beachfront Property - Auction",
    price: "Auction - June 15, 2025",
    description: `This exceptional beachfront estate represents the pinnacle of luxury living. The architect-designed residence spans three levels with 6 bedrooms, 4 bathrooms, and multiple living areas, all enjoying panoramic ocean views.

Premium features include:
- Gourmet kitchen with butler's pantry
- Home theater and wine cellar
- Elevator servicing all floors
- Infinity pool with glass balustrade
- Private beach access and jetty

The property sits on 1500sqm of prime beachfront land with meticulously landscaped gardens. This is a rare opportunity to acquire one of Mackay's most prestigious properties.`,
    features: {
      indoor: ["Home theater", "Wine cellar", "Elevator", "Butler's pantry"],
      outdoor: ["Infinity pool", "Private beach", "Jetty", "Landscaped gardens"],
      amenities: ["Waterfront", "Prestige location", "Boat access"]
    },
    location: { lat: -21.1634, lng: 149.1378 },
    virtualTour: "https://example.com/tour/20063460",
    socialMeta: {
      title: "Luxury Estate Auction - 22 Beachside Avenue",
      description: "6 bedroom beachfront mansion with pool and private jetty",
      image: "/placeholder.svg?height=600&width=800&text=Beachside+Avenue"
    },
    bedBathCarLand: [
      {
        key: "bedrooms",
        value: "6",
      },
      {
        key: "bathrooms",
        value: "4",
      },
      {
        key: "carSpaces",
        value: "3",
      },
      {
        key: "landSize",
        value: "1500 Square Mtr",
      },
    ],
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Beachside+Avenue+1",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Beachside+Avenue+2",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Beachside+Avenue+3",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Beachside+Avenue+4",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Beachside+Avenue+5",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Beachside+Avenue+6",
      },
    ],
    openForInspection: [
      {
        date: "2025-04-13",
        time: "11:00 AM - 12:00 PM"
      },
      {
        date: "2025-04-14",
        time: "2:00 PM - 3:00 PM"
      },
      {
        date: "2025-04-15",
        time: "10:00 AM - 11:00 AM"
      }
    ],
    agents: [
      {
        agentID: 648325,
        name: "Ben Kerrisk, Mick McLeod and Ryan Patton",
        title: "Principal/Licensee/Sales Agents",
        phone: "0407514983",
        mobile: "0407514983",
        imageURL: "/placeholder.svg?height=200&width=200&text=Agent",
      },
    ],
  },
]
