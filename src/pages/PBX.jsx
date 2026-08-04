import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    PhoneCall,
    Cpu,
    Layers,
    ShieldCheck,
    Zap,
    BarChart3,
    Clock,
    Users,
    Headphones,
    Volume2,
    Mic,
    CheckCircle2,
    ArrowRight,
    HelpCircle,
    ChevronDown,
    Sparkles,
    Server,
    Radio,
    FileText,
    Building2,
    Lock,
    Globe
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import EnterpriseQuoteModal from '../components/modals/EnterpriseQuoteModal';

const PBX = () => {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('ivr');
    const [activeFaq, setActiveFaq] = useState(null);

    const openModal = () => setIsQuoteModalOpen(true);
    const closeModal = () => setIsQuoteModalOpen(false);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const featureTabs = [
        {
            id: 'ivr',
            label: 'Multi-Level IVR',
            icon: Layers,
            title: 'Intelligent IVR & Auto-Attendant',
            description: 'Guide callers seamlessly with customizable multi-language voice menus, department routing, and automated attendant responses.',
            points: [
                'Multi-tier DTMF press-key options (e.g., Press 1 for Sales, 2 for Support)',
                'Time-of-day dynamic greeting changes (Business hours vs After hours)',
                'Sub-menus for multiple sub-departments and language preferences'
            ],
            previewContent: (
                <div className="bg-[#12141c] p-6 rounded-2xl border border-white/10 shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></div>
                            <div>
                                <p className="text-sm font-semibold text-white">
                                    IVR Builder Preview
                                </p>
                                <p className="text-xs text-slate-400">
                                    Main Corporate Call Flow
                                </p>
                            </div>
                        </div>

                        <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs text-blue-400">
                            Live Routing
                        </span>
                    </div>
                    {/* Root Node */}
                    <div className="flex justify-center">
                        <div className="bg-white/5 border border-blue-500/30 rounded-xl px-6 py-3">
                            <p className="text-[11px] uppercase text-slate-400">
                                IVR Entry
                            </p>
                            <p className="text-white font-semibold">
                                ivr_test1
                            </p>
                        </div>
                    </div>

                    {/* Vertical Line */}
                    <div className="flex justify-center">
                        <div className="w-px h-6 bg-slate-500"></div>
                    </div>

                    {/* Horizontal Branch */}
                    <div className="relative mx-auto w-full">
                        <div className="absolute left-[11.1%] right-[11.1%] top-0 h-px bg-slate-500"></div>

                        {/* Down Arrows */}
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="flex flex-col items-center">
                                    <div className="w-px h-5 bg-slate-500"></div>

                                    <div className="w-0 h-0
                    border-l-[5px]
                    border-r-[5px]
                    border-t-[7px]
                    border-l-transparent
                    border-r-transparent
                    border-t-slate-500">
                                    </div>

                                    <span className="mt-2 mb-2 text-xs font-medium text-slate-300">
                                        Press {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* First Level */}
                    <div className="grid grid-cols-4 gap-4">

                        <div className="flex flex-col items-center">
                            <div className="w-full bg-white/5 border border-blue-500/20 rounded-lg p-3 text-center">
                                <p className="text-[10px] uppercase text-slate-400">
                                    Extension
                                </p>
                                <p className="text-white font-medium">
                                    U100301
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-full bg-white/5 border border-blue-500/20 rounded-lg p-3 text-center">
                                <p className="text-[10px] uppercase text-slate-400">
                                    Extension
                                </p>
                                <p className="text-white font-medium">
                                    U100303
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-full bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 text-center">
                                <p className="text-[10px] uppercase text-purple-300">
                                    Submenu
                                </p>
                                <p className="text-white font-medium">
                                    Has Greeting
                                </p>
                            </div>

                            <div className="h-5 w-px bg-slate-600"></div>

                            <div className="grid grid-cols-2 gap-1.5 w-full mt-2">

                                <div className="bg-white/5 border border-blue-500/20 rounded-lg p-1.5 text-center">
                                    <p className="text-[9px] text-slate-400">
                                        Press 1
                                    </p>
                                    <p className="text-[10px] text-white font-medium whitespace-nowrap">
                                        U100301
                                    </p>
                                </div>

                                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-1.5 text-center">
                                    <p className="text-[9px] text-slate-400">
                                        Press 2
                                    </p>
                                    <p className="text-[10px] text-white font-medium whitespace-nowrap">
                                        Ring Group
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-full bg-white/5 border border-blue-500/20 rounded-lg p-3 text-center">
                                <p className="text-[10px] uppercase text-slate-400">
                                    Extension
                                </p>
                                <p className="text-white font-medium">
                                    U100302
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-xs">
                        <span className="text-slate-400">
                            4 Primary Routes
                        </span>

                        <span className="text-emerald-400 font-medium">
                            Active IVR Flow
                        </span>
                    </div>
                </div>
            )
        },
        {
            id: 'analytics',
            label: 'Recording & Analytics',
            icon: BarChart3,
            title: 'Call Recording & Real-time CDR Analytics',
            description: 'Maintain compliance, train support teams, and gain deep operational insights with crystal-clear call audio recordings and real-time reports.',
            points: [
                'Automatic dual-channel stereo call recording with cloud storage options',
                'Supervisor live monitoring: Listen, Whisper (coach agent), and Barge-in',
                'Exportable Call Detail Records (CDR) with filterable date & duration tags',
                'Real-time wallboard displaying active calls, missed calls, and SLA metrics'
            ],
            previewContent: (
                <div className="bg-[#12141c] p-6 rounded-2xl border border-white/10 shadow-2xl space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-slate-400">
                        <span>Call Recording ID #9821</span>
                        <span>Duration: 04:12</span>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/5">
                            <Mic className="w-5 h-5 text-blue-400" />
                            <div className="flex-1">
                                <div className="h-2 bg-blue-500/30 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-3/4 animate-pulse"></div>
                                </div>
                            </div>
                            <span className="text-xs text-slate-300 font-mono">03:09 / 04:12</span>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xs text-slate-300 space-y-1">
                            <p className="font-semibold text-slate-200">AI Call Transcript Summary:</p>
                            <p className="text-slate-400 italic">"Client requested information regarding PBX extension routing and toll-free vanity numbers. Agent provided quote and scheduled follow-up."</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'softphone',
            label: 'Browser Web Softphone',
            icon: Headphones,
            title: 'Zero-Hardware Browser WebSoftphone',
            description: 'Make and receive HD calls from any browser or smartphone without installing extra desktop hardware or proprietary SIP phones.',
            points: [
                'Integrated WebRTC voice engine powered by Opus HD audio codec',
                'One-click dialer with contact sync and active call transfer options',
                'Cross-platform compatibility: Chrome, Firefox, Safari, Edge, Mobile',
                'Real-time wallet balance, call logs, and instant extension status'
            ],
            previewContent: (
                <div className="bg-[#12141c] p-6 rounded-2xl border border-white/10 shadow-2xl max-w-sm mx-auto">
                    <div className="text-center pb-4 border-b border-white/10">
                        <p className="text-xs text-slate-400">BALATRIX WEBSOFTPHONE</p>
                        <p className="text-lg font-bold text-white mt-1">+1 (800) 555-0199</p>
                        <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono">Connected • Ext 104</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 my-4 text-center">
                        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((num) => (
                            <button key={num} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-200 font-semibold text-sm transition-colors border border-white/5">
                                {num}
                            </button>
                        ))}
                    </div>
                    <div className="flex space-x-2">
                        <button className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center justify-center space-x-2 transition-colors">
                            <PhoneCall className="w-4 h-4" />
                            <span>Call</span>
                        </button>
                        <button className="px-3 rounded-xl bg-white/10 text-slate-300 hover:bg-white/20 transition-colors">
                            <Mic className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )
        }
    ];

    const featuresList = [
        {
            icon: Layers,
            title: "Multi-Level IVR & Voice Menus",
            desc: "Architect unlimited auto-attendants with customizable greetings, department sub-menus, and time-based call routing."
        },
        {
            icon: Clock,
            title: "Time-Based Schedule Routing",
            desc: "Automatically direct callers to after-hours emergency queues, voicemail boxes, or remote staff according to operational schedules."
        },
        {
            icon: Users,
            title: "Ring Groups & Priority Queues",
            desc: "Distribute incoming calls among sales and support agents with flexible strategies including simultaneous ring and round-robin."
        },
        {
            icon: Headphones,
            title: "In-Browser WebSoftphone",
            desc: "Empower remote employees with a zero-footprint WebRTC browser softphone requiring no hardware desk phones."
        },
        {
            icon: Volume2,
            title: "Call Recording & Live Barging",
            desc: "Record conversations in stereo HD audio. Allow supervisors to listen, whisper coaching tips, or barge into active calls."
        },
        {
            icon: BarChart3,
            title: "Real-Time Analytics & CDR Logs",
            desc: "Gain complete transparency into call volumes, wait times, agent performance, and detailed historical call logs."
        },
        {
            icon: Lock,
            title: "Carrier-Grade Security & Encryption",
            desc: "Protected by TLS and SRTP encryption, safeguard enterprise communication against eavesdropping and unauthorized access."
        }
    ];

    const comparisonData = [
        { feature: "Initial Hardware Investment", traditional: "$5,000 - $20,000+", cloud: "$0 (Use Browser / Existing IP Phones)" },
        { feature: "Setup & Deployment Time", traditional: "3 - 6 Weeks", cloud: "Instant (Under 10 Minutes)" },
        { feature: "Scalability & Adding Extensions", traditional: "Requires On-Site Technician", cloud: "1-Click Portal Provisioning" },
        { feature: "Multi-Location / Remote Support", traditional: "Complex VPNs & PBX Hardware", cloud: "Native Anywhere Access" },
        { feature: "Maintenance & System Upgrades", traditional: "Expensive Maintenance Contracts", cloud: "Included Free & Automatic" },
        { feature: "Uptime & Redundancy Guarantee", traditional: "Dependent on Local Office Power", cloud: "99.99% Enterprise Cloud SLA" }
    ];

    const faqs = [
        {
            q: "What is a Cloud PBX system and how does it work?",
            a: "A Cloud PBX (Private Branch Exchange) is a virtual phone system hosted securely in the cloud. Instead of requiring bulky physical telephone hardware in your office, your business calls are routed using high-speed Internet (VoIP/SIP). Employees can make and receive calls from desktop browsers, mobile apps, or standard IP desk phones."
        },
        {
            q: "Can I keep our existing business phone numbers?",
            a: "Yes! Balatrix supports seamless, zero-downtime porting for all your existing local, toll-free, and national business phone numbers across the US & Canada."
        },
        {
            q: "Do we need special hardware or phones to use Balatrix Cloud PBX?",
            a: "No special hardware is required. You can make and receive high-definition calls directly inside your web browser using our free built-in WebSoftphone, or configure standard SIP desk phones and mobile softphone applications."
        },
        {
            q: "How many extensions and IVR menus can we create?",
            a: "You can create unlimited extensions, IVR voice sub-menus, and ring groups to suit your exact business organizational structure."
        },
        {
            q: "What security measures protect call privacy and audio?",
            a: "Balatrix Cloud PBX enforces enterprise-grade TLS (Transport Layer Security) signaling and SRTP (Secure Real-time Transport Protocol) media encryption to protect all call data and audio streams."
        }
    ];

    return (
        <>
            <SEO
                title="Fully Hosted Cloud PBX System | Enterprise Virtual Telephony"
                description="Empower your business with Balatrix Cloud PBX. Build multi-level IVRs, ring groups, call recording, browser softphones, and time-based routing with 99.99% uptime SLA."
                keywords="cloud pbx, virtual pbx, business phone system, multi level ivr, call queues, web softphone, webRTC, call recording, cloud telephony"
            />

            <div className="pt-24 pb-20 overflow-hidden">
                {/* Ambient Background Lights */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
                <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                    >
                        <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                        <span>NEXT-GEN CLOUD PBX PLATFORM</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto"
                    >
                        Enterprise Cloud PBX <br className="hidden sm:inline" />
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                            Without the Hardware Chaos
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Replace costly legacy telephone boxes with a high-availability virtual cloud switchboard. Equip your team with intelligent IVR, HD web softphones, and instant call recording.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={openModal}
                            className="w-full sm:w-auto btn-pill btn-pill-primary py-4 px-8 text-base shadow-[0_4px_25px_rgba(88,101,242,0.4)] flex items-center justify-center space-x-3 group"
                        >
                            <span>Get Started & Get Quote</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="#pbx-features"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-medium text-base transition-all duration-300 text-center backdrop-blur-md"
                        >
                            Explore PBX Capabilities
                        </a>
                    </motion.div>

                    {/* Quick Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
                    >
                        {[
                            { label: 'Uptime SLA', value: '99.99%' },
                            { label: 'Voice Latency', value: '<30ms' },
                            { label: 'Hardware Cost', value: '$0 Needed' },
                            { label: 'Setup Time', value: '< 10 Mins' }
                        ].map((stat, idx) => (
                            <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{stat.value}</p>
                                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* Interactive Feature Architecture Showcase */}
                <section id="pbx-features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">
                            Designed for Complete Telephony Control
                        </h2>
                        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
                            Explore how Balatrix Cloud PBX optimizes every incoming and outgoing call across your organization.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
                        {featureTabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center space-x-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                        ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(88,101,242,0.5)] border border-blue-400/30'
                                        : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                                        }`}
                                >
                                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-400'}`} />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Tab Panel */}
                    <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
                        {featureTabs.map((tab) => {
                            if (tab.id !== activeTab) return null;
                            return (
                                <div key={tab.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                    <div className="space-y-6">
                                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-mono">
                                            <span>MODULE: {tab.label.toUpperCase()}</span>
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white">{tab.title}</h3>
                                        <p className="text-slate-300 leading-relaxed font-light">{tab.description}</p>
                                        <div className="space-y-3 pt-2">
                                            {tab.points.map((pt, idx) => (
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">Full-Featured PBX Engine</h2>
                        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">Everything you need to deliver world-class business phone communications.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {featuresList.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group hover:-translate-y-1 hover:border-blue-500/40"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mt-5">{item.title}</h3>
                                    <p className="text-sm text-slate-400 mt-2 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Traditional vs Cloud PBX Comparison */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">Traditional PBX vs Balatrix Cloud PBX</h2>
                        <p className="text-slate-400 mt-3">Why thousands of businesses are switching to cloud switchboard systems.</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
                            <thead>
                                <tr className="bg-white/10 text-white text-sm font-semibold border-b border-white/10">
                                    <th className="p-4 sm:p-5">Capability / Requirement</th>
                                    <th className="p-4 sm:p-5 text-slate-400">Traditional Hardware PBX</th>
                                    <th className="p-4 sm:p-5 text-blue-400">Balatrix Cloud PBX</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-sm">
                                {comparisonData.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                                        <td className="p-4 sm:p-5 font-medium text-slate-200">{row.feature}</td>
                                        <td className="p-4 sm:p-5 text-slate-400">{row.traditional}</td>
                                        <td className="p-4 sm:p-5 font-semibold text-emerald-400">{row.cloud}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
                        <p className="text-slate-400 mt-2">Got questions about setting up Cloud PBX? We have answers.</p>
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
                                        <ChevronDown className={`w-5 h-5 text-blue-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
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
                    <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-blue-900/60 via-indigo-900/40 to-slate-900/80 border border-blue-500/30 overflow-hidden shadow-2xl text-center">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Ready to Modernize Your Enterprise Telephony?
                        </h2>
                        <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg font-light">
                            Get custom PBX extension setups, dedicated toll-free routing, and 24/7 technical support tailored for your company.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={openModal}
                                className="w-full sm:w-auto btn-pill btn-pill-primary py-4 px-8 text-base shadow-[0_4px_25px_rgba(88,101,242,0.5)]"
                            >
                                Request Enterprise PBX Quote
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <EnterpriseQuoteModal isOpen={isQuoteModalOpen} onClose={closeModal} />
        </>
    );
};

export default PBX;
