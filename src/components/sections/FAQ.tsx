import React from 'react';

const FAQ = () => {
    const faqs = [
        { q: "Do I need a special app to view the 3D menu?", a: "No! Dine3D uses WebAR technology. Customers simply scan a QR code with their phone camera to view models instantly in their browser." },
        { q: "How much does it cost to create 3D models?", a: "We charge a one-time fee of ₹500 per dish. This includes optimization for web and AR. You can update prices and descriptions anytime for free." },
        { q: "Does the Voice AI support regional languages?", a: "Yes, currently we support English and Hindi with high accuracy. More regional languages are coming soon." },
        { q: "Can I use this for home delivery?", a: "Absolutely. Our 'Home Delivery System' plan includes a full online ordering suite with cart management and delivery tracking." }
    ];

  return (
    <section id="faq" className="py-20 bg-[var(--background)] transition-colors">
      <div className="container mx-auto px-4 max-w-4xl">
         <h2 className="text-3xl font-bold text-[var(--foreground)] mb-12 text-center">Frequently Asked Questions</h2>
         <div className="space-y-6">
            {faqs.map((item, idx) => (
                <div key={idx} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-gold/30 transition-colors">
                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{item.q}</h3>
                    <p className="text-gray-400">{item.a}</p>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default FAQ;
