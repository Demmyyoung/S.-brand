"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* 
        Top Header: Seamless/Transparent
        Contains: Hamburger (Mobile), Logo (Center), Utilities (Right)
      */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 pointer-events-none">
        {/* Mobile Menu Icon (Left) - Visible on Mobile Only */}
        <button className="md:hidden text-black pointer-events-auto">
          <Menu className="w-5 h-5" />
        </button>

        {/* Brand Logo - Centered */}
        <div className="absolute left-1/2 top-10 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <Link href="/" className="block relative w-32 h-12">
            <Image
              src="/images/logo.jpg"
              alt="Chill Brand"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right Zone: Utility Icons */}
        <div className="ml-auto flex items-center gap-6 pointer-events-auto">
          <button className="text-black hover:text-black/60 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-black hover:text-black/60 transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full">
              2
            </span>
          </button>
          <button className="hidden md:block text-black hover:text-black/60 transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* 
        Left Sidebar: Navigation Links
        Fixed to the left side of the screen. 
        Hidden on mobile, visible on desktop.
      */}
      <nav className="hidden md:flex fixed top-0 left-0 h-full flex-col justify-center gap-12 pl-8 z-40">
        <Link
          href="/about"
          className="text-sm font-medium text-black hover:text-black/60 transition-colors uppercase tracking-widest writing-vertical-lr -rotate-180 md:rotate-0 md:writing-horizontal-tb"
        >
          About
        </Link>
        <Link
          href="/shop/bottoms"
          className="text-sm font-medium text-black hover:text-black/60 transition-colors uppercase tracking-widest"
        >
          Bottoms
        </Link>
        <Link
          href="/shop/tees"
          className="text-sm font-medium text-black hover:text-black/60 transition-colors uppercase tracking-widest"
        >
          Tees
        </Link>
      </nav>
    </>
  );
}
