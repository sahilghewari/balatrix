import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Enterprise-Grade Cloud Telephony',
      description: 'Our core Cloud Telephony engine provides complete control.',
      bullets: [
        "Global Number Provisioning (DID & TFN)",
        "Multi-level IVR (interactive voice menus)",
        "Ring groups (simultaneous, hunt, round-robin)",
        "Intelligent call forwarding (internal or external)",
        "Call monitoring (listen, whisper, barge)",
        "Time-Based Routing (Schedules)"
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Real-Time Analytics & Monitoring',
      description: 'Make data-driven decisions with our comprehensive analytics suite.',
      bullets: [
        'Live Command Center (Active calls, CPS)',
        'Call Detail Records (CDRs)',
        'Visual Analytics Over Time',
        'Call Health & Quality Metrics'
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Automated Billing & Wallet',
      description: 'A transparent, frictionless financial engine built for scale.',
      bullets: [
        'Prepaid Digital Wallets',
        'Usage-Based Metering in Real-time',
        'Flexible Custom Subscriptions',
        'Automated Enforcement & Credit Limits'
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Advanced Call Center Capabilities',
      description: 'Empower your support and sales teams with tools designed for high-volume operations.',
      bullets: [
        "Call monitoring (listen, whisper, barge)",
        "Call transfer (blind & attended)",
        "Dynamic routing based on rules & logic",
        "Per-customer and per-number configurations",
        "DTMF input handling for IVR navigation"
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Security & Multi-Tenancy',
      description: 'Built from the ground up for agencies, resellers, and large enterprises.',
      bullets: [
        'True Multi-Tenancy Management',
        'Automated Tenant Onboarding',
        'Role-Based Access Control (RBAC)',
        'Comprehensive Immutable Audit Logs'
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Whitelabel PBX & Reselling',
      description: 'Start your own branded VoIP business without managing carrier infrastructure.',
      bullets: [
        '100% white-label system setup',
        'Custom domains and brand assets',
        'Multi-tenant client management panels',
        'Custom rates, cycle config, and digital wallets'
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  return (
    <section className="canvas-dark py-24 relative overflow-hidden border-b border-[var(--border-dark)]">
      {/* Background Grids */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-[50%] top-[10%] w-[400px] h-[400px] bg-[var(--color-accent)]/5 rounded-full blur-[140px] -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold text-[var(--color-accent)] tracking-widest uppercase mb-4"
          >
            Capabilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display-md text-[var(--text-dark-primary)] leading-tight"
          >
            Everything you need to scale.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base text-[var(--text-dark-secondary)] max-w-xl mx-auto font-normal"
          >
            Uncompromising quality and feature-rich capabilities designed for modern technical teams and contact centers.
          </motion.p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card p-8 flex flex-col h-full group"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] mb-6 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[var(--text-dark-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-200">
                {feature.title}
              </h3>
              
              <p className="text-[var(--text-dark-secondary)] text-sm mb-6 leading-relaxed flex-grow font-normal">
                {feature.description}
              </p>
              
              <ul className="space-y-2.5 border-t border-[var(--border-dark)] pt-5">
                {feature.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start space-x-2.5 text-[var(--text-dark-muted)] text-[13px]">
                    <svg className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium leading-normal">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
