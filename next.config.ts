import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    gestureTransition: true,
    cacheComponents: true,
  },
};

export default nextConfig;
