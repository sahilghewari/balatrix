import React from 'react';

const ProductVisuals = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-semibold text-blue-400 tracking-wide uppercase mb-3">The Platform</h2>
                    <p className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Everything you need to build at scale.
                    </p>
                    <p className="mt-4 text-xl text-gray-400">
                        A powerful suite of tools designed for developers and IT teams to orchestrate complex telecom workflows.
                    </p>
                </div>

                {/* Visuals Grid */}
                <div className="grid lg:grid-cols-2 gap-8 items-stretch">

                    {/* Main Dashboard / Analytics */}
                    <div className="glass-card p-8 rounded-2xl border-white/5 overflow-hidden flex flex-col justify-between h-full group">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Real-time Analytics</h3>
                            <p className="text-gray-400 text-sm mb-8">Monitor call volumes, SLA compliance, and network health instantly.</p>
                        </div>

                        <div className="relative h-64 bg-slate-950/40 border border-white/5 rounded-xl overflow-hidden mt-auto">
                            {/* Mock Graph */}
                            <div className="absolute inset-x-0 bottom-0 flex items-end px-4 pb-4 space-x-2 h-40">
                                {[40, 70, 45, 90, 65, 85, 55, 100, 75, 40, 60].map((h, i) => (
                                    <div key={i} className="flex-1 bg-blue-500/10 rounded-t-sm relative group-hover:bg-blue-500/20 transition-colors" style={{ height: `${h}%` }}>
                                        <div className="absolute bottom-full left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-8">
                        {/* Call Routing Builder */}
                        <div className="glass-card p-8 rounded-2xl border-white/5 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Visual Call Routing</h3>
                                <p className="text-gray-400 text-sm mb-6">Build resilient IVR menus and failover rules without touching code.</p>
                            </div>
                            <div className="bg-slate-950/40 rounded-xl p-4 border border-white/5 space-y-3">
                                <div className="flex items-center justify-between bg-slate-900/50 border border-white/5 p-3 rounded shadow-sm">
                                    <span className="text-xs font-semibold text-gray-300">Incoming Call</span>
                                    <div className="w-16 h-px bg-white/10" />
                                    <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-400 font-mono border border-white/5">Condition: Time</span>
                                </div>
                                <div className="flex items-center px-4">
                                    <div className="w-0.5 h-6 bg-white/10" />
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-1 bg-slate-900/50 border border-blue-500/30 p-3 rounded shadow-sm border-l-4 border-l-blue-500">
                                        <span className="text-[10px] block text-gray-500 mb-1">Business Hours</span>
                                        <span className="text-xs font-semibold text-gray-300">Ring-group</span>
                                    </div>
                                    <div className="flex-1 bg-slate-900/50 border border-white/5 p-3 rounded shadow-sm">
                                        <span className="text-[10px] block text-gray-500 mb-1">After Hours</span>
                                        <span className="text-xs font-semibold text-gray-300">IVR Menu</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* WebRTC Softphone */}
                        <div className="glass-card p-8 rounded-2xl border-white/5 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Free Built-in Softphone Portal</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">Make and receive calls instantly from your browser with our secure WebRTC softphone. No extra hardware, downloads, or complicated desk phone setups required.</p>
                            </div>
                            <div className="bg-slate-950/40 rounded-xl p-4 border border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full flex items-center justify-center shadow-md">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white">Web Softphone</div>
                                        <div className="text-xs text-emerald-400 font-bold tracking-wide flex items-center gap-1.5 mt-0.5">
                                           <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span> READY
                                        </div>
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

export default ProductVisuals;
