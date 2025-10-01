import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Toll-Free Numbers",
      description: "Instantly get professional toll-free numbers for US & Canada. Our automated system ensures rapid setup with 99.9% success rates.",
      features: [
        "Instant number activation",
        "US & Canada coverage", 
        "Multiple number patterns (800, 888, 877, etc.)",
        "Custom vanity numbers available",
        "Easy online management"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      popular: true
    },
    {
      id: 2,
      title: "Business Communication",
      description: "Cloud-based phone system with advanced features designed for modern businesses. Scale from 1 to 1000+ users seamlessly.",
      features: [
        "Call forwarding & routing",
        "Voicemail to email",
        "Auto-attendant & IVR",
        "Call analytics & reporting",
        "Mobile & desktop apps"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "24/7 Support",
      description: "Round-the-clock support from our communication experts. Get immediate help with setup, features, and troubleshooting.",
      features: [
        "24/7/365 availability",
        "Phone & email support",
        "Live chat assistance",
        "Setup & configuration help",
        "Billing & account support"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12l.01.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Custom Solutions",
      description: "Tailored communication solutions for unique business needs. From complex call routing to specialized integrations.",
      features: [
        "Custom call routing",
        "CRM integrations",
        "Advanced reporting",
        "Multi-location setup",
        "Compliance assistance"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Cost Optimization",
      description: "Reduce your communication costs with our affordable rates and smart routing technology. Save up to 70% on phone bills.",
      features: [
        "Competitive US & Canada rates",
        "No hidden fees",
        "Flexible billing options",
        "Usage analytics",
        "Cost tracking tools"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Mobile & Desktop Apps",
      description: "Take your business phone system anywhere with our mobile and desktop applications. Stay connected from any device.",
      features: [
        "iOS & Android apps",
        "Windows & Mac desktop",
        "Cloud synchronization",
        "Offline capabilities",
        "Push notifications"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Choose Your Numbers",
      description: "Select from available toll-free numbers or request custom vanity numbers for your business."
    },
    {
      step: "02", 
      title: "Quick Setup",
      description: "Configure call forwarding, voicemail, and other features through our easy-to-use dashboard."
    },
    {
      step: "03",
      title: "Go Live Instantly",
      description: "Your toll-free numbers are active immediately with full features and 24/7 support."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Continuous monitoring, feature updates, and customer support to keep you connected."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen sm:min-h-[70vh] bg-gradient-to-br from-white via-gray-50/50 to-gray-50 flex items-center justify-center overflow-hidden relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-16 sm:w-32 h-16 sm:h-32 border border-blue-200 rounded-lg transform rotate-12 opacity-30 animate-float" />
          <div className="absolute bottom-16 sm:bottom-32 left-8 sm:left-40 w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-20 sm:top-40 right-12 sm:right-60 w-8 sm:w-16 h-8 sm:h-16 border-2 border-blue-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-24 xl:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8">
              {/* Small intro */}
              <div className="text-sm font-medium text-gray-500 opacity-0 animate-fade-in-up" style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Our Services 📞
              </div>

              {/* Main Headline */}
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-[-0.02em] opacity-0 animate-fade-in-up"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  animationDelay: '0.3s',
                  animationFillMode: 'forwards'
                }}
              >
                Business<br />Communication<br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
              </h1>

              {/* Supporting subtext */}
              <p 
                className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-full lg:max-w-lg opacity-0 animate-fade-in-up"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  animationDelay: '0.5s',
                  animationFillMode: 'forwards'
                }}
              >
                Complete toll-free number and cloud communication solutions for businesses. 
                Affordable, reliable, and easy to use with full US & Canada coverage.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-xl text-sm sm:text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Get Started
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-px text-sm sm:text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Schedule Consultation
                </button>
              </div>

              {/* Trust indicators */}
              <div className="pt-6 sm:pt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-medium text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-800">6</span>
                    <span>Core Services</span>
                  </div>
                  <div className="w-px h-3 sm:h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-800">24/7</span>
                    <span>Support</span>
                  </div>
                  <div className="w-px h-3 sm:h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-800">Instant</span>
                    <span>Setup</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:block opacity-0 animate-fade-in-right" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
              <div className="relative h-80 xl:h-96 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-3 lg:gap-4 text-center">
                  <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg border">
                    <div className="text-xl lg:text-2xl xl:text-3xl mb-2 lg:mb-3">📞</div>
                    <div className="text-sm lg:text-base xl:text-lg font-bold text-gray-900 mb-1 lg:mb-2">Toll-Free Numbers</div>
                    <div className="text-xs lg:text-sm text-gray-600">US & Canada</div>
                  </div>
                  <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg border">
                    <div className="text-xl lg:text-2xl xl:text-3xl mb-2 lg:mb-3">☁️</div>
                    <div className="text-sm lg:text-base xl:text-lg font-bold text-gray-900 mb-1 lg:mb-2">Cloud System</div>
                    <div className="text-xs lg:text-sm text-gray-600">Advanced Features</div>
                  </div>
                  <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg border">
                    <div className="text-xl lg:text-2xl xl:text-3xl mb-2 lg:mb-3">🔧</div>
                    <div className="text-sm lg:text-base xl:text-lg font-bold text-gray-900 mb-1 lg:mb-2">Custom Solutions</div>
                    <div className="text-xs lg:text-sm text-gray-600">Tailored Setup</div>
                  </div>
                  <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg border">
                    <div className="text-xl lg:text-2xl xl:text-3xl mb-2 lg:mb-3">📱</div>
                    <div className="text-sm lg:text-base xl:text-lg font-bold text-gray-900 mb-1 lg:mb-2">Mobile Apps</div>
                    <div className="text-xs lg:text-sm text-gray-600">Stay Connected</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Visual Element */}
            <div className="lg:hidden mt-6 sm:mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl mb-2">📞</div>
                  <div className="text-sm sm:text-base font-bold text-gray-900 mb-1">Toll-Free Numbers</div>
                  <div className="text-xs text-gray-600">US & Canada</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl mb-2">☁️</div>
                  <div className="text-sm sm:text-base font-bold text-gray-900 mb-1">Cloud System</div>
                  <div className="text-xs text-gray-600">Advanced Features</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl mb-2">🔧</div>
                  <div className="text-sm sm:text-base font-bold text-gray-900 mb-1">Custom Solutions</div>
                  <div className="text-xs text-gray-600">Tailored Setup</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl mb-2">📱</div>
                  <div className="text-sm sm:text-base font-bold text-gray-900 mb-1">Mobile Apps</div>
                  <div className="text-xs text-gray-600">Stay Connected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-sm font-medium text-blue-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              OUR SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Comprehensive communication solutions designed for reliability and ease of use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
                {service.popular && (
                  <div className="absolute -top-4 left-8">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures seamless deployment and optimal performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Services;