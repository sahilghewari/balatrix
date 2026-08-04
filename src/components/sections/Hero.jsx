import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

      tl.fromTo('.hero-title',
        { opacity: 0, y: 45, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1 }
      )
        .fromTo('.hero-description',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          '-=0.9'
        )
        .fromTo('.hero-buttons',
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1 },
          '-=0.9'
        )
        .fromTo('.hero-footer',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0 },
          '-=0.75'
        );

      // Loop visual bobbing of scroll down indicator
      gsap.to('.hero-scroll-indicator-dot', {
        y: 6,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'power1.inOut'
      });
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={containerRef} className="canvas-dark relative min-h-screen flex flex-col justify-between pt-36 pb-8 overflow-hidden">
      {/* Soft Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-[10%] top-[10%] w-[500px] h-[500px] bg-[var(--color-accent)]/20 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute right-[10%] bottom-[15%] w-[600px] h-[600px] bg-[var(--color-accent)]/15 rounded-full blur-[160px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/55 via-black/35 to-transparent" />

      {/* Main Content Area (Centered) */}
      <div className="flex-grow flex items-center justify-center relative z-10 w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

          <h1 className="hero-title text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[var(--text-dark-primary)] leading-[1.12] max-w-4xl opacity-0 text-center">
            The Ultimate <span className="text-[var(--color-accent)] font-extrabold">cloud telephony</span> platform.
          </h1>

          <p className="hero-description text-base sm:text-lg lg:text-xl text-[var(--text-dark-secondary)]/90 max-w-2xl leading-relaxed font-normal opacity-0 mt-6 text-center">
            Balatrix provides affordable US and Canada phone numbers with a fully hosted cloud PBX, enabling businesses to deploy scalable calling operations instantly.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 pt-8 opacity-0 justify-center w-full sm:w-auto">
            <Link to="?quote=tollfree" className="btn-pill btn-pill-primary text-base px-8 py-3.5 w-full sm:w-auto text-center font-semibold shadow-lg shadow-[var(--color-accent)]/20 transition-all duration-300 hover:scale-105">
              Get Your Number
            </Link>
            <Link to="?quote=consultation" className="btn-pill btn-pill-secondary text-base px-8 py-3.5 w-full sm:w-auto text-center font-semibold transition-all duration-300 hover:scale-105">
              Talk to an Engineer
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Metrics & Features Row */}
      <div className="hero-footer relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 shrink-0 opacity-0 pb-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8">
        </div>
      </div>
    </section>
  );
};

export default Hero;
