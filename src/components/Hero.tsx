'use client';

import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // Client-side check for Android user agent
    setIsAndroid(/Android/i.test(navigator.userAgent));
  }, []);

  const apkUrl = '/barruu-app.apk'; // The path to your APK in the public folder

  return (
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
        
        {isAndroid ? (
          <div>
            <a
              href={apkUrl}
              download
              className="inline-block bg-green-500 text-white font-bold text-xl py-4 px-10 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Download for Android
            </a>
            <p className="mt-4 text-sm text-gray-300">
              You may need to enable "Install from unknown sources" in your device settings.
            </p>
          </div>
        ) : (
          <div className="bg-gray-800 bg-opacity-70 p-4 rounded-lg">
            <p className="text-lg text-gray-200">This app can only be installed on Android devices.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
