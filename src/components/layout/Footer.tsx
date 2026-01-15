import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--card-border)] py-12 transition-colors">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="text-2xl font-bold mb-4 block">
              <span className="text-[var(--foreground)]">Dine</span>
              <span className="text-gold">3D</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Revolutionizing restaurant menus with AR, 3D visualization, and Voice AI technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-[var(--foreground)] font-semibold mb-4">Proposal Details</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#features" className="hover:text-gold">Value Proposition</Link></li>
              <li><Link href="#pricing" className="hover:text-gold">Investment Options</Link></li>
              <li><Link href="#calculator" className="hover:text-gold">ROI Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--foreground)] font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#faq" className="hover:text-gold">FAQ</Link></li>
              <li><Link href="#contact" className="hover:text-gold">Contact Support</Link></li>
              <li><Link href="#" className="hover:text-gold">SLA & Terms</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--foreground)] font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>help@dine3d.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[var(--card-border)] flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Dine3D. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gold">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
