"use client";

import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";

import { Product } from "@/types/product";
import { getProducts } from "@/services/product.service";

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      console.log("🚀 Fetch started");

      try {
        const data = await getProducts();

        console.log("✅ Products:", data);

        setProducts(data);
      } catch (err) {
        console.error("❌ API Error:", err);
      } finally {
        console.log("🏁 Finished");
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
