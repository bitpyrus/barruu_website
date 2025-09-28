
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <Image src="/app_logo.png" alt="Barruu Logo" width={40} height={40} className="rounded-md" />
                            <span className="text-xl font-bold">Barruu</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Empowering creators to build dynamic, interactive documents with the .bipy format.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="#home" className="hover:text-green-400 transition-colors">Home</Link></li>
                            <li><Link href="#features" className="hover:text-green-400 transition-colors">Features</Link></li>
                            <li><Link href="#sample" className="hover:text-green-400 transition-colors">Sample</Link></li>
                            <li><Link href="#bipy" className="hover:text-green-400 transition-colors">.bipy Format</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com" className="text-gray-400 hover:text-green-400 transition-colors">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com" className="text-gray-400 hover:text-green-400 transition-colors">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Barruu. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

