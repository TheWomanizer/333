// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
    basePath: "/333",
  };
  
  module.exports = nextConfig;
  