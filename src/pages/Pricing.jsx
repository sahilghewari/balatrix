import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';
import { generateProductSchema, generateFAQSchema } from '../utils/schemaGenerator';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');



  const pricingTiers = [
    {
      name: 'Starter Plan',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 39.99,
      yearlyPrice: 383.90,
      savings: '20%',
      features: [
        'Free Built-in WebRTC Softphone',
        '1 Toll-Free Number & 1 Extension',
        'Visual Call Routing & Basic IVR',
        'Real-Time Analytics Dashboard',
        'Automated Billing & Digital Wallet',
        'Additional Minutes: $0.015 per minute'
      ],
      popular: false
    },
    {
      name: 'Pro Plan',
      description: 'Ideal for growing businesses with higher volume needs',
      monthlyPrice: 79.99,
      yearlyPrice: 767.90,
      savings: '20%',
      features: [
        'Free Built-in WebRTC Softphone',
        '2 Toll-Free Numbers & 5 Extensions',
        'Advanced Routing & Ring Groups',
        'Real-Time Analytics & CDR Logs',
        'Team Collaboration Features',
        'Additional Minutes: $0.014 per minute'
      ],
      popular: true
    },
    {
      name: 'Enterprise Plan',
      description: 'For call centers and large organizations requiring scale',
      monthlyPrice: 149.99,
      yearlyPrice: 1439.90,
      savings: '20%',
      features: [
        'Free Built-in WebRTC Softphone',
        '5+ Toll-Free Numbers & Unlimited Exts',
        'Enterprise-Grade Call Routing',
        'Complete Analytics & QA Metrics',
        'Advanced Queue & Agent Management',
        'Full RBAC, Audit Logs & Multi-Tenancy',
        'Additional Minutes: $0.013 per minute'
      ],
      popular: false
    },
    {
      name: 'Whitelabel Reseller',
      description: 'Ideal for resellers and entrepreneurs wanting to brand their own PBX',
      monthlyPrice: 299.99,
      yearlyPrice: 2879.90,
      savings: '20%',
      features: [
        'Everything in Enterprise Plan',
        '100% White-Label System (Resell as your own)',
        'Rebrand with custom logo, colors & domain',
        'Reseller Management Portal (Unlimited Tenants)',
        'Set custom client rates & digital wallet margins',
        'Custom Webhooks & Billing API Integration',
        'Additional Minutes: $0.012 per minute'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Additional TFN',
      description: 'Extra toll-free numbers beyond your plan limit',
      payAsYouGoPrice: '5.00',
      oneTimePrice: '5.00',
      unit: 'per month'
    },
    {
      name: 'Additional Extension',
      description: 'Extra extensions beyond your plan limit',
      payAsYouGoPrice: '5.00',
      oneTimePrice: '3.00',
      unit: 'per month'
    },
    {
      name: 'Per Minute Charge',
      description: 'Additional calling minutes when you exceed your plan',
      payAsYouGoPrice: '0.015',
      oneTimePrice: '—',
      unit: 'per minute'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Billing updates automatically to match.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'Overage minutes apply at standard rates. We will notify you before you reach limits and can auto-purchase top-up credit.'
    },
    {
      question: 'Do you offer custom enterprise pricing?',
      answer: 'Yes, for high-capacity centers we design dedicated node endpoints. Contact sales for custom SLA agreements.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for standard tiers. White-label configurations and APIs are ready for instant provisioning.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, digital wallet top-ups, and bank wires for high-volume accounts.'
    },
    {
      question: 'Can I port my existing numbers?',
      answer: 'Yes. Porting is free of charge and fully managed by our operations team to prevent any route downtime.'
    }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <SEO 
        title="Pricing & Plans" 
        description="Simple, transparent pricing for toll-free numbers and cloud communication. Plans start at $9.99/month. Choose the perfect plan for your business." 
        canonicalUrl="https://balatrix.com/pricing"
        keywords="toll-free number pricing, business phone plans, voip pricing, cloud communication cost"
        schema={[
          generateProductSchema("Balatrix Cloud Telephony", "Affordable toll-free numbers and business communication", 39.99),
          generateFAQSchema(faqs.map(f => ({ question: f.question, answer: f.answer })))
        ]}
      />
      
      {/* 1. Hero Section - Obsidian Dark */}
      <section className="canvas-dark min-h-[75vh] flex items-center justify-center overflow-hidden relative pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[var(--color-accent)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-[var(--color-accent-light)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent-light)] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span>Simple, Transparent Pricing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display-lg text-[var(--text-dark-primary)] leading-tight mb-6 text-5xl md:text-7xl"
          >
            Scale Your <br />
            <span className="font-normal text-[var(--color-accent)]">Communications.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[var(--text-dark-secondary)] font-normal leading-relaxed max-w-2xl mx-auto mb-12"
          >
            No hidden fees, no complex contracts. Choose the plan that aligns with your volume requirements and compliance needs.
          </motion.p>
        </div>
      </section>

      {/* 2. Pricing Cards - Cool Light */}
      <section id="pricing-tiers" className="canvas-dark py-24 relative border-t border-[var(--border-dark)]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-[var(--color-accent)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center justify-center space-y-4 mb-16"
          >
            <div className="flex items-center bg-[var(--canvas-dark-elevated)] p-1.5 rounded-full border border-[var(--border-dark)] relative">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  billingCycle === 'monthly' ? 'text-white' : 'text-[var(--text-dark-secondary)] hover:text-[var(--text-dark-primary)]'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  billingCycle === 'annual' ? 'text-white' : 'text-[var(--text-dark-secondary)] hover:text-[var(--text-dark-primary)]'
                }`}
              >
                Annual Billing
              </button>
              
              <div 
                className="absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] bg-[var(--color-accent)] rounded-full transition-transform duration-300 ease-in-out shadow-[0_0_15px_rgba(88,101,242,0.4)]"
                style={{ transform: billingCycle === 'annual' ? 'translateX(100%)' : 'translateX(0)' }}
              />
            </div>
            
            <div className="bg-[var(--color-accent)]/20 text-[var(--color-accent-light)] text-xs font-bold px-3 py-1 rounded-full border border-[var(--color-accent)]/30 uppercase tracking-wider">
              Save up to 20% with Annual Billing
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`premium-card rounded-2xl relative flex flex-col h-full ${
                  tier.popular ? 'border-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/30' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                    <span className="bg-[var(--color-accent)] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8 border-b border-[var(--border-dark)]">
                  <h3 className="text-xl font-bold text-[var(--text-dark-primary)] mb-2">{tier.name}</h3>
                  <p className="text-[var(--text-dark-secondary)] text-xs font-normal mb-6 h-8">{tier.description}</p>
                  
                  <div className="mb-2">
                    <span className="text-4xl font-extralight text-[var(--text-dark-primary)] tracking-tight">
                      ${billingCycle === 'monthly' ? tier.monthlyPrice : tier.annualPrice}
                    </span>
                    <span className="text-[var(--text-dark-secondary)] text-sm font-normal"> /mo</span>
                  </div>
                  
                  <button className={`w-full justify-center py-2.5 mt-6 text-sm font-semibold ${tier.popular ? 'bg-[var(--color-accent)] text-white' : 'bg-[var(--border-dark)] text-white'}`}>
                    {tier.cta}
                  </button>
                </div>

                <div className="p-8 flex-grow bg-[var(--canvas-dark-deep)] rounded-b-2xl">
                  <h4 className="font-bold text-[var(--text-dark-primary)] text-[10px] uppercase tracking-widest mb-4">
                    What's included:
                  </h4>
                  <ul className="space-y-3.5">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <svg className="w-4 h-4 text-[var(--color-accent)] mr-3 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[13px] text-[var(--text-dark-secondary)] font-normal leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Add-ons - Obsidian Dark */}
      <section className="canvas-dark py-24 relative border-t border-[var(--border-dark)]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-[var(--color-accent)]/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="font-display-md text-[var(--text-dark-primary)] mb-4"
            >
              Optional <em className="text-[var(--color-accent)]">Add-ons</em>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="glass-card p-6 rounded-xl border-[var(--border-dark)] flex items-start">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 flex items-center justify-center text-xl mr-5 shrink-0">
                  {addon.icon}
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-[var(--text-dark-primary)] text-sm">{addon.name}</h3>
                    <span className="text-[var(--text-dark-primary)] font-semibold text-sm">{addon.price}</span>
                  </div>
                  <p className="text-[var(--text-dark-secondary)] text-[11px] leading-relaxed font-normal">
                    {addon.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQs - Cool Light */}
      <section className="canvas-dark py-24 relative border-t border-[var(--border-dark)]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-[var(--color-accent)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="font-display-md text-[var(--text-dark-primary)] mb-4"
            >
              Frequently Asked <em className="text-[var(--color-accent)]">Questions</em>
            </motion.h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[var(--canvas-dark-elevated)] border border-[var(--border-dark)] rounded-xl p-6"
              >
                <h3 className="font-bold text-[var(--text-dark-primary)] text-sm mb-2 flex items-start">
                  <span className="text-[var(--color-accent)] mr-3 text-lg leading-none mt-0.5">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-[var(--text-dark-secondary)] text-[13px] leading-relaxed font-normal ml-6 pl-1">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;