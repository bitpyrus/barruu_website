'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { label: 'Local Storage', description: 'All your data stays on your device', icon: '📱' },
  { label: 'No Tracking', description: 'Your privacy is protected', icon: '🔒' },
  { label: 'Offline First', description: 'Works without internet', icon: '✈️' },
  { label: 'Free to Use', description: 'No hidden costs', icon: '💚' },
];

const Stats = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Privacy Matters
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Barruu is built with privacy and simplicity at its core
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <div className="text-lg md:text-xl font-bold text-green-600 mb-2">
                {feature.label}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {feature.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
