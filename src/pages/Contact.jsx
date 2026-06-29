import React, { useState, useEffect, useRef } from 'react';
import SEO from '../components/seo/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);

  // Scroll to contact form function
  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle anchor scrolling when page loads
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact-form') {
      setTimeout(() => {
        scrollToContactForm();
      }, 100);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      
      // Sync lead details to Zoho SalesIQ if active in browser
      if (window.$zoho && window.$zoho.salesiq) {
        try {
          window.$zoho.salesiq.visitor.name(formData.firstName + ' ' + formData.lastName);
          window.$zoho.salesiq.visitor.email(formData.email);
          window.$zoho.salesiq.visitor.contactnumber(formData.phone);
          
          const notes = `Contact Page Submission. Company: ${formData.company || 'N/A'}, Subject: ${formData.subject}, Message: ${formData.message}`;
          window.$zoho.salesiq.visitor.question(notes);
        } catch (err) {
          console.warn('Zoho SalesIQ sync failed:', err);
        }
      }
      
      setSubmitStatus('success');
      
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          subject: 'general',
          message: ''
        });
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      title: 'Sales & Support',
      description: 'Talk to our toll-free number experts',
      contact: '+1 (844) 225-2435',
      subtext: 'Mon-Fri 8AM-8PM EST, 24/7 for existing customers',
      action: 'Call Now'
    },
    {
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      title: 'Live Chat Support',
      description: 'Instant help when you need it',
      contact: 'Chat with us now',
      subtext: 'Available Mon-Fri 8AM-8PM EST',
      action: 'Start Chat'
    }
  ];

  const officeLocations = [
    {
      city: 'Brampton',
      country: 'Canada',
      address: '38 Keppel Cir, Brampton, ON L7A 0B6, Canada',
      phone: '+1 (905) 495-2435',
      type: 'Headquarters',
      flag: '🇨🇦'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '45 Finsbury Square, London EC2A 1PX',
      phone: '+44 20 7123 2435',
      type: 'European Operations',
      flag: '🇬🇧'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '1 Marina Boulevard, Singapore 018989',
      phone: '+65 6808 2435',
      type: 'Asia-Pacific Hub',
      flag: '🇸🇬'
    }
  ];

  const departments = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales & Pricing' },
    { value: 'support', label: 'Technical Support' },
    { value: 'billing', label: 'Billing & Accounts' },
    { value: 'partnerships', label: 'Partnerships' },
    { value: 'careers', label: 'Careers' }
  ];

  const faqData = [
    {
      question: 'How quickly will I receive a response?',
      answer: 'Sales inquiries receive responses within 2 hours during business hours. Technical support varies by plan level.'
    },
    {
      question: 'Can I schedule a demo?',
      answer: 'Yes! Contact our sales team to schedule a personalized demo of our platform and discuss your specific requirements.'
    },
    {
      question: 'Where can I find compliance info?',
      answer: 'Our legal and regulatory compliance details are listed under our Privacy Policy. For specific inquiries, select Partnerships.'
    }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Balatrix. Contact our sales and support teams for toll-free numbers,Hosted PBX pricing, or platform custom setups." 
        canonicalUrl="https://balatrix.com/contact"
        keywords="contact balatrix, toll free support, voip customer service, wholesale telecom sales"
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
                <span>Contact Channels 📞</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                Connect With<br />Our<br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experts</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-full lg:max-w-xl">
                Need high-volume trunking support or have custom reseller PBX requirements? Our team is available 24/7 to design the perfect cloud voice routing blueprint for your teams.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button onClick={scrollToContactForm} className="btn btn-primary text-base px-8 py-4">
                  Send Message
                </button>
                <a href="tel:+18442252435" className="btn btn-secondary text-base px-8 py-4 text-center">
                  Call Sales
                </a>
              </div>
            </div>

            {/* Desktop Visual Element */}
            <div className="hidden lg:block">
              <div className="relative h-80 xl:h-96 flex items-center justify-center">
                <div className="glass-card p-12 rounded-3xl border-white/5 max-w-sm w-full text-center relative overflow-hidden bg-slate-900/50">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -z-10"></div>
                  <div className="text-6xl mb-6">📞</div>
                  <div className="text-2xl font-bold text-white mb-3">Get In Touch</div>
                  <div className="text-sm text-gray-400 mb-8 font-medium">
                    Multiple ways to connect with our expert support team
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-300 font-bold bg-white/5 py-3 rounded-xl border border-white/5">
                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>24/7 availability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section ref={sectionRef} className="relative py-24 bg-transparent border-t border-white/5 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">
              METHODS
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Choose Your Preferred <em>Contact Method</em>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get the support you need, when you need it. Multiple ways to connect with our expert team.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-24">
            {contactMethods.map((method, index) => (
              <div key={index} className="group glass-card rounded-3xl p-8 border-white/5 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-blue-500/10 text-blue-400 border border-blue-500/15 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={method.icon} />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 mb-6 font-medium text-sm">
                    {method.description}
                  </p>

                  <div className="space-y-3">
                    <div className="text-2xl font-extrabold text-blue-400">
                      {method.contact}
                    </div>
                    <div className="text-xs font-semibold text-gray-500 tracking-wider">
                      {method.subtext}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <button className="w-full btn btn-primary py-3.5">
                    {method.action}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form and Office Info */}
          <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-12 mb-24">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-3xl p-8 lg:p-12 border border-white/5 bg-slate-900/40">
                <div className="relative z-10">
                  <div className="mb-10 flex items-center space-x-4">
                    <div className="w-14 h-14 bg-blue-500/10 text-blue-400 border border-blue-500/15 rounded-2xl flex items-center justify-center shadow-sm">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-1">Send Us a Message</h3>
                      <p className="text-xs text-gray-400">Fill in the fields below and we'll get back to you shortly.</p>
                    </div>
                  </div>

                  {submitStatus === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.25)] animate-bounce">
                        <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-white">Message Transmitted!</h4>
                      <p className="text-sm text-gray-400 max-w-sm">We've received your inquiry. A representative will contact you within 2 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Michael"
                            className="w-full bg-slate-950/40 border border-white/5 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Rodriguez"
                            className="w-full bg-slate-950/40 border border-white/5 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="mrodriguez@company.com"
                            className="w-full bg-slate-950/40 border border-white/5 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 019-2435"
                            className="w-full bg-slate-950/40 border border-white/5 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Company Name</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Acme Corp"
                            className="w-full bg-slate-950/40 border border-white/5 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Department</label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full bg-slate-950/40 border border-white/5 text-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25"
                          >
                            {departments.map((dept) => (
                              <option key={dept.value} value={dept.value} className="bg-[#080b16]">{dept.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message Description</label>
                        <textarea
                          name="message"
                          required
                          rows="5"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="How can our technical support or wholesales trunk team assist you today? Please include details."
                          className="w-full bg-slate-950/40 border border-white/5 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 resize-none"
                        />
                      </div>

                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary w-full py-4 text-center disabled:opacity-50"
                        >
                          {isSubmitting ? 'Transmitting Data...' : 'Transmit Message'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Office Locations</h3>
              {officeLocations.map((office, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-white text-base">
                        {office.city} {office.flag}
                      </h4>
                      <span className="text-[10px] font-bold bg-blue-950/40 text-blue-300 border border-blue-500/15 px-2 py-0.5 rounded-full">
                        {office.type}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">
                      {office.address}
                    </p>
                  </div>
                  <div className="border-t border-white/5 pt-4 flex items-center space-x-2 text-xs font-semibold text-blue-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{office.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="border-t border-white/5 pt-20 mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-sm text-gray-400">Quick answers to common questions about contacting our team</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-blue-500/10 transition-colors">
                  <h4 className="font-bold text-white text-base mb-2">{faq.question}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;