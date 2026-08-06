import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EnterpriseQuoteModal from '../modals/EnterpriseQuoteModal';
import logo from '../../assets/svg logo/Balatrix final logo 1.svg';
import { Building2, PhoneCall, PhoneIncoming } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);

    // Auto-trigger Quote Modal if query parameters contain lead tags
    const params = new URLSearchParams(location.search);
    const quoteParam = params.get('quote');
    if (quoteParam === 'true' || quoteParam === 'reseller' || quoteParam === 'tollfree' || quoteParam === 'consultation') {
      setIsQuoteModalOpen(true);
    }
  }, [location]);

  const navigation = [
    { name: 'Solutions', href: '/solutions' },
    {
      name: 'Services', href: '/services',
      dropdown: [
        { name: 'PBX', href: '/services/pbx', icon: PhoneCall },
        { name: 'Wholesale Toll-Free DID', href: '/services/tollfree', icon: PhoneIncoming },
        { name: 'PBX Whitelabel', href: '/services/pbx-whitelabel', icon: Building2 },
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About Us', href: '/about' },
  ];

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ease-out glass-header ${isScrolled ? 'scrolled' : ''}`}
        style={{ height: '76px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[76px]">
            {/* Logo */}
            <Link to="/" className="flex items-center group relative z-50">
              <img
                src={logo}
                alt="Balatrix"
                className="h-8 sm:h-9 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.4)] object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group/dropdown">
                  <Link
                    to={item.href}
                    className={`relative font-medium text-[15px] transition-all duration-250 py-2 group flex items-center ${isActive(item.href) ? 'text-white font-bold' : 'text-slate-200 hover:text-white'
                      }`}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <svg
                        className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/dropdown:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] shadow-[0_0_8px_var(--color-accent)] transition-transform duration-300 origin-center ${isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                    />
                  </Link>

                  {/* Desktop Dropdown Menu */}
                  {item.dropdown && (
                    <div className="absolute left-0 top-full pt-2 w-60 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform translate-y-2 group-hover/dropdown:translate-y-0 z-50">
                      <div className="py-2 bg-[var(--canvas-dark-deep)]/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl">
                        {item.dropdown.map((subItem) => {
                          const IconComp = subItem.icon;
                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors duration-150"
                            >
                              {IconComp && <IconComp className="w-4 h-4 text-blue-400 shrink-0" />}
                              <span>{subItem.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA & Indicators */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Status Indicator Pill */}
              <div className="flex items-center space-x-2.5 text-sm bg-white/5 border border-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                <span className="text-[13px] font-medium tracking-wide transition-colors duration-300 text-slate-200">24x7 Cloud Active</span>
              </div>

              <button
                onClick={openQuoteModal}
                className="btn-pill btn-pill-primary py-2.5 px-6 text-sm shadow-[0_4px_20px_rgba(53,66,206,0.35),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_6px_25px_rgba(53,66,206,0.55),inset_0_1px_0_rgba(255,255,255,0.4)] transition-all duration-300"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center relative z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full transition-all duration-200 text-slate-200 hover:text-white hover:bg-white/10 active:bg-white/20"
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-0 left-0 w-full min-h-screen bg-[var(--canvas-dark-deep)]/98 backdrop-blur-xl border-b border-white/5 shadow-2xl z-40 flex flex-col justify-center px-6">
              <nav className="flex flex-col space-y-6 text-center">
                {navigation.map((item, index) => (
                  <div key={index} className="flex flex-col items-center space-y-3">
                    <Link
                      to={item.href}
                      className={`text-2xl font-light tracking-wide text-gray-300 hover:text-white py-2 transition-all duration-200 ${isActive(item.href) ? 'text-white font-normal' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>

                    {/* Mobile Dropdown Items */}
                    {item.dropdown && (
                      <div className="flex flex-col space-y-2 mb-2">
                        {item.dropdown.map((subItem, subIndex) => {
                          const IconComp = subItem.icon;
                          return (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className="flex items-center justify-center gap-2 text-lg font-light tracking-wide text-slate-400 hover:text-[var(--color-accent)] transition-all duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {IconComp && <IconComp className="w-4 h-4 text-blue-400 shrink-0" />}
                              <span>{subItem.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}

                <div className="border-t border-white/10 pt-8 mt-4 flex flex-col items-center gap-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                    <span>24x7 System Support Live</span>
                  </div>
                  <button
                    onClick={openQuoteModal}
                    className="btn-pill btn-pill-primary w-full max-w-xs py-3"
                  >
                    Contact Us
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Enterprise Quote Modal */}
      <EnterpriseQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
      />
    </>
  );
};

export default Header;