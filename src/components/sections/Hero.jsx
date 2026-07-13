import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TiltCard from '../common/TiltCard';

const Hero = () => {
  return (
    <section className="canvas-dark relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Soft Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-[5%] top-[5%] w-[500px] h-[500px] bg-[var(--color-accent)]/15 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute right-[5%] bottom-[10%] w-[600px] h-[600px] bg-[var(--color-accent)]/10 rounded-full blur-[160px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 lg:pr-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent-light)] px-4 py-1.5 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse shadow-[0_0_8px_var(--color-accent)]"></span>
              <span className="font-semibold text-xs tracking-wider uppercase">Enterprise Cloud Telephony</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display-xl tracking-tight text-[var(--text-dark-primary)] leading-[1.08] lg:max-w-xl"
            >
              The <em>ultimate</em> <br />
              <span className="text-[var(--color-accent)] font-normal">
                cloud telephony
              </span> <br />
              platform.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-[var(--text-dark-secondary)] max-w-lg leading-relaxed font-normal"
            >
              Balatrix provides affordable US and Canada phone numbers with a fully hosted cloud PBX, enabling businesses to deploy scalable calling operations instantly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link to="?quote=tollfree" className="btn-pill btn-pill-primary text-base px-8 py-3.5 w-full sm:w-auto text-center">
                Get Your Number
              </Link>
              <Link to="?quote=consultation" className="btn-pill btn-pill-secondary text-base px-8 py-3.5 w-full sm:w-auto text-center">
                Talk to an Engineer
              </Link>
            </motion.div>
          </div>

          {/* Visual Element: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            <TiltCard>
              <div className="relative rounded-xl overflow-hidden group border border-[var(--border-dark)] bg-[var(--canvas-dark-elevated)] backdrop-blur-sm p-2 shadow-2xl">
                <img
                  src="/images/hero_dashboard_1772447946359.png"
                  alt="Balatrix Live Communications Analytics"
                  width="1200"
                  height="800"
                  className="w-full h-auto object-cover object-center rounded-lg transform transition-transform duration-700 group-hover:scale-[1.01]"
                />

                {/* Floating SLA Badge */}
                <div className="absolute bottom-6 left-6 z-20 bg-[var(--canvas-dark-deep)]/95 backdrop-blur-md border border-[var(--border-dark)] rounded-xl p-4 shadow-xl animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--color-emerald)]/10 flex items-center justify-center border border-[var(--color-emerald)]/20">
                    <svg className="w-5 h-5 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[var(--text-dark-primary)] text-xs font-bold leading-tight">Active Node Health</p>
                    <p className="text-[var(--color-emerald)] text-[10px] font-bold tracking-wider uppercase mt-0.5">100% Operational</p>
                  </div>
                </div>
            </div>
          </div>
        </TiltCard>
      </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;