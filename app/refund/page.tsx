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
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Refund &amp; Cancellation Policy
        </h1>
        <p className="text-brand-gray text-sm mb-10">
          <strong>Effective Date:</strong> 7 May 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> 7 May 2026
        </p>

        <p className="text-brand-gray text-lg leading-relaxed mb-10">
          At Arch HD, we are committed to delivering exceptional quality in every engagement. Because software development and digital services involve a significant investment of skilled labour from the moment a project begins, our refund policy is carefully structured to be fair to both our clients and our team. We encourage you to read this policy in full before making a purchase. If you have any questions, please contact us before placing your order.
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">1. Digital Products — Plugins &amp; Scripts</h2>
            <p className="text-brand-gray leading-relaxed mb-3">
              Standalone digital products available in our product catalogue (such as the Arch HD Custom Form Builder plugin) are eligible for a full refund within <strong className="text-white">14 calendar days</strong> of the original purchase date, provided that the software is demonstrably non-functional as described and our technical support team has been unable to resolve the issue after reasonable assistance.
            </p>
            <p className="text-brand-gray leading-relaxed">
              Refund requests for digital products must be submitted to <a href="mailto:support@archhd.com" className="text-brand-blue hover:underline">support@archhd.com</a> with your order reference number and a clear description of the technical issue. We will not process refunds where the issue is caused by third-party software conflicts, hosting environment incompatibilities beyond our documented requirements, or user error. Refunds will not be issued for change-of-mind once the download has been accessed.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">2. Fixed-Price Packages</h2>
            <p className="text-brand-gray leading-relaxed mb-3">
              For our fixed-price service packages (such as the Basic Business Website or E-Commerce Standard Package), a deposit of 50% is required to initiate the project. This deposit covers discovery, planning, initial design, and early development work and is <strong className="text-white">non-refundable once work has commenced</strong>.
            </p>
            <p className="text-brand-gray leading-relaxed">
              If a client wishes to cancel a fixed-price project before the final delivery, the client will be invoiced for the proportion of work completed up to the cancellation date. If the completed work value is less than the deposit paid, no additional charge applies. If it exceeds the deposit, the difference is due immediately. All completed work product up to the point of cancellation remains the property of Arch HD until all outstanding balances are settled.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">3. Custom Software &amp; Bespoke Development</h2>
            <p className="text-brand-gray leading-relaxed mb-3">
              Custom development projects are governed by the terms in your individual project proposal or Statement of Work (SOW). Deposits are non-refundable once the discovery and architecture phase has begun, as this phase involves substantial skilled labour. Milestone payments become non-refundable once the client has approved and signed off on the corresponding deliverable.
            </p>
            <p className="text-brand-gray leading-relaxed">
              If Arch HD fails to deliver a material component of the agreed scope through our own fault, we will provide appropriate remediation, additional development time, or a proportional credit at our discretion. We will work diligently to resolve all quality concerns raised within the review period specified in the SOW.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">4. Monthly Retainers &amp; Maintenance Plans</h2>
            <p className="text-brand-gray leading-relaxed mb-3">
              Monthly retainer and maintenance subscriptions can be cancelled at any time with a minimum of <strong className="text-white">30 days&apos; written notice</strong> sent to <a href="mailto:support@archhd.com" className="text-brand-blue hover:underline">support@archhd.com</a>. Your plan will remain active until the end of the final paid billing period.
            </p>
            <p className="text-brand-gray leading-relaxed">
              Retainer hours purchased but unused at the time of cancellation are non-refundable. Pre-paid developer hour blocks (e.g., the 10-hour retainer package) never expire and can be used at any time; however, they are non-refundable once purchased. Partial use of a pre-paid hour block does not entitle the client to a refund of unused hours unless Arch HD is unable to fulfil the service through no fault of the client.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">5. Dispute Resolution</h2>
            <p className="text-brand-gray leading-relaxed">
              If you are dissatisfied with a deliverable, you must notify us in writing within <strong className="text-white">7 calendar days</strong> of delivery. We will review your concerns and work in good faith to revise the work in accordance with the agreed scope. Requests for revisions that go beyond the original agreed scope will be handled as a change request and may incur additional charges. If a dispute cannot be resolved amicably within 30 days of written notice, both parties agree to seek mediation before pursuing formal legal remedies.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">6. Refund Processing</h2>
            <p className="text-brand-gray leading-relaxed">
              All approved refunds will be processed within <strong className="text-white">10 business days</strong> of the approved refund request. Refunds are issued to the original payment method used at the time of purchase. Arch HD is not responsible for any delays caused by card networks or banking institutions. Any third-party transaction fees incurred at the time of the original purchase are non-refundable.
            </p>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h2 className="font-display text-xl font-bold mb-3">Contact Us</h2>
            <p className="text-brand-gray leading-relaxed">
              To initiate a refund or cancellation request, please contact us at:<br />
              <a href="mailto:support@archhd.com" className="text-brand-blue hover:underline">support@archhd.com</a><br />
              Please include your order reference number, the service or product in question, and a description of the issue. We aim to respond to all refund enquiries within 2 business days.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
