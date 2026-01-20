import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    gestureTransition: true,
    cacheComponents: false,
  },
};

export default nextConfig;
