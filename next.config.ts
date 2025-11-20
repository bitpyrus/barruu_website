import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://barruu-store-api-production.up.railway.app/api/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        // This ensures that .apk files are served with the correct content type
        source: '/:path*.apk',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/vnd.android.package-archive',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '**',
      },
    ],
  },
  // Specify the workspace root to silence turbopack warning about multiple lockfiles
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
