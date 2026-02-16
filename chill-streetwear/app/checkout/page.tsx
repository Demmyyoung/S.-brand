"use client";

import { useCart } from "@/components/cart/cart-context";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, subtotal, totalItems } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock shipping cost
  const shippingCost = subtotal > 150 ? 0 : 15;
  const total = subtotal + shippingCost;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      alert("Order placed! (This is a demo)");
      setIsProcessing(false);
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">
          Looks like you haven't added anything yet.
        </p>
        <Link
          href="/"
          className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-black/90 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column: Form */}
        <div className="order-2 lg:order-1">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-400 hover:text-black mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Continue Shopping
          </Link>

          <h2 className="text-2xl font-bold uppercase tracking-wide mb-8">
            Checkout
          </h2>

          <form onSubmit={handlePlaceOrder} className="space-y-8">
            {/* Contact Info */}
            <section>
              <h3 className="text-lg font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full p-4 bg-white border border-gray-200 focus:border-black outline-none transition-colors"
                />
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="newsletter" className="w-4 h-4" />
                  <label htmlFor="newsletter" className="text-sm text-gray-500">
                    Email me with news and offers
                  </label>
                </div>
              </div>
            </section>

            {/* Shipping Address */}
            <section>
              <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    required
                    className="w-full p-4 bg-white border border-gray-200 focus:border-black outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    required
                    className="w-full p-4 bg-white border border-gray-200 focus:border-black outline-none transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  required
                  className="w-full p-4 bg-white border border-gray-200 focus:border-black outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full p-4 bg-white border border-gray-200 focus:border-black outline-none transition-colors"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    className="w-full p-4 bg-white border border-gray-200 focus:border-black outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Postal code"
                    required
                    className="w-full p-4 bg-white border border-gray-200 focus:border-black outline-none transition-colors"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-4 bg-white border border-gray-200 focus:border-black outline-none transition-colors"
                />
              </div>
            </section>

            {/* Payment Placeholder */}
            <section>
              <h3 className="text-lg font-semibold mb-4">Payment</h3>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-sm text-center">
                <Lock className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500 mb-4">
                  All transactions are secure and encrypted.
                </p>
                <p className="text-xs text-gray-400">
                  Payment gateway integration coming soon.
                </p>
              </div>
            </section>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-[#171717] text-white h-16 text-lg font-bold uppercase tracking-widest hover:bg-black/90 transition-transform active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isProcessing ? "Processing..." : `Pay $${total.toFixed(2)}`}
            </button>
          </form>
        </div>

        {/* Right Column: Order Summary */}
        <div className="order-1 lg:order-2">
          <div className="bg-white p-6 lg:p-10 border border-gray-100 shadow-sm sticky top-32">
            <h2 className="text-xl font-bold uppercase tracking-wide mb-6">
              Order Summary
            </h2>
            <div className="space-y-6 mb-8 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4">
                  <div className="relative w-16 h-20 bg-gray-100 flex-shrink-0">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    )}
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white text-xs flex items-center justify-center rounded-full">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-500">Size: {item.size}</p>
                  </div>
                  <div className="text-sm font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span>
                  {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-gray-100 pt-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
