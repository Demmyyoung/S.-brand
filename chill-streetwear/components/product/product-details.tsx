"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types";
import { useCart } from "@/components/cart/cart-context";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("M");

  const { name, price, description, images } = product.attributes;
  const imageUrl = images.data[0]?.attributes.url || "";

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:pl-40">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-400 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="relative aspect-[3/4] bg-gray-100 rounded-sm overflow-hidden shadow-lg">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={name}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-4 text-[#171717]">
              {name}
            </h1>
            <p className="text-2xl font-mono text-gray-500 mb-8">
              ${price.toFixed(2)}
            </p>

            <div className="prose prose-sm prose-gray max-w-none mb-10">
              <p>{description}</p>
            </div>

            {/* Size Selector */}
            <div className="mb-10">
              <span className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-3 block">
                Select Size
              </span>
              <div className="flex gap-4">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center font-bold text-sm border transition-all ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-200 text-black hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <button
              onClick={() => addItem(product, selectedSize)}
              className="w-full bg-[#171717] text-white h-16 text-lg font-bold uppercase tracking-widest hover:bg-black/90 transition-transform active:scale-[0.99]"
            >
              Add to Cart
            </button>

            <p className="mt-6 text-xs text-gray-400 text-center uppercase trackingSpacing-widest">
              Free Shipping on orders over $150
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
