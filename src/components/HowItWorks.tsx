'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Download Barruu',
    description: 'Get the app from our website and install it on your Android device.',
    icon: '📱',
    color: 'from-green-400 to-emerald-500',
  },
  {
    number: '02',
    title: 'Create Your First .bipy',
    description: 'Use our intuitive block-based editor to craft rich, interactive documents.',
    icon: '✍️',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    number: '03',
    title: 'Share with the Community',
    description: 'Publish your creations to the feed and connect with creators worldwide.',
    icon: '🌍',
    color: 'from-purple-400 to-pink-500',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-xs font-semibold px-4 py-2 rounded-full inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              SIMPLE & POWERFUL
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating and sharing interactive content has never been easier
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connecting line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 -z-10"></div>
              )}
              
              <div className="text-center">
                {/* Icon circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`mx-auto w-32 h-32 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-6xl mb-6 shadow-lg`}
                >
                  {step.icon}
                </motion.div>

                {/* Step number */}
                <div className="text-6xl font-bold text-gray-200 mb-2">{step.number}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#download"
            className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-lg py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Start Creating Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
