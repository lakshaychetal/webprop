import React from 'react';
import Card from '../ui/Card';

const ValueProps = () => {
  const props = [
    {
      title: "Revenue Maximization",
      desc: "Empower your restaurant clients to increase average order value by 15-25% through AI-powered smart upselling and visual menu engagement.",
      icon: "📈",
      stats: "+15-25% AOV"
    },
    {
      title: "Premium Service Positioning",
      desc: "Differentiate your agency with cutting-edge tech solutions that command premium fees and create long-term client value.",
      icon: "💰",
      stats: "Higher Margins"
    },
    {
      title: "Operational Efficiency",
      desc: "Reduce client dependency on floor staff by 40% with AI Voice ordering, self-service kiosks, and automated kitchen workflows.",
      icon: "🤖",
      stats: "-40% Staff Load"
    },
    {
      title: "Brand Differentiation",
      desc: "Position your clients as tech-forward market leaders with futuristic AR menus and voice AI that competitors cannot match.",
      icon: "✨",
      stats: "Market Leader"
    }
  ];

  return (
    <section id="value" className="py-24 bg-[var(--background)] relative overflow-hidden transition-colors">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold mb-4 tracking-widest uppercase">
            Value Proposition
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[var(--foreground)]">Why </span>
            <span className="text-gold">Dine3D?</span>
          </h2>
          <p className="text-[var(--subtext)] text-lg max-w-3xl mx-auto leading-relaxed">
            Transform your restaurant clients into revenue-generating, tech-enabled dining experiences. 
            Position yourself as the agency that delivers measurable ROI, not just marketing spend.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.map((prop, index) => (
            <Card 
              key={index}
              className="p-6 bg-[var(--card-bg)] border-[var(--card-border)] hover:border-gold/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <div className="text-5xl mb-4">{prop.icon}</div>
              <div className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold mb-3">
                {prop.stats}
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{prop.title}</h3>
              <p className="text-[var(--subtext)] text-sm leading-relaxed">{prop.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border-gold/30">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4">
              Help Your Clients <span className="text-gold">Increase Revenue by 20-30%</span>
            </h3>
            <p className="text-[var(--subtext)] mb-6 max-w-2xl mx-auto">
              While traditional marketing drives traffic, Dine3D technology converts that traffic into higher-value orders. 
              It is the missing piece in your client revenue growth strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-[var(--subtext)]">
                <span className="w-2 h-2 bg-gold rounded-full"></span>
                <span>Voice AI drives 15% upsell rate</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--subtext)]">
                <span className="w-2 h-2 bg-gold rounded-full"></span>
                <span>3D menus increase order confidence</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--subtext)]">
                <span className="w-2 h-2 bg-gold rounded-full"></span>
                <span>Automated workflows reduce errors</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
