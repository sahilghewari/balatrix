import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const PricingPlans = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      tier: 'Growth',
      badge: 'Perfect Start',
      tagline: 'For Scaling Startups',
      description: 'Everything you need to launch and grow your telecom operations with confidence',
      volume: 'Up to 10K numbers',
      pricing: {
        model: 'Volume-based',
        starting: 'Starting at',
        display: 'Custom Quote'
      },
      highlights: [
        { label: 'Setup Time', value: '< 24 hours', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        { label: 'Support', value: 'Business Hours', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { label: 'Uptime SLA', value: '99.5%', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
      ],
      features: [
        'Automated provisioning system',
        'REST API integration',
        'Basic analytics dashboard',
        'Standard routing options',
        'Email & chat support',
        'Compliance documentation'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      tier: 'Professional',
      badge: 'Most Popular',
      tagline: 'For Growing Enterprises',
      description: 'Advanced features and dedicated support for businesses ready to scale globally',
      volume: 'Up to 100K numbers',
      pricing: {
        model: 'Enterprise-grade',
        starting: 'Solutions from',
        display: 'Custom Quote'
      },
      highlights: [
        { label: 'Setup Time', value: '< 12 hours', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        { label: 'Support', value: '24/7 Priority', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { label: 'Uptime SLA', value: '99.9%', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
      ],
      features: [
        'Advanced provisioning automation',
        'Complete API suite + webhooks',
        'Real-time analytics & reporting',
        'Custom routing & failover',
        'Dedicated account manager',
        'Priority technical support',
        'Compliance & regulatory assistance',
        'Custom integrations available'
      ],
      cta: 'Get Enterprise Quote',
      popular: true
    },
    {
      tier: 'Enterprise',
      badge: 'White Glove',
      tagline: 'For Large Organizations',
      description: 'Ultimate telecom infrastructure with dedicated resources and unlimited scale',
      volume: 'Unlimited scale',
      pricing: {
        model: 'Custom deployment',
        starting: 'Tailored pricing',
        display: 'Custom Solution'
      },
      highlights: [
        { label: 'Setup Time', value: '< 4 hours', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        { label: 'Support', value: 'Dedicated Team', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { label: 'Uptime SLA', value: '99.99%', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
      ],
      features: [
        'White-glove deployment & management',
        'Custom API development',
        'Advanced analytics & AI insights',
        'Dedicated infrastructure',
        'C-level executive support',
        'Global compliance expertise',
        'Custom SLA agreements',
        'Priority feature development',
        'Disaster recovery planning'
      ],
      cta: 'Schedule Executive Call',
      popular: false
    },
    {
      tier: 'Whitelabel Reseller',
      badge: 'Telecom SaaS',
      tagline: 'For Resellers & Entrepreneurs',
      description: 'Your own branded cloud PBX system and reseller management portal',
      volume: 'Unlimited Tenants & Domains',
      pricing: {
        model: 'Subscription-based',
        starting: 'Starting at',
        display: '$299.99/mo'
      },
      highlights: [
        { label: 'Setup Time', value: '< 24 hours', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        { label: 'Support', value: '24/7 Reseller Support', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { label: 'Uptime SLA', value: '99.95%', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
      ],
      features: [
        '100% white-label system setup',
        'Custom logo, colors & domain settings',
        'Reseller Management Dashboard',
        'Set custom client rates & margins',
        'Pre-integrated digital wallet reselling',
        'Custom Webhooks & Billing API',
        'White-label customer documentation',
        'Dedicated success manager support'
      ],
      cta: 'Become a Reseller',
      popular: false
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-transparent overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[140px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center space-x-2 text-sm font-semibold text-blue-300 bg-blue-950/40 px-4 py-2 rounded-full border border-blue-500/20">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.6)]"></div>
            <span>Affordable Pricing</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Simple, Transparent Pricing
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> For Every Business</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Get toll-free numbers and cloud communication at prices that make sense. 
            <strong className="text-gray-200"> No setup fees, no contracts, no surprises.</strong>
          </p>
        </div>

        {/* Pricing Cards Grid - 4 items: responsive grid wrapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className={`relative group flex flex-col h-full ${
                solution.popular ? 'lg:-translate-y-2' : ''
              }`}
            >
              {/* Popular/Special Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className={`px-5 py-1.5 rounded-full text-xs font-semibold shadow-lg border ${
                  solution.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-blue-400/20' 
                    : 'bg-slate-900 text-gray-300 border-white/5'
                }`}>
                  {solution.badge}
                </div>
              </div>

              {/* Main Card (Glassmorphic) */}
              <div className={`glass-card p-6 rounded-3xl flex flex-col h-full pt-8 ${
                solution.popular 
                  ? 'border-blue-500/30 bg-slate-900/50 shadow-blue-500/5 shadow-2xl' 
                  : 'border-white/5 hover:border-white/10'
              }`}>
                
                {/* Card Header */}
                <div className="text-center mb-6 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white">
                      {solution.tier}
                    </h3>
                    <p className="text-xs font-semibold text-blue-300 bg-blue-950/40 border border-blue-500/15 px-3 py-1 rounded-full inline-block">
                      {solution.tagline}
                    </p>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  
                  {/* Volume Badge */}
                  <div className="inline-flex items-center space-x-2 bg-white/5 px-4 py-1.5 rounded-full text-xs font-medium text-gray-300 border border-white/5">
                    <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                    <span>{solution.volume}</span>
                  </div>
                </div>

                {/* Pricing Display */}
                <div className="text-center mb-6 p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <div className="space-y-1">
                    <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                      {solution.pricing.starting}
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {solution.pricing.display}
                    </div>
                    <div className="text-xs text-gray-400">
                      {solution.pricing.model}
                    </div>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {solution.highlights.map((highlight, idx) => (
                    <div key={idx} className="text-center space-y-1.5">
                      <div className="w-8 h-8 mx-auto rounded-lg flex items-center justify-center bg-blue-500/10 border border-blue-500/15">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={highlight.icon} />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white truncate">
                          {highlight.value}
                        </div>
                        <div className="text-[10px] text-gray-400 truncate">
                          {highlight.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-6 flex-grow">
                  <h4 className="font-semibold text-white text-xs uppercase tracking-wider">
                    What's Included
                  </h4>
                  <ul className="space-y-2.5">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2.5 text-xs text-gray-400">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-blue-500/10 text-cyan-400 border border-blue-500/15">
                          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="leading-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="text-center pt-4 border-t border-white/5">
                  <Link 
                    to={`?quote=${solution.tier === 'Whitelabel Reseller' ? 'reseller' : (solution.tier === 'Growth' ? 'tollfree' : 'consultation')}`}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-102 inline-block text-center ${
                      solution.popular
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    {solution.cta}
                  </Link>
                </div>

                {/* Card Glow Effect */}
                {solution.popular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Volume Savings Section - Styled Dark Premium */}
        <div className="bg-gradient-to-b from-[#080b16] to-[#03050e] rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/5 relative overflow-hidden">
          {/* Background Grid */}
          <div className="telecom-grid opacity-[0.2]" />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-10 space-y-4">
              <div className="inline-flex items-center space-x-2 text-sm font-semibold text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span>Scale & Save</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Volume Discounts That
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Grow With You</span>
              </h3>
              
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                The more you scale, the more you save. Our volume-based pricing ensures maximum value as your business expands globally.
              </p>
            </div>

            {/* Discount Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { volume: '10K+', discount: '5%', tier: 'Standard', description: 'Growing businesses' },
                { volume: '100K+', discount: '15%', tier: 'Premium', description: 'Enterprise scale' },
                { volume: '100+', discount: '25%', tier: 'Enterprise', description: 'Large organization volume' }
              ].map((tier, index) => (
                <div 
                  key={index} 
                  className="relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.05] transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-4xl font-extrabold font-mono text-cyan-400">
                        {tier.discount}
                      </div>
                      <div className="text-lg font-semibold text-white">
                        {tier.volume} Numbers
                      </div>
                      <div className="text-xs text-cyan-300 bg-cyan-900/40 px-3 py-1 rounded-full border border-cyan-500/20 inline-block">
                        {tier.tier} Tier
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm">
                      {tier.description}
                    </p>
                    
                    <div className="pt-4 border-t border-white/5">
                      <button className="text-cyan-400 font-bold text-xs hover:text-cyan-300 transition-colors group flex items-center mx-auto">
                        <span>Calculate Savings</span>
                        <svg className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="text-center mt-20">
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-gray-400">
              Questions about pricing or need a custom solution for your specific requirements?
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn btn-primary px-8 py-4">
                Schedule Consultation
              </button>
              
              <button className="btn btn-secondary px-8 py-4">
                View FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;