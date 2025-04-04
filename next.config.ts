import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: Completely disables ESLint during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
