import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Configure the Inter font with modern weights and CSS variable
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Barruu - Create, Share, and Connect with .bipy',
  description: 'Barruu is your all-in-one platform for creating, sharing, and exploring dynamic .bipy documents. Combine rich text, code, media, and interactive elements, and connect with others through social feeds and discovery.',
  icons: {
    icon: '/app_logo.png',
  },
  keywords: ['barruu', 'bipy', 'document editor', 'android app', 'interactive documents', 'code editor', 'social platform'],
  openGraph: {
    title: 'Barruu - Create, Share, and Connect with .bipy',
    description: 'Craft interactive .bipy documents and share them with a vibrant community',
    images: ['/app_logo.png'],
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={`${inter.variable} bg-gray-50 font-sans antialiased`}>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      </body>
      </html>
  );
}