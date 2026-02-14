"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
      // Ensure the container fills the space but respects the sidebar layout
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
