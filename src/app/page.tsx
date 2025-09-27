'use client'; // Required for client-side user agent detection

import Image from 'next/image';
import React from 'react';

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
      { src: '/light_code_block.jpg', alt: 'Code block with syntax highlighting' },
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

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section with Video Background */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
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
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">The Premier Editor for .bipy Files</h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8">
            Craft, organize, and share your ideas with a powerful, block-based editor designed for the .bipy format.
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

      {/* New 2x2 Image Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">A Block for Every Idea</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Barruu provides a comprehensive set of blocks to bring your documents to life. See them in action below.
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

      {/* Final CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Revolutionize Your Documents?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Download the Barruu app today and experience the power of block-based editing for your .bipy files.
          </p>
          <div>
            <a
              href={apkUrl}
              download
              className="inline-block bg-green-500 text-white font-bold text-xl py-4 px-10 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Get the App
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
