"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto"
      >
        <p className="text-brand-blue tracking-[0.3em] uppercase text-xs mb-4">Get In Touch</p>
        <h1 className="font-display text-5xl font-bold mb-6">
          Let`s Engineer Your Success
        </h1>
        <p className="text-brand-gray mb-10 leading-relaxed">
          Ready to bring your digital vision to life? Whether you need a simple website or a complex web application, our team is ready to help you scale.
        </p>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="name"
            aria-label="Your Name"
            placeholder="Your Name"
            className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-brand-gray focus:outline-none focus:border-brand-blue transition-colors rounded-lg"
          />
          <input
            type="email"
            name="email"
            aria-label="Email Address"
            placeholder="Email Address"
            className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-brand-gray focus:outline-none focus:border-brand-blue transition-colors rounded-lg"
          />
          <input
            type="text"
            name="company"
            aria-label="Company (Optional)"
            placeholder="Company (Optional)"
            className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-brand-gray focus:outline-none focus:border-brand-blue transition-colors rounded-lg"
          />
          <textarea
            name="message"
            aria-label="Your message"
            rows={5}
            placeholder="Tell us about your project..."
            className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-brand-gray focus:outline-none focus:border-brand-blue transition-colors resize-none rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-linear-to-r from-brand-blue to-brand-purple text-white py-4 font-bold uppercase tracking-widest hover:opacity-90 transition-colors rounded-lg"
          >
            Request Free Consultation
          </button>
        </form>

        <div className="mt-12 border border-white/10 rounded-2xl p-8 bg-white/2 space-y-5">
          <h2 className="font-display text-xl font-bold text-white mb-2">Contact Details</h2>

          <div className="flex items-start gap-3">
            <span className="text-brand-blue mt-0.5">✉</span>
            <div>
              <p className="text-xs text-brand-gray uppercase tracking-widest mb-1">Email</p>
              <a href="mailto:support@archhd.com" className="text-white hover:text-brand-blue transition-colors">
                support@archhd.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-brand-blue mt-0.5">📞</span>
            <div>
              <p className="text-xs text-brand-gray uppercase tracking-widest mb-1">Phone</p>
              <a href="tel:+2348165629781" className="text-white hover:text-brand-blue transition-colors">
                08165629781
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-brand-blue mt-0.5">📍</span>
            <div>
              <p className="text-xs text-brand-gray uppercase tracking-widest mb-1">Address</p>
              <address className="text-white not-italic leading-relaxed">
                4, Aderibige Street<br />
                Ikate, Lekki<br />
                Lagos, Nigeria
              </address>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-brand-blue mt-0.5">🕐</span>
            <div>
              <p className="text-xs text-brand-gray uppercase tracking-widest mb-1">Hours</p>
              <p className="text-white">Monday – Friday, 9:00 AM – 6:00 PM WAT</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-brand-blue mt-0.5">🌐</span>
            <div>
              <p className="text-xs text-brand-gray uppercase tracking-widest mb-1">Availability</p>
              <p className="text-white">Remote &amp; onsite consultations</p>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}