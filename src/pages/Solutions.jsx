import React from 'react';
import SEO from '../components/seo/SEO';

const Solutions = () => {
  // Scroll to solutions section
  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('solutions-grid');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const solutions = [
    {
      id: 1,
      title: "Small Business",
      subtitle: "Startups & Small Companies (1-15 employees)",
      description: "Affordable toll-free communication solutions for growing businesses. Get professional phone presence without the enterprise costs.",
      features: [
        "Affordable monthly pricing starting at $9.99",
        "Instant toll-free number setup",
        "Call forwarding to any device",
        "Voicemail to email notifications",
        "Mobile & desktop apps included",
        "US & Canada toll-free coverage",
        "Basic call analytics",
        "Email support during business hours"
      ],
      benefits: [
        "Professional image with toll-free numbers",
        "No expensive hardware required",
        "Scale as your business grows",
        "Work from anywhere capabilities"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "blue",
      popular: true
    },
    {
      id: 2,
      title: "Medium Business",
      subtitle: "Growing Companies (20-50 employees)",
      description: "Advanced business communication features for expanding companies that need more than basic phone service but less than enterprise complexity.",
      features: [
        "Multiple toll-free numbers included",
        "Advanced call routing & IVR systems",
        "Team collaboration features",
        "Call recording & analytics",
        "Priority customer support",
        "Multi-location support",
        "Flexible user management"
      ],
      benefits: [
        "Support multiple departments efficiently",
        "Professional customer experience",
        "Centralized communication management",
        "Cost-effective scaling"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "green"
    },
    {
      id: 3,
      title: "Enterprise",
      subtitle: "Large Organizations (100+ employees)",
      description: "Comprehensive communication infrastructure for large organizations requiring maximum reliability, compliance, and dedicated support.",
      features: [
        "Unlimited toll-free numbers",
        "99.9% uptime guarantee with SLA",
        "24/7 dedicated account management",
        "Custom compliance frameworks",
        "Advanced security features",
        "Multi-location & international support",
        "Custom integrations & APIs",
        "White-label solutions available"
      ],
      benefits: [
        "Enterprise-grade reliability",
        "Reduce communication costs significantly",
        "Streamline global operations",
        "Maintain compliance requirements"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      color: "purple"
    },
    {
      id: 4,
      title: "Call Centers",
      subtitle: "Customer Service & Support Operations",
      description: "Specialized communication solutions for call centers, customer service teams, and support operations requiring high-volume capabilities.",
      features: [
        "High-capacity toll-free number routing",
        "Advanced call queue management",
        "Real-time analytics & reporting",
        "Agent performance tracking",
        "Call recording & quality monitoring",
        "Overflow & failover capabilities",
        "24/7 technical support"
      ],
      benefits: [
        "Improve customer satisfaction rates",
        "Optimize agent productivity",
        "Reduce abandoned call rates",
        "Scale operations efficiently"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "orange"
    },
    {
      id: 5,
      title: "Whitelabel Reseller",
      subtitle: "PBX Resellers & Telecom Entrepreneurs",
      description: "Full white-label PBX systems. Resell high-quality VoIP and cloud PBX services under your own brand with custom logos, domains, and pricing.",
      features: [
        "100% white-label system setup",
        "Resell under your custom domain",
        "Rebrand with your logos & colors",
        "Set your own pricing & margins",
        "Multi-tenant reseller panel",
        "Automated billing integration",
        "API access for integrations"
      ],
      benefits: [
        "Start a telecom business instantly",
        "Establish your own brand presence",
        "Recurring monthly revenue stream",
        "No hardware or carrier management needed"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: "teal"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "Professional toll-free communication for medical practices, clinics, and healthcare providers.",
      features: ["Patient appointment lines", "24/7 emergency numbers", "HIPAA-compliant communications"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      name: "Real Estate",
      description: "Professional communication solutions for real estate agencies, agents, and property management companies.",
      features: ["Lead capture numbers", "Property inquiry lines", "Agent direct dial"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      name: "E-commerce",
      description: "Customer service and sales support numbers for online businesses and retail operations.",
      features: ["Order support lines", "Customer service", "Sales inquiries"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      name: "SaaS Platforms",
      description: "Embedded telecom capabilities for software platforms and application developers.",
      features: ["API integration", "Multi-tenant support", "Usage analytics"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    }
  ];

  const caseStudies = [
    {
      company: "Growing E-commerce Business",
      industry: "Retail",
      challenge: "Managing customer communications across 2,500 locations with inconsistent quality and high costs.",
      solution: "Implemented cloud telephony platform with centralized management and local number provisioning.",
      results: [
        "40% reduction in communication costs",
        "99.9% uptime across all locations",
        "Improved customer satisfaction scores"
      ]
    },
    {
      company: "Healthcare Technology Startup",
      industry: "Healthcare",
      challenge: "Needed HIPAA-compliant telehealth platform that could scale from 100 to 10,000 providers.",
      solution: "Built custom telecom infrastructure with compliance frameworks and automated scaling.",
      results: [
        "Achieved HIPAA compliance in 6 weeks",
        "Scaled to 5,000 providers in first year",
        "Zero security incidents to date"
      ]
    },
    {
      company: "Global Financial Institution",
      industry: "Finance",
      challenge: "Required secure, compliant communications across 15 countries with local presence.",
      solution: "Deployed multi-region infrastructure with local numbers and compliance management.",
      results: [
        "Expanded to 15 countries in 8 months",
        "Maintained 99.99% uptime SLA",
        "Reduced regulatory compliance overhead"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <SEO 
        title="Business Solutions" 
        description="Tailored telecommunications solutions designed for your specific business needs. Discover our plans for startups, SMBs, and enterprises." 
        canonicalUrl="https://balatrix.com/solutions"
        keywords="business communication solutions, enterprise voip, small business phone system, call center telecom"
      />
      
      {/* Hero Section */}
      <section className="min-h-screen sm:min-h-[70vh] bg-transparent flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="telecom-grid opacity-[0.3]" />
          <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-purple-900/10 rounded-full blur-[110px]" />
          <div className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] bg-blue-900/10 rounded-full blur-[110px]" />
          
          {/* Floating SVG Low-Poly Prism */}
          <div className="absolute top-1/4 right-[15%] w-20 h-20 opacity-30 animate-float-poly">
            <svg viewBox="0 0 100 100" fill="none">
              <polygon points="50,15 80,45 80,75 50,90 20,75 20,45" stroke="#a78bfa" strokeWidth="1.5" />
              <line x1="50" y1="15" x2="50" y2="90" stroke="#a78bfa" strokeWidth="1" />
              <line x1="20" y1="45" x2="80" y2="45" stroke="#a78bfa" strokeWidth="1" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-24 xl:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 w-full overflow-hidden">
              <div className="inline-flex items-center space-x-1.5 bg-purple-950/40 border border-purple-500/20 text-purple-300 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                <span>Business Solutions 🏢</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                Solutions by<br />Business<br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Type</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-full lg:max-w-lg">
                Scale your business your way — pay only for what you use.
                From small startups to large enterprises, we have the right solution for your scale and industry.
                No delays. No complexity. Just plug in and start calling.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={scrollToSolutions}
                  className="btn btn-primary text-base px-8 py-4"
                >
                  Find Your Solution
                </button>
                <button className="btn btn-secondary text-base px-8 py-4">
                  Compare Options
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 sm:pt-8">
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-semibold text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-300">5</span>
                    <span>Business Types</span>
                  </div>
                  <div className="w-px h-4 bg-white/10" />
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-300">Custom</span>
                    <span>Solutions</span>
                  </div>
                  <div className="w-px h-4 bg-white/10" />
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-300">Scalable</span>
                    <span>Growth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Visual Element */}
            <div className="hidden lg:block">
              <div className="relative h-80 xl:h-96 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="glass-card p-5 rounded-2xl border-white/5">
                    <div className="text-xl font-bold text-blue-400 mb-1">Small</div>
                    <div className="text-xs text-gray-400">1-15 employees</div>
                  </div>
                  <div className="glass-card p-5 rounded-2xl border-white/5">
                    <div className="text-xl font-bold text-emerald-400 mb-1">Medium</div>
                    <div className="text-xs text-gray-400">20-50 employees</div>
                  </div>
                  <div className="glass-card p-5 rounded-2xl border-white/5">
                    <div className="text-xl font-bold text-indigo-400 mb-1">Enterprise</div>
                    <div className="text-xs text-gray-400">100+ employees</div>
                  </div>
                  <div className="glass-card p-5 rounded-2xl border-white/5">
                    <div className="text-xl font-bold text-cyan-400 mb-1">Whitelabel</div>
                    <div className="text-xs text-gray-400">Telecom Resellers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions-grid" className="py-24 bg-transparent relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Choose Your <em>Business Model</em>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Each solution is specifically designed to address the unique challenges and requirements of different business types
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`glass-card p-8 rounded-3xl group ${
                  solution.popular ? 'border-blue-500/30 bg-slate-900/50' : 'border-white/5'
                }`}
              >
                {solution.popular && (
                  <div className="absolute -top-4 left-8">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/15 group-hover:scale-115 transition-transform duration-300 shrink-0">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-400">
                      {solution.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/5 pt-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider">
                      Key Features:
                    </h4>
                    <ul className="space-y-2.5">
                      {solution.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start text-xs text-gray-400">
                          <div className="w-4.5 h-4.5 rounded-full bg-blue-500/10 text-cyan-400 border border-blue-500/15 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-2.5">
                      {solution.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-xs text-gray-400">
                          <div className="w-4.5 h-4.5 rounded-full bg-blue-500/10 text-emerald-400 border border-blue-500/15 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-transparent relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Industry-Specific <em>Solutions</em>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Specialized telecommunications solutions tailored to meet the unique compliance,
              security, and operational requirements of different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl hover:-translate-y-1 hover:border-blue-500/20 group">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/15 mb-5 w-fit group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {industry.description}
                </p>
                <div className="space-y-2.5">
                  {industry.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-400">
                      <div className="w-4 h-4 rounded-full bg-blue-500/10 text-cyan-400 border border-blue-500/15 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-transparent relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Success <em>Stories</em>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              See how companies like yours have transformed their communications infrastructure with Balatrix
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl hover:border-blue-500/20 group">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors">
                    {study.company}
                  </h3>
                  <span className="bg-blue-900/40 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/20">
                    {study.industry}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2 text-xs uppercase tracking-wider">
                    Challenge:
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2 text-xs uppercase tracking-wider">
                    Solution:
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{study.solution}</p>
                </div>

                <div className="border-t border-white/5 pt-6">
                  <h4 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider">
                    Results:
                  </h4>
                  <ul className="space-y-2.5">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start text-xs text-gray-400">
                        <div className="w-4.5 h-4.5 rounded-full bg-blue-500/10 text-emerald-400 border border-blue-500/15 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;