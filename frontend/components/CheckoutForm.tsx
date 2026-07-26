"use client";

import { useState } from "react";
import { checkout } from "@/services/order.service";
import { useSearchParams } from "next/navigation";

export default function CheckoutForm() {
  const [customerId, setCustomerId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const searchParams = useSearchParams();
  const [productId, setProductId] = useState(
    searchParams.get("productId") || "",
  );

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const order = await checkout({
        customerId: Number(customerId),
        items: [
          {
            productId: Number(productId),
            quantity,
          },
        ],
      });

      alert(`Order #${order.id} placed successfully!`);

      setCustomerId("");
      setProductId("");
      setQuantity(1);
    } catch (error) {
      console.error(error);
      alert("Checkout failed.");
    }
  };

  return (
    <form
      onSubmit={handleCheckout}
      className="mx-auto max-w-lg rounded-xl bg-white p-6 shadow-lg"
    >
      <h2 className="mb-6 text-2xl font-bold text-blue-600">Checkout</h2>

      <input
        type="number"
        placeholder="Customer ID"
        className="mb-4 w-full rounded border p-3 text-black"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Product ID"
        className="mb-4 w-full rounded border p-3 text-black"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Quantity"
        className="mb-6 w-full rounded border p-3 text-black"
        value={quantity}
        min={1}
        onChange={(e) => setQuantity(Number(e.target.value))}
        required
      />

      <button className="w-full rounded bg-green-600 py-3 text-white transition hover:bg-green-700">
        Place Order
      </button>
    </form>
  );
}
