import React from 'react';

const SocialProofSection = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Empowering the world's most <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">demanding engineering teams.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Main Case Study */}
                    <div className="glass-card border border-white/5 bg-slate-900/40 rounded-3xl p-8 lg:p-12 relative overflow-hidden group h-full flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
                            alt="Sarah Jenkins"
                            width="80"
                            height="80"
                            loading="lazy"
                            className="w-20 h-20 rounded-full shadow-lg mb-8 border-4 border-slate-800 object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                        />

                        <blockquote className="text-xl md:text-2xl font-medium text-gray-200 leading-relaxed mb-8 relative z-10">
                            "Switching to Balatrix's infrastructure reduced our P99 call latency by 45%. We scale up during peak holiday seasons instantly via API without worrying about provisioning trunks."
                        </blockquote>

                        <div className="relative z-10">
                            <div className="font-bold text-white">Sarah Jenkins</div>
                            <div className="text-gray-400 text-sm">VP of Engineering at Massive Inc.</div>
                        </div>
                    </div>

                    {/* Metrics / Secondary Proof */}
                    <div className="space-y-6">
                        <div className="glass-card border border-white/5 bg-slate-900/40 rounded-3xl p-8 flex items-start gap-6 hover:-translate-y-1 transition-transform duration-300">
                            <div className="bg-blue-500/10 text-blue-400 p-4 rounded-2xl mt-1 border border-blue-500/15 shrink-0">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-white">Reduced Drop Rate</h4>
                                <p className="text-gray-400 mt-2 text-sm leading-relaxed">Globex reduced their dropped call rate from 1.2% to 0.01% after migrating to our Anycast routing engine.</p>
                            </div>
                        </div>

                        <div className="glass-card border border-white/5 bg-slate-900/40 rounded-3xl p-8 flex items-start gap-6 hover:-translate-y-1 transition-transform duration-300">
                            <div className="bg-emerald-500/10 text-emerald-400 p-4 rounded-2xl mt-1 border border-emerald-500/15 shrink-0">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-white">Deployment Speed</h4>
                                <p className="text-gray-400 mt-2 text-sm leading-relaxed">Acme Corp moved their entire 500-seat call center to the cloud in under 48 hours utilizing our REST API.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProofSection;
