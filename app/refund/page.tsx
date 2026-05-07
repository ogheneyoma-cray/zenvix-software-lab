"use client";

import { motion } from "framer-motion";

export default function RefundPolicyPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-brand-blue tracking-[0.3em] uppercase text-xs mb-4">Legal</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Refund and Cancellation Policy
        </h1>
        <p className="text-brand-gray text-sm mb-10"><strong>Effective Date:</strong> 7 May 2026</p>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Due to the custom nature of software development and digital services, our refund policy is structured around project milestones.
        </p>
        
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">1. Digital Products (Plugins/Scripts)</h2>
            <p className="text-brand-gray leading-relaxed">
              Standalone digital downloads are eligible for a full refund within 14 days of purchase only if the software is demonstrably broken and our support team cannot resolve the issue.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">2. Custom Services & Development</h2>
            <p className="text-brand-gray leading-relaxed">
              Deposits for custom development projects are non-refundable once the discovery and architecture phase has begun.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">3. Retainers & Maintenance</h2>
            <p className="text-brand-gray leading-relaxed">
              Monthly retainers can be canceled at any time with a 30-day written notice. Any unused hours at the time of cancellation are non-refundable.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">4. Dispute Resolution</h2>
            <p className="text-brand-gray leading-relaxed">
              If you are unsatisfied with a deliverable, you must notify us within 7 days of delivery. We will work diligently to revise the work to meet the agreed-upon scope.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}