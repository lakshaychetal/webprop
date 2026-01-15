import React from 'react';
import plansData from '../../data/rms-plans.json';
import Button from '../ui/Button';
import Card from '../ui/Card';

const PricingTable = () => {
  return (
    <section id="pricing" className="py-24 bg-[var(--background)] relative transition-colors">
       {/* Ambient Backlight */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 border border-gold/30 rounded-full text-xs font-semibold text-gold mb-4 tracking-widest uppercase">
            Commercial Proposal
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-6">Investment Options</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Modular pricing architecture designed to scale with your restaurant's digital transformation journey.
          </p>
        </div>

        {/* SECTION 1: AI & FUTURE TECH (Highlight) */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-[var(--foreground)] mb-8 border-l-4 border-gold pl-4">I. Intelligence Suite <span className="text-gold text-lg font-normal ml-2">(High Impact)</span></h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Voice AI */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold/40 to-transparent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <Card className="relative p-8 h-full bg-[var(--card-bg)] backdrop-blur-sm border-gold/30">
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <h4 className="text-2xl font-bold text-[var(--foreground)]">Voice AI & Autonomous Ordering</h4>
                      <p className="text-gold/80 text-sm mt-1">Concierge Agent</p>
                   </div>
                   <div className="bg-gold/10 px-3 py-1 rounded text-gold text-xs font-bold border border-gold/20">RECOMMENDED</div>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[var(--foreground)]">₹2,500</span>
                    <span className="text-gray-500">/ month</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">Scalable AI Training Included (Hindi & English)</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-3 text-gray-400">
                    <span className="text-gold">✦</span>
                    <span><strong>Multi-lingual Support:</strong> Hindi & English available now; more languages rolling out.</span>
                  </div>
                  <div className="flex gap-3 text-gray-400">
                     <span className="text-gold">✦</span>
                     <span><strong>Smart Upselling:</strong> Expected 15% increase in average ticket size through automated pairings.</span>
                  </div>
                  <div className="flex gap-3 text-gray-400">
                     <span className="text-gold">✦</span>
                     <span><strong>Voice-to-KOT:</strong> Direct integration with kitchen printers to eliminate manual entry errors.</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* 3D AR Suite */}
            <div className="relative group">
              <Card className="p-8 h-full bg-[var(--card-bg)] border-[var(--card-border)] hover:border-gold/30 transition-all">
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <h4 className="text-2xl font-bold text-[var(--foreground)]">3D Menu Visualization</h4>
                      <p className="text-gray-400 text-sm mt-1">Immersive Digital Menu</p>
                   </div>
                </div>
                
                <div className="mb-8">
                   <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[var(--foreground)]">₹500</span>
                    <span className="text-gray-400">/ item</span>
                   </div>
                  <p className="text-sm text-gray-400 mt-2">One-time conversion fee — Photo shoot not included</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-3 text-gray-400">
                    <span className="text-white/60">✓</span>
                    <span><strong>Photorealistic 3D Models:</strong> Optimized for smooth performance on web and AR.</span>
                  </div>
                  <div className="flex gap-3 text-gray-400">
                     <span className="text-white/60">✓</span>
                     <span><strong>WebAR Enabled:</strong> Zero-friction experience with no application downloads.</span>
                  </div>
                  <div className="flex gap-3 text-gray-400">
                     <span className="text-white/60">✓</span>
                     <span><strong>QR Integration:</strong> Instant access via table-specific or menu-wide QR codes.</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>


        {/* SECTION 2: RMS & HARDWARE */}
        <div>
           <h3 className="text-2xl font-bold text-[var(--foreground)] mb-8 border-l-4 border-gold pl-4">II. Core Infrastructure (RMS)</h3>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plansData.map((plan: any, idx) => (
              <Card key={idx} className="p-6 flex flex-col hover:border-gold transition-all transition-colors">
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">{plan.name}</h3>
                <div className="text-2xl font-bold text-[var(--foreground)]/90 mb-1">
                  ₹{plan.name === 'Base Menu System' ? '25,000' : plan.price.toLocaleString()}
                </div>
                <div className="text-xs text-[var(--subtext)] mb-2 uppercase">
                  {plan.name === 'Base Menu System' ? 'Combined License & Deployment' : 'License Fee'}
                </div>
                {plan.annualDeploymentFee && plan.name !== 'Base Menu System' && (
                   <div className="text-sm text-gold font-bold mb-4">+ ₹{plan.annualDeploymentFee.toLocaleString()}/yr deployment</div>
                )}
                {plan.name === 'Base Menu System' && (
                   <div className="text-xs text-gold font-bold mb-4 italic">Includes ₹5,000 standard annual deployment</div>
                )}
                {!plan.annualDeploymentFee && plan.name !== 'Base Menu System' && <div className="mb-4 h-5" />}
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {plan.features.slice(0, 4).map((feature: any, fIdx: any) => (
                    <li key={fIdx} className="text-xs text-[var(--subtext)] flex items-start gap-2">
                      <span className="text-gold">▪</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingTable;
