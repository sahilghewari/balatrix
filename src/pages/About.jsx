import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';

const About = () => {
  const teamMembers = [
    {
      name: 'Michael Chen',
      role: 'Chief Executive Officer',
      bio: '15+ years in telecommunications infrastructure. Former VP of Engineering at major telecom providers.',
      image: '/images/team/michael.jpg',
      linkedin: '#'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Expert in scalable communication systems and API design. Led engineering teams at major technology companies.',
      image: '/images/team/sarah.jpg',
      linkedin: '#'
    },
    {
      name: 'David Thompson',
      role: 'Chief Operations Officer',
      bio: 'Operations specialist with deep expertise in telecom regulations and compliance across global markets.',
      image: '/images/team/david.jpg',
      linkedin: '#'
    },
    {
      name: 'Lisa Wang',
      role: 'VP of Customer Success',
      bio: 'Customer-focused leader ensuring business clients achieve maximum value from their communication investments.',
      image: '/images/team/lisa.jpg',
      linkedin: '#'
    }
  ];

  const milestones = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Started with a vision to make toll-free numbers affordable and accessible'
    },
    {
      year: '2018',
      title: 'API Platform Launch',
      description: 'Released comprehensive API platform, enabling seamless integrations'
    },
    {
      year: '2021',
      title: '99.99% SLA Achievement',
      description: 'Achieved industry-leading uptime through infrastructure investments'
    },
    {
      year: '2024',
      title: '5K+ Happy Customers',
      description: 'Reached milestone of serving over 5,000 businesses across North America'
    }
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Affordability First',
      description: 'We believe every business deserves access to professional toll-free communication without breaking the bank.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Simple Solutions',
      description: 'We make toll-free numbers and business communication simple, fast, and hassle-free.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Customer Success',
      description: "Your success is our success. We're partners in your telecommunications journey."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'US & Canada Focus',
      description: 'Deep expertise in North American telecommunications ensures optimal service and compliance.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years of Experience' },
    { number: '50K+', label: 'Numbers Delivered' },
    { number: '2', label: 'Countries (US & Canada)' },
    { number: '99.99%', label: 'Uptime SLA' }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <SEO 
        title="About Us" 
        description="Learn about Balatrix, our story, and our mission to provide affordable, enterprise-grade cloud communication and toll-free numbers." 
        canonicalUrl="https://balatrix.com/about"
      />
      
      {/* Hero Section */}
      <section className="min-h-screen sm:min-h-[70vh] bg-transparent flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="telecom-grid opacity-[0.3]" />
          <div className="absolute top-[20%] right-[10%] w-[380px] h-[380px] bg-blue-900/10 rounded-full blur-[110px]" />
          <div className="absolute bottom-[20%] left-[10%] w-[380px] h-[380px] bg-cyan-900/10 rounded-full blur-[110px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-24 xl:py-32 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 w-full overflow-hidden">
              <div className="inline-flex items-center space-x-1.5 bg-blue-950/40 border border-blue-500/20 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                <span>Our Story 📖</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                Making Business<br />Communication<br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Affordable</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-full lg:max-w-xl">
                For over 15 years, we've been the trusted partner for businesses of all sizes
                seeking reliable toll-free numbers for US & Canada. Our mission is simple:
                make business communication effortless.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/contact" className="btn btn-primary text-base px-8 py-4 text-center">
                  Get Your Numbers
                </Link>
                <Link to="/contact" className="btn btn-secondary text-base px-8 py-4 text-center">
                  Contact Us
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 border-t border-white/5 mt-8">
                <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-300">15+</span>
                    <span>Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-300">5K+</span>
                    <span>Happy Customers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-300">99.99%</span>
                    <span>Uptime SLA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Visual Element */}
            <div className="hidden lg:block">
              <div className="relative h-80 xl:h-96 flex items-center justify-center">
                <div className="glass-card p-12 rounded-3xl border-white/5 max-w-sm w-full text-center relative overflow-hidden bg-slate-900/50">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -z-10 animate-pulse-glow"></div>
                  <div className="text-6xl font-extrabold text-blue-400 mb-4">2015</div>
                  <div className="text-lg text-white font-bold mb-3">Founded in Canada</div>
                  <div className="text-sm text-gray-400 mb-8 font-medium">
                    With a vision to transform business telecommunications through reliability and customer service.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-950/40 relative border-t border-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="relative px-4 group">
                {index !== 0 && <div className="hidden md:block absolute left-0 top-1/4 bottom-1/4 w-px bg-white/10"></div>}
                <div className="text-4xl md:text-5xl font-black text-blue-400 tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">
                HOW IT STARTED
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Our <em>Story</em>
              </h2>
              <div className="space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed">
                <p>
                  Balatrix was born from a simple observation: getting toll-free numbers
                  was unnecessarily complex and expensive. In 2015, our founders recognized
                  that businesses needed a partner who could deliver affordable toll-free
                  communication solutions with the same reliability they expected from other services.
                </p>
                <div className="p-6 bg-white/[0.02] border-l-4 border-blue-500 rounded-r-2xl my-8 border-t border-r border-b border-white/5">
                  <p className="font-semibold text-gray-300 italic">
                    Balatrix is registered as A2 Cloud Solutions, proudly headquartered in Brampton, Canada.
                    Balatrix is a Registered Trademark Owned by A2 Cloud Solutions.
                  </p>
                </div>
                <p>
                  What started as a mission to simplify toll-free number provisioning has evolved into
                  a comprehensive business communication platform serving over 50,000 businesses
                  across US & Canada. Our commitment to affordability, reliability, and customer
                  success has made us the go-to choice for companies seeking cost-effective communication.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/5 transform rotate-3 rounded-3xl"></div>
              <div className="glass-card p-10 rounded-3xl border-white/5 relative z-10 lg:aspect-square flex flex-col justify-center text-center bg-slate-900/40">
                <div className="text-8xl font-black text-blue-500/20 mb-4 select-none">❝</div>
                <div className="text-xl sm:text-2xl font-semibold text-white mb-6 leading-snug">
                  Our team works around the clock to ensure your toll-free numbers are always reliable, always affordable, and always ready for growth.
                </div>
                <div className="text-blue-400 font-bold tracking-wider uppercase text-xs">The Founders</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-transparent py-24 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">
              OUR VALUES
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Our Core <em>Values</em>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl group flex flex-col h-full">
                <div className="w-16 h-16 bg-blue-500/10 text-blue-400 border border-blue-500/15 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-600 group-hover:text-white shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Leadership Team Section (Fully Rendered) */}
      <section className="py-24 bg-transparent border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">
              LEADERSHIP
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Meet our <em>Leadership</em> Team
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Industry veterans dedicated to building the future of cloud telecommunications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/5 h-full">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50" />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
                      {member.role}
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <a href={member.linkedin} className="text-gray-500 hover:text-blue-400 transition-colors inline-block">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-transparent relative border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">
              HISTORY
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Our <em>Journey</em>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Key milestones that shaped Balatrix into the industry leader it is today
            </p>
          </div>

          <div className="relative border-l-2 border-white/5 ml-4 md:ml-0 space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 items-center group">
                  <div className="hidden md:block col-span-2 text-right pr-12">
                    <span className="text-3xl font-extrabold text-gray-600 transition-colors group-hover:text-blue-400">{milestone.year}</span>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-[-9px] md:left-auto md:col-start-3 md:mx-auto w-4 h-4 rounded-full bg-slate-950 border-4 border-white/10 md:w-5 md:h-5 z-10 group-hover:border-blue-500 transition-colors shadow-[0_0_0_4px_#03050e]"></div>

                  <div className="md:hidden mb-2">
                    <span className="text-2xl font-extrabold text-blue-400">{milestone.year}</span>
                  </div>

                  <div className="md:col-span-2 md:pl-12">
                    <div className="glass-card p-6 rounded-2xl group-hover:border-blue-500/20 duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;