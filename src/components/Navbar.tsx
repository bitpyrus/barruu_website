'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const apkUrl = '/barruu-app.apk';

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/app_logo.png"
                alt="Barruu App Logo"
                width={50}
                height={50}
                className="rounded-md"
              />
              <span className="text-2xl font-bold text-gray-800">Barruu</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <a
              href={apkUrl}
              download
              className="ml-4 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600"
            >
              Download Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
