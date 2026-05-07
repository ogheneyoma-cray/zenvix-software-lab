"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import type { Currency } from "@/lib/currency";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/shop", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const CURRENCIES: { code: Currency; label: string; symbol: string; flag: string }[] = [
  { code: "USD", label: "US Dollar", symbol: "$", flag: "🇺🇸" },
  { code: "NGN", label: "Nigerian Naira", symbol: "₦", flag: "🇳🇬" },
];

function CurrencyToggle() {
  const { currency, setCurrency, exchangeRate, rateLoading } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = CURRENCIES.find((c) => c.code === currency)!;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-brand-gray hover:text-white transition-colors text-xs font-bold uppercase tracking-widest border border-white/10 px-3 py-1.5 rounded-full hover:border-brand-blue/50"
        aria-label="Select currency"
      >
        <span>{active.flag}</span>
        <span>{active.symbol} {active.code}</span>
        <ChevronDown size={11} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 right-0 bg-[#111827] border border-white/10 rounded-xl p-3 min-w-[180px] shadow-2xl z-50"
          >
            <p className="text-brand-gray text-xs pb-2 mb-2 border-b border-white/10 leading-snug">
              {rateLoading
                ? "Fetching live rate…"
                : `1 USD = ₦${exchangeRate.toLocaleString()}`}
            </p>
            {CURRENCIES.map((c) => (
              <button
                key={c.code}
                onClick={() => { setCurrency(c.code); setOpen(false); }}
                className={`w-full text-left px-2.5 py-2 rounded-lg text-sm flex items-center gap-2.5 transition-colors ${
                  currency === c.code
                    ? "text-brand-blue bg-brand-blue/10 font-bold"
                    : "text-brand-gray hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{c.flag}</span>
                <span>{c.symbol} {c.code}</span>
                <span className="ml-auto text-xs text-brand-gray/60">{c.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();
  const { currency, setCurrency, exchangeRate, rateLoading } = useCurrency();

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
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-brand-gray hover:text-brand-blue transition-colors font-body text-sm tracking-widest uppercase"
            >
              {l.label}
            </Link>
          ))}

          <CurrencyToggle />

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
        <div className="md:hidden flex items-center gap-3">
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

              {/* Mobile currency switcher */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-brand-gray uppercase tracking-widest mb-3">
                  Currency &nbsp;·&nbsp;{" "}
                  {rateLoading ? "loading…" : `1 USD = ₦${exchangeRate.toLocaleString()}`}
                </p>
                <div className="flex gap-2">
                  {CURRENCIES.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => setCurrency(c.code)}
                      className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors border ${
                        currency === c.code
                          ? "border-brand-blue text-brand-blue bg-brand-blue/10"
                          : "border-white/10 text-brand-gray hover:border-white/30"
                      }`}
                    >
                      {c.flag} {c.symbol} {c.code}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
