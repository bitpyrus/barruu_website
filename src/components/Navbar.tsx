'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const apkUrl = '/barruu-app.apk';

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'sample', 'bipy', 'download'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', href: '#home' },
    { name: 'Features', id: 'features', href: '#features' },
    { name: 'Sample', id: 'sample', href: '#sample' },
    { name: '.bipy', id: 'bipy', href: '#bipy' },
    { name: 'Download', id: 'download', href: '#download' },
  ];

  return (
      <>
        <nav
            className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 ${
                isScrolled ? 'shadow-lg' : 'shadow-sm'
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-3 group">
                  <Image
                      src="/app_logo.png"
                      alt="Barruu Logo"
                      width={40}
                      height={40}
                      className="rounded-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                  Barruu
                </span>
                </Link>
                <div className="hidden md:ml-10 md:flex md:space-x-8">
                  {navLinks.map((item) => (
                      <Link
                          key={item.name}
                          href={item.href}
                          className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                              activeSection === item.id
                                  ? 'text-green-600 border-b-2 border-green-500'
                                  : 'text-gray-600 hover:text-green-600 hover:border-b-2 hover:border-gray-200'
                          }`}
                      >
                        {item.name}
                      </Link>
                  ))}
                </div>
              </div>

              <div className="hidden md:block">
                <a
                    href={apkUrl}
                    download
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-full hover:from-green-600 hover:to-emerald-700 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Get the App
                </a>
              </div>

              <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  ) : (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navLinks.map((item) => (
                  <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                          activeSection === item.id
                              ? 'bg-green-50 text-green-600'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
              ))}
              <a
                  href={apkUrl}
                  download
                  className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-green-600 rounded-md hover:bg-green-700 shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
              >
                Get the App
              </a>
            </div>
          </div>
        </nav>
        <style jsx global>{`
          html {
            scroll-padding-top: 4rem;
          }
        `}</style>
      </>
  );
};
export default Navbar;
