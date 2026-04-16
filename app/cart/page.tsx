"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { Trash2, ShoppingCart, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <main className="bg-zx-dark text-white min-h-screen pt-32 pb-24 px-6 font-body flex flex-col items-center justify-center text-center">
        <ShoppingCart size={64} className="text-white/10 mb-6" />
        <h1 className="font-display text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-white/30 mb-8">Add a service to get started.</p>
        <Link href="/shop"
          className="bg-zx-cyan text-zx-dark px-8 py-4 font-bold font-display tracking-wide hover:bg-white transition-colors">
          Browse Services
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-zx-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <div className="max-w-4xl mx-auto">

        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-zx-cyan text-xs tracking-widest uppercase mb-2">Your Order</p>
            <h1 className="font-display text-4xl font-bold">
              Cart <span className="text-white/20">({totalItems})</span>
            </h1>
          </div>
          <button onClick={clearCart}
            className="text-white/20 hover:text-red-400 transition-colors text-xs uppercase tracking-widest font-display">
            Clear All
          </button>
        </div>

        <div className="space-y-3 mb-10">
          {cart.map((item) => (
            <div key={item.id}
              className="border border-zx-border p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-zx-navy/50 hover:border-zx-cyan/20 transition-colors">
              <div className="flex-1">
                <span className="text-zx-cyan text-xs uppercase tracking-widest">{item.category}</span>
                <h3 className="font-display text-lg font-bold mt-1">{item.name}</h3>
                <p className="text-white/20 text-xs font-mono mt-1">{item.sku}</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-display text-xl font-bold">${item.price.toLocaleString()}</span>
                <button onClick={() => removeFromCart(item.id)}
                  className="text-white/20 hover:text-red-400 transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="border border-zx-border p-8 bg-zx-navy/50">
          <h2 className="font-display text-2xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-3 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm text-white/40">
                <span>{item.name}</span>
                <span>${item.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-zx-border pt-4 flex justify-between items-center mb-8">
            <span className="font-display text-lg font-bold">Total Investment</span>
            <span className="font-display text-3xl font-bold text-zx-cyan">
              ${totalPrice.toLocaleString()}
            </span>
          </div>
          <Link href="/contact"
            className="w-full bg-zx-cyan text-zx-dark py-4 font-bold font-display tracking-wide hover:bg-white transition-colors flex items-center justify-center gap-2">
            Proceed to Enquiry <ArrowRight size={16} />
          </Link>
          <p className="text-white/20 text-xs text-center mt-4">
            A lead engineer will contact you within 24 hours to scope your project.
          </p>
        </div>

        <div className="text-center mt-8">
          <Link href="/shop" className="text-white/20 hover:text-zx-cyan transition-colors text-sm uppercase tracking-widest font-display">
            ← Continue Browsing
          </Link>
        </div>
      </div>
    </main>
  );
}