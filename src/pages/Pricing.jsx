import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  // Scroll to pricing plans function
  const scrollToPricingPlans = () => {
    const pricingPlans = document.getElementById('pricing-plans');
    if (pricingPlans) {
      pricingPlans.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      savings: '17%',
      features: [
        '1 toll-free number included',
        '500 minutes/month',
        'Call forwarding',
        'Voicemail to email',
        'Basic analytics',
        'Mobile app access',
        'Email support',
        'US & Canada coverage'
      ],
      limitations: [
        'Single number only',
        'Basic features'
      ],
      popular: false,
      color: 'gray'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with higher volume needs',
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      savings: '17%',
      features: [
        '3 toll-free numbers included',
        '2,000 minutes/month',
        'Advanced call routing',
        'Auto-attendant & IVR',
        'Call analytics & reporting',
        'CRM integrations',
        'Priority support',
        'Mobile & desktop apps',
        'Conference calling',
        'Call recording'
      ],
      limitations: [
        'Up to 10 users'
      ],
      popular: true,
      color: 'blue'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations requiring maximum features',
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      savings: 'Volume discounts',
      features: [
        'Unlimited toll-free numbers',
        'Unlimited minutes',
        'Advanced features',
        '24/7 phone support',
        'Dedicated account manager',
        'Custom integrations',
        'White-label solutions',
        'SLA guarantees',
        'Priority number selection',
        'Custom reporting',
        'Multi-location support',
        'Advanced security'
      ],
      limitations: [],
      popular: false,
      color: 'indigo'
    }
  ];

  const addOns = [
    {
      name: 'Additional Numbers',
      description: 'Extra toll-free numbers beyond your plan limit',
      price: '4.99',
      unit: 'per number/month'
    },
    {
      name: 'Extra Minutes',
      description: 'Additional calling minutes when you exceed your plan',
      price: '0.02',
      unit: 'per minute'
    },
    {
      name: 'Vanity Numbers',
      description: 'Custom memorable toll-free numbers for your business',
      price: '29.99',
      unit: 'one-time setup'
    },
    {
      name: 'Advanced Analytics',
      description: 'Detailed call analytics and business intelligence reports',
      price: '14.99',
      unit: 'per month'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated accordingly.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'Overage charges apply at standard rates. We\'ll notify you before you reach your limits and can automatically upgrade your plan if needed.'
    },
    {
      question: 'Do you offer custom enterprise pricing?',
      answer: 'Yes, for organizations requiring more than 25,000 numbers or custom solutions, we offer tailored enterprise pricing. Contact our sales team for a quote.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our standard plans. Custom integrations and enterprise deployments may have one-time setup costs.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, ACH transfers, and wire transfers. Enterprise clients can also arrange for net payment terms.'
    },
    {
      question: 'Can I port my existing numbers?',
      answer: 'Yes, number porting is included in all plans. Our team handles the entire process to ensure minimal downtime.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen sm:min-h-[70vh] bg-gradient-to-br from-white via-gray-50/50 to-gray-50 flex items-center justify-center overflow-hidden relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-16 sm:w-32 h-16 sm:h-32 border border-gray-200 rounded-lg transform rotate-12 opacity-30 animate-float" />
          <div className="absolute bottom-16 sm:bottom-32 left-8 sm:left-40 w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-20 sm:top-40 left-4 sm:left-20 w-8 sm:w-16 h-8 sm:h-16 border-2 border-blue-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-24 xl:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 w-full overflow-hidden">
              {/* Small intro */}
              <div className="text-sm font-medium text-gray-500 opacity-0 animate-fade-in-up" style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Pricing Plans 💰
              </div>

              {/* Main Headline */}
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.2] sm:leading-[1.1] tracking-[-0.02em] opacity-0 animate-fade-in-up break-words"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  animationDelay: '0.3s',
                  animationFillMode: 'forwards',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word'
                }}
              >
                Simple,<br />Transparent<br />
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Pricing</span>
              </h1>

              {/* Supporting subtext */}
              <p 
                className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-full lg:max-w-lg opacity-0 animate-fade-in-up break-words"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  animationDelay: '0.5s',
                  animationFillMode: 'forwards',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word'
                }}
              >
                Choose the perfect plan for your business. All plans include our core features 
                with 99.9% uptime guarantee and expert support. No hidden fees, no surprises.
              </p>

              {/* Billing Toggle */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                    Monthly
                  </span>
                  <button
                    onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                    className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${
                        billingCycle === 'yearly' ? 'translate-x-6 bg-blue-600' : 'translate-x-1'
                      }`}
                    />
                  </button>
                  <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                    Annual
                  </span>
                </div>
                {billingCycle === 'yearly' && (
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium w-fit">
                    Save 17%
                  </span>
                )}
              </div>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                <Link 
                  to="/contact#contact-form"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-xl text-sm sm:text-base inline-block text-center"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Start Free Trial
                </Link>
                <button 
                  onClick={scrollToPricingPlans}
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-px text-sm sm:text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Compare Plans
                </button>
              </div>

              {/* Trust indicators */}
              <div className="pt-6 sm:pt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-medium text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-800">$9.99</span>
                    <span>Starting Price</span>
                  </div>
                  <div className="w-px h-3 sm:h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-800">No</span>
                    <span>Setup Fees</span>
                  </div>
                  <div className="w-px h-3 sm:h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-800">Cancel</span>
                    <span>Anytime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:block opacity-0 animate-fade-in-right" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
              <div className="relative h-80 xl:h-96 flex items-center justify-center">
                <div className="text-center space-y-4 lg:space-y-6">
                  <div className="text-5xl xl:text-6xl font-bold text-green-600">$9.99</div>
                  <div className="text-base xl:text-lg text-gray-900 font-semibold">Starting from</div>
                  <div className="text-sm xl:text-base text-gray-600 max-w-xs">
                    Professional toll-free numbers with all essential features included
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>No hidden fees</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Visual Element */}
            <div className="lg:hidden mt-6 sm:mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
              <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm text-center mx-4">
                <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-2">$9.99</div>
                <div className="text-sm sm:text-base text-gray-900 font-semibold mb-2">Starting from</div>
                <div className="text-xs sm:text-sm text-gray-600 mb-3">
                  Professional toll-free numbers with all essential features included
                </div>
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>No hidden fees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing-plans" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-blue-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              CHOOSE YOUR PLAN
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Find the Perfect Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              All plans include our core features with 99.9% uptime guarantee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl border-2 p-8 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2 ${
                  tier.popular
                    ? 'border-blue-500 shadow-xl ring-4 ring-blue-100'
                    : 'border-gray-200 shadow-lg hover:border-blue-300'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>{tier.name}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{tier.description}</p>
                  
                  <div className="mb-6">
                    {typeof tier.monthlyPrice === 'string' ? (
                      <div>
                        <span className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {tier.monthlyPrice}
                        </span>
                        <div className="text-sm text-gray-500 mt-2">{tier.savings}</div>
                      </div>
                    ) : (
                      <div>
                        <span className="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          ${billingCycle === 'monthly' ? tier.monthlyPrice : Math.floor(tier.yearlyPrice / 12)}
                        </span>
                        <span className="text-gray-600 ml-2 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                          /{billingCycle === 'monthly' ? 'month' : 'month'}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {billingCycle === 'yearly' && typeof tier.monthlyPrice !== 'string' && (
                    <div className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full inline-block font-medium mb-6">
                      Save {tier.savings} with annual billing
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Everything included:</h4>
                  <ul className="space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {tier.limitations.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Limitations:</h4>
                      <ul className="space-y-2">
                        {tier.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600 text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {tier.name === 'Enterprise' ? (
                  <Link
                    to="/contact#contact-form"
                    className="w-full py-3 px-6 rounded-lg font-semibold transition-colors bg-gray-100 text-gray-900 hover:bg-gray-200 inline-block text-center"
                  >
                    Contact Sales
                  </Link>
                ) : (
                  <Link
                    to="/contact#contact-form"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors inline-block text-center ${
                      tier.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-sm font-medium text-blue-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              ENHANCE YOUR PLAN
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Add-on Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Extend your plan with additional services tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">+</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>{addon.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{addon.description}</p>
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">${addon.price}</div>
                  <div className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>{addon.unit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Pricing;