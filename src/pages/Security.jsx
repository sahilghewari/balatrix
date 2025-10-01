import React from 'react';

const Security = () => {
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
            Security & Compliance
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your data security is our top priority. Learn about our comprehensive security measures.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Encryption</h2>
                <p className="text-gray-600 mb-4">
                  All data transmitted through our services is protected using industry-standard encryption.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>TLS 1.3 encryption for all data in transit</li>
                  <li>AES-256 encryption for data at rest</li>
                  <li>End-to-end encryption for sensitive communications</li>
                  <li>Regular security audits and penetration testing</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Security</h2>
                <p className="text-gray-600 mb-4">
                  Our telecommunications infrastructure is built with security as a fundamental principle.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>SOC 2 Type II certified data centers</li>
                  <li>24/7 network monitoring and threat detection</li>
                  <li>Redundant systems for maximum availability</li>
                  <li>Physical security controls and access restrictions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance Standards</h2>
                <p className="text-gray-600 mb-4">
                  We maintain compliance with industry regulations and standards.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>HIPAA compliance for healthcare communications</li>
                  <li>PCI DSS for payment processing</li>
                  <li>FCC regulations for telecommunications</li>
                  <li>GDPR compliance for data protection</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Incident Response</h2>
                <p className="text-gray-600">
                  We have established procedures for detecting, responding to, and recovering from 
                  security incidents to minimize any potential impact on our customers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Report Security Issues</h2>
                <p className="text-gray-600">
                  If you discover a security vulnerability, please report it immediately to{' '}
                  <a href="mailto:security@balatrix.com" className="text-blue-600 hover:text-blue-700">
                    security@balatrix.com
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

export default Security;