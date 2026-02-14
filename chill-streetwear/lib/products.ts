import { Product } from "./types";

// Helper to generate mock images
const getMockImage = (text: string) => 
  `https://placehold.co/600x800/F3F4F6/111827/png?text=${encodeURIComponent(text)}`;

const MOCK_PRODUCTS: Product[] = Array.from({ length: 8 }).map((_, i) => {
  const title = `Essential Garment ${i + 1}`;
  return {
    id: i + 1,
    attributes: {
      name: title,
      slug: `essential-garment-${i + 1}`,
      price: 45 + i * 5,
      description: "A premium essential for your daily wardrobe. Crafted with high-quality materials for maximum comfort and durability. This piece embodies the refined utility aesthetic of SWXN.",
      category: i % 2 === 0 ? "tees" : "bottoms",
      images: {
        data: [
          {
            id: i,
            attributes: {
              url: getMockImage(title),
              alternativeText: title,
            },
          },
        ],
      },
    },
  };
});

export async function getProducts(): Promise<Product[]> {
  // Simulate API delay
  // await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_PRODUCTS;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return MOCK_PRODUCTS.find((p) => p.attributes.slug === slug);
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return MOCK_PRODUCTS.filter((p) => p.attributes.category === category);
}
