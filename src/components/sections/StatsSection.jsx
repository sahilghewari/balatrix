import React, { useEffect, useRef, useState } from 'react';

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
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
  }, [hasAnimated]);

  const businessStats = [
    {
      number: '50K+',
      label: 'Numbers Delivered',
      description: 'Toll-free numbers activated',
      suffix: 'and counting',
      color: 'emerald'
    },
    {
      number: '99.9%',
      label: 'Uptime',
      description: 'Reliable cloud communication',
      suffix: 'guaranteed',
      color: 'blue'
    },
    {
      number: '60%',
      label: 'Cost Savings',
      description: 'Compared to traditional providers',
      suffix: 'average savings',
      color: 'purple'
    },
    {
      number: '< 24hrs',
      label: 'Setup Time',
      description: 'Fast toll-free number activation',
      suffix: 'quick start',
      color: 'orange'
    }
  ];

  const differentiators = [
    {
      title: 'Affordable & Transparent',
      description: 'No hidden fees, no long-term contracts. Get competitive rates on toll-free numbers with transparent pricing that scales with your business.',
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      badge: "Affordability"
    },
    {
      title: 'Cloud-Based Reliability',
      description: 'Modern cloud infrastructure delivers 99.9% uptime with automatic failover, redundant systems, and real-time monitoring for your peace of mind.',
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      badge: "Cloud Technology"
    },
    {
      title: 'Fully Customizable',
      description: 'Tailor every aspect of your communication system. Custom call flows, integrations, branding, and features designed specifically for your business needs.',
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      badge: "Customization"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Premium Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"></div>
      
      {/* Sophisticated Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Premium Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-600/20 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-purple-600/15 to-transparent blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-cyan-500/10 to-transparent blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enterprise Stats Dashboard */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-12 sm:space-y-16">
          {/* Section Header */}
          <div className="space-y-4 sm:space-y-6 fade-in-up">
            <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-400 bg-gray-800/60 px-3 sm:px-4 py-2 rounded-full border border-gray-700/60">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span>Proven Results</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto px-4">
              Why Businesses Choose
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Balatrix</span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Thousands of businesses trust us for affordable toll-free numbers and cloud communication solutions. 
              <strong className="text-white"> Results that speak for themselves.</strong>
            </p>
          </div>

          {/* Premium Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {businessStats.map((stat, index) => {
              const colorClasses = {
                emerald: 'from-emerald-500 to-emerald-400',
                blue: 'from-blue-500 to-blue-400',
                purple: 'from-purple-500 to-purple-400',
                orange: 'from-orange-500 to-orange-400'
              };

              return (
                <div 
                  key={index} 
                  className="relative group fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Main Stat Card */}
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-white/20">
                    <div className="text-center space-y-4">
                      <div className={`inline-block px-3 py-1 bg-gradient-to-r ${colorClasses[stat.color]} rounded-full text-xs font-semibold text-white`}>
                        {stat.suffix}
                      </div>
                      
                      <div className={`text-4xl lg:text-5xl font-bold font-mono bg-gradient-to-r ${colorClasses[stat.color]} bg-clip-text text-transparent`}>
                        {stat.number}
                      </div>
                      
                      <div>
                        <div className="text-lg font-semibold text-white mb-1">
                          {stat.label}
                        </div>
                        <div className="text-sm text-gray-400">
                          {stat.description}
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses[stat.color]} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Balatrix - Premium Layout */}
        <div className="space-y-20">
          {/* Section Divider */}
          <div className="flex items-center justify-center">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <div className="mx-8 text-gray-400 font-medium">Why Industry Leaders Choose Balatrix</div>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>

          {/* Differentiators Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div 
                key={index} 
                className="relative group fade-in-up"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-white/20 h-full">
                  <div className="space-y-6">
                    {/* Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                      </div>
                      <div className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                        {item.badge}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className="pt-6 border-t border-white/10">
                      <div className="flex items-center justify-end">
                        <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Card Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium CTA Section */}
        <div className="text-center mt-32 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="relative max-w-4xl mx-auto">
            {/* Gradient Background Card */}
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md rounded-3xl p-12 lg:p-16 border border-white/20 overflow-hidden">
              {/* Decorative Grid */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-3 text-sm font-medium text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Ready to Scale</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                    Join Thousands of Businesses<br />
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Who Trust Balatrix
                    </span>
                  </h3>
                  
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Experience professional-grade toll-free communication with dedicated support, 
                    guaranteed SLAs, and the reliability that industry leaders depend on.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 hover:shadow-2xl shadow-cyan-500/25">
                    <span>Start Your Free Trial</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  
                  <button className="inline-flex items-center space-x-3 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Schedule Consultation</span>
                  </button>
                </div>

                {/* Trust Bar */}
                <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white font-mono mb-1">5K+</div>
                    <div className="text-sm text-gray-400">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white font-mono mb-1">15+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white font-mono mb-1">24/7</div>
                    <div className="text-sm text-gray-400">Expert Support</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;