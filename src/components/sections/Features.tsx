import React from 'react';
import Card from '../ui/Card';

const Features = () => {
  const mainFeatures = [
    {
      icon: "🎯",
      title: "3D Menu Visualization",
      subtitle: "Photorealistic 3D Food Models",
      description: "Give customers a true-to-life view of every dish before ordering. 4K texture quality and ingredient visibility. Includes optimization for web and AR — (Photo shoot not included).",
      benefits: [
        "Up to 40% increase in order confidence (typical range)",
        "Reduces food return rate significantly",
        "Works on any smartphone via WebAR"
      ],
      tech: ["GLB/USDZ Support", "Cloud CDN Hosted", "No App Required"]
    },
    {
      icon: "🎤",
      title: "Voice AI Concierge",
      subtitle: "Multilingual Autonomous Ordering",
      description: "AI-powered voice assistant that supports Hindi & English (more languages rolling out). Handles complex queries and suggests perfect pairings automatically.",
      benefits: [
        "Expected 15% smart upselling rate",
        "Handles peak hours seamlessly",
        "Removes language barriers"
      ],
      tech: ["Hindi & English (Multi-lingual roadmap)", "Voice-to-KOT", "Context-Aware AI"]
    },
    {
      icon: "⚡",
      title: "Seamless RMS Integration",
      subtitle: "Kitchen & Delivery Automation",
      description: "Direct integration with Kitchen Order Tickets and POS systems. Orders flow automatically — typically measured at 50% faster order processing during pilots.",
      benefits: [
        "Significant reduction in manual processing",
        "Zero transcription errors",
        "Real-time inventory sync"
      ],
      tech: ["KOT Integration", "Live Tracking", "Analytics Dashboard"]
    }
  ];

  const techSpecs = [
    { label: "Uptime SLA", value: "99.9%" },
    { label: "Load Time", value: "<2 sec" },
    { label: "Languages", value: "Hindi & English (More soon)" },
    { label: "3D Quality", value: "4K Texture" },
    { label: "AR Support", value: "iOS & Android" },
    { label: "Integration", value: "API-Based" }
  ];

  return (
    <section id="features" className="py-24 bg-[var(--background)] relative transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold mb-4 tracking-widest uppercase">
            Core Features
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6">
            Technology That <span className="text-gold">Converts</span>
          </h2>
          <p className="text-[var(--subtext)] text-lg max-w-3xl mx-auto">
            Every feature is engineered to increase order value, reduce operational costs, and create unforgettable dining experiences.
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-12 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card 
              key={index}
              className={`p-8 bg-[var(--card-bg)] border-[var(--card-border)] hover:border-gold/50 transition-all duration-300 ${
                index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-3xl font-bold text-[var(--foreground)] mb-2">{feature.title}</h3>
                  <p className="text-gold font-semibold mb-4">{feature.subtitle}</p>
                  <p className="text-[var(--subtext)] text-lg mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div className="space-y-3 mb-6">
                        {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-gold rounded-full"></span>
                        <span className="text-[var(--subtext)]">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {feature.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold border border-gold/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full" />
                    <div className="relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 backdrop-blur-sm">
                      <div className="space-y-4">
                        <div className="text-gold font-bold text-sm tracking-widest uppercase mb-4">Impact Metrics</div>
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <span className="text-[var(--subtext)] text-sm">{benefit.split(' ').slice(1).join(' ')}</span>
                            <span className="text-[var(--foreground)] font-mono font-bold">{benefit.split(' ')[0]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
