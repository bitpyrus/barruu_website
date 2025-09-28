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
  title: 'Barruu - Craft Beautiful .bipy Documents',
  description: 'Unleash your creativity with Barruu, the premier editor for .bipy files. Create rich, interactive documents with text, code, media, and more.',
  icons: {
    icon: '/app_logo.png',
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