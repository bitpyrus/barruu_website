'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is Barruu?',
    answer: 'Barruu is a powerful Android app for creating, editing, and sharing .bipy files - interactive documents that combine text, code, media, and more. It also features a social platform where you can share your creations and discover content from other creators.',
  },
  {
    question: 'What are .bipy files?',
    answer: '.bipy files are a special document format that supports rich media, interactive code blocks, widgets, and social sharing. They\'re perfect for educators, developers, and content creators who want to create engaging, interactive content.',
  },
  {
    question: 'Is Barruu free to use?',
    answer: 'Yes! Barruu is free to download and use. You can create, edit, and share unlimited .bipy files with our community.',
  },
  {
    question: 'Which platforms does Barruu support?',
    answer: 'Currently, Barruu is available for Android devices. You can download the APK directly from our website. iOS support is planned for future releases.',
  },
  {
    question: 'How do I install the APK?',
    answer: 'Download the APK from our website, then enable "Install from unknown sources" in your Android device settings. Open the APK file to install. Don\'t worry - our app is completely safe!',
  },
  {
    question: 'Can I share my .bipy files with others?',
    answer: 'Absolutely! Barruu has built-in social features. You can share your .bipy files to the community feed, follow other creators, and engage with their content. You can also export and share files directly.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Barruu
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 text-lg pr-8">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-green-600 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#download"
            className="inline-block text-green-600 font-semibold hover:text-green-700 transition-colors"
          >
            Download Barruu and try it yourself →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
