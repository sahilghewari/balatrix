import React from 'react';
import SEO from '../components/seo/SEO';
import { generateOrganizationSchema } from '../utils/schemaGenerator';
import Hero from '../components/sections/Hero';
import TrustSection from '../components/sections/TrustSection';
import ProductVisuals from '../components/sections/ProductVisuals';
import FeaturesSection from '../components/sections/FeaturesSection';
import EnterpriseSection from '../components/sections/EnterpriseSection';
import IndustrySection from '../components/sections/IndustrySection';
import SocialProofSection from '../components/sections/SocialProofSection';
import ContactCTA from '../components/sections/ContactCTA';

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Balatrix" 
        description="Get professional toll-free numbers and cloud business communication starting at $9.99/month. Instant setup, reliable service." 
        canonicalUrl="https://balatrix.com/"
        keywords="toll-free numbers, business phone numbers, cloud communication, VoIP, business phone system, US Canada toll-free"
        schema={generateOrganizationSchema()}
      />
      <Hero />
      <TrustSection />
      <ProductVisuals />
      <FeaturesSection />
      <EnterpriseSection />
      <IndustrySection />
      <SocialProofSection />
      <ContactCTA />
    </div>
  );
};

export default Home;