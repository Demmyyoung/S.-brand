import { getProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/product/product-details";

export async function generateStaticParams() {
  return [
    { slug: "essential-garment-1" },
    { slug: "essential-garment-2" },
    { slug: "essential-garment-3" },
    { slug: "essential-garment-4" },
    { slug: "essential-garment-5" },
    { slug: "essential-garment-6" },
    { slug: "essential-garment-7" },
    { slug: "essential-garment-8" },
  ];
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
