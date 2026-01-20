import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    taint: true,
    cacheComponents: true,
  },
};

export default nextConfig;
