import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Enable static export for GitHub Pages
  basePath: isProd ? "/rsvp-wedding" : "", // Replace with your actual repo name
  assetPrefix: isProd ? "/rsvp-wedding/" : "", // Same here
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for export mode
  },
};

export default nextConfig;
