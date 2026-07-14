import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-transparent pt-32 pb-16 lg:pt-36 lg:pb-24 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Grids & Telecom Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="telecom-grid opacity-[0.5]" />
        
        {/* Ambient Glowing Orbs */}
        <div className="absolute left-[10%] top-[10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute right-[5%] bottom-[15%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
        <div className="absolute left-[30%] bottom-[10%] w-[350px] h-[350px] bg-purple-900/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '6s' }} />

        {/* Floating Low-Poly Telecom Crystals (Animated SVGs inspired by HIVE) */}
        <div className="absolute top-[15%] right-[10%] w-24 h-24 opacity-40 animate-float-poly">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,10 90,35 90,65 50,90 10,65 10,35" stroke="url(#crystalGrad)" strokeWidth="1.5" fill="rgba(37,99,235,0.05)" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="url(#crystalGrad)" strokeWidth="1" opacity="0.6" />
            <line x1="10" y1="35" x2="90" y2="65" stroke="url(#crystalGrad)" strokeWidth="1" opacity="0.6" />
            <line x1="10" y1="65" x2="90" y2="35" stroke="url(#crystalGrad)" strokeWidth="1" opacity="0.6" />
            <defs>
              <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute bottom-[20%] left-[8%] w-16 h-16 opacity-30 animate-float-poly-slow">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,15 85,45 70,85 30,85 15,45" stroke="url(#crystalGrad2)" strokeWidth="1.5" fill="rgba(6,182,212,0.03)" />
            <line x1="50" y1="15" x2="30" y2="85" stroke="url(#crystalGrad2)" strokeWidth="1" opacity="0.4" />
            <line x1="50" y1="15" x2="70" y2="85" stroke="url(#crystalGrad2)" strokeWidth="1" opacity="0.4" />
            <line x1="85" y1="45" x2="15" y2="45" stroke="url(#crystalGrad2)" strokeWidth="1" opacity="0.4" />
            <defs>
              <linearGradient id="crystalGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#032B93" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Content Section */}
          <div className="space-y-8 animate-fade-in lg:pr-8">
            <div className="inline-flex items-center space-x-2 bg-blue-950/40 border border-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.6)]"></span>
              <span className="font-semibold text-xs tracking-wide uppercase">Enterprise-Grade Cloud Telephony</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              The <em>Ultimate</em> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                Cloud Telephony
              </span> <br />
              Platform.
            </h1>

            <p className="text-lg lg:text-xl text-gray-400 max-w-xl leading-relaxed">
              Balatrix provides affordable US and Canada phone numbers with a fully hosted cloud PBX, enabling businesses to start calling operations instantly without any complex setup.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="?quote=tollfree" className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                Get Your Number
              </Link>
              <Link to="?quote=consultation" className="btn btn-secondary text-lg px-8 py-4 w-full sm:w-auto font-semibold">
                Talk to an Engineer
              </Link>
            </div>
          </div>

          {/* Visual Element - Dashboard Mockup with Glowing Borders */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl shadow-[0_20px_50px_rgba(3,43,147,0.3)] overflow-hidden group border border-white/10 bg-slate-900/20 backdrop-blur-sm">
              <img
                src="/images/hero_dashboard_1772447946359.png"
                alt="Balatrix Live Communications Analytics"
                width="1200"
                height="800"
                className="w-full h-auto object-cover object-center transform transition-transform duration-700 group-hover:scale-[1.03] opacity-90"
              />

              {/* Glowing Ambient light behind image */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-65 z-10" />

              {/* Dark Theme Floating Trust Badge */}
              <div className="absolute bottom-6 left-6 z-20 bg-slate-950/85 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold leading-tight">Active Node Health</p>
                    <p className="text-emerald-400 text-xs font-semibold tracking-wide">100% OPERATIONAL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;