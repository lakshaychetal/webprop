import React from 'react';
import Card from '../ui/Card';

const AdminPanel = () => {
  const features = [
    {
      title: "Order Tracking",
      desc: "Real-time monitoring of all active orders (Table, Home Delivery, Voice AI) with live status updates.",
      icon: "🎯"
    },
    {
      title: "Average Order Value (AOV)",
      desc: "Detailed analytics on ticket sizes, identifying high-performing items and AI-driven upsell impact.",
      icon: "📊"
    },
    {
      title: "3D AR Analytics",
      desc: "Track which dishes are being viewed in 3D AR the most, helping optimize menu placement.",
      icon: "🕶️"
    },
    {
      title: "Access Controls & Audit Logs",
      desc: "Granular role-based permissions, secure SSO integration, and immutable audit logs for compliance and troubleshooting.",
      icon: "�"
    },
    {
      title: "Customer Insights",
      desc: "Understand dining patterns, repeat customers, and popular ordering times.",
      icon: "👥"
    },
    {
      title: "Revenue Reports",
      desc: "Automated daily, weekly, and monthly revenue summaries with exportable data.",
      icon: "💰"
    }
  ];

  return (
    <section id="admin" className="py-24 bg-[var(--background)] transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold mb-4 tracking-widest uppercase">
            Control Center
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[var(--foreground)]">Complete </span>
            <span className="text-gold">Admin Panel</span>
          </h2>
          <p className="text-[var(--subtext)] text-lg max-w-3xl mx-auto leading-relaxed">
            A centralized dashboard to manage every aspect of your restaurant operations, 
            from AI performance to real-time order flows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover:border-gold/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{feature.title}</h3>
              <p className="text-[var(--subtext)] text-sm leading-relaxed">{feature.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16">
            <Card className="p-1 border-gold/20 bg-[var(--card-bg)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-8 md:p-12 text-center relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4">Powerful Data at Your Fingertips</h3>
                    <p className="text-[var(--subtext)] max-w-2xl mx-auto mb-8">
                        Stop guessing and start growing. Our admin panel provides the transparency 
                        you need to scale your restaurant agency services.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gold">100%</div>
                            <div className="text-xs text-[var(--subtext)] uppercase tracking-widest mt-1">Real-time Sync</div>
                        </div>
                        <div className="text-center border-l border-gray-800 pl-8">
                            <div className="text-3xl font-bold text-gold">24/7</div>
                            <div className="text-xs text-[var(--subtext)] uppercase tracking-widest mt-1">Uptime Support</div>
                        </div>
                        <div className="text-center border-l border-gray-800 pl-8">
                            <div className="text-3xl font-bold text-gold">End-to-End</div>
                            <div className="text-xs text-[var(--subtext)] uppercase tracking-widest mt-1">Encryption</div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
