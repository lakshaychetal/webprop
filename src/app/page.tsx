import Hero from '../components/sections/Hero';
import ValueProps from '../components/sections/ValueProps';
import Features from '../components/sections/Features';
import AdminPanel from '../components/sections/AdminPanel';
import PricingTable from '../components/sections/PricingTable';
import { ProposalCalculator } from '../components/features/ProposalCalculator';
import FAQ from '../components/sections/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-gold selection:text-black transition-colors overflow-x-hidden">
      <Hero />
      <ValueProps />
      <Features />
      <AdminPanel />
      <PricingTable />
      <ProposalCalculator />
      <FAQ />
    </main>
  );
}
