
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "HumanForce has completely transformed how we manage our global workforce. The platform's intuitive design and powerful features have saved us countless hours and improved employee satisfaction across all our offices.",
      author: "Sarah Chen",
      role: "Chief People Officer",
      company: "TechVision Global",
      rating: 5,
    },
    {
      quote: "The analytics capabilities are game-changing. We now have real-time visibility into our HR metrics and can make data-driven decisions that directly impact our bottom line. Best investment we've made.",
      author: "Michael Rodriguez",
      role: "VP of Human Resources",
      company: "Innovation Labs",
      rating: 5,
    },
    {
      quote: "Implementation was seamless and the support team went above and beyond. Our employees love the mobile app, and we've seen a 40% reduction in HR administrative tasks. Highly recommend!",
      author: "Emily Thompson",
      role: "HR Director",
      company: "Growth Dynamics",
      rating: 5,
    },
    {
      quote: "From payroll to performance management, everything we need is in one place. The platform scales beautifully with our growing team and the integration capabilities are excellent.",
      author: "David Park",
      role: "Head of Operations",
      company: "Digital Ventures",
      rating: 5,
    },
    {
      quote: "The compliance features give us peace of mind, especially managing employees across multiple countries. The system keeps us updated with regulatory changes automatically.",
      author: "Lisa Anderson",
      role: "Global HR Manager",
      company: "Enterprise Solutions Inc",
      rating: 5,
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-navy via-navy-light to-navy">
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
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See what our customers have to say about transforming their HR operations
          </p>
        </motion.div>

        {/* Team Context Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
        >
          <img
            src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa"
            alt="Happy team collaboration"
            className="w-full h-64 md:h-96 object-cover"
          />
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-teal/50 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="text-teal opacity-50 group-hover:opacity-100 transition-opacity" size={40} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-200 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="border-t border-white/20 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal to-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-teal">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '98%', label: 'Customer Satisfaction' },
            { value: '10K+', label: 'Happy Customers' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
