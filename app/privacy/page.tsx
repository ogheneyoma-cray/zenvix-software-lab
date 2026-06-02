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
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Privacy Policy
        </h1>
        <p className="text-brand-gray text-sm mb-10">
          <strong>Effective Date:</strong> 7 May 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> 7 May 2026
        </p>

        <p className="text-brand-gray text-lg leading-relaxed mb-10">
          At Arch HD, your privacy is not an afterthought — it is a core principle. This Privacy Policy explains in plain language what personal information we collect, how we use it, who we share it with, how we protect it, and what rights you have over it. By using our website or engaging our services, you agree to the practices described in this policy.
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">1. Information We Collect</h2>
            <p className="text-brand-gray leading-relaxed mb-3">
              We collect information in two ways: information you actively provide to us and information collected automatically when you use our site.
            </p>
            <p className="text-brand-gray leading-relaxed mb-3">
              <strong className="text-white">Information You Provide:</strong> When you fill out a contact form, request a consultation, purchase a service, or communicate with us by email or phone, you may provide your full name, email address, phone number, company name, billing address, and payment details. We only collect what is necessary to deliver the requested service.
            </p>
            <p className="text-brand-gray leading-relaxed">
              <strong className="text-white">Information Collected Automatically:</strong> When you visit our website, we may automatically collect technical data such as your IP address, browser type, operating system, referring URLs, pages visited, and time spent on pages. This data is collected using standard web analytics tools and cookies and is used in aggregated, non-identifying form to improve our website.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">2. How We Use Your Information</h2>
            <p className="text-brand-gray leading-relaxed mb-3">
              Your information is used solely to operate, improve, and secure our services. Specifically, we use your data to:
            </p>
            <ul className="text-brand-gray leading-relaxed space-y-2 list-disc list-inside">
              <li>Respond to your inquiries and deliver our development services</li>
              <li>Process payments and send transaction confirmations</li>
              <li>Communicate project milestones, updates, and deliverables</li>
              <li>Send service-related emails (invoices, support responses, policy changes)</li>
              <li>Improve and optimize our website through aggregated analytics data</li>
              <li>Comply with legal obligations and resolve disputes</li>
            </ul>
            <p className="text-brand-gray leading-relaxed mt-3">
              We do not use your personal information for behavioural advertising, profiling, or automated decision-making that produces legal effects.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">3. Sharing Your Information</h2>
            <p className="text-brand-gray leading-relaxed mb-3">
              We do not sell, rent, or trade your personal information to any third party for marketing purposes, ever. We may share your information only in the following limited circumstances:
            </p>
            <ul className="text-brand-gray leading-relaxed space-y-2 list-disc list-inside">
              <li><strong className="text-white">Service Providers:</strong> Trusted third-party vendors who assist us in operating our business (e.g., payment processors, cloud hosting providers, email platforms). These parties are contractually bound to handle your data securely and only for the purpose of providing their service to us.</li>
              <li><strong className="text-white">Legal Compliance:</strong> Where required by applicable law, regulation, court order, or governmental authority.</li>
              <li><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or sale of company assets, your data may be transferred as part of that transaction, with continued obligations under this policy.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">4. Data Security</h2>
            <p className="text-brand-gray leading-relaxed">
              We implement industry-standard technical and organisational security measures to protect your personal data from unauthorised access, disclosure, alteration, or destruction. All data transmitted through our website and checkout process is encrypted using 256-bit SSL/TLS encryption. Payment card details are processed through PCI-DSS compliant payment processors and are never stored on our servers. Access to personal data within our organisation is restricted on a need-to-know basis.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">5. Cookies</h2>
            <p className="text-brand-gray leading-relaxed">
              Our website uses cookies — small text files stored on your device — to enhance your browsing experience and understand how visitors use our site. We use session cookies (which expire when you close your browser) and persistent cookies (which remain until deleted). You can control and disable cookies through your browser settings; however, doing so may affect the functionality of certain parts of our site. We do not use third-party advertising cookies or cross-site tracking technologies.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">6. Data Retention</h2>
            <p className="text-brand-gray leading-relaxed">
              We retain your personal information for as long as is necessary to fulfil the purposes for which it was collected, including satisfying any legal, accounting, or reporting obligations. Client project records are typically retained for 5 years following project completion. You may request deletion of your data at any time by contacting us, subject to our legal retention obligations.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">7. Your Rights</h2>
            <p className="text-brand-gray leading-relaxed mb-3">
              Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal data. You may also have the right to data portability and to withdraw consent where processing is based on consent. To exercise any of these rights, please contact us at <a href="mailto:support@archhd.com" className="text-brand-blue hover:underline">support@archhd.com</a>. We will respond to all requests within 30 days.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-3">8. Changes to This Policy</h2>
            <p className="text-brand-gray leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make material changes, we will update the &quot;Last Updated&quot; date at the top of this page. We encourage you to review this policy periodically. Continued use of our services after changes are posted constitutes your acceptance of the revised policy.
            </p>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h2 className="font-display text-xl font-bold mb-3">Contact Us</h2>
            <p className="text-brand-gray leading-relaxed">
              If you have questions or concerns about this Privacy Policy or how your data is handled, please contact us at:<br />
              <a href="mailto:support@archhd.com" className="text-brand-blue hover:underline">support@archhd.com</a><br />
              Arch HD, 4 Aderibige Street, Ikate, Lekki, Lagos, Nigeria
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
