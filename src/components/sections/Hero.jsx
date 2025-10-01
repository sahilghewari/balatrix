import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [typedText, setTypedText] = useState('');
  const headlines = [
    'Affordable Toll-Free Numbers for US & Canada',
    'Cloud Business Communication Made Simple',
    'Customized Communication for Every Business'
  ];
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);

  useEffect(() => {
    // Set greeting based on time
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
    setCurrentTime(greeting);

    // Typing effect for headlines
    let typeIndex = 0;
    const currentHeadline = headlines[currentHeadlineIndex];
    
    const typeInterval = setInterval(() => {
      if (typeIndex < currentHeadline.length) {
        setTypedText(currentHeadline.slice(0, typeIndex + 1));
        typeIndex++;
      } else {
        clearInterval(typeInterval);
        // Switch to next headline after a delay
        setTimeout(() => {
          setCurrentHeadlineIndex((prev) => (prev + 1) % headlines.length);
          setTypedText('');
        }, 3000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentHeadlineIndex]);

  // Floating animation for visual elements
  const FloatingElement = ({ children, delay = 0 }) => (
    <div 
      className="animate-float"
      style={{ 
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );

  // Balatrix Logo Visualization - Combining Balaji (spiritual) + Matrix (digital)
  const BalatrixLogo = () => (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Divine Symbol (Balaji inspired) */}
      <div className="relative">
        {/* Main Logo Container */}
        <div className="relative w-96 h-96 flex items-center justify-center">
          
          {/* Outer Ring - Digital Matrix */}
          <div className="absolute inset-0 border-2 border-gray-300 rounded-full opacity-40">
            {/* Matrix-style dots around the circle */}
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5) * (Math.PI / 180);
              const radius = 184;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-gray-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `50%`,
                    top: `50%`,
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                  }}
                />
              );
            })}
          </div>

          {/* Inner Sacred Geometry (Balaji inspired) */}
          <div className="relative w-42 h-42 bg-gradient-to-br from-gray-900 to-yellow-100 rounded-xl shadow-lg flex items-center justify-center">
            
            {/* Sacred Symbol - Stylized B */}
            <div className="relative">
              {/* Letter B structure with spiritual touch */}
              <div className="w-16 h-20 relative">
                {/* Vertical line */}
                <div className="absolute left-0 top-0 w-2 h-20 bg-gradient-to-b from-orange-500 to-yellow-600 rounded-full"></div>
                
                {/* Top curve */}
                <div className="absolute left-3 top-1 w-10 h-8 border-4 border-orange-500 rounded-r-full border-l-0"></div>
                
                {/* Bottom curve */}
                <div className="absolute left-3 top-11 w-12 h-8 border-4 border-orange-500 rounded-r-full border-l-0"></div>
                
                {/* Divine spark */}
                <div className="absolute -top-2 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Corner elements - Matrix style */}
            <div className="absolute top-2 left-2 w-1 h-4 bg-gray-300 rounded"></div>
            <div className="absolute top-2 right-2 w-4 h-1 bg-gray-300 rounded"></div>
            <div className="absolute bottom-2 left-2 w-4 h-1 bg-gray-300 rounded"></div>
            <div className="absolute bottom-2 right-2 w-1 h-4 bg-gray-300 rounded"></div>
          </div>

          {/* Digital Matrix Elements */}
          <div className="absolute inset-0">
            {/* Matrix-style connection lines */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `rotate(${i * 45}deg) translateY(-40px)`,
                  transformOrigin: 'bottom center',
                }}
              />
            ))}
          </div>

          {/* Floating Data Points */}
          <div className="absolute top-8 right-8">
            <div className="flex flex-col space-y-1">
              <div className="w-8 h-1 bg-gray-400 rounded opacity-60"></div>
              <div className="w-6 h-1 bg-gray-400 rounded opacity-60"></div>
              <div className="w-4 h-1 bg-gray-400 rounded opacity-60"></div>
            </div>
          </div>

          <div className="absolute bottom-8 left-8">
            <div className="flex space-x-1">
              <div className="w-1 h-8 bg-gray-400 rounded opacity-60"></div>
              <div className="w-1 h-6 bg-gray-400 rounded opacity-60"></div>
              <div className="w-1 h-4 bg-gray-400 rounded opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Company Name */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="text-center">
            <div className="text-xl font-bold text-gray-800 tracking-wider">
              <span className="text-gray-400">BALA</span>
              <span className="text-gray-700">TRIX</span>
            </div>
            
          </div>
        </div>
      </div>

      {/* Background subtle elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, rgba(156, 163, 175, 0.1) 1px, transparent 1px),
                           linear-gradient(rgba(156, 163, 175, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
        
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gray-200 rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gray-200 rounded-bl-3xl"></div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50/50 to-gray-50 flex items-center justify-center overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Subtle radial gradient accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-gray-100/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Time-based greeting */}
            <div className="text-sm font-medium text-gray-500 opacity-0 animate-fade-in-up" style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              {currentTime} 👋
            </div>

            {/* Main Headline with typing effect */}
            <div className="space-y-6">
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-[-0.02em] opacity-0 animate-fade-in-up min-h-[180px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[280px] xl:min-h-[320px] w-full max-w-4xl"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  animationDelay: '0.3s',
                  animationFillMode: 'forwards'
                }}
              >
                {typedText}
                <span className="animate-pulse text-gray-400">|</span>
              </h1>

              {/* Supporting subtext */}
              <p 
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg opacity-0 animate-fade-in-up"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  animationDelay: '0.5s',
                  animationFillMode: 'forwards'
                }}
              >
                Get affordable toll-free numbers for US & Canada with cloud-based business communication solutions. Fully customizable, easy to set up, and backed by 24/7 support.
              </p>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              <Link 
                to="/contact"
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-xl text-sm sm:text-base touch-manipulation inline-block text-center"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Get Your Numbers Now
              </Link>
              <Link 
                to="/pricing"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-px text-sm sm:text-base touch-manipulation inline-block text-center"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                View Pricing
              </Link>
            </div>

           
            {/* Trust Bar */}
            <div className="pt-6 sm:pt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
              <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm font-medium text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-sm sm:text-lg font-bold text-gray-800">US & Canada</span>
                  <span className="hidden sm:inline">Coverage</span>
                  <span className="sm:hidden">Coverage</span>
                </div>
                <div className="w-px h-4 bg-gray-300" />
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-sm sm:text-lg font-bold text-gray-800">99.9%</span>
                  <span>Uptime</span>
                </div>
                <div className="w-px h-4 bg-gray-300" />
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-sm sm:text-lg font-bold text-gray-800">24/7</span>
                  <span>Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block opacity-0 animate-fade-in-right" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
            <div className="relative h-96">
              <BalatrixLogo />
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;