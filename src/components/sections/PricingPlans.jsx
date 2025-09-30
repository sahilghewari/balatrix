import React, { useEffect, useRef } from 'react';

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
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Premium Background System */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50/80"></div>
      
      {/* Subtle Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Cpath d='M50 50c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10zm0-40c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Radial Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-100/40 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-purple-100/30 to-transparent blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Premium Section Header */}
        <div className="text-center mb-20 space-y-6 fade-in-up">
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 bg-gray-100/60 px-4 py-2 rounded-full border border-gray-200/60">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Affordable Pricing</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Simple, Transparent Pricing
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> For Every Business</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get toll-free numbers and cloud communication at prices that make sense. 
            <strong className="text-gray-800"> No setup fees, no contracts, no surprises.</strong>
          </p>
        </div>

        {/* Premium Solution Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className={`relative group fade-in-up ${
                solution.popular ? 'lg:scale-105 lg:-translate-y-4' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {solution.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {solution.badge}
                  </div>
                </div>
              )}

              {/* Other Badges */}
              {!solution.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {solution.badge}
                  </div>
                </div>
              )}

              {/* Main Card */}
              <div className={`relative bg-white rounded-3xl shadow-2xl border transition-all duration-500 hover:scale-105 hover:shadow-3xl p-8 lg:p-10 h-full ${
                solution.popular 
                  ? 'border-blue-200 shadow-blue-100/50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                
                {/* Card Header */}
                <div className="text-center mb-8 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {solution.tier}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                      {solution.tagline}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  {/* Volume Badge */}
                  <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                    <span>{solution.volume}</span>
                  </div>
                </div>

                {/* Pricing Display */}
                <div className="text-center mb-8 p-6 bg-gray-50/80 rounded-2xl">
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500 font-medium">
                      {solution.pricing.starting}
                    </div>
                    <div className="text-3xl font-bold text-gray-900">
                      {solution.pricing.display}
                    </div>
                    <div className="text-sm text-gray-600">
                      {solution.pricing.model}
                    </div>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {solution.highlights.map((highlight, idx) => (
                    <div key={idx} className="text-center space-y-2">
                      <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center ${
                        solution.popular 
                          ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                          : 'bg-gray-800'
                      }`}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={highlight.icon} />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          {highlight.value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {highlight.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3 text-sm">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          solution.popular 
                            ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                            : 'bg-emerald-500'
                        }`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="text-center pt-4 border-t border-gray-100">
                  <button 
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 hover:scale-105 ${
                      solution.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {solution.cta}
                  </button>
                </div>

                {/* Card Glow Effect */}
                {solution.popular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Volume Savings Section */}
        <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 rounded-3xl p-12 lg:p-16 shadow-2xl border border-gray-800 fade-in-up" style={{ animationDelay: '0.4s' }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center space-x-2 text-sm font-medium text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span>Scale & Save</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Volume Discounts That
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Grow With You</span>
              </h3>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
                  className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-3xl font-bold font-mono text-cyan-400">
                        {tier.discount}
                      </div>
                      <div className="text-lg font-semibold text-white">
                        {tier.volume} Numbers
                      </div>
                      <div className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20 inline-block">
                        {tier.tier} Tier
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm">
                      {tier.description}
                    </p>

                    <div className="pt-4 border-t border-white/10">
                      <button className="text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors group flex items-center mx-auto">
                        <span>Calculate Savings</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 hover:shadow-2xl shadow-cyan-500/25">
                <span>Get Volume Pricing</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="text-center mt-20 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-gray-600">
              Questions about pricing or need a custom solution for your specific requirements?
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="inline-flex items-center space-x-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Schedule Consultation</span>
              </button>
              
              <button className="inline-flex items-center space-x-3 text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>View FAQ</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;