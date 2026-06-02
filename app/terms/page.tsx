"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
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
          Terms &amp; Conditions
        </h1>
        <p className="text-brand-gray text-sm mb-10">
          <strong>Effective Date:</strong> 7 May 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> 7 May 2026
        </p>

        <p className="text-brand-gray text-lg leading-relaxed mb-10">
          These Terms and Conditions (&quot;Terms&quot;) govern your use of the Arch HD website and your engagement with our software development and digital services. By accessing our website, placing an order, or engaging our services, you agree to be legally bound by these Terms. Please read them carefully before proceeding.
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">1. Services</h2>
            <p className="text-brand-gray leading-relaxed">
              Arch HD provides custom software development, web development, API integrations, maintenance and support, digital marketing, and related consulting services. The specific scope, deliverables, timeline, and pricing for any custom project are defined in a separate project proposal or Statement of Work (SOW) agreed upon in writing before work commences. Our online service catalog represents standard offerings with listed starting prices; final pricing for complex, bespoke requirements will be confirmed after a discovery consultation.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">2. Orders and Payment</h2>
            <p className="text-brand-gray leading-relaxed mb-3">
              All prices listed on our website are in United States Dollars (USD) unless you select an alternative currency using our currency converter. Prices are exclusive of any applicable taxes unless stated otherwise. Payment is required in full for catalogue products (plugins, scripts, and fixed-price packages) at the time of purchase. For custom development projects, payment terms are outlined in the project proposal and typically involve a deposit (commonly 50%) before work begins, with the remainder due upon delivery or at agreed milestones.
            </p>
            <p className="text-brand-gray leading-relaxed">
              Arch HD reserves the right to modify its pricing at any time. Price changes will not affect orders already confirmed in writing. We accept major credit and debit cards. All payments are processed securely through PCI-DSS compliant payment processors.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">3. Intellectual Property</h2>
            <p className="text-brand-gray leading-relaxed mb-3">
              Upon full and final payment, clients receive full ownership of all custom-developed code, designs, and deliverables produced exclusively for their project, including all intellectual property rights therein, unless otherwise agreed in writing.
            </p>
            <p className="text-brand-gray leading-relaxed">
              Arch HD retains the right to use general methodologies, tools, frameworks, libraries, and accumulated know-how developed in the course of providing services. Third-party open-source components incorporated into deliverables are subject to their respective licences. Arch HD&apos;s proprietary products (such as plugins and scripts sold in our catalogue) remain the intellectual property of Arch HD and are licensed, not sold, to the purchaser.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">4. Client Responsibilities</h2>
            <p className="text-brand-gray leading-relaxed mb-3">
              Clients are responsible for providing timely, accurate, and complete information required for project delivery, including brand assets, content, access credentials, and feedback within agreed review periods. Delays caused by the client&apos;s failure to provide required inputs may result in adjusted delivery timelines and, where applicable, additional charges. Clients are also responsible for ensuring that any content or materials they provide do not infringe third-party intellectual property rights, violate applicable law, or contain harmful or illegal content.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">5. Confidentiality</h2>
            <p className="text-brand-gray leading-relaxed">
              Both parties agree to keep confidential any proprietary or sensitive information disclosed during the course of a project engagement. Arch HD will not disclose client project details, business strategies, or technical specifications to any third party without written consent, except where required by law or where subcontractors are engaged under appropriate confidentiality agreements.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">6. Limitation of Liability</h2>
            <p className="text-brand-gray leading-relaxed">
              To the maximum extent permitted by applicable law, Arch HD&apos;s total liability to a client for any claim arising out of or relating to these Terms or our services shall not exceed the total fees paid by the client in the 12 months preceding the claim. Arch HD shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including but not limited to loss of profits, loss of data, or business interruption, even if advised of the possibility of such damages. Nothing in these Terms limits liability for fraud, gross negligence, or wilful misconduct.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">7. Termination</h2>
            <p className="text-brand-gray leading-relaxed">
              Either party may terminate a project engagement by providing 30 days&apos; written notice. In the event of termination, the client is liable for payment of all work completed up to the termination date, plus any non-refundable third-party costs already incurred. Arch HD reserves the right to terminate engagements immediately in cases of non-payment, breach of these Terms, or conduct that is unlawful, abusive, or harmful.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">8. Governing Law</h2>
            <p className="text-brand-gray leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms shall first be subject to good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to the exclusive jurisdiction of the competent courts of Lagos State, Nigeria.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">9. Changes to These Terms</h2>
            <p className="text-brand-gray leading-relaxed">
              Arch HD reserves the right to update these Terms at any time. Material changes will be communicated by updating the &quot;Last Updated&quot; date above and, where appropriate, by direct notification to active clients. Continued use of our services after changes take effect constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h2 className="font-display text-xl font-bold mb-3">Contact Us</h2>
            <p className="text-brand-gray leading-relaxed">
              For any questions regarding these Terms and Conditions, contact us at:<br />
              <a href="mailto:support@archhd.com" className="text-brand-blue hover:underline">support@archhd.com</a><br />
              Arch HD, 4 Aderibige Street, Ikate, Lekki, Lagos, Nigeria
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
