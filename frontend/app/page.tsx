import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-bold text-gray-900 text-shadow-md text-shadow-amber-300">
          Welcome to MicroStore
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Discover quality products powered by our NestJS microservices.
        </p>
      </div>

      <ProductGrid />
    </div>
  );
}