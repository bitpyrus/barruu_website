'use client';

import React from 'react';

const CTA = () => {
  const apkUrl = '/barruu-app.apk'; // The path to your APK in the public folder

  return (
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
  );
};

export default CTA;
