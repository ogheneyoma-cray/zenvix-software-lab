import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 px-8 border-t border-white/10 mt-12 bg-brand-surface/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-brand-gray">
          &copy; {new Date().getFullYear()} Arch HD. All rights reserved.
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link href="/privacy" className="text-sm text-brand-gray hover:text-brand-blue transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-sm text-brand-gray hover:text-brand-blue transition-colors">Terms &amp; Conditions</Link>
          <Link href="/refund" className="text-sm text-brand-gray hover:text-brand-blue transition-colors">Refund Policy</Link>
          <Link href="/shipping" className="text-sm text-brand-gray hover:text-brand-blue transition-colors">Shipping &amp; Delivery</Link>
          <Link href="/contact" className="text-sm text-brand-gray hover:text-brand-blue transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
