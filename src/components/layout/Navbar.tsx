import Link from 'next/link';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--card-border)] transition-colors">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-[var(--foreground)]">Dine</span>
          <span className="text-gold">3D</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-400 hover:text-gold transition-colors">Features</Link>
          <Link href="#pricing" className="text-gray-400 hover:text-gold transition-colors">Pricing</Link>
          <Link href="#calculator" className="text-gray-400 hover:text-gold transition-colors">Calculator</Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="#calculator">
            <Button variant="primary" className="px-6 py-2 text-sm">Create Proposal</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
