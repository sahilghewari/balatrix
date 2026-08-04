import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TiltCard from '../common/TiltCard';

const FeaturesSection = () => {
  const containerRef = useRef(null);
  const rowRef = useRef(null);
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
        "Operational Routing (Schedules)"
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
        'Visual Analytics Over Time'
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

  useEffect(() => {
    const context = gsap.context(() => {
      const row = rowRef.current;
      if (!row) return;

      const scrollWidth = row.scrollWidth;
      const windowWidth = window.innerWidth;
      const translateAmount = scrollWidth - windowWidth + (windowWidth * 0.2); // include horizontal padding

      gsap.to(row, {
        x: -translateAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: '.sticky-wrapper',
          invalidateOnRefresh: true,
        }
      });
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={containerRef} className="features-scroll-section relative bg-transparent border-b border-[var(--border-dark)] h-[220vh]">
      <div className="sticky-wrapper sticky top-0 h-screen flex flex-col justify-center overflow-hidden w-full">
        {/* Background Grids */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute left-[50%] top-[30%] w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-[140px] -translate-x-1/2" />
        </div>

        <div className="relative z-10 w-full flex flex-col justify-between py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 shrink-0 px-4">
            <h2 className="text-xs font-bold text-[var(--color-accent)] tracking-widest uppercase mb-3">
              Capabilities
            </h2>

            <p className="font-display-md text-[var(--text-dark-primary)] leading-tight">
              Everything you need to scale.
            </p>

            <p className="mt-2.5 text-sm text-[var(--text-dark-secondary)] max-w-xl mx-auto font-normal">
              Uncompromising quality and feature-rich capabilities designed for modern technical teams and contact centers.
            </p>
          </div>

          {/* Features Cards Horizontal Row */}
          <div className="w-full overflow-hidden px-[10vw]">
            <div ref={rowRef} className="features-cards-row flex flex-row gap-8 w-max">
              {features.map((feature, idx) => (
                <div key={idx} className="w-[400px] sm:w-[500px] md:w-[600px] shrink-0">
                  <TiltCard className="premium-card p-8 flex flex-col h-full group">
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
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
