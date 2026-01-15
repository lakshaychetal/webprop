'use client';
import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--background)] transition-colors">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-12">
        <div className="max-w-4xl z-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-semibold mb-6 tracking-wide uppercase">
            Strategic Partnership Proposal
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-[var(--foreground)] block mb-2">Empower Your Clients with</span>
            <span className="text-gold">Next-Gen Restaurant Tech</span>
          </h1>
          <p className="text-[var(--subtext)] text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
             Drive 20-30% revenue growth for your restaurant clients with AI Voice Ordering, 3D Menu Visualization, and seamless RMS integration — the complete tech stack for modern dining.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#pricing">
              <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg">View Investment Specs</Button>
            </Link>
            <Link href="#calculator">
              <Button variant="outline" className="w-full sm:w-auto px-8 py-4 text-lg">Calculate ROI</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
