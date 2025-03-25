"use client";

import Link from "next/link";
import { Home, Menu } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-primary"
          onClick={toggleMobileMenu}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center">

          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/?type=forSale" className="text-base font-medium text-gray-700 hover:text-primary">
            Buy
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-base font-medium text-gray-700 hover:text-primary focus:outline-none">
              Rent
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem>
                <Link href="/?type=forRent&propertyType=apartment" className="w-full">
                  Apartments
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/?type=forRent&propertyType=house" className="w-full">
                  Houses
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/?type=forRent&propertyType=townhouse" className="w-full">
                  Townhouses
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/?type=forRent&propertyType=unit" className="w-full">
                  Units
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/sell" className="text-base font-medium text-gray-700 hover:text-primary">
            Sell
          </Link>
          <Link href="/loans" className="text-base font-medium text-gray-700 hover:text-primary">
            Home Loans
          </Link>
          <Link href="/agents" className="text-base font-medium text-gray-700 hover:text-primary">
            Find an Agent
          </Link>
        </nav>

        {/* Desktop Right Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/manage" className="text-base font-medium text-gray-700 hover:text-primary">
            Manage Rentals
          </Link>
          <Link href="/advertise" className="text-base font-medium text-gray-700 hover:text-primary">
            Advertise
          </Link>
          <Link href="/help" className="text-base font-medium text-gray-700 hover:text-primary">
            Help
          </Link>
        </nav>

        {/* Mobile Menu (Overlay) */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggleMobileMenu}></div>
        )}

        {/* Mobile Menu Content */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 border-b">
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
              
              </div>
            </Link>
          </div>

          <nav className="flex flex-col p-4 space-y-4">
            <Link href="/?type=forSale" className="text-base font-medium text-gray-700 hover:text-primary">
              Buy
            </Link>
            <Link href="/?type=forRent" className="text-base font-medium text-gray-700 hover:text-primary">
              Rent
            </Link>
            <Link href="/sell" className="text-base font-medium text-gray-700 hover:text-primary">
              Sell
            </Link>
            <Link href="/loans" className="text-base font-medium text-gray-700 hover:text-primary">
              Home Loans
            </Link>
            <Link href="/agents" className="text-base font-medium text-gray-700 hover:text-primary">
              Find an Agent
            </Link>
            <Link href="/manage" className="text-base font-medium text-gray-700 hover:text-primary">
              Manage Rentals
            </Link>
            <Link href="/advertise" className="text-base font-medium text-gray-700 hover:text-primary">
              Advertise
            </Link>
            <Link href="/help" className="text-base font-medium text-gray-700 hover:text-primary">
              Help
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
