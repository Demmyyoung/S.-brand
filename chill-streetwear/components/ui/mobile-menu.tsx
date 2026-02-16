"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop/tees" }, // Defaulting to tees for now
  { label: "About", href: "/about" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 w-full max-w-xs bg-white z-[110] shadow-2xl p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold uppercase tracking-wider">
                Menu
              </span>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 mt-20">
              <Link
                href="/about"
                onClick={onClose}
                className="text-2xl font-bold uppercase tracking-widest hover:text-gray-500 transition-colors"
              >
                About
              </Link>
              <Link
                href="/shop/bottoms"
                onClick={onClose}
                className="text-2xl font-bold uppercase tracking-widest hover:text-gray-500 transition-colors"
              >
                Bottoms
              </Link>
              <Link
                href="/shop/tees"
                onClick={onClose}
                className="text-2xl font-bold uppercase tracking-widest hover:text-gray-500 transition-colors"
              >
                Tees
              </Link>
            </nav>

            <div className="mt-auto">
              <p className="text-xs text-gray-400 uppercase tracking-widest text-center">
                &copy; SWXN 2024
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
