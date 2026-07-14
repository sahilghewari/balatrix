import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg logo/Balatrix final logo 1.svg';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'Business Solutions', href: '/solutions' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Toll-Free Numbers', href: '/services' }
      ]
    },
    {
      title: 'Pricing',
      links: [
        { name: 'View Plans', href: '/pricing' }
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' }
      ]
    }
  ];

  return (
    <footer className="relative bg-[#020308] text-gray-300 border-t border-white/5 overflow-hidden pt-16">
      {/* Background Grid & Glowing Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="telecom-grid opacity-[0.4]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <div>
              <Link to="/" className="inline-block group mb-4">
                <img
                  src={logo}
                  alt="Balatrix"
                  className="h-10 sm:h-12 transition-all duration-300 group-hover:opacity-80 object-contain brightness-0 invert"
                />
              </Link>
              {/* Contact Methods - Dark Theme */}
              <div className="space-y-4 mt-6">
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-all duration-200 shadow-sm border border-white/5">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">+1 (844) 225-2435</div>
                    <div className="text-xs text-gray-400">Sales & Support</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-all duration-200 shadow-sm border border-white/5">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-blue-400 transition-colors break-all">sales@balatrix.com</div>
                    <div className="text-xs text-gray-400">Get Your Quote</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-2 gap-8 sm:contents lg:col-span-4">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4 lg:space-y-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="group inline-flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 text-base py-1"
                      >
                        <span>{link.name}</span>
                        {link.badge && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-950/40 text-blue-300 border border-blue-500/20">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer - Dark theme glassmorphic feel */}
      <div className="relative z-10 border-t border-white/5 bg-[#03050e]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col space-y-4 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
            <div className="flex flex-col space-y-2 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-8 text-sm text-gray-400">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                <span>&copy; {currentTime.getFullYear()} A2 Cloud Solutions</span>
                <span className="hidden sm:inline text-white/10">•</span>
                <span className="text-xs bg-white/5 text-gray-300 border border-white/5 px-2.5 py-0.5 rounded-full font-medium">
                  Est. 2015
                </span>
              </div>

              <div className="flex flex-wrap gap-4 lg:gap-6">
                <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="/security" className="hover:text-white transition-colors duration-200">
                  Security
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
