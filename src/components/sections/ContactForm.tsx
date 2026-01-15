'use client';
import React, { useState } from 'react';
import Button from '../ui/Button';

const ContactForm = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            
            if (res.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

  return (
    <section id="contact" className="py-24 bg-[var(--background)] transition-colors relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-4">Start Your <span className="text-gold">Partnership</span></h2>
            <p className="text-[var(--subtext)]">Get a custom proposal and demo for your restaurant clients today.</p>
          </div>

           {status === 'success' ? (
               <div className="text-center py-12">
                   <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
                   <h3 className="text-2xl text-[var(--foreground)] font-bold mb-2">Message Sent!</h3>
                   <p className="text-[var(--subtext)]">Our team will get back to you within 24 hours.</p>
                   <Button variant="outline" className="mt-8" onClick={() => setStatus('idle')}>Send Another</Button>
               </div>
           ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm text-[var(--subtext)] mb-2">Name</label>
                        <input name="name" required type="text" className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-[var(--foreground)] focus:border-gold focus:outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm text-[var(--subtext)] mb-2">Restaurant Name</label>
                        <input name="restaurant" required type="text" className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-[var(--foreground)] focus:border-gold focus:outline-none transition-colors" placeholder="Spice Garden" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm text-[var(--subtext)] mb-2">Email</label>
                        <input name="email" required type="email" className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-[var(--foreground)] focus:border-gold focus:outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm text-[var(--subtext)] mb-2">Phone</label>
                        <input name="phone" required type="tel" className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-[var(--foreground)] focus:border-gold focus:outline-none transition-colors" placeholder="+91 88139 47793" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm text-[var(--subtext)] mb-2">Waitlist / Inquiry</label>
                    <select name="type" className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-[var(--foreground)] focus:border-gold focus:outline-none transition-colors">
                        <option value="demo">Book Live Demo</option>
                        <option value="quote">Request Pricing Quote</option>
                        <option value="reseller">Reseller Particle Inquiry</option>
                        <option value="support">Technical Support</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm text-[var(--subtext)] mb-2">Message</label>
                    <textarea name="message" rows={4} className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-[var(--foreground)] focus:border-gold focus:outline-none transition-colors" placeholder="Tell us about your requirements..." />
                </div>

                <Button type="submit" variant="primary" className="w-full md:w-auto" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Submit Request'}
                </Button>
                
                {status === 'error' && (
                    <p className="text-red-500 text-center text-sm mt-4">Something went wrong. Please try again.</p>
                )}
            </form>
           )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
