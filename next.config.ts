import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  output: 'export', // Enabling export mode
  // output: 'export',
  // basePath: '/SPA',
  // assetPrefix: '/SPA/',
};

export default nextConfig;
