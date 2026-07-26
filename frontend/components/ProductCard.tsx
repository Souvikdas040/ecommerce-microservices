import Link from "next/link";
import { Product } from "@/types/product";
import { ShoppingCart, Eye } from "lucide-react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image Placeholder */}
      <div className="flex h-52 items-center justify-center bg-gray-100">
        <span className="text-6xl">📦</span>
      </div>

      <div className="space-y-3 p-5">
        <div>
          <h2 className="truncate text-xl font-bold text-gray-900">
            {product.name}
          </h2>

          <p className="mt-1 line-clamp-2 text-sm text-gray-600">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ₹{Number(product.price).toLocaleString()}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              product.stock > 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {product.stock > 0 ? `${product.stock} in stock` : "Out of Stock"}
          </span>
        </div>

        <div className="flex gap-3 pt-2">
          <Link
            href={`/products/${product.id}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            <Eye size={18} />
            View
          </Link>

          <Link
            href={`/checkout?productId=${product.id}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50"
          >
            <ShoppingCart size={18} />
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
}
