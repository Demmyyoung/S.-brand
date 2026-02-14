"use client";

import Image from "next/image";

const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  name: `Essential Garment ${i + 1}`,
  price: 45 + i * 5,
  // Using placeholder images for now
  image: `https://placehold.co/600x800/F3F4F6/111827/png?text=Product+${i + 1}`,
}));

export default function ProductGrid() {
  return (
    <section className="px-6 py-20 min-h-screen bg-background relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4 shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-shadow duration-500">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-medium uppercase tracking-wide group-hover:opacity-70 transition-opacity">
                  {product.name}
                </h3>
                <span className="text-sm text-foreground/60 font-mono">
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
