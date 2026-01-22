
import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, BarChart3, Heart, Calendar, Shield } from 'lucide-react';

const FeaturesShowcase = () => {
  const features = [
    {
      icon: Users,
      title: 'Talent Management',
      description: 'Attract, develop, and retain top talent with comprehensive recruitment and performance management tools.',
    },
    {
      icon: DollarSign,
      title: 'Payroll & Compensation',
      description: 'Streamline payroll processing with automated calculations, tax compliance, and flexible compensation structures.',
    },
    {
      icon: BarChart3,
      title: 'HR Analytics',
      description: 'Make data-driven decisions with powerful analytics and insights into your workforce metrics.',
    },
    {
      icon: Heart,
      title: 'Employee Engagement',
      description: 'Boost morale and productivity with engagement surveys, recognition programs, and feedback tools.',
    },
    {
      icon: Calendar,
      title: 'Workforce Planning',
      description: 'Optimize scheduling, time tracking, and resource allocation for maximum operational efficiency.',
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Stay compliant with regulations and protect sensitive data with enterprise-grade security.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="features" className="py-24 bg-gray-50">
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
            Platform Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-4">
            Everything You Need to Manage Your Workforce
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive HCM solutions designed to streamline operations and empower your team
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-teal to-teal-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="order-2 md:order-1 p-8 md:p-12">
            <span className="text-teal font-semibold text-sm uppercase tracking-wide">
              Advanced Capabilities
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
              Built for Enterprise Scale
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our platform is designed to handle the complexities of enterprise workforce management. From global payroll to advanced analytics, we provide the tools you need to succeed at scale.
            </p>
            <ul className="space-y-4">
              {[
                'Multi-country payroll support',
                'Real-time reporting and dashboards',
                'AI-powered workforce insights',
                'Mobile-first employee experience',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d"
              alt="Enterprise workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
