import React, { useRef } from 'react';
import SEO from '../components/seo/SEO';
import { generateOrganizationSchema } from '../utils/schemaGenerator';
import Hero from '../components/sections/Hero';
import TrustSection from '../components/sections/TrustSection';
import ProductVisuals from '../components/sections/ProductVisuals';
import FeaturesSection from '../components/sections/FeaturesSection';
import EnterpriseSection from '../components/sections/EnterpriseSection';
import IndustrySection from '../components/sections/IndustrySection';
import ContactCTA from '../components/sections/ContactCTA';
import SIPCommunicationVisualization from '../components/sections/SIPCommunicationVisualization';

const Home = () => {
  const pageRef = useRef(null);

  return (
    <div ref={pageRef} className="min-h-screen">
      <SEO
        title="Balatrix"
        description="Get professional toll-free numbers and cloud business communication starting at $9.99/month. Instant setup, reliable service."
        canonicalUrl="https://balatrix.com/"
        keywords="toll-free numbers, business phone numbers, cloud communication, VoIP, business phone system, US Canada toll-free"
        schema={generateOrganizationSchema()}
      />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 w-screen h-screen z-[20] overflow-hidden opacity-[0.55] mix-blend-screen sm:opacity-[0.75]">
        <SIPCommunicationVisualization background scrollTarget={pageRef} />
      </div>
      <Hero />
      <TrustSection />
      <ProductVisuals />
      <FeaturesSection />
      <EnterpriseSection />
      <IndustrySection />
      <ContactCTA />
    </div>
  );
};

export default Home;
