"use client";

import { motion } from "framer-motion";

export default function DeliveryPolicyPage() {
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
          Digital Delivery Policy
        </h1>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          As a software development agency, Zenvix Software Labs does not ship physical products.
        </p>
        
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">1. Digital Downloads</h2>
            <p className="text-brand-gray leading-relaxed">
              Upon successful payment for plugins or scripts, a download link will be provided immediately on the checkout confirmation page and sent to your email.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">2. Custom Project Delivery</h2>
            <p className="text-brand-gray leading-relaxed">
              Custom code, websites, and applications will be delivered digitally. Depending on the project, this may be via a secure GitHub repository, deployment to a staging server, or direct deployment to the client`s live production environment.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">3. Delivery Timelines</h2>
            <p className="text-brand-gray leading-relaxed">
              Timelines for custom services are strictly outlined in your individual project proposal or Statement of Work.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}