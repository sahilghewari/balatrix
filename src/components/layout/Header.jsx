import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EnterpriseQuoteModal from '../modals/EnterpriseQuoteModal';
import logo from '../../assets/svg logo/Balatrix final logo 1.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
    setActiveDropdown(null);
    
    // Auto-trigger Quote Modal if query parameters contain lead tags
    const params = new URLSearchParams(location.search);
    const quoteParam = params.get('quote');
    if (quoteParam === 'true' || quoteParam === 'reseller' || quoteParam === 'tollfree' || quoteParam === 'consultation') {
      setIsQuoteModalOpen(true);
    }
  }, [location]);

  const navigation = [
    {
      name: 'Solutions',
      href: '/solutions',
    },
    {
      name: 'Services',
      href: '/services',
    },
    {
      name: 'Pricing',
      href: '/pricing',
      hasDropdown: false
    },
    {
      name: 'About Us',
      href: '/about',
    },
  ];

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ease-out border-b ${isScrolled
          ? 'bg-[#03050e]/80 backdrop-blur-md border-white/5 shadow-2xl shadow-blue-500/5'
          : 'bg-transparent border-transparent'
          }`}
        style={{ height: '72px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo with bright invert to fit the dark theme */}
            <Link to="/" className="flex items-center group">
              <img
                src={logo}
                alt="Balatrix"
                className="h-8 sm:h-10 transition-all duration-300 group-hover:opacity-90 object-contain brightness-0 invert"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigation.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.href}
                    className="flex items-center space-x-1 font-semibold text-[14px] transition-all duration-200 py-2 px-3.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu - Glassmorphic styled */}
                  {item.hasDropdown && activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-[#080b16]/95 backdrop-blur-xl border border-white/5 rounded-xl shadow-2xl py-4 z-50 animate-slideDown">
                      <div className="px-4 py-2 border-b border-white/5 mb-2">
                        <h3 className="font-semibold text-white text-sm">{item.name}</h3>
                      </div>
                      {item.items?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          className="flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors duration-150 group"
                        >
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-gray-200 text-sm group-hover:text-blue-400 transition-colors duration-150">
                                {subItem.name}
                              </span>
                              {subItem.badge && (
                                <span className="bg-blue-900/40 text-blue-300 text-xs font-medium px-2 py-0.5 rounded-full border border-blue-500/20">
                                  {subItem.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-400 text-xs mt-1">{subItem.desc}</p>
                          </div>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Status Indicator */}
              <div className="hidden xl:flex items-center space-x-2 text-sm mr-4">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                <span className="text-gray-400 text-[14px] font-medium">24x7 Support Active</span>
              </div>

              <button
                onClick={openQuoteModal}
                className="btn btn-primary px-6 py-2.5 text-sm"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg transition-all duration-200 touch-manipulation text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10"
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Rebuilt for dark glassmorphism */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-[#03050e]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl z-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
                <nav className="flex flex-col space-y-2">
                  {navigation.map((item, index) => (
                    <div key={index}>
                      <Link
                        to={item.href}
                        className="flex items-center justify-between text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3.5 rounded-xl font-semibold transition-all duration-200 touch-manipulation"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="text-base">{item.name}</span>
                        {item.hasDropdown && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </Link>
                    </div>
                  ))}

                  <div className="border-t border-white/5 pt-6 mt-6">
                    <button
                      onClick={openQuoteModal}
                      className="btn btn-primary w-full text-center py-3"
                    >
                      Contact Us
                    </button>
                  </div>
                </nav>
              </div>
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