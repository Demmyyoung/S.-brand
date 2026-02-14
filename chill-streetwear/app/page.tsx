"use client";

import ProductGrid from "@/components/product-grid";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-32 md:pl-32">
      {/* Sections */}
      <ProductGrid />

      {/* Footer / Extra Space */}
      <footer className="h-40 flex items-center justify-center text-xs text-foreground/40 uppercase tracking-widest">
        &copy; 2026 SWXN.
      </footer>
    </main>
  );
}
