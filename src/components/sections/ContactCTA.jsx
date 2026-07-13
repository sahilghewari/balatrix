import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] overflow-hidden bg-[var(--canvas-dark-elevated)] border border-[var(--border-dark)] shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
        >
          {/* Background overlay grid */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Glowing orbs */}
            <div className="absolute top-[20%] left-[15%] w-[300px] h-[300px] bg-[var(--color-accent)]/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-[15%] right-[15%] w-[250px] h-[250px] bg-[var(--color-accent-light)]/5 rounded-full blur-[70px]" />
          </div>

          <div className="relative z-10 px-6 py-20 sm:py-24 lg:px-16 lg:py-28 text-center">
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 px-4 py-1.5 rounded-full text-[var(--color-accent-light)] text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
              Get Started Today
            </div>

            <h2 className="font-display-lg text-[var(--text-dark-primary)] tracking-tight mb-6 leading-tight max-w-3xl mx-auto">
              Ready to upgrade your <br className="hidden md:block" />
              communication infrastructure?
            </h2>

            <p className="text-lg text-[var(--text-dark-secondary)] mb-10 max-w-xl mx-auto font-normal leading-relaxed">
              Join thousands of modern enterprises running mission-critical voice applications on Balatrix.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/contact" className="btn-pill btn-pill-primary text-base px-8 py-3.5 w-full sm:w-auto text-center font-bold">
                Get Started Free
              </Link>
              <Link to="/contact" className="btn-pill btn-pill-secondary text-base px-8 py-3.5 w-full sm:w-auto text-center font-bold transition-all">
                Schedule a Demo
              </Link>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[var(--text-dark-muted)] font-medium tracking-wide">
              {['No credit card required', '14-day free trial', '24/7 support included'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;