import React from 'react';
import { motion } from 'framer-motion';

const ProductVisuals = () => {
  const chartBars = [40, 70, 45, 90, 65, 85, 55, 100, 75, 40, 60];

  return (
    <section className="canvas-dark py-24 relative overflow-hidden border-b border-white/5">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="telecom-grid opacity-30" />
        <div className="absolute right-[10%] top-[20%] w-[400px] h-[400px] bg-sky-900/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute left-[5%] bottom-[20%] w-[300px] h-[300px] bg-blue-900/8 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '4s' }} />
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
            The Platform
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display-md text-white leading-tight"
          >
            Everything you need to <em>build at scale.</em>
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base text-[var(--text-dark-secondary)] max-w-xl mx-auto font-normal"
          >
            A powerful suite of tools designed for developers and IT teams to orchestrate complex telecom workflows.
          </motion.p>
        </div>

        {/* Visuals Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Main Analytics Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-8 rounded-2xl flex flex-col justify-between h-full group"
          >
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-dark-primary)] mb-2 tracking-wide">Real-time Analytics</h3>
              <p className="text-[var(--text-dark-secondary)] text-sm mb-12 font-normal">Monitor call volumes, SLA compliance, and network health instantly.</p>
            </div>

            <div className="relative h-64 bg-slate-950/30 border border-white/5 rounded-xl overflow-hidden mt-auto flex items-end p-6">
              {/* Mock Graph Bars */}
              <div className="absolute inset-x-0 bottom-0 flex items-end px-6 pb-6 space-x-2 h-44">
                {chartBars.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t-sm relative group-hover:opacity-90 transition-opacity"
                    style={{ 
                      height: `${h}%`,
                      background: `linear-gradient(to top, rgba(14,165,233,0.15), rgba(6,182,212,0.08))`
                    }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 + (i * 0.05) }}
                  >
                    <div className="absolute bottom-full left-0 w-full h-[2px] bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] shadow-[0_0_8px_var(--color-accent)]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sub Grid */}
          <div className="grid gap-8">
            
            {/* Visual Call Router */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-dark-primary)] mb-2 tracking-wide">Visual Call Routing</h3>
                <p className="text-[var(--text-dark-secondary)] text-sm mb-6 font-normal">Build resilient IVR menus and failover rules without writing code.</p>
              </div>

              <div className="bg-slate-950/30 rounded-xl p-5 border border-white/5 space-y-4">
                <div className="flex items-center justify-between bg-[var(--canvas-dark-deep)] border border-[var(--border-dark)] p-3 rounded-lg shadow-sm">
                  <span className="text-xs font-semibold text-[var(--text-dark-primary)]">Incoming Call</span>
                  <div className="w-12 h-px bg-white/10" />
                  <span className="text-[10px] bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 px-2.5 py-1 rounded text-[var(--color-accent-light)] font-mono">Condition: Time</span>
                </div>
                <div className="flex justify-between gap-4">
                  <div className="flex-1 bg-slate-900/40 border border-sky-500/20 p-3 rounded-lg shadow-sm border-l-4 border-l-sky-500">
                    <span className="text-[9px] block text-slate-500 mb-1 font-bold uppercase tracking-wider">Business Hours</span>
                    <span className="text-xs font-semibold text-slate-300">Ring-group</span>
                  </div>
                  <div className="flex-1 bg-slate-900/40 border border-white/5 p-3 rounded-lg shadow-sm">
                    <span className="text-[9px] block text-slate-500 mb-1 font-bold uppercase tracking-wider">After Hours</span>
                    <span className="text-xs font-semibold text-slate-300">IVR Menu</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Built-in Softphone */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-dark-primary)] mb-2 tracking-wide">Free Built-in Softphone Portal</h3>
                <p className="text-[var(--text-dark-secondary)] text-sm mb-6 leading-relaxed font-normal">Make and receive calls instantly from your browser with our secure WebRTC softphone. No extra hardware or downloads required.</p>
              </div>

              <div className="bg-slate-950/30 rounded-xl p-4 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">Web Softphone Portal</div>
                    <div className="text-[10px] text-emerald-400 font-bold tracking-wider flex items-center gap-1.5 mt-0.5 uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span> Connected
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductVisuals;
