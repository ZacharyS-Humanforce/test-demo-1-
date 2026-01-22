
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturesShowcase from '@/components/FeaturesShowcase';
import CTASection from '@/components/CTASection';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Integrations from '@/components/Integrations';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <Helmet>
        <title>HumanForce - Transform Your Workforce Management | Enterprise HCM Platform</title>
        <meta 
          name="description" 
          content="Empower your organization with HumanForce - the leading enterprise HCM platform. Streamline HR operations, enhance employee engagement, and drive business success with comprehensive workforce management solutions." 
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Navigation />

        {/* Page Load Animation Wrapper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <Hero />

          {/* Features Section */}
          <FeaturesShowcase />

          {/* First CTA Section */}
          <CTASection variant="primary" />

          {/* Pricing Section */}
          <Pricing />

          {/* Testimonials Section */}
          <Testimonials />

          {/* Integrations Section */}
          <Integrations />

          {/* Second CTA Section */}
          <CTASection variant="secondary" />

          {/* Footer */}
          <Footer />
        </motion.div>

        {/* Toast Notifications */}
        <Toaster />
      </div>
    </>
  );
}

export default App;
