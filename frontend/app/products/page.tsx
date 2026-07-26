import ProductGrid from "@/components/ProductGrid";

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="mb-8 text-4xl font-bold">
        Products
      </h1>

      <ProductGrid />
    </div>
  );
}