export type Product = {
  id: string;
  sku: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  category: "Web Development" | "Custom Software" | "Maintenance" | "Consulting" | "Digital Marketing" | "Retainer" | "Plugins & Scripts";
  image: string;
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
    image: `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="180" height="120" rx="8" fill="#0F172A" stroke="#3B82F6" strokeWidth="1.5"/>
      <rect x="10" y="10" width="180" height="24" rx="8" fill="#1E293B"/>
      <rect x="10" y="26" width="180" height="8" fill="#1E293B"/>
      <circle cx="26" cy="22" r="4" fill="#EF4444"/>
      <circle cx="42" cy="22" r="4" fill="#F59E0B"/>
      <circle cx="58" cy="22" r="4" fill="#22C55E"/>
      <rect x="80" y="18" width="60" height="8" rx="4" fill="#334155"/>
      <rect x="24" y="46" width="152" height="10" rx="3" fill="#3B82F6" opacity="0.8"/>
      <rect x="24" y="62" width="100" height="6" rx="3" fill="#475569"/>
      <rect x="24" y="74" width="80" height="6" rx="3" fill="#475569" opacity="0.6"/>
      <rect x="24" y="90" width="50" height="14" rx="4" fill="#3B82F6"/>
      <rect x="82" y="90" width="50" height="14" rx="4" fill="#8B5CF6" opacity="0.6"/>
      <rect x="130" y="56" width="46" height="46" rx="6" fill="#1E293B" stroke="#3B82F6" strokeWidth="1" opacity="0.8"/>
      <rect x="138" y="64" width="30" height="4" rx="2" fill="#3B82F6" opacity="0.7"/>
      <rect x="138" y="72" width="22" height="4" rx="2" fill="#475569"/>
      <rect x="138" y="80" width="26" height="4" rx="2" fill="#475569" opacity="0.6"/>
    </svg>`,
  },
  {
    id: "2",
    sku: "ZSL-WEB-002",
    name: "E-Commerce Standard Package",
    shortDesc: "Full WooCommerce store setup (up to 50 products).",
    fullDesc: "Launch your online store with ease. We handle the full WooCommerce installation, theme customization, payment gateway integration (Stripe/PayPal), and upload your first 50 products. Includes a 1-hour training session.",
    price: 2800,
    category: "Web Development",
    image: `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="100" height="100" rx="8" fill="#0F172A" stroke="#3B82F6" strokeWidth="1.5"/>
      <rect x="20" y="34" width="80" height="50" rx="4" fill="#1E293B"/>
      <rect x="26" y="40" width="36" height="36" rx="3" fill="#334155"/>
      <path d="M35 58 L44 50 L53 62 L59 55" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="68" y="42" width="26" height="4" rx="2" fill="#475569"/>
      <rect x="68" y="50" width="18" height="4" rx="2" fill="#475569" opacity="0.6"/>
      <rect x="68" y="62" width="22" height="8" rx="3" fill="#3B82F6"/>
      <rect x="20" y="90" width="80" height="8" rx="3" fill="#1E293B"/>
      <rect x="24" y="93" width="50" height="2" rx="1" fill="#3B82F6" opacity="0.8"/>
      <rect x="120" y="30" width="70" height="80" rx="8" fill="#0F172A" stroke="#8B5CF6" strokeWidth="1.5"/>
      <rect x="130" y="44" width="50" height="14" rx="3" fill="#1E293B"/>
      <path d="M136 51 L140 47 L144 51 L148 45 L152 51" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="130" y="64" width="50" height="4" rx="2" fill="#334155"/>
      <rect x="130" y="73" width="36" height="4" rx="2" fill="#334155" opacity="0.6"/>
      <rect x="130" y="84" width="50" height="14" rx="4" fill="#8B5CF6"/>
      <rect x="142" y="89" width="26" height="4" rx="2" fill="white" opacity="0.8"/>
    </svg>`,
  },
  {
    id: "3",
    sku: "ZSL-APP-003",
    name: "Custom Web App MVP",
    shortDesc: "Minimum Viable Product for your startup idea.",
    fullDesc: "Turn your concept into reality. We will build a functioning Minimum Viable Product (MVP) using React and Node.js. Includes user authentication, database setup, and core feature development to get you ready for beta testing.",
    price: 7500,
    category: "Custom Software",
    image: `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="180" height="120" rx="8" fill="#0F172A" stroke="#3B82F6" strokeWidth="1.5"/>
      <rect x="10" y="10" width="180" height="30" rx="8" fill="#0F172A"/>
      <rect x="10" y="30" width="180" height="10" fill="#0F172A"/>
      <text x="20" y="28" fontFamily="monospace" fontSize="10" fill="#3B82F6">const App = () =&gt; &#123;</text>
      <text x="28" y="42" fontFamily="monospace" fontSize="9" fill="#8B5CF6">  return &lt;Dashboard /&gt;</text>
      <text x="20" y="56" fontFamily="monospace" fontSize="10" fill="#3B82F6">&#125;</text>
      <rect x="20" y="64" width="70" height="50" rx="4" fill="#1E293B"/>
      <rect x="26" y="70" width="58" height="4" rx="2" fill="#22C55E" opacity="0.8"/>
      <rect x="26" y="79" width="42" height="4" rx="2" fill="#475569"/>
      <rect x="26" y="88" width="50" height="4" rx="2" fill="#475569" opacity="0.6"/>
      <rect x="26" y="97" width="34" height="4" rx="2" fill="#3B82F6" opacity="0.7"/>
      <rect x="100" y="64" width="80" height="22" rx="4" fill="#1E293B"/>
      <circle cx="116" cy="75" r="6" fill="#3B82F6" opacity="0.3"/>
      <circle cx="116" cy="75" r="3" fill="#3B82F6"/>
      <rect x="126" y="71" width="46" height="3" rx="1.5" fill="#475569"/>
      <rect x="126" y="77" width="32" height="3" rx="1.5" fill="#475569" opacity="0.6"/>
      <rect x="100" y="92" width="80" height="22" rx="4" fill="#1E293B"/>
      <rect x="108" y="98" width="64" height="10" rx="2" fill="#8B5CF6" opacity="0.3"/>
      <rect x="112" y="101" width="40" height="4" rx="2" fill="#8B5CF6"/>
    </svg>`,
  },
  {
    id: "4",
    sku: "ZSL-MNT-004",
    name: "Basic Website Maintenance",
    shortDesc: "Monthly retainer for updates & backups.",
    fullDesc: "Keep your site secure and running smoothly. This monthly plan includes weekly automated backups, core CMS/plugin updates, security monitoring, and up to 1 hour of content updates per month.",
    price: 150,
    category: "Maintenance",
    image: `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="70" r="50" fill="#0F172A" stroke="#3B82F6" strokeWidth="1.5"/>
      <circle cx="100" cy="70" r="36" fill="#1E293B"/>
      <path d="M100 40 L100 70 L120 70" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="100" cy="70" r="4" fill="#3B82F6"/>
      <path d="M100 38 L100 34" stroke="#475569" strokeWidth="2" strokeLinecap="round"/>
      <path d="M100 106 L100 102" stroke="#475569" strokeWidth="2" strokeLinecap="round"/>
      <path d="M68 70 L64 70" stroke="#475569" strokeWidth="2" strokeLinecap="round"/>
      <path d="M136 70 L132 70" stroke="#475569" strokeWidth="2" strokeLinecap="round"/>
      <path d="M78 48 L76 44" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M122 96 L124 100" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M122 44 L124 40" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M78 96 L76 100" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="148" cy="28" r="10" fill="#22C55E"/>
      <path d="M144 28 L147 31 L153 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>`,
  },
  {
    id: "5",
    sku: "ZSL-MNT-005",
    name: "Pro Maintenance & Support",
    shortDesc: "Premium monthly support with priority routing.",
    fullDesc: "Total peace of mind for mission-critical websites. Includes daily backups, uptime monitoring, real-time security scanning, performance optimization, and up to 3 hours of dedicated developer support per month.",
    price: 350,
    category: "Maintenance",
    image: `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="160" height="100" rx="10" fill="#0F172A" stroke="#8B5CF6" strokeWidth="1.5"/>
      <rect x="20" y="20" width="160" height="36" rx="10" fill="#1E293B"/>
      <rect x="20" y="42" width="160" height="14" fill="#1E293B"/>
      <circle cx="44" cy="38" r="12" fill="#0F172A" stroke="#8B5CF6" strokeWidth="1.5"/>
      <path d="M44 32 L44 38 L48 40" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="64" y="30" width="80" height="6" rx="3" fill="#334155"/>
      <rect x="64" y="40" width="56" height="4" rx="2" fill="#334155" opacity="0.5"/>
      <rect x="156" y="32" width="16" height="12" rx="3" fill="#22C55E" opacity="0.2"/>
      <circle cx="164" cy="38" r="3" fill="#22C55E"/>
      <rect x="34" y="70" width="36" height="36" rx="6" fill="#1E293B" stroke="#8B5CF6" strokeWidth="1"/>
      <path d="M42 88 L46 84 L52 92 L56 82" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="80" y="70" width="36" height="36" rx="6" fill="#1E293B" stroke="#3B82F6" strokeWidth="1"/>
      <circle cx="98" cy="82" r="6" fill="#3B82F6" opacity="0.3"/>
      <path d="M98 78 L98 82 L102 84" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="126" y="70" width="36" height="36" rx="6" fill="#1E293B" stroke="#22C55E" strokeWidth="1"/>
      <path d="M130 92 L134 88 L138 92 L142 84 L146 88 L150 84 L154 88 L158 84" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>`,
  },
  {
    id: "6",
    sku: "ZSL-DSN-006",
    name: "UI/UX Website Audit",
    shortDesc: "Comprehensive video audit of your current site.",
    fullDesc: "Struggling with conversions? Our UX experts will record a detailed, 20-minute video navigating your website, identifying friction points, and providing actionable design solutions to improve user experience and sales.",
    price: 250,
    category: "Consulting",
    image: `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="15" width="120" height="90" rx="8" fill="#0F172A" stroke="#3B82F6" strokeWidth="1.5"/>
      <rect x="20" y="15" width="120" height="20" rx="8" fill="#1E293B"/>
      <rect x="20" y="27" width="120" height="8" fill="#1E293B"/>
      <circle cx="34" cy="25" r="3" fill="#EF4444"/>
      <circle cx="44" cy="25" r="3" fill="#F59E0B"/>
      <circle cx="54" cy="25" r="3" fill="#22C55E"/>
      <rect x="30" y="45" width="100" height="8" rx="3" fill="#1E293B"/>
      <rect x="30" y="45" width="60" height="8" rx="3" fill="#3B82F6" opacity="0.6"/>
      <rect x="30" y="59" width="100" height="8" rx="3" fill="#1E293B"/>
      <rect x="30" y="59" width="85" height="8" rx="3" fill="#8B5CF6" opacity="0.4"/>
      <rect x="30" y="73" width="100" height="8" rx="3" fill="#1E293B"/>
      <rect x="30" y="73" width="40" height="8" rx="3" fill="#EF4444" opacity="0.5"/>
      <rect x="30" y="87" width="100" height="8" rx="3" fill="#1E293B"/>
      <rect x="30" y="87" width="75" height="8" rx="3" fill="#22C55E" opacity="0.5"/>
      <circle cx="156" cy="70" r="34" fill="#0F172A" stroke="#8B5CF6" strokeWidth="1.5"/>
      <circle cx="156" cy="62" r="14" fill="#1E293B" stroke="#8B5CF6" strokeWidth="1"/>
      <circle cx="156" cy="62" r="5" fill="#8B5CF6" opacity="0.4"/>
      <circle cx="156" cy="62" r="2" fill="#8B5CF6"/>
      <path d="M134 88 C134 80 144 74 156 74 C168 74 178 80 178 88" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>`,
  },
  {
    id: "7",
    sku: "ZSL-DEV-007",
    name: "API Integration Service",
    shortDesc: "Connect your app with 3rd-party software.",
    fullDesc: "Seamlessly connect your existing website or application with a third-party service (e.g., Salesforce, HubSpot, Twilio, or custom REST APIs). Includes secure authentication setup and data mapping.",
    price: 850,
    category: "Custom Software",
    image: `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="45" width="50" height="50" rx="8" fill="#0F172A" stroke="#3B82F6" strokeWidth="1.5"/>
      <rect x="18" y="55" width="34" height="6" rx="3" fill="#3B82F6" opacity="0.6"/>
      <rect x="18" y="65" width="26" height="4" rx="2" fill="#475569"/>
      <rect x="18" y="73" width="30" height="4" rx="2" fill="#475569" opacity="0.6"/>
      <rect x="18" y="81" width="22" height="4" rx="2" fill="#475569" opacity="0.4"/>
      <rect x="140" y="45" width="50" height="50" rx="8" fill="#0F172A" stroke="#8B5CF6" strokeWidth="1.5"/>
      <rect x="148" y="55" width="34" height="6" rx="3" fill="#8B5CF6" opacity="0.6"/>
      <rect x="148" y="65" width="26" height="4" rx="2" fill="#475569"/>
      <rect x="148" y="73" width="30" height="4" rx="2" fill="#475569" opacity="0.6"/>
      <rect x="148" y="81" width="22" height="4" rx="2" fill="#475569" opacity="0.4"/>
      <rect x="80" y="60" width="40" height="20" rx="6" fill="#1E293B" stroke="#22C55E" strokeWidth="1.5"/>
      <text x="87" y="73" fontFamily="monospace" fontSize="8" fill="#22C55E">API</text>
      <path d="M60 65 L80 65" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2"/>
      <path d="M76 62 L80 65 L76 68" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M120 75 L140 75" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2"/>
      <path d="M124 72 L120 75 L124 78" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M60 75 L70 75" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" opacity="0.6"/>
      <path d="M130 65 L140 65" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" opacity="0.6"/>
    </svg>`,
  },
  {
    id: "8",
    sku: "ZSL-MNT-008",
    name: "Website Speed Optimization",
    shortDesc: "Boost your site speed for better SEO.",
    fullDesc: "Slow websites lose customers. We will optimize your images, minify CSS/JS, implement advanced caching, and configure a CDN to ensure your website scores 90+ on Google PageSpeed Insights.",
    price: 400,
    category: "Maintenance",
    image: `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="75" r="55" fill="#0F172A" stroke="#22C55E" strokeWidth="1.5"/>
      <path d="M55 75 A45 45 0 0 1 145 75" stroke="#1E293B" strokeWidth="8" strokeLinecap="round"/>
      <path d="M55 75 A45 45 0 0 1 124 42" stroke="#22C55E" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="100" cy="75" r="30" fill="#1E293B"/>
      <path d="M88 55 L112 75 L88 75" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="100" cy="75" r="4" fill="#22C55E"/>
      <text x="86" y="100" fontFamily="monospace" fontSize="12" fill="#22C55E" fontWeight="bold">98</text>
      <rect x="150" y="15" width="38" height="20" rx="4" fill="#22C55E" opacity="0.15" stroke="#22C55E" strokeWidth="1"/>
      <text x="157" y="28" fontFamily="monospace" fontSize="8" fill="#22C55E">FAST</text>
      <path d="M18 40 L28 40" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <path d="M14 50 L28 50" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
      <path d="M18 60 L28 60" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" opacity="0.2"/>
    </svg>`,
  },
  {
    id: "9",
    sku: "ZSL-MKT-009",
    name: "SEO Technical Setup",
    shortDesc: "Foundational technical SEO for your website.",
    fullDesc: "We audit and optimize the backend of your website for search engines. Includes sitemap generation, robots.txt configuration, meta tag structuring, and Google Search Console/Analytics integration.",
    price: 500,
    category: "Digital Marketing",
    image: `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="20" width="172" height="100" rx="8" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.5"/>
      <circle cx="60" cy="66" r="26" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5"/>
      <circle cx="60" cy="66" r="10" fill="#F59E0B" opacity="0.2"/>
      <circle cx="60" cy="66" r="18" stroke="#F59E0B" strokeWidth="1" opacity="0.3" strokeDasharray="4 3"/>
      <path d="M78 80 L96 98" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
      <path d="M92 96 L100 92 L96 84" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="110" y="32" width="66" height="8" rx="3" fill="#F59E0B" opacity="0.8"/>
      <rect x="110" y="46" width="54" height="6" rx="2" fill="#475569"/>
      <rect x="110" y="58" width="60" height="6" rx="2" fill="#475569" opacity="0.7"/>
      <rect x="110" y="72" width="46" height="6" rx="2" fill="#475569" opacity="0.5"/>
      <rect x="110" y="86" width="52" height="6" rx="2" fill="#475569" opacity="0.3"/>
      <rect x="110" y="100" width="40" height="6" rx="2" fill="#475569" opacity="0.2"/>
      <circle cx="60" cy="66" r="3" fill="#F59E0B"/>
    </svg>`,
  },
  {
    id: "10",
    sku: "ZSL-RET-010",
    name: "Developer Retainer (10 Hrs)",
    shortDesc: "Pre-paid block of development hours.",
    fullDesc: "Need ongoing, ad-hoc development work? Purchase a 10-hour block of time to use for bug fixes, custom feature additions, or consulting. Hours never expire and progress is tracked transparently.",
    price: 950,
    category: "Retainer",
    image: `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="160" height="100" rx="10" fill="#0F172A" stroke="#A78BFA" strokeWidth="1.5"/>
      <rect x="36" y="40" width="128" height="16" rx="4" fill="#1E293B"/>
      <rect x="40" y="44" width="90" height="8" rx="3" fill="#A78BFA" opacity="0.7"/>
      <rect x="134" y="44" width="26" height="8" rx="3" fill="#1E293B"/>
      <text x="138" y="51" fontFamily="monospace" fontSize="7" fill="#A78BFA">10 HRS</text>
      <rect x="36" y="64" width="26" height="26" rx="4" fill="#1E293B" stroke="#A78BFA" strokeWidth="1"/>
      <text x="42" y="80" fontFamily="monospace" fontSize="10" fill="#A78BFA" fontWeight="bold">01</text>
      <rect x="68" y="64" width="26" height="26" rx="4" fill="#1E293B" stroke="#A78BFA" strokeWidth="1"/>
      <text x="74" y="80" fontFamily="monospace" fontSize="10" fill="#A78BFA" fontWeight="bold">02</text>
      <rect x="100" y="64" width="26" height="26" rx="4" fill="#A78BFA" opacity="0.2" stroke="#A78BFA" strokeWidth="1"/>
      <text x="106" y="80" fontFamily="monospace" fontSize="10" fill="#A78BFA" fontWeight="bold">03</text>
      <rect x="132" y="64" width="26" height="26" rx="4" fill="#1E293B" stroke="#334155" strokeWidth="1" opacity="0.5"/>
      <text x="138" y="80" fontFamily="monospace" fontSize="10" fill="#475569" fontWeight="bold">04</text>
      <rect x="36" y="100" width="128" height="8" rx="3" fill="#1E293B"/>
      <rect x="36" y="100" width="30" height="8" rx="3" fill="#A78BFA" opacity="0.5"/>
      <text x="64" y="106" fontFamily="monospace" fontSize="6" fill="#A78BFA">3 / 10 hrs used</text>
    </svg>`,
  },
  {
    id: "11",
    sku: "ZSL-PLG-011",
    name: "Arch HD Custom Form Builder",
    shortDesc: "Premium form building plugin with webhook support.",
    fullDesc: "Our proprietary, lightweight form builder plugin for WordPress. Build complex, multi-step forms with drag-and-drop ease. Includes native webhook support to send lead data instantly to any CRM.",
    price: 49,
    category: "Plugins & Scripts",
    image: `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="170" height="110" rx="8" fill="#0F172A" stroke="#EC4899" strokeWidth="1.5"/>
      <rect x="30" y="30" width="140" height="14" rx="4" fill="#1E293B"/>
      <rect x="36" y="35" width="60" height="4" rx="2" fill="#EC4899" opacity="0.7"/>
      <rect x="30" y="50" width="140" height="14" rx="4" fill="#1E293B"/>
      <rect x="36" y="54" width="86" height="6" rx="3" fill="#334155"/>
      <rect x="30" y="70" width="140" height="14" rx="4" fill="#1E293B"/>
      <rect x="36" y="74" width="50" height="6" rx="3" fill="#334155"/>
      <rect x="92" y="70" width="78" height="14" rx="4" fill="#1E293B"/>
      <rect x="98" y="74" width="50" height="6" rx="3" fill="#334155"/>
      <rect x="30" y="90" width="60" height="22" rx="5" fill="#EC4899" opacity="0.9"/>
      <rect x="38" y="98" width="44" height="6" rx="3" fill="white" opacity="0.8"/>
      <rect x="100" y="90" width="70" height="22" rx="5" fill="#1E293B" stroke="#EC4899" strokeWidth="1"/>
      <rect x="108" y="98" width="54" height="6" rx="3" fill="#EC4899" opacity="0.4"/>
      <circle cx="168" cy="20" r="12" fill="#EC4899" opacity="0.15" stroke="#EC4899" strokeWidth="1"/>
      <path d="M163 20 L166 23 L173 16" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>`,
  },
  {
    id: "12",
    sku: "ZSL-DEV-012",
    name: "Server Migration Service",
    shortDesc: "Safe, zero-downtime website transfer.",
    fullDesc: "Upgrading your hosting? We will migrate your entire website, database, and emails to a new server or cloud environment (AWS, DigitalOcean, Cloudways) with absolutely zero downtime for your users.",
    price: 300,
    category: "Web Development",
    image: `<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="30" width="70" height="80" rx="8" fill="#0F172A" stroke="#3B82F6" strokeWidth="1.5"/>
      <rect x="18" y="40" width="54" height="10" rx="3" fill="#1E293B"/>
      <circle cx="24" cy="45" r="3" fill="#3B82F6"/>
      <rect x="30" y="43" width="36" height="4" rx="2" fill="#475569"/>
      <rect x="18" y="56" width="54" height="10" rx="3" fill="#1E293B"/>
      <circle cx="24" cy="61" r="3" fill="#3B82F6" opacity="0.6"/>
      <rect x="30" y="59" width="28" height="4" rx="2" fill="#475569" opacity="0.7"/>
      <rect x="18" y="72" width="54" height="10" rx="3" fill="#1E293B"/>
      <circle cx="24" cy="77" r="3" fill="#3B82F6" opacity="0.3"/>
      <rect x="30" y="75" width="32" height="4" rx="2" fill="#475569" opacity="0.5"/>
      <rect x="18" y="92" width="54" height="10" rx="3" fill="#1E293B" opacity="0.5"/>
      <rect x="120" y="30" width="70" height="80" rx="8" fill="#0F172A" stroke="#22C55E" strokeWidth="1.5"/>
      <rect x="128" y="40" width="54" height="10" rx="3" fill="#1E293B"/>
      <circle cx="134" cy="45" r="3" fill="#22C55E"/>
      <rect x="140" y="43" width="36" height="4" rx="2" fill="#475569"/>
      <rect x="128" y="56" width="54" height="10" rx="3" fill="#1E293B"/>
      <circle cx="134" cy="61" r="3" fill="#22C55E" opacity="0.6"/>
      <rect x="140" y="59" width="28" height="4" rx="2" fill="#475569" opacity="0.7"/>
      <rect x="128" y="72" width="54" height="10" rx="3" fill="#1E293B"/>
      <circle cx="134" cy="77" r="3" fill="#22C55E" opacity="0.3"/>
      <rect x="140" y="75" width="32" height="4" rx="2" fill="#475569" opacity="0.5"/>
      <path d="M82 65 L90 70 L82 75" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M118 75 L110 70 L118 65" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M82 70 L118 70" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 2"/>
    </svg>`,
  },
];
