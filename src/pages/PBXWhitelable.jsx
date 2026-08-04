import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Building2,
    Layers,
    DollarSign,
    ShieldCheck,
    Globe,
    Zap,
    Users,
    CheckCircle2,
    ArrowRight,
    ChevronDown,
    Sparkles,
    Sliders,
    Palette,
    FileText,
    Headphones,
    Server,
    Lock,
    Mail,
    RefreshCcw,
    Database,
    Radio,
    Cpu,
    BarChart3,
    Briefcase,
    Settings,
    CreditCard
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import EnterpriseQuoteModal from '../components/modals/EnterpriseQuoteModal';

const PBXWhitelable = () => {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);
    const [activePlatformTab, setActivePlatformTab] = useState('branding');

    const openModal = () => setIsQuoteModalOpen(true);
    const closeModal = () => setIsQuoteModalOpen(false);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const platformModules = [
        {
            id: 'branding',
            label: 'Complete Whitelabel Branding',
            icon: Palette,
            title: '100% Whitelabel & Custom Domain Suite',
            description: 'Rebrand the entire platform under your company name, custom domain, and brand identity. Your clients will never see third-party branding.',
            features: [
                'Custom Domain CNAME binding (e.g. pbx.yourcompany.com)',
                'Custom Primary & Accent color palette configurator',
                'Main Header Logo, Sidebar Logo, and Favicon customization',
                'Custom Support Email & Support Phone number branding',
                'Dedicated SMTP Mail Server configuration (Host, Port, TLS/SSL, From Name/Email)'
            ],
            previewContent: (
                <div className="bg-[#12141c] p-6 rounded-2xl border border-white/10 shadow-2xl space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <span className="text-xs font-mono text-purple-400">ADMIN / BRANDING CONFIGURATOR</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">Domain: Active & SSL Verified</span>
                    </div>
                    <div className="space-y-3 text-xs">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                            <span className="text-slate-400">Custom Domain URL</span>
                            <span className="text-slate-200 font-mono font-bold">pbx.yourcompany.com</span>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                            <span className="text-slate-400">Brand Primary & Accent</span>
                            <div className="flex items-center space-x-2">
                                <span className="w-4 h-4 rounded-full bg-[#3d52a0] border border-white/20"></span>
                                <span className="w-4 h-4 rounded-full bg-[#ed8f55] border border-white/20"></span>
                                <span className="text-slate-300 font-mono">#3D52A0 / #ED8F55</span>
                            </div>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                            <span className="text-slate-400">SMTP Relay Status</span>
                            <span className="text-emerald-400 font-medium flex items-center space-x-1">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>smtp.yourcompany.com:587</span>
                            </span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'multitenant',
            label: 'Multi-Tenant Management',
            icon: Layers,
            title: 'Multi-Tenant Account Isolation & Governance',
            description: 'Provision and manage isolated client tenants from a single partner dashboard with granular permission controls and wallet management.',
            features: [
                'Isolated client tenant databases and security boundaries',
                'Instant tenant creation, status toggle (Active / Blocked), and login impersonation',
                'Internal Tenant Wallet Balance allocation and automatic top-up rules',
                'Global tenant search, extension quota management, and active user monitoring',
                'Redis Memory DB 2 Synchronization for instant sub-second lookup routing'
            ],
            previewContent: (
                <div className="bg-[#12141c] p-6 rounded-2xl border border-white/10 shadow-2xl space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <span className="text-xs font-mono text-purple-400">TENANT MANAGER DASHBOARD</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">Active Tenants: 42</span>
                    </div>
                    <div className="space-y-2 text-xs">
                        <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                            <div>
                                <p className="font-semibold text-slate-200">Acme Enterprise Corp</p>
                                <p className="text-[10px] text-slate-400">12 Extensions • 4 DIDs</p>
                            </div>
                            <div className="text-right">
                                <span className="text-emerald-400 font-bold">$450.00 Wallet</span>
                                <p className="text-[10px] text-emerald-300 font-mono">Status: Active</p>
                            </div>
                        </div>
                        <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                            <div>
                                <p className="font-semibold text-slate-200">Apex Tech Logistics</p>
                                <p className="text-[10px] text-slate-400">25 Extensions • 8 DIDs</p>
                            </div>
                            <div className="text-right">
                                <span className="text-emerald-400 font-bold">$1,280.00 Wallet</span>
                                <p className="text-[10px] text-emerald-300 font-mono">Status: Active</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'billing',
            label: 'Sub-Billing & Tariff Engine',
            icon: DollarSign,
            title: 'Automated Sub-Billing & Rate Card Engine',
            description: 'Define custom pricing packages, set per-minute call markup rates per destination, and automate customer invoice generation.',
            features: [
                'Flexible Subscription Packages (Monthly/Annual plans with DID & extension limits)',
                'Destination Rate Cards with custom per-minute profit margins',
                'Stripe & PayPal payment gateway integrations for automated customer charging',
                'Real-Time Wallet Balance tracking with automatic credit card top-ups',
                'Itemized monthly PDF invoice generation with white-label headers'
            ],
            previewContent: (
                <div className="bg-[#12141c] p-6 rounded-2xl border border-white/10 shadow-2xl space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <span className="text-xs font-mono text-purple-400">RATE CARD & MARGIN ENGINE</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">Markup: +65%</span>
                    </div>
                    <div className="space-y-2 text-xs">
                        <div className="flex justify-between p-2.5 rounded bg-white/5 border border-white/5">
                            <span className="text-slate-300">US & Canada Local Calls</span>
                            <span className="text-emerald-400 font-mono font-bold">$0.012 / min</span>
                        </div>
                        <div className="flex justify-between p-2.5 rounded bg-white/5 border border-white/5">
                            <span className="text-slate-300">US Toll-Free 8XX Inbound</span>
                            <span className="text-emerald-400 font-mono font-bold">$0.018 / min</span>
                        </div>
                        <div className="flex justify-between p-2.5 rounded bg-white/5 border border-white/5">
                            <span className="text-slate-300">UK & International Outbound</span>
                            <span className="text-emerald-400 font-mono font-bold">$0.045 / min</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'carriers',
            label: 'Carriers & ACL Gateways',
            icon: Server,
            title: 'Carrier Gateway Management & ACL Whitelisting',
            description: 'Connect your own SIP carriers or leverage our pre-integrated carrier gateways with outbound prefix routing and inbound IP whitelisting.',
            features: [
                'Outbound SIP Carriers configuration (Host, Port 5060, UDP/TCP/TLS transport)',
                'Carrier Endpoint Prefix matching and Caller ID mode overrides',
                'Inbound ACL Whitelist (Restrict incoming SIP traffic to authorized IPs)',
                'Automated SIP trunk failover targets for 99.99% operational continuity',
                'Carrier-grade TLS signaling and SRTP media stream encryption'
            ],
            previewContent: (
                <div className="bg-[#12141c] p-6 rounded-2xl border border-white/10 shadow-2xl space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <span className="text-xs font-mono text-purple-400">CARRIER GATEWAY MANAGER</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">2 Carriers Connected</span>
                    </div>
                    <div className="space-y-2 text-xs">
                        <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                            <div>
                                <p className="font-semibold text-slate-200">Primary Carrier Trunk #1</p>
                                <p className="text-[10px] text-slate-400 font-mono">sip.carrier-east.net:5060 (UDP)</p>
                            </div>
                            <span className="text-emerald-400 font-bold">Priority 1 • Active</span>
                        </div>
                        <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                            <div>
                                <p className="font-semibold text-slate-200">Failover Backup Trunk #2</p>
                                <p className="text-[10px] text-slate-400 font-mono">sip.carrier-west.net:5060 (TLS)</p>
                            </div>
                            <span className="text-blue-400 font-bold">Priority 2 • Standby</span>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const resellerFeatures = [
        {
            icon: Palette,
            title: "100% Brand Customization",
            desc: "Use your own custom domain (e.g. pbx.yourbrand.com), company logo, brand color palette, and custom SMTP email server."
        },
        {
            icon: Layers,
            title: "Multi-Tenant Architecture",
            desc: "Manage all your business clients from a single, centralized partner portal with isolated client environments and permissions."
        },
        {
            icon: DollarSign,
            title: "Custom Billing & Tariff Engine",
            desc: "Set your own monthly subscription rates, per-minute call markup pricing, setup fees, and keep 100% of your profit margins."
        },
        {
            icon: Headphones,
            title: "White-Label WebSoftphone App",
            desc: "Provide end-users with a high-definition browser softphone carrying your company branding—no hardware desk phones required."
        },
        {
            icon: Globe,
            title: "Turnkey Carrier Interconnects",
            desc: "We manage all tier-1 carrier relationships, PSTN termination, RespOrg toll-free porting, and regulatory compliance behind the scenes."
        },
        {
            icon: ShieldCheck,
            title: "99.99% Uptime & SLA Guarantee",
            desc: "Deliver enterprise-grade reliability backed by our multi-region redundant cloud switchboards and Redis DB memory sync."
        },
        {
            icon: Users,
            title: "Dedicated Partner Success Support",
            desc: "Get white-glove technical onboarding, sales enablement materials, and 24/7 priority partner engineering support."
        }
    ];

    const steps = [
        {
            num: '01',
            title: 'Sign-Up',
            desc: 'Join the Balatrix White-Label Reseller Program and submit your partner application.'
        },
        {
            num: '02',
            title: 'Verification',
            desc: 'Our team will review and verify your details from our side to ensure a secure partnership.'
        },
        {
            num: '03',
            title: 'Onboard',
            desc: 'Once approved, access your portal, apply your branding, and start onboarding clients to build your telecom revenue.'
        }
    ];

    const faqs = [
        {
            q: "What is White Label PBX and how does the reseller program work?",
            a: "White Label PBX allows Managed Service Providers (MSPs), telecom resellers, and agencies to offer cloud PBX, toll-free DIDs, and SIP services under their own company name, logo, domain, and pricing structure. Balatrix powers the backend infrastructure while you maintain 100% customer ownership."
        },
        {
            q: "Will my clients ever see Balatrix branding or domain names?",
            a: "No. Your portal, softphones, email notifications, and invoices are 100% white-labeled under your domain (e.g. pbx.yourcompany.com) and logo."
        },
        {
            q: "How fast can we launch our white label telecom portal?",
            a: "Most partners complete branding, domain CNAME setup, and rate plan configuration within 24 to 48 hours."
        },
        {
            q: "How does billing and customer payment collection work?",
            a: "You collect payments directly from your customers via your own payment gateway (Stripe/PayPal) using custom pricing rates you set. Balatrix simply charges you wholesale partner baseline rates."
        },
        {
            q: "Is technical support included for white label partners?",
            a: "Yes! We provide 24/7 priority engineering support for our reseller partners, including migration support, technical onboarding, and API integration assistance."
        }
    ];

    return (
        <>
            <SEO
                title="White Label PBX & Telecom Reseller Platform | Balatrix"
                description="Launch your own cloud PBX and telecom brand in days. Multi-tenant architecture, custom domain, automated billing engine, and 100% profit margins."
                keywords="white label pbx, telecom reseller, msp phone system, white label sip trunking, multi tenant pbx, reseller recurring revenue"
            />

            <div className="pt-24 pb-20 overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                    >
                        <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                        <span>WHITE LABEL TELECOM PLATFORM FOR MSPs & RESELLERS</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto"
                    >
                        Launch Your Telecom Brand in Days: <br className="hidden sm:inline" />
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                            Bring Your Own PBX or Let Us Power It.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Offer enterprise cloud phone systems, toll-free DIDs, and WebRTC softphones under your own domain, logo, and custom rates. Build high-margin recurring telecom revenue without carrier overhead.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={openModal}
                            className="w-full sm:w-auto btn-pill btn-pill-primary py-4 px-8 text-base shadow-[0_4px_25px_rgba(168,85,247,0.35)] flex items-center justify-center space-x-3 group"
                        >
                            <span>Become a Reseller Partner</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="#platform-suite"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-medium text-base transition-all duration-300 text-center backdrop-blur-md"
                        >
                            Explore Platform Modules
                        </a>
                    </motion.div>

                    {/* Highlights Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-18 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
                    >
                        {[
                            { label: 'Branding', value: '100% Yours' },
                            { label: 'Multi-Tenant', value: 'Unified Portal' },
                            { label: 'Launch Time', value: 'Instant' }
                        ].map((stat, idx) => (
                            <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{stat.value}</p>
                                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* Platform Feature Modules Interactive Explorer */}
                <section id="platform-suite" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">
                            Turnkey Telephony Platform Architecture
                        </h2>
                        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
                            Explore the core administrative suites powering your white-label telecom operations.
                        </p>
                    </div>

                    {/* Module Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
                        {platformModules.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activePlatformTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActivePlatformTab(tab.id)}
                                    className={`flex items-center space-x-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                        ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] border border-purple-400/30'
                                        : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                                        }`}
                                >
                                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-purple-400'}`} />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Module Panel */}
                    <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
                        {platformModules.map((tab) => {
                            if (tab.id !== activePlatformTab) return null;
                            return (
                                <div key={tab.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                    <div className="space-y-6">
                                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-purple-500/20 text-purple-300 text-xs font-mono">
                                            <span>PLATFORM SUITE: {tab.label.toUpperCase()}</span>
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white">{tab.title}</h3>
                                        <p className="text-slate-300 leading-relaxed font-light">{tab.description}</p>
                                        <div className="space-y-3 pt-2">
                                            {tab.features.map((pt, idx) => (
                                                <div key={idx} className="flex items-start space-x-3">
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm text-slate-300">{pt}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        {tab.previewContent}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Feature Grid */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">White Label Platform Features</h2>
                        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">Everything needed to run a professional, scalable cloud telecom business.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {resellerFeatures.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group hover:-translate-y-1 hover:border-purple-500/40"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mt-5">{item.title}</h3>
                                    <p className="text-sm text-slate-400 mt-2 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Step Onboarding Process */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">How to Launch in Easy Steps</h2>
                        <p className="text-slate-400 mt-3">From partner registration to recurring revenue generation.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {steps.map((step, idx) => (
                            <div key={idx} className="p-10 rounded-2xl bg-white/5 border border-white/10 relative">
                                <span className="text-3xl font-black text-purple-400/30 font-mono absolute top-4 right-4">{step.num}</span>
                                <h3 className="text-lg font-bold text-white pr-8">{step.title}</h3>
                                <p className="text-sm text-slate-400 mt-5 font-light leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
                        <p className="text-slate-400 mt-2">Common questions about our White Label Telecom Reseller Program.</p>
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
                                        <ChevronDown className={`w-5 h-5 text-purple-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
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
                    <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-purple-950/80 via-slate-900/80 to-indigo-950/80 border border-purple-500/40 overflow-hidden shadow-2xl text-center">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Ready to Own Your Cloud Telecom Platform?
                        </h2>
                        <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg font-light">
                            Speak with a partner success specialist, get a live reseller sandbox demo, and launch your brand.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={openModal}
                                className="w-full sm:w-auto btn-pill btn-pill-primary py-4 px-8 text-base shadow-[0_4px_25px_rgba(168,85,247,0.5)]"
                            >
                                Apply for Reseller Program
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <EnterpriseQuoteModal isOpen={isQuoteModalOpen} onClose={closeModal} />
        </>
    );
};

export default PBXWhitelable;
