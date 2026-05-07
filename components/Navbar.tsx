"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/shop", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <svg width="144" height="36" viewBox="0 0 144 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Arch HD">
            <defs>
              <linearGradient id="archGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6"/>
                <stop offset="100%" stopColor="#8B5CF6"/>
              </linearGradient>
            </defs>
            <rect x="2" y="16" width="5" height="18" rx="2.5" fill="#3B82F6"/>
            <rect x="29" y="16" width="5" height="18" rx="2.5" fill="#8B5CF6"/>
            <path d="M4.5 22 C4.5 8 9 2 18 2 C27 2 31.5 8 31.5 22" stroke="url(#archGrad)" strokeWidth="5" strokeLinecap="round" fill="none"/>
            <text x="46" y="27" fontFamily="'Space Grotesk', system-ui, sans-serif" fontSize="20" fontWeight="700" fill="white" letterSpacing="1">ARCH</text>
            <text x="108" y="27" fontFamily="'Space Grotesk', system-ui, sans-serif" fontSize="20" fontWeight="700" fill="url(#archGrad)" letterSpacing="1">HD</text>
          </svg>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-brand-gray hover:text-brand-blue transition-colors font-body text-sm tracking-widest uppercase"
            >
              {l.label}
            </Link>
          ))}

          {/* Cart Icon */}
          <Link href="/cart" className="relative text-brand-gray hover:text-brand-blue transition-colors">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-linear-to-r from-brand-blue to-brand-purple text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <Link
            href="/contact"
            className="bg-linear-to-r from-brand-blue to-brand-purple text-white px-6 py-2.5 text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-colors rounded-full"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Link href="/cart" className="relative text-brand-gray">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-linear-to-r from-brand-blue to-brand-purple text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="text-brand-gray"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-brand-dark border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-brand-gray hover:text-brand-blue transition-colors uppercase tracking-widest text-sm"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}