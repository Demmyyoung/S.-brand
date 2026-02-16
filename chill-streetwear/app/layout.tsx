import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/smooth-scroll";
import Navbar from "@/components/ui/navbar";
import { CartProvider } from "@/components/cart/cart-context";
import CartSidebar from "@/components/cart/cart-sidebar";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"], // Regular, Medium, Bold, ExtraBold
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SWXN",
  description: "Refined Utility.",
  icons: {
    icon: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${mulish.className} antialiased selection:bg-gray-200 selection:text-black bg-[#FAFAFA] text-[#171717]`}
      >
        <CartProvider>
          <Navbar />
          <CartSidebar />
          <SmoothScroll>{children}</SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
