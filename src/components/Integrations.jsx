
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Lock, Globe, Code } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    { name: 'Salesforce', logo: '🔷' },
    { name: 'SAP', logo: '💼' },
    { name: 'Workday', logo: '⚙️' },
    { name: 'Microsoft', logo: '🪟' },
    { name: 'Google', logo: '🔍' },
    { name: 'Slack', logo: '💬' },
    { name: 'Zoom', logo: '📹' },
    { name: 'LinkedIn', logo: '💼' },
    { name: 'DocuSign', logo: '📝' },
    { name: 'QuickBooks', logo: '📊' },
    { name: 'Stripe', logo: '💳' },
    { name: 'Azure', logo: '☁️' },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Seamless Connectivity',
      description: 'Connect your existing tools in minutes with our pre-built integrations and webhooks.',
    },
    {
      icon: Lock,
      title: 'Secure Data Transfer',
      description: 'Enterprise-grade encryption ensures your data is protected during every integration.',
    },
    {
      icon: Globe,
      title: 'Global Ecosystem',
      description: 'Access hundreds of integrations across productivity, finance, and business tools.',
    },
    {
      icon: Code,
      title: 'Developer-Friendly API',
      description: 'Build custom integrations with our comprehensive REST API and extensive documentation.',
    },
  ];

  return (
    <section id="integrations" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal font-semibold text-sm uppercase tracking-wide">
            Integrations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-4">
            Connect Your Entire HCM Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seamlessly integrate with the tools your team already uses
          </p>
        </motion.div>

        {/* Integration Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-3 border border-gray-100 group cursor-pointer"
            >
              <div className="text-5xl group-hover:scale-110 transition-transform">
                {integration.logo}
              </div>
              <span className="text-sm font-medium text-navy text-center">
                {integration.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal to-teal-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* API Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-navy to-navy-light rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code size={40} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Powerful API for Custom Integrations
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Build exactly what you need with our comprehensive REST API. Access all platform features, automate workflows, and create custom integrations tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-teal hover:bg-teal-dark rounded-xl font-semibold transition-colors"
              >
                View API Documentation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-semibold border border-white/30 transition-colors"
              >
                Get API Key
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
