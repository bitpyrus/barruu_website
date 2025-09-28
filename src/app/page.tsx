import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Barruu - The Modern Document Editor for .bipy Files',
  description: 'Create, edit, and share rich documents with Barruu. The premier editor for .bipy files, combining text, code, media, and interactive elements in one powerful platform.',
};

// Define the data for the 2x2 grid of cards, with 3 images per card
const galleryCards = [
  {
    title: 'Text & Content',
    images: [
      { src: '/list_and_paragraph_block.jpg', alt: 'Paragraph and list blocks' },
      { src: '/light_list_and_paragraph_block.jpg', alt: 'Text blocks in light mode' },
      { src: '/qoute_block.jpg', alt: 'Quote block for citations' },
    ],
  },
  {
    title: 'Code & Math',
    images: [
      { src: '/code_block1.jpg', alt: 'Code block with syntax highlighting' },
      { src: '/dark_code_block.jpg', alt: 'Code block in dark mode' },
      { src: '/math_blocks_and_graph.jpg', alt: 'Math and graph blocks' },
    ],
  },
  {
    title: 'Interactive Blocks',
    images: [
      { src: '/question_block1.jpg', alt: 'Interactive question block' },
      { src: '/question_block2.jpg', alt: 'Multiple choice question block' },
      { src: '/check_box_blck.jpg', alt: 'Checkbox block for task lists' },
    ],
  },
  {
    title: 'Media & Customization',
    images: [
      { src: '/audio_and_table_block.jpg', alt: 'Audio and table blocks' },
      { src: '/theme_slections.jpg', alt: 'Theme selection options' },
      { src: '/light_code_block.jpg', alt: 'Code block in light mode' }, // Re-using an image to fill the grid
    ],
  },
];

export default function Home() {
  const apkUrl = '/barruu-app.apk';
  const sampleFileUrl = '/Rich Dad, Poor Dad Summary – Robert Kiyosaki Book.bipy';

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section with Video Background */}
      <section id="home" className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/13880528_3840_2160_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Your Ideas, Beautifully Organized</h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl">
            Barruu transforms how you create and share documents. Combine rich text, code, media, and interactive elements in one seamless .bipy file.
          </p>
          <div>
            <a
              href={apkUrl}
              download
              className="inline-block bg-green-500 text-white font-bold text-xl py-4 px-10 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Download for Android
            </a>
            <p className="mt-4 text-sm text-gray-300">
              You may need to enable &quot;Install from unknown sources&quot; in your device settings.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">Powerful Features for Modern Creators</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Everything you need to create stunning, interactive documents that bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {galleryCards.map((card) => (
              <div key={card.title} className="bg-white rounded-lg shadow-xl p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">{card.title}</h3>
                {/* Change to a horizontal flex row */}
                <div className="flex flex-row space-x-4 justify-center flex-grow items-center">
                  {card.images.map((image) => (
                    <div key={image.src} className="flex-1 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={800}
                        className="w-full h-auto object-contain bg-gray-100"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Document Section */}
      <section id="sample" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full inline-flex items-center">
                <svg className="w-3.5 h-3.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                INTERACTIVE DEMO
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              Experience the Power of <span className="relative whitespace-nowrap">.bipy
                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></span>
              </span>
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover how Barruu transforms <span className="font-medium text-gray-700">static documents</span> into <span className="font-medium text-gray-700">dynamic, interactive experiences</span> with our sample file.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-2 bg-gray-50 border-b border-gray-100 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-xs text-gray-500 ml-4">Rich_Dad_Poor_Dad_Summary.bipy</span>
                </div>
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/app_logo.png"
                      alt="Barruu Logo"
                      width={90}
                      height={90}
                      className="rounded-lg shadow-sm"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Rich Dad, Poor Dad</h3>
                  <p className="text-gray-600 mb-6">An interactive summary featuring key concepts, actionable insights, and practical exercises from Robert Kiyosaki's financial classic.</p>
                  <div className="space-y-4">
                    <a
                      href={sampleFileUrl}
                      download
                      className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                      Download Sample Document
                    </a>
                    <p className="text-sm text-gray-500">
                      Requires <span className="font-medium">Barruu for Android</span> to view interactive elements
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">What You'll Experience</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Interactive financial concepts with expandable details</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Embedded exercises to apply the lessons</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Key takeaways with interactive highlighting</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">How to Open</h3>
                  <ol className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="bg-gray-100 text-gray-700 font-mono text-sm px-2 py-1 rounded mr-3">1</span>
                      <span>Download the .bipy file to your Android device</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 text-gray-700 font-mono text-sm px-2 py-1 rounded mr-3">2</span>
                      <span>Install Barruu from the Google Play Store if you haven't already</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 text-gray-700 font-mono text-sm px-2 py-1 rounded mr-3">3</span>
                      <span>Open the file using the Barruu app</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is .bipy? Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full inline-flex items-center">
                <svg className="w-3.5 h-3.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                TECHNOLOGY
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The <span className="relative">.bipy File Format
                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></span>
              </span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed">
                A modern document format that combines <span className="font-medium text-gray-700">rich content</span>, <span className="font-medium text-gray-700">interactive elements</span>, and <span className="font-medium text-gray-700">real-time collaboration</span> in a single file.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">A New Standard for Interactive Documents</h3>
                <p className="text-gray-600 mb-6">
                  The .bipy format represents a significant leap forward in document technology, combining the familiarity of traditional documents with the power of modern web technologies. It's designed from the ground up to support rich media, interactive elements, and real-time collaboration.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Rich Media Integration</h4>
                      <p className="text-sm text-gray-600">Seamlessly embed videos, images, and interactive elements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Code Execution</h4>
                      <p className="text-sm text-gray-600">Run and test code snippets directly within your documents</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Cross-Platform</h4>
                      <p className="text-sm text-gray-600">View and edit on any device with consistent formatting</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-10 md:p-12 border-t md:border-t-0 md:border-l border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Ideal For</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                      <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Educational Content</h4>
                      <p className="text-gray-600 text-sm mt-1">Create interactive lessons with embedded quizzes, exercises, and immediate feedback.</p>
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
                      <h4 className="font-semibold text-gray-800">Technical Documentation</h4>
                      <p className="text-gray-600 text-sm mt-1">Document APIs and frameworks with runnable code examples and interactive demos.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                      <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Business Reports</h4>
                      <p className="text-gray-600 text-sm mt-1">Deliver dynamic reports with live data visualizations and interactive charts.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-sm text-blue-700 flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Barruu is the official editor for .bipy files, offering the most complete and optimized experience for creating and editing interactive documents.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="download" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Download Barruu today and experience the future of document creation.
          </p>
          <div>
            <a
              href={apkUrl}
              download
              className="inline-block bg-green-500 text-white font-bold text-xl py-4 px-10 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Download for Android
            </a>
            <p className="mt-4 text-sm text-gray-500">
              You may need to enable &quot;Install from unknown sources&quot; in your device settings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
