import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const IndustrySection = () => {
  const industries = [
    {
      id: 'enterprises',
      title: 'Large Enterprises',
      description: 'Secure, reliable routing backed by Comprehensive Audit Logs & Role-Based Access Control (RBAC) to meet strict compliance.',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800',
      accent: 'rgba(14,165,233,0.2)',
      accentBorder: 'rgba(14,165,233,0.25)'
    },
    {
      id: 'callcenters',
      title: 'Call Centers',
      description: 'Infinite concurrent call capacity. Ensure no call goes unanswered with advanced Ring Groups and Live Monitoring analytics.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800',
      accent: 'rgba(6,182,212,0.2)',
      accentBorder: 'rgba(6,182,212,0.25)'
    },
    {
      id: 'agencies',
      title: 'Agencies & Resellers',
      description: 'A perfect fit to manage clients with True Multi-tenancy, automated onboarding, and built-in Billing & Wallet systems.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800',
      accent: 'rgba(56,189,248,0.2)',
      accentBorder: 'rgba(56,189,248,0.25)'
    },
    {
      id: 'saas',
      title: 'SaaS / Tech',
      description: 'Programmatic REST API control to seamlessly embed unified voice capabilities directly into your core product.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      accent: 'rgba(16,185,129,0.2)',
      accentBorder: 'rgba(16,185,129,0.25)'
    }
  ];

  return (
    <section className="canvas-dark py-24 relative overflow-hidden border-b border-[var(--border-dark)]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-[5%] bottom-[10%] w-[350px] h-[350px] bg-[var(--color-accent)]/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute right-[5%] top-[15%] w-[300px] h-[300px] bg-[var(--color-accent-light)]/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="font-display-md text-[var(--text-dark-primary)] leading-tight"
            >
              Built for every <em className="text-[var(--color-accent)]">vertical.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-base text-[var(--text-dark-secondary)] font-normal leading-relaxed"
            >
              Transform your communication stack no matter your industry. Our infrastructure adapts to your specific regulatory and volume requirements.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link to="/solutions" className="btn-pill btn-pill-secondary">
              View All Solutions
            </Link>
          </motion.div>
        </div>

        {/* Industry Cards Grid — Glassmorphic */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col h-full premium-card overflow-hidden transition-all duration-500 group hover:-translate-y-1.5"
            >
              <div className="h-48 w-full overflow-hidden relative flex-shrink-0">
                <div
                  className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to top, ${ind.accent}, transparent)` }}
                />
                <img
                  src={ind.image}
                  alt={ind.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-95"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-[var(--text-dark-primary)] mb-2">{ind.title}</h3>
                <p className="text-[var(--text-dark-secondary)] text-xs mb-6 flex-grow leading-relaxed font-normal">
                  {ind.description}
                </p>

                <div className="mt-auto flex items-center text-[var(--color-accent)] font-semibold hover:text-[var(--color-accent-light)] transition-colors text-xs cursor-pointer">
                  <span>Learn more</span>
                  <svg className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
