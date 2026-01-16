import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net'
      }
    ]
  }
  , turbopack: {
    root: __dirname ,
  },
};

const withNextIntl = createNextIntlPlugin();

// export default nextConfig;
export default withNextIntl(nextConfig);
