import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EnterpriseQuoteModal from '../modals/EnterpriseQuoteModal';

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
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'backdrop-blur-xl bg-gray-900/95 border-b border-gray-700 shadow-lg' 
          : 'bg-gray-900/90 backdrop-blur-sm'
      }`}
      style={{ height: '64px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className={`text-xl sm:text-2xl font-black transition-all duration-300 ${
              isScrolled ? 'text-white' : 'text-white'
            } group-hover:text-blue-400`} 
            style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
              Balatrix
            </div>
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 font-medium text-[14px] transition-all duration-200 py-2 px-4 rounded-lg ${
                    isScrolled
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === index && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800 border border-gray-600 rounded-xl shadow-2xl py-4 z-50 animate-slideDown">
                    <div className="px-4 py-2 border-b border-gray-600 mb-2">
                      <h3 className="font-semibold text-white text-sm">{item.name}</h3>
                    </div>
                    {item.items?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.href}
                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-700 transition-colors duration-150 group"
                      >
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-white text-sm group-hover:text-blue-400 transition-colors duration-150">
                              {subItem.name}
                            </span>
                            {subItem.badge && (
                              <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">
                                {subItem.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-400 text-xs mt-1">{subItem.desc}</p>
                        </div>
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-[11px] font-medium">All systems operational</span>
            </div>
            
            
            
            <button 
              onClick={openQuoteModal}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-lg text-[13px] shadow-md"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-200 touch-manipulation ${
                isScrolled 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800 active:bg-gray-700' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50 active:bg-gray-700/50'
              }`}
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

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900 backdrop-blur-xl border-b border-gray-700 shadow-2xl animate-slideDown">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item, index) => (
                  <div key={index}>
                    <Link
                      to={item.href}
                      className="flex items-center justify-between text-gray-300 hover:text-white hover:bg-gray-800 active:bg-gray-700 px-4 py-4 rounded-xl font-medium transition-all duration-200 touch-manipulation"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{ fontFamily: 'Inter, sans-serif' }}
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
                
                <div className="border-t border-gray-700 pt-6 mt-6">
                  <Link
                    to="/portal"
                    className="flex items-center text-gray-400 hover:text-white hover:bg-gray-800 active:bg-gray-700 px-4 py-4 rounded-xl font-medium transition-all duration-200 mb-4 touch-manipulation"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="text-base">Client Portal</span>
                  </Link>
                  
                  <button 
                    onClick={openQuoteModal}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:from-blue-800 active:to-purple-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 shadow-md text-base touch-manipulation"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Get Your Quote
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