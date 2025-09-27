import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Barruu. All rights reserved.</p>
        <p className="mt-2 text-sm text-gray-400">
          A modern tool for modern creators.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
