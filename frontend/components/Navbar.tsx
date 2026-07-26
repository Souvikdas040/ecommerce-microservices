import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold">
          🛒 MicroStore
        </Link>

        <div className="flex gap-6">
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>

          <Link href="/products" className="hover:text-gray-200">
            Products
          </Link>

          <Link href="/customers" className="hover:text-gray-200">
            Customer
          </Link>

          <Link href="/checkout" className="hover:text-gray-200">
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
}
