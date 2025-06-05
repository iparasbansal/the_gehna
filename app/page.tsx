
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#731C0F] text-white py-20 text-center">
        <h1 className="text-5xl font-bold tracking-wide">THE GEHNA</h1>
        <p className="mt-4 text-lg">Elegant 1 Gram Gold Jewellery</p>
        <Link href="/shop">
          <Button className="mt-6 bg-white text-[#731C0F] hover:bg-gray-100">
            Shop Now
          </Button>
        </Link>
      </section>

      <section className="px-4 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredProducts.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="mt-2 font-semibold">₹{product.price}</p>
                <Link href={`/product/${product.id}`}>
                  <Button className="mt-4 w-full">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

const featuredProducts = [
  {
    id: "classic-kada",
    name: "Classic Kada",
    price: 699,
    image: "https://via.placeholder.com/400x400.png?text=Classic+Kada",
    category: "Bangles",
  },
  {
    id: "royal-peacock-necklace",
    name: "Royal Peacock Necklace",
    price: 1299,
    image: "https://via.placeholder.com/400x400.png?text=Peacock+Necklace",
    category: "Chains",
  },
  {
    id: "floral-ring",
    name: "Floral Adjustable Ring",
    price: 399,
    image: "https://via.placeholder.com/400x400.png?text=Floral+Ring",
    category: "Rings",
  },
];
