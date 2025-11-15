'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import HowItWorks from '@/components/HowItWorks';
import ScrollToTop from '@/components/ScrollToTop';

// Note: metadata export removed as this is now a client component

// Updated gallery cards with modernized descriptions reflecting new features
const galleryCards = [
  {
    title: 'Dynamic Document Creation',
    description: 'Craft rich .bipy documents with text, code, media, and interactive widgets.',
    images: [
      { src: '/image/Screenshot_20251115_154239.png', alt: 'Document editor interface' },
      { src: '/image/Screenshot_20251115_154248.png', alt: 'Interactive question block' },
    ],
  },
  {
    title: 'Social Feed & Engagement',
    description: 'Share your .bipy creations, follow creators, and engage with dynamic content.',
    images: [
      { src: '/image/Screenshot_20251115_154304.png', alt: 'Social feed showcasing .bipy posts' },
      { src: '/image/Screenshot_20251115_154323.png', alt: 'Interactive feed with user engagement' },
    ],
  },
  {
    title: 'Explore & Discover',
    description: 'Browse trending .bipy documents and discover inspiring content from the community.',
    images: [
      { src: '/image/Screenshot_20251115_154347.png', alt: 'Explore page with curated .bipy files' },
      { src: '/image/Screenshot_20251115_154411.png', alt: 'Reading view of a .bipy document' },
    ],
  },
  {
    title: 'Rich Media & Customization',
    description: 'Enhance your documents with videos, audio, tables, and customizable themes.',
    images: [
      { src: '/image/Screenshot_20251115_154426.png', alt: 'Document with embedded video' },
      { src: '/image/Screenshot_20251115_154438.png', alt: 'Code block with syntax highlighting' },
    ],
  },
];

export default function Home() {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.bitpyrus.barruu';
  const sampleFileUrl = '/Survival Guide in the age of AI.bipy';

  return (
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero Section with Enhanced Video Background */}
        <section id="home" className="relative h-[70vh] md:h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
          <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
          >
            <source src="/13880528_3840_2160_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Create, Share, and Connect with Barruu
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Barruu is your platform for crafting interactive .bipy documents, sharing them with the world, and exploring a vibrant community of creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get it on Google Play
              </a>
              <a
                  href={sampleFileUrl}
                  download
                  className="inline-block bg-transparent border-2 border-white text-white font-semibold text-lg py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
              >
                Try a Sample .bipy
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-200">
              Enable “Install from unknown sources” in your device settings if needed.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Unleash Your Creativity</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                Barruu combines powerful document creation with social interaction for a seamless creative experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryCards.map((card, index) => (
                  <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">{card.title}</h3>
                    <p className="text-gray-600 text-center mb-6">{card.description}</p>
                    <div className="flex flex-row space-x-4 justify-center flex-grow items-center">
                      {card.images.map((image) => (
                          <div key={image.src} className="flex-1 rounded-lg overflow-hidden shadow-md">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={400}
                                height={800}
                                className="w-full h-auto object-contain bg-gray-100 hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                      ))}
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Document Section */}
        <section id="sample" className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full inline-flex items-center">
                  <svg className="w-3.5 h-3.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TRY IT OUT
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Experience the Power of <span className="relative">.bipy
                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></span>
              </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Dive into a sample .bipy document and see how Barruu blends creativity with interactivity.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="p-3 bg-gray-50 border-b border-gray-100 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-xs text-gray-500 ml-4">Survival_Guide_AI.bipy</span>
                  </div>
                  <div className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <Image
                          src="/app_logo.png"
                          alt="Barruu Logo"
                          width={80}
                          height={80}
                          className="rounded-lg shadow-sm"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">Survival Guide in the Age of AI</h3>
                    <p className="text-gray-600 mb-6">
                      Navigate the AI-powered future with practical strategies, essential skills, and insights for thriving in a world transformed by artificial intelligence.
                    </p>
                    <a
                        href={sampleFileUrl}
                        download
                        className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                      Download Sample
                    </a>
                    <p className="mt-4 text-sm text-gray-500">
                      Open with <span className="font-medium">Barruu for Android</span> to experience full interactivity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 space-y-6">
                <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">What’s Inside</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Interactive AI literacy lessons and practical tips
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Skills development for the AI era
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Shareable insights for community learning
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">How to Get Started</h3>
                  <ol className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="bg-gray-100 text-gray-700 font-mono text-sm px-2 py-1 rounded mr-3">1</span>
                      Download the .bipy sample to your Android device
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 text-gray-700 font-mono text-sm px-2 py-1 rounded mr-3">2</span>
                      Install Barruu from our website or APK
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 text-gray-700 font-mono text-sm px-2 py-1 rounded mr-3">3</span>
                      Open the file in Barruu and share it with the community
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is .bipy? Section */}
        <section id="bipy" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full inline-flex items-center">
                  <svg className="w-3.5 h-3.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  OUR TECHNOLOGY
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet the <span className="relative">.bipy Format
                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></span>
              </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The .bipy format powers Barruu’s ecosystem, enabling rich, interactive, and shareable documents for creators and communities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="grid md:grid-cols-2">
                <div className="p-10 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">A New Way to Create and Share</h3>
                  <p className="text-gray-600 mb-6">
                    .bipy files blend rich media, interactivity, and social sharing, making your documents vibrant and collaborative.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-lg mr-4">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Rich Media</h4>
                        <p className="text-sm text-gray-600">Embed videos, images, and interactive elements effortlessly.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-lg mr-4">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Interactive Code</h4>
                        <p className="text-sm text-gray-600">Run and share code snippets within your documents.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-lg mr-4">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Social Integration</h4>
                        <p className="text-sm text-gray-600">Share and discover .bipy files in Barruu’s community.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-10 md:p-12 border-t md:border-t-0 md:border-l border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Perfect For</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                        <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Educators</h4>
                        <p className="text-sm text-gray-600">Create and share interactive lessons with the community.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Developers</h4>
                        <p className="text-sm text-gray-600">Document APIs with live code and share with peers.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                        <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Professionals</h4>
                        <p className="text-sm text-gray-600">Build and share reports with live data and charts.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-700 flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Barruu is your gateway to creating, sharing, and exploring .bipy content with a global community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <Stats />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

        {/* Final CTA Section */}
        <section id="download" className="bg-gradient-to-b from-gray-50 to-white py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join the Barruu Community Today
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Create, share, and explore interactive .bipy content with creators worldwide using Barruu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get it on Google Play
              </a>
              <a
                  href={sampleFileUrl}
                  download
                  className="inline-block bg-transparent border-2 border-gray-900 text-gray-900 font-semibold text-lg py-3 px-8 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                Download Sample
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Enable “Install from unknown sources” in your device settings if needed.
            </p>
          </div>
        </section>
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
  );
}