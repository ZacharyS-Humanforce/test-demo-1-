
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      price: 2999,
      period: 'month',
      description: 'Perfect for growing businesses',
      features: [
        'Up to 500 employees',
        'Core HR management',
        'Time & attendance tracking',
        'Basic reporting',
        'Email support',
        'Mobile app access',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: 5999,
      period: 'month',
      description: 'Most popular for mid-size companies',
      features: [
        'Up to 2,000 employees',
        'Advanced HR analytics',
        'Performance management',
        'Custom workflows',
        'Priority support',
        'API access',
        'Advanced integrations',
        'Dedicated account manager',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited employees',
        'AI-powered insights',
        'Global payroll support',
        'Custom development',
        '24/7 premium support',
        'On-premise deployment option',
        'Advanced security features',
        'SLA guarantees',
      ],
      popular: false,
    },
  ];

  const comparisonFeatures = [
    { name: 'Employee Limit', starter: '500', professional: '2,000', enterprise: 'Unlimited' },
    { name: 'Time Tracking', starter: true, professional: true, enterprise: true },
    { name: 'Payroll Processing', starter: true, professional: true, enterprise: true },
    { name: 'Performance Management', starter: false, professional: true, enterprise: true },
    { name: 'Advanced Analytics', starter: false, professional: true, enterprise: true },
    { name: 'API Access', starter: false, professional: true, enterprise: true },
    { name: 'Custom Workflows', starter: false, professional: true, enterprise: true },
    { name: 'Dedicated Support', starter: false, professional: false, enterprise: true },
    { name: 'SLA Guarantee', starter: false, professional: false, enterprise: true },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
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
            Pricing Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-4">
            Choose the Perfect Plan for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Scale as you grow.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-teal shadow-2xl'
                  : 'border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-teal to-gold text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <Star size={16} fill="currentColor" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-navy mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  {typeof plan.price === 'number' ? (
                    <>
                      <span className="text-5xl font-bold text-navy">
                        ${plan.price.toLocaleString()}
                      </span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-5xl font-bold text-navy">{plan.price}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-teal rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-teal hover:bg-teal-dark text-white shadow-lg hover:shadow-xl'
                    : 'bg-white hover:bg-navy text-navy hover:text-white border-2 border-navy'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-navy mb-8 text-center">
            Detailed Feature Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-navy font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-navy font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 text-navy font-semibold">Professional</th>
                  <th className="text-center py-4 px-4 text-navy font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-white/50 transition-colors">
                    <td className="py-4 px-4 text-gray-700">{feature.name}</td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.starter === 'boolean' ? (
                        feature.starter ? (
                          <Check className="text-teal mx-auto" size={20} />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )
                      ) : (
                        <span className="text-gray-700">{feature.starter}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.professional === 'boolean' ? (
                        feature.professional ? (
                          <Check className="text-teal mx-auto" size={20} />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )
                      ) : (
                        <span className="text-gray-700">{feature.professional}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.enterprise === 'boolean' ? (
                        feature.enterprise ? (
                          <Check className="text-teal mx-auto" size={20} />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )
                      ) : (
                        <span className="text-gray-700">{feature.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
