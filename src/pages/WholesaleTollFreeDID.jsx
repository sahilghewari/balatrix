import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Phone,
    Globe,
    Zap,
    ShieldCheck,
    Radio,
    Search,
    Layers,
    ArrowRight,
    CheckCircle2,
    ChevronDown,
    Sparkles,
    Server,
    MessageSquare,
    Database,
    BarChart2,
    Clock,
    Briefcase
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import EnterpriseQuoteModal from '../components/modals/EnterpriseQuoteModal';

const WholesaleTollFreeDID = () => {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [activePrefix, setActivePrefix] = useState('800');
    const [activeFaq, setActiveFaq] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const openModal = () => setIsQuoteModalOpen(true);
    const closeModal = () => setIsQuoteModalOpen(false);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;

        // Simulate vanity search result
        const cleaned = searchQuery.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        setSearchResult({
            query: searchQuery,
            formatted: `1-800-${cleaned.slice(0, 7) || 'BALATRIX'}`,
            available: true,
            status: 'Available for Instant Wholesale Activation'
        });
    };

    const prefixes = [
        {
            code: '800',
            tag: 'ORIGINAL CLASSIC',
            description: 'The standard legacy toll-free prefix with 99.8% consumer brand recognition.',
            highlights: ['Highest customer trust factor', 'Ideal for enterprise flagships', 'Vanity keyword support']
        },
        {
            code: '888',
            tag: 'ENTERPRISE FAVORITE',
            description: 'Widely recognized toll-free prefix favored by financial & corporate brands.',
            highlights: ['Instant recognition', 'High availability for vanity numbers', 'Zero toll charges for callers']
        },
        {
            code: '877',
            tag: 'NATIONWIDE STANDARD',
            description: 'Versatile toll-free prefix used widely across sales and customer support lines.',
            highlights: ['Cost-effective wholesale pricing', 'High-volume concurrency support', 'Full SMS capability']
        },
        {
            code: '866',
            tag: 'GROWTH BUSINESS',
            description: 'Popular choice for medium enterprises and expanding regional call centers.',
            highlights: ['Flexible routing options', 'Fast API provisioning', 'Instant porting support']
        },
        {
            code: '855',
            tag: 'MODERN TECH',
            description: 'Preferred prefix for SaaS companies, modern tech startups, and digital brands.',
            highlights: ['Excellent vanity word availability', 'High-speed SIP interconnects', 'Full WebRTC integration']
        },
        {
            code: '833',
            tag: 'NEWEST FCC RELEASE',
            description: 'The newest official FCC toll-free prefix with the highest availability of premium numbers.',
            highlights: ['Best selection of memorable words', 'Ultra-low wholesale cost', 'Instant reservation']
        }
    ];

    const features = [
        {
            icon: Zap,
            title: "Instant Portal & API Provisioning",
            desc: "Search, reserve, and activate US & Canada toll-free DIDs in milliseconds using our automated web portal or RESTful APIs."
        },
        {
            icon: Search,
            title: "Vanity Toll-Free Search & Reservation",
            desc: "Spell your brand name or memorable phone word (e.g., 1-800-BALATRIX) with full access to nationwide SOM/RespOrg inventory."
        },
        {
            icon: Radio,
            title: "High Concurrency SIP Trunking",
            desc: "Scale call volume without artificial channel limits. Handle thousands of simultaneous incoming calls with carrier-grade capacity."
        },
        {
            icon: MessageSquare,
            title: "SMS & MMS Enabled DIDs",
            desc: "Send and receive two-way text messages and media attachments on your toll-free numbers for customer engagement and notifications."
        },
        {
            icon: Globe,
            title: "Geo & Area-Code Intelligent Routing",
            desc: "Direct incoming toll-free calls to specific regional call centers based on caller originate area codes or geographic location."
        },
        {
            icon: Server,
            title: "Automated Disaster Recovery Failover",
            desc: "Configure secondary SIP URIs and failover PSTN targets to ensure uninterrupted connectivity if a primary server encounters issues."
        },
        {
            icon: ShieldCheck,
            title: "Direct RespOrg Carrier Status",
            desc: "As a direct Responsible Organization (RespOrg), we manage numbers directly in the central SMS/800 registry without third-party delay."
        },
        {
            icon: Database,
            title: "Real-Time Billing & CDR API",
            desc: "Track per-second call durations, wallet balances, detailed CDR logs, and automated account top-ups seamlessly."
        }
    ];

    const faqs = [
        {
            q: "What is a Wholesale Toll-Free DID number?",
            a: "A Wholesale Toll-Free DID (Direct Inward Dialing) is a 8XX number (800, 888, 877, 866, 855, 844, 833) that allows customers throughout the United States and Canada to call your business free of charge. Wholesale pricing lets businesses and call centers purchase numbers and minutes at high-volume, discounted per-minute rates."
        },
        {
            q: "How fast can a new toll-free number be provisioned?",
            a: "Provisioning is instant! Numbers selected through our portal or API are reserved and active on our carrier SIP network within seconds."
        },
        {
            q: "Can I port our existing 800/8XX numbers to Balatrix?",
            a: "Yes. Balatrix handles complete RespOrg toll-free porting. We migrate your numbers smoothly with zero call downtime and handle all carrier paperwork."
        },
        {
            q: "Are toll-free numbers capable of two-way SMS messaging?",
            a: "Absolutely! All Balatrix toll-free numbers can be enabled for two-way business SMS and MMS text messaging."
        },
        {
            q: "What channel capacity or concurrency limit is provided?",
            a: "We offer high-concurrency SIP trunking without per-channel fees, allowing your call center to process hundreds or thousands of simultaneous incoming calls."
        }
    ];

    return (
        <>
            <SEO
                title="US & Canada Wholesale Toll-Free DID Numbers | Balatrix"
                description="Provision premium wholesale toll-free numbers (800, 888, 877, 866, 855, 844, 833). High-concurrency SIP trunking, vanity number search, instant API setup, and 99.99% uptime."
                keywords="wholesale toll free numbers, 800 numbers, 888 numbers, 833 numbers, toll free did, vanity 800 numbers, resporg, sip trunking toll free, us toll free"
            />

            <div className="pt-24 pb-20 overflow-hidden">
                {/* Background Glow Effects */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6 shadow-[0_0_15px_rgba(35,165,89,0.2)]"
                    >
                        <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                        <span>WHOLESALE TOLL-FREE NUMBERS (US & CANADA)</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto"
                    >
                        Nationwide Wholesale <br className="hidden sm:inline" />
                        <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Toll-Free DIDs & High-Volume SIP Trunks
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Build customer trust with premium 8XX toll-free numbers across North America. Benefit from instant API provisioning, vanity number selection, SMS enablement, and direct RespOrg carrier connectivity.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={openModal}
                            className="w-full sm:w-auto btn-pill btn-pill-primary py-4 px-8 text-base shadow-[0_4px_25px_rgba(35,165,89,0.35)] flex items-center justify-center space-x-3 group"
                        >
                            <span>Get Wholesale Rates Quote</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="#prefix-explorer"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-medium text-base transition-all duration-300 text-center backdrop-blur-md"
                        >
                            Explore 8XX Prefixes
                        </a>
                    </motion.div>

                    {/* Key Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
                    >
                        {[
                            { label: 'DIDs Available', value: '100,000+' },
                            { label: '8XX Prefixes', value: 'All 7 Supported' },
                            { label: 'Activation', value: 'Instant API' },
                            { label: 'Concurrency', value: 'Unlimited' }
                        ].map((stat, idx) => (
                            <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">{stat.value}</p>
                                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* 8XX Prefix Explorer */}
                <section id="prefix-explorer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">Supported Toll-Free Prefixes</h2>
                        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">We provide full coverage for all official US & Canada 8XX toll-free number ranges.</p>
                    </div>

                    {/* Prefix Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {prefixes.map((p) => {
                            const isActive = activePrefix === p.code;
                            return (
                                <button
                                    key={p.code}
                                    onClick={() => setActivePrefix(p.code)}
                                    className={`px-5 py-3 rounded-full text-base font-bold transition-all duration-300 ${isActive
                                        ? 'bg-emerald-600 text-white shadow-[0_0_20px_rgba(35,165,89,0.5)] border border-emerald-400/40 scale-105'
                                        : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                                        }`}
                                >
                                    <span>{p.code}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Prefix Display */}
                    <div className="max-w-3xl mx-auto">
                        {prefixes.map((p) => {
                            if (p.code !== activePrefix) return null;
                            return (
                                <motion.div
                                    key={p.code}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl text-center shadow-2xl"
                                >
                                    <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-semibold border border-emerald-500/30">
                                        {p.tag}
                                    </span>
                                    <h3 className="text-4xl font-extrabold text-white mt-4 font-mono">1 ({p.code}) XXX-XXXX</h3>
                                    <p className="text-slate-300 mt-3 text-base font-light max-w-xl mx-auto">{p.description}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10 text-left">
                                        {p.highlights.map((h, idx) => (
                                            <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                                <span>{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* Feature Grid */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">Wholesale Carrier Features</h2>
                        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">Engineered for high reliability, maximum uptime, and effortless integration.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {features.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group hover:-translate-y-1 hover:border-emerald-500/40"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mt-5">{item.title}</h3>
                                    <p className="text-sm text-slate-400 mt-2 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
                        <p className="text-slate-400 mt-2">Everything you need to know about Wholesale Toll-Free numbers.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => {
                            const isOpen = activeFaq === idx;
                            return (
                                <div
                                    key={idx}
                                    className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-colors"
                                >
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full p-5 text-left flex items-center justify-between space-x-4 text-slate-200 hover:text-white font-medium focus:outline-none"
                                    >
                                        <span className="text-base font-semibold">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-emerald-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {isOpen && (
                                        <div className="px-5 pb-5 text-sm text-slate-300 font-light border-t border-white/5 pt-3 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Bottom CTA Banner */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-emerald-950/70 via-slate-900/80 to-blue-950/70 border border-emerald-500/40 overflow-hidden shadow-2xl text-center">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"></div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Scale Your Telephony with Wholesale Services
                        </h2>
                        <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg font-light">
                            Access volume per-minute discounts, vanity number reservations, and 24/7 dedicated support.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={openModal}
                                className="w-full sm:w-auto btn-pill btn-pill-primary py-4 px-8 text-base shadow-[0_4px_25px_rgba(35,165,89,0.5)]"
                            >
                                Request Wholesale Toll-Free Quote
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <EnterpriseQuoteModal isOpen={isQuoteModalOpen} onClose={closeModal} />
        </>
    );
};

export default WholesaleTollFreeDID;
