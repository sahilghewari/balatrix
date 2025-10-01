import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesOverview from '../components/sections/ServicesOverview';
import StatsSection from '../components/sections/StatsSection';
import PricingPlans from '../components/sections/PricingPlans';
import ContactCTA from '../components/sections/ContactCTA';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesOverview />
      {/* <StatsSection /> */}
    </div>
  );
};

export default Home;