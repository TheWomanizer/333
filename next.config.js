/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/333' : '',
  assetPrefix: isProd ? '/333/' : '',
};

module.exports = nextConfig;
