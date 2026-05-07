"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Digital-Only Delivery",
    body: "Arch HD is a software development agency. We do not manufacture or ship any physical goods. Every product and service we offer — including plugins, scripts, website templates, and custom-built software — is delivered entirely through digital means.",
  },
  {
    number: "02",
    title: "Instant Downloads",
    body: "Upon successful payment for any digital product (plugins, scripts, or templates), your download link is generated immediately and displayed on the order confirmation page. A copy is also sent to the email address provided at checkout. Download links remain active for 30 days from the date of purchase. If your link expires, contact us and we will reissue it at no charge.",
  },
  {
    number: "03",
    title: "Custom Project Delivery",
    body: "For bespoke web applications, SaaS platforms, websites, and other custom software projects, delivery is handled according to the milestones defined in your individual Statement of Work (SOW) or project proposal. Deliverables are transferred via one or more of the following methods:\n• Private GitHub/GitLab repository transfer or collaborator access\n• Deployment to a staging environment for client review and sign-off\n• Direct deployment to your live production server or cloud environment (AWS, DigitalOcean, Vercel, etc.)\n\nFull source code and deployment credentials are handed over upon final payment clearance.",
  },
  {
    number: "04",
    title: "Delivery Timelines",
    body: "Timelines for all custom engagements are strictly outlined in the project proposal or SOW agreed upon before work commences. We follow an agile sprint methodology — you will receive regular staging links and progress updates throughout the build. Any changes to scope that may affect delivery timelines will be communicated in writing before work continues.",
  },
  {
    number: "05",
    title: "Email Delivery Issues",
    body: "If you do not receive your order confirmation or download link email within 15 minutes of purchase, please check your spam or promotions folder first. If it is still missing, contact us at support@archhd.com with your order details and we will resend it promptly.",
  },
  {
    number: "06",
    title: "Retainer & Ongoing Services",
    body: "For clients on monthly maintenance or retainer plans, service delivery is continuous and governed by the agreed service-level terms in your retainer contract. Monthly deliverables (performance reports, update logs, and change records) are sent to your registered email by the 5th business day of each month.",
  },
  {
    number: "07",
    title: "International Clients",
    body: "We serve clients worldwide. All digital deliverables are accessible globally with no geographic restrictions. For custom projects, all communication and handover is conducted remotely via video call, email, or our project management portal, regardless of your location.",
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
          Last updated: 7 May 2026
        </p>

        <p className="text-brand-gray text-lg leading-relaxed mb-12">
          Because Arch HD delivers software and digital services rather than physical goods, our delivery process is designed to be fast, transparent, and secure. This policy outlines exactly how and when you can expect to receive what you paid for.
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
                <h2 className="font-display text-xl font-bold mb-3">{s.title}</h2>
                <p className="text-brand-gray leading-relaxed whitespace-pre-line">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border border-brand-blue/20 bg-brand-blue/5 rounded-2xl p-8">
          <h2 className="font-display text-xl font-bold mb-3">Need Help With a Delivery?</h2>
          <p className="text-brand-gray leading-relaxed mb-6">
            If you have any questions about the delivery of your order or project, our team is ready to assist.
          </p>
          <div className="space-y-2 text-sm text-brand-gray mb-6">
            <p>✉ <a href="mailto:support@archhd.com" className="text-white hover:text-brand-blue transition-colors">support@archhd.com</a></p>
            <p>📞 <a href="tel:+2348165629781" className="text-white hover:text-brand-blue transition-colors">08165629781</a></p>
            <p>📍 4, Aderibige Street, Ikate, Lekki, Lagos, Nigeria</p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-linear-to-r from-brand-blue to-brand-purple text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-all"
          >
            Contact Support
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
