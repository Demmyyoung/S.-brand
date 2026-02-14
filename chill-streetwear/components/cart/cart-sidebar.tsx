"use client";

import { useCart } from "./cart-context";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link"; // Import Link for navigation

export default function CartSidebar() {
  const { items, isOpen, toggleCart, removeItem, subtotal } = useCart();

  // Prevent scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm transition-opacity"
        onClick={toggleCart}
      />

      {/* Sidebar Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold uppercase tracking-wider flex items-center gap-2">
            Cart{" "}
            <span className="text-sm font-normal text-gray-500">
              ({items.length})
            </span>
          </h2>
          <button
            onClick={toggleCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-gray-400">
              <ShoppingBag className="w-16 h-16 opacity-20" />
              <p>Your bag is empty.</p>
              <button
                onClick={toggleCart}
                className="text-black underline underline-offset-4 hover:text-gray-600"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4">
                {/* Image */}
                <div className="relative w-24 aspect-[3/4] bg-gray-100 shrink-0">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-sm uppercase tracking-wide pr-4">
                      {item.name}
                    </h3>
                    <p className="font-mono text-sm">${item.price}</p>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">
                    Size: {item.size}
                  </p>

                  <div className="mt-auto flex justify-between items-center">
                    <div className="flex items-center gap-3 border border-gray-200 rounded-full px-3 py-1">
                      <span className="text-xs">{item.quantity}</span>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.size)}
                      className="text-xs text-gray-400 hover:text-red-500 underline underline-offset-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-end mb-4 font-bold text-lg uppercase tracking-wider">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mb-6 text-center">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
