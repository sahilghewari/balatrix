import React, { useEffect, useRef } from 'react';

const ServicesOverview = () => {
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

  const capabilities = [
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      badge: "US & Canada",
      title: "Toll-Free Numbers",
      description: "Get affordable toll-free numbers (800, 888, 877, 866, 855, 844, 833) for US and Canada. Instant setup with competitive pricing and no hidden fees.",
      metrics: [
        { label: "Setup Time", value: "< 24 hours" },
        { label: "Cost Savings", value: "Up to 60%" },
        { label: "Coverage", value: "US & Canada" }
      ],
      features: ["Vanity numbers available", "Number porting included", "Instant activation", "Volume discounts"]
    },
    {
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      badge: "Cloud-Based",
      title: "Business Communication",
      description: "Complete cloud business phone system with advanced features. No hardware needed - manage everything from our intuitive web dashboard.",
      metrics: [
        { label: "Features Included", value: "50+" },
        { label: "Uptime", value: "99.9%" },
        { label: "Support", value: "24/7" }
      ],
      features: ["Auto attendant & IVR", "Call forwarding & routing", "Voicemail to email", "Conference calling"]
    },
    {
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      badge: "Tailored Solutions",
      title: "Custom Solutions",
      description: "Every business is unique. We create customized communication solutions that fit your specific needs, budget, and growth plans.",
      metrics: [
        { label: "Customization", value: "100%" },
        { label: "Setup Time", value: "2-5 days" },
        { label: "Scalability", value: "Unlimited" }
      ],
      features: ["Custom call flows", "API integrations", "Branded solutions", "Dedicated support"]
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Premium Background System */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/40"></div>
      
      {/* Subtle Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Radial Gradients for Depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-100/30 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-purple-100/20 to-transparent blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-6 fade-in-up">
          <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-600 bg-gray-100/60 px-3 sm:px-4 py-2 rounded-full border border-gray-200/60">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>Core Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] max-w-4xl mx-auto px-4">
            Affordable Toll-Free Numbers 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> & Cloud Communication</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Get toll-free numbers for US & Canada with cloud-based business phone systems. 
            <strong className="text-gray-800"> Affordable pricing, fast setup, complete customization.</strong>
          </p>
        </div>

        {/* Premium Capabilities Grid */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center fade-in-up ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Content Side */}
              <div className={`lg:col-span-6 space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:col-start-7' : ''}`}>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={capability.icon} />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50 px-2 sm:px-3 py-1 rounded-full border border-blue-200">
                      {capability.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                    {capability.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {capability.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center space-y-1 sm:space-y-2">
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 font-mono">
                        {metric.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 font-medium">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 text-sm">
                      <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                    <span>Explore This Capability</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Visual Side */}
              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative">
                  {/* Main Visual Container */}
                  <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 lg:p-12 transform hover:scale-[1.02] transition-transform duration-500">
                    {/* Abstract Visual Elements */}
                    <div className="space-y-6">
                      {/* Header Bar */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="text-xs font-mono text-gray-400">
                          {capability.badge.toLowerCase().replace(' ', '-')}.balatrix.com
                        </div>
                      </div>

                      {/* Content Representation */}
                      <div className="space-y-4">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                        
                        {/* Data Visualization */}
                        <div className="grid grid-cols-3 gap-4 py-6">
                          {[1, 2, 3].map((item) => (
                            <div key={item} className="space-y-2">
                              <div className={`h-16 bg-gradient-to-t from-blue-500 to-blue-300 rounded-lg animate-pulse`} 
                                   style={{ animationDelay: `${item * 0.2}s` }}></div>
                              <div className="h-2 bg-gray-100 rounded w-full"></div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4">
                          <div className="flex space-x-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                            <div className="w-8 h-8 bg-purple-100 rounded-full"></div>
                          </div>
                          <div className="h-6 bg-emerald-100 rounded-full w-20"></div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-80 animate-float"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full opacity-60 animate-float-delayed"></div>
                  </div>

                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl transform scale-110"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div className="text-center mt-32 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="relative max-w-4xl mx-auto">
            {/* Background Card */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 lg:p-16 shadow-2xl border border-gray-700/50 relative overflow-hidden">
              {/* Subtle Pattern Overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    Ready to Scale Your Infrastructure?
                  </h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Join 5K+ businesses who trust Balatrix for their toll-free communication needs. 
                    <strong className="text-white"> Get your custom solution in 48 hours.</strong>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <button className="inline-flex items-center space-x-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 hover:scale-105 hover:shadow-xl">
                    <span>Get Your Quote</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  
                  <button className="inline-flex items-center space-x-3 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Watch Demo</span>
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center space-x-8 pt-8 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white font-mono">50K+</div>
                    <div className="text-sm text-gray-400">Numbers Deployed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white font-mono">150+</div>
                    <div className="text-sm text-gray-400">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white font-mono">99.99%</div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;