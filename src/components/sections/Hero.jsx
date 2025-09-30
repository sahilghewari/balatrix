import React, { useState, useEffect } from 'react';

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

  // Abstract network visualization
  const NetworkVisualization = () => (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main network nodes */}
      <div className="relative">
        {/* Central node */}
        <div className="w-4 h-4 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        
        {/* Surrounding nodes with connecting lines */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45) * (Math.PI / 180);
          const radius = 80;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <div key={i}>
              {/* Connection line */}
              <div 
                className="absolute top-1/2 left-1/2 origin-left bg-gradient-to-r from-gray-300 to-transparent h-px transform -translate-y-1/2"
                style={{
                  width: `${radius}px`,
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                  animation: `pulse 3s ease-in-out infinite ${i * 0.3}s`
                }}
              />
              {/* Node */}
              <div 
                className="w-2 h-2 bg-gray-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                style={{
                  transform: `translate(${x - 4}px, ${y - 4}px)`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            </div>
          );
        })}
      </div>
      
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0}>
          <div className="absolute top-20 right-20 w-32 h-32 border border-gray-200 rounded-lg transform rotate-12 opacity-30" />
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-32 right-40 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-40" />
        </FloatingElement>
        <FloatingElement delay={4}>
          <div className="absolute top-40 right-60 w-16 h-16 border-2 border-gray-300 rounded-full opacity-20" />
        </FloatingElement>
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
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-[-0.02em] opacity-0 animate-fade-in-up min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[200px]"
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
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-xl text-sm sm:text-base touch-manipulation"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Get Your Numbers Now
              </button>
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-px text-sm sm:text-base touch-manipulation"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                View Pricing
              </button>
            </div>

            {/* Talk to Sales micro CTA */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <a href="tel:+1-800-BALATRIX" className="text-sm font-medium text-gray-700 hover:text-gray-900 underline transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Talk to Sales: +1-800-BALATRIX
              </a>
            </div>

            {/* Trust Bar */}
            <div className="pt-6 sm:pt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-medium text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-lg font-bold text-gray-800 counter" data-target="50">0</span>
                  <span>K+ Numbers Delivered</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-gray-300" />
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-lg font-bold text-gray-800">US & Canada</span>
                  <span>Coverage</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-gray-300" />
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-lg font-bold text-gray-800">99.9%</span>
                  <span>Uptime</span>
                </div>
                <div className="hidden lg:block w-px h-4 bg-gray-300" />
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-lg font-bold text-gray-800">24/7</span>
                  <span>Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block opacity-0 animate-fade-in-right" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
            <div className="relative h-96">
              <NetworkVisualization />
            </div>
          </div>
        </div>

        {/* Optional client logos section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}>
          <div className="text-center">
            <p className="text-xs sm:text-sm font-medium text-gray-500 mb-6 sm:mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Trusted by growing businesses
            </p>
            <div className="flex justify-center items-center gap-6 sm:gap-8 lg:gap-12 opacity-40 hover:opacity-70 transition-opacity">
              {/* Placeholder for client logos */}
              <div className="text-gray-400 text-lg sm:text-xl lg:text-2xl font-bold">FORTUNE</div>
              <div className="text-gray-400 text-lg sm:text-xl lg:text-2xl font-bold">500</div>
              <div className="text-gray-400 text-lg sm:text-xl lg:text-2xl font-bold">COMPANIES</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;