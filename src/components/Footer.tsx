import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <Image src="/app_logo.png" alt="Barruu Logo" width={40} height={40} className="rounded-md" />
                            <span className="text-xl font-bold">Barruu</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                            Create, share, and explore dynamic .bipy documents with Barruu&apos;s vibrant community platform.
                        </p>
                        <p className="text-gray-500 text-xs">
                            &copy; {new Date().getFullYear()} Barruu. All rights reserved.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="#home" className="hover:text-green-400 transition-colors">Home</Link></li>
                            <li><Link href="#features" className="hover:text-green-400 transition-colors">Features</Link></li>
                            <li><Link href="#sample" className="hover:text-green-400 transition-colors">Sample</Link></li>
                            <li><Link href="#bipy" className="hover:text-green-400 transition-colors">.bipy Format</Link></li>
                            <li><Link href="#download" className="hover:text-green-400 transition-colors">Download</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-gray-400 text-sm mb-6">
                            <li><Link href="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-green-400 transition-colors">Terms of Service</Link></li>
                        </ul>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4 mb-6">
                            <a 
                                href="https://twitter.com" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-400 transition-colors"
                                aria-label="Twitter"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a 
                                href="https://linkedin.com" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-400 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a 
                                href="https://github.com" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-400 transition-colors"
                                aria-label="GitHub"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        <div className="text-gray-400 text-sm">
                            <p className="mb-1">Made with ❤️ for creators</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
