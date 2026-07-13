import React from 'react';
import { motion } from 'framer-motion';

const SocialProofSection = () => {
  return (
    <section className="canvas-dark py-24 relative overflow-hidden border-b border-[var(--border-dark)]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[var(--color-accent)]/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="font-display-md text-[var(--text-dark-primary)] leading-tight"
          >
            Empowering the world's most <br className="hidden sm:block" />
            <em className="text-[var(--color-accent)]">demanding engineering teams.</em>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Main Case Study */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="premium-card p-8 lg:p-12 relative overflow-hidden flex flex-col justify-center h-full group"
          >
            {/* Subtle corner gradient */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-accent)]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-accent-light)]/10 rounded-full blur-2xl pointer-events-none" />

            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
              alt="Sarah Jenkins"
              width="80"
              height="80"
              loading="lazy"
              className="w-14 h-14 rounded-full shadow-md mb-8 border-2 border-[var(--color-accent)]/30 object-cover"
            />

            {/* Large quote mark */}
            <div className="text-6xl font-black text-[var(--color-accent)]/20 leading-none mb-4 select-none">"</div>

            <blockquote className="text-lg md:text-xl font-light italic text-[var(--text-dark-primary)] leading-relaxed mb-8 relative z-10">
              Switching to Balatrix's cloud PBX infrastructure reduced our voice latency by 45%. We scale operations during peak holiday seasons instantly via API without worrying about carrier lines.
            </blockquote>

            <div>
              <div className="font-bold text-[var(--text-dark-primary)] text-sm">Sarah Jenkins</div>
              <div className="text-[var(--color-accent)] text-xs mt-0.5 font-semibold">VP of Engineering at Massive Inc.</div>
            </div>
          </motion.div>

          {/* Metrics Proof Cards */}
          <div className="flex flex-col justify-between gap-8">
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card p-8 flex items-start gap-5 h-full group"
            >
              <div className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] p-3.5 rounded-2xl border border-[var(--color-accent)]/20 shrink-0 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-extralight text-[var(--color-accent)] mb-1">1.2% → 0.01%</div>
                <h4 className="font-bold text-base text-[var(--text-dark-primary)] mb-2">Reduced Drop Rate</h4>
                <p className="text-[var(--text-dark-secondary)] text-xs leading-relaxed font-normal">Globex reduced their dropped call rate from 1.2% to 0.01% after migrating to our Anycast routing engine.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card p-8 flex items-start gap-5 h-full group"
            >
              <div className="bg-[var(--color-emerald)]/10 text-[var(--color-emerald)] p-3.5 rounded-2xl border border-[var(--color-emerald)]/20 shrink-0 group-hover:bg-[var(--color-emerald)] group-hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-extralight text-[var(--color-emerald)] mb-1">500 seats · 48h</div>
                <h4 className="font-bold text-base text-[var(--text-dark-primary)] mb-2">Deployment Speed</h4>
                <p className="text-[var(--text-dark-secondary)] text-xs leading-relaxed font-normal">Acme Corp moved their entire 500-seat call center to the cloud in under 48 hours utilizing our REST API.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
