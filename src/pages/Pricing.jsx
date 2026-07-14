import React, { useState } from "react";
import SEO from '../components/seo/SEO';
import { generateProductSchema, generateFAQSchema } from '../utils/schemaGenerator';
import { Link } from "react-router-dom";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  // Scroll to pricing plans function
  const scrollToPricingPlans = () => {
    const pricingPlans = document.getElementById('pricing-plans');
    if (pricingPlans) {
      pricingPlans.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const pricingTiers = [
    {
      name: 'Starter Plan',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 39.99,
      yearlyPrice: 383.90, // 20% discount
      savings: '20%',
      features: [
        'Free Built-in WebRTC Softphone',
        '1 Toll-Free Number & 1 Extension',
        'Visual Call Routing & Basic IVR',
        'Real-Time Analytics Dashboard',
        'Automated Billing & Digital Wallet',
        'Additional Minutes: $0.015 per minute'
      ],
      popular: false,
      color: 'gray'
    },
    {
      name: 'Pro Plan',
      description: 'Ideal for growing businesses with higher volume needs',
      monthlyPrice: 79.99,
      yearlyPrice: 767.90, // 20% discount
      savings: '20%',
      features: [
        'Free Built-in WebRTC Softphone',
        '2 Toll-Free Numbers & 5 Extensions',
        'Advanced Routing & Ring Groups',
        'Real-Time Analytics & CDR Logs',
        'Team Collaboration Features',
        'Additional Minutes: $0.014 per minute'
      ],
      popular: true,
      color: 'blue'
    },
    {
      name: 'Enterprise Plan',
      description: 'For call centers and large organizations requiring scale',
      monthlyPrice: 149.99,
      yearlyPrice: 1439.90, // 20% discount
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
      popular: false,
      color: 'indigo'
    },
    {
      name: 'Whitelabel Reseller',
      description: 'Ideal for resellers and entrepreneurs wanting to brand their own PBX',
      monthlyPrice: 299.99,
      yearlyPrice: 2879.90, // 20% discount
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
      popular: false,
      color: 'teal'
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
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Please contact support, and billing is updated accordingly.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'Overage charges apply at standard rates. We\'ll notify you before you reach your limits and can automatically upgrade your plan or add Credits if needed.'
    },
    {
      question: 'Do you offer custom enterprise pricing?',
      answer: 'Yes, for organizations requiring custom solutions, we offer tailored enterprise pricing. Contact our sales team for a quote.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our standard plans. Custom integrations and enterprise deployments may have one-time setup costs.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, ACH transfers, and wire transfers. Enterprise clients can also arrange for net payment terms.'
    },
    {
      question: 'Can I port my existing numbers?',
      answer: 'Yes, number porting is included in all plans. Our team handles the entire process to ensure minimal downtime.'
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
          generateProductSchema("Balatrix Cloud Telephony", "Affordable toll-free numbers and business communication", 9.99),
          generateFAQSchema(faqs)
        ]}
      />
      
      {/* Hero Section */}
      <section className="min-h-screen sm:min-h-[70vh] bg-transparent flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="telecom-grid opacity-[0.3]" />
          <div className="absolute top-[25%] left-[20%] w-[380px] h-[380px] bg-blue-900/15 rounded-full blur-[110px]" />
          <div className="absolute bottom-[25%] right-[20%] w-[380px] h-[380px] bg-cyan-900/10 rounded-full blur-[110px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-24 xl:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 w-full overflow-hidden">
              <div className="inline-flex items-center space-x-1.5 bg-blue-950/40 border border-blue-500/20 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                <span>Pricing Plans 💰</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                Simple,<br />Transparent<br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-full lg:max-w-xl">
                Choose the perfect plan for your business. All plans include our core features
                Designed for businesses that want performance without telecom headaches,
                24x7 Free Support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/contact" className="btn btn-primary text-base px-8 py-4 text-center">
                  Start Free Trial
                </Link>
                <button onClick={scrollToPricingPlans} className="btn btn-secondary text-base px-8 py-4">
                  Compare Plans
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-white/5 mt-8">
                <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-300">$39.99</span>
                    <span>Starting Price</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-300">No</span>
                    <span>Setup Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-300">Cancel</span>
                    <span>Anytime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Visual Element */}
            <div className="hidden lg:block">
              <div className="relative h-80 xl:h-96 flex items-center justify-center">
                <div className="glass-card p-12 rounded-3xl border-white/5 max-w-sm w-full text-center relative overflow-hidden bg-slate-900/50">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -z-10"></div>
                  <div className="text-6xl font-extrabold text-blue-400 mb-4">$39.99</div>
                  <div className="text-lg text-white font-bold mb-3">Starting from</div>
                  <div className="text-sm text-gray-400 mb-8 font-medium">
                    Professional toll-free numbers with all essential features included
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-300 font-bold bg-white/5 py-3 rounded-xl border border-white/5">
                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>No hidden fees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing-plans" className="py-24 bg-transparent border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">
              CHOOSE YOUR PLAN
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Find the Perfect <em>Plan</em>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              All plans include our core features with 99.9% uptime guarantee
            </p>

            {/* Billing Toggle */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 bg-white/5 border border-white/15 p-1.5 rounded-2xl w-fit">
                <span 
                  className={`text-sm font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer ${
                    billingCycle === 'monthly' ? 'bg-blue-600/80 text-white shadow-md' : 'text-gray-400 hover:text-white'
                  }`} 
                  onClick={() => setBillingCycle('monthly')}
                >
                  Monthly
                </span>
                <span 
                  className={`text-sm font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                    billingCycle === 'yearly' ? 'bg-blue-600/80 text-white shadow-md' : 'text-gray-400 hover:text-white'
                  }`} 
                  onClick={() => setBillingCycle('yearly')}
                >
                  Annual
                  <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full text-[9px] uppercase font-bold tracking-wider">Save 20%</span>
                </span>
              </div>

              {/* Quarterly Payment Option */}
              <div className="bg-blue-950/40 border border-blue-500/15 rounded-2xl p-4 w-fit text-left">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Quarterly Payment Option</h4>
                    <p className="text-xs text-gray-400 font-medium">Pay quarterly and skip one-time setup charges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`group relative glass-card p-6 rounded-3xl flex flex-col h-full ${
                  tier.popular
                    ? 'border-blue-500/30 bg-slate-900/50 shadow-2xl shadow-blue-500/5'
                    : 'border-white/5'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-bold shadow-md tracking-wider uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6 relative">
                  {tier.popular && <div className="absolute -inset-4 bg-gradient-to-b from-blue-500/5 to-transparent rounded-2xl -z-10"></div>}
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 h-12 leading-relaxed">{tier.description}</p>

                  <div className="mb-4 flex flex-col items-center justify-center min-h-[80px]">
                    {typeof tier.monthlyPrice === 'string' ? (
                      <div>
                        <span className="text-3xl font-extrabold text-white">
                          {tier.monthlyPrice}
                        </span>
                        <div className="text-xs font-semibold text-gray-400 mt-1">{tier.savings}</div>
                      </div>
                    ) : (
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-extrabold text-blue-400">
                          ${(billingCycle === 'monthly' ? tier.monthlyPrice : (tier.yearlyPrice / 12)).toFixed(2)}
                        </span>
                        <span className="text-gray-400 ml-1 text-sm font-semibold">
                          /month
                        </span>
                      </div>
                    )}
                  </div>

                  {billingCycle === 'yearly' && typeof tier.monthlyPrice !== 'string' && (
                    <div className="text-[10px] tracking-wide uppercase bg-emerald-950/80 text-emerald-400 px-3 py-1.5 rounded-full inline-block font-bold border border-emerald-500/20">
                      Save {tier.savings} Annually
                    </div>
                  )}

                  {billingCycle === 'monthly' && typeof tier.monthlyPrice !== 'string' && (
                    <div className="h-7"></div>
                  )}
                </div>

                <div className="mb-6 flex-grow border-t border-white/5 pt-6">
                  <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-[10px]">Everything included:</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-xs font-semibold text-gray-300">
                        <div className="w-4.5 h-4.5 bg-blue-500/10 text-cyan-400 border border-blue-500/15 rounded-full flex items-center justify-center mr-2.5 mt-0.5 flex-shrink-0">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-white/5">
                  <Link
                    to={`?quote=${tier.name === 'Whitelabel Reseller' ? 'reseller' : (tier.name === 'Starter Plan' ? 'tollfree' : 'consultation')}`}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all inline-block text-center ${
                      tier.popular
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Plan Banner */}
      <section className="pb-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#080b16] to-[#03050e] rounded-3xl p-8 sm:p-10 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            {/* Background Grid */}
            <div className="telecom-grid opacity-[0.2]" />

            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">👉</span>
                <h3 className="text-2xl font-bold text-white">
                  Need something specific?
                </h3>
              </div>
              <p className="text-gray-400 font-semibold text-base leading-relaxed max-w-3xl">
                We offer fully customizable plans tailored to your business needs. 
                From small teams to large call centers — we build plans that match your exact requirements.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto relative z-10">
              <Link to="/contact" className="btn btn-secondary w-full sm:w-auto text-center py-4 px-6">
                Talk to us for a tailored solution
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 bg-transparent border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">
              ENHANCE YOUR PLAN
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Pay as you Go <em>Plans</em>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Extend your plan with additional services tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="group glass-card rounded-2xl p-8 border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                <div className="w-12 h-12 bg-blue-500/15 border border-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <span className="font-extrabold text-2xl">+</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{addon.name}</h3>
                <p className="text-gray-400 mb-8 font-semibold h-12 leading-relaxed text-sm">{addon.description}</p>
                <div className="space-y-6">
                  <div className="border-b border-white/5 pb-6 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Pay As You Go</div>
                      <div className="text-3xl font-extrabold text-white">${addon.payAsYouGoPrice}</div>
                    </div>
                    <div className="text-xs font-semibold text-gray-400 pb-1">{addon.unit}</div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">One-Time Charge</div>
                      <div className="text-xl font-bold text-gray-300">
                        {addon.oneTimePrice === '—' ? '—' : `$${addon.oneTimePrice}`}
                      </div>
                    </div>
                    {addon.oneTimePrice !== '—' && (
                      <div className="text-xs font-semibold text-gray-500 pb-1">setup fee</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-transparent border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Frequently Asked <em>Questions</em>
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-blue-500/10 transition-colors">
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed font-semibold text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;