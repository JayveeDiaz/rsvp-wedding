import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Enables static HTML export
  basePath: isProd ? "/rsvp-wedding" : "",
  assetPrefix: isProd ? "/rsvp-wedding/" : "",
  reactStrictMode: true,
  images: {
    unoptimized: true // Required for static export to work with Next.js images
  }
};

export default nextConfig;
