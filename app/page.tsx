"use client";

import Link from "next/link";
import { ArrowRight, Code, Globe, Database, Shield, Zap, GitBranch, Rocket } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    icon: <Code size={28} />,
    title: "Custom Web Development",
    desc: "From high-converting corporate sites to complex e-commerce ecosystems, we build web presences that dominate.",
  },
  {
    icon: <Globe size={28} />,
    title: "Software Engineering",
    desc: "Bespoke web applications, SaaS platforms, and MVP development tailored to your exact workflows.",
  },
  {
    icon: <Database size={28} />,
    title: "API & Integrations",
    desc: "Connecting the tools you love so your data flows seamlessly across your entire business.",
  },
  {
    icon: <Shield size={28} />,
    title: "Maintenance & Scaling",
    desc: "Keep your digital assets secure, fast, and optimized with our dedicated maintenance plans.",
  },
];

const advantages = [
  { icon: <Zap size={24} />, title: "Future-Proof Architecture", desc: "We use modern frameworks (React, Node.js, Laravel) to ensure your software is ready for tomorrow's challenges." },
  { icon: <GitBranch size={24} />, title: "Transparent Communication", desc: "No confusing tech jargon. We provide clear, weekly updates and full transparency on project timelines." },
  { icon: <Rocket size={24} />, title: "Performance First", desc: "Every line of code is optimized for speed and security, ensuring your users get a flawless experience." },
];

const process = [
  { step: "01", title: "Discovery", desc: "We dive deep into your business goals, target audience, and technical requirements." },
  { step: "02", title: "Architecture & Design", desc: "We map out user flows, wireframes, and the database architecture before writing a single line of code." },
  { step: "03", title: "Agile Development", desc: "We build your project in sprints, giving you regular staging links to review progress." },
  { step: "04", title: "QA & Launch", desc: "Rigorous testing across all devices ensures a bug-free deployment to your live server." },
];

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function HomePage() {
  return (
    <main className="bg-brand-dark text-white font-body">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 80%)" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <p className="text-brand-blue tracking-[0.3em] uppercase text-xs mb-6 font-body">
            Arch HD
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
            Engineering the<br />
            <span className="bg-linear-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              Digital Future.
            </span>
          </h1>
          <p className="text-brand-gray max-w-2xl text-lg mb-10 leading-relaxed">
            Arch HD builds scalable software, high-performance websites, and custom digital solutions that empower your business to grow without limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-linear-to-r from-brand-blue to-brand-purple text-white px-8 py-4 font-bold tracking-widest uppercase text-sm hover:opacity-90 transition-all inline-flex items-center gap-2 rounded-full"
            >
              Let's Talk Project <ArrowRight size={16} />
            </Link>
            <Link
              href="/shop"
              className="border border-brand-blue text-brand-blue px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-blue hover:text-white transition-all inline-flex items-center gap-2 rounded-full"
            >
              View Our Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SNIPPET */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Code Built for{" "}
          <span className="bg-linear-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Growth</span>
        </h2>
        <p className="text-brand-gray text-lg leading-relaxed">
          At Arch HD, we don't just write code; we solve business problems. We are a team of dedicated developers, designers, and strategists obsessed with delivering clean architecture, intuitive user experiences, and software that scales as fast as your ambitions.
        </p>
      </motion.section>

      {/* SERVICES */}
      <section className="bg-brand-surface/30 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <p className="text-brand-blue tracking-[0.3em] uppercase text-xs text-center mb-4">Expertise Across the Stack</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
              Core Services
            </h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((s) => (
              <motion.div
                variants={staggerItem}
                key={s.title}
                className="border border-white/10 p-6 hover:border-brand-blue/50 transition-all group rounded-2xl bg-white/2 hover:bg-white/5"
              >
                <div className="text-brand-blue mb-4 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-brand-gray leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="font-display text-4xl font-bold text-center mb-16"
        >
          The <span className="text-brand-blue">Arch HD Advantage</span>
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          {advantages.map((item) => (
            <motion.div variants={staggerItem} key={item.title} className="flex flex-col items-center gap-4">
              <div className="text-brand-blue bg-brand-blue/10 p-4 rounded-full mb-2 border border-brand-blue/20">
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="bg-brand-surface/30 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="font-display text-4xl font-bold text-center mb-16"
          >
            From Concept to{" "}
            <span className="text-brand-blue">Deployment</span>
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {process.map((p) => (
              <motion.div variants={staggerItem} key={p.step} className="flex gap-8 items-start border-b border-white/10 pb-8">
                <span className="font-display text-5xl font-bold text-brand-blue/40 shrink-0">
                  {p.step}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-brand-gray leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="py-32 px-6 text-center"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Ready to Build Something{" "}
          <span className="bg-linear-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Extraordinary?</span>
        </h2>
        <p className="text-brand-gray max-w-xl mx-auto mb-10 text-lg">
          Whether you need a simple website overhaul or a complex custom web app, our team is ready to engineer your success.
        </p>
        <Link
          href="/contact"
          className="bg-linear-to-r from-brand-blue to-brand-purple text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:opacity-90 transition-all inline-block rounded-full"
        >
          Request a Free Consultation
        </Link>
      </motion.section>

    </main>
  );
}