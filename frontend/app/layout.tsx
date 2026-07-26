import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "MicroStore",
  description: "E-Commerce Microservices Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />

        <main className="min-h-screen p-8">{children}</main>

        <Footer />
      </body>
    </html>
  );
}