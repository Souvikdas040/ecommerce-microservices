"use client";

import { useState } from "react";
import { createCustomer } from "@/services/customer.service";

export default function CustomerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const customer = await createCustomer(form);

      alert(`Customer created successfully! ID: ${customer.id}`);

      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to create customer");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow"
    >
      <h2 className="mb-6 text-2xl font-bold text-blue-500">
        Customer Registration
      </h2>

      <input
        className="mb-4 w-full rounded border p-3 text-neutral-600"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="mb-4 w-full rounded border p-3 text-neutral-600"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        className="mb-4 w-full rounded border p-3 text-neutral-600"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <input
        className="mb-4 w-full rounded border p-3 text-neutral-600"
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />

      <button className="w-full rounded bg-blue-600 py-3 text-white hover:bg-blue-700">
        Register
      </button>
    </form>
  );
}
