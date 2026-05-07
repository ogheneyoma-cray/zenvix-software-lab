"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  ShoppingCart,
  Database,
  Shield,
  Cloud,
  Layout,
  Search,
  RefreshCw,
} from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";
import { getProductPrice } from "@/lib/currency";

const services = [
  {
    icon: <Code size={32} />,
    title: "Web Application Development",
    description: "Need a custom portal, CRM, or SaaS product? We build robust, cloud-native web apps that scale with your business.",
    features: ["Custom CRMs", "SaaS Platforms", "Client Portals", "Admin Dashboards"],
    startingPrice: 5000,
    priceSuffix: "",
  },
  {
    icon: <ShoppingCart size={32} />,
    title: "E-Commerce Development",
    description: "Maximize your online sales with custom WooCommerce, Shopify, or headless commerce builds that prioritize speed and conversion.",
    features: ["WooCommerce", "Shopify", "Headless Commerce", "Payment Integration"],
    startingPrice: 2800,
    priceSuffix: "",
  },
  {
    icon: <Layout size={32} />,
    title: "UI/UX Design",
    description: "Beautiful software is useless if people can't use it. Our design team creates intuitive, user-centric interfaces that engage and convert.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    startingPrice: 1200,
    priceSuffix: "",
  },
  {
    icon: <Database size={32} />,
    title: "API & Integrations",
    description: "Connect your tools seamlessly. We build robust integrations that make your data flow across your entire business ecosystem.",
    features: ["REST APIs", "Webhooks", "Third-Party Integrations", "Data Sync"],
    startingPrice: 850,
    priceSuffix: "",
  },
  {
    icon: <Shield size={32} />,
    title: "Maintenance & Support",
    description: "Keep your digital assets secure, fast, and optimized with our dedicated maintenance plans and priority support.",
    features: ["24/7 Monitoring", "Security Patches", "Performance Optimization", "Backup Management"],
    startingPrice: 150,
    priceSuffix: "/month",
  },
  {
    icon: <Cloud size={32} />,
    title: "Cloud Hosting & DevOps",
    description: "Deploy your applications to secure, scalable cloud environments with our expert DevOps services.",
    features: ["AWS Deployment", "Google Cloud", "Azure", "CI/CD Pipelines"],
    startingPrice: 500,
    priceSuffix: "",
  },
  {
    icon: <Search size={32} />,
    title: "SEO & Technical Optimization",
    description: "Get found online with our technical SEO services and performance optimization strategies.",
    features: ["Site Audits", "Speed Optimization", "Meta Tag Structuring", "Analytics Setup"],
    startingPrice: 400,
    priceSuffix: "",
  },
  {
    icon: <RefreshCw size={32} />,
    title: "Website Migration",
    description: "Move your site to better hosting with zero downtime. We handle everything from DNS to database migration.",
    features: ["Server Migration", "Platform Migration", "Zero Downtime", "Post-Migration Testing"],
    startingPrice: 300,
    priceSuffix: "",
  },
];

export default function ServicesPage() {
  const { currency, exchangeRate } = useCurrency();

  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-blue tracking-[0.3em] uppercase text-xs mb-4 font-body">
            What We Do
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Digital Solutions Tailored to{" "}
            <span className="bg-linear-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              You
            </span>
          </h1>
          <p className="text-brand-gray max-w-2xl mx-auto text-lg leading-relaxed">
            We provide end-to-end development services. Whether you are validating a new idea or upgrading legacy systems, 
            we have the expertise to execute flawlessly.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-white/10 p-8 rounded-2xl hover:border-brand-blue/50 transition-all bg-brand-surface/20 hover:bg-brand-surface/40 group"
            >
              <div className="text-brand-blue mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h2 className="font-display text-2xl font-bold mb-3">{service.title}</h2>
              <p className="text-brand-gray mb-4 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature) => (
                  <span key={feature} className="text-xs bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
              <p className="text-sm text-brand-blue font-semibold mt-4">
                Starting at {getProductPrice(service.startingPrice, currency, exchangeRate)}{service.priceSuffix}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-16 mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Our Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["React", "Next.js", "Node.js", "Laravel", "Python", "WordPress", "Shopify", "AWS", "MongoDB", "PostgreSQL"].map((tech) => (
              <div key={tech} className="bg-white/5 px-6 py-3 rounded-full text-brand-gray hover:text-brand-blue hover:bg-white/10 transition-all">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-linear-to-r from-brand-blue/10 to-brand-purple/10 rounded-2xl p-12"
        >
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-brand-gray mb-8 max-w-xl mx-auto">
            Let`s discuss your project and find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-linear-to-r from-brand-blue to-brand-purple text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all inline-block"
            >
              Start Your Project
            </Link>
            <Link
              href="/shop"
              className="border border-brand-blue text-brand-blue px-8 py-3 rounded-full font-bold hover:bg-brand-blue hover:text-white transition-all inline-block"
            >
              Browse Our Products
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}