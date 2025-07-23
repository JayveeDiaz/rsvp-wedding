import type { NextConfig } from "next";

// next.config.js
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/rsvp-wedding' : '',
  assetPrefix: isProd ? '/rsvp-wedding/' : '',
  reactStrictMode: true
};

export default nextConfig;
