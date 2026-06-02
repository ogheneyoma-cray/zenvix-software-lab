"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { getProductPrice } from "@/lib/currency";
import Link from "next/link";
import { ArrowLeft, CreditCard, Lock, CheckCircle } from "lucide-react";

function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  maxLength,
  pattern,
  autoComplete,
}: {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  maxLength?: number;
  pattern?: string;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs uppercase tracking-widest text-brand-gray font-bold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        pattern={pattern}
        autoComplete={autoComplete}
        required
        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-brand-gray/50 focus:outline-none focus:border-brand-blue transition-colors rounded-lg text-sm"
      />
    </div>
  );
}

function formatCardNumber(value: string) {
  return value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
  return digits;
}

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const { currency, exchangeRate } = useCurrency();
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const set = (key: keyof typeof form) => (val: string) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (cart.length === 0 && !submitted) {
    return (
      <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body flex flex-col items-center justify-center text-center">
        <CreditCard size={64} className="text-white/10 mb-6" />
        <h1 className="font-display text-4xl font-bold mb-4">Nothing to Check Out</h1>
        <p className="text-brand-gray mb-8">Your cart is empty. Add some services first.</p>
        <Link
          href="/shop"
          className="bg-brand-blue text-white px-8 py-4 font-bold font-display tracking-wide rounded-full hover:opacity-90 transition-all"
        >
          Browse Services
        </Link>
      </main>
    );
  }

  if (submitted) {
    return (
      <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body flex flex-col items-center justify-center text-center">
        <CheckCircle size={72} className="text-green-400 mb-6" />
        <h1 className="font-display text-4xl font-bold mb-4">Order Received!</h1>
        <p className="text-brand-gray max-w-md mb-4 leading-relaxed">
          Thank you for your order. A confirmation has been sent to your email address. Our team will contact you within 24 hours to begin scoping your project.
        </p>
        <p className="text-brand-gray/60 text-sm mb-10">
          Questions? Email us at{" "}
          <a href="mailto:support@archhd.com" className="text-brand-blue hover:underline">
            support@archhd.com
          </a>
        </p>
        <Link
          href="/"
          className="bg-brand-blue text-white px-8 py-4 font-bold font-display tracking-wide rounded-full hover:opacity-90 transition-all"
        >
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/cart"
          className="inline-flex items-center gap-2 text-brand-gray hover:text-white transition-colors text-sm mb-10 uppercase tracking-widest"
        >
          <ArrowLeft size={14} /> Back to Cart
        </Link>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10">

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Contact & Billing */}
            <div className="border border-white/10 rounded-2xl p-6 bg-brand-surface/20 space-y-5">
              <h2 className="font-display text-xl font-bold mb-2">Contact & Billing Information</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField label="First Name" placeholder="John" value={form.firstName} onChange={set("firstName")} autoComplete="given-name" />
                <InputField label="Last Name" placeholder="Doe" value={form.lastName} onChange={set("lastName")} autoComplete="family-name" />
              </div>
              <InputField label="Email Address" type="email" placeholder="john@company.com" value={form.email} onChange={set("email")} autoComplete="email" />
              <InputField label="Phone Number" type="tel" placeholder="+1 555 000 0000" value={form.phone} onChange={set("phone")} autoComplete="tel" />
              <InputField label="Billing Address" placeholder="123 Main Street" value={form.address} onChange={set("address")} autoComplete="street-address" />
              <div className="grid sm:grid-cols-3 gap-5">
                <InputField label="City" placeholder="New York" value={form.city} onChange={set("city")} autoComplete="address-level2" />
                <InputField label="Country" placeholder="United States" value={form.country} onChange={set("country")} autoComplete="country-name" />
                <InputField label="Postal Code" placeholder="10001" value={form.postalCode} onChange={set("postalCode")} autoComplete="postal-code" />
              </div>
            </div>

            {/* Payment */}
            <div className="border border-white/10 rounded-2xl p-6 bg-brand-surface/20 space-y-5">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-display text-xl font-bold">Payment Details</h2>
                <div className="flex items-center gap-1.5 text-xs text-brand-gray">
                  <Lock size={12} className="text-green-400" />
                  <span>SSL Encrypted</span>
                </div>
              </div>

              {/* Card brand icons */}
              <div className="flex gap-2 mb-2">
                {["VISA", "MC", "AMEX", "DISC"].map((brand) => (
                  <div key={brand} className="px-2.5 py-1 border border-white/10 rounded text-xs text-brand-gray/60 bg-white/5">
                    {brand}
                  </div>
                ))}
              </div>

              <InputField
                label="Name on Card"
                placeholder="John Doe"
                value={form.cardName}
                onChange={set("cardName")}
                autoComplete="cc-name"
              />

              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-widest text-brand-gray font-bold">Card Number</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={form.cardNumber}
                    onChange={(e) => set("cardNumber")(formatCardNumber(e.target.value))}
                    maxLength={19}
                    autoComplete="cc-number"
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 pr-10 text-white placeholder-brand-gray/50 focus:outline-none focus:border-brand-blue transition-colors rounded-lg text-sm font-mono tracking-widest"
                  />
                  <CreditCard size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-gray/40" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-brand-gray font-bold">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={form.expiry}
                    onChange={(e) => set("expiry")(formatExpiry(e.target.value))}
                    maxLength={5}
                    autoComplete="cc-exp"
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-brand-gray/50 focus:outline-none focus:border-brand-blue transition-colors rounded-lg text-sm font-mono tracking-widest"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-brand-gray font-bold">CVV / CVC</label>
                  <input
                    type="password"
                    placeholder="•••"
                    value={form.cvv}
                    onChange={(e) => set("cvv")(e.target.value.replace(/\D/g, "").slice(0, 4))}
                    maxLength={4}
                    autoComplete="cc-csc"
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-brand-gray/50 focus:outline-none focus:border-brand-blue transition-colors rounded-lg text-sm font-mono tracking-widest"
                  />
                </div>
              </div>

              <p className="text-xs text-brand-gray/50 leading-relaxed">
                Your payment information is encrypted and never stored on our servers. This form is secured by 256-bit SSL.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-brand-blue to-brand-purple text-white py-4 font-bold font-display tracking-widest uppercase rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <Lock size={16} />
              Place Order — {getProductPrice(totalPrice, currency, exchangeRate)}
            </button>
          </form>

          {/* Order Summary Sidebar */}
          <div className="space-y-4">
            <div className="border border-white/10 rounded-2xl p-6 bg-brand-surface/20 sticky top-28">
              <h2 className="font-display text-lg font-bold mb-5">Order Summary</h2>

              <div className="space-y-3 mb-5">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div className="flex-1 pr-4">
                      <p className="text-white leading-snug">{item.name}</p>
                      <p className="text-brand-gray/60 text-xs mt-0.5">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-white font-bold whitespace-nowrap">
                      {getProductPrice(item.price * item.quantity, currency, exchangeRate)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-brand-gray">
                  <span>Subtotal</span>
                  <span>{getProductPrice(totalPrice, currency, exchangeRate)}</span>
                </div>
                <div className="flex justify-between text-sm text-brand-gray">
                  <span>Processing Fee</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between font-display text-xl font-bold pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span className="text-brand-blue">{getProductPrice(totalPrice, currency, exchangeRate)}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
                <div className="flex items-start gap-2">
                  <Lock size={14} className="text-green-400 mt-0.5 shrink-0" />
                  <p className="text-xs text-brand-gray/80 leading-relaxed">
                    Secure checkout. Your details are encrypted. A confirmation email will be sent upon successful payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
