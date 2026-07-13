import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EnterpriseQuoteModal from '../modals/EnterpriseQuoteModal';
import logo from '../../assets/svg logo/Balatrix final logo 1.svg';

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
    { name: 'Services', href: '/services' },
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
        className={`fixed w-full top-0 z-50 transition-all duration-300 ease-out border-b ${
          isScrolled
            ? 'glass-header shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent border-transparent'
        }`}
        style={{ height: '76px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[76px]">
            {/* Logo */}
            <Link to="/" className="flex items-center group relative z-50">
              <img
                src={logo}
                alt="Balatrix"
                className="h-8 sm:h-9 transition-transform duration-300 group-hover:scale-102 object-contain brightness-0 invert"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative font-medium text-[15px] transition-colors duration-250 py-2 text-gray-300 hover:text-white group ${
                    isActive(item.href) ? 'text-white' : ''
                  }`}
                >
                  <span>{item.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-accent)] transition-transform duration-300 origin-center ${
                      isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA & Indicators */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Status Indicator */}
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.7)]"></div>
                <span className="text-gray-400 text-[14px] font-medium tracking-wide">24x7 Cloud Active</span>
              </div>

              <button
                onClick={openQuoteModal}
                className="btn-pill btn-pill-primary py-2.5 px-6 text-sm"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center relative z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full transition-all duration-200 text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10"
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
                  <Link
                    key={index}
                    to={item.href}
                    className={`text-2xl font-light tracking-wide text-gray-300 hover:text-white py-2 transition-all duration-200 ${
                      isActive(item.href) ? 'text-white font-normal' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
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