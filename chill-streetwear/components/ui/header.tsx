"use client";

import { ShoppingBag, Menu, Search } from "lucide-react";

export default function Header() {
  return (
    <>
      {/* 
        Trigger Zone: 
        An invisible strip on the left edge. 
        When hovered, it triggers the header to slide in via the "peer-hover" modifier.
        w-16 (4rem / 64px) provides a comfortable hit area.
      */}
      <div className="fixed top-0 left-0 h-full w-16 z-50 peer bg-transparent" />

      <header className="fixed top-0 left-0 h-full w-24 z-40 flex flex-col items-center justify-between py-8 border-r border-white/10 bg-background/50 backdrop-blur-sm transition-transform duration-500 ease-out transform -translate-x-full peer-hover:translate-x-0 hover:translate-x-0">
        {/* Top: Spacer for Logo landing zone (approx 80px) */}
        <div className="h-20 w-full" />

        {/* Center: Nav (Vertical) */}
        <nav className="flex flex-col items-center gap-12 text-xs font-medium tracking-widest [writing-mode:vertical-rl] rotate-180 text-foreground/80">
          <a
            href="#"
            className="hover:text-foreground transition-all hover:scale-110"
          >
            ARCHIVE
          </a>
          <a
            href="#"
            className="hover:text-foreground transition-all hover:scale-110"
          >
            LATEST DROP
          </a>
          <a
            href="#"
            className="hover:text-foreground transition-all hover:scale-110"
          >
            SHOP ALL
          </a>
        </nav>

        {/* Bottom: Actions */}
        <div className="flex flex-col items-center gap-8 mb-4">
          <button className="text-foreground/80 hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-foreground/80 hover:text-foreground transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse" />
          </button>
          <button className="md:hidden text-foreground block">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>
    </>
  );
}
