'use client';

import React, { useState, useEffect } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import rmsPlans from '../../data/rms-plans.json';

const MENU_3D_VISUALIZATION = {
  name: '3D Menu Visualization',
  pricePerItem: 500,
  features: [
    'Photorealistic 3D Models (4K)',
    'WebAR Enabled (No App)',
    'QR Integration'
  ]
};

const AI_SUBSCRIPTION = {
  name: 'Voice AI & Autonomous Ordering',
  monthlyPrice: 2500,
  features: [
    '10+ Languages: Handles Hindi, English, Spanish, French & more automatically.',
    'Smart Upselling: AI suggests pairings (e.g., drinks with starters) increasing ticket size by ~15%.',
    'Voice-to-KOT: Direct integration sends voice orders straight to kitchen printers/screens.'
  ]
};

export const ProposalCalculator = () => {
  // Service Selection State
  const [include3DMenu, setInclude3DMenu] = useState(false);
  const [dishCount, setDishCount] = useState(20);

  const [includeAISubscription, setIncludeAISubscription] = useState(false);
  const [selectedRMSPlans, setSelectedRMSPlans] = useState<string[]>(['Base Menu System']);
  
  // Financials State
  const [totals, setTotals] = useState({
    oneTimeCost: 0,
    recurringCost: 0,
  });

  const [breakdown, setBreakdown] = useState<{ oneTime: string[], recurring: string[] }>({
    oneTime: [],
    recurring: []
  });

  const toggleRMSPlan = (planName: string) => {
    const plan = rmsPlans.find((p: any) => p.name === planName);
    
    // Base Menu is required - cannot be unchecked
    if (plan?.isRequired && selectedRMSPlans.includes(planName)) {
      return; // Don't allow unchecking required plans
    }
    
    setSelectedRMSPlans(prev => 
      prev.includes(planName) 
        ? prev.filter(p => p !== planName) 
        : [...prev, planName]
    );
  };

  useEffect(() => {
    let oneTime = 0;
    let recurring = 0;
    const oneTimeItems: string[] = [];
    const recurringItems: string[] = [];

    // 1. 3D Menu
    if (include3DMenu) {
      const cost = (dishCount * MENU_3D_VISUALIZATION.pricePerItem);
      oneTime += cost;
      oneTimeItems.push(formatCurrency(cost));
    }

    // 2. AI Subscription
    if (includeAISubscription) {
      recurring += AI_SUBSCRIPTION.monthlyPrice;
      recurringItems.push(formatCurrency(AI_SUBSCRIPTION.monthlyPrice));
    }

    // 3. RMS - Now supports multiple selections
    selectedRMSPlans.forEach(planName => {
      const plan = rmsPlans.find((p: any) => p.name === planName);
      if (plan) {
        if (plan.name === 'Base Menu System' && plan.annualDeploymentFee) {
          const combined = plan.price + plan.annualDeploymentFee;
          oneTime += combined;
          oneTimeItems.push(formatCurrency(combined));
        } else {
          oneTime += plan.price;
          oneTimeItems.push(formatCurrency(plan.price));
          
          if (plan.annualDeploymentFee) {
            const monthlyFee = Math.round(plan.annualDeploymentFee / 12);
            recurring += monthlyFee;
            recurringItems.push(formatCurrency(monthlyFee));
          }
        }
      }
    });

    setTotals({
      oneTimeCost: oneTime,
      recurringCost: recurring,
    });

    setBreakdown({
      oneTime: oneTimeItems,
      recurring: recurringItems
    });

  }, [include3DMenu, dishCount, includeAISubscription, selectedRMSPlans]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="calculator" className="py-24 bg-[var(--background)] transition-colors relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-[var(--foreground)]">Proposal</span> <span className="text-gold">Generator</span>
          </h2>
          <p className="text-[var(--subtext)] max-w-2xl mx-auto">
            Configure the perfect Dine3D solution package for your client.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Services Configuration */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* 1. Specialized Services */}
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-[var(--foreground)] pl-1 border-l-4 border-gold">I. 3D Visualization</h3>
                
                {/* 3D Menu Visualization */}
                <Card className={`p-6 border transition-all duration-300 ${include3DMenu ? 'border-gold bg-gold/5' : 'border-[var(--card-border)] bg-[var(--card-bg)]'}`}>
                    <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <input 
                        type="checkbox"
                        checked={include3DMenu}
                        onChange={(e) => setInclude3DMenu(e.target.checked)}
                        className="w-5 h-5 accent-gold cursor-pointer"
                        />
                        <div>
                        <h3 className="text-xl font-bold text-[var(--foreground)]">{MENU_3D_VISUALIZATION.name}</h3>
                        <p className="text-sm text-gold">Immersive Digital Menu • WebAR</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-xl text-[var(--foreground)] font-mono">{formatCurrency(MENU_3D_VISUALIZATION.pricePerItem)}<span className="text-sm text-[var(--subtext)]">/item</span></div>
                        <div className="text-xs text-[var(--subtext)]">One-time conversion fee</div>
                    </div>
                    </div>

                    {include3DMenu && (
                    <div className="pl-8 mt-4 pt-4 border-t border-gray-800">
                        <div className="mb-4">
                            <label className="flex justify-between text-sm text-[var(--foreground)] mb-2">
                            <span>Number of Dishes to Digitize</span>
                            <span className="text-gold font-bold">{dishCount} Items</span>
                            </label>
                            <input 
                            type="range" min="5" max="100" step="5"
                            value={dishCount}
                            onChange={(e) => setDishCount(Number(e.target.value))}
                            className="w-full accent-gold h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="flex justify-between text-xs text-[var(--subtext)] mt-1">
                            <span>5 Items</span>
                            <span>100 Items</span>
                            </div>
                        </div>
                    </div>
                    )}
                </Card>
            </div>

            {/* 2. Core Infrastructure (RMS) */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[var(--foreground)] pl-1 border-l-4 border-gold">II. Core Infrastructure (RMS)</h3>
              <p className="text-sm text-[var(--subtext)] mb-4">Base Menu System is required. Add additional modules as needed.</p>
              
              <div className="space-y-3">
                  {rmsPlans.map((plan: any) => (
                    <Card 
                      key={plan.name} 
                      className={`p-5 border transition-all duration-300 ${
                        plan.isRequired 
                          ? 'border-gold/60 bg-gold/10 cursor-not-allowed' 
                          : selectedRMSPlans.includes(plan.name) 
                            ? 'border-gold bg-gold/5 cursor-pointer' 
                            : 'border-[var(--card-border)] bg-[var(--card-bg)] hover:border-gray-600 cursor-pointer'
                      }`}
                      onClick={() => !plan.isRequired && toggleRMSPlan(plan.name)}
                    >
                       <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3 flex-1">
                            <input 
                              type="checkbox"
                              checked={selectedRMSPlans.includes(plan.name)}
                              onChange={() => toggleRMSPlan(plan.name)}
                              disabled={plan.isRequired}
                              className="w-5 h-5 accent-gold cursor-pointer mt-1 disabled:opacity-50"
                              onClick={(e) => e.stopPropagation()}
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-[var(--foreground)] font-bold">{plan.name}</span>
                                {plan.isRequired && (
                                  <span className="px-2 py-0.5 text-xs font-bold bg-gold text-black rounded-full">
                                    REQUIRED
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-[var(--subtext)] mb-2">{plan.description}</div>
                              <ul className="text-xs text-[var(--subtext)] space-y-1">
                                {plan.features.slice(0, 3).map((feature: string, idx: number) => (
                                  <li key={idx} className="flex items-start gap-1">
                                    <span className="text-gold mt-0.5">▪</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                                {plan.features.length > 3 && (
                                  <li className="text-gold/60 italic">+ {plan.features.length - 3} more features</li>
                                )}
                              </ul>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-gold font-mono text-lg font-bold">
                              {plan.name === 'Base Menu System' ? (
                                <>
                                  <span className="text-sm block text-[var(--subtext)] font-normal">
                                    {formatCurrency(plan.price)} + {formatCurrency(plan.annualDeploymentFee)}
                                  </span>
                                  {formatCurrency(plan.price + plan.annualDeploymentFee)}
                                </>
                              ) : (
                                formatCurrency(plan.price)
                              )}
                            </div>
                            <div className="text-[10px] text-[var(--subtext)] leading-tight mt-1">
                              {plan.name === 'Base Menu System' 
                                ? '(Includes ₹5k standard annual deployment)' 
                                : 'One-time License'}
                            </div>
                          </div>
                       </div>
                    </Card>
                  ))}

                  {/* AI Subscription - Only available if Base Menu is selected */}
                  {selectedRMSPlans.includes('Base Menu System') && (
                    <Card 
                      className={`p-5 border transition-all duration-300 ${
                        includeAISubscription 
                          ? 'border-gold bg-gold/5 cursor-pointer' 
                          : 'border-[var(--card-border)] bg-[var(--card-bg)] hover:border-gray-600 cursor-pointer'
                      }`}
                      onClick={() => setIncludeAISubscription(!includeAISubscription)}
                    >
                       <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3 flex-1">
                            <input 
                              type="checkbox"
                              checked={includeAISubscription}
                              onChange={(e) => setIncludeAISubscription(e.target.checked)}
                              className="w-5 h-5 accent-gold cursor-pointer mt-1"
                              onClick={(e) => e.stopPropagation()}
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-[var(--foreground)] font-bold">{AI_SUBSCRIPTION.name}</span>
                                <span className="px-2 py-0.5 text-[10px] font-bold bg-green-500/20 text-green-400 rounded-full">
                                  RECOMMENDED
                                </span>
                                <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-500/20 text-blue-400 rounded-full">
                                  RECURRING
                                </span>
                              </div>
                              <div className="text-xs text-[var(--subtext)] mb-2">Voice AI Concierge & Autonomous Ordering Agent</div>
                              <ul className="text-xs text-[var(--subtext)] space-y-2 mt-3 pt-3 border-t border-gray-800">
                                {AI_SUBSCRIPTION.features.map((feature: string, idx: number) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <span className="text-gold mt-1">✦</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-blue-400 font-mono text-lg font-bold">{formatCurrency(AI_SUBSCRIPTION.monthlyPrice)}</div>
                            <div className="text-xs text-[var(--subtext)]">per month</div>
                          </div>
                       </div>
                    </Card>
                  )}
              </div>
            </div>

          </div>

          {/* Right Column: Pricing Summary */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
             <Card className="p-6 border border-gold/30 bg-[var(--card-bg)] shadow-2xl shadow-gold/5">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-6 border-b border-gray-800 pb-4">Estimated Quote</h3>
                
                {/* Cost Breakdown */}
                <div className="space-y-4 mb-8">
                   <div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-[var(--subtext)]">Upfront Investment</span>
                        <span className="text-[var(--foreground)] font-mono">{formatCurrency(totals.oneTimeCost)}</span>
                      </div>
                      {breakdown.oneTime.length > 1 && (
                        <div className="text-[10px] text-[var(--subtext)] text-right font-mono mt-1">
                          {breakdown.oneTime.join(' + ')}
                        </div>
                      )}
                   </div>
                   
                   <div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-[var(--subtext)]">Monthly Service Fee</span>
                        <span className="text-[var(--foreground)] font-mono">{formatCurrency(totals.recurringCost)}</span>
                      </div>
                      {breakdown.recurring.length > 1 && (
                        <div className="text-[10px] text-[var(--subtext)] text-right font-mono mt-1">
                          {breakdown.recurring.join(' + ')}
                        </div>
                      )}
                   </div>
                </div>

                <Button className="w-full mt-6" variant="primary">Generate Proposal</Button>
             </Card>
          </div>

        </div>
      </div>
    </section>
  );
};