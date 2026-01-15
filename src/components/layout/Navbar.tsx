'use client';
import Link from 'next/link';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--card-border)] transition-colors">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-[var(--foreground)]">Dine</span>
          <span className="text-gold">3D</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-400 hover:text-gold transition-colors">Features</Link>
          <Link href="#pricing" className="text-gray-400 hover:text-gold transition-colors">Pricing</Link>
          <Link href="#calculator" className="text-gray-400 hover:text-gold transition-colors">Calculator</Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <div className="hidden md:block">
            <Link href="#calculator">
              <Button variant="primary" className="px-6 py-2 text-sm">Create Proposal</Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[var(--foreground)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--background)] border-b border-[var(--card-border)] animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-4 gap-4">
            <Link href="#features" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-gold p-2">Features</Link>
            <Link href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-gold p-2">Pricing</Link>
            <Link href="#calculator" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-gold p-2">Calculator</Link>
            <Link href="#calculator" onClick={() => setIsMenuOpen(false)}>
              <Button variant="primary" className="w-full py-4">Create Proposal</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
