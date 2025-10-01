import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-[50vh] bg-gradient-to-br from-white via-gray-50/50 to-gray-50 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our telecommunications services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By accessing and using Balatrix services, you accept and agree to be bound by the 
                  terms and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
                <p className="text-gray-600 mb-4">
                  Balatrix provides toll-free number services and business communication solutions.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Toll-free number provisioning and management</li>
                  <li>Call routing and forwarding services</li>
                  <li>Business communication tools and analytics</li>
                  <li>Customer support and technical assistance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
                <p className="text-gray-600 mb-4">You agree to:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Use our services in compliance with all applicable laws</li>
                  <li>Provide accurate and current information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Pay all fees and charges in a timely manner</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
                <p className="text-gray-600">
                  We strive to maintain 99.9% uptime for our services. However, we do not guarantee 
                  uninterrupted service and are not liable for temporary unavailability.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  For questions about these Terms of Service, contact us at{' '}
                  <a href="mailto:legal@balatrix.com" className="text-blue-600 hover:text-blue-700">
                    legal@balatrix.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;