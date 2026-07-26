import Link from "next/link";
import { getProduct } from "@/services/product.service";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;

  const product = await getProduct(Number(id));

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid gap-10 rounded-2xl bg-white p-8 shadow-lg md:grid-cols-2">
        {/* Product Image */}
        <div className="flex items-center justify-center rounded-xl bg-gray-100 p-10">
          <span className="text-9xl">💻</span>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>

          <p className="mt-4 text-lg text-gray-600">{product.description}</p>

          <div className="mt-6">
            <span className="text-4xl font-bold text-blue-600">
              ₹{Number(product.price).toLocaleString()}
            </span>
          </div>

          <div className="mt-4">
            {product.stock > 0 ? (
              <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
                ✅ {product.stock} Items Available
              </span>
            ) : (
              <span className="rounded-full bg-red-100 px-4 py-2 text-red-700">
                ❌ Out of Stock
              </span>
            )}
          </div>

          <div className="mt-8 flex gap-4">
            <Link
              href="/products"
              className="rounded-lg border text-neutral-600 border-gray-300 px-6 py-3 transition hover:bg-gray-100"
            >
              ← Back
            </Link>

            <Link
              href={`/checkout?productId=${product.id}`}
              className="rounded-lg bg-green-600 px-8 py-3 text-white transition hover:bg-green-700"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
