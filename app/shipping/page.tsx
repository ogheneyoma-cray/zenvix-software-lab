"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Digital-Only Delivery",
    body: "Arch HD is a software development and digital services agency. We do not manufacture or ship any physical goods. Every product and service we offer — including plugins, scripts, website templates, maintenance plans, and custom-built software — is delivered entirely through digital means. There are no shipping costs, no customs delays, and no geographic restrictions on receiving what you purchase from us.",
  },
  {
    number: "02",
    title: "Instant Downloads for Digital Products",
    body: "Upon successful payment for any standalone digital product — such as the Arch HD Custom Form Builder plugin or any script from our catalogue — your secure download link is generated immediately and displayed on the order confirmation page. A copy is simultaneously sent to the email address you provided at checkout. Download links remain active for 30 days from the date of purchase. If your link has expired or you have not received your confirmation email, please check your spam or promotions folder. If it is still missing, contact us at support@archhd.com with your order details and we will reissue the link at no charge within 1 business day.",
  },
  {
    number: "03",
    title: "Custom Project Delivery",
    body: "For bespoke web applications, SaaS platforms, corporate websites, and other custom software projects, delivery is handled according to the milestones defined in your individual Statement of Work (SOW) or project proposal agreed upon before work commences. Depending on the nature of the project, deliverables are transferred via:\n• A private GitHub or GitLab repository transfer or collaborator access invitation\n• Deployment to a staging environment for client review and sign-off before going live\n• Direct deployment to your production server, cloud environment (AWS, DigitalOcean, etc.), or hosting platform\n\nFull source code, deployment credentials, and any relevant documentation are handed over in full upon final payment clearance.",
  },
  {
    number: "04",
    title: "Project Delivery Timelines",
    body: "Timelines for all custom engagements are clearly outlined in the project proposal or SOW before any work begins. We follow an agile sprint methodology, which means you receive regular staging links and progress updates throughout the build — you are never left in the dark. Standard fixed-price packages such as the Basic Business Website have an estimated delivery of 14 days from the project kickoff date. Any changes to scope requested after commencement that may impact the delivery timeline will be communicated in writing and agreed upon by both parties before work continues.",
  },
  {
    number: "05",
    title: "Retainer &amp; Ongoing Service Delivery",
    body: "For clients on monthly maintenance plans or ongoing development retainers, service delivery is continuous and governed by the agreed service-level terms in your retainer agreement. Monthly service reports — including performance summaries, security update logs, and change records — are delivered to your registered email address by the 5th business day of each month. Developer retainer hours are available on demand; once you engage a retainer, you can request work at any time and track progress through our project management portal.",
  },
  {
    number: "06",
    title: "International Clients",
    body: "We proudly serve clients across Africa, Europe, North America, and beyond. Because all our deliverables are digital, there are no geographic restrictions, import duties, or international shipping delays. All communication, file handover, and remote collaboration are conducted securely via email, video conference, and our project management tools, regardless of your location. Payments are accepted in USD and Nigerian Naira (NGN), and our currency converter on the website reflects live exchange rates so you always know exactly what you are paying.",
  },
  {
    number: "07",
    title: "Delivery Confirmation &amp; Acceptance",
    body: "Upon delivery of any project milestone or final deliverable, you will receive a formal delivery notification by email. You have a review period — as defined in your SOW (typically 5–7 business days) — to test and provide feedback. If no feedback is received within the review period, the deliverable is deemed accepted. Once accepted, any new changes or additions are treated as a new scope request and handled separately. For digital downloads, delivery is confirmed automatically at the point of download or access of the secure link.",
  },
];

export default function ShippingPage() {
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
          Shipping &amp; Delivery Policy
        </h1>
        <p className="text-brand-gray text-sm mb-10">
          <strong>Effective Date:</strong> 7 May 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> 7 May 2026
        </p>

        <p className="text-brand-gray text-lg leading-relaxed mb-12">
          Because Arch HD delivers software and digital services rather than physical goods, our delivery process is designed to be fast, transparent, and globally accessible. This policy outlines exactly how and when you can expect to receive what you have paid for, regardless of your location.
        </p>

        <div className="space-y-10">
          {sections.map((s) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex gap-6 pb-10 border-b border-white/10 last:border-0"
            >
              <span className="font-display text-4xl font-bold text-brand-blue/30 shrink-0 leading-none mt-1">
                {s.number}
              </span>
              <div>
                <h2
                  className="font-display text-xl font-bold mb-3"
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p className="text-brand-gray leading-relaxed whitespace-pre-line">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border border-brand-blue/20 bg-brand-blue/5 rounded-2xl p-8">
          <h2 className="font-display text-xl font-bold mb-3">Need Help With a Delivery?</h2>
          <p className="text-brand-gray leading-relaxed mb-6">
            If you have any questions about the delivery of your order or project, our support team is ready to assist within 1–2 business days.
          </p>
          <div className="space-y-2 text-sm text-brand-gray mb-6">
            <p>✉ <a href="mailto:support@archhd.com" className="text-white hover:text-brand-blue transition-colors">support@archhd.com</a></p>
            <p>📞 <a href="tel:+2348165629781" className="text-white hover:text-brand-blue transition-colors">+234 816 562 9781</a></p>
            <p>📍 4, Aderibige Street, Ikate, Lekki, Lagos, Nigeria</p>
            <p>🕐 Monday – Friday, 9:00 AM – 6:00 PM WAT</p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-brand-blue to-brand-purple text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-all"
          >
            Contact Support
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
