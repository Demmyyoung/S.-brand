"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CartItem, Product } from "@/lib/types";

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, size?: string) => void;
  removeItem: (id: number, size?: string) => void;
  toggleCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load from LocalStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("swxn-cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("swxn-cart", JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, size: string = "M") => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.size === size,
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          slug: product.attributes.slug,
          name: product.attributes.name,
          price: product.attributes.price,
          image: product.attributes.images.data[0]?.attributes.url || "",
          quantity: 1,
          size,
        },
      ];
    });
    setIsOpen(true);
  };

  const removeItem = (id: number, size: string = "M") => {
    setItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size)),
    );
  };

  const toggleCart = () => setIsOpen((prev) => !prev);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        addItem,
        removeItem,
        toggleCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
