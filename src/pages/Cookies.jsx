import React from 'react';
import SEO from '../components/seo/SEO';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <SEO 
        title="Refund & Cancellation Policy" 
        description="Read the Balatrix Refund & Cancellation Policy to understand terms governing our VoIP and PBX services." 
        canonicalUrl="https://balatrix.com/refund"
      />
      {/* Hero Section */}
      <section className="min-h-[45vh] bg-transparent flex items-center justify-center overflow-hidden relative border-b border-white/5 pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="telecom-grid opacity-[0.2]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Please read our refund and cancellation policy carefully before purchasing or recharging your Balatrix account.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
                <p className="text-gray-600">
                  At <strong>Balatrix</strong>, we are committed to providing high-quality VoIP and PBX communication services for businesses and professionals.
                  Before any purchase or recharge, customers are offered a <strong>free demo account</strong> to test our platform and features.
                  Because of this, all subsequent paid services and wallet recharges are considered <strong>final and non-refundable</strong> once activated.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Activation and Usage</h2>
                <p className="text-gray-600">
                  Upon activation of your paid account, DID number, or PBX service, setup resources (licenses, SIP routing, and server capacity) are permanently allocated.
                  Therefore, <strong>no refunds</strong> are provided once your account or number has been activated, even if the service is later unused or cancelled.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Wallet Recharge & Balance</h2>
                <p className="text-gray-600 mb-4">
                  Wallet recharges are <strong>non-refundable</strong>, as they are treated as prepaid credits for call usage and related services.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Customers may use their remaining balance until it is fully consumed or until the account is cancelled.</li>
                  <li>Balatrix does not refund unused wallet balance in case of account closure, cancellation, or inactivity.</li>
                  <li>Remaining balances may be transferred to another active Balatrix account upon written request, subject to verification and approval.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Duplicate Payments or Failed Transactions</h2>
                <p className="text-gray-600 mb-4">
                  Refunds will be processed <strong>only</strong> in the following exceptional cases:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Duplicate Payment:</strong> If a customer is accidentally charged twice for the same transaction.</li>
                  <li><strong>Activation Failure:</strong> If Balatrix fails to activate a purchased number or service and cannot provide an alternative within 7 working days.</li>
                </ul>
                <p className="text-gray-600">
                  Verified refunds will be credited back to the original payment method within <strong>7–10 working days</strong>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cancellation Policy</h2>
                <p className="text-gray-600">
                  Customers may cancel their PBX or DID services at any time by contacting
                  <a href="mailto:support@balatrix.com" className="text-blue-600 hover:text-blue-700"> support@balatrix.com</a>.
                  Cancellation stops future renewals or charges but does not entitle the customer to a refund for any previously paid period or unused balance.
                  All services remain active until the end of the current billing cycle.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Support</h2>
                <p className="text-gray-600">
                  For refund or cancellation queries, please contact:<br />
                  📧 <a href="mailto:support@balatrix.com" className="text-blue-600 hover:text-blue-700">support@balatrix.com</a><br />
                  🌐 <a href="https://www.balatrix.com" className="text-blue-600 hover:text-blue-700">www.balatrix.com</a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Policy Updates</h2>
                <p className="text-gray-600">
                  Balatrix reserves the right to amend this policy at any time. The latest version will always be available on our official website.
                </p>
              </div>

              <div className="border-t pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Free demo available before payment.</li>
                  <li>No refunds after activation.</li>
                  <li>Wallet recharge is non-refundable but transferable.</li>
                  <li>Refunds only for duplicate or failed transactions.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
