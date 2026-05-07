"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-brand-blue tracking-[0.3em] uppercase text-xs mb-4">Legal</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-10 leading-tight">
          Privacy Policy
        </h1>
        <p className="text-brand-gray text-lg mb-8">
          <strong>Effective Date:</strong> [Insert Date]
        </p>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          At Zenvix Software Labs, your privacy is paramount. This policy explains how we collect, use, and protect your data.
        </p>
        
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">1. Data Collection</h2>
            <p className="text-brand-gray leading-relaxed">
              We collect personal information (name, email, company details) when you fill out contact forms, request quotes, or purchase digital products/services. We also collect non-identifying analytics data regarding website usage.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">2. Use of Data</h2>
            <p className="text-brand-gray leading-relaxed">
              Your information is used strictly to provide our development services, process payments, and communicate project updates.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">3. Data Security</h2>
            <p className="text-brand-gray leading-relaxed">
              We implement industry-standard security measures, including SSL encryption, to protect your data. We do not sell or rent your personal information to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">4. Cookies</h2>
            <p className="text-brand-gray leading-relaxed">
              Our site uses cookies to enhance user experience and analyze site traffic. You can control cookie preferences through your browser settings.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}