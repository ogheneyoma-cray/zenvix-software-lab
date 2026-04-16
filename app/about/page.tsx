"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-brand-blue tracking-[0.3em] uppercase text-xs mb-4">Who We Are</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-10 leading-tight">
          Engineering Excellence, Delivered.
        </h1>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Zenvix Software Labs was founded on a simple principle: technology should accelerate your business, not hold it back. Headquartered at the intersection of design and engineering, we are a digital product agency that partners with startups, scale-ups, and established enterprises to navigate the complexities of the digital landscape.
        </p>
        
        <h2 className="font-display text-3xl font-bold mt-12 mb-6 text-brand-blue">Our Mission</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-12">
          To bridge the gap between complex business challenges and elegant, scalable technological solutions. We strive to be the invisible technical engine behind our clients' greatest successes.
        </p>
        
        <h2 className="font-display text-3xl font-bold mb-6 text-brand-blue">The Zenvix Philosophy</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-display text-xl font-bold mb-2">Quality over Quantity</h3>
            <p className="text-brand-gray leading-relaxed">We take on a limited number of projects to ensure every client gets our absolute best code.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold mb-2">Security by Default</h3>
            <p className="text-brand-gray leading-relaxed">In an era of constant digital threats, security is baked into our development lifecycle from day one.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold mb-2">Continuous Innovation</h3>
            <p className="text-brand-gray leading-relaxed">The tech world moves fast. We constantly upskill our team to bring you the latest, most efficient development methodologies.</p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}