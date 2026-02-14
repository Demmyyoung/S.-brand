"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Logo() {
  const { scrollY } = useScroll();

  // Map scroll progress (0px to 300px) from hero state to nav state
  // Scale: Large (1) -> Small (0.35)
  const scale = useTransform(scrollY, [0, 300], [1, 0.35]);

  // Position:
  // Start: Centered Vertically (50vh), Right Side (75vw)
  // End: Top Left (2.5rem top, 2.5rem left)

  const top = useTransform(scrollY, [0, 300], ["50vh", "2.5rem"]);

  // Left:
  // Start: 75vw (Right side)
  // End: 2.5rem (Top Left)
  const left = useTransform(scrollY, [0, 300], ["75vw", "2.5rem"]);

  // Transform X and Y:
  // Start: -50% (Center the element on its point)
  // End: 0% (Align top-left corner)
  const x = useTransform(scrollY, [0, 300], ["-50%", "0%"]);
  const y = useTransform(scrollY, [0, 300], ["-50%", "0%"]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top,
        left,
        x,
        y,
        scale,
        transformOrigin: "top left",
        zIndex: 50,
      }}
      className="pointer-events-none"
    >
      <div className="relative w-64 h-64 md:w-96 md:h-96">
        <Image
          src="/images/logo.jpg"
          alt="Chill Streetwear Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </motion.div>
  );
}
