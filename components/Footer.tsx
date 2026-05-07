import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-8 border-t border-white/10 mt-12 bg-brand-surface/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-brand-gray">
          &copy; {new Date().getFullYear()} Arch HD
        </div>
        <div className="space-x-6 mt-4 md:mt-0 flex items-center flex-wrap justify-center gap-4">
          <Link href="/privacy" className="text-sm text-brand-gray hover:text-brand-blue transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-sm text-brand-gray hover:text-brand-blue transition-colors">Terms of Service</Link>
          <Link href="/refund" className="text-sm text-brand-gray hover:text-brand-blue transition-colors">Refund Policy</Link>
          <Link href="/contact" className="text-sm text-brand-gray hover:text-brand-blue transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}