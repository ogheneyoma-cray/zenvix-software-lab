export type Product = {
  id: string;
  sku: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  category: "Web Development" | "Custom Software" | "Maintenance" | "Consulting" | "Digital Marketing" | "Retainer" | "Plugins & Scripts";
};

export const products: Product[] = [
  {
    id: "1",
    sku: "ZSL-WEB-001",
    name: "Basic Business Website",
    shortDesc: "5-page responsive corporate website.",
    fullDesc: "A lightning-fast, 5-page WordPress website tailored to your brand. Includes a homepage, about page, services, blog, and a contact form. Fully responsive, SEO-ready, and built for maximum conversion. Delivery in 14 days.",
    price: 1500,
    category: "Web Development",
  },
  {
    id: "2",
    sku: "ZSL-WEB-002",
    name: "E-Commerce Standard Package",
    shortDesc: "Full WooCommerce store setup (up to 50 products).",
    fullDesc: "Launch your online store with ease. We handle the full WooCommerce installation, theme customization, payment gateway integration (Stripe/PayPal), and upload your first 50 products. Includes a 1-hour training session.",
    price: 2800,
    category: "Web Development",
  },
  {
    id: "3",
    sku: "ZSL-APP-003",
    name: "Custom Web App MVP",
    shortDesc: "Minimum Viable Product for your startup idea.",
    fullDesc: "Turn your concept into reality. We will build a functioning Minimum Viable Product (MVP) using React and Node.js. Includes user authentication, database setup, and core feature development to get you ready for beta testing.",
    price: 7500,
    category: "Custom Software",
  },
  {
    id: "4",
    sku: "ZSL-MNT-004",
    name: "Basic Website Maintenance",
    shortDesc: "Monthly retainer for updates & backups.",
    fullDesc: "Keep your site secure and running smoothly. This monthly plan includes weekly automated backups, core CMS/plugin updates, security monitoring, and up to 1 hour of content updates per month.",
    price: 150,
    category: "Maintenance",
  },
  {
    id: "5",
    sku: "ZSL-MNT-005",
    name: "Pro Maintenance & Support",
    shortDesc: "Premium monthly support with priority routing.",
    fullDesc: "Total peace of mind for mission-critical websites. Includes daily backups, uptime monitoring, real-time security scanning, performance optimization, and up to 3 hours of dedicated developer support per month.",
    price: 350,
    category: "Maintenance",
  },
  {
    id: "6",
    sku: "ZSL-DSN-006",
    name: "UI/UX Website Audit",
    shortDesc: "Comprehensive video audit of your current site.",
    fullDesc: "Struggling with conversions? Our UX experts will record a detailed, 20-minute video navigating your website, identifying friction points, and providing actionable design solutions to improve user experience and sales.",
    price: 250,
    category: "Consulting",
  },
  {
    id: "7",
    sku: "ZSL-DEV-007",
    name: "API Integration Service",
    shortDesc: "Connect your app with 3rd-party software.",
    fullDesc: "Seamlessly connect your existing website or application with a third-party service (e.g., Salesforce, HubSpot, Twilio, or custom REST APIs). Includes secure authentication setup and data mapping.",
    price: 850,
    category: "Custom Software",
  },
  {
    id: "8",
    sku: "ZSL-MNT-008",
    name: "Website Speed Optimization",
    shortDesc: "Boost your site speed for better SEO.",
    fullDesc: "Slow websites lose customers. We will optimize your images, minify CSS/JS, implement advanced caching, and configure a CDN to ensure your website scores 90+ on Google PageSpeed Insights.",
    price: 400,
    category: "Maintenance",
  },
  {
    id: "9",
    sku: "ZSL-MKT-009",
    name: "SEO Technical Setup",
    shortDesc: "Foundational technical SEO for your website.",
    fullDesc: "We audit and optimize the backend of your website for search engines. Includes sitemap generation, robots.txt configuration, meta tag structuring, and Google Search Console/Analytics integration.",
    price: 500,
    category: "Digital Marketing",
  },
  {
    id: "10",
    sku: "ZSL-RET-010",
    name: "Developer Retainer (10 Hrs)",
    shortDesc: "Pre-paid block of development hours.",
    fullDesc: "Need ongoing, ad-hoc development work? Purchase a 10-hour block of time to use for bug fixes, custom feature additions, or consulting. Hours never expire and progress is tracked transparently.",
    price: 950,
    category: "Retainer",
  },
  {
    id: "11",
    sku: "ZSL-PLG-011",
    name: "Zenvix Custom Form Builder",
    shortDesc: "Premium form building plugin with webhook support.",
    fullDesc: "Our proprietary, lightweight form builder plugin for WordPress. Build complex, multi-step forms with drag-and-drop ease. Includes native webhook support to send lead data instantly to any CRM.",
    price: 49,
    category: "Plugins & Scripts",
  },
  {
    id: "12",
    sku: "ZSL-DEV-012",
    name: "Server Migration Service",
    shortDesc: "Safe, zero-downtime website transfer.",
    fullDesc: "Upgrading your hosting? We will migrate your entire website, database, and emails to a new server or cloud environment (AWS, DigitalOcean, Cloudways) with absolutely zero downtime for your users.",
    price: 300,
    category: "Web Development",
  },
];