import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/products";
import { Product } from "@/lib/types";
import { useCart } from "@/components/cart/cart-context";
import { Plus } from "lucide-react";

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addItem } = useCart();

  useEffect(() => {
    async function load() {
      const data = await getProducts();
      setProducts(data);
    }
    load();
  }, []);

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); // Prevent navigation to product page
    addItem(product, "M"); // Default to Medium for quick add
  };

  return (
    <section className="px-6 py-20 min-h-screen bg-background relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.attributes.slug}`}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4 shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-shadow duration-500">
                {product.attributes.images.data[0] && (
                  <Image
                    src={product.attributes.images.data[0].attributes.url}
                    alt={product.attributes.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                )}
                {/* Quick Add Button */}
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-black hover:text-white z-10"
                  aria-label="Quick Add to Cart"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-medium uppercase tracking-wide group-hover:opacity-70 transition-opacity">
                  {product.attributes.name}
                </h3>
                <span className="text-sm text-foreground/60 font-mono">
                  ${product.attributes.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
