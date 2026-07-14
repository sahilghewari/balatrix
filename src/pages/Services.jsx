import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';

const Services = () => {
  // Scroll to services grid
  const scrollToCoreServices = () => {
    const coreServices = document.getElementById('core-services');
    if (coreServices) {
      coreServices.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const services = [
    {
      id: 1,
      title: "US & Canada Toll-Free Numbers",
      description: "Provision premium 800, 888, 877, 866, 855, 844, and 833 toll-free numbers instantly. Build customer trust with a nationwide corporate presence.",
      features: [
        "Instant online provisioning",
        "SMS-enabled toll-free numbers",
        "Local prefix routing options",
        "Free incoming call minutes"
      ],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      popular: true
    },
    {
      id: 2,
      title: "Fully Hosted Cloud PBX System",
      description: "A complete virtual telephone switchboard. Manage your ring groups, interactive voice responses (IVR), business hours, and voicemails from a secure cloud interface.",
      features: [
        "Multi-level IVR & auto-attendant",
        "Time-based routing (Schedules)",
        "Departments & extensions setup",
        "Voicemail-to-email routing"
      ],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Free Web-Based Softphone",
      description: "Make and receive high-definition voice calls directly inside your web browser. No software to download, no SIP desk phones required.",
      features: [
        "In-browser dialing pad",
        "High-definition Opus audio codec",
        "Real-time wallet balance display",
        "Call history & recording access"
      ],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Custom Integrations & APIs",
      description: "Integrate calling, SMS, and wallet events directly into your existing SaaS platform, CRM, or billing engine using our developer-first API endpoints.",
      features: [
        "RESTful pricing & trunk provisioning APIs",
        "Real-time webhook call event streams",
        "Client wallet balance recharge APIs",
        "Complete technical documentation"
      ],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Whitelabel Reseller Platform",
      description: "Launch your own branded cloud PBX business. Set up custom domains, upload your logos, manage clients in a multi-tenant dashboard, and configure custom billing rates.",
      features: [
        "100% white-label customer interface",
        "Domain mapping & color configuration",
        "Custom billing cycles & markup rates",
        "White-label client wallets & invoices"
      ],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    }
  ];

  const processSteps = [
    { step: "01", title: "Select Number", description: "Choose a toll-free number from our vast digital catalog of prefixes and vanity styles." },
    { step: "02", title: "Configure PBX", description: "Map call routing structures, departments, IVR menus, and ring groups in our dashboard." },
    { step: "03", title: "Add Wallet Funds", description: "Top up your prepaid digital wallet securely to activate calling operations instantly." },
    { step: "04", title: "Start Calling", description: "Open our browser softphone or configure your SIP credentials to make your first live call." }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <SEO 
        title="Services" 
        description="Comprehensive cloud telephony and VoIP services including US/Canada toll-free numbers, hosted cloud PBX, web softphone, and whitelabel reseller platforms." 
        canonicalUrl="https://balatrix.com/services"
        keywords="cloud telephony services, toll free numbers, hosted pbx, browser phone, voip api, whitelabel pbx"
      />
      
      {/* Hero Section */}
      <section className="min-h-screen sm:min-h-[70vh] bg-transparent flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="telecom-grid opacity-[0.3]" />
          <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-blue-900/10 rounded-full blur-[110px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-cyan-900/10 rounded-full blur-[110px]" />

          {/* Floating SVG Crystal */}
          <div className="absolute top-1/4 left-[15%] w-24 h-24 opacity-30 animate-float-poly">
            <svg viewBox="0 0 100 100" fill="none">
              <polygon points="50,10 90,35 90,65 50,90 10,65 10,35" stroke="#3b82f6" strokeWidth="1.5" />
              <line x1="50" y1="10" x2="50" y2="90" stroke="#3b82f6" strokeWidth="1" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-24 xl:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 w-full overflow-hidden">
              <div className="inline-flex items-center space-x-1.5 bg-blue-950/40 border border-blue-500/20 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                <span>Advanced Telecom Services 🌐</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                Business<br />Communication<br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-full lg:max-w-xl">
                Launch your US or Canada calling operation in minutes with Balatrix — get toll-free numbers, a cloud PBX, and complete call management at a fraction of traditional telecom costs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button onClick={scrollToCoreServices} className="btn btn-primary text-base px-8 py-4">
                  Explore Services
                </button>
                <Link to="?quote=consultation" className="btn btn-secondary text-base px-8 py-4 font-semibold text-center">
                  Schedule Consultation
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-white/5 mt-8">
                <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-300">5</span>
                    <span>Core Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-300">24/7</span>
                    <span>Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-300">Instant</span>
                    <span>Setup</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Visual Element */}
            <div className="hidden lg:block">
              <div className="relative h-80 xl:h-96 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="glass-card p-5 rounded-xl border-white/5">
                    <div className="text-3xl mb-3">📞</div>
                    <div className="text-lg font-bold text-white mb-1">Toll-Free Numbers</div>
                    <div className="text-xs text-gray-400">US & Canada</div>
                  </div>
                  <div className="glass-card p-5 rounded-xl border-white/5">
                    <div className="text-3xl mb-3">☁️</div>
                    <div className="text-lg font-bold text-white mb-1">Cloud System</div>
                    <div className="text-xs text-gray-400">Advanced Features</div>
                  </div>
                  <div className="glass-card p-5 rounded-xl border-white/5">
                    <div className="text-3xl mb-3">🔧</div>
                    <div className="text-lg font-bold text-white mb-1">Custom Solutions</div>
                    <div className="text-xs text-gray-400">Tailored Setup</div>
                  </div>
                  <div className="glass-card p-5 rounded-xl border-white/5">
                    <div className="text-3xl mb-3">🌐</div>
                    <div className="text-lg font-bold text-white mb-1">Free Web Softphone</div>
                    <div className="text-xs text-gray-400">Call from browser</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="core-services" className="py-24 bg-transparent relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Our Core <em>Services</em>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive communication solutions designed for reliability and ease of use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group relative glass-card p-8 rounded-2xl flex flex-col h-full">
                {service.popular && (
                  <div className="absolute -top-4 left-6 z-10">
                    <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md tracking-wider uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/15 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-colors duration-400">
                  <div className="w-7 h-7">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-4 mt-auto pt-8 border-t border-white/5">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-xs font-semibold text-gray-300">
                      <div className="w-4.5 h-4.5 bg-blue-500/10 text-cyan-400 border border-blue-500/15 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-transparent py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Our Implementation <em>Process</em>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures seamless deployment and optimal performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden lg:block absolute top-[2.5rem] left-[12.5%] right-[12.5%] h-px bg-white/10 -z-10"></div>

            {processSteps.map((process, index) => (
              <div key={index} className="text-center relative z-10">
                <div className="w-20 h-20 mx-auto bg-slate-950 rounded-full flex items-center justify-center mb-6 shadow-[0_0_0_8px_rgba(3,5,14,1)] border border-white/5">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-extrabold shadow-lg">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-950/40 relative border-t border-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[{ metric: '99.99%', label: 'Uptime SLA' }, { metric: '5K+', label: 'Happy Customers' }, { metric: '150+', label: 'Countries Covered' }, { metric: '24/7', label: 'Expert Support' }].map((stat, idx) => (
              <div key={idx} className="relative px-4">
                {idx !== 0 && <div className="hidden md:block absolute left-0 top-1/4 bottom-1/4 w-px bg-white/10"></div>}
                <div className="text-4xl md:text-5xl font-black text-blue-400 tracking-tight mb-2">
                  {stat.metric}
                </div>
                <div className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;