"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { getProductPrice } from "@/lib/currency";
import { ShoppingCart, Check } from "lucide-react";

const categories = ["All", "Web Development", "Custom Software", "Maintenance", "Consulting", "Digital Marketing", "Retainer", "Plugins & Scripts"];

export default function ShopPage() {
  const { addToCart, cart } = useCart();
  const { currency, exchangeRate } = useCurrency();
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
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <p className="text-brand-blue text-xs tracking-widest uppercase mb-4">Service Catalog</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Digital Solutions
          </h1>
          <p className="text-brand-gray max-w-xl text-lg">
            Transparent pricing on every service. No hidden fees, no surprises.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs tracking-wide font-display transition-all rounded-full border ${
                active === cat
                  ? "bg-brand-blue text-white border-brand-blue font-bold"
                  : "border-white/10 text-brand-gray hover:border-brand-blue/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center border border-white/10 border-dashed rounded-2xl bg-brand-surface/20">
            <p className="text-brand-gray text-lg font-display mb-4">No services found in this category.</p>
            <button
              onClick={() => setActive("All")}
              className="text-brand-blue hover:text-white transition-colors text-sm tracking-widest uppercase"
            >
              View all services
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="border border-white/10 rounded-2xl overflow-hidden hover:border-brand-blue/40 transition-all group bg-brand-surface/20 hover:bg-brand-surface/40 flex flex-col"
              >
                {/* Product Image */}
                <div
                  className="w-full h-40 bg-brand-surface/50 border-b border-white/10 flex items-center justify-center p-4"
                  dangerouslySetInnerHTML={{ __html: product.image }}
                />

                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-brand-blue text-xs tracking-widest uppercase">{product.category}</span>
                    <span className="text-white/20 text-xs font-mono">{product.sku}</span>
                  </div>
                  <h2 className="font-display text-lg font-bold leading-snug group-hover:text-brand-blue transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-brand-gray text-sm leading-relaxed flex-1">{product.shortDesc}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="font-display text-2xl font-bold text-white">
                      {getProductPrice(product, currency, exchangeRate)}
                    </span>
                    <button
                      onClick={() => handleAdd(product)}
                      className={`flex items-center gap-2 px-4 py-2 text-xs font-bold font-display tracking-wide transition-all rounded-full ${
                        added === product.id
                          ? "bg-green-500 text-white"
                          : inCart(product.id)
                          ? "border border-white/20 text-brand-gray"
                          : "bg-brand-blue text-white hover:bg-brand-blue/80"
                      }`}
                    >
                      {added === product.id ? (
                        <><Check size={14} /> Added</>
                      ) : inCart(product.id) ? (
                        <><ShoppingCart size={14} /> In Cart</>
                      ) : (
                        <><ShoppingCart size={14} /> Add</>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
