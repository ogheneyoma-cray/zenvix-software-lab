"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Check } from "lucide-react";

const categories = ["All", "Web Development", "Custom Software", "Maintenance", "Consulting", "Digital Marketing", "Retainer", "Plugins & Scripts"];

export default function ShopPage() {
  const { addToCart, cart } = useCart();
  const [active, setActive] = useState("All");
  const [added, setAdded] = useState<string | null>(null);

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  const handleAdd = (product: typeof products[0]) => {
    addToCart(product);
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1500);
  };

  const inCart = (id: string) => cart.some((item) => item.id === id);

  return (
    <main className="bg-zx-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <p className="text-zx-cyan text-xs tracking-widest uppercase mb-4">Service Catalog</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Digital Solutions
          </h1>
          <p className="text-white/40 max-w-xl text-lg">
            Transparent pricing on every service. No hidden fees, no surprises.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs tracking-wide font-display transition-all border ${
                active === cat
                  ? "bg-zx-cyan text-zx-dark border-zx-cyan font-bold"
                  : "border-zx-border text-white/40 hover:border-zx-cyan/40 hover:text-white/70"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((product) => (
            <div key={product.id}
              className="border border-zx-border p-6 flex flex-col gap-4 hover:border-zx-cyan/30 transition-all group bg-zx-navy/50">
              <div className="flex items-center justify-between">
                <span className="text-zx-cyan text-xs tracking-widest uppercase">{product.category}</span>
                <span className="text-white/20 text-xs font-mono">{product.sku}</span>
              </div>
              <h2 className="font-display text-lg font-bold leading-snug group-hover:text-zx-cyan transition-colors">
                {product.name}
              </h2>
              <p className="text-white/40 text-sm leading-relaxed flex-1">{product.shortDesc}</p>
              <div className="flex items-center justify-between pt-2 border-t border-zx-border">
                <span className="font-display text-2xl font-bold text-white">
                  ${product.price.toLocaleString()}
                </span>
                <button onClick={() => handleAdd(product)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-bold font-display tracking-wide transition-all ${
                    added === product.id
                      ? "bg-green-500 text-white"
                      : inCart(product.id)
                      ? "border border-zx-border text-white/30"
                      : "bg-zx-cyan text-zx-dark hover:bg-white"
                  }`}>
                  {added === product.id ? <><Check size={14} /> Added</> :
                   inCart(product.id) ? <><ShoppingCart size={14} /> In Cart</> :
                   <><ShoppingCart size={14} /> Add</>}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}