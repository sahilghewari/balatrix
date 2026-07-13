import React from 'react';
import { motion } from 'framer-motion';

const TrustSection = () => {
  const stats = [
    { metric: '50K+', label: 'Numbers Deployed', icon: '📡' },
    { metric: '99.99%', label: 'Uptime SLA', icon: '⚡' },
    { metric: '5K+', label: 'Active Businesses', icon: '🏢' },
    { metric: '150+', label: 'Countries Served', icon: '🌐' }
  ];

  return (
    <section className="canvas-dark py-24 relative overflow-hidden border-b border-[var(--border-dark)]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--color-accent)]/10 rounded-full blur-[100px]" />
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
            Enterprise Reliability
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display-md text-[var(--text-dark-primary)] leading-tight"
          >
            Trusted by modern teams to route<br />
            <em className="text-[var(--color-accent)]">millions of calls</em> globally.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card p-8 text-center flex flex-col justify-center items-center h-full group"
            >
              <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-extralight text-[var(--color-accent)] tracking-tight mb-3">
                {stat.metric}
              </div>
              <div className="text-xs font-bold text-[var(--text-dark-muted)] tracking-widest uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
